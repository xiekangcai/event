import{aj as a}from"./request-DAPTtqD7.js";const c=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,i=/^[\u4e00-\u9fa5\w]{4,10}$/,u=/^.{6,18}$/,f=/^[A-Za-z0-9]+$/;function n(e,t){return t.test(e)}const r=(e,t="error")=>{a({type:t,message:e})};function l(e){if(e){if(!n(e,i))return r("用户名必须4位到10位"),!1}else return r("用户名不为空"),!1;return!0}function A(e){if(e){if(!n(e,u))return r("密码需以6-18位"),!1}else return r("密码不为空"),!1;return!0}function p(e,t){if(e){if(e!==t)return r("密码不一致"),!1}else return r("请输入确认密码"),!1;return!0}function s(e){return{required:!0,message:e,trigger:"blur"}}const m={title:[s("请填写标题")],content:[s("请填写文章内容")],cate_id:[s("请选择文章分类")],cover_img:[s("请选择文章封面")]};export{r as a,m as b,u as c,c as e,n as i,l as n,A as p,p as r,f as s,i as u};
