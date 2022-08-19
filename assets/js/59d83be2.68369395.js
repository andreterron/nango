"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9978],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||l;return a?n.createElement(d,o(o({ref:e},u),{},{components:a})):n.createElement(d,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3069:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Slack"},o="Blueprint: Slack",i={unversionedId:"blueprint-catalog/blueprint-slack",id:"blueprint-catalog/blueprint-slack",title:"Blueprint: Slack",description:"This blueprint of Nango for the Slack API makes it very easy to work with the Slack Web API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries.",source:"@site/docs/blueprint-catalog/blueprint-slack.md",sourceDirName:"blueprint-catalog",slug:"/blueprint-catalog/blueprint-slack",permalink:"/blueprint-catalog/blueprint-slack",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/blueprint-catalog/blueprint-slack.md",tags:[],version:"current",frontMatter:{sidebar_label:"Slack"},sidebar:"docsSidebar",previous:{title:"Salesloft",permalink:"/blueprint-catalog/blueprint-salesloft"},next:{title:"Trello",permalink:"/blueprint-catalog/blueprint-trello"}},s={},p=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Coverage",id:"coverage",level:3},{value:"Slack API gotchas &amp; learnings",id:"gotchas",level:2},{value:"Action Blueprints (WIP)",id:"action-blueprints-wip",level:2}],u={toc:p};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blueprint-slack"},"Blueprint: Slack"),(0,r.kt)("p",null,"This blueprint of Nango for the Slack API makes it very easy to work with the Slack Web API and automates common tasks such as OAuth 2 authentication, requests authorization, logging, rate-limit handling, error handling and automatic retries."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/"},"Slack API homepage"),"  |  ",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/docs"},"Slack API Docs"),"  |  ",(0,r.kt)("a",{parentName:"p",href:"#gotchas"},"API gotchas & learnings")),(0,r.kt)("p",null,"Last updated: 10.08.2022"),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"To create your own integration based on the Slack blueprint add this to your ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=integrations.yaml",title:"integrations.yaml"},"    slack:\n        extends_blueprint: slack:v0\n\n        oauth_client_id: <YOUR SLACK CLIENT ID>\n        oauth_client_secret: ${SLACK_CLIENT_SECRET}\n        oauth_scopes:\n            - the scopes\n            - you need\n")),(0,r.kt)("p",null,"The oauth_ parameters are optional if you are not using Nango's builtin OAuth2 feature and the access token refresh."),(0,r.kt)("h3",{id:"coverage"},"Coverage"),(0,r.kt)("p",null,"Blueprint ",(0,r.kt)("inlineCode",{parentName:"p"},"v0")," covers Slack OAuth 2 V2 and the Web API."),(0,r.kt)("p",null,"The base URL for API calls is set to ",(0,r.kt)("inlineCode",{parentName:"p"}," https://slack.com/api/")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nango Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Builtin OAuth2 authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705  supports both bot and user tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Automatic token refresh"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 if your Slack app is opted in for token refreshes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate limit detection"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retries on timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use any endpoint of the Slack Web API"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"gotchas"},"Slack API gotchas & learnings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"These are community contributed field notes about working with this API. We hope they help you!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slack's Web API doesn't really have versioning, instead they publish all changes to ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/changelog"},"the changelog"),". You can follow these through an RSS feed. Major breaking changes are announced well ahead of time there."),(0,r.kt)("li",{parentName:"ul"},"Registering a new Slack app is fast & easy, no review required. Public distribution (so anybody can install it into their workspace) is also easy. If you want to get listed on the Slack Marketplace there are additional verification steps, plan this well ahead of time!"),(0,r.kt)("li",{parentName:"ul"},"Slack offers ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/authentication/oauth-v2#obtaining"},"additional parameters")," to customize the OAuth authorization screen. To use these just add these parameters to your integration like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=integrations.yaml",title:"integrations.yaml"},"    slack:\n        extends_blueprint: slack:v0\n\n        auth:\n            authorization_params:\n                team: <teamID>\n")),(0,r.kt)("admonition",{title:"Share your experience",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Learned something about working with the Slack API that you want to share with other developers? ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/edit/main/docs/docs/blueprint-catalog/blueprint-slack.md"},"Add it to this page")," (it is just a markdown file) and send us a pull request. Thanks so much!")),(0,r.kt)("h2",{id:"action-blueprints-wip"},"Action Blueprints (WIP)"),(0,r.kt)("p",null,"Find these on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/tree/main/nango-integrations/slack"},"Github"),", more coming soon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post message to channel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))))}c.isMDXComponent=!0}}]);