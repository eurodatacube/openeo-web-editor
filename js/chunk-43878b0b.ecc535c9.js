(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43878b0b"],{"0924":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"duration-picker"},[e("div",{staticClass:"group"},[e("label",[t._v("Years")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.years,expression:"data.years"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.years},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"years",e.target.value)}}})]),e("div",{staticClass:"group"},[e("label",[t._v("Months")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.months,expression:"data.months"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.months},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"months",e.target.value)}}})]),e("div",{staticClass:"group"},[e("label",[t._v("Days")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.days,expression:"data.days"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.days},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"days",e.target.value)}}})]),e("div",{staticClass:"group"},[e("label",[t._v("Hours")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.hours,expression:"data.hours"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.hours},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"hours",e.target.value)}}})]),e("div",{staticClass:"group"},[e("label",[t._v("Minutes")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.minutes,expression:"data.minutes"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.minutes},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"minutes",e.target.value)}}})]),e("div",{staticClass:"group"},[e("label",[t._v("Seconds")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.seconds,expression:"data.seconds"}],attrs:{type:"number",min:"0",disabled:!t.editable},domProps:{value:t.data.seconds},on:{change:t.emit,input:function(e){e.target.composing||t.$set(t.data,"seconds",e.target.value)}}})])])},s=[],r=n("863a");const o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};var i={name:"Duration",props:{value:{type:String,default:null},editable:{type:Boolean,default:!0}},data(){return{data:o}},watch:{value:{immediate:!0,handler(t,e){if(t===e)try{this.data=Object(r["b"])(t).parse()}catch(n){this.data=o}}}},methods:{emit(){let t=null;if(Object.values(this.data).find(t=>t>0))try{t=Object(r["b"])(this.data).toString()}catch(e){}this.$emit("input",t)}}},u=i,d=(n("b39b"),n("2877")),c=Object(d["a"])(u,a,s,!1,null,"40e2a6f4",null);e["default"]=c.exports},"710d":function(t,e,n){},"863a":function(t,e,n){"use strict";n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return L}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var a=function(){return a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var s in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},a.apply(this,arguments)},s="\\d+(?:[\\.,]\\d+)?",r="("+s+"W)",o="("+s+"Y)?("+s+"M)?("+s+"D)?",i="T("+s+"H)?("+s+"M)?("+s+"S)?",u="^P(?:"+r+"|"+o+"(?:"+i+")?)$",d=new RegExp(u),c=["weeks","years","months","days","hours","minutes","seconds"],l={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},m=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),h=function(t){var e=t.match(d);if(!e)throw new Error("Invalid duration string");var n=e.slice(1).reduce((function(t,e,n){return t[c[n]]=parseFloat(e)||0,t}),{});return n},p=function(t){return t.weeks&&t.weeks>0?Object.assign({},m,{weeks:t.weeks}):c.reduce((function(e,n){var s;return a(a({},e),(s={},s[n]=t[n]||0,s))}),{})},f={locales:{},options:{},setLocales:function(t,e){this.locales=a(a({},this.locales),t),e&&(this.options=a(a({},this.options),e))},getLangConfig:function(t){var e=this.locales[t];if(!e&&this.options.fallbackLocale&&(e=this.locales[this.options.fallbackLocale]),!e)throw new Error("isoDuration: Translations for language: "+t+" are not provided");return e}},v=function(t){for(var e=["years","months","days"],n="",a=0,s=e;a<s.length;a++){var r=s[a];t[r]&&(n+=""+t[r]+l[r])}return n},g=function(t){for(var e=["hours","minutes","seconds"],n="",a=0,s=e;a<s.length;a++){var r=s[a];t[r]&&(n+=""+t[r]+l[r])}return n},b=function(t){if(t.weeks>0)return"P"+t.weeks+"W";var e="P",n=v(t);n&&(e+=n);var a=g(t);return a&&(e+="T"+a),n||a||(e+="0D"),e},y=function(t,e){var n=f.getLangConfig(e);return t.weeks+" "+n.weeks(t.weeks)},w=function(t,e,n){for(var a=f.getLangConfig(e),s="",r=["years","months","days","hours","minutes","seconds"],o=0,i=0;i<r.length;i++){var u=r[i],d=t[u];if(d&&(""!==s&&(s+=" "),s+=d+" "+a[u](d),o++,n&&n.largest&&n.largest<=o))break}return s},k=function(t,e,n){return t.weeks>0?y(t,e):w(t,e,n)},O=["seconds","minutes","hours","days","months"],j=function(t){return function(e){return{nextUnitValue:Math.floor(e/t),value:e%t}}},x=function(t,e){return new Date(e,t+1,0).getDate()},M={seconds:j(60),minutes:j(60),hours:j(24),days:function(t,e){var n=e?new Date(e.getTime()):new Date,a=t,s=0,r=x(n.getMonth(),n.getFullYear());while(a>r)a-=r,s++,n.setMonth(n.getMonth()+1),r=x(n.getMonth(),n.getFullYear());return{nextUnitValue:s,value:a}},months:j(12)},C=function(t,e){for(var n=a({},t),s=0;s<O.length;s++){var r=O[s],o=n[r];if(o>0){var i=M[r](o,e);if(n[r]=i.value,i.nextUnitValue){var u="months"===r?"years":O[s+1];n[u]=n[u]+i.nextUnitValue}}}return n},D=function(){function t(t){this.durationObj=t}return t.prototype.parse=function(){return this.durationObj},t.prototype.toString=function(){return b(this.durationObj)},t.prototype.humanize=function(t,e){return k(this.durationObj,t,e)},t.prototype.normalize=function(t){return this.durationObj=C(this.durationObj,t),this},t.prototype.isEmpty=function(){var t=this;return Object.keys(this.durationObj).every((function(e){return 0===t.durationObj[e]}))},t}();var P={years:function(t){return"year"+(1===t?"":"s")},months:function(t){return"month"+(1===t?"":"s")},weeks:function(t){return"week"+(1===t?"":"s")},days:function(t){return"day"+(1===t?"":"s")},hours:function(t){return"hour"+(1===t?"":"s")},minutes:function(t){return"minute"+(1===t?"":"s")},seconds:function(t){return"second"+(1===t?"":"s")},decimal:"."};function L(t){return new D("string"===typeof t?h(t):p(t))}L.setLocales=function(t,e){f.setLocales(t,e)}},b39b:function(t,e,n){"use strict";n("710d")}}]);
//# sourceMappingURL=chunk-43878b0b.ecc535c9.js.map