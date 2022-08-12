"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8976],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:e},s),{},{components:n})):r.createElement(h,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8566:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Intercom"},i="Blueprint: Intercom",l={unversionedId:"blueprint-catalog/blueprint-intercom",id:"blueprint-catalog/blueprint-intercom",title:"Blueprint: Intercom",description:"This blueprint of Nango for the Intercom API makes it very easy to work with the Intercom REST API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries.",source:"@site/docs/blueprint-catalog/blueprint-intercom.md",sourceDirName:"blueprint-catalog",slug:"/blueprint-catalog/blueprint-intercom",permalink:"/blueprint-catalog/blueprint-intercom",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/blueprint-catalog/blueprint-intercom.md",tags:[],version:"current",frontMatter:{sidebar_label:"Intercom"},sidebar:"docsSidebar",previous:{title:"Hubspot",permalink:"/blueprint-catalog/blueprint-hubspot"},next:{title:"Jira (& Confluence)",permalink:"/blueprint-catalog/blueprint-jira"}},u={},p=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Coverage",id:"coverage",level:3},{value:"Intercom API gotchas &amp; learnings",id:"gotchas",level:2}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blueprint-intercom"},"Blueprint: Intercom"),(0,a.kt)("p",null,"This blueprint of Nango for the Intercom API makes it very easy to work with the Intercom REST API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.intercom.com/building-apps/docs"},"Intercom API Docs"),"  |  ",(0,a.kt)("a",{parentName:"p",href:"#gotchas"},"API gotchas & learnings")),(0,a.kt)("p",null,"Last updated: 10.08.2022"),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,a.kt)("p",null,"To create your own integration based on the Intercom blueprint add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=integrations.yaml",title:"integrations.yaml"},"    intercom:\n        extends_blueprint: intercom:v0\n\n        oauth_client_id: <YOUR INTERCOM CLIENT ID>\n        oauth_client_secret: ${INTERCOM_CLIENT_SECRET}\n        oauth_scopes:\n            - the scopes\n            - you need\n")),(0,a.kt)("p",null,"The oauth_ parameters are optional if you are not using Nango's builtin OAuth2 feature and the access token refresh."),(0,a.kt)("h3",{id:"coverage"},"Coverage"),(0,a.kt)("p",null,"Blueprint ",(0,a.kt)("inlineCode",{parentName:"p"},"v0")," covers Intercom OAuth 2 and the REST API across all versions."),(0,a.kt)("p",null,"The base URL for API calls is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.intercom.io/")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nango Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Builtin OAuth2 authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Automatic token refresh"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rate limit detection"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Retries on timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use any endpoint of the Intercom REST API"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("h2",{id:"gotchas"},"Intercom API gotchas & learnings"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"These are community contributed field notes about working with this API. We hope they help you!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You set the version of the Intercom API to be used in your Intercom app's settings, which is not how most APIs handle this."),(0,a.kt)("li",{parentName:"ul"},"Signing up for a developer account is easy. But to make your app public, so any Intercom customer can install it, you need to ",(0,a.kt)("a",{parentName:"li",href:"https://developers.intercom.com/building-apps/docs/review-publish-your-app#section-submit-your-app-for-review"},"submit it for review"),". Once submitted you can also apply to have your app listed in the Intercom marketplace. Both are manual review processes so be sure to start them early and plan extra time!")),(0,a.kt)("admonition",{title:"Share your experience",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Learned something about working with the Intercom API that you want to share with other developers? ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/edit/main/docs/docs/blueprint-catalog/blueprint-intercom.md"},"Add it to this page")," (it is just a markdown file) and send us a pull request. Thanks so much!")))}c.isMDXComponent=!0}}]);