(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{207:function(t,e,n){t.exports=n.p+"img/arrow-to-right.5a19a65.svg"},216:function(t,e,n){t.exports=n.p+"img/ARUFE_AÑO_NUEVO.3a4120a.jpg"},217:function(t,e,n){t.exports=n.p+"img/ARUFE_AÑO_NUEVO.9312f43.jpg"},218:function(t,e,n){t.exports=n.p+"img/SR_PERFIL.a561d71.jpg"},219:function(t,e,n){t.exports=n.p+"img/SR_PERFIL.b90f56a.jpg"},222:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6ff316a8",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("19338b40",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n(222)},277:function(t,e,n){var o=n(37)(!1);o.push([t.i,".container[data-v-e9d3bfb4]{min-height:87vh;padding-top:36px;display:grid;grid-template-columns:35vw 35vw;grid-column-gap:24px;-moz-column-gap:24px;column-gap:24px;margin-left:150px;justify-content:center}.container .cursor[data-v-e9d3bfb4]{cursor:none}.container img[lazy=loading][data-v-e9d3bfb4]{min-height:459px}.container .img-container[data-v-e9d3bfb4]{margin-bottom:24px}.container .img-container[data-v-e9d3bfb4]:last-of-type{margin-bottom:0}.container .img-container.single-col[data-v-e9d3bfb4]{grid-column:auto/span 2}.container .img-container.single-col img[lazy=loading][data-v-e9d3bfb4]{min-height:100%}.arrow-container[data-v-e9d3bfb4]{padding:8px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;align-self:start;grid-column:auto/span 2;cursor:pointer}.arrow-container .go-next[data-v-e9d3bfb4]{text-shadow:2px 2px #fbfd6b}.arrow-container .arrow[data-v-e9d3bfb4]{min-height:0;min-width:0;padding:8px;width:13px}@media (max-width:1024px){.container[data-v-e9d3bfb4]{padding-top:30px;grid-template-columns:auto;margin:0}.container .img-container[data-v-e9d3bfb4]{grid-column:auto/span 2;margin:0 24px 24px}.container .img-container img[lazy=loading][data-v-e9d3bfb4]{min-height:490px}}",""]),t.exports=o},278:function(t,e,n){t.exports=n.p+"img/FLACA_NUBES_ALTA.2df6056.jpg"},279:function(t,e,n){t.exports=n.p+"img/FLACA_NUBES_BAJA.23a93fe.jpg"},280:function(t,e,n){t.exports=n.p+"img/portada_alta.39b98e9.jpg"},281:function(t,e,n){t.exports=n.p+"img/portada_baja.0e77b05.jpg"},282:function(t,e,n){"use strict";n(223)},283:function(t,e,n){var o=n(37)(!1);o.push([t.i,".slide-left-enter-active[data-v-0bcf157c],.slide-left-leave-active[data-v-0bcf157c]{transition:all .75s}.slide-left-enter[data-v-0bcf157c],.slide-left-leave-to[data-v-0bcf157c]{opacity:0;transform:translateX(-1400px)}.slide-up-enter-active[data-v-0bcf157c]{transition:all 1s}.slide-up-enter[data-v-0bcf157c]{opacity:0;transform:translateY(1400px)}.projects-container[data-v-0bcf157c]{display:grid;grid-template-rows:1fr auto}.projects-container .projects[data-v-0bcf157c]{display:grid;grid-template-columns:35vw 35vw;grid-column-gap:40px;-moz-column-gap:40px;column-gap:40px;margin-left:150px;justify-content:center}.projects-container .projects .project[data-v-0bcf157c]{cursor:pointer;text-shadow:2px 2px #fbfd6b}.projects-container .photo[data-v-0bcf157c]{margin-top:32px}.projects-container img[lazy=loading][data-v-0bcf157c]{min-height:100%}.projects-container .arrow-container[data-v-0bcf157c]{align-self:flex-end;display:flex;align-items:center;justify-content:flex-end;padding:14px}.projects-container .arrow-container .go-next[data-v-0bcf157c]{text-shadow:2px 2px #fbfd6b}.projects-container .arrow-container .arrow[data-v-0bcf157c]{min-height:0;min-width:0;padding:8px;width:13px}@media (max-width:1024px){.projects-container .projects[data-v-0bcf157c]{grid-template-columns:300px;margin-left:0}.projects-container .projects .title[data-v-0bcf157c]{display:none}}",""]),t.exports=o},382:function(t,e,n){"use strict";n.r(e);n(39),n(19),n(16),n(10),n(30);var o=n(12),r=n(22);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{images:{type:Array,required:!0},nextPage:{type:Object,required:!0}},data:function(){return{x:0,y:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)({scrollDown:function(t){return t.scrollDown},isMobile:function(t){return t.isMobile}})),watch:{scrollDown:function(){this.isMobile&&this.$emit("show-false")}},methods:{updateCoordinates:function(t){this.x=t.clientX,this.y=t.clientY}}},d=(n(276),n(21)),f={scrollToTop:!1,components:{PageCardUrl:Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container",on:{mousemove:t.updateCoordinates}},t._l(t.images,(function(image,e){return o("div",{key:e,class:image.horizontal?"img-container single-col":"img-container cursor",on:{mousemove:function(t){image.text.show=!0},mouseleave:function(t){image.text.show=!1}}},[o("p",{directives:[{name:"show",rawName:"v-show",value:image.text.show,expression:"image.text.show"}],staticClass:"title",style:{top:t.y+"px",left:t.x+"px"}},[t._v("\n        "+t._s(image.text.title)+"\n      ")]),t._v(" "),o("nuxt-link",{attrs:{to:image.url}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:image,expression:"image"}],attrs:{alt:image.alt?image.alt:null}})])],1)})),0),t._v(" "),o("nuxt-link",{staticClass:"arrow-container",attrs:{to:t.nextPage.path}},[o("p",{staticClass:"go-next"},[t._v("\n      "+t._s(t.nextPage.title)+"\n    ")]),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(207),expression:"require('@/assets/images/arrow-to-right.svg')"}],staticClass:"arrow",attrs:{alt:"prueba"}})])],1)}),[],!1,null,"e9d3bfb4",null).exports},data:function(){return{nextPage:{title:"Go to portraits",path:"/portraits"},images:[{src:n(278),loading:n(279),url:"projects/flaca",text:{title:"FLACA",show:!1}},{src:n(216),loading:n(217),alt:"Arufe en año nuevo",url:"projects/arufe",text:{title:"ARUFE",show:!1}},{src:n(218),loading:n(219),url:"projects/sofiaRemi",text:{title:"SOFIA",show:!1}},{src:n(280),loading:n(281),url:"projects/ontoTheEarth",text:{title:"ONTO THE EARTH",show:!1}}]}},methods:{hideTitles:function(){this.images.forEach((function(image){image.text.show=!1}))}},head:function(){return{title:"Projects - Elisa S Fernández"}}},m=(n(282),Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageCardUrl",{attrs:{images:t.images,"next-page":t.nextPage},on:{"show-false":t.hideTitles}}),t._v(" "),n("nuxt-child")],1)}),[],!1,null,"0bcf157c",null));e.default=m.exports}}]);