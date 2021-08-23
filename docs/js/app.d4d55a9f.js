(function(e){function t(t){for(var a,r,c=t[0],l=t[1],i=t[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/livekit-tokenkit/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e3e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("a6f4");a["default"].use(o["a"]);var s,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Appbar"),n("v-main",[n("Cards")],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"text-center center"},[e.isConnected?e._e():n("v-col",{staticClass:"align-content-md-center",attrs:{align:"center",cols:"12",sm:"6",md:"4"}},[n("CreateToken")],1),n("v-col",{staticClass:"align-content-md-center",attrs:{align:"center",cols:"12",sm:"6",md:"4"}},[n("Connect")],1),n("v-col",{staticClass:"align-content-md-center",attrs:{align:"center",cols:"12",sm:"6",md:"4"}},[n("Chat")],1)],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{attrs:{id:"createtoken"}},[e._v(" Create Token ("+e._s(e.tokens.length)+") ")]),n("v-card-actions",[n("v-text-field",{staticClass:"pt-7 mr-3",attrs:{label:"server",placeholder:"server",outlined:""},model:{value:e.server,callback:function(t){e.server=t},expression:"server"}}),e.status.connected?n("v-btn",{on:{click:function(t){return e.disconnectWs()}}},[e._v("Disconnect")]):n("v-btn",{on:{click:function(t){return e.connectWs(e.server)}}},[e._v("Connect")])],1),n("v-form",{ref:"form",attrs:{onSubmit:"return false;"},on:{submit:e.requestMyToken}},[n("v-card-actions",[n("v-text-field",{staticClass:"mr-3",attrs:{rules:[e.rules.minLength],disabled:!e.status.connected,label:"room",placeholder:"room",outlined:""},model:{value:e.form.room,callback:function(t){e.$set(e.form,"room",t)},expression:"form.room"}}),n("v-text-field",{staticClass:"ml-3",attrs:{rules:[e.rules.minLength],disabled:!e.status.connected,label:"username",placeholder:"username",outlined:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("v-card-text",{staticClass:"pt-0 pl-0 pr-0 pb-6"},[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" Options ")]),n("v-expansion-panel-content",[n("v-card-text",[n("v-checkbox",{attrs:{label:"roomCreate"},model:{value:e.form.roomCreate,callback:function(t){e.$set(e.form,"roomCreate",t)},expression:"form.roomCreate"}}),n("v-checkbox",{attrs:{label:"roomList"},model:{value:e.form.roomList,callback:function(t){e.$set(e.form,"roomList",t)},expression:"form.roomList"}}),n("v-checkbox",{attrs:{label:"roomJoin"},model:{value:e.form.roomJoin,callback:function(t){e.$set(e.form,"roomJoin",t)},expression:"form.roomJoin"}}),n("v-checkbox",{attrs:{label:"roomAdmin"},model:{value:e.form.roomAdmin,callback:function(t){e.$set(e.form,"roomAdmin",t)},expression:"form.roomAdmin"}}),n("v-checkbox",{attrs:{label:"canPublish"},model:{value:e.form.canPublish,callback:function(t){e.$set(e.form,"canPublish",t)},expression:"form.canPublish"}}),n("v-checkbox",{attrs:{label:"canSubscribe"},model:{value:e.form.canSubscribe,callback:function(t){e.$set(e.form,"canSubscribe",t)},expression:"form.canSubscribe"}}),n("v-checkbox",{attrs:{label:"hidden"},model:{value:e.form.hidden,callback:function(t){e.$set(e.form,"hidden",t)},expression:"form.hidden"}}),n("v-subheader",{staticClass:"pl-0"},[e._v(" Duration ")]),n("v-btn-toggle",{attrs:{tile:"",color:"blue accent-3",group:""},model:{value:e.form.ttl,callback:function(t){e.$set(e.form,"ttl",t)},expression:"form.ttl"}},[n("v-btn",{attrs:{value:"1h"}},[e._v("1h")]),n("v-btn",{attrs:{value:"6h"}},[e._v("6h")]),n("v-btn",{attrs:{value:"1w"}},[e._v("1w")]),n("v-btn",{attrs:{value:"30d"}},[e._v("30d")]),n("v-btn",{attrs:{value:"1y"}},[e._v("1y")])],1)],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{type:"submit",disabled:!e.status.connected,loading:e.status.success}},[e._v("GET TOKEN")])],1)],1)],1)},d=[],v=n("5530"),p=Object(o["b"])({showConnect:!0}),m=n("2909"),f=n("3835"),b=n("b85c"),h=(n("b0c0"),n("4de4"),n("caad"),n("2532"),n("99af"),"ws://localhost:7880"),g="ws://localhost:5555",k=n("4c5b"),x=Object(o["c"])(!1),C=Object(o["c"])([]),_=Object(o["c"])([]),T=Object(o["b"])({participants:0}),O=new TextEncoder,y=new TextDecoder,V=function(){x.value},j=function(){console.log("callback ")},S=function(){s.disconnect(),x.value=!1},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;Object(k["connect"])(t,e,{audio:!1,video:!1}).then((function(e){console.log("room ",s),s=e,x.value=!0,console.log("connected to room",e.name),console.log("participants in room:",e.participants.size);var t=function(){console.log(e.participants),console.log(" ---- participants ---- ");var t,n=Object(b["a"])(e.participants);try{for(n.s();!(t=n.n()).done;){var a=Object(f["a"])(t.value,2),o=(a[0],a[1]);console.log(o.identity)}}catch(s){n.e(s)}finally{n.f()}};t(),T.participants=e.participants.size;var n=function(){var t,n=Object(m["a"])(_.value),a=[],o=Object(b["a"])(e.participants);try{for(o.s();!(t=o.n()).done;){var s=Object(f["a"])(t.value,2),r=(s[0],s[1]);a.push(r.identity)}}catch(x){o.e(x)}finally{o.f()}console.log("nowParticipants ",a),console.log("tmpParticipants ",n);var c=function(){return a.filter((function(e){return!n.includes(e)}))},l=function(){return n.filter((function(e){return!a.includes(e)}))},i=c(),u=l();if(i.length>0){var d,v=Object(b["a"])(i);try{for(v.s();!(d=v.n()).done;){var p=d.value;console.log("join ",p),_.value.push(p),C.value.push({content:" ".concat(p," joined "),isStatus:!0})}}catch(x){v.e(x)}finally{v.f()}}if(u.length>0){console.log("left: \t",u[0]);var h,g=Object(b["a"])(u);try{var k=function(){var e=h.value;_.value=_.value.filter((function(t){return t!==e})),C.value.push({content:" ".concat(e," left "),isStatus:!0})};for(g.s();!(h=g.n()).done;)k()}catch(x){g.e(x)}finally{g.f()}}console.log("changeParticipants"),_.value=[].concat(a)};n(),e.on(k["RoomEvent"].ParticipantConnected,n).on(k["RoomEvent"].ParticipantDisconnected,n).on(k["RoomEvent"].TrackSubscribed,n).on(k["RoomEvent"].TrackUnsubscribed,n).on(k["RoomEvent"].ActiveSpeakersChanged,j).on(k["RoomEvent"].Disconnected,V).on(k["RoomEvent"].DataReceived,(function(e,t,n){console.log("data receive");var a=y.decode(e),o=JSON.parse(a);console.log(o.message),C.value.push(o),console.log("strData ",o),console.log("data receive")}))}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fill your data plies";console.log("sendData ");var t=O.encode(e);s.localParticipant.publishData(t,k["DataPacket_Kind"].RELIABLE)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C.value.push(Object(v["a"])(Object(v["a"])({},e),{},{isSender:!0}));var t=JSON.stringify(e),n=O.encode(t);s.localParticipant.publishData(n,k["DataPacket_Kind"].RELIABLE)};console.log("livekit.js");var $,A=n("15fd"),F=n("1da1"),R=(n("d3b7"),n("96cf"),n("1232")),D=["username","ttl"],J=Object(o["c"])(""),B=Object(o["c"])([]),M=Object(o["c"])([]),L=Object(o["c"])(""),z=Object(o["c"])(""),N=Object(o["b"])({success:!1,connected:!1});z.value=g;var I=function(e){$.close(),N.connected=!1},W=function(e){$=new WebSocket(e),$.onopen=function(){$.send(JSON.stringify({listRooms:!0})),N.connected=!0},$.onmessage=function(e){try{var t=JSON.parse(e.data);if(console.log("DATA ",t.createToken),e.data.test&&console.log(e.data.test),t.createToken){var n=t.createToken,a=Object(R["a"])(n.token);n.decode=a,K(n),N.success=!0}else t.listRooms&&(M.value=t.listRooms,console.log("rooms ",M))}catch(o){console.log(o),console.log(e.data)}},$.onclose=function(){N.connected=!1}},q=function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={identity:t.username,ttl:t.ttl},t.username,t.ttl,a=Object(A["a"])(t,D),o={at:n,options:a},$.send(JSON.stringify({createToken:o}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=JSON.parse(localStorage.getItem("tokens"))||[],n=e?[e].concat(Object(m["a"])(t)):Object(m["a"])(t);localStorage.setItem("tokens",JSON.stringify(n)),B.value=n},K=function(e){localStorage.setItem("token",JSON.stringify(e)),J.value=e,H(e)},G=function(){J.value=JSON.parse(localStorage.getItem("token")),H()};W(z.value),G();var U={name:"CreateToken",created:function(){},setup:function(){return Object(o["d"])(N,(function(e,t){N.success&&setTimeout((function(){N.success=!1}),500)})),{ui:p,token:J,tokens:B,status:N,server:z,isConnected:x,requestToken:q,connectWs:W,disconnectWs:I}},data:function(){return{form:{room:"",username:"",roomCreate:!0,roomList:!0,roomJoin:!0,roomAdmin:!0,canPublish:!0,canSubscribe:!0,hidden:!1,ttl:"1y"},rules:{minLength:function(e){return e&&e.length>0||"min length 1 char"}}}},methods:{connect:function(){},requestMyToken:function(){var e=this;this.$refs.form.validate()&&(q(Object(v["a"])({},this.form)),setTimeout((function(){e.$refs.form.reset()}),500))}}},Q=U,X=n("2877"),Y=n("6544"),Z=n.n(Y),ee=n("8336"),te=n("a609"),ne=n("b0af"),ae=n("99d9"),oe=n("ac7c"),se=n("cd55"),re=n("49e2"),ce=n("c865"),le=n("0393"),ie=n("4bd4"),ue=n("2fa4"),de=n("e0c7"),ve=n("8654"),pe=Object(X["a"])(Q,u,d,!1,null,null,null),me=pe.exports;Z()(pe,{VBtn:ee["a"],VBtnToggle:te["a"],VCard:ne["a"],VCardActions:ae["a"],VCardText:ae["b"],VCardTitle:ae["c"],VCheckbox:oe["a"],VExpansionPanel:se["a"],VExpansionPanelContent:re["a"],VExpansionPanelHeader:ce["a"],VExpansionPanels:le["a"],VForm:ie["a"],VSpacer:ue["a"],VSubheader:de["a"],VTextField:ve["a"]});var fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{align:"left"}},[n("v-card-title",{staticClass:"text-h5"},[e._v(" Connect ")]),n("v-card-actions",[n("v-select",{attrs:{disabled:e.isConnected,"item-text":"name",items:e.tokens,filled:"",label:"tokens","return-object":"",dense:""},model:{value:e.selectedToken,callback:function(t){e.selectedToken=t},expression:"selectedToken"}})],1),e.selectedToken?n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" Token Info ")]),n("v-expansion-panel-content",[n("v-card-text",[n("json-viewer",{attrs:{sort:"",value:e.selectedToken.decode}})],1),n("v-card-actions",[n("v-text-field",{staticClass:"pt-7 mr-3",attrs:{label:"token",outlined:""},model:{value:e.selectedToken.token,callback:function(t){e.$set(e.selectedToken,"token",t)},expression:"selectedToken.token"}}),n("v-btn",{on:{click:function(t){return e.copyToken()}}},[e._v("Copy")])],1)],1)],1)],1):e._e(),n("v-card-actions",{staticClass:"mt-6"},[n("v-text-field",{staticClass:"mr-3",attrs:{disabled:e.isConnected,label:"server",placeholder:"server",outlined:""},model:{value:e.server,callback:function(t){e.server=t},expression:"server"}})],1),n("v-card-actions",[n("v-spacer"),e.isConnected?n("v-btn",{on:{click:function(t){return e.disconnectWs()}}},[e._v("disconnect")]):n("v-btn",{attrs:{disabled:!e.selectedToken.token},on:{click:function(t){return e.connect()}}},[e._v("connect")])],1)],1)},be=[],he=n("349e"),ge=n.n(he),ke={name:"Connect",setup:function(){return{ui:p,token:J,tokens:B,isConnected:x,selectedToken:L,requestToken:q,disconnectWs:S}},data:function(){return{myTokens:["Foo","Bar","Fizz","Buzz"],server:h}},methods:{connect:function(){w(L.value.token,this.server)},copyToken:function(){navigator.clipboard.writeText(L.value.token)}},components:{JsonViewer:ge.a}},xe=ke,Ce=n("b974"),_e=Object(X["a"])(xe,fe,be,!1,null,null,null),Te=_e.exports;Z()(_e,{VBtn:ee["a"],VCard:ne["a"],VCardActions:ae["a"],VCardText:ae["b"],VCardTitle:ae["c"],VExpansionPanel:se["a"],VExpansionPanelContent:re["a"],VExpansionPanelHeader:ce["a"],VExpansionPanels:le["a"],VSelect:Ce["a"],VSpacer:ue["a"],VTextField:ve["a"]});var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isConnected?n("v-card",{attrs:{align:"left"}},[n("v-form",{attrs:{onSubmit:"return false;"},on:{submit:e.sendMyTextMessage}},[n("v-card-title",{staticClass:"text-h5"},[e._v(" Chat "),n("h6",{staticClass:"mt-6 ml-5"},[e._v(e._s(e.selectedToken.name)+" - "+e._s(e.selectedToken.room))])]),n("v-card-text",{staticClass:"pt-0 pl-0 pr-0 pb-6"},[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" Participants ("+e._s(e.participants.length)+") ")]),n("v-expansion-panel-content",e._l(e.participants,(function(t){return n("div",[e._v(" "+e._s(t)+" ")])})),0)],1)],1)],1),n("v-card-text",{staticClass:"pa-0"},[n("div",{attrs:{id:"scrollDiv"}},e._l(e.messages,(function(t){return n("span",[t.isSender?n("div",[n("v-row",[n("v-spacer"),n("v-card",{staticClass:"pa-3 ma-4 mr-6 rounded-l",attrs:{"max-width":"60%",color:"#F3FDE3"}},[n("v-card-text",{staticClass:"ma-0 pa-0"},[e._v(" "+e._s(t.content)+" "+e._s(t.from)+" ")]),n("v-card-text",{staticClass:"ma-0 pa-0"},[n("p",{staticClass:"ma-0 pa-0 text-right caption"},[n("v-icon",{attrs:{color:"green","x-small":""}},[e._v("mdi-check")]),e._v(" "+e._s(e.getTime())+" ")],1)])],1)],1)],1):e._e(),t.isStatus?n("div",[n("v-row",[n("v-spacer"),n("v-card",{staticClass:"pa-1 pb-0 mb-3 ma-2",attrs:{color:"#E1F1FB"}},[e._v(" "+e._s(t.content)+" ")]),n("v-spacer")],1)],1):e._e(),t.isStatus||t.isSender?e._e():n("div",[n("v-row",[n("v-card",{staticClass:"pa-3 ma-4 mr-6",attrs:{"max-width":"60%",color:"#FFFFFF",rounded:""}},[n("v-card-text",{staticClass:"ma-0 pa-0"},[e._v(" "+e._s(t.content)+" "+e._s(t.from)+" ")]),n("v-card-text",{staticClass:"ma-0 pa-0"},[n("p",{staticClass:"ma-0 pa-0 text-right caption"},[n("v-icon",{attrs:{color:"green","x-small":""}},[e._v("mdi-check")]),e._v(" "+e._s(e.getTime())+" ")],1)])],1),n("v-spacer")],1)],1)])})),0)]),e.selectedToken&&e.isConnected?n("v-card-actions",[n("v-text-field",{staticClass:"pt-7 mr-3",attrs:{label:"message",outlined:"",rounded:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-btn",{attrs:{fab:"",dark:"",color:"blue"}},[n("v-icon",[e._v("mdi-send")])],1)],1):e._e()],1)],1):e._e()},ye=[],Ve=function(){var e=document.getElementById("scrollDiv");e.scroll({top:e.scrollHeight,behavior:"smooth"})},je={name:"Connect",setup:function(){return{ui:p,token:J,tokens:B,selectedToken:L,isConnected:x,messages:C,participants:_,requestToken:q,sendData:E,sendTextMessage:P}},data:function(){return{myTokens:["Foo","Bar","Fizz","Buzz"],server:h,message:""}},created:function(){Object(o["d"])(C,(function(){setTimeout(Ve,300)}))},methods:{sendMyTextMessage:function(){P({from:L.name,content:this.message}),this.message=""},getTime:function(){var e=new Date;return e.getHours()+":"+e.getMinutes()}},components:{JsonViewer:ge.a},computed:{}},Se=je,we=(n("f196"),n("132d")),Ee=n("0fd9"),Pe=Object(X["a"])(Se,Oe,ye,!1,null,null,null),$e=Pe.exports;Z()(Pe,{VBtn:ee["a"],VCard:ne["a"],VCardActions:ae["a"],VCardText:ae["b"],VCardTitle:ae["c"],VExpansionPanel:se["a"],VExpansionPanelContent:re["a"],VExpansionPanelHeader:ce["a"],VExpansionPanels:le["a"],VForm:ie["a"],VIcon:we["a"],VRow:Ee["a"],VSpacer:ue["a"],VTextField:ve["a"]});var Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{align:"left"}},[n("v-card-title",{staticClass:"text-h5"},[e._v(" Rooms ")]),n("v-card-actions",e._l(e.rooms,(function(t){return n("div",[e._v(" "+e._s(t.name)+", ")])})),0)],1)},Fe=[],Re={name:"Connect",setup:function(){return{status:N,rooms:M}},data:function(){return{}},methods:{},components:{}},De=Re,Je=Object(X["a"])(De,Ae,Fe,!1,null,null,null),Be=Je.exports;Z()(Je,{VCard:ne["a"],VCardActions:ae["a"],VCardTitle:ae["c"]});var Me={name:"Cards",data:function(){return{}},setup:function(){return{isConnected:x}},components:{CreateToken:me,Connect:Te,Chat:$e,Rooms:Be}},Le=Me,ze=n("62ad"),Ne=n("a523"),Ie=Object(X["a"])(Le,l,i,!1,null,null,null),We=Ie.exports;Z()(Ie,{VCol:ze["a"],VContainer:Ne["a"],VRow:Ee["a"]});var qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"white"}},[n("v-spacer"),n("v-spacer"),e.isConnected?n("v-alert",{staticClass:"pt-8",attrs:{type:"success",dense:""}},[e._v("livekit")]):n("v-alert",{attrs:{type:"warning",dense:""}},[e._v("livekit")]),e.status.connected?n("v-alert",{staticClass:"pt-8 ml-2",attrs:{type:"success",dense:""}},[e._v("token")]):n("v-alert",{staticClass:"ml-2",attrs:{type:"warning",dense:""}},[e._v("token")])],1)},He=[],Ke={name:"Connect",setup:function(){return{selectedToken:L,isConnected:x,status:N}},data:function(){return{}},methods:{},components:{}},Ge=Ke,Ue=n("0798"),Qe=n("40dc"),Xe=Object(X["a"])(Ge,qe,He,!1,null,null,null),Ye=Xe.exports;Z()(Xe,{VAlert:Ue["a"],VAppBar:Qe["a"],VSpacer:ue["a"]});var Ze={name:"App",components:{Cards:We,Appbar:Ye},data:function(){return{}}},et=Ze,tt=n("7496"),nt=n("f6c4"),at=Object(X["a"])(et,r,c,!1,null,null,null),ot=at.exports;Z()(at,{VApp:tt["a"],VMain:nt["a"]});var st=n("f309");a["default"].use(st["a"]);var rt=new st["a"]({});a["default"].config.productionTip=!1,new a["default"]({vuetify:rt,render:function(e){return e(ot)}}).$mount("#app")},f196:function(e,t,n){"use strict";n("1e3e")}});
//# sourceMappingURL=app.d4d55a9f.js.map