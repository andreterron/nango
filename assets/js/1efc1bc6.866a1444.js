"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,d=c["".concat(u,".").concat(m)]||c[m]||g[m]||o;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Google Mail (Gmail)"},l="Blueprint: Google Mail (Gmail)",i={unversionedId:"blueprint-catalog/blueprint-google-mail",id:"blueprint-catalog/blueprint-google-mail",title:"Blueprint: Google Mail (Gmail)",description:"This blueprint of Nango for the Google Mail API makes it very easy to work with the Gmail REST API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries.",source:"@site/docs/blueprint-catalog/blueprint-google-mail.md",sourceDirName:"blueprint-catalog",slug:"/blueprint-catalog/blueprint-google-mail",permalink:"/blueprint-catalog/blueprint-google-mail",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/blueprint-catalog/blueprint-google-mail.md",tags:[],version:"current",frontMatter:{sidebar_label:"Google Mail (Gmail)"},sidebar:"docsSidebar",previous:{title:"Google Calendar",permalink:"/blueprint-catalog/blueprint-google-calendar"},next:{title:"Greenhouse - Harvest API",permalink:"/blueprint-catalog/blueprint-greenhouse-harvest"}},u={},p=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Coverage",id:"coverage",level:3},{value:"Google Mail API gotchas &amp; learnings",id:"gotchas",level:2}],s={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blueprint-google-mail-gmail"},"Blueprint: Google Mail (Gmail)"),(0,r.kt)("p",null,"This blueprint of Nango for the Google Mail API makes it very easy to work with the Gmail REST API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/gmail/api"},"Google Mail API Docs"),"  |  ",(0,r.kt)("a",{parentName:"p",href:"#gotchas"},"API gotchas & learnings")),(0,r.kt)("p",null,"Last updated: 10.08.2022"),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"To create your own integration based on the Google Mail blueprint add this to your ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=integrations.yaml",title:"integrations.yaml"},"    google-mail:\n        extends_blueprint: google-mail:v0\n\n        oauth_client_id: <YOUR Google MAIL CLIENT ID>\n        oauth_client_secret: ${GOOGLE_MAIL_CLIENT_SECRET}\n        oauth_scopes:\n            - the scopes\n            - you need\n")),(0,r.kt)("p",null,"The oauth_ parameters are optional if you are not using Nango's builtin OAuth2 feature and the access token refresh."),(0,r.kt)("h3",{id:"coverage"},"Coverage"),(0,r.kt)("p",null,"Blueprint ",(0,r.kt)("inlineCode",{parentName:"p"},"v0")," covers Google OAuth 2 V2 and the Gmail REST API V1."),(0,r.kt)("p",null,"The base URL for API calls is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.googleapis.com/gmail/v1/")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nango Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Builtin OAuth2 authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Automatic token refresh"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate limit detection"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retries on timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use any endpoint of the Google Mail REST API"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"gotchas"},"Google Mail API gotchas & learnings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"These are community contributed field notes about working with this API. We hope they help you!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The OAuth flow for Google Mail and all other Google workspace products is the same, hence scopes can be interchanged between these.")),(0,r.kt)("admonition",{title:"Share your experience",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Learned something about working with the Google Mail API that you want to share with other developers? ","[Add it to this page]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/edit/main/docs/docs/blueprint-catalog/blueprint-Google"},"https://github.com/NangoHQ/nango/edit/main/docs/docs/blueprint-catalog/blueprint-Google")," Mail.md) (it is just a markdown file) and send us a pull request. Thanks so much!")))}g.isMDXComponent=!0}}]);