(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{183:function(e,t,a){e.exports=a(310)},309:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(41),m=a.n(r),l=a(84),o=a(56),s=a(104),i=a(43),u=a(57),d=a(34),h=a(324);var p=function(){var e=Object(n.useContext)(C),t=e.thread,a=e.setThreadPost;return c.a.createElement(c.a.Fragment,null,t&&t.map((function(e){return c.a.createElement(u.b,{to:"/thread",key:Object(h.a)(),className:"post__list"},c.a.createElement("li",{onClick:function(){return a(e)}},e.title))})))},b=a(322),E=a(320),v=a(321),f=a(312);var j=function(){var e=Object(n.useContext)(C),t=e.handleSubmit,a=e.handleChange,r=e.post;return c.a.createElement("div",{className:"app"},c.a.createElement(b.a,{onSubmit:t,className:"home__form"},c.a.createElement(E.a,{name:"title",value:r.title,onChange:a,placeholder:"Title...",className:"input__post"}),c.a.createElement(v.a,{name:"content",value:r.content,onChange:a,placeholder:"Something in mind?",className:"input__post"}),c.a.createElement(f.a,{content:"Post",primary:!0,type:"submit",style:{margin:".5rem"}})),c.a.createElement(p,null))},O=a(323),g=a(325);var y=function(){var e,t=Object(n.useContext)(C),a=t.comments,r=t.threadPost,m=t.handleChange,l=t.handleSubmit,o=t.thread,s=Object(n.useState)([]),u=Object(i.a)(s,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){p(o.find((function(e){return e.id===r.id})))}),[o,r]),c.a.createElement("div",{className:"thread__container"},r?c.a.createElement("div",null,c.a.createElement("h3",{className:"post__title"},r.title),c.a.createElement("div",{className:"post__content"},r.content)):c.a.createElement("h2",{className:"center"},"Nothing to display"),r&&c.a.createElement(b.a,{onSubmit:l,className:"form__container"},c.a.createElement(E.a,{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:m,className:"comment"}),c.a.createElement(v.a,{type:"text",name:"reply",placeholder:"Your Comment...",value:a.reply,onChange:m,className:"comment"}),c.a.createElement(f.a,{type:"submit",content:"Comment",primary:!0,style:{margin:".2rem"}})),r&&c.a.createElement(O.a.Group,null,c.a.createElement(g.a,{as:"h3",dividing:!0},"Comments"),d&&(null===(e=d.comments)||void 0===e?void 0:e.map((function(e){return c.a.createElement(O.a,{key:Object(h.a)()},c.a.createElement(O.a.Avatar,{src:"https://react.semantic-ui.com/images/avatar/small/matt.jpg"}),c.a.createElement(O.a.Content,null,c.a.createElement(O.a.Author,{as:"a"},e.name),c.a.createElement(O.a.Text,null,e.reply)))})))))},C=(a(309),Object(n.createContext)());var _=function(){var e=Object(n.useState)({title:"",content:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],m=Object(n.useState)({name:"",reply:""}),p=Object(i.a)(m,2),b=p[0],E=p[1],v=Object(n.useState)([]),f=Object(i.a)(v,2),O=f[0],g=f[1],_=Object(n.useState)(null),N=Object(i.a)(_,2),S=N[0],x=N[1];return c.a.createElement(u.a,{basename:"/"},c.a.createElement(C.Provider,{value:{post:a,thread:O,setThread:g,setThreadPost:x,threadPost:S,handleChange:function(e){var t=e.target,a=t.name,n=t.value;"title"===a||"content"===a?r((function(e){return Object(s.a)({},e,Object(o.a)({},a,n))})):E((function(e){return Object(s.a)({},e,Object(o.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault();var t=Object(h.a)();a.title||a.content?(a.id=t,g((function(e){return[].concat(Object(l.a)(e),[a])})),r({title:"",content:""})):(g((function(e){var a=O.find((function(e){return e.id===S.id}));return b.id=t,a.comments?a.comments=[].concat(Object(l.a)(a.comments),[b]):a.comments=[b],Object(l.a)(e)})),E((function(){return{name:"",reply:""}})))},setComments:E,comments:b}},c.a.createElement("div",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("h4",null,"Home"))),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:j}),c.a.createElement(d.a,{path:"/thread",component:y}))))};m.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.7ba9b6eb.chunk.js.map