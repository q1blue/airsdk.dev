"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7897],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5039:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={title:"Using Matrix objects",sidebar_position:5},l=void 0,p={unversionedId:"development/display/working-with-geometry/using-matrix-objects",id:"development/display/working-with-geometry/using-matrix-objects",isDocsHomePage:!1,title:"Using Matrix objects",description:"The Matrix class represents a transformation matrix that determines how to map points from one coordinate space to another. You can perform various graphical transformations on a display object by setting the properties of a Matrix object, applying that Matrix object to the matrix property of a Transform object, and then applying that Transform object as the transform property of the display object. These transformation functions include translation ( x and y repositioning), rotation, scaling, and skewing.",source:"@site/docs/development/display/working-with-geometry/using-matrix-objects.md",sourceDirName:"development/display/working-with-geometry",slug:"/development/display/working-with-geometry/using-matrix-objects",permalink:"/docs/development/display/working-with-geometry/using-matrix-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-geometry/using-matrix-objects.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Using Matrix objects",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Using Rectangle objects",permalink:"/docs/development/display/working-with-geometry/using-rectangle-objects"},next:{title:"Overview",permalink:"/docs/development/display/using-the-drawing-api/index"}},c=[],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Matrix class represents a transformation matrix that determines how to map points from one coordinate space to another. You can perform various graphical transformations on a display object by setting the properties of a Matrix object, applying that Matrix object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"matrix")," property of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Transform")," object, and then applying that Transform object as the ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," property of the display object. These transformation functions include translation ( x and y repositioning), rotation, scaling, and skewing."),(0,o.kt)("p",null,"Although you could define a matrix by directly adjusting the properties ( ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"ty")," ) of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Matrix")," object, it is easier to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createBox()")," method. This method includes parameters that let you directly define the scaling, rotation, and translation effects of the resulting matrix. For example, the following code creates a Matrix object that scales an object horizontally by 2.0, scales it vertically by 3.0, rotates it by 45\xb0, moving (translating) it 10 pixels to the right, and moving it 20 pixels down:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var matrix:Matrix = new Matrix();\nvar scaleX:Number = 2.0;\nvar scaleY:Number = 3.0;\nvar rotation:Number = 2 _ Math.PI _ (45 / 360);\nvar tx:Number = 10;\nvar ty:Number = 20;\nmatrix.createBox(scaleX, scaleY, rotation, tx, ty);\n")),(0,o.kt)("p",null,"You can also adjust the scaling, rotation, and translation effects of a Matrix object by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"scale()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate()")," , and ",(0,o.kt)("inlineCode",{parentName:"p"},"translate()")," methods. Note that these methods combine with the values of the existing Matrix object. For example, the following code sets a Matrix object that scales an object by a factor of 4 and rotates it 60\xb0, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"scale()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate()")," methods are called twice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var matrix:Matrix = new Matrix();\nvar rotation:Number = 2 _ Math.PI _ (30 / 360); // 30\xb0\nvar scaleFactor:Number = 2;\nmatrix.scale(scaleFactor, scaleFactor);\nmatrix.rotate(rotation);\nmatrix.scale(scaleX, scaleY);\nmatrix.rotate(rotation);\n\nmyDisplayObject.transform.matrix = matrix;\n")),(0,o.kt)("p",null,"To apply a skew transformation to a Matrix object, adjust its ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," property. Adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," property skews the matrix vertically, and adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," property skews the matrix horizontally. The following code skews the ",(0,o.kt)("inlineCode",{parentName:"p"},"myMatrix")," Matrix object vertically by a factor of 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var skewMatrix:Matrix = new Matrix();\nskewMatrix.b = Math.tan(2);\nmyMatrix.concat(skewMatrix);\n")),(0,o.kt)("p",null,"You can apply a Matrix transformation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," property of a display object. For example, the following code applies a matrix transformation to a display object named ",(0,o.kt)("inlineCode",{parentName:"p"},"myDisplayObject")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"var matrix:Matrix = myDisplayObject.transform.matrix;\nvar scaleFactor:Number = 2;\nvar rotation:Number = 2 _ Math.PI _ (60 / 360); // 60\xb0\nmatrix.scale(scaleFactor, scaleFactor);\nmatrix.rotate(rotation);\n\nmyDisplayObject.transform.matrix = matrix;\n")),(0,o.kt)("p",null,"The first line sets a Matrix object to the existing transformation matrix used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"myDisplayObject")," display object (the ",(0,o.kt)("inlineCode",{parentName:"p"},"matrix")," property of the transformation property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"myDisplayObject")," display object). This way, the Matrix class methods that you call have a cumulative effect on the display object\u2019s existing position, scale, and rotation."),(0,o.kt)("p",null,"Note: The ColorTransform class is also included in the flash.geometry package. This class is used to set the colorTransform property of a Transform object. Since it does not apply any geometrical transformation, it is not discussed, in detail, here."))}d.isMDXComponent=!0}}]);