import{E as L}from"./request-DAPTtqD7.js";import{l as U,E as C}from"./login-B_xxyaF9.js";import{E as N}from"./el-checkbox-DWQd376i.js";import{E as S}from"./el-input-7Wwwmoe3.js";import{_ as $,i as A,u as R,f as u,r as p,o as z,c as T,a as l,b as o,w as t,g as _,h as m,p as j,d as O}from"./index-Di44Ub9i.js";import{n as k,p as x,a as V}from"./regx-DPc9GAx6.js";import{l as q}from"./loadingbtn-hNlXO0aY.js";import"./index-Ctvra8ZN.js";import"./isEqual-DcFlOqaD.js";import"./_Uint8Array-c1AvBbBS.js";const D=r=>(j("data-v-18c143df"),r=r(),O(),r),F={class:"login"},G=D(()=>l("h1",null,"登录",-1)),H={class:"user"},J={class:"psd"},K={class:"re"},M={class:"lef"},P={class:"right"},Q={class:"button"},W={class:"regiser"},X=Object.assign({name:"loginIndex"},{__name:"login",setup(r){const b=A(),v=R(),d=u(!1),i=u(""),a=u(""),f=u(!1),y=async()=>{if(d.value=!0,[k(i.value),x(a.value)].every(n=>n))try{const n=await U(i.value,a.value,a.value);b.setUser(n.token),V(n.message,"success"),v.replace("/")}catch{d.value=!1}else V("请完成表单填写");d.value=!1};return(E,e)=>{const n=p("User"),c=L,g=S,w=p("Lock"),B=N,h=C,I=p("Right");return z(),T("div",F,[G,l("div",H,[o(g,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s),style:{width:"100%",height:"40px"},placeholder:"请输入用户名",onBlur:e[1]||(e[1]=s=>_(k)(i.value))},{prefix:t(()=>[o(c,null,{default:t(()=>[o(n)]),_:1})]),_:1},8,["modelValue"])]),l("div",J,[o(g,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=s=>a.value=s),style:{width:"100%",height:"40px"},placeholder:"请入密码",type:"password",onBlur:e[3]||(e[3]=s=>_(x)(a.value))},{prefix:t(()=>[o(c,null,{default:t(()=>[o(w)]),_:1})]),_:1},8,["modelValue"])]),l("div",K,[l("div",M,[o(B,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=s=>f.value=s),label:"记住我",size:"large"},null,8,["modelValue"])]),l("div",P,[o(h,{type:"primary",size:"12px"},{default:t(()=>[m("忘记密码?")]),_:1})])]),l("div",Q,[o(q,{isLoading:d.value,onClick:y},{default:t(()=>[m("登 录")]),_:1},8,["isLoading"])]),l("div",W,[o(h,{type:"info",onClick:e[5]||(e[5]=s=>_(v).push("/sign/up"))},{default:t(()=>[m("注册 "),o(c,null,{default:t(()=>[o(I)]),_:1})]),_:1})])])}}}),re=$(X,[["__scopeId","data-v-18c143df"]]);export{re as default};
