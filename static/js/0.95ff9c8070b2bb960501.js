webpackJsonp([0],{582:function(t,e,n){function i(t){n(617)}var s=n(10)(n(600),n(629),i,"data-v-3a410525",null);t.exports=s.exports},586:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n(65),s=n.n(i),o=n(57),a={computed:s()({},n.i(o.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},594:function(t,e,n){"use strict";function i(){var t=a()({},l.a,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:1576475597,hostUin:0,platform:"yqq",needNewCode:0});return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.b)}function s(t){var e=a()({},l.a,{g_tk:1576475597,hostUin:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:100,songstatus:1,singermid:t});return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.b)}e.b=i,e.a=s;var o=n(89),a=n.n(o),r=n(203),l=n(130)},600:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65),s=n.n(i),o=n(594),a=n(207),r=n(625),l=n.n(r),A=n(57),c=n(586);e.default={mixins:[c.a],components:{MyPhoneList:l.a},data:function(){return{singers:[]}},props:{},watch:{},methods:s()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singerRef.style.bottom=e,this.$refs.listRef.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;n.i(o.b)().then(function(e){0===e.code&&(t.singers=t._formatSingers(e.data.list))})},_formatSingers:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(n.i(a.b)(t));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(n.i(a.b)(t))});var i=[],s=[];for(var o in e){var r=e[o];r.title.match(/[a-zA-Z]/)?s.push(r):"热门"===r.title&&i.push(r)}return s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),i.concat(s)}},n.i(A.a)({setSinger:"SET_SINGER"})),created:function(){this._getSingerList()},mounted:function(){},destroyed:function(){}}},603:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(66),s=n.n(i),o=n(204),a=n.n(o),r=n(67);e.default={components:{MyScroll:s.a,MyLoading:a.a},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},watch:{data:function(){var t=this;setTimeout(function(){t._caclHeight()},20)},scrollY:function(t){var e=this.leftListHeight;if(t>0)return void(this.currentIndex=0);for(var n=0;n<e.length-1;n++){var i=e[n],s=e[n+1];if(-t>=i&&-t<s)return this.currentIndex=n,void(this.diff=s+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<29?t-29:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixedTitleRef.style.transform="translate3d(0, "+e+"px, 0)")}},methods:{refresh:function(){this.$refs.scrollRef.refresh()},selectItem:function(t){this.$emit("select",t)},onShortcutTouchstart:function(t){var e=t.touches[0];this.touch.y1=e.pageY;var n=r.c.customAttribute(t.target,"index");this.touch.nowIndex=n,this._scrollTo(n)},onShortcutTouchmove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var n=Math.floor((this.touch.y2-this.touch.y1)/18),i=Number(this.touch.nowIndex)+n;this._scrollTo(i)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){t&&(t<0?t=0:t>this.leftListHeight.length-2&&(t=this.leftListHeight.length-2),this.currentIndex=Number(t),this.$refs.scrollRef.scrollToElement(this.$refs.leftRef[t],0))},_caclHeight:function(){var t=0;this.leftListHeight=[],this.leftListHeight.push(t);for(var e=this.$refs.leftRef,n=0;n<e.length;n++)t+=e[n].clientHeight,this.leftListHeight.push(t)}},computed:{shortcut:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},created:function(){this.touch={},this.listenScroll=!0,this.leftListHeight=[],this.probeType=3},mounted:function(){},destroyed:function(){}}},607:function(t,e,n){e=t.exports=n(575)(!0),e.push([t.i,".my-singer[data-v-3a410525]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["C:/Users/001/Desktop/EXER-demo/vue实战项目/music-app/src/components/MySinger/MySinger.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"MySinger.vue",sourcesContent:["\n.my-singer[data-v-3a410525] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n"],sourceRoot:""}])},611:function(t,e,n){e=t.exports=n(575)(!0),e.push([t.i,".my-phone-list[data-v-764f072d]{position:relative;width:100%;height:100%;overflow:hidden;background:#61b8b8}.my-phone-list .list-group[data-v-764f072d]{padding-bottom:30px}.my-phone-list .list-group .list-group-title[data-v-764f072d]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.65);background:#56827d}.my-phone-list .list-group .list-group-item[data-v-764f072d]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.my-phone-list .list-group .list-group-item .avatar[data-v-764f072d]{width:50px;height:50px;border-radius:50%}.my-phone-list .list-group .list-group-item .name[data-v-764f072d]{margin-left:20px;color:hsla(0,0%,100%,.65);font-size:14px}.my-phone-list .list-shortcut[data-v-764f072d]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.my-phone-list .list-shortcut .item[data-v-764f072d]{padding:3px;line-height:1;color:hsla(0,0%,100%,.65);font-size:12px}.my-phone-list .list-shortcut .item.current[data-v-764f072d]{color:#ebf5f5}.my-phone-list .list-fixed[data-v-764f072d]{position:absolute;top:-1px;left:0;width:100%}.my-phone-list .list-fixed .fixed-title[data-v-764f072d]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.65);background:#56827d}.my-phone-list .loading-container[data-v-764f072d]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/001/Desktop/EXER-demo/vue实战项目/music-app/src/components/base/MyPhoneList/MyPhoneList.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,kBAAoB,CACrB,AACD,4CACI,mBAAqB,CACxB,AACD,8DACM,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,0BAAiC,AACjC,kBAAoB,CACzB,AACD,6DACM,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CAC5B,AACD,qEACQ,WAAY,AACZ,YAAa,AACb,iBAAmB,CAC1B,AACD,mEACQ,iBAAkB,AAClB,0BAAiC,AACjC,cAAgB,CACvB,AACD,+CACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA+B,AAC/B,qBAAuB,CAC1B,AACD,qDACM,YAAa,AACb,cAAe,AACf,0BAAiC,AACjC,cAAgB,CACrB,AACD,6DACQ,aAAe,CACtB,AACD,4CACI,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,UAAY,CACf,AACD,yDACM,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,0BAAiC,AACjC,kBAAoB,CACzB,AACD,mDACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACvC",file:"MyPhoneList.vue",sourcesContent:["\n.my-phone-list[data-v-764f072d] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #61b8b8;\n}\n.my-phone-list .list-group[data-v-764f072d] {\n    padding-bottom: 30px;\n}\n.my-phone-list .list-group .list-group-title[data-v-764f072d] {\n      height: 30px;\n      line-height: 30px;\n      padding-left: 20px;\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.65);\n      background: #56827d;\n}\n.my-phone-list .list-group .list-group-item[data-v-764f072d] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 20px 0 0 30px;\n}\n.my-phone-list .list-group .list-group-item .avatar[data-v-764f072d] {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n}\n.my-phone-list .list-group .list-group-item .name[data-v-764f072d] {\n        margin-left: 20px;\n        color: rgba(255, 255, 255, 0.65);\n        font-size: 14px;\n}\n.my-phone-list .list-shortcut[data-v-764f072d] {\n    position: absolute;\n    z-index: 30;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 20px;\n    padding: 20px 0;\n    border-radius: 10px;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.3);\n    font-family: Helvetica;\n}\n.my-phone-list .list-shortcut .item[data-v-764f072d] {\n      padding: 3px;\n      line-height: 1;\n      color: rgba(255, 255, 255, 0.65);\n      font-size: 12px;\n}\n.my-phone-list .list-shortcut .item.current[data-v-764f072d] {\n        color: #ebf5f5;\n}\n.my-phone-list .list-fixed[data-v-764f072d] {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 100%;\n}\n.my-phone-list .list-fixed .fixed-title[data-v-764f072d] {\n      height: 30px;\n      line-height: 30px;\n      padding-left: 20px;\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.65);\n      background: #56827d;\n}\n.my-phone-list .loading-container[data-v-764f072d] {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n"],sourceRoot:""}])},617:function(t,e,n){var i=n(607);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(576)("224eddc4",i,!0,{})},621:function(t,e,n){var i=n(611);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(576)("5c01664e",i,!0,{})},625:function(t,e,n){function i(t){n(621)}var s=n(10)(n(603),n(633),i,"data-v-764f072d",null);t.exports=s.exports},629:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"singerRef",staticClass:"my-singer"},[n("my-phone-list",{ref:"listRef",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},633:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-scroll",{ref:"scrollRef",staticClass:"my-phone-list",attrs:{data:t.data,probeType:t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[n("ul",t._l(t.data,function(e){return n("li",{ref:"leftRef",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e){return n("li",{staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}),0)])}),0),t._v(" "),n("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchstart,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchmove(e)}}},[n("ul",t._l(t.shortcut,function(e,i){return n("li",{staticClass:"item",class:{current:t.currentIndex===i},attrs:{"data-index":i}},[t._v(t._s(e))])}),0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixedTitleRef",staticClass:"list-fixed"},[n("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[n("my-loading")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.95ff9c8070b2bb960501.js.map