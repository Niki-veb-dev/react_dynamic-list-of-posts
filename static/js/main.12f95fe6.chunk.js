(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),a=n(3),r=n(2),i=(n(14),n(15),n(4)),o=n(1),l=n.n(o),u="https://mate.academy/students-api/";function d(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"posts"),0!==t&&(n+="?userId=".concat(t)),e.next=4,fetch(n);case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"comments?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"comments/").concat(t),e.abrupt("return",fetch(n,{method:"DELETE"}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(u,"comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(17);var _=n(0),y=function(){return Object(_.jsx)("div",{className:"Loader",children:Object(_.jsx)("div",{className:"Loader__content"})})},N=function(e){var t=e.posts,n=e.initialize,c=e.selectedPostId,s=e.setSelectePostId;return Object(_.jsxs)("div",{className:"PostsList",children:[Object(_.jsx)("h2",{children:"Posts:"}),Object(_.jsx)("div",{children:n?null:Object(_.jsx)(y,{})}),Object(_.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(_.jsxs)("li",{className:"PostsList__item",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"User #".concat(e.userId,": ")}),"sunt aut facere repellat provident occaecati excepturi optio"]}),Object(_.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return s(e.id)},children:c===e.id?"Close":"Open"})]},e.id)}))})]})},P=(n(19),function(e){var t=e.selectedUserId,n=e.selectedPostId,c=e.setSelectePostId,s=Object(r.useState)([]),o=Object(a.a)(s,2),u=o[0],j=o[1],b=Object(r.useState)(!1),p=Object(a.a)(b,2),h=p[0],m=p[1],O=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,d(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(!h);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[t]),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(N,{posts:u,initialize:h,selectedPostId:n,setSelectePostId:c})})}),w=n(9),I=n.n(w),S=n(6),C=n(5),k=(n(20),function(e){var t=e.body,n=e.name,c=e.email,s=e.handleOnChange,a=e.handleOnSubmit;return Object(_.jsxs)("form",{className:"NewCommentForm",children:[Object(_.jsx)("div",{className:"form-field",children:Object(_.jsx)("input",{type:"text",name:"name",value:n,placeholder:"Your name",className:"NewCommentForm__input",onChange:s})}),Object(_.jsx)("div",{className:"form-field",children:Object(_.jsx)("input",{type:"text",name:"email",value:c,placeholder:"Your email",className:"NewCommentForm__input",onChange:s})}),Object(_.jsx)("div",{className:"form-field",children:Object(_.jsx)("textarea",{name:"body",value:t,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:s})}),Object(_.jsx)("button",{type:"button",className:"NewCommentForm__submit-button button",onClick:a,children:"Add a comment"})]})}),g=function(e){var t=e.handleAdd,n=e.selectedPostId,c=Object(r.useState)({name:"",email:"",body:"",postId:0}),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(_.jsx)(k,{handleOnChange:function(e){var t=e.target,n=t.name,c=t.value;o(Object(C.a)(Object(C.a)({},i),{},Object(S.a)({},n,c)))},handleOnSubmit:function(){var e=Object(C.a)(Object(C.a)({},i),{},{postId:n});o({name:"",email:"",body:"",postId:0}),t(e)},name:i.name,email:i.email,body:i.body})},D=function(e){var t=e.handleAdd,n=e.handleDelete,c=e.handleVisabiliti,s=e.selectedPostId,a=e.postDetails,r=e.initialize,i=e.isHidden,o=e.comments;return Object(_.jsx)("div",{className:"PostDetails",children:0!==s?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:"Post details:"}),r?Object(_.jsx)(y,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("section",{className:"PostDetails__post",children:Object(_.jsx)("p",{children:a.title})}),Object(_.jsxs)("section",{className:"PostDetails__comments",children:[Object(_.jsx)("button",{type:"button",className:"button",onClick:c,children:i?"Show ".concat(o.length," comments"):"Hide ".concat(o.length," comments")}),Object(_.jsx)("ul",{className:"PostDetails__list",children:o.map((function(e){return Object(_.jsxs)("li",{className:I()("PostDetails__list-item",{hide:i}),children:[Object(_.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n(e.id)},children:"X"}),Object(_.jsx)("p",{children:e.body})]},e.id)}))})]})]}),Object(_.jsx)("section",{children:Object(_.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(_.jsx)(g,{handleAdd:t,selectedPostId:s})})})]}):"No post selected"})},A=(n(21),function(e){var t=e.selectedPostId,n=Object(r.useState)({}),c=Object(a.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)([]),d=Object(a.a)(u,2),j=d[0],p=d[1],m=Object(r.useState)(!1),f=Object(a.a)(m,2),v=f[0],y=f[1],N=Object(r.useState)(!1),P=Object(a.a)(N,2),w=P[0],I=P[1],S=function(){var e=Object(i.a)(l.a.mark((function e(){var n,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t){e.next=11;break}return I(!0),e.next=4,Promise.all([b(t),h(t)]);case 4:n=e.sent,c=Object(a.a)(n,2),s=c[0],r=c[1],o(s),p(r),I(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){S()}),[t]);var C=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(D,{isHidden:v,comments:j,initialize:w,postDetails:s,selectedPostId:t,handleAdd:k,handleDelete:C,handleVisabiliti:function(){y(!v)}})}),L=function(e){var t=e.selectedUserId,n=e.setSelectedUserId;return Object(_.jsx)("header",{className:"App__header",children:Object(_.jsxs)("label",{children:["Select a user",Object(_.jsxs)("select",{className:"App__user-selector",value:t,onChange:n,children:[Object(_.jsx)("option",{value:"0",children:"All users"}),Object(_.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(_.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(_.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(_.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(_.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(_.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(_.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(_.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(_.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(_.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})})},F=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),i=Object(a.a)(s,2),o=i[0],l=i[1];return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(L,{selectedUserId:n,setSelectedUserId:function(e){var t=+e.target.value;c(t)}}),Object(_.jsxs)("main",{className:"App__main",children:[Object(_.jsx)("div",{className:"App__sidebar",children:Object(_.jsx)(P,{selectedUserId:n,setSelectePostId:function(e){l(o===e?0:e)},selectedPostId:o})}),Object(_.jsx)("div",{className:"App__content",children:Object(_.jsx)(A,{selectedPostId:o})})]})]})};s.a.render(Object(_.jsx)(F,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.12f95fe6.chunk.js.map