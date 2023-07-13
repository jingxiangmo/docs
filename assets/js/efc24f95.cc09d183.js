"use strict";(self.webpackChunkflojoy_doc=self.webpackChunkflojoy_doc||[]).push([[21351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,l={unversionedId:"nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/example",id:"nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/example",title:"example",description:"- This is a tutorial for using the node called Phidget 22 and measure pressures from Flexiforce sensors using a Phidget InterfaceKit",source:"@site/docs/nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/example.md",sourceDirName:"nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1",slug:"/nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/example",permalink:"/nodes/INSTRUMENTS/PHIDGET/PHIDGET22/examples/EX1/example",draft:!1,tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is a tutorial for using the node called Phidget 22 and measure pressures from Flexiforce sensors using a Phidget InterfaceKit")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware required")," : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Phidget InterfaceKit (Model 8/8/8 1018_3 is the one we used to develop the node)"),(0,o.kt)("li",{parentName:"ul"},"N pressure sensors (This tutorial will present measurement from FlexiForce sensor but you can use all the Sensors compatible with Phidget)."),(0,o.kt)("li",{parentName:"ul"},"Connections cables (USB, Electronic cables)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software required :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flojoy software running (Go to the page -- Getting started/Installation)"),(0,o.kt)("li",{parentName:"ul"},"Phidget 22 PAckage -- (It should be installed automatically from Requirements) (Otherwise follow docs from : ",(0,o.kt)("a",{parentName:"li",href:"https://www.phidgets.com/docs/Main_Page"},"https://www.phidgets.com/docs/Main_Page"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection :")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the PHIDGET Interfacekit to your computer with an USB Cable"),(0,o.kt)("li",{parentName:"ul"},"Connect the Flexiforce sensors with the Phidget Interfacekit using a Flexiforce adapter (See Image)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(12890).Z,width:"3024",height:"4032"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node Management :")," "),(0,o.kt)("p",null,"The PHIDGET22 node doesn't need any data input, so it can be placed on the left on the Flojoy interface : "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8684).Z,width:"1393",height:"546"})),(0,o.kt)("p",null,"You'll need to set up one numeric parameters in the CRTL panel which is the number of pressure sensors you are using for your experiment.\nNote that the node is measuring voltage from the sensors (The calibration will depend on the type of sensor you are using)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(10853).Z,width:"481",height:"426"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Calibration :")," "),(0,o.kt)("p",null,"In order to Calibrate your sensor, you'll need to apply some known pressures (3 or 4 is best, and you can use pad sensor to increase the voltage)\nand measure some voltages with the Flojoy application.\nFrom these measurements you deduce the relation between the voltage and the pressure applied on the sensor, and you can use operationnal\nnodes in order to convert voltage into pressures."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Visualisation :")," "),(0,o.kt)("p",null,"After that you can choose your Visualisation node that fits your project to display the pressure measurements as you want.  "),(0,o.kt)("p",null,"Also, you can use the loop node (See documentation) in order to update the measurements, you can set the parameters you want for the loops\n(Delay, number of loops, etc..) "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(70733).Z,width:"1280",height:"487"})))}d.isMDXComponent=!0},10853:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PHIDGET22_ctrl-276bf577ddf6ab49eab6e6ec957f0f9a.png"},8684:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PHIDGET22_nodes-7a8bb0539b168dc6d81441813f4ff808.png"},70733:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PHIDGET22_nodeswithloop-a3a2b83337d1e6d02a6b62d8143b4ea8.png"},12890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Phidget22_sensor-90619b4a952ae5f3de51d489bb315565.jpg"}}]);