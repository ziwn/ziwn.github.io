"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[40],{69798:function(t,a,e){e.d(a,{Z:function(){return c}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-pagination",{attrs:{"page-sizes":t.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})},l=[],s=(e(9653),{name:"pagination",props:{total:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,20,30]}}},methods:{handleSizeChange:function(t){this.$emit("handleSizeChange",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChange",t)}}}),i=s,r=e(1001),o=(0,r.Z)(i,n,l,!1,null,null,null),c=o.exports},70040:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goodsLib"},[e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"商品类型",name:"goodsType"}},[e("div",{staticClass:"top"},[e("el-button",{attrs:{type:"primary"}},[t._v(" 新增 ")]),e("div",{staticClass:"top"},[e("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}}),e("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"}},[t._v(" 搜索 ")])],1)],1),e("div",{staticClass:"bottom"},[e("el-table",{attrs:{data:t.tableData,height:"1050",border:"",stripe:"",lazy:"",size:"mini","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"id",label:"商品类型",width:"150"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"name",label:"商品名称"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount1",label:"商品阶段"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount2",label:"计量单位"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"条数"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"商品描述"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("修改")]),e("el-divider",{attrs:{direction:"vertical"}}),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("删除")])]}}])})],1)],1),e("div",{staticClass:"pagination"},[e("pagination",{attrs:{total:251},on:{handleSizeChange:t.handleSizeChange,handleCurrentChange:t.handleCurrentChange}})],1)]),e("el-tab-pane",{attrs:{label:"商品库",name:"goodsLib"}},[e("div",[t._v("asdasdasd")])])],1)],1)},l=[],s=e(69798),i={name:"goodsLib",components:{pagination:s.Z},data:function(){return{activeName:"goodsType",tableData:[{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17}]}}},r=i,o=e(1001),c=(0,o.Z)(r,n,l,!1,null,"9cfe69ca",null),u=c.exports}}]);
//# sourceMappingURL=40-legacy.01c6c41f.js.map