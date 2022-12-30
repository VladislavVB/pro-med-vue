(function(t){function e(e){for(var a,i,n=e[0],l=e[1],u=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,n=1;n<o.length;n++){var l=o[n];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var c=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1f79":function(t,e,o){},"36a6":function(t,e,o){},"3c3f":function(t,e,o){},4142:function(t,e,o){},"416e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e),o.d(e,"bus",(function(){return Bt}));var a=o("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"custom__container"},[e("NavbarVue",{attrs:{links:t.navbarLinks}}),e("router-view"),e("ModalPhotoVue")],1)])},s=[],i=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar"},t._l(t.links,(function(o){return e("RouterLink",{key:o.id,staticClass:"catalog__link",attrs:{to:{name:o.routeName}}},[t._v(" "+t._s(o.title)+" ")])})),1)},n=[],l={name:"Navbar",props:{links:{type:Array,required:!0}}},u=l,c=(o("5b52"),o("2877")),d=Object(c["a"])(u,i,n,!1,null,"217e704b",null),p=d.exports,A=function(){var t=this,e=t._self._c;return t.visibleModal?e("div",{staticClass:"active catalog__modal-bg",on:{click:function(e){return e.stopPropagation(),t.closeModal.apply(null,arguments)}}},[e("div",{staticClass:"catalog__modal-bg-close",on:{click:function(e){return e.stopPropagation(),t.closeModal.apply(null,arguments)}}},[e("img",{attrs:{src:o("d991"),alt:"close"}})]),e("div",{staticClass:"catalog__modal-img",on:{click:function(t){t.stopPropagation()}}},[e("img",{attrs:{src:t.modalImage,alt:""}})])]):t._e()},h=[],m={name:"ModalPhoto",data(){return{visibleModal:!1,modalImage:""}},methods:{closeModal(){this.visibleModal=!1}},created(){Bt.$on("modalPhoto",t=>{this.visibleModal=!0,this.modalImage=t,console.log(t)})}},v=m,f=Object(c["a"])(v,A,h,!1,null,null,null),g=f.exports,b={name:"App",components:{NavbarVue:p,ModalPhotoVue:g},data(){return{navbarLinks:[{id:1,title:"Каталог",routeName:"catalog"},{id:2,title:"Избранное",routeName:"favorite"}]}}},_=b,C=Object(c["a"])(_,r,s,!1,null,null,null),S=C.exports,B=o("8c4f"),y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"catalog__page"},[e("ul",{staticClass:"catalog__list"},[t.loading?e("LoaderVue"):t.errorServer?e("ErrorsVue"):t._l(t.userList,(function(t){return e("UserItemVue",{key:t.id,attrs:{user:t}})}))],2)])},O=[],V=o("cee4");V["a"].defaults.baseURL="https://json.medrocket.ru";var E=V["a"],I=function(){var t=this,e=t._self._c;return e("img",{staticClass:"loader",style:"height: "+t.height,attrs:{src:o("95cd"),alt:"loader"}})},x=[],j={name:"Loader",props:{height:{type:String,default:"100px"}}},k=j,R=Object(c["a"])(k,I,x,!1,null,null,null),U=R.exports,P=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"error"},[e("img",{staticClass:"loader",attrs:{src:o("fa93"),alt:"error"}}),e("div",{staticClass:"error__descp"},[e("h3",[t._v("Сервер не отвечает")]),e("p",[t._v("Уже работаем над этим")])])])}],w={name:"Errors"},M=w,N=Object(c["a"])(M,P,L,!1,null,null,null),Y=N.exports,J=function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"catalog__line catalog__line-level-one",class:{active:t.activeButton},on:{click:function(e){return e.stopPropagation(),t.getAlbums(t.user.id)}}},[e("button",{staticClass:"catalog__list-btn"}),e("h6",{staticClass:"catalog__line-name"},[t._v(t._s(t.user.name))])]),t.loading?e("LoaderVue"):t.errorServer?e("ErrorsVue"):e("ul",{staticClass:"catalog__line-body catalog__line-level-one-body",class:{active:t.activeButton}},t._l(t.userAlbums,(function(t){return e("UserAlbumVue",{key:t.id,attrs:{album:t}})})),1)],1)},G=[],Q=function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"catalog__line catalog__line-level-two",class:{active:t.activeButton},on:{click:function(e){return e.stopPropagation(),t.getAlbums(t.album.id)}}},[e("button",{staticClass:"catalog__list-btn"}),e("h6",{staticClass:"catalog__line-name"},[t._v(t._s(t.album.title))])]),t.loading?e("LoaderVue"):t.errorServer?e("ErrorsVue"):e("div",{staticClass:"catalog__line-body favorit__list catalog__line-level-two-body",class:{active:t.activeButton}},t._l(t.userAlbums,(function(t){return e("UserPhotoVue",{key:t.id,attrs:{photo:t}})})),1)],1)},X=[],Z=function(){var t=this,e=t._self._c;return t.loading?e("LoaderVue"):t.errorServer?e("ErrorsVue"):e("li",{staticClass:"photo__item-wrapper",on:{click:t.photoModal}},[e("div",{staticClass:"photo__item"},[e("div",{staticClass:"photo__item-star",class:{active:t.favorite},on:{click:function(e){return e.stopPropagation(),t.favoriteImage()}}},[e("img",{attrs:{src:o("acac"),alt:""}}),e("img",{attrs:{src:o("af98"),alt:""}})]),e("img",{staticClass:"photo__item-img",attrs:{title:t.photo.title,src:t.photo.thumbnailUrl,alt:t.photo.title}})]),e("div",{staticClass:"photo__item-descp"},[e("h3",{staticClass:"photo__item-title"},[t._v(t._s(t.photo.title))])])])},K=[],T={name:"UserItem",props:{photo:{type:Object,required:!0},cardBig:{type:Boolean,default:!1}},components:{LoaderVue:U,ErrorsVue:Y},data(){return{loading:!1,favorite:!1,errorServer:!1}},methods:{photoModal(){Bt.$emit("modalPhoto",this.photo.url)},favoriteImage(){let t=JSON.parse(localStorage.getItem("favoriteAlbum"));if(console.log(t),null===t||0===t.length)localStorage.setItem("favoriteAlbum",JSON.stringify([this.photo]));else{const e=t.map(t=>t.id);e.includes(this.photo.id)?t=t.filter(t=>t.id!==this.photo.id):t.push(this.photo),localStorage.setItem("favoriteAlbum",JSON.stringify(t))}this.activeStar()},activeStar(){this.favorite=JSON.parse(localStorage.getItem("favoriteAlbum")).map(t=>t.id).includes(this.photo.id)}},mounted(){this.activeStar()}},z=T,F=Object(c["a"])(z,Z,K,!1,null,null,null),W=F.exports,H={name:"UserItem",components:{LoaderVue:U,ErrorsVue:Y,UserPhotoVue:W},props:{album:{type:Object,required:!0}},data(){return{loading:!1,errorServer:!1,activeButton:!1,userAlbums:[]}},methods:{getAlbums(t){this.activeButton?this.activeButton=!1:(this.loading=!0,this.errorServer=!1,E.get("/photos?albumId="+t).then(t=>{this.userAlbums=t.data,this.loading=!1,this.activeButton=!0}).catch(t=>{console.log(t),this.loading=!1,this.errorServer=!0,this.activeButton=!0}))}}},D=H,q=Object(c["a"])(D,Q,X,!1,null,null,null),$=q.exports,tt={name:"UserItem",components:{LoaderVue:U,ErrorsVue:Y,UserAlbumVue:$},props:{user:{type:Object,required:!0}},data(){return{loading:!1,errorServer:!1,activeButton:!1,userAlbums:[]}},methods:{getAlbums(t){this.activeButton?this.activeButton=!1:(this.loading=!0,this.errorServer=!1,E.get("/albums?userId="+t).then(t=>{this.userAlbums=t.data,this.loading=!1,this.activeButton=!0}).catch(t=>{console.log(t),this.loading=!1,this.errorServer=!0,this.activeButton=!0}))}}},et=tt,ot=Object(c["a"])(et,J,G,!1,null,null,null),at=ot.exports,rt={name:"Home",data(){return{loading:!1,errorServer:!1,userList:[]}},components:{LoaderVue:U,ErrorsVue:Y,UserItemVue:at},methods:{getCatalogUsers(){this.loading=!0,this.errorServer=!1,E.get("/users/").then(t=>{this.userList=t.data,this.loading=!1}).catch(t=>{console.log(t),this.loading=!1,this.errorServer=!0})}},mounted(){this.getCatalogUsers()}},st=rt,it=Object(c["a"])(st,y,O,!1,null,null,null),nt=it.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorit__page"},[0===t.favoritePhotos.length?e("EmptyVue"):e("ul",{staticClass:"favorit__list"},t._l(t.favoritePhotos,(function(t){return e("UserPhotoVue",{key:t.id,attrs:{cardBig:!0,photo:t}})})),1)],1)},ut=[],ct=function(){var t=this;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorit__list-zero"},[e("img",{attrs:{src:o("f3f6"),alt:""}}),e("h4",[t._v("Список избранного пуст")]),e("p",[t._v("Добавляйте изображения, нажимая на звездочки")])])}],pt={name:"Empty"},At=pt,ht=Object(c["a"])(At,ct,dt,!1,null,null,null),mt=ht.exports,vt={name:"Home",components:{UserPhotoVue:W,EmptyVue:mt},data(){return{favoritePhotos:[]}},methods:{getFavorite(){this.favoritePhotos=JSON.parse(localStorage.getItem("favoriteAlbum"))}},mounted(){this.getFavorite()}},ft=vt,gt=Object(c["a"])(ft,lt,ut,!1,null,null,null),bt=gt.exports;a["a"].use(B["a"]);const _t=[{path:"/",name:"catalog",component:nt},{path:"/favorite",name:"favorite",component:bt}],Ct=new B["a"]({mode:"history",base:"/",routes:_t});var St=Ct;o("4142"),o("868c"),o("1f79"),o("416e"),o("3c3f"),o("36a6");a["a"].config.productionTip=!1;const Bt=new a["a"];new a["a"]({router:St,render:function(t){return t(S)}}).$mount("#app")},"5b52":function(t,e,o){"use strict";o("790d")},"790d":function(t,e,o){},"868c":function(t,e,o){},"95cd":function(t,e,o){t.exports=o.p+"img/loader.cd5d0fe1.gif"},acac:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIsSURBVHgBxZe/LwRBFMffymmEuEJBIysS0YjjD0AhGs3pVCo9/4Ao9OhJUKFyBQUK/AF+F8SP3EWjkdwJ0Sie990Zd4vdvZmzd/dJ3t3uztt5b968eTvjkCHMnJS/tMiwSErEFUnq5oJITuRC5EQk4zhOgeJADLsiSyJ5tmMN71KlYMTa8H9Z0tGzHnWW4yPLptEQxRTHa9zvRKrWIw9ywvXbdHzGMU/npLK7muREBr5XSYOvYd7a+NOeEjtcbcvDi4AOS5Zs+HgmOphQ1+OHRI0tZEmXRCH3HYF5suV2tXT9uE0VMIsfR8993upVjP5oiujzTd03NhON7dhGATnQhQikyZaXs5Jx8PleSRS80p4gVdujwYhh5PVOG9v6q4NniEBTu/7vUBLNMKYASy+4QKDT62X6F30y1d2TYa0XmAKX6ocLB8I/FPC8d5oqBu+Gjx4kE2TSCfAvOxOiQ18EOYAlWP5ziYp3tlBWzUtAGO8cJwMKmIKciabXYWtPeT1kvplx4FXCS1Ntbxma6PhrRDTeKjg2UkXxMeX13lTzBA5kSJVF+07bBok6hgJ0DSKlyCTwXZZE3JCbmUjVl9PSNeZ5cE45AJCgWCWomGHO/mW9uHPWO6FoHjaZd0eZb1bCddC2n2a+WmQD3B/uyINlrh3F+l73LdnvKNR8UxrkRP225VWMRJZtj2msjmZxJCb6sDuaBURjne3Ia8Nuuf4dMoRLx/MRkX6K6Xj+BYRqsaRGKGTNAAAAAElFTkSuQmCC"},af98:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgBxZdRasJAEIYnVQRRpIiiKEL6LtSeoD1Cb9DeoL1Bj9DeoPYGHqGeoPbJRwVBFMUoKIIg2/nXGLWo2dGoH4zJmsnO7OzsZNciQ5RS13x5ZLlnKbHYLNfu4yFLk6XGUmWpWJY1pCBgwzbLO4ujZHziXToUjNg1fCzvbvTEo26o4Ggo02iwYkkFa3zdidK5R77NCXvdprVmHPP0Q4vsPiVNlrvlKrlae/AmNT4YDLQIsV1bGh0BNywNEjCbzaher+v7YrFIoVCIhNxwFJrLCLyRkG636933ej06gFf8XLlz/yx5E6MfjUZeu9/v03w+JyFPsI0IPJKQ8Xi8YRD3B0RBl/YwLWr7XjBiGJlOp/qKEf8H/yEPIpGId4X4cG9xGLD0thYIjKrdbtMx5HI5SqfTux7XMAU2XQ4bEVD7NDqdzkbGS8hkMpTNZvfqhMmHZQdSJ3xC74EIOLTaWOwEFa/Vavmp6QSE8WQySQYMkQNNE010GI1GffWQ+YbGga6Ev6baWIYmOoKipFfBt4kmio8pJo66VOFAhRabSnGnsViMEomEke4OKmF8lzkRv7jxsk9zMpl495jnQqFA8Xhct5GgWCWomAIHyrBt/DlGVYSRVCq1c22jZjiOo6OSz+fJB/059lrsxIc6Hx9Luxffkm2gLrAp3ebE5bblJ4xEQ0mPaWpxNAsiMdGH7Gi2JRplJcNxDdt+/VtkiFodzx9Ybimg4/kfefaCZ8bsRCgAAAAASUVORK5CYII="},d991:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgBzZZLCsAgDERDT9Ib1ht7lFRbuxGM+QyhARcK857ELCRqxcxXWyeBqzM7+9sUfqsiZUNSB7vMBxDZkomUbVkImZoRkZmzHpn7gpZguOUaADNoiCQQTCIB4RJBhpcsZGbJQX+qlNalDEPKeGtAYZkF4JZ5guZMpBXqLAMed8tASLYspESUcdZ3axwWpGSSPZIbwCQqhEZuKhYAAAAASUVORK5CYII="},f3f6:function(t,e,o){t.exports=o.p+"img/empty.9cf333f6.png"},fa93:function(t,e,o){t.exports=o.p+"img/error.23bbd02a.png"}});
//# sourceMappingURL=app.52930cdb.js.map