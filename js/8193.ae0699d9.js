"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8193],{14812:(e,t,i)=>{i.d(t,{X:()=>n});const r=new Map;function s(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>r.set(e,t)))}async function n(e){const t=r.get(e.Compression);if(!t)throw new Error(`Unknown compression method identifier: ${e.Compression}`);const i=await t();return new i(e)}s([void 0,1],(()=>i.e(3321).then(i.bind(i,83321)).then((e=>e.default)))),s(5,(()=>i.e(8672).then(i.bind(i,8672)).then((e=>e.default)))),s(6,(()=>{throw new Error("old style JPEG compression is not supported.")})),s(7,(()=>i.e(9347).then(i.bind(i,39347)).then((e=>e.default)))),s([8,32946],(()=>Promise.all([i.e(9586),i.e(5522)]).then(i.bind(i,65522)).then((e=>e.default)))),s(32773,(()=>i.e(7411).then(i.bind(i,17411)).then((e=>e.default)))),s(34887,(()=>Promise.all([i.e(9586),i.e(4173)]).then(i.bind(i,74173)).then((e=>e.default)))),s(50001,(()=>i.e(1588).then(i.bind(i,51588)).then((e=>e.default))))},38193:(e,t,i)=>{i.d(t,{mK:()=>Q,W0:()=>J,MS:()=>ee});var r=i(76943),s=i(42411);class n{constructor(e){this._dataView=new DataView(e)}get buffer(){return this._dataView.buffer}getUint64(e,t){const i=this.getUint32(e,t),r=this.getUint32(e+4,t);let s;if(t){if(s=i+2**32*r,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}if(s=2**32*i+r,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}getInt64(e,t){let i=0;const r=(128&this._dataView.getUint8(e+(t?7:0)))>0;let s=!0;for(let n=0;n<8;n++){let o=this._dataView.getUint8(e+(t?n:7-n));r&&(s?0!==o&&(o=255&~(o-1),s=!1):o=255&~o),i+=o*256**n}return r&&(i=-i),i}getUint8(e,t){return this._dataView.getUint8(e,t)}getInt8(e,t){return this._dataView.getInt8(e,t)}getUint16(e,t){return this._dataView.getUint16(e,t)}getInt16(e,t){return this._dataView.getInt16(e,t)}getUint32(e,t){return this._dataView.getUint32(e,t)}getInt32(e,t){return this._dataView.getInt32(e,t)}getFloat16(e,t){return(0,s.g)(this._dataView,e,t)}getFloat32(e,t){return this._dataView.getFloat32(e,t)}getFloat64(e,t){return this._dataView.getFloat64(e,t)}}class o{constructor(e,t,i,r){this._dataView=new DataView(e),this._sliceOffset=t,this._littleEndian=i,this._bigTiff=r}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(e,t){return this.sliceOffset<=e&&this.sliceTop>=e+t}readUint8(e){return this._dataView.getUint8(e-this._sliceOffset,this._littleEndian)}readInt8(e){return this._dataView.getInt8(e-this._sliceOffset,this._littleEndian)}readUint16(e){return this._dataView.getUint16(e-this._sliceOffset,this._littleEndian)}readInt16(e){return this._dataView.getInt16(e-this._sliceOffset,this._littleEndian)}readUint32(e){return this._dataView.getUint32(e-this._sliceOffset,this._littleEndian)}readInt32(e){return this._dataView.getInt32(e-this._sliceOffset,this._littleEndian)}readFloat32(e){return this._dataView.getFloat32(e-this._sliceOffset,this._littleEndian)}readFloat64(e){return this._dataView.getFloat64(e-this._sliceOffset,this._littleEndian)}readUint64(e){const t=this.readUint32(e),i=this.readUint32(e+4);let r;if(this._littleEndian){if(r=t+2**32*i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*t+i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}readInt64(e){let t=0;const i=(128&this._dataView.getUint8(e+(this._littleEndian?7:0)))>0;let r=!0;for(let s=0;s<8;s++){let n=this._dataView.getUint8(e+(this._littleEndian?s:7-s));i&&(r?0!==n&&(n=255&~(n-1),r=!1):n=255&~n),t+=n*256**s}return i&&(t=-t),t}readOffset(e){return this._bigTiff?this.readUint64(e):this.readUint32(e)}}const a="\r\n\r\n";function l(e){if("undefined"!==typeof Object.fromEntries)return Object.fromEntries(e);const t={};for(const[i,r]of e)t[i.toLowerCase()]=r;return t}function h(e){const t=e.split("\r\n").map((e=>{const t=e.split(":").map((e=>e.trim()));return t[0]=t[0].toLowerCase(),t}));return l(t)}function c(e){const[t,...i]=e.split(";").map((e=>e.trim())),r=i.map((e=>e.split("=")));return{type:t,params:l(r)}}function f(e){let t,i,r;return e&&([,t,i,r]=e.match(/bytes (\d+)-(\d+)\/(\d+)/),t=parseInt(t,10),i=parseInt(i,10),r=parseInt(r,10)),{start:t,end:i,total:r}}function u(e,t){let i=null;const r=new TextDecoder("ascii"),s=[],n=`--${t}`,o=`${n}--`;for(let a=0;a<10;++a){const t=r.decode(new Uint8Array(e,a,n.length));t===n&&(i=a)}if(null===i)throw new Error("Could not find initial boundary");while(i<e.byteLength){const t=r.decode(new Uint8Array(e,i,Math.min(n.length+1024,e.byteLength-i)));if(0===t.length||t.startsWith(o))break;if(!t.startsWith(n))throw new Error("Part does not start with boundary");const l=t.substr(n.length+2);if(0===l.length)break;const c=l.indexOf(a),u=h(l.substr(0,c)),{start:g,end:d,total:p}=f(u["content-range"]),w=i+n.length+c+a.length,y=parseInt(d,10)+1-parseInt(g,10);s.push({headers:u,data:e.slice(w,w+y),offset:g,length:y,fileSize:p}),i=w+y+4}return s}class g{async fetch(e,t){return Promise.all(e.map((e=>this.fetchSlice(e,t))))}async fetchSlice(e){throw new Error(`fetching of slice ${e} not possible, not implemented`)}get fileSize(){return null}async close(){}}var d=i(39593);async function p(e){return new Promise((t=>setTimeout(t,e)))}function w(e,t){const i=Array.isArray(e)?e:Array.from(e),r=Array.isArray(t)?t:Array.from(t);return i.map(((e,t)=>[e,r[t]]))}class y extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,y),this.name="AbortError"}}class m extends Error{constructor(e,t){super(t),this.errors=e,this.message=t,this.name="AggregateError"}}const b=m;class S{constructor(e,t,i=null){this.offset=e,this.length=t,this.data=i}get top(){return this.offset+this.length}}class I{constructor(e,t,i){this.offset=e,this.length=t,this.blockIds=i}}class D extends g{constructor(e,{blockSize:t=65536,cacheSize:i=100}={}){super(),this.source=e,this.blockSize=t,this.blockCache=new d({max:i}),this.blockRequests=new Map,this.blockIdsToFetch=new Set}get fileSize(){return this.source.fileSize}async fetch(e,t){const i=new Map,r=new Map,s=new Set;for(const{offset:l,length:h}of e){let e=l+h;const{fileSize:t}=this;null!==t&&(e=Math.min(e,t));const n=Math.floor(l/this.blockSize)*this.blockSize;for(let o=n;o<e;o+=this.blockSize){const e=Math.floor(o/this.blockSize);this.blockCache.has(e)?i.set(e,this.blockCache.get(e)):this.blockRequests.has(e)?r.set(e,this.blockRequests.get(e)):(this.blockIdsToFetch.has(e)||this.blockIdsToFetch.add(e),s.add(e))}}await p(),this.fetchBlocks(t);for(const l of s){const e=this.blockRequests.get(l),t=this.blockCache.get(l);if(e)r.set(l,e);else{if(!t)throw new Error(`Block ${l} is not in the block requests`);i.set(l,t)}}let n=await Promise.allSettled(Array.from(r.values()));if(n.some((e=>"rejected"===e.status))){const e=new Set;for(const[i,s]of w(r.keys(),n)){const{rejected:r,reason:n}=s;r&&"AbortError"===n.name&&n.signal!==t&&(this.blockIdsToFetch.add(i),e.add(i))}if(this.blockIdsToFetch.length>0){this.fetchBlocks(t);for(const t of e){const e=this.blockRequests.get(t);if(!e)throw new Error(`Block ${t} is not in the block requests`);r.set(t,e)}n=await Promise.allSettled(Array.from(r.values()))}}if(n.some((e=>"rejected"===e.status))){if(t&&t.aborted)throw new y("Request was aborted");throw new b(n.filter((e=>"rejected"===e.status)).map((e=>e.reason)),"Request failed")}const o=n.map((e=>e.value)),a=new Map(w(Array.from(r.keys()),o));for(const[l,h]of i)a.set(l,h);return this.readSliceData(e,a)}fetchBlocks(e){if(this.blockIdsToFetch.size>0){const t=this.groupBlocks(this.blockIdsToFetch),i=this.source.fetch(t,e);for(let r=0;r<t.length;++r){const s=t[r];for(const t of s.blockIds){const s=(async()=>{try{const e=(await i)[r],s=t*this.blockSize,n=s-e.offset,o=Math.min(n+this.blockSize,e.data.byteLength),a=e.data.slice(n,o),l=new S(s,a.byteLength,a);return this.blockCache.set(t,l),l}catch(s){throw"AbortError"===s.name&&(s.signal=e),s}finally{this.blockRequests.delete(t)}})();this.blockRequests.set(t,s)}}this.blockIdsToFetch.clear()}}groupBlocks(e){const t=Array.from(e).sort(((e,t)=>e-t));if(0===t.length)return[];let i=[],r=null;const s=[];for(const n of t)null===r||r+1===n?(i.push(n),r=n):(s.push(new I(i[0]*this.blockSize,i.length*this.blockSize,i)),i=[n],r=n);return s.push(new I(i[0]*this.blockSize,i.length*this.blockSize,i)),s}readSliceData(e,t){return e.map((e=>{const i=e.offset+e.length,r=Math.floor(e.offset/this.blockSize),s=Math.floor((e.offset+e.length)/this.blockSize),n=new ArrayBuffer(e.length),o=new Uint8Array(n);for(let a=r;a<=s;++a){const r=t.get(a),s=r.offset-e.offset,n=r.top-i;let l,h=0,c=0;s<0?h=-s:s>0&&(c=s),l=n<0?r.length-h:i-r.offset-h;const f=new Uint8Array(r.data,h,l);o.set(f,c)}return n}))}}class T{get ok(){return this.status>=200&&this.status<=299}get status(){throw new Error("not implemented")}getHeader(e){throw new Error("not implemented")}async getData(){throw new Error("not implemented")}}class A{constructor(e){this.url=e}async request({headers:e,credentials:t,signal:i}={}){throw new Error("request is not implemented")}}class P extends T{constructor(e){super(),this.response=e}get status(){return this.response.status}getHeader(e){return this.response.headers.get(e)}async getData(){const e=this.response.arrayBuffer?await this.response.arrayBuffer():(await this.response.buffer()).buffer;return e}}class E extends A{constructor(e,t){super(e),this.credentials=t}async request({headers:e,credentials:t,signal:i}={}){const r=await fetch(this.url,{headers:e,credentials:t,signal:i});return new P(r)}}class F extends T{constructor(e,t){super(),this.xhr=e,this.data=t}get status(){return this.xhr.status}getHeader(e){return this.xhr.getResponseHeader(e)}async getData(){return this.data}}class M extends A{constructRequest(e,t){return new Promise(((i,r)=>{const s=new XMLHttpRequest;s.open("GET",this.url),s.responseType="arraybuffer";for(const[t,n]of Object.entries(e))s.setRequestHeader(t,n);s.onload=()=>{const e=s.response;i(new F(s,e))},s.onerror=r,s.onabort=()=>r(new y("Request aborted")),s.send(),t&&(t.aborted&&s.abort(),t.addEventListener("abort",(()=>s.abort())))}))}async request({headers:e,signal:t}={}){const i=await this.constructRequest(e,t);return i}}var C=i(73752),G=i(13640),k=i(82630),U=i(48764)["Buffer"];class R extends T{constructor(e,t){super(),this.response=e,this.dataPromise=t}get status(){return this.response.statusCode}getHeader(e){return this.response.headers[e]}async getData(){const e=await this.dataPromise;return e}}class O extends A{constructor(e){super(e),this.parsedUrl=k.parse(this.url),this.httpApi="http:"===this.parsedUrl.protocol?C:G}constructRequest(e,t){return new Promise(((i,r)=>{const s=this.httpApi.get({...this.parsedUrl,headers:e},(e=>{const t=new Promise((t=>{const i=[];e.on("data",(e=>{i.push(e)})),e.on("end",(()=>{const e=U.concat(i).buffer;t(e)})),e.on("error",r)}));i(new R(e,t))}));s.on("error",r),t&&(t.aborted&&s.destroy(new y("Request aborted")),t.addEventListener("abort",(()=>s.destroy(new y("Request aborted")))))}))}async request({headers:e,signal:t}={}){const i=await this.constructRequest(e,t);return i}}class x extends g{constructor(e,t,i,r){super(),this.client=e,this.headers=t,this.maxRanges=i,this.allowFullFile=r,this._fileSize=null}async fetch(e,t){return this.maxRanges>=e.length?this.fetchSlices(e,t):(this.maxRanges>0&&e.length,Promise.all(e.map((e=>this.fetchSlice(e,t)))))}async fetchSlices(e,t){const i=await this.client.request({headers:{...this.headers,Range:`bytes=${e.map((({offset:e,length:t})=>`${e}-${e+t}`)).join(",")}`},signal:t});if(i.ok){if(206===i.status){const{type:r,params:s}=c(i.getHeader("content-type"));if("multipart/byteranges"===r){const e=u(await i.getData(),s.boundary);return this._fileSize=e[0].fileSize||null,e}const n=await i.getData(),{start:o,end:a,total:l}=f(i.getHeader("content-range"));this._fileSize=l||null;const h=[{data:n,offset:o,length:a-o}];if(e.length>1){const i=await Promise.all(e.slice(1).map((e=>this.fetchSlice(e,t))));return h.concat(i)}return h}{if(!this.allowFullFile)throw new Error("Server responded with full file");const e=await i.getData();return this._fileSize=e.byteLength,[{data:e,offset:0,length:e.byteLength}]}}throw new Error("Error fetching data.")}async fetchSlice(e,t){const{offset:i,length:r}=e,s=await this.client.request({headers:{...this.headers,Range:`bytes=${i}-${i+r}`},signal:t});if(s.ok){if(206===s.status){const e=await s.getData(),{total:t}=f(s.getHeader("content-range"));return this._fileSize=t||null,{data:e,offset:i,length:r}}{if(!this.allowFullFile)throw new Error("Server responded with full file");const e=await s.getData();return this._fileSize=e.byteLength,{data:e,offset:0,length:e.byteLength}}}throw new Error("Error fetching data.")}get fileSize(){return this._fileSize}}function L(e,{blockSize:t,cacheSize:i}){return null===t?e:new D(e,t,i)}function _(e,{headers:t={},credentials:i,maxRanges:r=0,allowFullFile:s=!1,...n}={}){const o=new E(e,i),a=new x(o,t,r,s);return L(a,n)}function B(e,{headers:t={},maxRanges:i=0,allowFullFile:r=!1,...s}={}){const n=new M(e),o=new x(n,t,i,r);return L(o,s)}function K(e,{headers:t={},maxRanges:i=0,allowFullFile:r=!1,...s}={}){const n=new O(e),o=new x(n,t,i,r);return L(o,s)}function V(e,{forceXHR:t=!1,...i}={}){return"function"!==typeof fetch||t?"undefined"!==typeof XMLHttpRequest?B(e,i):K(e,i):_(e,i)}class N extends g{constructor(e){super(),this.file=e}async fetchSlice(e,t){return new Promise(((i,r)=>{const s=this.file.slice(e.offset,e.offset+e.length),n=new FileReader;n.onload=e=>i(e.target.result),n.onerror=r,n.onabort=r,n.readAsArrayBuffer(s),t&&t.addEventListener("abort",(()=>n.abort()))}))}}function v(e){return new N(e)}var j=i(82499);function q(e){switch(e){case j.sf.BYTE:case j.sf.ASCII:case j.sf.SBYTE:case j.sf.UNDEFINED:return 1;case j.sf.SHORT:case j.sf.SSHORT:return 2;case j.sf.LONG:case j.sf.SLONG:case j.sf.FLOAT:case j.sf.IFD:return 4;case j.sf.RATIONAL:case j.sf.SRATIONAL:case j.sf.DOUBLE:case j.sf.LONG8:case j.sf.SLONG8:case j.sf.IFD8:return 8;default:throw new RangeError(`Invalid field type: ${e}`)}}function z(e){const t=e.GeoKeyDirectory;if(!t)return null;const i={};for(let r=4;r<=4*t[3];r+=4){const s=j.P1[t[r]],n=t[r+1]?j.L[t[r+1]]:null,o=t[r+2],a=t[r+3];let l=null;if(n){if(l=e[n],"undefined"===typeof l||null===l)throw new Error(`Could not get value of geoKey '${s}'.`);"string"===typeof l?l=l.substring(a,a+o-1):l.subarray&&(l=l.subarray(a,a+o),1===o&&(l=l[0]))}else l=a;i[s]=l}return i}function H(e,t,i,r){let s=null,n=null;const o=q(t);switch(t){case j.sf.BYTE:case j.sf.ASCII:case j.sf.UNDEFINED:s=new Uint8Array(i),n=e.readUint8;break;case j.sf.SBYTE:s=new Int8Array(i),n=e.readInt8;break;case j.sf.SHORT:s=new Uint16Array(i),n=e.readUint16;break;case j.sf.SSHORT:s=new Int16Array(i),n=e.readInt16;break;case j.sf.LONG:case j.sf.IFD:s=new Uint32Array(i),n=e.readUint32;break;case j.sf.SLONG:s=new Int32Array(i),n=e.readInt32;break;case j.sf.LONG8:case j.sf.IFD8:s=new Array(i),n=e.readUint64;break;case j.sf.SLONG8:s=new Array(i),n=e.readInt64;break;case j.sf.RATIONAL:s=new Uint32Array(2*i),n=e.readUint32;break;case j.sf.SRATIONAL:s=new Int32Array(2*i),n=e.readInt32;break;case j.sf.FLOAT:s=new Float32Array(i),n=e.readFloat32;break;case j.sf.DOUBLE:s=new Float64Array(i),n=e.readFloat64;break;default:throw new RangeError(`Invalid field type: ${t}`)}if(t!==j.sf.RATIONAL&&t!==j.sf.SRATIONAL)for(let a=0;a<i;++a)s[a]=n.call(e,r+a*o);else for(let a=0;a<i;a+=2)s[a]=n.call(e,r+a*o),s[a+1]=n.call(e,r+(a*o+4));return t===j.sf.ASCII?new TextDecoder("utf-8").decode(s):s}class W{constructor(e,t,i){this.fileDirectory=e,this.geoKeyDirectory=t,this.nextIFDByteOffset=i}}class $ extends Error{constructor(e){super(`No image at index ${e}`),this.index=e}}class Y{async readRasters(e={}){const{window:t,width:i,height:r}=e;let{resX:s,resY:n,bbox:o}=e;const a=await this.getImage();let l=a;const h=await this.getImageCount(),c=a.getBoundingBox();if(t&&o)throw new Error('Both "bbox" and "window" passed.');if(i||r){if(t){const[e,i]=a.getOrigin(),[r,s]=a.getResolution();o=[e+t[0]*r,i+t[1]*s,e+t[2]*r,i+t[3]*s]}const e=o||c;if(i){if(s)throw new Error("Both width and resX passed");s=(e[2]-e[0])/i}if(r){if(n)throw new Error("Both width and resY passed");n=(e[3]-e[1])/r}}if(s||n){const e=[];for(let t=0;t<h;++t){const i=await this.getImage(t),{SubfileType:r,NewSubfileType:s}=i.fileDirectory;(0===t||2===r||1&s)&&e.push(i)}e.sort(((e,t)=>e.getWidth()-t.getWidth()));for(let t=0;t<e.length;++t){const i=e[t],r=(c[2]-c[0])/i.getWidth(),o=(c[3]-c[1])/i.getHeight();if(l=i,s&&s>r||n&&n>o)break}}let f=t;if(o){const[e,t]=a.getOrigin(),[i,r]=l.getResolution(a);f=[Math.round((o[0]-e)/i),Math.round((o[1]-t)/r),Math.round((o[2]-e)/i),Math.round((o[3]-t)/r)],f=[Math.min(f[0],f[2]),Math.min(f[1],f[3]),Math.max(f[0],f[2]),Math.max(f[1],f[3])]}return l.readRasters({...e,window:f})}}class X extends Y{constructor(e,t,i,r,s={}){super(),this.source=e,this.littleEndian=t,this.bigTiff=i,this.firstIFDOffset=r,this.cache=s.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(e,t){const i=this.bigTiff?4048:1024;return new o((await this.source.fetch([{offset:e,length:"undefined"!==typeof t?t:i}]))[0],e,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(e){const t=this.bigTiff?20:12,i=this.bigTiff?8:2;let r=await this.getSlice(e);const s=this.bigTiff?r.readUint64(e):r.readUint16(e),n=s*t+(this.bigTiff?16:6);r.covers(e,n)||(r=await this.getSlice(e,n));const o={};let a=e+(this.bigTiff?8:2);for(let c=0;c<s;a+=t,++c){const e=r.readUint16(a),t=r.readUint16(a+2),i=this.bigTiff?r.readUint64(a+4):r.readUint32(a+4);let s,n;const l=q(t),h=a+(this.bigTiff?12:8);if(l*i<=(this.bigTiff?8:4))s=H(r,t,i,h);else{const e=r.readOffset(h),n=q(t)*i;if(r.covers(e,n))s=H(r,t,i,e);else{const r=await this.getSlice(e,n);s=H(r,t,i,e)}}n=1===i&&-1===j.It.indexOf(e)&&t!==j.sf.RATIONAL&&t!==j.sf.SRATIONAL?s[0]:s,o[j.L[e]]=n}const l=z(o),h=r.readOffset(e+i+t*s);return new W(o,l,h)}async requestIFD(e){if(this.ifdRequests[e])return this.ifdRequests[e];if(0===e)return this.ifdRequests[e]=this.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[e];if(!this.ifdRequests[e-1])try{this.ifdRequests[e-1]=this.requestIFD(e-1)}catch(t){if(t instanceof $)throw new $(e);throw t}return this.ifdRequests[e]=(async()=>{const t=await this.ifdRequests[e-1];if(0===t.nextIFDByteOffset)throw new $(e);return this.parseFileDirectoryAt(t.nextIFDByteOffset)})(),this.ifdRequests[e]}async getImage(e=0){const t=await this.requestIFD(e);return new r.Z(t.fileDirectory,t.geoKeyDirectory,this.dataView,this.littleEndian,this.cache,this.source)}async getImageCount(){let e=0,t=!0;while(t)try{await this.requestIFD(e),++e}catch(i){if(!(i instanceof $))throw i;t=!1}return e}async getGhostValues(){const e=this.bigTiff?16:8;if(this.ghostValues)return this.ghostValues;const t="GDAL_STRUCTURAL_METADATA_SIZE=",i=t.length+100;let r=await this.getSlice(e,i);if(t===H(r,j.sf.ASCII,t.length,e)){const t=H(r,j.sf.ASCII,i,e),s=t.split("\n")[0],n=Number(s.split("=")[1].split(" ")[0])+s.length;n>i&&(r=await this.getSlice(e,n));const o=H(r,j.sf.ASCII,n,e);this.ghostValues={},o.split("\n").filter((e=>e.length>0)).map((e=>e.split("="))).forEach((([e,t])=>{this.ghostValues[e]=t}))}return this.ghostValues}static async fromSource(e,t,i){const r=(await e.fetch([{offset:0,length:1024}],i))[0],s=new n(r),o=s.getUint16(0,0);let a;if(18761===o)a=!0;else{if(19789!==o)throw new TypeError("Invalid byte order value.");a=!1}const l=s.getUint16(2,a);let h;if(42===l)h=!1;else{if(43!==l)throw new TypeError("Invalid magic number.");{h=!0;const e=s.getUint16(4,a);if(8!==e)throw new Error("Unsupported offset byte-size.")}}const c=h?s.getUint64(8,a):s.getUint32(4,a);return new X(e,a,h,c,t)}close(){return"function"===typeof this.source.close&&this.source.close()}}class Z extends Y{constructor(e,t){super(),this.mainFile=e,this.overviewFiles=t,this.imageFiles=[e].concat(t),this.fileDirectoriesPerFile=null,this.fileDirectoriesPerFileParsing=null,this.imageCount=null}async parseFileDirectoriesPerFile(){const e=[this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((e=>e.parseFileDirectoryAt(e.firstIFDOffset))));return this.fileDirectoriesPerFile=await Promise.all(e),this.fileDirectoriesPerFile}async getImage(e=0){await this.getImageCount(),await this.parseFileDirectoriesPerFile();let t=0,i=0;for(let s=0;s<this.imageFiles.length;s++){const n=this.imageFiles[s];for(let o=0;o<this.imageCounts[s];o++){if(e===t){const e=await n.requestIFD(i);return new r.Z(e.fileDirectory,e.geoKeyDirectory,n.dataView,n.littleEndian,n.cache,n.source)}t++,i++}i=0}throw new RangeError("Invalid image index")}async getImageCount(){if(null!==this.imageCount)return this.imageCount;const e=[this.mainFile.getImageCount()].concat(this.overviewFiles.map((e=>e.getImageCount())));return this.imageCounts=await Promise.all(e),this.imageCount=this.imageCounts.reduce(((e,t)=>e+t),0),this.imageCount}}async function J(e,t={},i){return X.fromSource(V(e,t),i)}async function Q(e,t){return X.fromSource(v(e),t)}async function ee(e,t=[],i={},r){const s=await X.fromSource(V(e,i),r),n=await Promise.all(t.map((e=>X.fromSource(V(e,i)))));return new Z(s,n)}},76943:(e,t,i)=>{i.d(t,{Z:()=>G});var r=i(42411),s=i(88330),n=i(18602),o=i(82499);function a(e,t){const{width:i,height:r}=e,s=new Uint8Array(i*r*3);let n;for(let o=0,a=0;o<e.length;++o,a+=3)n=256-e[o]/t*256,s[a]=n,s[a+1]=n,s[a+2]=n;return s}function l(e,t){const{width:i,height:r}=e,s=new Uint8Array(i*r*3);let n;for(let o=0,a=0;o<e.length;++o,a+=3)n=e[o]/t*256,s[a]=n,s[a+1]=n,s[a+2]=n;return s}function h(e,t){const{width:i,height:r}=e,s=new Uint8Array(i*r*3),n=t.length/3,o=t.length/3*2;for(let a=0,l=0;a<e.length;++a,l+=3){const i=e[a];s[l]=t[i]/65536*256,s[l+1]=t[i+n]/65536*256,s[l+2]=t[i+o]/65536*256}return s}function c(e){const{width:t,height:i}=e,r=new Uint8Array(t*i*3);for(let s=0,n=0;s<e.length;s+=4,n+=3){const t=e[s],i=e[s+1],o=e[s+2],a=e[s+3];r[n]=(255-t)/256*255*((255-a)/256),r[n+1]=(255-i)/256*255*((255-a)/256),r[n+2]=(255-o)/256*255*((255-a)/256)}return r}function f(e){const{width:t,height:i}=e,r=new Uint8ClampedArray(t*i*3);for(let s=0,n=0;s<e.length;s+=3,n+=3){const t=e[s],i=e[s+1],o=e[s+2];r[n]=t+1.402*(o-128),r[n+1]=t-.34414*(i-128)-.71414*(o-128),r[n+2]=t+1.772*(i-128)}return r}const u=.95047,g=1,d=1.08883;function p(e){const{width:t,height:i}=e,r=new Uint8Array(t*i*3);for(let s=0,n=0;s<e.length;s+=3,n+=3){const t=e[s+0],i=e[s+1]<<24>>24,o=e[s+2]<<24>>24;let a,l,h,c=(t+16)/116,f=i/500+c,p=c-o/200;f=u*(f*f*f>.008856?f*f*f:(f-16/116)/7.787),c=g*(c*c*c>.008856?c*c*c:(c-16/116)/7.787),p=d*(p*p*p>.008856?p*p*p:(p-16/116)/7.787),a=3.2406*f+-1.5372*c+-.4986*p,l=-.9689*f+1.8758*c+.0415*p,h=.0557*f+-.204*c+1.057*p,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,h=h>.0031308?1.055*h**(1/2.4)-.055:12.92*h,r[n]=255*Math.max(0,Math.min(1,a)),r[n+1]=255*Math.max(0,Math.min(1,l)),r[n+2]=255*Math.max(0,Math.min(1,h))}return r}var w=i(14812);function y(e,t,i,r=1){return new(Object.getPrototypeOf(e).constructor)(t*i*r)}function m(e,t,i,r,s){const n=t/r,o=i/s;return e.map((e=>{const a=y(e,r,s);for(let l=0;l<s;++l){const s=Math.min(Math.round(o*l),i-1);for(let i=0;i<r;++i){const o=Math.min(Math.round(n*i),t-1),h=e[s*t+o];a[l*r+i]=h}}return a}))}function b(e,t,i){return(1-i)*e+i*t}function S(e,t,i,r,s){const n=t/r,o=i/s;return e.map((e=>{const a=y(e,r,s);for(let l=0;l<s;++l){const s=o*l,h=Math.floor(s),c=Math.min(Math.ceil(s),i-1);for(let i=0;i<r;++i){const o=n*i,f=o%1,u=Math.floor(o),g=Math.min(Math.ceil(o),t-1),d=e[h*t+u],p=e[h*t+g],w=e[c*t+u],y=e[c*t+g],m=b(b(d,p,f),b(w,y,f),s%1);a[l*r+i]=m}}return a}))}function I(e,t,i,r,s,n="nearest"){switch(n.toLowerCase()){case"nearest":return m(e,t,i,r,s);case"bilinear":case"linear":return S(e,t,i,r,s);default:throw new Error(`Unsupported resampling method: '${n}'`)}}function D(e,t,i,r,s,n){const o=t/r,a=i/s,l=y(e,r,s,n);for(let h=0;h<s;++h){const s=Math.min(Math.round(a*h),i-1);for(let i=0;i<r;++i){const a=Math.min(Math.round(o*i),t-1);for(let o=0;o<n;++o){const c=e[s*t*n+a*n+o];l[h*r*n+i*n+o]=c}}}return l}function T(e,t,i,r,s,n){const o=t/r,a=i/s,l=y(e,r,s,n);for(let h=0;h<s;++h){const s=a*h,c=Math.floor(s),f=Math.min(Math.ceil(s),i-1);for(let i=0;i<r;++i){const a=o*i,u=a%1,g=Math.floor(a),d=Math.min(Math.ceil(a),t-1);for(let o=0;o<n;++o){const a=e[c*t*n+g*n+o],p=e[c*t*n+d*n+o],w=e[f*t*n+g*n+o],y=e[f*t*n+d*n+o],m=b(b(a,p,u),b(w,y,u),s%1);l[h*r*n+i*n+o]=m}}}return l}function A(e,t,i,r,s,n,o="nearest"){switch(o.toLowerCase()){case"nearest":return D(e,t,i,r,s,n);case"bilinear":case"linear":return T(e,t,i,r,s,n);default:throw new Error(`Unsupported resampling method: '${o}'`)}}function P(e,t,i){let r=0;for(let s=t;s<i;++s)r+=e[s];return r}function E(e,t,i){switch(e){case 1:if(t<=8)return new Uint8Array(i);if(t<=16)return new Uint16Array(i);if(t<=32)return new Uint32Array(i);break;case 2:if(8===t)return new Int8Array(i);if(16===t)return new Int16Array(i);if(32===t)return new Int32Array(i);break;case 3:switch(t){case 16:case 32:return new Float32Array(i);case 64:return new Float64Array(i);default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")}function F(e,t){return(1!==e&&2!==e||!(t<=32)||t%8!==0)&&(3!==e||16!==t&&32!==t&&64!==t)}function M(e,t,i,r,s,n,o){const a=new DataView(e),l=2===i?o*n:o*n*r,h=2===i?1:r,c=E(t,s,l),f=parseInt("1".repeat(s),2);if(1===t){let e;e=1===i?r*s:s;let t=n*e;0!==(7&t)&&(t=t+7&-8);for(let i=0;i<o;++i){const e=i*t;for(let t=0;t<n;++t){const r=e+t*h*s;for(let e=0;e<h;++e){const o=r+e*s,l=(i*n+t)*h+e,u=Math.floor(o/8),g=o%8;if(g+s<=8)c[l]=a.getUint8(u)>>8-s-g&f;else if(g+s<=16)c[l]=a.getUint16(u)>>16-s-g&f;else if(g+s<=24){const e=a.getUint16(u)<<8|a.getUint8(u+2);c[l]=e>>24-s-g&f}else c[l]=a.getUint32(u)>>32-s-g&f}}}}return c.buffer}class C{constructor(e,t,i,r,s,n){this.fileDirectory=e,this.geoKeys=t,this.dataView=i,this.littleEndian=r,this.tiles=s?{}:null,this.isTiled=!e.StripOffsets;const o=e.PlanarConfiguration;if(this.planarConfiguration="undefined"===typeof o?1:o,1!==this.planarConfiguration&&2!==this.planarConfiguration)throw new Error("Invalid planar configuration.");this.source=n}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.geoKeys}getWidth(){return this.fileDirectory.ImageWidth}getHeight(){return this.fileDirectory.ImageLength}getSamplesPerPixel(){return"undefined"!==typeof this.fileDirectory.SamplesPerPixel?this.fileDirectory.SamplesPerPixel:1}getTileWidth(){return this.isTiled?this.fileDirectory.TileWidth:this.getWidth()}getTileHeight(){return this.isTiled?this.fileDirectory.TileLength:"undefined"!==typeof this.fileDirectory.RowsPerStrip?Math.min(this.fileDirectory.RowsPerStrip,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(e){return this.isTiled||(e+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-e*this.getTileHeight()}getBytesPerPixel(){let e=0;for(let t=0;t<this.fileDirectory.BitsPerSample.length;++t)e+=this.getSampleByteSize(t);return e}getSampleByteSize(e){if(e>=this.fileDirectory.BitsPerSample.length)throw new RangeError(`Sample index ${e} is out of range.`);return Math.ceil(this.fileDirectory.BitsPerSample[e]/8)}getReaderForSample(e){const t=this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1,i=this.fileDirectory.BitsPerSample[e];switch(t){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(e,t){return(0,r.g)(this,e,t)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64;default:break}break;default:break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(e=0){return this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1}getBitsPerSample(e=0){return this.fileDirectory.BitsPerSample[e]}getArrayForSample(e,t){const i=this.getSampleFormat(e),r=this.getBitsPerSample(e);return E(i,r,t)}async getTileOrStrip(e,t,i,r,s){const n=Math.ceil(this.getWidth()/this.getTileWidth()),o=Math.ceil(this.getHeight()/this.getTileHeight());let a;const{tiles:l}=this;let h,c;1===this.planarConfiguration?a=t*n+e:2===this.planarConfiguration&&(a=i*n*o+t*n+e),this.isTiled?(h=this.fileDirectory.TileOffsets[a],c=this.fileDirectory.TileByteCounts[a]):(h=this.fileDirectory.StripOffsets[a],c=this.fileDirectory.StripByteCounts[a]);const f=(await this.source.fetch([{offset:h,length:c}],s))[0];let u;return null!==l&&l[a]?u=l[a]:(u=(async()=>{let e=await r.decode(this.fileDirectory,f);const i=this.getSampleFormat(),s=this.getBitsPerSample();return F(i,s)&&(e=M(e,i,this.planarConfiguration,this.getSamplesPerPixel(),s,this.getTileWidth(),this.getBlockHeight(t))),e})(),null!==l&&(l[a]=u)),{x:e,y:t,sample:i,data:await u}}async _readRaster(e,t,i,r,s,n,o,a,l){const h=this.getTileWidth(),c=this.getTileHeight(),f=this.getWidth(),u=this.getHeight(),g=Math.max(Math.floor(e[0]/h),0),d=Math.min(Math.ceil(e[2]/h),Math.ceil(f/h)),p=Math.max(Math.floor(e[1]/c),0),w=Math.min(Math.ceil(e[3]/c),Math.ceil(u/c)),y=e[2]-e[0];let m=this.getBytesPerPixel();const b=[],S=[];for(let I=0;I<t.length;++I)1===this.planarConfiguration?b.push(P(this.fileDirectory.BitsPerSample,0,t[I])/8):b.push(0),S.push(this.getReaderForSample(t[I]));const D=[],{littleEndian:T}=this;for(let I=p;I<w;++I)for(let n=g;n<d;++n)for(let o=0;o<t.length;++o){const a=o,g=t[o];2===this.planarConfiguration&&(m=this.getSampleByteSize(o));const d=this.getTileOrStrip(n,I,g,s,l);D.push(d),d.then((s=>{const n=s.data,o=new DataView(n),l=this.getBlockHeight(s.y),g=s.y*c,d=s.x*h,p=g+l,w=(s.x+1)*h,I=S[a],D=Math.min(l,l-(p-e[3]),u-g),A=Math.min(h,h-(w-e[2]),f-d);for(let c=Math.max(0,e[1]-g);c<D;++c)for(let s=Math.max(0,e[0]-d);s<A;++s){const n=(c*h+s)*m,l=I.call(o,n+b[a],T);let f;r?(f=(c+g-e[1])*y*t.length+(s+d-e[0])*t.length+a,i[f]=l):(f=(c+g-e[1])*y+s+d-e[0],i[a][f]=l)}}))}if(await Promise.all(D),n&&e[2]-e[0]!==n||o&&e[3]-e[1]!==o){let s;return s=r?A(i,e[2]-e[0],e[3]-e[1],n,o,t.length,a):I(i,e[2]-e[0],e[3]-e[1],n,o,a),s.width=n,s.height=o,s}return i.width=n||e[2]-e[0],i.height=o||e[3]-e[1],i}async readRasters({window:e,samples:t=[],interleave:i,pool:r=null,width:s,height:n,resampleMethod:o,fillValue:a,signal:l}={}){const h=e||[0,0,this.getWidth(),this.getHeight()];if(h[0]>h[2]||h[1]>h[3])throw new Error("Invalid subsets");const c=h[2]-h[0],f=h[3]-h[1],u=c*f,g=this.getSamplesPerPixel();if(t&&t.length){for(let w=0;w<t.length;++w)if(t[w]>=g)return Promise.reject(new RangeError(`Invalid sample index '${t[w]}'.`))}else for(let w=0;w<g;++w)t.push(w);let d;if(i){const e=this.fileDirectory.SampleFormat?Math.max.apply(null,this.fileDirectory.SampleFormat):1,i=Math.max.apply(null,this.fileDirectory.BitsPerSample);d=E(e,i,u*t.length),a&&d.fill(a)}else{d=[];for(let e=0;e<t.length;++e){const i=this.getArrayForSample(t[e],u);Array.isArray(a)&&e<a.length?i.fill(a[e]):a&&!Array.isArray(a)&&i.fill(a),d.push(i)}}const p=r||await(0,w.X)(this.fileDirectory),y=await this._readRaster(h,t,d,i,p,s,n,o,l);return y}async readRGB({window:e,interleave:t=!0,pool:i=null,width:r,height:s,resampleMethod:n,enableAlpha:u=!1,signal:g}={}){const d=e||[0,0,this.getWidth(),this.getHeight()];if(d[0]>d[2]||d[1]>d[3])throw new Error("Invalid subsets");const w=this.fileDirectory.PhotometricInterpretation;if(w===o.Ie.RGB){let a=[0,1,2];if(this.fileDirectory.ExtraSamples!==o.pd.Unspecified&&u){a=[];for(let e=0;e<this.fileDirectory.BitsPerSample.length;e+=1)a.push(e)}return this.readRasters({window:e,interleave:t,samples:a,pool:i,width:r,height:s,resampleMethod:n,signal:g})}let y;switch(w){case o.Ie.WhiteIsZero:case o.Ie.BlackIsZero:case o.Ie.Palette:y=[0];break;case o.Ie.CMYK:y=[0,1,2,3];break;case o.Ie.YCbCr:case o.Ie.CIELab:y=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}const m={window:d,interleave:!0,samples:y,pool:i,width:r,height:s,resampleMethod:n,signal:g},{fileDirectory:b}=this,S=await this.readRasters(m),I=2**this.fileDirectory.BitsPerSample[0];let D;switch(w){case o.Ie.WhiteIsZero:D=a(S,I);break;case o.Ie.BlackIsZero:D=l(S,I);break;case o.Ie.Palette:D=h(S,b.ColorMap);break;case o.Ie.CMYK:D=c(S);break;case o.Ie.YCbCr:D=f(S);break;case o.Ie.CIELab:D=p(S);break;default:throw new Error("Unsupported photometric interpretation.")}if(!t){const e=new Uint8Array(D.length/3),t=new Uint8Array(D.length/3),i=new Uint8Array(D.length/3);for(let r=0,s=0;r<D.length;r+=3,++s)e[s]=D[r],t[s]=D[r+1],i[s]=D[r+2];D=[e,t,i]}return D.width=S.width,D.height=S.height,D}getTiePoints(){if(!this.fileDirectory.ModelTiepoint)return[];const e=[];for(let t=0;t<this.fileDirectory.ModelTiepoint.length;t+=6)e.push({i:this.fileDirectory.ModelTiepoint[t],j:this.fileDirectory.ModelTiepoint[t+1],k:this.fileDirectory.ModelTiepoint[t+2],x:this.fileDirectory.ModelTiepoint[t+3],y:this.fileDirectory.ModelTiepoint[t+4],z:this.fileDirectory.ModelTiepoint[t+5]});return e}getGDALMetadata(e=null){const t={};if(!this.fileDirectory.GDAL_METADATA)return null;const i=this.fileDirectory.GDAL_METADATA;let r=n(i,"Item");r=null===e?r.filter((e=>void 0===s(e,"sample"))):r.filter((t=>Number(s(t,"sample"))===e));for(let n=0;n<r.length;++n){const e=r[n];t[s(e,"name")]=e.inner}return t}getGDALNoData(){if(!this.fileDirectory.GDAL_NODATA)return null;const e=this.fileDirectory.GDAL_NODATA;return Number(e.substring(0,e.length-1))}getOrigin(){const e=this.fileDirectory.ModelTiepoint,t=this.fileDirectory.ModelTransformation;if(e&&6===e.length)return[e[3],e[4],e[5]];if(t)return[t[3],t[7],t[11]];throw new Error("The image does not have an affine transformation.")}getResolution(e=null){const t=this.fileDirectory.ModelPixelScale,i=this.fileDirectory.ModelTransformation;if(t)return[t[0],-t[1],t[2]];if(i)return[i[0],i[5],i[10]];if(e){const[t,i,r]=e.getResolution();return[t*e.getWidth()/this.getWidth(),i*e.getHeight()/this.getHeight(),r*e.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return 1===this.geoKeys.GTRasterTypeGeoKey}getBoundingBox(){const e=this.getOrigin(),t=this.getResolution(),i=e[0],r=e[1],s=i+t[0]*this.getWidth(),n=r+t[1]*this.getHeight();return[Math.min(i,s),Math.min(r,n),Math.max(i,s),Math.max(r,n)]}}const G=C},82499:(e,t,i)=>{i.d(t,{Ie:()=>l,It:()=>n,L:()=>r,L5:()=>c,P1:()=>u,Qb:()=>f,pd:()=>h,sf:()=>a});const r={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},s={};for(const d in r)r.hasOwnProperty(d)&&(s[r[d]]=parseInt(d,10));const n=[s.BitsPerSample,s.ExtraSamples,s.SampleFormat,s.StripByteCounts,s.StripOffsets,s.StripRowCounts,s.TileByteCounts,s.TileOffsets,s.SubIFDs],o={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},a={};for(const d in o)o.hasOwnProperty(d)&&(a[o[d]]=parseInt(d,10));const l={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},h={Unspecified:0,Assocalpha:1,Unassalpha:2},c={Version:0,AddCompression:1},f={None:0,Deflate:1},u={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},g={};for(const d in u)u.hasOwnProperty(d)&&(g[u[d]]=parseInt(d,10))}}]);
//# sourceMappingURL=8193.ae0699d9.js.map