import{u as c,_ as i,w as S,n as p}from"./request-DAPTtqD7.js";import{j as n,Y as b,k as h,o as u,c as _,s as d,q as f,g as s,x as m}from"./index-Di44Ub9i.js";const k=n({name:"ElContainer"}),B=n({...k,props:{direction:{type:String}},setup(o){const t=o,e=b(),a=c("container"),r=h(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(g=>{const v=g.type.name;return v==="ElHeader"||v==="ElFooter"}):!1);return(l,g)=>(u(),_("section",{class:f([s(a).b(),s(a).is("vertical",s(r))])},[d(l.$slots,"default")],2))}});var C=i(B,[["__file","container.vue"]]);const F=n({name:"ElAside"}),H=n({...F,props:{width:{type:String,default:null}},setup(o){const t=o,e=c("aside"),a=h(()=>t.width?e.cssVarBlock({width:t.width}):{});return(r,l)=>(u(),_("aside",{class:f(s(e).b()),style:m(s(a))},[d(r.$slots,"default")],6))}});var E=i(H,[["__file","aside.vue"]]);const N=n({name:"ElFooter"}),V=n({...N,props:{height:{type:String,default:null}},setup(o){const t=o,e=c("footer"),a=h(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(u(),_("footer",{class:f(s(e).b()),style:m(s(a))},[d(r.$slots,"default")],6))}});var $=i(V,[["__file","footer.vue"]]);const x=n({name:"ElHeader"}),z=n({...x,props:{height:{type:String,default:null}},setup(o){const t=o,e=c("header"),a=h(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(u(),_("header",{class:f(s(e).b()),style:m(s(a))},[d(r.$slots,"default")],6))}});var y=i(z,[["__file","header.vue"]]);const A=n({name:"ElMain"}),M=n({...A,setup(o){const t=c("main");return(e,a)=>(u(),_("main",{class:f(s(t).b())},[d(e.$slots,"default")],2))}});var w=i(M,[["__file","main.vue"]]);const q=S(C,{Aside:E,Footer:$,Header:y,Main:w}),Y=p(E),D=p($),G=p(y),J=p(w);export{q as E,Y as a,G as b,J as c,D as d};
