"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[54571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),O=o,f=u["".concat(p,".").concat(O)]||u[O]||m[O]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},52185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/example",id:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/example",title:"example",description:"In this example, the SKLEARNIMAGE node provides an astronaut image in RGB scale.",source:"@site/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/example.md",sourceDirName:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1",slug:"/nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/example",permalink:"/nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"SKLEARNIMAGE")," node provides an astronaut image in RGB scale."),(0,o.kt)("p",null,"The image is then passed down to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TWO_DIMENSIONAL_FFT")," node where discrete fourier transform is applied across all pixels in the image.\nNote that since the image is in RGB, the DFT can only be applied to one color channel or the grayscale version of the original image.\nIn this example, DFT is applied to the red channel."))}m.isMDXComponent=!0}}]);