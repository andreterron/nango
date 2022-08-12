"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Best Practices",sidebar_position:7},r="Best Practices",s={unversionedId:"guides/best-practices",id:"guides/best-practices",title:"Best Practices",description:"This page is a collection of best practices on using Nango.",source:"@site/docs/guides/best-practices.md",sourceDirName:"guides",slug:"/guides/best-practices",permalink:"/guides/best-practices",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/guides/best-practices.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Best Practices",sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Logging",permalink:"/guides/logging"},next:{title:"Reference",permalink:"/category/reference"}},l={},c=[{value:"Best practices on Action naming",id:"actionNaming",level:2},{value:"Best practices on integrations modeling with Nango",id:"actionBestPractices",level:2},{value:"Keep Actions short and focused",id:"keep-actions-short-and-focused",level:3},{value:"One integration per API of the external system",id:"one-integration-per-api-of-the-external-system",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"This page is a collection of best practices on using Nango."),(0,i.kt)("p",null,"Most of them are ",(0,i.kt)("strong",{parentName:"p"},"focused on developer productivity and knowledge transfer"),": If everybody in your project follows these best practices it will be much easier for new developers to get started with your Nango integrations."),(0,i.kt)("h2",{id:"actionNaming"},"Best practices on Action naming"),(0,i.kt)("p",null,"Every Action in Nango has a name (cf. ",(0,i.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),"), which is how you call them in your code. Because the Action name is not just used by the developer writing the Action/Integration it is important that this name is descriptive and understandable."),(0,i.kt)("p",null,"When choosing a name for your Action we recommend that you follow this checklist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keep names short & descriptive"),": All lowercase, short, but descriptive names are best. Do not include the Integration name.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Good examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notify")," (for an Action that posts a notification to a Slack channel)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import-all-contacts")," (for an Action that does a full import of all contacts from a CRM)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load-all-repos")," (for an Action that loads all repos of a user from GitHub)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update-contact")," (for an Action that updates an external contact record)"))),(0,i.kt)("li",{parentName:"ul"},"Bad examples",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salesforce-load-all-contacts")," (don't include the integration name)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load repos")," (don't use whitespaces. Also pretty unclear what exactly this does)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Notify-Everyone")," (don't use capital letters, keep it all lowercase)"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't use whitespaces"),": Because Action names are used in file name and class names (in CamelCase, see ",(0,i.kt)("a",{parentName:"li",href:"/guides/create-an-action"},"here"),") use ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," instead of whitespaces"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Re-use action names across Integrations"),": If two actions in two different Integrations do the same thing (but for different systems) they should have the same name. This helps other team members and future engineers understand that these work the same way across these different Integrations. You should also, as much as possible, standardize the input these actions take so they can be called interchangeably.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: If you import contacts from a CRM each might have an ",(0,i.kt)("inlineCode",{parentName:"li"},"import-all-contacts")," action that does the same thing.")))),(0,i.kt)("h2",{id:"actionBestPractices"},"Best practices on integrations modeling with Nango"),(0,i.kt)("p",null,"Modeling integrations in Nango should be easy in most cases and we have found that the framework lends itself well to almost all uses cases for native integrations. If you are just getting started with Nango or native integrations in general we hope these best practices set you on a path of success from day one."),(0,i.kt)("h3",{id:"keep-actions-short-and-focused"},"Keep Actions short and focused"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/reference/nango-folder#actionFiles"},"Actions are written in Typescript")," and the vast majority of actions are less than 200 lines of code. They should focus on the data exchange with the external system and focus on one specific interaction with it. Good examples are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import all contacts from a CRM (which may mean dealing with pagination etc.)"),(0,i.kt)("li",{parentName:"ul"},"Post a message to a slack channel (where the message and channel ID get passed in as inputs)"),(0,i.kt)("li",{parentName:"ul"},"Load the X last commits of a GitHub repo (where X and the repo identifier are passed in as inputs)")),(0,i.kt)("p",null,"And here are some counter examples, avoid these:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'A generic "contacts" action that takes an input parameter on whether a contact should be created, updated or deleted => Use 3 separate actions instead'),(0,i.kt)("li",{parentName:"ul"},"An action that posts a message to a Slack channel with a specific id => channel ids are account specific and should thus be passed in as an input (or get stored on the user's connection object)"),(0,i.kt)("li",{parentName:"ul"},"Including business logic that interacts with other parts of your application: actions execute within the Nango runtime and do not have access to the other parts of your application (such as your database, other services etc.)")),(0,i.kt)("h3",{id:"one-integration-per-api-of-the-external-system"},"One integration per API of the external system"),(0,i.kt)("p",null,"Most companies and products offer a single open API to connect to them and in this case you should model them also as 1 integration in Nango. This will be the most-common use case and cover 95%+ of the systems you want to integrate with."),(0,i.kt)("p",null,"However, some very big and complex products sometimes offer a number of different APIs with very different capabilities, different base URLs, sometimes different authentication and often different rate-limits. In this case it probably makes sense to model these different APIs as different Integrations in Nango, as Nango makes some assumptions about authentication, base URL and rate-limits within a given integration."),(0,i.kt)("p",null,"Examples of these edge-cases include advanced use cases of Shopify, whose Shopify Plus API is significantly different and Salesforce, which for instance offers a REST and Bulk API with different capabilities."))}u.isMDXComponent=!0}}]);