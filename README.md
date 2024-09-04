# The Fastify Workshop

![ci](https://github.com/nearform/the-fastify-workshop/workflows/ci/badge.svg)

## Slideshow Presentation

[The Fastify Workshop Slides](https://nearform.github.io/the-fastify-workshop)

## Requirements

- Node LTS
- npm >=7 - you can install it with [`npm install -g npm@latest`](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- docker
- docker-compose

## Setup

- `npm ci`
- `npm run db:up`
- `npm run db:migrate`

### Run automated tests

- `npm test --workspaces`

#### Run automated tests on a single project

- `npm test -w src/step-06-testing`

## Running the modules

- `cd src/step-{n}-{name}`
- check each module's README file to see which scripts are available

## Presenting

- `npm start`
