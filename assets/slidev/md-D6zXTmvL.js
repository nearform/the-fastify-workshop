import{d as h,r as k,B as r,o as s,c as p,k as c,f as u,b as d,e as t,aa as o,l as y,q as $,s as g}from"../modules/vue-9M24w38T.js";import{a as L}from"../index-BuCZCkoX.js";import{I as S}from"./default-D0RWulP1.js";import{u as C,f as T}from"./context-ClFAbzFa.js";import"../modules/shiki-D165QSPi.js";const v=["href","innerHTML"],b=["href"],w=h({__name:"Link",props:{to:{},title:{}},setup(m){const{isPrintMode:a}=L();return(e,n)=>{const i=k("RouterLink");return!r(a)&&e.title?(s(),p(i,{key:0,to:String(e.to),onClick:n[0]||(n[0]=l=>l.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!r(a)&&!e.title?(s(),p(i,{key:1,to:String(e.to),onClick:n[1]||(n[1]=l=>l.target.blur())},{default:c(()=>[u(e.$slots,"default")]),_:3},8,["to"])):r(a)&&e.title?(s(),d("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,v)):(s(),d("a",{key:3,href:`#${e.to}`},[u(e.$slots,"default")],8,b))}}}),B=t("h1",null,"Step 14: Exercise 💻",-1),M={class:"dense"},N=t("li",null,[o("Let’s create an Fastify application using "),t("strong",null,"TypeScript"),o(".")],-1),H=t("li",null,[o("Use "),t("code",null,"declaration merging"),o(" to add the custom "),t("code",null,"authenticate"),o(" decorator property to "),t("code",null,"FastifyInstance")],-1),P=t("li",null,[o("Use "),t("a",{href:"https://www.npmjs.com/package/@sinclair/typebox",target:"_blank"},[t("code",null,"@sinclair/typebox")]),o(" to transform JSON Schema into types")],-1),z={__name:"slides.md__slidev_80",setup(m){const{$slidev:a,$nav:e,$clicksContext:n,$clicks:i,$page:l,$renderContext:I,$frontmatter:f}=C();return n.setup(),(R,V)=>{const _=w;return s(),p(S,$(g(r(T)(r(f),79))),{default:c(()=>[B,t("div",M,[t("ul",null,[N,t("li",null,[o("We will transpose the application that you did in the "),y(_,{to:"./59"},{default:c(()=>[o("Step 10")]),_:1}),o(" to TypeScript")]),H,P])])]),_:1},16)}}};export{z as default};
