(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38fe18ab"],{"73b2":function(e,t,s){"use strict";s("b4a4")},7482:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return e.unsupported.length>0?t("section",{staticClass:"vue-component message-block federation federation-backends"},[t("strong",{staticClass:"header"},[e._v("Federation")]),t("p",[e._v("This "+e._s(e.entity)+" is only available through the following services in the federation:")]),t("ul",e._l(e.services,(function(s){return t("li",{key:s.url},[t("div",{staticClass:"fed-header"},[t("strong",{staticClass:"fed-title"},[e._v(e._s(s.title))]),t("ul",{staticClass:"badges small inline"},["offline"===s.status?t("li",{staticClass:"badge red"},[e._v("offline")]):t("li",{staticClass:"badge green"},[e._v("online")])])])])})),0)]):e._e()},n=[],a=s("e71d"),r=s("60a2"),l={name:"FederationNotice",mixins:[a["a"]],props:{entity:{type:String,default:"resource"},backends:{type:Array,default:[]},...a["a"].props},computed:{unsupported(){if(0===r["a"].size(this.federation))return this.backends;{let e=Object.keys(this.federation),t=Array.isArray(this.backends)?this.backends:e;return e.filter(e=>!t.includes(e))}},services(){return this.backends.map(e=>{let t={title:e};return r["a"].isObject(this.federation)&&e in this.federation&&Object.assign(t,this.federation[e]),t})}}},o=l,c=(s("73b2"),s("2877")),d=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=d.exports},b4a4:function(e,t,s){}}]);
//# sourceMappingURL=chunk-38fe18ab.292e266d.js.map