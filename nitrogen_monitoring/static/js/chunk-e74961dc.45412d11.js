(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e74961dc"],{"2a58":function(t,e,i){},4248:function(t,e,i){"use strict";i("2a58")},7885:function(t,e,i){"use strict";i("acbe")},"7e20":function(t,e,i){},"89bf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"n2-error"},[i("Select",{attrs:{floorList:t.floorList,lineList:t.lineList},on:{seek:t.seek}}),i("div",{staticClass:"content-middle"},[i("Analysis",{attrs:{analysis:t.analysis,exceptionList:t.exceptionList},on:{clickShowData:t.clickShowData}})],1),i("div",{staticClass:"content-bottom"},[i("Info",{attrs:{exceptionList:t.showExceptionList},on:{chuLi:t.chuLi,weiXiu:t.weiXiu}})],1)],1)},s=[],o=i("2909"),a=(i("4de4"),i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select"},[i("div",{staticClass:"floor-select"},[i("span",[t._v("楼层:")]),i("i",{on:{click:t.isShowFloorList}}),i("input",{ref:"floor",staticClass:"select-input",attrs:{type:"text",readonly:"",placeholder:"请选择"},on:{click:t.isShowFloorList}}),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.isFloorShow,expression:"isFloorShow"}],staticClass:"floor-ul"},t._l(t.floorList,(function(e,n){return i("li",{key:n,on:{click:function(i){return t.activeFloor(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"line-select div-margin"},[i("span",[t._v("线体:")]),i("i",{on:{click:t.isShowLineList}}),i("input",{ref:"line",staticClass:"select-input",attrs:{type:"text",readonly:"",placeholder:"请选择"},on:{click:t.isShowLineList}}),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.isLineShow,expression:"isLineShow"}],staticClass:"floor-ul line-ul"},t._l(t.lineDatas,(function(e,n){return i("li",{key:n,on:{click:function(i){return t.activeLine(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("button",{on:{click:t.seek}},[t._v("查询")])])}),c=[],l={name:"Select",props:{floorList:{type:Array,default:function(){return[]}},lineList:{type:Object,default:function(){return{}}}},data:function(){return{isFloorShow:!1,isLineShow:!1,floor:"",line:"",lineDatas:[]}},methods:{isShowFloorList:function(){this.isLineShow=!1,this.isFloorShow=!this.isFloorShow},isShowLineList:function(){this.isFloorShow=!1,this.isLineShow=!this.isLineShow},activeFloor:function(t){var e;(this.$refs.line.value="线体",this.isFloorShow=!1,this.$refs.floor.value=t,this.floor=t,this.lineDatas=[],""!=t)&&(this.lineDatas.push("ALL"),this.lineList[t]&&(e=this.lineDatas).push.apply(e,Object(o["a"])(this.lineList[t])))},activeLine:function(t){this.isLineShow=!1,this.$refs.line.value=t,this.line=t},seek:function(){this.floor=this.$refs.floor.value,this.line=this.$refs.line.value;var t=this.floor,e=this.line;""!=t&&""!=e&&"线体"!=e&&this.$emit("seek",t,e)}}},r=l,u=(i("bb6b"),i("2877")),f=Object(u["a"])(r,a,c,!1,null,"0eb42cd8",null),h=f.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"analysis"},[i("div",{staticClass:"profix-container"},[t._v("报警进度分析")]),i("div",{staticClass:"content-container"},[i("table",{attrs:{border:"0",cellspacing:"0"}},[t._m(0),i("tbody",t._l(t.analysis,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(e.Type))]),i("td",{staticClass:"text red",on:{click:function(i){return t.clickShowData(0,e.Type)}}},[i("span",{staticClass:"textOne "},[t._v(t._s(e.Todo))])]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData(1,e.Type)}}},[t._v(" "+t._s(e.Doing)+" ")]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData(2,e.Type)}}},[t._v(" "+t._s(e.Done)+" ")]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData(3,e.Type)}}},[t._v(" "+t._s(e.Ignore)+" ")]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData("H",e.Type)}}},[t._v(" "+t._s(e.H)+" ")]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData("M",e.Type)}}},[t._v(" "+t._s(e.M)+" ")]),i("td",{staticClass:"text",on:{click:function(i){return t.clickShowData("ALL",e.Type)}}},[t._v(" "+t._s(e.ALL)+" ")])])})),0)])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",{staticClass:"type",attrs:{rowspan:"2"}},[t._v("机故类型")]),i("td",{attrs:{colspan:"4"}},[t._v("维修进度")]),i("td",{attrs:{colspan:"2"}},[t._v("优先级")]),i("td",{attrs:{rowspan:"2"}},[t._v("ALL")])]),i("tr",[i("td",[t._v("待处理")]),i("td",[t._v("处理中")]),i("td",[t._v("已处理")]),i("td",[t._v("忽略")]),i("td",[t._v("H")]),i("td",[t._v("M")])])])}],d={name:"Analysis",props:{analysis:{type:Array,default:function(){return[]}},exceptionList:{type:Array,default:function(){return[]}}},data:function(){return{showExceptionList:[]}},methods:{clickShowData:function(t,e){this.$emit("clickShowData",t,e)}}},_=d,L=(i("7885"),Object(u["a"])(_,p,v,!1,null,"95153e54",null)),y=L.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info"},[i("div",{staticClass:"profix-container"},[t._v("异常报警信息")]),i("div",{staticClass:"content-container"},[i("table",{attrs:{border:"0",cellspacing:"0"}},[t._m(0),i("tbody",t._l(t.exceptionList,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(e.Floor))]),i("td",[t._v(t._s(e.LineName))]),i("td",[t._v(t._s(e.ExceptionType))]),i("td",[t._v(t._s(e.RepairAdvice))]),i("td",{class:{textOne:"H"==e.Priority}},[t._v(" "+t._s(e.Priority)+" ")]),i("td",[t._v(t._s(e.InputTime))]),i("td",[t._v(t._s(null==e.EndTime?"":e.EndTime))]),i("td",[t._v(t._s(e.TimeCount))]),i("td",[t._v(t._s(e.Department))]),i("td",[t._v(t._s(e.RepairContent))]),i("td",[0==e.State?i("button",{staticClass:"typebut",on:{click:function(i){return t.typebut(e.Id)}}},[i("span",{staticClass:"textblink"},[t._v("待处理")])]):t._e(),1==e.State?i("button",{staticClass:"typebut2",on:{click:function(i){return t.typebut2(e.Id)}}},[t._v(" 处理中 ")]):t._e(),2==e.State?i("button",{staticClass:"typebut3"},[t._v("已处理")]):t._e(),3==e.State?i("button",{staticClass:"typebut3"},[t._v("忽略")]):t._e()])])})),0)])])])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",{staticClass:"floor"},[t._v("楼层")]),i("td",{staticClass:"line"},[t._v("线体")]),i("td",{staticClass:"type"},[t._v("异常类型")]),i("td",{staticClass:"advice"},[t._v("维修建议")]),i("td",{staticClass:"priority"},[t._v("优先级")]),i("td",{staticClass:"start"},[t._v("异常开始时间")]),i("td",{staticClass:"end"},[t._v("异常结束时间")]),i("td",{staticClass:"time-count"},[t._v("异常时常(Min)")]),i("td",{staticClass:"unit"},[t._v("责任单位")]),i("td",{staticClass:"service-content"},[t._v("维修内容")]),i("td",{staticClass:"state"},[t._v("状态")])])])}],x=(i("ac1f"),i("5319"),{name:"Info",props:{exceptionList:{type:Array,default:function(){return[]}}},methods:{typebut:function(t){var e=this;this.$confirm("确认接受处理异常, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$emit("chuLi",t)})).catch((function(){e.$message({type:"info",message:"已取消"})}))},typebut2:function(t){var e=this,i=this.$createElement;this.$msgbox({title:"消息",message:i("div",{attrs:{class:"el-textarea"}},[i("textarea",{attrs:{class:"el-textarea__inner",autocomplete:"off",rows:4,id:"commentContent"},value:this.commentContent})]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(t,i,n){if("confirm"===t){var s=document.getElementById("commentContent").value;s=s.replace(/\s/g,""),""==s?e.$message({type:"info",message:"请输入维修内容!"}):n()}else n()}}).then((function(){var i=document.getElementById("commentContent").value;i=i.replace(/\s/g,""),e.$emit("weiXiu",t,i),document.getElementById("commentContent").value=""})).catch((function(){e.$message({type:"info",message:"已取消维修"})}))}}}),b=x,C=(i("9955"),Object(u["a"])(b,m,w,!1,null,"ffebce62",null)),S=C.exports,g=i("9d10"),k=i("37ca"),D={name:"N2Error",components:{Select:h,Analysis:y,Info:S},data:function(){return{floorList:[],lineList:{},floor:"D061F",line:"ALL",analysis:[],exceptionList:[],showExceptionList:[],intervalValue:"",value:null,type:null}},created:function(){var t=this;this.getEnergyFloors(),this.getErrorData(this.floor,this.line),this.intervalValue=setInterval((function(){t.getErrorData(t.floor,t.line)}),15e3)},beforeDestroy:function(){""!=this.intervalValue&&clearInterval(this.intervalValue)},methods:{getEnergyFloors:function(){var t=this;Object(g["d"])().then((function(e){0==e.Status&&(t.floorList=e.Data.Floor,t.floorList.unshift("ALL"),t.lineList=e.Data.LineName)})).catch((function(t){console.log(t)}))},getErrorData:function(t,e){var i=this;Object(k["a"])(t,e).then((function(t){if(0==t.Status){i.analysis=t.Data.Analyze,i.exceptionList=t.Data.ExceptionList;var e=i.exceptionList.filter((function(t){return"H"==t.Priority})),n=i.exceptionList.filter((function(t){return"M"==t.Priority}));i.exceptionList=[],i.exceptionList=[].concat(Object(o["a"])(e),Object(o["a"])(n)),i.showExceptionList=i.exceptionList;var s=i.analysis,a={Type:"ALL",ALL:s[0]["ALL"]+s[1]["ALL"],Doing:s[0]["Doing"]+s[1]["Doing"],Done:s[0]["Done"]+s[1]["Done"],H:s[0]["H"]+s[1]["H"],Ignore:s[0]["Ignore"]+s[1]["Ignore"],M:s[0]["M"]+s[1]["M"],Todo:s[0]["Todo"]+s[1]["Todo"]};i.analysis.push(a),i.clickShowData(i.value,i.type)}})).catch((function(t){console.log(t)}))},clickShowData:function(t,e){this.value=t,this.type=e,"number"==typeof t?this.showExceptionList="ALL"==e?this.exceptionList.filter((function(e){return e.State==t})):this.exceptionList.filter((function(i){return i.State==t&&i.ExceptionType==e})):"string"==typeof t&&(this.showExceptionList="ALL"==t?"ALL"==e?this.exceptionList:this.exceptionList.filter((function(t){return t.ExceptionType==e})):"ALL"==e?this.exceptionList.filter((function(e){return e.Priority==t})):this.exceptionList.filter((function(i){return i.Priority==t&&i.ExceptionType==e})))},upData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3?arguments[3]:void 0;Object(k["b"])(t,i,n,s).then((function(t){0==t.Status&&(e.$message({type:"success",message:"已确定!"}),e.getErrorData(e.floor,e.line),console.log("已确定"))})).catch((function(t){console.log(t)}))},chuLi:function(t){this.upData(t,"","",1)},weiXiu:function(t,e){var i=this.$utilsFun.dateFormat("YYYY/mm/dd HH:MM:SS",new Date);this.upData(t,i,e,2)},seek:function(t,e){this.value=null,this.type=null,this.floor=t,this.line=e,this.getErrorData(this.floor,this.line)}}},E=D,T=(i("4248"),Object(u["a"])(E,n,s,!1,null,"9dc52158",null));e["default"]=T.exports},9955:function(t,e,i){"use strict";i("d14c")},acbe:function(t,e,i){},bb6b:function(t,e,i){"use strict";i("7e20")},d14c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e74961dc.45412d11.js.map