(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[0],{10:function(e,t,n){e.exports={navWrap:"Navbar_navWrap__1Mfl7",item:"Navbar_item__zmMk4",itemLink:"Navbar_itemLink__3RW8D",activeLink:"Navbar_activeLink__3etBE"}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(33),r=n(8),o="dialogsReducer/ADD_MESSAGE",s={dialogsData:[{id:1,name:"Empty"},{id:2,name:"Asdf"},{id:3,name:"Qwer"},{id:4,name:"Qaz"}],messagesData:[{id:1,message:"Hello React"},{id:2,message:"Nice work!"},{id:3,message:"Let's do it!"}]},c=function(e){return{type:o,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.newMessageBody;return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:e.messagesData.length+1,message:n}])});default:return e}}},135:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki"}},136:function(e,t,n){e.exports={userPic:"Users_userPic__1_BqH"}},137:function(e,t,n){e.exports=n.p+"static/media/user1.3bd15153.png"},138:function(e,t,n){e.exports=n.p+"static/media/bars.ca49bba4.svg"},140:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},141:function(e,t,n){e.exports=n.p+"static/media/Redux.dc081a33.svg"},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(134),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6ab52400-1718-48c6-9e57-f24fa6232ed9"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI"),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},169:function(e,t,n){e.exports=n(295)},174:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),s=n.n(o),c=(n(174),n(36)),i=n(37),u=n(39),l=n(38),m=n(40),d=(n(96),n(27)),f=n(13),p=n(10),g=n.n(p),E=n(70),v=n.n(E),h=n(44),b=n.n(h),_=function(e){return r.a.createElement("div",{className:b.a.friendItemWrap},r.a.createElement("div",{className:b.a.friendPic},r.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false",alt:""})),r.a.createElement("div",{className:b.a.friendName},r.a.createElement("div",{className:b.a.FirstName},e.firstName),r.a.createElement("div",{className:b.a.SecondName},e.secondName)))},w=function(e){var t=e.navBar.friends.map((function(e){return r.a.createElement(_,{firstName:e.firstName,secondName:e.secondName,key:e.userId})}));return r.a.createElement("div",{className:v.a.friendsBlock},r.a.createElement("div",{className:v.a.friendsTitle},"Friends"),r.a.createElement("div",{className:v.a.friendWrap},t))},N=n(12),O=Object(N.b)((function(e){return e}))(w),P=function(e){return r.a.createElement("div",{className:g.a.navWrap},r.a.createElement("nav",{className:g.a.nav},r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/dialogs"},"Messages")),r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/news"},"News")),r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/music"},"Music")),r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/settings"},"Settings")),r.a.createElement("div",{className:g.a.item},r.a.createElement(f.b,{className:g.a.itemLink,activeClassName:g.a.activeLink,to:"/users"},"Users"))),r.a.createElement(O,null))},S=function(){return r.a.createElement("div",null,"News")},I=function(){return r.a.createElement("div",null,"Music")},C=function(){return r.a.createElement("div",null,"Settings")},k=n(9),j=n.n(k),y=n(33),L=n(8),R=n(16),x=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(L.a)({},e,{},a):e}))},T="usersReducer/FOLLOW",F="usersReducer/UNFOLLOW",U="usersReducer/SET_USERS",A={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},B=function(e){return{type:T,userId:e}},W=function(e){return{type:F,userId:e}},z=function(e){return{type:"usersReducer/SET_CURRENT_PAGE",currentPage:e}},M=function(e){return{type:"usersReducer/TOGGLE_IS_FETCHING",isFetching:e}},D=function(e,t){return{type:"usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},G=function(e,t,n,a){return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e(D(!0,t)),r.next=3,j.a.awrap(n(t));case 3:0===r.sent.resultCode&&e(a(t)),e(D(!1,t));case 6:case"end":return r.stop()}}))},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(L.a)({},e,{users:x(e.users,t.userId,"id",{followed:!0})});case F:return Object(L.a)({},e,{users:x(e.users,t.userId,"id",{followed:!1})});case U:return Object(L.a)({},e,{users:t.users});case"usersReducer/SET_CURRENT_PAGE":return Object(L.a)({},e,{currentPage:t.currentPage});case"usersReducer/SET_TOTAL_USERS_COUNT":return Object(L.a)({},e,{totalUsersCount:t.totalUsersCount});case"usersReducer/TOGGLE_IS_FETCHING":return Object(L.a)({},e,{isFetching:t.isFetching});case"usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(L.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):Object(y.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},q=n(55),J=n(130),K=n(135),X=n.n(K),Q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var d=Math.ceil(u/i),f=Object(a.useState)(1),p=Object(J.a)(f,2),g=p[0],E=p[1],v=(g-1)*i+1,h=g*i;return r.a.createElement("div",null,g>1&&r.a.createElement("button",{onClick:function(){return E(g-1)}},"Prev"),l.filter((function(e){return e>=v&&e<=h})).map((function(e){return r.a.createElement("button",{key:e,onClick:function(t){s(e)},className:o===e?X.a.selectedPage:null},e)})),d>g&&r.a.createElement("button",{onClick:function(){return E(g+1)}},"Next"))},V=n(136),Y=n.n(V),Z=n(137),$=n.n(Z),ee=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:Y.a.userPic,src:null!=t.photos.small?t.photos.small:$.a,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))},te=function(e){var t=e.currentPage,n=e.totalItemsCount,a=e.pageSize,o=e.onPageChanged,s=e.users,c=Object(q.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(Q,{totalItemsCount:n,currentPage:t,onPageChanged:o,pageSize:a}),r.a.createElement("div",null,s.map((function(e){return r.a.createElement(ee,{user:e,key:e.id,follow:c.follow,unfollow:c.unfollow,followingInProgress:c.followingInProgress})}))))},ne=n(65),ae=n(7),re=n(139),oe=Object(re.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),se=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},ie=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},me=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ne.a,null):null,r.a.createElement(te,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),de=Object(ae.d)(Object(N.b)((function(e){return{users:oe(e),pageSize:se(e),totalUsersCount:ce(e),currentPage:ie(e),isFetching:ue(e),followingInProgress:le(e)}}),{follow:function(e){return function(t){return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:G(t,e,R.c.follow.bind(R.c),B);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:G(t,e,R.c.unfollow.bind(R.c),W);case 1:case"end":return n.stop()}}))}},setPage:z,toggleFollowingProgress:D,requestUsers:function(e,t){return function(n){var a;return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(M(!0)),n(z(e)),r.next=4,j.a.awrap(R.c.getUsers(e,t));case 4:a=r.sent,n(M(!1)),n((o=a.items,{type:U,users:o})),n({type:"usersReducer/SET_TOTAL_USERS_COUNT",totalUsersCount:a.totalCount});case 8:case"end":return r.stop()}var o}))}}}))(me),fe=n(34),pe=n.n(fe),ge=n(140),Ee=n.n(ge),ve=n(141),he=n.n(ve),be=function(e){return r.a.createElement("header",{className:pe.a.header},r.a.createElement("div",{className:pe.a.logoBlock},r.a.createElement("img",{className:pe.a.logo,src:Ee.a,alt:""}),r.a.createElement("img",{className:pe.a.logoRedux,src:he.a,alt:""})),r.a.createElement("div",{className:pe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(f.b,{className:pe.a.loginLink,to:"/login"},"Login")))},_e=n(46),we={usersId:null,email:null,login:null,isAuth:!1},Ne=function(e,t,n,a){return{type:"authReducer/SET-USER-DATA",payload:{usersId:e,email:t,login:n,isAuth:a}}},Oe=function(){return function(e){var t,n,a,r,o;return j.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,j.a.awrap(R.a.me());case 2:0===(t=s.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.login,o=n.email,e(Ne(a,o,r,!0)));case 4:case"end":return s.stop()}}))}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authReducer/SET-USER-DATA":return Object(L.a)({},e,{},t.payload);default:return e}},Se=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(be,this.props)}}]),t}(r.a.Component),Ie=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:Oe,logout:function(){return function(e){return j.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.awrap(R.a.logout());case 2:0===t.sent.data.resultCode&&e(Ne(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(Se),Ce=n(129),ke=n(74),je=n(32),ye=n(53),Le=n.n(ye),Re=n(45),xe=n.n(Re),Te=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t,className:xe.a.loginForm},r.a.createElement("div",{className:xe.a.loginInput},Object(je.c)("Email","email",je.a,[ke.b])),r.a.createElement("div",{className:xe.a.loginInput},Object(je.c)("Password","password",je.a,[ke.b],{type:"password"})),r.a.createElement("div",null,r.a.createElement("label",{className:xe.a.rememberBlock},Object(je.c)(null,"rememberMe",je.a,[],{type:"checkbox"}),r.a.createElement("span",null,"Remember me"))),n&&r.a.createElement("div",{className:Le.a.formError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Fe=Object(N.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,o;return j.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,j.a.awrap(R.a.login(e,t,n));case 2:0===(r=s.sent).data.resultCode?a(Oe()):(o=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(_e.a)("login",{_error:o})));case 4:case"end":return s.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement("div",{className:xe.a.loginWrap},r.a.createElement("h1",null,"Login"),r.a.createElement(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Ue={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"appReducer/INITIALIZED_SUCCESS":return Object(L.a)({},e,{initialized:!0});default:return e}},Be=n(97),We=n(128),ze={friends:[{firstName:"Empty",secondName:"Jhon",userId:1},{firstName:"Marry",secondName:"Marry",userId:2},{firstName:"Empty",secondName:"Bill",userId:3},{firstName:"Clint",secondName:"Eastwood",userId:4}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze;arguments.length>1&&arguments[1];return e},De=n(143),Ge=n(131),He=Object(ae.c)({profilePage:Be.b,dialogsPage:We.b,navBar:Me,usersPage:H,auth:Pe,form:Ge.a,app:Ae}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,Je=Object(ae.e)(He,qe(Object(ae.a)(De.a))),Ke=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Xe=r.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Qe=r.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Ve=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.intializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"mainWrap"},r.a.createElement(Ie,null),r.a.createElement(P,null),r.a.createElement("div",{className:"content"},r.a.createElement(d.b,{path:"/profile/:userId?",render:Ke(Qe)}),r.a.createElement(d.b,{path:"/dialogs",render:Ke(Xe)}),r.a.createElement(d.b,{path:"/news",component:S}),r.a.createElement(d.b,{path:"/music",component:I}),r.a.createElement(d.b,{path:"/settings",component:C}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(Fe,null)}}))):r.a.createElement(ne.a,null)}}]),t}(r.a.Component),Ye=Object(ae.d)(d.f,Object(N.b)((function(e){return{initialized:e.app.initialized}}),{intializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:"appReducer/INITIALIZED_SUCCESS"})}))}}}))(Ve),Ze=function(e){return r.a.createElement(f.a,null,r.a.createElement(N.a,{store:Je},r.a.createElement(Ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(55),r=n(0),o=n.n(r),s=n(53),c=n.n(s),i=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,s=n&&a;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("div",null,r),s&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e," ",o.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e," ",o.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a,r){return o.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:n,validate:a},r))}},34:function(e,t,n){e.exports={header:"Header_header__1VCKf",logoBlock:"Header_logoBlock__1MAEm",logo:"Header_logo__3_SJs","logo-spin":"Header_logo-spin__366Nk",logoRedux:"Header_logoRedux__3lK-a",loginBlock:"Header_loginBlock__6mma5",loginLink:"Header_loginLink__1yPle"}},44:function(e,t,n){e.exports={friendPic:"FriendItem_friendPic__3jcMu",friendName:"FriendItem_friendName__21BuW",friendItemWrap:"FriendItem_friendItemWrap__3qmeS"}},45:function(e,t,n){e.exports={loginWrap:"Login_loginWrap__PKn1R",loginForm:"Login_loginForm__1Hg13",loginInput:"Login_loginInput__2W0-l",rememberBlock:"Login_rememberBlock__1C3NB"}},53:function(e,t,n){e.exports={loginWrap:"FormsControls_loginWrap__2Pn8x",formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formError:"FormsControls_formError__1XsRY"}},65:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(138),s=n.n(o);t.a=function(e){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:s.a,alt:""}))}},70:function(e,t,n){e.exports={friendsBlock:"FriendsBlock_friendsBlock__3iPhu",friendsTitle:"FriendsBlock_friendsTitle__2a0-H",friendWrap:"FriendsBlock_friendWrap__FkoyM"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return E}));var a=n(9),r=n.n(a),o=n(33),s=n(8),c=n(16),i="profileReducer/ADD_POST",u="profileReducer/DELETE_POST",l="profileReducer/SET_STATUS",m={posts:[{id:1,message:"Hello React!",likesCount:23},{id:2,message:"It's nice work",likesCount:11},{id:3,message:"Awesome!",likesCount:7}],profile:null,status:""},d=function(e){return{type:i,newPostText:e}},f=function(e){return{type:l,status:e}},p=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.c.getProfile(e));case 2:n=a.sent,t({type:"profileReducer/SET_USER_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},g=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.b.getStatus(e));case 2:n=a.sent,t(f(n.data));case 4:case"end":return a.stop()}}))}},E=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(f(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:e.posts.length+1,message:t.newPostText,likesCount:0};return Object(s.a)({},e,{newPostText:"",posts:[].concat(Object(o.a)(e.posts),[n])});case u:return Object(s.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case l:return Object(s.a)({},e,{status:t.status});case"profileReducer/SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});default:return e}}}},[[169,1,2]]]);
//# sourceMappingURL=main.bdac5036.chunk.js.map