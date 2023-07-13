"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[75595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(h,p(p({ref:t},c),{},{components:r})):o.createElement(h,p({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},p=void 0,l={unversionedId:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/example",id:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/example",title:"example",description:"This is a tutorial for using the nodes called Stepper Motor driver Tic and Stepper Driver motor Tic Knob in order to control a motor with the Flojoy App",source:"@site/docs/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/example.md",sourceDirName:"nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1",slug:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/example",permalink:"/nodes/INSTRUMENTS/STEPPER_MOTOR/STEPPER_DRIVER_TIC_KNOB/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a tutorial for using the nodes called Stepper Motor driver Tic and Stepper Driver motor Tic Knob in order to control a motor with the Flojoy App"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware required :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Motor (Nema 15-23)"),(0,n.kt)("li",{parentName:"ul"},"A Tic motor driver (All models are available and should work with these nodes) -- TIC T825 was used for experimentation. "),(0,n.kt)("li",{parentName:"ul"},"A Power Supply wich enough power to run the driver and the motor. (You'll need to setup the good current value depending on the motor size you are using)"),(0,n.kt)("li",{parentName:"ul"},"Connections cables (USB, Electronic cables)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppermotor_z7yaly.jpg",alt:"TIC Driver Connections"}),"\n",(0,n.kt)("em",{parentName:"p"},"Connection between the computer, the Tic driver, the stepper motor and the power supply")," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software required :")),(0,n.kt)("p",null,"Flojoy software running (Go to the page -- Getting started/Installation)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Node Management :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input data : None"),(0,n.kt)("li",{parentName:"ul"},"Output node : End (To stop the process)")),(0,n.kt)("p",null,"You don't need to have a node placed before the stepper motor nodes because the only data needed by the nodes is set up with the parameters. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters : ")),(0,n.kt)("p",null,"The Stepper Driver Tic Knob node allows you to control the rotation of the motor with a knob.\nYou can choose the motor rotation with the value of the knob (From 0 to 100 is corresponding to a rotation between 0 and 360 degrees)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dhopxs1y3/image/upload/v1683653875/steppernodeknob_qhsk73.png",alt:"Stepper node knob"}),"\n",(0,n.kt)("em",{parentName:"p"},"Flojoy interface with the knob node")," "),(0,n.kt)("p",null,"At the end of the process the stepper motor will be placed in the last position set up and wait for a new parameters for the next movement.\nIt should be possible to use these nodes with the LOOP node in order to make a repetitive movement with the motor."))}d.isMDXComponent=!0}}]);