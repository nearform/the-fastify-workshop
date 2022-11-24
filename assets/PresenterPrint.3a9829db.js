import{d as _,i as d,a as h,u as p,b as u,c as m,e as f,f as n,g as t,t as a,h as s,F as g,r as v,n as x,j as b,o as l,k as y,l as k,m as N,p as w,q as S}from"./index.e01c087e.js";import{_ as V}from"./NoteViewer.vue_vue_type_script_setup_true_lang.efee0eb4.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},q=_({__name:"PresenterPrint",setup(M){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(o=>{var c;return(c=o.meta)==null?void 0:c.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,c)=>(l(),n("div",{id:"page-root",style:x(s(S))},[t("div",j,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(s(i),(e,r)=>(l(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,a(e==null?void 0:e.no)+"/"+a(s(y)),1),k(" "+a(e==null?void 0:e.title)+" ",1),D])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),r<s(i).length-1?(l(),n("hr",F)):w("v-if",!0)]))),128))])],4))}});export{q as default};
