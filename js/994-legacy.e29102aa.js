"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[994],{69798:function(t,e,a){a.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-pagination",{attrs:{"page-sizes":t.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})},l=[],s=(a(9653),{name:"pagination",props:{total:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,20,30]}}},methods:{handleSizeChange:function(t){this.$emit("handleSizeChange",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChange",t)}}}),i=s,o=a(1001),r=(0,o.Z)(i,n,l,!1,null,null,null),c=r.exports},75994:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activityManage"},[a("div",{staticClass:"bottom"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"活动设置",name:"activitySet"}},[a("activitySetEl")],1),a("el-tab-pane",{attrs:{label:"积分商品库",name:"integralGoodsLib"}}),a("el-tab-pane",{attrs:{label:"活动参与记录",name:"activityRecoud"}})],1)],1)])},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"activitySet"}},[a("div",{staticClass:"top"},[a("el-button",{staticClass:"selectInput",attrs:{type:"primary"}},[t._v("新增活动")]),a("div",[a("el-input",{staticClass:"selectInput",attrs:{placeholder:"标题"},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),a("el-button",{staticClass:"selectInput",attrs:{type:"primary"}},[t._v("查询")])],1)],1),a("div",{staticClass:"bottom"},[a("el-table",{attrs:{data:t.tableData,height:"1050",border:"",stripe:"",lazy:"",size:"mini","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"id",label:"昵称",width:"150"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"name",label:"华海ID"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount1",label:"交易单号"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount2",label:"商品名称"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"商品单价"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"商品数量"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"情况说明"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"申请时间"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"状态"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"详情"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("详细信息")])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("pagination",{attrs:{total:251},on:{handleSizeChange:t.handleSizeChange,handleCurrentChange:t.handleCurrentChange}})],1)])},i=[],o=a(80349),r=a(69798),c={name:"activitySet",components:{pagination:r.Z},data:function(){return{dialog:"",huahaiNumber:"",userName:"",userId:"",phoneNumber:"",state:"",startTime:"",endTime:"",dialogFormVisible:!1,areaSelectData:o.regionData,selectedOptions:[],selectCommand:"待审核",tableData:[{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17}]}},created:function(){},methods:{handleClick:function(t){this.dialog=t,this.$router.push("/userInfo")},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},handleChange:function(){for(var t=0;t<this.selectedOptions.length;t++)o.CodeToText[this.selectedOptions[t]]},handleCommand:function(t){this.selectCommand=t}}},u=c,d=a(1001),m=(0,d.Z)(u,s,i,!1,null,"6f5a7e3f",null),p=m.exports,h={name:"activityManage",data:function(){return{activeName:"activitySet"}},components:{activitySetEl:p},created:function(){},methods:{handleClick:function(t,e){console.log(t,e)},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))}}},b=h,C=(0,d.Z)(b,n,l,!1,null,"2dbf32ac",null),g=C.exports}}]);
//# sourceMappingURL=994-legacy.e29102aa.js.map