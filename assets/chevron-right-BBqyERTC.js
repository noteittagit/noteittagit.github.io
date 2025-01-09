import{r as a}from"./index-CTtRJ3bg.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:c,...m},l)=>a.createElement("svg",{ref:l,...w,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:i("lucide",s),...m},[...c.map(([u,h])=>a.createElement(u,h)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(r,e)=>{const t=a.forwardRef(({className:o,...s},n)=>a.createElement(p,{ref:n,iconNode:e,className:i(`lucide-${d(r)}`,o),...s}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=f("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);export{C,f as c};
