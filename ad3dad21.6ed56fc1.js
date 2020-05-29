(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(12),r=(n(0),n(223)),i=n(225),l={id:"js-table",title:"Showing a table"},c={id:"tutorial/js-table",title:"Showing a table",description:'<img alt="Android Tutorial App" src={useBaseUrl("img/android-tutorial-desktop.png")} />',source:"@site/../docs/tutorial/js-table.mdx",permalink:"/docs/tutorial/js-table",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-table.mdx",sidebar:"extending",previous:{title:"Building a Desktop Plugin",permalink:"/docs/tutorial/js-setup"},next:{title:"Building Custom UI",permalink:"/docs/tutorial/js-custom"}},s=[{value:"Building a Table",id:"building-a-table",children:[{value:"Row Types",id:"row-types",children:[]},{value:"Columns",id:"columns",children:[]},{value:"Sidebar",id:"sidebar",children:[]},{value:"Building Rows",id:"building-rows",children:[]},{value:"Putting it all to work",id:"putting-it-all-to-work",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{alt:"Android Tutorial App",src:Object(i.a)("img/android-tutorial-desktop.png")}),Object(r.b)("h2",{id:"building-a-table"},"Building a Table"),Object(r.b)("p",null,"We have found that one of the most useful things you can do to understand how your app works\nis to give you easy access to the underlying data used to display items on screen. A very\neasy way of doing this is by showing the data in a table. We have optimized for this\nparticular use case that makes it dead-simple to expose your data in a table that you\ncan sort, filter and select items for more detailed information."),Object(r.b)("h3",{id:"row-types"},"Row Types"),Object(r.b)("p",null,"We start by defining what our table rows look like as types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"type Id = number;\n\ntype Row = {\n  id: Id,\n  title: string,\n  url: string,\n};\n")),Object(r.b)("p",null,"It is important that you have some unique identifier for every row so\nthat we know when something new was added to the table. We will use the\n",Object(r.b)("inlineCode",{parentName:"p"},"id")," field here for this purpose."),Object(r.b)("h3",{id:"columns"},"Columns"),Object(r.b)("p",null,"Next, we define which columns to show and how to display them:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const columns = {\n  title: {\n    value: 'Title',\n  },\n  url: {\n    value: 'URL',\n  },\n};\n\nconst columnSizes = {\n  title: '15%',\n  url: 'flex',\n};\n")),Object(r.b)("p",null,"The keys used here will show up again in the next step when building\nyour rows, so keep them consistent. The ",Object(r.b)("inlineCode",{parentName:"p"},"value")," we define for each column will show up as the header at the top of the table."),Object(r.b)("p",null,"For the size you can either choose a fixed proportion or choose ",Object(r.b)("inlineCode",{parentName:"p"},"flex"),"\nto distribute the remaining available space."),Object(r.b)("h3",{id:"sidebar"},"Sidebar"),Object(r.b)("p",null,"When clicking on an element in your table, you can display a sidebar\nwhich gives more detail about an object than what is shown inline in the\ntable. You could, for instance, show images that you referenced.\nFor this tutorial, however, we will just show the full object by\nusing our ",Object(r.b)("inlineCode",{parentName:"p"},"ManagedDataInspector")," UI component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function renderSidebar(row: Row) {\n  return (\n    <Panel floating={false} heading={'Info'}>\n      <ManagedDataInspector data={row} expandRoot={true} />\n    </Panel>\n  );\n}\n")),Object(r.b)("p",null,"You'll notice how the function takes the ",Object(r.b)("inlineCode",{parentName:"p"},"Row")," type we have defined\nbefore and returns a React component. What you render in this sidebar is\nentirely up to you."),Object(r.b)("h3",{id:"building-rows"},"Building Rows"),Object(r.b)("p",null,"In the same way that we create our sidebar from a ",Object(r.b)("inlineCode",{parentName:"p"},"Row"),", we\nalso render individual rows in our table but instead of a React\ncomponent, we provide a description of the data based\non the column keys we have set up before."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function buildRow(row: Row): TableBodyRow {\n  return {\n    columns: {\n      title: {\n        value: <Text>{row.title}</Text>,\n        filterValue: row.title,\n      },\n      url: {\n        value: <Text>{row.url}</Text>,\n        filterValue: row.url,\n      },\n    },\n    key: row.id,\n    copyText: JSON.stringify(row),\n    filterValue: `${row.title} ${row.url}`,\n  };\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"title")," and ",Object(r.b)("inlineCode",{parentName:"p"},"url")," fields correspond to the keys\nwe have previously set up as part of the ",Object(r.b)("inlineCode",{parentName:"p"},"columns"),"\nobject."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"filterValue")," is used to power the search bar at the top\nof the table. Defining ",Object(r.b)("inlineCode",{parentName:"p"},"copyText")," allows you to come up\nwith a serialization scheme so users can right-click on\nany row and copy the content to their clipboard."),Object(r.b)("h3",{id:"putting-it-all-to-work"},"Putting it all to work"),Object(r.b)("p",null,"Now that we've build all the individual pieces, we\njust need to hook it all up using ",Object(r.b)("inlineCode",{parentName:"p"},"createTablePlugin"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default createTablePlugin<Row>({\n  method: 'newRow',\n  columns,\n  columnSizes,\n  renderSidebar,\n  buildRow,\n});\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/seamammals/src/index.tsx"}),"index.tsx"))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"method")," we define here corresponds to the name\nof the function we call on the native side to inform\nthe desktop about new data we want to display."),Object(r.b)("p",null,"And that's it! Starting Flipper will now compile your\nplugin and connect to the native side. It's a good\nidea to start Flipper from the command line to see\nany potential errors. The console in the DevTools\nis a great source of information if something doesn't\nwork as expected, too."),Object(r.b)("h2",{id:"whats-next"},"What's next?"),Object(r.b)("p",null,"You now have an interactive table that you can sort,\nfilter and use to get additional information about\nthe stuff you see on screen."),Object(r.b)("p",null,"For many cases, this is already all you need. However,\nsometimes you want to go the extra mile and want\nto build something a bit more custom. That's what\nwe're going to do in the next part of our tutorial."))}p.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(h,l({ref:t},s,{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";var a=n(0),o=n(60);t.a=function(){return Object(a.useContext)(o.a)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(226);var a=n(224);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},226:function(e,t,n){"use strict";var a=n(5),o=n(10),r=n(227),i="".startsWith;a(a.P+a.F*n(228)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},227:function(e,t,n){var a=n(88),o=n(24);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},228:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);