"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7411],{3704:(e,t,r)=>{function n(e,t){let r=e.length-t,n=0;do{for(let r=t;r>0;r--)e[n+t]+=e[n],n++;r-=t}while(r>0)}function o(e,t,r){let n=0,o=e.length;const i=o/r;while(o>t){for(let r=t;r>0;--r)e[n+t]+=e[n],++n;o-=t}const l=e.slice();for(let s=0;s<i;++s)for(let t=0;t<r;++t)e[r*s+t]=l[(r-t-1)*i+s]}function i(e,t,r,i,l,s){if(!t||1===t)return e;for(let n=0;n<l.length;++n){if(l[n]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[n]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const a=l[0]/8,c=2===s?1:l.length;for(let h=0;h<i;++h){if(h*c*r*a>=e.byteLength)break;let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,h*c*r*a,c*r*a);break;case 16:i=new Uint16Array(e,h*c*r*a,c*r*a/2);break;case 32:i=new Uint32Array(e,h*c*r*a,c*r*a/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}n(i,c,a)}else 3===t&&(i=new Uint8Array(e,h*c*r*a,c*r*a),o(i,c,a))}return e}r.d(t,{Z:()=>l});class l{async decode(e,t){const r=await this.decodeBlock(t),n=e.Predictor||1;if(1!==n){const t=!e.StripOffsets,o=t?e.TileWidth:e.ImageWidth,l=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return i(r,n,o,l,e.BitsPerSample,e.PlanarConfiguration)}return r}}},17411:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(3704);class o extends n.Z{decodeBlock(e){const t=new DataView(e),r=[];for(let n=0;n<e.byteLength;++n){let e=t.getInt8(n);if(e<0){const o=t.getUint8(n+1);e=-e;for(let t=0;t<=e;++t)r.push(o);n+=1}else{for(let o=0;o<=e;++o)r.push(t.getUint8(n+o+1));n+=e+1}}return new Uint8Array(r).buffer}}}}]);
//# sourceMappingURL=7411.9749e1c0.js.map