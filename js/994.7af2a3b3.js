"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[994],{9798:function(e,t,a){a.d(t,{Z:function(){return c}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{attrs:{"page-sizes":e.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})},n=[],s={name:"pagination",props:{total:{type:Number,default:10},pageSizes:{type:Array,default:()=>[5,10,20,30]}},methods:{handleSizeChange(e){this.$emit("handleSizeChange",e)},handleCurrentChange(e){this.$emit("handleCurrentChange",e)}}},i=s,r=a(1001),o=(0,r.Z)(i,l,n,!1,null,null,null),c=o.exports},5994:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"activityManage"},[a("div",{staticClass:"bottom"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"活动设置",name:"activitySet"}},[a("activitySetEl")],1),a("el-tab-pane",{attrs:{label:"积分商品库",name:"integralGoodsLib"}}),a("el-tab-pane",{attrs:{label:"活动参与记录",name:"activityRecoud"}})],1)],1)])},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"activitySet"}},[a("div",{staticClass:"top"},[a("el-button",{staticClass:"selectInput",attrs:{type:"primary"}},[e._v("新增活动")]),a("div",[a("el-input",{staticClass:"selectInput",attrs:{placeholder:"标题"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("el-button",{staticClass:"selectInput",attrs:{type:"primary"}},[e._v("查询")])],1)],1),a("div",{staticClass:"bottom"},[a("el-table",{attrs:{data:e.tableData,height:"1050",border:"",stripe:"",lazy:"",size:"mini","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"id",label:"昵称",width:"150"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"name",label:"华海ID"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount1",label:"交易单号"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount2",label:"商品名称"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"商品单价"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"商品数量"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"情况说明"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"申请时间"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"状态"}}),a("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"详情"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("详细信息")])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("pagination",{attrs:{total:251},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}})],1)])},i=[],r=a(349),o=a(9798),c={name:"activitySet",components:{pagination:o.Z},data(){return{dialog:"",huahaiNumber:"",userName:"",userId:"",phoneNumber:"",state:"",startTime:"",endTime:"",dialogFormVisible:!1,areaSelectData:r.regionData,selectedOptions:[],selectCommand:"待审核",tableData:[{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17}]}},created(){},methods:{handleClick(e){this.dialog=e,this.$router.push("/userInfo")},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)},handleChange(){let e="";for(let t=0;t<this.selectedOptions.length;t++)e+=r.CodeToText[this.selectedOptions[t]]},handleCommand(e){this.selectCommand=e}}},u=c,d=a(1001),m=(0,d.Z)(u,s,i,!1,null,"6f5a7e3f",null),p=m.exports,h={name:"activityManage",data(){return{activeName:"activitySet"}},components:{activitySetEl:p},created(){},methods:{handleClick(e,t){console.log(e,t)},handleSizeChange(e){console.log(`每页 ${e} 条`)},handleCurrentChange(e){console.log(`当前页: ${e}`)}}},b=h,C=(0,d.Z)(b,l,n,!1,null,"2dbf32ac",null),g=C.exports}}]);
//# sourceMappingURL=994.7af2a3b3.js.map