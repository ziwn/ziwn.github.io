"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[306],{1507:function(e,t,a){a.d(t,{Z:function(){return r}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar-container",attrs:{id:"leftNav"}},[a("h3",{staticStyle:{"text-align":"center",color:"#FFF"}},[e._v(e._s(e.title))]),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":!0,"background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#5CB5FD",router:""}},e._l(e.leftNavList,(function(t,i){return a("div",{key:i},[t.children&&t.children.length>0?a("el-submenu",{ref:"subMenu",refInFor:!0,attrs:{index:t.path,"popper-append-to-body":""}},[a("template",{slot:"title"},[a("i",{class:t.icon}),a("span",[e._v(e._s(t.meta.title))])]),a("el-menu-item-group",e._l(t.children,(function(t,i){return a("el-menu-item",{key:i,attrs:{index:t.path}},[e._v(" "+e._s(t.meta.title)+" ")])})),1)],2):a("el-menu-item",{attrs:{index:t.path}},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])])],1)})),0)],1)},l=[],n={name:"leftNav",data(){return{title:this.$config.title,opened:!0,leftNavList:[{id:"0",path:"/home",name:"首页",icon:"el-icon-s-home",meta:{title:"首页"}},{id:"1",path:"/",name:"认证管理",icon:"el-icon-warning",meta:{title:"认证管理"},children:[{id:"1-1",path:"/realNameAuthentication",name:"实名认证",meta:{title:"实名认证"}},{id:"1-2",path:"/enterpriseAuthentication",name:"企业认证",meta:{title:"企业认证"}},{id:"1-3",path:"/depositAuthentication",name:"押金认证",meta:{title:"押金认证"}}]},{id:"2",path:"/worldChat",name:"世界聊天",icon:"el-icon-chat-line-round",meta:{title:"世界聊天"}},{id:"3",path:"/userManage",name:"用户管理",icon:"el-icon-user-solid",meta:{title:"用户管理"}},{id:"4",path:"/customerManage",name:"客服管理",icon:"el-icon-chat-line-square",meta:{title:"客服管理"}},{id:"5",path:"/chatManage",name:"聊天管理",icon:"el-icon-chat-dot-square",meta:{title:"聊天管理"},children:[{id:"5-1",path:"/privateManage",name:"私聊管理",meta:{title:"私聊管理"}},{id:"5-2",path:"/groupChatManage",name:"群聊管理",meta:{title:"群聊管理"}},{id:"5-3",path:"/violationManage",name:"违规管理",meta:{title:"违规管理"}}]},{id:"6",path:"/cashOutManage",name:"提现管理",icon:"el-icon-bank-card",meta:{title:"提现管理"}},{id:"7",path:"/orderManage",name:"订单管理",icon:"el-icon-s-order",meta:{title:"订单管理"}},{id:"8",path:"/depositManage",name:"押金管理",icon:"el-icon-money",meta:{title:"押金管理"}},{id:"9",path:"/capitalLib",name:"资金池",icon:"el-icon-coin",meta:{title:"资金池"}},{id:"10",path:"/riskLib",name:"风险库",icon:"el-icon-warning",meta:{title:"风险库"}},{id:"11",path:"/streamManage",name:"流水管理",icon:"el-icon-s-data",meta:{title:"流水管理"}},{id:"12",path:"/activityManage",name:"活动管理",icon:"el-icon-attract",meta:{title:"活动管理"}},{id:"13",path:"/powerManage",name:"权限管理",icon:"el-icon-wind-power",meta:{title:"权限管理"}},{id:"14",path:"/setManage",name:"设置管理",icon:"el-icon-s-tools",meta:{title:"设置管理"},children:[{id:"14-1",path:"/regionSeting",name:"地区设置",meta:{title:"地区设置"}},{id:"14-2",path:"/goodsLib",name:"商品库",meta:{title:"商品库"}},{id:"14-3",path:"/authReward",name:"认证奖励",meta:{title:"认证奖励"}},{id:"14-4",path:"/paySet",name:"支付设置",meta:{title:"支付设置"}},{id:"14-5",path:"/appCustom",name:"app自定义",meta:{title:"app自定义"}}]}]}},methods:{}},s=n,o=a(1001),c=(0,o.Z)(s,i,l,!1,null,null,null),r=c.exports},4306:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"worldChat"}},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"世界信息",name:"first"}},[a("div",{staticClass:"worldInfo"},[a("div",{staticClass:"oneDivClass"},[a("div",{staticStyle:{display:"flex","align-items":"center","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"}},[a("div",{staticStyle:{"text-align":"center","background-color":"#5CB5FD",height:"50px",width:"200px","line-height":"50px",color:"#FFFF"}},[e._v(" 当前聊天限制 ")]),a("div",{staticStyle:{"margin-left":"20px"}},[e._v(" 无限制 ")])]),a("div",{staticStyle:{display:"flex","align-items":"center","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)","margin-top":"10px"}},[a("div",{staticStyle:{"text-align":"center","background-color":"#5CB5FD",height:"50px",width:"200px","line-height":"50px",color:"#FFFF"}},[e._v(" 当前状态 ")]),a("div",{staticStyle:{"margin-left":"20px"}},[e._v(" 关闭 ")])])]),a("h3",{staticStyle:{"margin-top":"50px"}},[e._v("世界聊天设置")]),a("el-divider"),a("div",{staticClass:"oneDivClass oneDivFlexClass"},[e._v(" 世界聊天自动开启\\关闭设置： "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("div",{staticClass:"oneDivClass",staticStyle:{display:"flex","align-items":"center"}},[a("label",[e._v("世界聊天用户每日发言次数：")]),a("el-radio-group",{on:{change:e.radioChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:1,border:""}},[e._v("无限制")]),a("el-radio",{attrs:{label:2,border:""}},[e._v("每天3次")]),a("el-radio",{attrs:{label:3,border:""}},[e._v("每天10次")]),a("el-radio",{attrs:{label:4,border:""}},[e._v("自定义")])],1),a("el-input",{staticStyle:{width:"120px","margin-left":"30px"},attrs:{disabled:e.notInput,placeholder:"自定义次数"}})],1),a("div",{staticClass:"oneDivClass oneDivFlexClass"},[e._v(" 世界聊天开启关闭 "),a("el-switch",{attrs:{"active-color":"#5CB5FD","inactive-color":"#444"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),a("div",{staticClass:"oneDivClass"},[e._v(" 关闭时间： "),a("el-time-select",{attrs:{"picker-options":{start:"00:00",step:"00:05",end:"10:10"},placeholder:"设置关闭倒计时时间"},model:{value:e.timeSelectValue,callback:function(t){e.timeSelectValue=t},expression:"timeSelectValue"}})],1),a("div",{staticClass:"oneDivClass"},[a("label",{staticStyle:{"line-height":"50px"}},[e._v("开启提醒：")]),a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入开启提醒"},model:{value:e.startText,callback:function(t){e.startText=t},expression:"startText"}})],1)]),a("div",{staticClass:"oneDivClass"},[a("label",{staticStyle:{"line-height":"50px"}},[e._v("关闭提醒：")]),a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入关闭提醒"},model:{value:e.closeText,callback:function(t){e.closeText=t},expression:"closeText"}})],1)]),a("div",{staticStyle:{height:"60px",width:"100%",display:"flex","justify-content":"flex-end"}},[a("el-button",{staticStyle:{width:"100px","margin-top":"20px"}},[e._v("确定")])],1)],1)]),a("el-tab-pane",{attrs:{label:"聊天记录查找",name:"second"}}),a("el-tab-pane",{attrs:{label:"群成员",name:"third"}})],1),a("div",{staticClass:"switchDiv"},[a("div",{staticStyle:{"text-align":"center",height:"50px",width:"300px","line-height":"50px",color:"#000"}},[e._v(" 实时显示聊天内容（开启\\关闭） ")]),a("div",{staticStyle:{"margin-left":"20px"}},[a("el-switch",{attrs:{"active-color":"#5CB5FD","inactive-color":"#444"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1)])],1)},l=[],n=a(1507),s={components:{leftNav:n.Z},name:"worldChat",data(){return{activeName:"first",timeValue:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],switchValue:!1,closeTime:"",startText:"",closeText:"",radio:1,notInput:!0,timeSelectValue:""}},methods:{handleClick(e,t){console.log(e,t)},radioChange(e){switch(e){case 1:break;case 2:break;case 3:break;case 4:this.notInput=!1}this.notInput=4!=e}}},o=s,c=a(1001),r=(0,c.Z)(o,i,l,!1,null,"4004118a",null),d=r.exports}}]);
//# sourceMappingURL=306.c94fe016.js.map