(this.webpackJsonpreactflag=this.webpackJsonpreactflag||[]).push([[0],{57:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(3),o=n(13),a=n.n(o),s=n(23),i=n(7),u=n(2),l=n(5),d=n.n(l),j="GET_POSTS",p="ADD_POST",h="EDIT_POST",b="DELETE_POST",O="ADD_LIKE",f=function(){return function(t){return d.a.get("http://localhost:3001/posts?_sort=id&_order=desc").then((function(e){t({type:j,payload:e.data})})).catch((function(t){return console.log(t)}))}},v=function(t){return function(e){return d.a.post("http://localhost:3001/posts",t).then((function(n){e({type:p,payload:t})})).catch((function(t){return console.log(t)}))}},x=n(1),m=function(){var t=Object(c.useState)(" "),e=Object(i.a)(t,2),n=e[0],o=e[1],u=Object(c.useState)(" "),l=Object(i.a)(u,2),d=l[0],j=l[1],p=(Object(r.c)((function(t){return t.userReducer})),Object(r.b)()),h=function(){var t=Object(s.a)(a.a.mark((function t(e){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!n||!d){t.next=8;break}return c={title:n,content:d,author:"adel",likes:0},t.next=5,p(v(c));case 5:o(""),j(""),p(f());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"form-container",children:Object(x.jsxs)("form",{onSubmit:function(t){return h(t)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Titre du poste",value:n,onChange:function(t){return o(t.target.value)}}),Object(x.jsx)("textarea",{placeholder:"Postez vos pens\xe9es...",value:d,onChange:function(t){return j(t.target.value)}}),Object(x.jsx)("input",{type:"submit",value:"Envoyer"})]})})},g=function(t){return void 0===t||null===t||"object"===typeof t&&0===Object.keys(t).length||"string"===typeof t&&0===t.trim().length},y=function(){var t=Object(r.c)((function(t){return t.userReducer}));return Object(x.jsx)("div",{className:"user-container",children:Object(x.jsxs)("div",{className:"user",children:[Object(x.jsx)("h3",{children:!g(t[0])&&t[0].pseudo}),Object(x.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:""}),Object(x.jsx)("p",{children:"Age : 35 ans"}),Object(x.jsxs)("p",{children:["Like",!g(t[0])&&t[0].likes>1?"s":null," :"," ",!g(t[0])&&t[0].likes]})]})})},k="GET_USER",S="ADD_USER_LIKE",E=function(t){var e=t.post,n=Object(r.c)((function(t){return t.userReducer})),c=Object(r.b)();return Object(x.jsxs)("div",{onClick:function(){var t,r={title:e.title,author:e.author,content:e.content,likes:++e.likes,id:e.id},o={pseudo:n[0].pseudo,likes:++n[0].likes,id:e.id};c((t=r,function(e){return d()({method:"put",url:"http://localhost:3001/posts/".concat(t.id),data:Object(u.a)({},t)}).then((function(n){e({type:O,payload:Object(u.a)({},t)})})).catch((function(t){return console.log(t)}))})),c(function(t){return function(e){return d()({method:"put",url:"http://localhost:3001/posts/".concat(t.id),data:Object(u.a)({},t)}).then((function(n){e({type:S,payload:Object(u.a)({},t)})})).catch((function(t){return console.log(t)}))}}(o))},children:[Object(x.jsx)("img",{src:"./icons/clap.png",className:"clap",alt:"clap"}),Object(x.jsx)("span",{children:e.likes})]})},D=function(t){var e=t.post,n=(Object(r.c)((function(t){return t.userReducer})),Object(c.useState)(!1)),o=Object(i.a)(n,2),a=o[0],s=o[1],l=Object(c.useState)(e.content),j=Object(i.a)(l,2),p=j[0],O=j[1],f=Object(r.b)(),v=function(t){t.preventDefault();var n,c={title:e.title,author:"Adel et oui!",content:p,likes:e.likes,id:e.id};f((n=c,function(t){return d()({method:"put",url:"http://localhost:3001/posts/".concat(n.id),data:Object(u.a)({},n)}).then((function(e){t({type:h,payload:Object(u.a)({},n)})})).catch((function(t){return console.log(t)}))})),s(!1)};return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsxs)("div",{className:"edit-delete",children:[Object(x.jsx)("img",{onClick:function(){return s(!a)},src:"/public/icons/edit.svg",alt:"edit"}),Object(x.jsx)("img",{src:"/public/icons/delete.svg",alt:"delete",onClick:function(){return f((t=e.id,function(e){return d()({method:"delete",url:"http://localhost:3001/posts/".concat(t)}).then((function(n){e({type:b,payload:{postId:t}})})).catch((function(t){return console.log(t)}))}));var t}})]}),Object(x.jsx)("h2",{children:e.title}),Object(x.jsx)("img",{src:"https://picsum.photos/1500/400",className:"post-img",alt:"img-post"}),a?Object(x.jsx)("form",{onSubmit:function(t){return v(t)},children:Object(x.jsx)("textarea",{default:!0,value:e.content,onChange:function(t){return O(t.target.value)},children:Object(x.jsx)("input",{type:"submit",value:"valider modification"})})}):Object(x.jsx)("p",{children:e.content}),Object(x.jsxs)("div",{className:"author",children:[Object(x.jsx)("h5",{children:e.author}),Object(x.jsx)(E,{post:e})]})]})},N=function(){var t=Object(r.c)((function(t){return t.postReducer}));return console.log(t),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Extreme"}),Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{className:"post-container",children:!g(t)&&t.map((function(t,e){return Object(x.jsx)(D,{post:t},e)}))}),Object(x.jsx)(y,{})]})]})},R=n(9),T=n.n(R),_=n(6),w=n(24),C=n(25),I=n(26),P={};var A={};var L=Object(_.combineReducers)({postReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return e.payload;case p:return[e.payload].concat(Object(I.a)(t));case h:return t.map((function(t){return t.id===e.payload.id?Object(u.a)(Object(u.a)({},t),{},{content:e.payload.content}):t}));case b:return t.filter((function(t){return t.id!==e.payload.postId}));case O:return t.map((function(t){return t.id===e.payload.id?Object(u.a)(Object(u.a)({},t),{},{likes:e.payload.likes}):t}));default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return e.Payload;case S:return t.map((function(t){return t.id===e.payload.id?Object(u.a)(Object(u.a)({},t),{},{likes:e.payload.likes}):t}));default:return t}}}),G=Object(_.createStore)(L,Object(w.composeWithDevTools)(Object(_.applyMiddleware)(C.a)));G.dispatch(f()),G.dispatch((function(t){return d.a.get("http://localhost:3001/users").then((function(e){t({type:k,payload:e.data})})).catch((function(t){return console.log(t)}))})),T.a.render(Object(x.jsx)(r.a,{store:G,children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.885766a1.chunk.js.map