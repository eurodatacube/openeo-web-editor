(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65f6209c"],{2930:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[o("div",{ref:"container",staticClass:"modal-container",style:t.style},[o("header",{staticClass:"modal-header",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.startMove.apply(null,arguments)}}},[t._t("header",(function(){return[o("h2",[t._v(t._s(t.title))]),o("span",{staticClass:"close",on:{click:t.close}},[o("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),o("main",{staticClass:"modal-content"},[t._t("default")],2),o("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],n=o("3115"),a=o("025e"),r={name:"Modal",mixins:[n["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"85%"},minHeight:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={"min-width":this.minWidth,"max-width":this.maxWidth,"min-height":this.minHeight};return Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove)},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=r,d=(o("8781"),o("2877")),u=Object(d["a"])(l,s,i,!1,null,null,null);e["a"]=u.exports},"6b1e":function(t,e,o){},8781:function(t,e,o){"use strict";o("6b1e")},c7fb:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{maxWidth:"60%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[o("p",{staticClass:"aboutPage"},[t._v(t._s(t.pkg.description))]),o("p",{staticClass:"aboutPage"},[t._v("This software is published by the "),o("strong",[t._v("openEO Consortium")]),t._v(" under the "),o("strong",[t._v("Apache 2.0 license")]),t._v(". Please find more information about the openEO project on our "),o("a",{attrs:{href:"http://www.openeo.org",target:"_blank"}},[t._v("homepage")]),t._v(" and visit the "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor",target:"_blank"}},[t._v("GitHub repository")]),t._v(" for information about the Web Editor. Feel encouraged to "),o("strong",[t._v("report bugs, feature requests and other issues in the "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor/issues",target:"_blank"}},[t._v("GitHub issue tracker")])]),t._v(".")]),o("h3",{staticClass:"aboutPage"},[t._v("Supported API versions:")]),o("ul",{staticClass:"aboutPage"},t._l(t.pkg.apiVersions,(function(e){return o("li",{key:e},[o("a",{attrs:{href:"https://api.openeo.org/"+e,target:"_blank"}},[t._v(t._s(e))])])})),0)])},i=[],n=o("9224"),a=o("2930"),r={name:"WebEditorModal",components:{Modal:a["a"]},data(){return{pkg:n}},computed:{title(){return"openEO Web Editor "+this.pkg.version}}},l=r,d=o("2877"),u=Object(d["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-65f6209c.96ca8b6a.js.map