webpackJsonp([5],{578:function(t,n,i){function e(t){i(624)}var o=i(10)(i(596),i(636),e,"data-v-f60ff836",null);t.exports=o.exports},586:function(t,n,i){"use strict";i.d(n,"a",function(){return a});var e=i(65),o=i.n(e),s=i(57),a={computed:o()({},i.i(s.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},592:function(t,n,i){"use strict";function e(){var t=a()({},l.a,{uin:0,format:"h5",needNewCode:1});return i.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.b)}function o(t){var n=a()({},l.a,{hostUin:0,platform:"h5",needNewCode:1,order:"listen",begin:0,uin:0,num:100,songstatus:1,format:"json",type:"top",tpl:3,page:"detail",topid:t});return i.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.b)}n.b=e,n.a=o;var s=i(89),a=i.n(s),A=i(203),l=i(130)},596:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(65),o=i.n(e),s=i(204),a=i.n(s),A=i(66),l=i.n(A),r=i(592),f=i(586),p=i(57);n.default={mixins:[f.a],components:{MyLoading:a.a,MyScroll:l.a},data:function(){return{toplist:[]}},props:{},watch:{},filters:{},methods:o()({},i.i(p.a)({setRankList:"SET_RANKLIST"}),{selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setRankList(t)},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rankRef.style.bottom=n,this.$refs.scrollRef.refresh()},loadImg:function(){this.flag||(this.$refs.scrollRef.refresh(),this.flag=!0)},_getRankList:function(){var t=this;i.i(r.b)().then(function(n){0===n.code&&(t.toplist=n.data.topList)})}}),computed:{},created:function(){this._getRankList()},mounted:function(){},destroyed:function(){}}},614:function(t,n,i){n=t.exports=i(575)(!0),n.push([t.i,".my-rank[data-v-f60ff836]{position:fixed;width:100%;top:88px;bottom:0}.my-rank .toplist[data-v-f60ff836]{height:100%;overflow:hidden}.my-rank .toplist .item[data-v-f60ff836]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.my-rank .toplist .item[data-v-f60ff836]:last-child{padding-bottom:20px}.my-rank .toplist .item .icon[data-v-f60ff836]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.my-rank .toplist .item .songlist[data-v-f60ff836]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#56827d;color:hsla(0,0%,100%,.8);font-size:12px}.my-rank .toplist .item .songlist .song[data-v-f60ff836]{-ms-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.my-rank .toplist .item .songlist .song .singername[data-v-f60ff836]{color:hsla(0,0%,100%,.5)}.my-rank .toplist .loading-container[data-v-f60ff836]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/001/Desktop/EXER-demo/vue实战项目/music-app/src/components/MyRank/MyRank.vue"],names:[],mappings:"AACA,0BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,mCACI,YAAa,AACb,eAAiB,CACpB,AACD,yCACM,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACnB,AACD,oDACQ,mBAAqB,CAC5B,AACD,+CACQ,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACrB,AACD,mDACQ,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,mBAAoB,AACpB,yBAAgC,AAChC,cAAgB,CACvB,AACD,yDACU,2BAA4B,AAC5B,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CAC3B,AACD,qEACY,wBAAgC,CAC3C,AACD,sDACM,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACzC",file:"MyRank.vue",sourcesContent:["\n.my-rank[data-v-f60ff836] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.my-rank .toplist[data-v-f60ff836] {\n    height: 100%;\n    overflow: hidden;\n}\n.my-rank .toplist .item[data-v-f60ff836] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 0 20px;\n      padding-top: 20px;\n      height: 100px;\n}\n.my-rank .toplist .item[data-v-f60ff836]:last-child {\n        padding-bottom: 20px;\n}\n.my-rank .toplist .item .icon[data-v-f60ff836] {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 100px;\n                flex: 0 0 100px;\n        width: 100px;\n        height: 100px;\n}\n.my-rank .toplist .item .songlist[data-v-f60ff836] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        padding: 0 20px;\n        height: 100px;\n        overflow: hidden;\n        background: #56827d;\n        color: rgba(255, 255, 255, 0.8);\n        font-size: 12px;\n}\n.my-rank .toplist .item .songlist .song[data-v-f60ff836] {\n          -ms-text-overflow: ellipsis;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap;\n          line-height: 26px;\n}\n.my-rank .toplist .item .songlist .song .singername[data-v-f60ff836] {\n            color: rgba(255, 255, 255, 0.5);\n}\n.my-rank .toplist .loading-container[data-v-f60ff836] {\n      position: absolute;\n      width: 100%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n}\n"],sourceRoot:""}])},624:function(t,n,i){var e=i(614);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(576)("6dec81ec",e,!0,{})},636:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"rankRef",staticClass:"my-rank"},[i("my-scroll",{ref:"scrollRef",staticClass:"toplist",attrs:{data:t.toplist}},[i("ul",t._l(t.toplist,function(n){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(n)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"},on:{load:t.loadImg}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(n.songList,function(n,e){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(e+1))]),t._v(" "),i("span",[t._v(t._s(n.songname))]),t._v(" "),i("span",{staticClass:"singername"},[t._v(" - "+t._s(n.singername))])])}),0)])}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.toplist.length,expression:"!toplist.length"}],staticClass:"loading-container"},[i("my-loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.ce533235d4bd52acad09.js.map