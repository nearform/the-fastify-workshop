import{o as s,e as i,f as e,d as P,c as H,a as U,p as G,b as u,s as d,r as L,n as V,g as o,j as B,l as n,m as J,H as _,q as F,t as T,F as K,v as O,w as Q,x as W,_ as X}from"./index-67939c0e.js";import{N as Z}from"./NoteDisplay-6352946d.js";const Y={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ee=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),te=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),oe=[ee,te];function ne(p,c){return s(),i("svg",Y,oe)}const se={name:"carbon-zoom-out",render:ne},le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ae=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ie=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ce=[ae,ie];function re(p,c){return s(),i("svg",le,ce)}const ue={name:"carbon-zoom-in",render:re},de={class:"h-full flex flex-col"},_e={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},pe={class:"flex-none border-t border-gray-400 border-opacity-20"},he={class:"flex gap-1 items-center px-6 py-3"},me=e("div",{class:"flex-auto"},null,-1),fe={class:"p2 text-center"},ve=P({__name:"NotesView",setup(p){const c=H.titleTemplate.replace("%s",H.title||"Slidev");U({title:`Notes - ${c}`});const{isFullscreen:h,toggle:m}=O,l=G("slidev-notes-font-size",18),a=u(()=>{var t;return((t=d.lastUpdate)==null?void 0:t.type)==="viewer"?d.viewerPage:d.page}),f=u(()=>L.find(t=>t.path===`${a.value}`)),r=u(()=>L.find(t=>t.path===`${a.value+1}`));function D(){l.value=l.value+1}function R(){l.value=l.value-1}return(t,v)=>{var x,g,b,y,w,z,$,k,N,C,S,M;const A=Q,E=W,j=ue,q=se;return s(),i(K,null,[e("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:V({width:`${(a.value-1)/o(B)*100}%`})},null,4),e("div",de,[e("div",{class:"px-5 flex-auto h-full overflow-auto",style:V({fontSize:`${o(l)}px`})},[n(Z,{note:(b=(g=(x=f.value)==null?void 0:x.meta)==null?void 0:g.slide)==null?void 0:b.note,"note-html":(z=(w=(y=f.value)==null?void 0:y.meta)==null?void 0:w.slide)==null?void 0:z.noteHTML,placeholder:`No notes for Slide ${a.value}.`},null,8,["note","note-html","placeholder"])],4),r.value?(s(),i("div",_e,[n(Z,{class:"opacity-50",note:(N=(k=($=r.value)==null?void 0:$.meta)==null?void 0:k.slide)==null?void 0:N.note,"note-html":(M=(S=(C=r.value)==null?void 0:C.meta)==null?void 0:S.slide)==null?void 0:M.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):J("v-if",!0),e("div",pe,[e("div",he,[e("button",{class:"slidev-icon-btn",onClick:v[0]||(v[0]=(...I)=>o(m)&&o(m)(...I))},[n(_,{text:o(h)?"Close fullscreen":"Enter fullscreen"},null,8,["text"]),o(h)?(s(),F(A,{key:0})):(s(),F(E,{key:1}))]),e("button",{class:"slidev-icon-btn",onClick:D},[n(_,{text:"Increase font size"}),n(j)]),e("button",{class:"slidev-icon-btn",onClick:R},[n(_,{text:"Decrease font size"}),n(q)]),me,e("div",fe,T(a.value)+" / "+T(o(B)),1)])])])],64)}}}),be=X(ve,[["__file","/home/runner/work/the-fastify-workshop/the-fastify-workshop/node_modules/@slidev/client/internals/NotesView.vue"]]);export{be as default};
