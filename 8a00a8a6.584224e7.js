(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(12),r=(n(0),n(223)),l=n(225),p={id:"js-setup",title:"Building a Desktop Plugin",sidebar_label:"Building a Desktop Plugin"},o={id:"tutorial/js-setup",title:"Building a Desktop Plugin",description:"Now that we have the native side covered, let's display the data we're sending",source:"@site/../docs/tutorial/js-setup.mdx",permalink:"/docs/tutorial/js-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-setup.mdx",sidebar_label:"Building a Desktop Plugin",sidebar:"extending",previous:{title:"Building a React Native Plugin",permalink:"/docs/tutorial/react-native"},next:{title:"Showing a table",permalink:"/docs/tutorial/js-table"}},c=[{value:"Dynamic Plugin loading",id:"dynamic-plugin-loading",children:[]},{value:"Installing flipper-pkg",id:"installing-flipper-pkg",children:[]},{value:"Creating the Plugin Package",id:"creating-the-plugin-package",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we have the native side covered, let's display the data we're sending\non the desktop side. You can check out the full workflow of building Flipper desktop\nplugins here: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://fbflipper.com/docs/extending/js-setup"}),"https://fbflipper.com/docs/extending/js-setup"),"."),Object(r.b)("img",{alt:"Custom cards UI for our sea mammals plugin",src:Object(l.a)("img/js-custom.png")}),Object(r.b)("h2",{id:"dynamic-plugin-loading"},"Dynamic Plugin loading"),Object(r.b)("p",null,"By default, Flipper will start with the plugins it was bundled with. You can\nconfigure it to also look for plugins in custom directories. To do that,\nmodify the ",Object(r.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json")," file that is created the first time\nyou start Flipper and add a newly created directory the ",Object(r.b)("inlineCode",{parentName:"p"},"pluginPaths")," attribute."),Object(r.b)("p",null,"Your file will then look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "pluginPaths": [\n    "~/Flipper/custom-plugins/"\n  ],\n  ...\n}\n')),Object(r.b)("h2",{id:"installing-flipper-pkg"},"Installing flipper-pkg"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"flipper-pkg")," tool helps to define, validate and package Flipper desktop plugins. You can install it globally using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"yarn global add flipper-pkg\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"npm install flipper-pkg --global\n")),Object(r.b)("h2",{id:"creating-the-plugin-package"},"Creating the Plugin Package"),Object(r.b)("p",null,"With the loading part out of the way, we can create the new plugin. For that, first create a new folder inside the custom plugins directory. Then use ",Object(r.b)("inlineCode",{parentName:"p"},"flpper-pkg init")," to initialise a new Flipper desktop plugin package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~/Flipper/custom-plugins/\n$ mkdir sea-mammals\n$ cd sea-mammals\n$ flipper-pkg init\n")),Object(r.b)("p",null,'The tool will ask you to provide "id" and "title" for your plugin. Use "sea-mammals" as "id" and "Sea Mammals" as "title". After that the tool will create two files in the directory: ',Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.tsx"),"."),Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," to check the fields:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'"$schema" must contain URI identifying scheme according to which the plugin is defined. Currently, Flipper supports plugins defined by the specification version 2 (',Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://fbflipper.com/schemas/plugin-package/v2.json"}),"https://fbflipper.com/schemas/plugin-package/v2.json"),"), while version 1 is being deprecated."),Object(r.b)("li",{parentName:"ol"},'"name" must start with "flipper-plugin-"'),Object(r.b)("li",{parentName:"ol"},'"keywords" must contain "flipper-plugin"'),Object(r.b)("li",{parentName:"ol"},'"id" must be the same as used on native side, e.g. returned by getId() method in Android plugin. In our case that is "sea-mammals".'),Object(r.b)("li",{parentName:"ol"},'"flipperBundlerEntry" must point to the source entry point which will be used by "flipper-pkg" to produce the plugin bundle.'),Object(r.b)("li",{parentName:"ol"},'"main" must point to the place where the produced bundle will be written.'),Object(r.b)("li",{parentName:"ol"},'"title" and "icon" are optional fields specifying the plugin item appearance in the Flipper sidebar.')),Object(r.b)("p",null,"For instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-sea-mammals",\n  "id": "sea-mammals",\n  "version": "2.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "icon": "apps",\n  "title": "Sea Mammals",\n  "category": "Example Plugin",\n  "scripts": {\n    "lint": "flipper-pkg lint",\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "peerDependencies": {\n    "flipper": "latest"\n  },\n  "devDependencies": {\n    "flipper": "latest",\n    "flipper-pkg": "latest"\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(i.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/seamammals/package.json"}),"package.json"))),Object(r.b)("p",null,"To ensure there are no errors in the defined plugin, install packages (using ",Object(r.b)("inlineCode",{parentName:"p"},"yarn install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm install"),") and execute script ",Object(r.b)("inlineCode",{parentName:"p"},"lint")," (",Object(r.b)("inlineCode",{parentName:"p"},"yarn lint")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm run lint"),") which shows all the mismatches that should be fixed to make the plugin definition valid."),Object(r.b)("p",null,"Now that our package has been set up, we are ready to build a UI for our plugin. Either by using a standardized table-based plugin, or by creating a custom UI."))}u.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(g,p({ref:t},c,{components:n})):a.a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";var i=n(0),a=n(60);t.a=function(){return Object(i.useContext)(a.a)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(226);var i=n(224);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},226:function(e,t,n){"use strict";var i=n(5),a=n(10),r=n(227),l="".startsWith;i(i.P+i.F*n(228)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return l?l.call(t,i,n):t.slice(n,n+i.length)===i}})},227:function(e,t,n){var i=n(88),a=n(24);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},228:function(e,t,n){var i=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);