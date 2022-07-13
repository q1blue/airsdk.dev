"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[3171],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,m=h["".concat(r,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(4137)),s=["components"],l={title:"Setting Stage properties",sidebar_position:6},r=void 0,d={unversionedId:"development/display/display-programming/working-with-display-objects/setting-stage-properties",id:"development/display/display-programming/working-with-display-objects/setting-stage-properties",isDocsHomePage:!1,title:"Setting Stage properties",description:"The Stage class overrides most properties and methods of the DisplayObject class. If you call one of these overridden properties or methods, Flash Player and AIR throw an exception. For example, the Stage object does not have x or y properties, since its position is fixed as the main container for the application. The x and y properties refer to the position of a display object relative to its container, and since the Stage is not contained in another display object container, these properties do not apply.",source:"@site/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties.md",sourceDirName:"development/display/display-programming/working-with-display-objects",slug:"/development/display/display-programming/working-with-display-objects/setting-stage-properties",permalink:"/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Setting Stage properties",sidebar_position:6},sidebar:"mainSidebar",previous:{title:"Traversing the display list",permalink:"/docs/development/display/display-programming/working-with-display-objects/traversing-the-display-list"},next:{title:"Handling events for display objects",permalink:"/docs/development/display/display-programming/working-with-display-objects/handling-events-for-display-objects"}},c=[{value:"Controlling the playback frame rate",id:"controlling-the-playback-frame-rate",children:[],level:2},{value:"Controlling Stage scaling",id:"controlling-stage-scaling",children:[{value:"Setting the stage scale mode for AIR windows",id:"setting-the-stage-scale-mode-for-air-windows",children:[],level:3}],level:2},{value:"Working with full-screen mode",id:"working-with-full-screen-mode",children:[{value:"Enabling full-screen mode in Flash Player",id:"enabling-full-screen-mode-in-flash-player",children:[],level:3},{value:"Enabling full-screen interactive mode in Flash Player 11.3 and higher",id:"enabling-full-screen-interactive-mode-in-flash-player-113-and-higher",children:[],level:3},{value:"Full screen stage size and scaling",id:"full-screen-stage-size-and-scaling",children:[],level:3},{value:"Keyboard support in full-screen mode",id:"keyboard-support-in-full-screen-mode",children:[],level:3},{value:"Mouse support in full-screen mode",id:"mouse-support-in-full-screen-mode",children:[],level:3},{value:"Hardware scaling in full-screen mode",id:"hardware-scaling-in-full-screen-mode",children:[],level:3},{value:"Direct and GPU-compositing window modes",id:"direct-and-gpu-compositing-window-modes",children:[],level:3}],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Stage class overrides most properties and methods of the DisplayObject class. If you call one of these overridden properties or methods, Flash Player and AIR throw an exception. For example, the Stage object does not have x or y properties, since its position is fixed as the main container for the application. The x and y properties refer to the position of a display object relative to its container, and since the Stage is not contained in another display object container, these properties do not apply."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some properties and methods of the Stage class are only available to display objects that are in the same security sandbox as the first SWF file loaded. For details, see Stage security ."))),(0,i.kt)("h2",{id:"controlling-the-playback-frame-rate"},"Controlling the playback frame rate"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"frameRate")," property of the Stage class is used to set the frame rate for all SWF files loaded into the application. For more information, see the ActionScript 3.0 Reference for the Adobe Flash Platform ."),(0,i.kt)("h2",{id:"controlling-stage-scaling"},"Controlling Stage scaling"),(0,i.kt)("p",null,"When the portion of the screen representing Flash Player or AIR is resized, the runtime automatically adjusts the Stage contents to compensate. The Stage class\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," property determines how the Stage contents are adjusted. This property can be set to four different values, defined as constants in the ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.display.StageScaleMode")," class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StageScaleMode.EXACT_FIT")," scales the SWF to fill the new stage dimensions without regard for the original content aspect ratio. The scale factors might not be the same for width and height, so the content can appear squeezed or stretched if the aspect ratio of the stage is changed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StageScaleMode.SHOW_ALL")," scales the SWF to fit entirely within the new stage dimensions without changing the content aspect ratio. This scale mode displays all of the content, but can result in \u201cletterbox\u201d borders, like the black bars that appear when viewing a wide-screen movie on a standard television."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StageScaleMode.NO_BORDER")," scales the SWF to entirely fill the new stage dimensions without changing the aspect ratio of the content. This scale mode makes full use of the stage display area, but can result in cropping."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StageScaleMode.NO_SCALE")," \u2014 does not scale the SWF. If the new stage dimensions are smaller, the content is cropped; if larger, the added space is blank.")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE")," scale mode only, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stageWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stageHeight")," properties of the Stage class can be used to determine the actual pixel dimensions of the resized stage. (In the other scale modes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stageWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stageHeight")," properties always reflect the original width and height of the SWF.) In addition, when ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE")," and the SWF file is resized, the Stage class\u2019s resize event is dispatched, allowing you to make adjustments accordingly."),(0,i.kt)("p",null,"Consequently, having ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE")," allows you to have greater control over how the screen contents adjust to the window resizing if you desire. For example, in a SWF containing a video and a control bar, you might want to make the control bar stay the same size when the Stage is resized, and only change the size of the video window to accommodate the Stage size change. This is demonstrated in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"// mainContent is a display object containing the main content;\n// it is positioned at the top-left corner of the Stage, and\n// it should resize when the SWF resizes.\n\n// controlBar is a display object (e.g. a Sprite) containing several\n// buttons; it should stay positioned at the bottom-left corner of the\n// Stage (below mainContent) and it should not resize when the SWF\n// resizes.\n\nimport flash.display.Stage;\nimport flash.display.StageAlign;\nimport flash.display.StageScaleMode;\nimport flash.events.Event;\n\nvar swfStage:Stage = mainContent.stage;\nswfStage.scaleMode = StageScaleMode.NO_SCALE;\nswfStage.align = StageAlign.TOP_LEFT;\nswfStage.addEventListener(Event.RESIZE, resizeDisplay);\n\nfunction resizeDisplay(event:Event):void\n{\n    var swfWidth:int = swfStage.stageWidth;\n    var swfHeight:int = swfStage.stageHeight;\n\n    // Resize the main content area\n    var newContentHeight:Number = swfHeight - controlBar.height;\n    mainContent.height = newContentHeight;\n    mainContent.scaleX = mainContent.scaleY;\n\n    // Reposition the control bar.\n    controlBar.y = newContentHeight;\n\n}\n")),(0,i.kt)("h3",{id:"setting-the-stage-scale-mode-for-air-windows"},"Setting the stage scale mode for AIR windows"),(0,i.kt)("p",null,"The stage ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," property determines how the stage scales and clips child display objects when a window is resized. Only the ",(0,i.kt)("inlineCode",{parentName:"p"},"noScale")," mode should be used in AIR. In this mode, the stage is not scaled. Instead, the size of the stage changes directly with the bounds of the window. Objects may be clipped if the window is resized smaller."),(0,i.kt)("p",null,"The stage scale modes are designed for use in a environments such as a web browser where you don't always have control over the size or aspect ratio of the stage. The modes let you choose the least bad compromise when the stage does not match the ideal size or aspect ratio of your application. In AIR, you always have control of the stage, so in most cases re-laying out your content or adjusting the dimensions of your window will give you better results than enabling stage scaling."),(0,i.kt)("p",null,"In the browser and for the initial AIR window, the relationship between the window size and the initial scale factor is read from the loaded SWF file. However, when you create a NativeWindow object, AIR chooses an arbitrary relationship between the window size and the scale factor of 72:1. Thus, if your window is 72x72 pixels, a 10x10 rectangle added to the window is drawn the correct size of 10x10 pixels. However, if the window is 144x144 pixels, then a 10x10 pixel rectangle is scaled to 20x20 pixels. If you insist on using a scaleMode other than noScale for a window stage, you can compensate by setting the scale factor of any display objects in the window to the ratio of 72 pixels to the current width and height of the stage. For example, the following code calculates the required scale factor for a display object named client :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"if(newWindow.stage.scaleMode != StageScaleMode.NO_SCALE){\n    client.scaleX = 72/newWindow.stage.stageWidth;\n    client.scaleY = 72/newWindow.stage.stageHeight;\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Flex and HTML windows automatically set the stage scaleMode to noScale . Changing the scaleMode disturbs the automatic layout mechanisms used in these types of windows."))),(0,i.kt)("h2",{id:"working-with-full-screen-mode"},"Working with full-screen mode"),(0,i.kt)("p",null,"Full-screen mode allows you to set a movie\u2019s stage to fill a viewer\u2019s entire monitor without any container borders or menus. The Stage class\u2019s displayState property is used to toggle full-screen mode on and off for a SWF. The displayState property can be set to one of the values defined by the constants in the flash.display.StageDisplayState class. To turn on full-screen mode, set the displayState property to StageDisplayState.FULL_SCREEN :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"stage.displayState = StageDisplayState.FULL_SCREEN;\n")),(0,i.kt)("p",null,"To turn on full-screen interactive mode (new in Flash Player 11.3), set the displayState property to ",(0,i.kt)("inlineCode",{parentName:"p"},"StageDisplayState.FULL_SCREEN_INTERACTIVE")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;\n")),(0,i.kt)("p",null,"In Flash Player, full-screen mode can only be initiated through ActionScript in response to a mouse click (including right-click) or keypress. AIR content running in the application security sandbox does not require that full-screen mode be entered in response to a user gesture."),(0,i.kt)("p",null,"To exit full-screen mode, set the displayState property to ",(0,i.kt)("inlineCode",{parentName:"p"},"StageDisplayState.NORMAL")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"stage.displayState = StageDisplayState.NORMAL;\n")),(0,i.kt)("p",null,"In addition, a user can choose to leave full-screen mode by switching focus to a different window or by using one of several key combinations: the Esc key (all platforms), Control-W (Windows), Command-W (Mac), or Alt-F4 (Windows)."),(0,i.kt)("h3",{id:"enabling-full-screen-mode-in-flash-player"},"Enabling full-screen mode in Flash Player"),(0,i.kt)("p",null,"To enable full-screen mode for a SWF file embedded in an HTML page, the HTML code to embed Flash Player must include a param tag and embed attribute with the name allowFullScreen and value true , like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<object>\n  ...\n  <param name="allowFullScreen" value="true" />\n  <embed ... allowFullScreen="true" />\n</object>\n')),(0,i.kt)("p",null,"In the Flash authoring tool, select File -> Publish Settings and in the Publish Settings dialog box, on the HTML tab, select the Flash Only - Allow Full Screen template."),(0,i.kt)("p",null,"In Flex, ensure that the HTML template includes ",(0,i.kt)("inlineCode",{parentName:"p"},"<object>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<embed>")," tags that support full screen."),(0,i.kt)("p",null,"If you are using JavaScript in a web page to generate the SWF-embedding tags, you must alter the JavaScript to add the allowFullScreen param tag and attribute. For example, if your HTML page uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"AC_FL_RunContent()")," function (which is used in HTML pages generated by Flash Professional and Flash Builder), you should add the ",(0,i.kt)("inlineCode",{parentName:"p"},"allowFullScreen")," parameter to that function call as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"AC_FL_RunContent(\n...\n'allowFullScreen','true',\n...\n); //end AC code\n")),(0,i.kt)("p",null,"This does not apply to SWF files running in the stand-alone Flash Player."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you set the Window Mode (wmode in the HTML) to Opaque Windowless (opaque) or Transparent Windowless (transparent), the full-screen window is always opaque"))),(0,i.kt)("p",null,"There are also security-related restrictions for using full-screen mode with Flash Player in a browser. These restrictions are described in Security ."),(0,i.kt)("h3",{id:"enabling-full-screen-interactive-mode-in-flash-player-113-and-higher"},"Enabling full-screen interactive mode in Flash Player 11.3 and higher"),(0,i.kt)("p",null,"Flash Player 11.3 and higher support full-screen interactive mode, which enables full support for all keyboard keys (except for Esc , which exits full-screen interactive mode). Full-screen interactive mode is useful for gaming (for example, to enable chat in a multi-player game or WASD keyboard controls in a first-person shooter game.)"),(0,i.kt)("p",null,"To enable full-screen interactive mode for a SWF file embedded in an HTML page, the HTML code to embed Flash Player must include a param tag and embed attribute with the name allowFullScreenInteractive and value true , like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<object>\n  ...\n  <param name="allowFullScreenInteractive" value="true" />\n  <embed ... allowFullScreenInteractive="true" />\n</object>\n')),(0,i.kt)("p",null,"In the Flash authoring tool, select File -> Publish Settings and in the Publish Settings dialog box, on the HTML tab, select the Flash Only - Allow Full Screen Interactive template."),(0,i.kt)("p",null,"In Flash Builder and Flex, ensure that the HTML templates include ",(0,i.kt)("inlineCode",{parentName:"p"},"<object>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<embed>")," tags that support full screen interactive mode."),(0,i.kt)("p",null,"If you are using JavaScript in a web page to generate the SWF-embedding tags, you must alter the JavaScript to add the allowFullScreenInteractive param tag and attribute. For example, if your HTML page uses the AC_FL_RunContent() function (which is used in HTML pages generated by Flash Professional and Flash Builder), you should add the allowFullScreenInteractive parameter to that function call as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"AC_FL_RunContent(\n...\n'allowFullScreenInteractive','true',\n...\n); //end AC code\n")),(0,i.kt)("p",null,"This does not apply to SWF files running in the stand-alone Flash Player."),(0,i.kt)("h3",{id:"full-screen-stage-size-and-scaling"},"Full screen stage size and scaling"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.fullScreenHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.fullScreenWidth")," properties return the height and the width of the monitor that\u2019s used when going to full-screen size, if that state is entered immediately. These values can be incorrect if the user has the opportunity to move the browser from one monitor to another after you retrieve these values but before entering full-screen mode. If you retrieve these values in the same event handler where you set the Stage.displayState property to StageDisplayState.FULL_SCREEN , the values are correct.For users with multiple monitors, the SWF content expands to fill only one monitor. Flash Player and AIR use a metric to determine which monitor contains the greatest portion of the SWF, and uses that monitor for full-screen mode. The fullScreenHeight and fullScreenWidth properties only reflect the size of the monitor that is used for full-screen mode. For more information, see ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.fullScreenHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.fullScreenWidth")," in the ActionScript 3.0 Reference for the Adobe Flash Platform ."),(0,i.kt)("p",null,"Stage scaling behavior for full-screen mode is the same as under normal mode; the scaling is controlled by the Stage class\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," property. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE")," , the Stage\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"stageWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stageHeight")," properties change to reflect the size of the screen area occupied by the SWF (the entire screen, in this case); if viewed in the browser the HTML parameter for this controls the setting."),(0,i.kt)("p",null,"You can use the Stage class\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreen")," event to detect and respond when full-screen mode is turned on or off. For example, you might want to reposition, add, or remove items from the screen when entering or leaving full-screen mode, as in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.events.FullScreenEvent;\n\nfunction fullScreenRedraw(event:FullScreenEvent):void\n{\n    if (event.fullScreen)\n    {\n        // Remove input text fields.\n        // Add a button that closes full-screen mode.\n    }\n    else\n    {\n        // Re-add input text fields.\n        // Remove the button that closes full-screen mode.\n    }\n}\n\nmySprite.stage.addEventListener(FullScreenEvent.FULL_SCREEN, fullScreenRedraw);\n")),(0,i.kt)("p",null,"As this code shows, the event object for the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreen")," event is an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.events.FullScreenEvent")," class, which includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreen")," property indicating whether full-screen mode is enabled ( ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," ) or not ( ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," )."),(0,i.kt)("h3",{id:"keyboard-support-in-full-screen-mode"},"Keyboard support in full-screen mode"),(0,i.kt)("p",null,"When Flash Player runs in a browser, all keyboard-related ActionScript, such as keyboard events and text entry in TextField instances, is disabled in full-screen mode. The exceptions (the keys that are enabled) are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selected non-printing keys, specifically the arrow keys, space bar, and tab key"),(0,i.kt)("li",{parentName:"ul"},"Keyboard shortcuts that terminate full-screen mode: Esc (Windows and Mac), Control-W (Windows), Command-W (Mac), and Alt-F4")),(0,i.kt)("p",null,"These restrictions are not present for SWF content running in the stand-alone Flash Player or in AIR. AIR supports an interactive full-screen mode that allows keyboard input."),(0,i.kt)("h3",{id:"mouse-support-in-full-screen-mode"},"Mouse support in full-screen mode"),(0,i.kt)("p",null,"By default, mouse events in full-screen mode work the same way as when not in full-screen mode. However, in full-screen mode, you can optionally set the Stage.mouseLock property to enable mouse locking. Mouse locking disables the cursor and enables unbounded mouse movement."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can only enable mouse locking in full-screen mode for desktop applications. Setting it on applications not in full-screen mode, or for applications on mobile devices, throws an exception."))),(0,i.kt)("p",null,"Mouse locking is disabled automatically and the mouse cursor is made visible again when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user exits full-screen mode by using the Escape key (all platforms), Control-W (Windows), Command-W (Mac), or Alt-F4 (Windows)."),(0,i.kt)("li",{parentName:"ul"},"The application window loses focus."),(0,i.kt)("li",{parentName:"ul"},"Any settings UI is visible, including all privacy dialog boxes."),(0,i.kt)("li",{parentName:"ul"},"A native dialog box is shown, such as a file upload dialog box.")),(0,i.kt)("p",null,"Events associated with mouse movement, such as the mouseMove event, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseEvent")," class to represent the event object. When mouse locking is disabled, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseEvent.localX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseEvent.localY")," properties to determine the location of the mouse.When mouse locking is enabled, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseEvent.movementX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseEvent.movementY")," properties to determine the location of the mouse. The movementX and movementY properties contain changes in the position of the mouse since the last event, instead of absolute coordinates of the mouse location."),(0,i.kt)("h3",{id:"hardware-scaling-in-full-screen-mode"},"Hardware scaling in full-screen mode"),(0,i.kt)("p",null,"You can use the Stage class\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreenSourceRect")," property to set Flash Player or AIR to scale a specific region of the stage to full-screen mode. Flash Player and AIR scale in hardware, if available, using the graphics and video card on a user's computer, and generally display content more quickly than software scaling."),(0,i.kt)("p",null,"To take advantage of hardware scaling, you set the whole stage or part of the stage to full-screen mode. The following ActionScript 3.0 code sets the whole stage to full-screen mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\n{\n    stage.fullScreenSourceRect = new Rectangle(0,0,320,240);\n    stage.displayState = StageDisplayState.FULL_SCREEN;\n}\n")),(0,i.kt)("p",null,"When this property is set to a valid rectangle and the displayState property is set to full-screen mode, Flash Player and AIR scale the specified area. The actual Stage size in pixels within ActionScript does not change. Flash Player and AIR enforce a minimum limit for the size of the rectangle to accommodate the standard \u201cPress Esc to exit full-screen mode\u201d message. This limit is usually around 260 by 30 pixels but can vary depending on platform and Flash Player version."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The fullScreenSourceRect property can only be set when Flash Player or AIR is not in full-screen mode. To use this property correctly, set this property first, then set the displayState property to full-screen mode."))),(0,i.kt)("p",null,"To enable scaling, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreenSourceRect")," property to a rectangle object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"stage.fullScreenSourceRect = new Rectangle(0,0,320,240);\n")),(0,i.kt)("p",null,"To disable scaling, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreenSourceRect")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"stage.fullScreenSourceRect = null;\n")),(0,i.kt)("p",null,"To take advantage of all hardware acceleration features with Flash Player, enable it through the Flash Player Settings dialog box. To load the dialog box, right-click (Windows) or Control-click (Mac) inside Flash Player content in your browser. Select the Display tab, which is the first tab, and click the checkbox: Enable hardware acceleration."),(0,i.kt)("h3",{id:"direct-and-gpu-compositing-window-modes"},"Direct and GPU-compositing window modes"),(0,i.kt)("p",null,"Flash Player 10 introduces two window modes, direct and GPU compositing, which you can enable through the publish settings in the Flash authoring tool. These modes are not supported in AIR. To take advantage of these modes, you must enable hardware acceleration for Flash Player."),(0,i.kt)("p",null,"Direct mode uses the fastest, most direct path to push graphics to the screen, which is advantageous for video playback."),(0,i.kt)("p",null,"GPU Compositing uses the graphics processing unit on the video card to accelerate compositing. Video compositing is the process of layering multiple images to create a single video image. When compositing is accelerated with the GPU it can improve the performance of YUV conversion, color correction, rotation or scaling, and blending. YUV conversion refers to the color conversion of composite analog signals, which are used for transmission, to the RGB (red, green, blue) color model that video cameras and displays use. Using the GPU to accelerate compositing reduces the memory and computational demands that are otherwise placed on the CPU. It also results in smoother playback for standard-definition video."),(0,i.kt)("p",null,"Be cautious in implementing these window modes. Using GPU compositing can be expensive for memory and CPU resources. If some operations (such as blend modes, filtering, clipping or masking) cannot be carried out in the GPU, they are done by the software. Adobe recommends limiting yourself to one SWF file per HTML page when using these modes and you should not enable these modes for banners. The Flash Test Movie facility does not use hardware acceleration but you can use it through the Publish Preview option."),(0,i.kt)("p",null,"Setting a frame rate in your SWF file that is higher than 60, the maximum screen refresh rate, is useless. Setting the frame rate from 50 through 55 allows for dropped frames, which can occur for various reasons from time to time."),(0,i.kt)("p",null,"Using direct mode requires Microsoft DirectX 9 with VRAM 128 MB on Windows and OpenGL for Apple Macintosh, Mac OS X v10.2 or higher. GPU compositing requires Microsoft DirectX 9 and Pixel Shader 2.0 support on Windows with 128 MB of VRAM. On Mac OS X and Linux, GPU compositing requires OpenGL 1.5 and several OpenGL extensions (framebuffer object, multitexture, shader objects, shading language, fragment shader)."),(0,i.kt)("p",null,"You can activate ",(0,i.kt)("inlineCode",{parentName:"p"},"direct")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gpu")," acceleration modes on a per-SWF basis through the Flash Publish Settings dialog box, using the Hardware Acceleration menu on the Flash tab. If you choose None, the window mode reverts to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"transparent")," , or ",(0,i.kt)("inlineCode",{parentName:"p"},"opaque")," , as specified by the Window Mode setting on the HTML tab."))}h.isMDXComponent=!0}}]);