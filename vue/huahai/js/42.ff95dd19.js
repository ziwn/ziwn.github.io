"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[42],{6042:function(a,t,e){e.r(t),e.d(t,{default:function(){return r}});var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"realNameAuthentication"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"topLeft"},[e("el-input",{staticClass:"selectInput",attrs:{placeholder:"群名"},model:{value:a.huahaiNumber,callback:function(t){a.huahaiNumber=t},expression:"huahaiNumber"}}),e("el-input",{staticClass:"selectInput",attrs:{placeholder:"群主"},model:{value:a.userName,callback:function(t){a.userName=t},expression:"userName"}}),e("el-date-picker",{staticClass:"selectInput",attrs:{type:"date",placeholder:"起始日期（包含）"},model:{value:a.startTime,callback:function(t){a.startTime=t},expression:"startTime"}}),e("el-date-picker",{staticClass:"selectInput",attrs:{type:"date",placeholder:"截至日期（包含）"},model:{value:a.endTime,callback:function(t){a.endTime=t},expression:"endTime"}}),e("el-input",{staticClass:"selectInput",attrs:{placeholder:"状态"},model:{value:a.userName,callback:function(t){a.userName=t},expression:"userName"}}),e("el-input",{staticClass:"selectInput",attrs:{placeholder:"状态"},model:{value:a.userName,callback:function(t){a.userName=t},expression:"userName"}}),e("el-button",{staticClass:"selectInput",attrs:{type:"primary"}},[a._v("查询")])],1)]),e("div",{staticClass:"bottom"},[e("el-table",{attrs:{data:a.tableData,height:a.bottomHeight,border:"",lazy:"","row-key":"id",size:"mini","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"id",label:"群名称",width:"180"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"name",label:"群主名称"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount1",label:"人数"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount2",label:"创建时间"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",sortable:"",label:"状态"}}),e("el-table-column",{staticClass:"tableClass",attrs:{align:"center",prop:"amount3",label:"详情"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return a.handleClick(t.row)}}},[a._v("详细信息")])]}}])})],1)],1),e("div",{staticClass:"pagination"},[e("pagination",{attrs:{total:50},on:{handleSizeChange:a.handleSizeChange,handleCurrentChange:a.handleCurrentChange}})],1),e("el-dialog",{attrs:{title:"详细信息",visible:a.dialogFormVisible},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[e("h3",[a._v("华海号")]),e("el-input",{attrs:{placeholder:"华海号",disabled:!0},model:{value:a.dialog.id,callback:function(t){a.$set(a.dialog,"id",t)},expression:"dialog.id"}}),e("h3",[a._v("用户昵称")]),e("el-input",{attrs:{placeholder:"用户昵称",disabled:!0},model:{value:a.dialog.name,callback:function(t){a.$set(a.dialog,"name",t)},expression:"dialog.name"}}),e("h3",[a._v("企业名称")]),e("el-input",{attrs:{placeholder:"企业名称",disabled:!0},model:{value:a.dialog.amount1,callback:function(t){a.$set(a.dialog,"amount1",t)},expression:"dialog.amount1"}}),e("h3",[a._v("信用代码")]),e("el-input",{attrs:{placeholder:"信用代码",disabled:!0},model:{value:a.dialog.amount2,callback:function(t){a.$set(a.dialog,"amount2",t)},expression:"dialog.amount2"}}),e("h3",[a._v("提交时间")]),e("el-input",{attrs:{placeholder:"提交时间",disabled:!0},model:{value:a.dialog.amount3,callback:function(t){a.$set(a.dialog,"amount3",t)},expression:"dialog.amount3"}}),e("h3",[a._v("状态")]),e("el-input",{attrs:{placeholder:"状态",disabled:!0},model:{value:a.dialog.amount3,callback:function(t){a.$set(a.dialog,"amount3",t)},expression:"dialog.amount3"}}),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){a.dialogFormVisible=!1,a.selectedOptions=[]}}},[a._v("关 闭")])],1),e("el-cascader",{staticClass:"full-width",attrs:{options:a.areaSelectData,size:"large",placeholder:"请选择您所在的城市"},on:{change:a.handleChange},model:{value:a.selectedOptions,callback:function(t){a.selectedOptions=t},expression:"selectedOptions"}})],1)],1)},l=[],o=e(349),i=e(9798),s={name:"realNameAuthentication",components:{pagination:i.Z},data(){return{bottomHeight:0,dialog:"",huahaiNumber:"",userName:"",userId:"",phoneNumber:"",state:"",startTime:"",endTime:"",dialogFormVisible:!1,areaSelectData:o.regionData,selectedOptions:[],selectCommand:"待审核",tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10,children:[{id:31,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:32,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"13",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"14",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"15",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"16",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"17",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"18",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"19",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"20",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"21",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"22",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"23",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"24",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"25",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"26",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"27",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"28",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"29",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"30",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"66",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"77",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"33",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"34",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15},{id:"35",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},created(){this.bottomHeight=document.body.clientHeight-240+"px",this.resize()},methods:{handleClick(a){this.dialog=a,this.dialogFormVisible=!this.dialogFormVisible},handleSizeChange(a){console.log(`每页 ${a} 条`)},handleCurrentChange(a){console.log(`当前页: ${a}`)},handleChange(){let a="";for(let t=0;t<this.selectedOptions.length;t++)a+=o.CodeToText[this.selectedOptions[t]]},handleCommand(a){this.selectCommand=a},resize(){let a=this;window.onresize=function(){a.bottomHeight=document.body.clientHeight-240+"px"}}}},m=s,u=e(1001),d=(0,u.Z)(m,n,l,!1,null,"689b3de2",null),r=d.exports}}]);
//# sourceMappingURL=42.ff95dd19.js.map