(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4eb6":function(n,e,t){"use strict";(function(n){t("6bad");o(t("66fd"));var e=o(t("6161"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"536b":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.menuList,(function(e,t){var o=n.__get_orig(e),r=n.__map(e.frontMenu,(function(t,o){var r=n.__get_orig(t),u=n.role==e.roleName?n.__map(t.child,(function(e,t){var o=n.__get_orig(e),r=n.__map(e.buttons,(function(t,o){var r=n.__get_orig(t),u="查看"==t&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?e.menu.split("列表"):null;return{$orig:r,g0:u}}));return{$orig:o,l0:r}})):null;return{$orig:r,l1:u}}));return{$orig:o,l2:r}})));n.$mp.data=Object.assign({},{$root:{l3:t}})},u=[]},6161:function(n,e,t){"use strict";t.r(e);var o=t("536b"),r=t("72c5");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("c734");var i,a=t("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=c.exports},6431:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("a34a")),r=u(t("37e0"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=a(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return i=n.done,n},e:function(n){c=!0,u=n},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw u}}}}function a(n,e){if(n){if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function l(n,e,t,o,r,u,i){try{var a=n[u](i),c=a.value}catch(l){return void t(l)}a.done?e(c):Promise.resolve(c).then(o,r)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(o,r){var u=n.apply(e,t);function i(n){l(u,o,r,i,a,"next",n)}function a(n){l(u,o,r,i,a,"throw",n)}i(void 0)}))}}t("a01e");var f=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("e619"))}.bind(null,t)).catch(t.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return s(o.default.mark((function t(){var u,i,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),u=n.getStorageSync("nowTable"),t.next=4,e.$api.session(u);case 4:i=t.sent,e.user=i.data,e.tableName=u,a=r.default.list(),e.menuList=a,e.menuList.forEach((function(n,t){e.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&e.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;return s(o.default.mark((function e(){var t,r,u,a,c;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,n.$api.page("config",{page:1,limit:5});case 3:r=e.sent,u=i(r.data.list);try{for(u.s();!(a=u.n()).done;)c=a.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value,title:c.name})}catch(o){u.e(o)}finally{u.f()}return t&&(n.swiperList=t),e.next=9,n.$api.list("news",{page:1,limit:6});case 9:r=e.sent,n.news=r.data.list;case 11:case"end":return e.stop()}}),e)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){n.setStorageSync("useridTag",0),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=d}).call(this,t("543d")["default"])},"72c5":function(n,e,t){"use strict";t.r(e);var o=t("6431"),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},c734:function(n,e,t){"use strict";var o=t("ca5f"),r=t.n(o);r.a},ca5f:function(n,e,t){}},[["4eb6","common/runtime","common/vendor"]]]);