(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[4],{296:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up"}},303:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(296),r=t.n(i),c=t(13),l=function(e){return s.a.createElement("div",{className:r.a.dialog},s.a.createElement(c.b,{to:"/dialogs/"+e.id}," ",e.name," "))},o=function(e){return s.a.createElement("div",null," ",e.message," ")},u=t(27),m=t(89),d=t(129),g=t(32),b=t(74),f=Object(b.a)(50),p=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{className:r.a.messages,onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(m.a,{component:g.b,name:"newMessageBody",value:e.inputValue,placeholder:"Enter your message",validate:[b.b,f]})),s.a.createElement("div",null,s.a.createElement("button",null,"Add message")))})),E=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return s.a.createElement(l,{name:e.name,id:e.id,key:e.id})})),n=a.messagesData.map((function(e){return s.a.createElement(o,{message:e.message,id:e.id,key:e.id})}));return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.dialogsItemsMessage},n,s.a.createElement(p,{onSubmit:function(a){e.addMessage(a.newMessageBody)}}))):s.a.createElement(u.a,{to:"/login"})},h=t(128),v=t(12),j=t(36),O=t(37),y=t(39),A=t(38),_=t(40),M=function(e){return{isAuth:e.auth.isAuth}},k=t(7);a.default=Object(k.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(h.a)(a))}}})),(function(e){var a=function(a){function t(){return Object(j.a)(this,t),Object(y.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(_.a)(t,a),Object(O.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),t}(s.a.Component);return Object(v.b)(M)(a)}))(E)}}]);
//# sourceMappingURL=4.8f7a6521.chunk.js.map