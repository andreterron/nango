"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7208],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Hubspot"},i="Blueprint: Hubspot",l={unversionedId:"blueprint-catalog/blueprint-hubspot",id:"blueprint-catalog/blueprint-hubspot",title:"Blueprint: Hubspot",description:"This blueprint of Nango for the Hubspot API makes it very easy to work with the Hubspot API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries.",source:"@site/docs/blueprint-catalog/blueprint-hubspot.md",sourceDirName:"blueprint-catalog",slug:"/blueprint-catalog/blueprint-hubspot",permalink:"/blueprint-catalog/blueprint-hubspot",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/blueprint-catalog/blueprint-hubspot.md",tags:[],version:"current",frontMatter:{sidebar_label:"Hubspot"},sidebar:"docsSidebar",previous:{title:"Greenhouse - Ingestion API",permalink:"/blueprint-catalog/blueprint-greenhouse-ingestion"},next:{title:"Intercom",permalink:"/blueprint-catalog/blueprint-intercom"}},u={},p=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Coverage",id:"coverage",level:3},{value:"Hubspot API gotchas &amp; learnings",id:"gotchas",level:2},{value:"Action Blueprints (WIP)",id:"action-blueprints-wip",level:2}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blueprint-hubspot"},"Blueprint: Hubspot"),(0,r.kt)("p",null,"This blueprint of Nango for the Hubspot API makes it very easy to work with the Hubspot API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/overview"},"Hubspot API Docs"),"  |  ",(0,r.kt)("a",{parentName:"p",href:"#gotchas"},"API gotchas & learnings")),(0,r.kt)("p",null,"Last updated: 10.08.2022"),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"To create your own integration based on the Hubspot blueprint add this to your ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=integrations.yaml",title:"integrations.yaml"},"    hubspot:\n        extends_blueprint: hubspot:v0\n\n        oauth_client_id: <YOUR HUBSPOT CLIENT ID>\n        oauth_client_secret: ${HUBSPOT_CLIENT_SECRET}\n        oauth_scopes:\n            - the scopes\n            - you need\n")),(0,r.kt)("p",null,"The oauth_ parameters are optional if you are not using Nango's builtin OAuth2 feature and the access token refresh."),(0,r.kt)("h3",{id:"coverage"},"Coverage"),(0,r.kt)("p",null,"Blueprint ",(0,r.kt)("inlineCode",{parentName:"p"},"v0")," covers Hubspot OAuth 2 and the REST API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nango Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Builtin OAuth2 authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Automatic token refresh"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705  mandatory for all hubspot apps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate limit detection"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retries on timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use any endpoint of the Hubspot REST API"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"gotchas"},"Hubspot API gotchas & learnings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"These are community contributed field notes about working with this API. We hope they help you!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signing up for a developer account is easy. You can distribute your application immediately, but to get rid of a big red warning that is shown to users on the authorize step you must verify with Hubspot. If you want to ",(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/listing-your-app"},"list your app in the marketplace")," there is a review process and many requirements on your app, be sure to start this process early!")),(0,r.kt)("admonition",{title:"Share your experience",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Learned something about working with the Hubspot API that you want to share with other developers? ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/edit/main/docs/docs/blueprint-catalog/blueprint-hubspot.md"},"Add it to this page")," (it is just a markdown file) and send us a pull request. Thanks so much!")),(0,r.kt)("h2",{id:"action-blueprints-wip"},"Action Blueprints (WIP)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fetch contacts"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))))}c.isMDXComponent=!0}}]);