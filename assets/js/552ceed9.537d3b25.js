"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Blueprints Overview",sidebar_position:1},i="Blueprints Overview",l={unversionedId:"blueprint-catalog/blueprint-overview",id:"blueprint-catalog/blueprint-overview",title:"Blueprints Overview",description:"Blueprints are pre-built integrations for standard use-cases. They are built and maintained both by Nango and the Nango community. Blueprints are optional, you can use them when they help you accelerate but they are not required to use Nango. In fact, they are just pre-built snippets using Nango to do things many people commonly do. Nango itself is fully integration agnostic and works with any API.",source:"@site/docs/blueprint-catalog/blueprint-overview.md",sourceDirName:"blueprint-catalog",slug:"/blueprint-catalog/blueprint-overview",permalink:"/blueprint-catalog/blueprint-overview",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/blueprint-catalog/blueprint-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Blueprints Overview",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Blueprint Catalog",permalink:"/category/blueprint-catalog"},next:{title:"Airtable",permalink:"/blueprint-catalog/blueprint-airtable"}},u={},s=[{value:"Blueprints for Integrations",id:"blueprints-for-integrations",level:2},{value:"Pre-built Actions",id:"pre-built-actions",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blueprints-overview"},"Blueprints Overview"),(0,a.kt)("p",null,"Blueprints are pre-built integrations for standard use-cases. They are built and maintained both by Nango and the Nango community. Blueprints are optional, you can use them when they help you accelerate but they are not required to use Nango. In fact, they are just pre-built snippets using Nango to do things many people commonly do. Nango itself is fully integration agnostic and works with any API."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Whilst blueprints are very helpful and speed up the development process of your integration they are ",(0,a.kt)("strong",{parentName:"p"},"not required"),": You can ",(0,a.kt)("strong",{parentName:"p"},"use Nango with any API"),", even if there is no blueprint available for it, and you will still get all of its builtin features like better logging, retries, rate-limit handling etc.")),(0,a.kt)("h2",{id:"blueprints-for-integrations"},"Blueprints for Integrations"),(0,a.kt)("p",null,"A blueprint for an integration contains all the details Nango needs to work with that API out of the box. It contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration for the authentication (e.g. OAuth 2, OAuth 1.0a, API key etc.) flow"),(0,a.kt)("li",{parentName:"ul"},"Configuration for requests authorization (e.g. base API URL, default headers & query parameters etc.)"),(0,a.kt)("li",{parentName:"ul"},"Configuration for api wide concepts (e.g. rate-limit defaults, api wide errors & error handling, retry configuration etc.)"),(0,a.kt)("li",{parentName:"ul"},"Community contributed learnings & gotchas for the API on the blueprint's documentation page")),(0,a.kt)("p",null,"Thanks to these you can expect Nango to handle all of these for you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OAuth authentication with our built-in OAuth server"),(0,a.kt)("li",{parentName:"ul"},"Per user access token storage & refresh as needed"),(0,a.kt)("li",{parentName:"ul"},"Automatic rate-limit detection & smart handling to maximize throughput"),(0,a.kt)("li",{parentName:"ul"},"Clean error handling of API errors")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Missing a blueprint for your favorite API?"),"\nYou can either create one yourself and contribute it back to Nango by opening a pull request (we \u2764\ufe0f community contributed blueprints). Or feel free to reach out to us on the ",(0,a.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community")," and we will be happy to add it to Nango for you!")),(0,a.kt)("p",null,"As Nango is open source you can find ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/tree/main/blueprints"},"all blueprints on our github repo"),". To contribute a new blueprint just add it to this directory and send us a pull request, thanks!"),(0,a.kt)("h2",{id:"pre-built-actions"},"Pre-built Actions"),(0,a.kt)("p",null,"Action Blueprints cover standard use-cases (e.g. send a message on Slack). They can be used as is or as a base to extend. They are licensed under the same permissive license as Nango itself so you can use them without having to worry about licensing."),(0,a.kt)("p",null,"You can find some example actions in our own nango-integrations folder: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/tree/main/nango-integrations"},"https://github.com/NangoHQ/nango/tree/main/nango-integrations")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The action blueprints are in progress. Whilst our Integration blueprints are ready for prime time the action Blueprints are mostly meant as examples for how to implement Actions. We plan on having many more Blueprints soon, as well as a thorough QA, documentation & contribution process for them.")))}c.isMDXComponent=!0}}]);