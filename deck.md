class: center, title-page

# The Fastify Workshop

---

class: branded

<!--
We optimize to get faster, because speed affects ROI

$3 billion industry loss:
  18% of shoppers abandon cart if page too slow
  Cart abandonment costs $18 billion per year
  18% of $18 billion is ~$3 billion

in 2012:
  Google:
  400ms search delay caused 8 million lost search results, which
  meant much lost advertising

  Amazon:
    1s slow down, est. cost 1.6 billion per year
-->

# Introduction: Why Optimize / 1

- Search Rankings, Page Abandonment, Resource Costs
- 47% of consumers expect a web page to load in 2 seconds or less.
- 40% of people abandon a website that takes more than 3 seconds to load.

---

class: branded

# Introduction: Why Optimize / 2

- A 1 second delay in page response can result in a 7% reduction in conversions.
  - For a site taking 100k per day, that's a loss of 2.5 million per year
- For the US poor perf is estimated to cost the e-commerce industry \$3 billion per year

---

class: branded

# Performance Workflow

1. Establish a **Baseline**
2. Find the **Bottleneck**
3. **Optimize**

---

class: branded

# Exercise: Slow REST

```sh
git clone https://github.com/nearform/slow-rest-api
```

1. Establish a **Baseline**
2. Find the **Bottleneck**
3. **Optimize**

---

class: branded

# Establish a baseline

```sh
autocannon -d 20 -c 100 http://localhost:3000/a &
autocannon -d 20 -c 100 http://localhost:3000/b &
autocannon -d 20 -c 100 http://localhost:3000/c
```

- soak testing routes in parallel may help to expose issues that occur from interactions between functions used between the routes
  - polymorphic de-opts for example
  - this doesn't work with `ab`, <small>(connection reset by peer)</small>

---

class: branded

# Establish a baseline

```sh
npm test
```

- For convenience we have added a task within `package.json`
- What's the baseline on your machine? Is this fast enough for you? What
  is our goal?

---

class: branded

# Find the Bottleneck

- How do we understand what is the problem?
- What do we do?

  1. Stare at the screen for a long time
  2. Walk the dog
  3. Use some tool to generate some visualizations

---

class: branded
name: empty-center-page

![](images/clinic.svg)

```sh
npm install clinic -g
```

---

class: branded

# Clinic Doctor

```sh
clinic doctor --on-port 'npm test' -- node index.js
```

1. Generate the doctor report
2. What is the problem?
3. What is the recommendation?

---

class: branded

# Call stack visualizations

- Visualizing call stacks and the time they take up on CPU can bottlenecks much easier to identify.
- Flame chart and flame graphs provide such visualizations, and they
  both sample the call stack at small interval.

---

class: branded

# Flame charts vs flame graphs

- A flame chart can be created through Chrome Inspector, in the
  "profile" tab. A flame chart plots the sample stack over time.
- A flame graph abstract time, and it make bottlenecks easier to
  identify. Some flame graphs tools (dtrace, perf) could capture
  things down to page fault, with some OS instrumentation.

---

class: branded

# Flame Chart

![](images/unhealthy-flamechart.png)

<figcaption>Unhealthy flame chart</figcaption>

---

class: branded

# Flame Chart

![](images/healthy-flamechart.png)

<figcaption>Healthy flame chart</figcaption>

---

name: using-inspector
class: branded

# Using the Inspector

```sh
node --inspect index.js
```

![](images/collect-cpu-profile.png)

```sh
npm test
```

---

class: branded

# Flame Graphs

- In Flame **Graphs** the X axis represents the combined percentage of time a function spends on the CPU

---

class: branded

<!--
`0x` is called this way because the biggest problem is resolving the JavaScript symbols, which function is what?
We combined different libraries to help translate v8 hex addresses to JavaScript names.
-->

# Flame Graph Tools

```sh
clinic flame -- node index.js
```

- `clinic flame` wraps `0x`, a tool that can be used to generate flamegraphs across operating systems.
- `clinic flame` can be used in development, as it introduces some
  overhead that make it less ideal to use it in production.
- `clinic flame`  supports both V8 sampling and kernel tracing (dtrace,
  perf), the latter require superuser access.

---

class: branded
name: clinic-flame-img

# Flame Graph (clinic flame)

![](images/unhealthy-flamegraph.png)

<figcaption>Typical Flamegraph</figcaption>

---

class: branded
name: clinic-flame-img-zoomed

# Flame Graph (clinic flame)

![](images/unhealthy-flamegraph-zoom.png)

<figcaption>Zoomed in details, the function issue</figcaption>

---

class: branded

# Generate a new flamegraph

- Use the initial server in slow-rest-api,
  - run the server with `clinic flame -- node index.js`
  - run the soak tests
  - open the resulted flamegraph
- TIP: Refer to 0x readme for instructions
- Where is the problem?

---

class: branded

# Optimize

- Now that we know where the problem is we can focus in on it by making changes and retesting
- We can either continue to run the soak test, or set up a micro-benchmark around the `etag` function
- In this case, we'll simply re-run the soak test after each change

---

class: branded

# Optimize

- 1st Iteration - Brainstorming
  - Dig deeper into the data points in the flame chart, what's taking the time in `etag`
  - Think about it, problem-solve.

---

class: center, no-border, branded

# Question time!

---

class: branded

# Kernel Tracing

```sh
clinic flame --kernel-tracing -- node index.js
```

- Linux
  - Linux perf events (mostly available)
- SmartOS
  - dtrace
- MacOS
  - limited dtrace
  - Also Instruments UI on MacOS

