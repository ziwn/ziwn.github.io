"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[254],{1254:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"worldChat"}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"世界信息",name:"first"}},[a("div",{staticClass:"worldInfo"},[a("div",{staticClass:"oneDivClass"},[a("div",{staticStyle:{display:"flex","align-items":"center","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"}},[a("div",{staticStyle:{"text-align":"center","background-color":"#5CB5FD",height:"50px",width:"200px","line-height":"50px",color:"#FFFF"}},[e._v(" 当前聊天限制 ")]),a("div",{staticStyle:{"margin-left":"20px"}},[e._v(" 无限制 ")])]),a("div",{staticStyle:{display:"flex","align-items":"center","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)","margin-top":"10px"}},[a("div",{staticStyle:{"text-align":"center","background-color":"#5CB5FD",height:"50px",width:"200px","line-height":"50px",color:"#FFFF"}},[e._v(" 当前状态 ")]),a("div",{staticStyle:{"margin-left":"20px"}},[e._v(" 关闭 ")])])]),a("el-divider"),a("h3",[e._v("世界聊天设置")]),a("div",{staticClass:"oneDivClass oneDivFlexClass"},[e._v(" 世界聊天自动开启\\关闭设置： "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.timeValue,callback:function(t){e.timeValue=t},expression:"timeValue"}})],1),a("div",{staticClass:"oneDivClass oneDivFlexClass"},[e._v(" 世界聊天开启关闭 "),a("el-switch",{attrs:{"active-color":"#5CB5FD","inactive-color":"#444"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),a("div",{staticClass:"oneDivClass"},[e._v(" 关闭时间： "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.closeTime,callback:function(t){e.closeTime=t},expression:"closeTime"}})],1),a("div",{staticClass:"oneDivClass"},[e._v(" 开启提醒： "),a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入开启提醒"},model:{value:e.startText,callback:function(t){e.startText=t},expression:"startText"}})],1)]),a("div",{staticClass:"oneDivClass"},[e._v(" 关闭提醒： "),a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入关闭提醒"},model:{value:e.closeText,callback:function(t){e.closeText=t},expression:"closeText"}})],1)]),a("div",{staticStyle:{height:"60px",width:"100%",display:"flex","justify-content":"flex-end"}},[a("el-button",{staticStyle:{width:"100px","margin-top":"20px"}},[e._v("确定")])],1)],1)]),a("el-tab-pane",{attrs:{label:"聊天记录查找",name:"second"}}),a("el-tab-pane",{attrs:{label:"群成员",name:"third"}})],1),a("div",{staticClass:"switchDiv"},[a("div",{staticStyle:{"text-align":"center",height:"50px",width:"300px","line-height":"50px",color:"#000"}},[e._v(" 实时显示聊天内容（开启\\关闭） ")]),a("div",{staticStyle:{"margin-left":"20px"}},[a("el-switch",{attrs:{"active-color":"#5CB5FD","inactive-color":"#444"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1)])],1)},i=[],s={name:"worldChat",data(){return{activeName:"first",timeValue:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],switchValue:!1,closeTime:"",startText:"",closeText:""}},methods:{handleClick(e,t){console.log(e,t)}}},c=s,n=a(1001),o=(0,n.Z)(c,l,i,!1,null,null,null),r=o.exports}}]);
//# sourceMappingURL=254.e2861d61.js.map