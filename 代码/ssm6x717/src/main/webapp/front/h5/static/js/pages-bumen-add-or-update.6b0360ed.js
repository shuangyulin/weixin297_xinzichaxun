(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bumen-add-or-update"],{3201:function(e,t,r){"use strict";var n=r("d221"),a=r.n(n);a.a},"9d90":function(e,t,r){"use strict";r.r(t);var n=r("fed6"),a=r("aa0a");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("3201");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"ea5599dc",null,!1,n["a"],o);t["default"]=s.exports},aa0a:function(e,t,r){"use strict";r.r(t);var n=r("ba60"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},ba60:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("96cf");var a=n(r("3b8d")),i=n(r("e2b1")),o={data:function(){return{cross:"",ruleForm:{bumen:""},user:{},ro:{bumen:!1}}},components:{wPicker:i.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("bumen",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=25;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 17:if((e.t1=e.t0()).done){e.next=25;break}if(i=e.t1.value,"bumen"!=i){e.next=23;break}return this.ruleForm.bumen=a[i],this.ro.bumen=!0,e.abrupt("continue",17);case 23:e.next=17;break;case 25:this.styleChange();case 26:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,r,n,a,i,o,u,s,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(a=uni.getStorageSync("statusColumnName"),i=uni.getStorageSync("statusColumnValue"),""==a){e.next=16;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){e.next=12;break}for(u in o)u==a&&(o[u]=i);return s=uni.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(s),o);case 10:e.next=16;break;case 12:t=Number(uni.getStorageSync("userid")),r=o["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!t){e.next=38;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,c={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=22,this.$api.list("bumen",c);case 22:if(d=e.sent,!(d.data.total>=n)){e.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("bumen",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("bumen",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("bumen",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("bumen",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},cbb7:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-ea5599dc]{padding:%?20?%}.content[data-v-ea5599dc]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-ea5599dc]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-ea5599dc]{width:%?180?%}.avator[data-v-ea5599dc]{width:%?150?%;height:%?60?%}.right-input[data-v-ea5599dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-ea5599dc]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-ea5599dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-ea5599dc]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-ea5599dc]{border:0}.cu-form-group uni-input[data-v-ea5599dc]{padding:0 %?30?%}.uni-input[data-v-ea5599dc]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-ea5599dc]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-ea5599dc]::after{line-height:%?80?%}.select .uni-input[data-v-ea5599dc]{line-height:%?80?%}.input .right-input[data-v-ea5599dc]{line-height:%?88?%}',""]),e.exports=t},d221:function(e,t,r){var n=r("cbb7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("0fe071ac",n,!0,{sourceMap:!1,shadowMode:!1})},fed6:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v("部门")]),r("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:e.ro.bumen,placeholder:"部门"},model:{value:e.ruleForm.bumen,callback:function(t){e.$set(e.ruleForm,"bumen",t)},expression:"ruleForm.bumen"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))}}]);