---

class: branded

# Kernel Tracing

```sh
clinic flame --kernel-tracing -- \\
node --interpreted-frames-native-stack index.js
```

- Visualizes C/C++ stacks, including the Kernel.
- Harder to setup, but needed at times.
- `--interpreted-frames-native-stack` flag not available until until Node v10.5.0.
- Before Node v10.5.0 it was not possible to look into the interpreted
  frames.

---

class: branded

# Does it meet our goal?

- Can we make this function faster?
- Can we optimize it further?

---

class: branded

# 2nd Iteration

- The code in `etag.js` is poorly written, let's tidy it up.
- Refactor the code in `etag.js` so that only _one_ try/catch block is used
- What performance benefits does this give, if any?

---

class: branded

# A tale of two compilers

![](images/Boot.png)

---

class: branded

# A tale of two compilers

![](images/Optimization.png)

---

name: deopt
class: branded

# Deoptimizations

![](images/Deoptimization.png)

---

class: branded

# Inlining

![](images/Inlining.png)

---

class: branded

# What to expect from inlining?

- Making a single function inline in a hot path yields a 5-10% improvement in throughput
  - There's many more functions we could optimize
  - V8 has a limit to how many functions it can inline, because the
    risks of deopts are too high

---

class: branded

# Investigating more

```sh
node --trace-turbo-inlining --trace-opt
  --trace-deopt index.js > trace-output
```

```sh
npm test # run the benchmarks
```

- Look for the `DEOPT` functions in the trace output
- What's your observation?

---

class: branded

# 3rd Iteration

- Is the performance acceptable?
- What is the bottleneck now?
- Can we do anything about it?

---

class: branded

# Solution: Just use core!

```js
const http = require('http')

const server = http.createServer(function (req, res) {
  // do something here!!
})

server.listen(3000)
```

---

class: center, no-border, branded

# How did the flamegraph change?

---

class: branded

![](images/fastify.svg)

## [www.fastify.io](www.fastify.io)

---

class: branded

# 4th Iteration: use Fastify

```js

app.get('/a', function a (req, reply) {
  ...
})

server.listen(3000)
```

---

class: center, no-border, branded

# How did the flamegraph change?

---

class: branded

# Javascript object model

- Javascript objects have a list of _properties_.

- Each property has the following attributes: the property _value_, if it is _writable_, _enumerable_
  or _configurable_.

- All Javascript engines basically implement objects as dictionaries, where keys are property names (strings) and values are the property attributes described above.

---

class: branded

# Property access optimization

- Accessing an object's property is the most used operation in any Javascript code.

- Making it very fast is the critical task for an optimized Javascript engine.

- In order to efficiently store and access object's properties, all Javascript engines introduced the concept of _shapes_ (also referred as "Hidden Classes").

---

class: branded

# Shapes / 1

- A shape is a dictionary of an object's properties, with the exception of the value, which is stored separately.

- Instead of values, the shape contains the memory offset at which the value is found.

- Values can then be stored and accessed sequentially in memory, which results in better performance.

---

class: branded

# Shapes / 2

- When two objects are created with the same properties, the engine assigns to them the same shape.

- A shape is only stored once for multiple objects. This is crucial to reduce the memory usage.

---

class: branded
name: shapes-image

# Shapes / 3

![Shapes](images/shapes.svg)

---

class: branded

# Shapes / 4

- Being based on memory offsets, property order is relevant.

  ```js
  const a = { x: 1, y: 2 }
  const b = { y: 2, x: 1 }
  ```

  The two objects above _will not_ have the same shape.

- Adding properties to an object changes its shape.

---

class: branded

# Transitions / 1

- Adding properties to an object will not end up in another object's shape.

  ```js
  const a = { x: 1, y: 2 }
  const b = { x: 1, y: 2, z: 3 }
  a.z = 3
  ```

  The two objects above _will not_ have the same shape.

---

class: branded

# Transitions / 2

- Instead of trying to match an existing shape, the Javascript engine will create a new shape.

- The new shape only contains the modified properties and a link to the previous shape.

---

class: branded

# Transitions / 3

- If the object is modified too often, a transition chain visit can be very expensive.
- The cost is `O(n)`, where `n` is the number of the properties of the object.
- Javascript engines have several optimizations to shorten the chain when possible, for instance avoiding using an empty shape when a object is already created with some properties.

---

class: branded
name: shapes-transitions-image

# Transitions / 4

![Shape](images/shapes-transition.svg)

---

class: branded

# Inline caches / 1

- Another technique used by Javascript engines to make properties faster, is to cache the generated bytecode.

- Consider the following function:

  ```js
  function getName(obj) {
    return obj.name
  }
  ```

---

class: branded

# Inline caches / 2

- When the code reads the object for the first time, the offset information is extracted from the shape. This is a slow operation.

- The offset information is cached in the function bytecode.

---

class: branded

# Inline caches / 3

- When the code reads the object for the second time, the Javascript engine checks if the object is of the same shape. This is a fast operation.

- If the shape is the same, there is a cache hit.

- The engine can directly use the cached offset information without traversing the shape transition chain.

---

class: branded

# Do not use delete

- When a property is _deleted_ from an object, the engine does not use shapes anymore.

- Property access becomes much slower.

- Instead of deleting a property, set it to `undefined`, which results in the same behaviour in most typical use cases, like serialization.

---

class: branded

# 5th Iteration: Avoid delete

- In the `payload` method, set the property to `undefined` instead of deleting it.

- Which performance gain do we get?

---

class: center, no-border, branded

# Thanks For Having Us!
