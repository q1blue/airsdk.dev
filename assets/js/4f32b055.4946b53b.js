"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4730],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],c={title:"Reading external XML documents",sidebar_position:11},l=void 0,s={unversionedId:"development/core-actionscript-classes/working-with-xml/reading-external-xml-documents",id:"development/core-actionscript-classes/working-with-xml/reading-external-xml-documents",isDocsHomePage:!1,title:"Reading external XML documents",description:"You can use the URLLoader class to load XML data from a URL. To use the following code in your applications, replace the XML_URL value in the example with a valid URL:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/reading-external-xml-documents.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/reading-external-xml-documents",permalink:"/docs/development/core-actionscript-classes/working-with-xml/reading-external-xml-documents",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/reading-external-xml-documents.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Reading external XML documents",sidebar_position:11},sidebar:"mainSidebar",previous:{title:"XML type conversion",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion"},next:{title:"XML in ActionScript example - Loading RSS data from the Internet",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xml-in-actionscript-example"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the URLLoader class to load XML data from a URL. To use the following code in your applications, replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"XML_URL")," value in the example with a valid URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'import flash.events.Event;\nimport flash.net.URLLoader;\n\nvar myXML:XML = new XML();\nvar XML_URL:String = "http://www.example.com/Sample3.xml";\nvar myXMLURL:URLRequest = new URLRequest(XML_URL);\nvar myLoader:URLLoader = new URLLoader(myXMLURL);\nmyLoader.addEventListener(Event.COMPLETE, xmlLoaded);\n\nfunction xmlLoaded(event:Event):void\n{\n    myXML = XML(myLoader.data);\n    trace("Data loaded.");\n}\n')),(0,a.kt)("p",null,"You can also use the XMLSocket class to set up an asynchronous XML socket connection with a server. For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform")," ."))}d.isMDXComponent=!0}}]);