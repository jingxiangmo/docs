"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[64739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1/example",id:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1/example",title:"example",description:"In this example, LINSPACE generates an array of 600 samples, which would be the value of step.",source:"@site/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1/example.md",sourceDirName:"nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1",slug:"/nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1/example",permalink:"/nodes/TRANSFORMERS/SIGNAL_PROCESSING/FFT/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"LINSPACE")," generates an array of 600 samples, which would be the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"step"),".\nThe sample rate in this case is 800, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"end")," parameter is samples/sample_rate = 0.75."),(0,a.kt)("p",null,"The array is then passed down to two ",(0,a.kt)("inlineCode",{parentName:"p"},"SINE")," nodes, with one generating a sine wave of 30hz with 1 amplitude,\nand the other generating a sine wave of 100hz with 0.5 amplitude."),(0,a.kt)("p",null,"Finally, the signal is passed down to ",(0,a.kt)("inlineCode",{parentName:"p"},"FFT")," which performs the fast fourier transform algorithm,\ntransforming the input from the time domain into the frequency domain. Since we want to display the data,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"display")," option is set to true. The input signal is only consist of real numbers, so ",(0,a.kt)("inlineCode",{parentName:"p"},"real")," is also true.\nNote that a ",(0,a.kt)("inlineCode",{parentName:"p"},"hann")," window is used here to reduce spectral leakage, but any other window type or no window also works."))}u.isMDXComponent=!0}}]);