import{_ as i,o as _,c as m,w as r,a as d,e as u,t as p,n as l,r as s}from"./index-vMiN0kTq.js";const b={props:{items:{type:Array,required:!0}},methods:{isActive(t){return this.$route.path===t.to}}};function v(t,f,o,x,h,a){const c=s("router-link"),n=s("v-breadcrumbs");return _(),m(n,{items:o.items,divider:"<"},{item:r(({item:e})=>[d(c,{to:e.to,class:l([{"active-breadcrumb":a.isActive(e)},"breadcrumb-link"])},{default:r(()=>[u(p(e.text),1)]),_:2},1032,["to","class"])]),_:1},8,["items"])}const B=i(b,[["render",v]]);export{B};