"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function h(e){var t;const{lazy:n,block:i,defaultValue:h,values:d,groupId:m,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,z]=(0,r.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&g.some((t=>t.value===e))&&z(e)}const P=e=>{const t=e.currentTarget,n=_.indexOf(t),a=g[n].value;a!==O&&(N(t),z(a),null!=m&&w(m,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},y)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>_.push(e),onKeyDown:T,onClick:P},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,i.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},3014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={},s="Request Authentication",c={unversionedId:"nango-sync/sync-auth",id:"nango-sync/sync-auth",title:"Request Authentication",description:"OAuth",source:"@site/docs/nango-sync/sync-auth.md",sourceDirName:"nango-sync",slug:"/nango-sync/sync-auth",permalink:"/nango-sync/sync-auth",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/nango-sync/sync-auth.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Pagination",permalink:"/nango-sync/sync-pagination"},next:{title:"Manage Syncs",permalink:"/nango-sync/manage-syncs"}},u={},p=[{value:"OAuth",id:"oauth",level:2},{value:"Getting started with OAuth",id:"getting-started-with-oauth",level:3},{value:"Example: syncing Hubspot contacts with OAuth",id:"example-syncing-hubspot-contacts-with-oauth",level:3},{value:"Other authentication methods",id:"other-authentication-methods",level:2},{value:"Problems with your Sync? We are here to help!",id:"problems-with-your-sync-we-are-here-to-help",level:2}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request-authentication"},"Request Authentication"),(0,r.kt)("h2",{id:"oauth"},"OAuth"),(0,r.kt)("p",null,"Nango leverages our sister project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/Pizzly"},"Pizzly")," to handle authentication with OAuth APIs. "),(0,r.kt)("p",null,"Pizzly + Nango let you benefit from: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a full OAuth 2 and OAuth 1.0a dance implementation"),(0,r.kt)("li",{parentName:"ul"},"a frontend SDK that makes it easy trigger new OAuth flows from your web app"),(0,r.kt)("li",{parentName:"ul"},"a backend SDK & REST API that make it easy to get always-fresh access tokens for your API calls"),(0,r.kt)("li",{parentName:"ul"},"a CLI that makes it easy to manage your OAuth provider configs, setup different environments and debug OAuth issues"),(0,r.kt)("li",{parentName:"ul"},"a built-in way to authenticate Nango Syncs, using access tokens maintained fresh by Pizzly")),(0,r.kt)("h3",{id:"getting-started-with-oauth"},"Getting started with OAuth"),(0,r.kt)("p",null,"To get stared with OAuth, follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/pizzly/getting-started"},"Pizzly docs"),"."),(0,r.kt)("p",null,"Once your have successfully created a Provider Configuration and Connection, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"pizzly_provider_config_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pizzly_connection_id")," parameters in your ",(0,r.kt)("a",{parentName:"p",href:"/nango-sync/sync-all-options"},"Sync config options")," (cf. example below)."),(0,r.kt)("p",null,"Finally, specify where the access token should go in the request using the ",(0,r.kt)("inlineCode",{parentName:"p"},"${pizzlyAccessToken}")," notation (cf. example below). It will automatically be replaced with a fresh access token before each API requests made by your Sync."),(0,r.kt)("h3",{id:"example-syncing-hubspot-contacts-with-oauth"},"Example: syncing Hubspot contacts with OAuth"),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {Nango, NangoHttpMethod} from '@nangohq/node-client'\n\nlet config = {\n    //==================\n    // OAuth access token insertion\n    //==================\n    headers: { authorization: \"Bearer ${pizzlyAccessToken}\" }, // Templating is used to insert the token where you specify.\n\n    //==================\n    // Pizzly configuration\n    //==================\n    pizzly_connection_id: '1',                                 // Connection ID configured with Pizzly.\n    pizzly_provider_config_key: 'hubspot',                     // Provider configuration configured with Pizzly.\n\n    //==================\n    // Other Sync parameters\n    //==================\n    method: NangoHttpMethod.POST,\n    paging_cursor_request_path: 'after',                       \n    paging_cursor_metadata_response_path: 'paging.next.after', \n    response_path: 'results',                                  \n    unique_key: 'id',      \n};\n\n// Add the Sync\nnew Nango().sync('https://api.hubapi.com/crm/v3/objects/contacts/search', config);\n"))),(0,r.kt)(i.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl --request POST \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n  "url": "https://api.hubapi.com/crm/v3/objects/contacts/search",\n  "headers": { "Authorization": "Bearer ${pizzlyAccessToken}"},\n  "pizzly_connection_id": "1",\n  "pizzly_provider_config_key": "hubspot",\n  "method": "POST",\n  "paging_cursor_request_path": "after",\n  "paging_cursor_metadata_response_path": "paging.next.after",\n  "response_path": "results",\n  "unique_key": "id"                                  \n}\'\n\n#==================\n# OAuth access token insertion\n#==================\n#\n# Templating is used to insert the token where you specify.\n#\n#==================\n# Pizzly configuration\n#==================\n#\n# - pizzly_connection_id: Connection ID configured with Pizzly.\n# - pizzly_provider_config_key: Provider configuration configured with Pizzly.\n#\n\n')))),(0,r.kt)("h2",{id:"other-authentication-methods"},"Other authentication methods"),(0,r.kt)("p",null,"For other authentication methods that do not require frequent refreshes of credentials, you can simply specify the authentication information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"query_params")," parameters in the ",(0,r.kt)("a",{parentName:"p",href:"/nango-sync/sync-all-options"},"Sync config options"),"."),(0,r.kt)("h2",{id:"problems-with-your-sync-we-are-here-to-help"},"Problems with your Sync? We are here to help!"),(0,r.kt)("p",null,"If you need help or run into issues, please reach out! We are online and responsive all day on the ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack Community"),"."))}d.isMDXComponent=!0}}]);