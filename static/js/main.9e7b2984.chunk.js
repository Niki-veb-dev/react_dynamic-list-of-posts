(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),a=n(3),r=n(1),i=(n(14),n(15),n(4)),o=n(2),u=n.n(o),l=n(5),d="https://mate.academy/students-api/";function j(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(d,"posts"),0!==t&&(n+="?userId=".concat(t)),e.next=4,fetch(n);case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"comments")).then((function(e){return e.json()}));case 2:return n=e.sent,c=n.filter((function(e){return e.postId===t})),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(d,"comments/").concat(t),e.abrupt("return",fetch(n,{method:"DELETE"}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(d,"comments"),{method:"POST",body:JSON.stringify(Object(l.a)({},t)),headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(17);var y=n(0),N=function(){return Object(y.jsx)("div",{className:"Loader",children:Object(y.jsx)("div",{className:"Loader__content"})})},P=function(e){var t=e.posts,n=e.initialize,c=e.selectedPostId,s=e.setSelectePostId;return Object(y.jsxs)("div",{className:"PostsList",children:[Object(y.jsx)("h2",{children:"Posts:"}),Object(y.jsx)("div",{children:n?null:Object(y.jsx)(N,{})}),Object(y.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(y.jsxs)("li",{className:"PostsList__item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("b",{children:"User #".concat(e.userId,": ")}),"sunt aut facere repellat provident occaecati excepturi optio"]}),Object(y.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return s(e.id)},children:c===e.id?"Close":"Open"})]},e.id)}))})]})},w=(n(19),function(e){var t=e.selectedUserId,n=e.selectedPostId,c=e.setSelectePostId,s=Object(r.useState)([]),o=Object(a.a)(s,2),l=o[0],d=o[1],b=Object(r.useState)(!1),p=Object(a.a)(b,2),h=p[0],m=p[1],O=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,j(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(!h);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[]),Object(r.useEffect)((function(){O()}),[t]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(P,{posts:l,initialize:h,selectedPostId:n,setSelectePostId:c})})}),I=n(9),S=n.n(I),C=n(6),k=(n(20),function(e){var t=e.body,n=e.name,c=e.email,s=e.handleOnChange,a=e.handleOnSubmit;return Object(y.jsxs)("form",{className:"NewCommentForm",children:[Object(y.jsx)("div",{className:"form-field",children:Object(y.jsx)("input",{type:"text",name:"name",value:n,placeholder:"Your name",className:"NewCommentForm__input",onChange:s})}),Object(y.jsx)("div",{className:"form-field",children:Object(y.jsx)("input",{type:"text",name:"email",value:c,placeholder:"Your email",className:"NewCommentForm__input",onChange:s})}),Object(y.jsx)("div",{className:"form-field",children:Object(y.jsx)("textarea",{name:"body",value:t,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:s})}),Object(y.jsx)("button",{type:"button",className:"NewCommentForm__submit-button button",onClick:a,children:"Add a comment"})]})}),g=function(e){var t=e.handleAdd,n=e.selectedPostId,c=Object(r.useState)({name:"",email:"",body:"",postId:0}),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(y.jsx)(k,{handleOnChange:function(e){var t=e.target,n=t.name,c=t.value;o(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},n,c)))},handleOnSubmit:function(){var e=Object(l.a)(Object(l.a)({},i),{},{postId:n});o({name:"",email:"",body:"",postId:0}),t(e)},name:i.name,email:i.email,body:i.body})},D=function(e){var t=e.handleAdd,n=e.handleDelete,c=e.handleVisabiliti,s=e.selectedPostId,a=e.postDetails,r=e.initialize,i=e.isHidden,o=e.comments;return Object(y.jsx)("div",{className:"PostDetails",children:0!==s?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{children:"Post details:"}),r?Object(y.jsx)(N,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("section",{className:"PostDetails__post",children:Object(y.jsx)("p",{children:a.title})}),Object(y.jsxs)("section",{className:"PostDetails__comments",children:[Object(y.jsx)("button",{type:"button",className:"button",onClick:c,children:"Hide ".concat(o.length," comments")}),Object(y.jsx)("ul",{className:"PostDetails__list",children:o.map((function(e){return Object(y.jsxs)("li",{className:S()("PostDetails__list-item",{hide:i}),children:[Object(y.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n(e.id)},children:"X"}),Object(y.jsx)("p",{children:e.body})]},e.id)}))})]})]}),Object(y.jsx)("section",{children:Object(y.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(y.jsx)(g,{handleAdd:t,selectedPostId:s})})})]}):"No post selected"})},A=(n(21),function(e){var t=e.selectedPostId,n=Object(r.useState)({}),c=Object(a.a)(n,2),s=c[0],o=c[1],l=Object(r.useState)([]),d=Object(a.a)(l,2),j=d[0],b=d[1],h=Object(r.useState)(!1),O=Object(a.a)(h,2),x=O[0],_=O[1],N=Object(r.useState)(!1),P=Object(a.a)(N,2),w=P[0],I=P[1],S=function(){var e=Object(i.a)(u.a.mark((function e(){var n,c,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t){e.next=11;break}return I(!0),e.next=4,Promise.all([p(t),m(t)]);case 4:n=e.sent,c=Object(a.a)(n,2),s=c[0],r=c[1],o(s),b(r),I(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){S()}),[]),Object(r.useEffect)((function(){S()}),[t]);var C=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(D,{isHidden:x,comments:j,initialize:w,postDetails:s,selectedPostId:t,handleAdd:k,handleDelete:C,handleVisabiliti:function(){_(!x)}})}),L=function(e){var t=e.selectedUserId,n=e.setSelectedUserId;return Object(y.jsx)("header",{className:"App__header",children:Object(y.jsxs)("label",{children:["Select a user",Object(y.jsxs)("select",{className:"App__user-selector",value:t,onChange:n,children:[Object(y.jsx)("option",{value:"0",children:"All users"}),Object(y.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(y.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(y.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(y.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(y.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(y.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(y.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(y.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(y.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(y.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})})},E=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),i=Object(a.a)(s,2),o=i[0],u=i[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(L,{selectedUserId:n,setSelectedUserId:function(e){var t=+e.target.value;c(t)}}),Object(y.jsxs)("main",{className:"App__main",children:[Object(y.jsx)("div",{className:"App__sidebar",children:Object(y.jsx)(w,{selectedUserId:n,setSelectePostId:function(e){u(o===e?0:e)},selectedPostId:o})}),Object(y.jsx)("div",{className:"App__content",children:Object(y.jsx)(A,{selectedPostId:o})})]})]})};s.a.render(Object(y.jsx)(E,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9e7b2984.chunk.js.map