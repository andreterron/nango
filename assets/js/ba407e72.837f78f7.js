"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Initialize Nango",sidebar_position:1},o="Initialize Nango",l={unversionedId:"build-integrations/initialize-nango",id:"build-integrations/initialize-nango",title:"Initialize Nango",description:"As the first step of this Tutorial we will add Nango to your existing application.",source:"@site/docs/build-integrations/initialize-nango.md",sourceDirName:"build-integrations",slug:"/build-integrations/initialize-nango",permalink:"/build-integrations/initialize-nango",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/build-integrations/initialize-nango.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Initialize Nango",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"README",permalink:"/build-integrations/"},next:{title:"Set up local development",permalink:"/build-integrations/setup-local-dev"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initializing Nango in your project",id:"initializing-nango-in-your-project",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initialize-nango"},"Initialize Nango"),(0,a.kt)("p",null,"As the first step of this ",(0,a.kt)("a",{parentName:"p",href:"/build-integrations/"},"Tutorial")," we will add Nango to your existing application."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You don't need much to get started with Nango, but please make sure the following is present:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A recent version of ",(0,a.kt)("inlineCode",{parentName:"li"},"NPM")," (>= 8.6.0) and ",(0,a.kt)("inlineCode",{parentName:"li"},"NodeJS")," (>= 18.0.0) (",(0,a.kt)("a",{parentName:"li",href:"https://nangohq.notion.site/Prerequisites-Sample-Project-398e9314196b44cb8950132df15c8752"},"instructions")," to check and install prerequisites)"),(0,a.kt)("li",{parentName:"ul"},"Docker (installation instructions ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"here"),")"),(0,a.kt)("li",{parentName:"ul"},"A project to which you can add Nango (or you can use this ",(0,a.kt)("a",{parentName:"li",href:"https://nangohq.notion.site/Prerequisites-Sample-Project-398e9314196b44cb8950132df15c8752"},"sample NodeJS project"),")")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Nango is conceptually agnostic to your project's programming language and stack: it will work with any language and project."),(0,a.kt)("p",{parentName:"admonition"},"That being said, Nango uses a client SDK to make interacting with it from your application super easy and native to your language and environment. We are working on adding client SDKs for all major programming languages (PHP, Ruby, Python and Java are all planned), but ",(0,a.kt)("strong",{parentName:"p"},"currently we only offer a client for NodeJS projects"),".")),(0,a.kt)("h2",{id:"initializing-nango-in-your-project"},"Initializing Nango in your project"),(0,a.kt)("p",null,"To add Nango to your project, you need to fetch a ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder in your repository. This is where all things Nango will live, such as the integrations that you build and their configuration."),(0,a.kt)("p",null,"Using the command line, navigate to the project where you want to add Nango. Then run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango init\n")),(0,a.kt)("p",null,"This command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"installs the Nango CLI"),(0,a.kt)("li",{parentName:"ul"},"creates the ",(0,a.kt)("inlineCode",{parentName:"li"},"nango-integrations")," folder in your project"),(0,a.kt)("li",{parentName:"ul"},"adds some scaffolding and default configuration to this folder")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," folder will contain your integrations, including the Slack one that we are about to create as part of this tutorial. Feel free to explore this directory or learn more about the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"nango-integrations")," ",(0,a.kt)("a",{parentName:"p",href:"/understand-nango/nango-integrations-folder"},"here"),"."),(0,a.kt)("p",null,"Congrats, the first step is already done! Your project is now a Nango project and ready to run native integrations reliably."),(0,a.kt)("p",null,"Next we will set you up for local development of your integrations."))}c.isMDXComponent=!0}}]);