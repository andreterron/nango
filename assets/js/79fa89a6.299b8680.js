"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),o=n(7294),a=n(6010),i=n(2389),s=n(7392),l=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:h,values:g,groupId:m,className:f}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===h?h:null!=(t=null!=h?h:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:N}=(0,l.U)(),[O,C]=(0,o.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&v.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==O&&(I(t),C(r),null!=m&&N(m,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var o;const t=T.indexOf(e.currentTarget)-1;n=null!=(o=T[t])?o:T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:E,onClick:E},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},4543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(5488),i=n(5162);const s={sidebar_label:"Working with user Connections",sidebar_position:4},l="Working with user Connections",u={unversionedId:"guides/user-connections",id:"guides/user-connections",title:"Working with user Connections",description:"Next to Integrations and Actions, (user) Connections are the third major element in the Nango Architecture.",source:"@site/docs/guides/user-connections.md",sourceDirName:"guides",slug:"/guides/user-connections",permalink:"/guides/user-connections",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/guides/user-connections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Working with user Connections",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Trigger an Action",permalink:"/guides/trigger-an-action"},next:{title:"Auth",permalink:"/guides/auth"}},c={},p=[{value:"How to register a new Connection",id:"how-to-register-a-new-connection",level:2},{value:"Getting all Connections for a specific user Id",id:"getting-all-connections-for-a-specific-user-id",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-user-connections"},"Working with user Connections"),(0,o.kt)("p",null,"Next to Integrations and Actions, (user) Connections are the third major element in the Nango ",(0,o.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),"."),(0,o.kt)("p",null,"A Connection in Nango links together two things: An Integration and a user-id. When a user sets an Integration up we call this a Connection in Nango. The Connection stores all the relevant details about this user's specific setup of the Integration and you will interact with this object quite frequently when using Nango."),(0,o.kt)("p",null,"This guide gives you an overview of the most common patterns when working with Connections and how to implement them in your application."),(0,o.kt)("h2",{id:"how-to-register-a-new-connection"},"How to register a new Connection"),(0,o.kt)("p",null,"Now that you have built Integrations with Actions you want your users to be able to set them up in your application. There are two ways in which you can do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You ",(0,o.kt)("a",{parentName:"li",href:"/guides/auth#frontendOauth"},"trigger an OAuth flow in your frontend")," when the user wants to setup an Integration which supports OAuth ",(0,o.kt)("em",{parentName:"li"},"(recommended for OAuth based integrations)")),(0,o.kt)("li",{parentName:"ol"},"You register a new Connection from your backend by ",(0,o.kt)("a",{parentName:"li",href:"/reference/SDKs/node#registerConnection"},"calling ",(0,o.kt)("inlineCode",{parentName:"a"},"registerConnection"))," in the client SDK ",(0,o.kt)("em",{parentName:"li"},"(necessary for APIs which do not support OAuth)"))),(0,o.kt)("p",null,"Both cases will result in a Connection being registered in the Nango server. Once a Connection has been registered for a user you can start triggering actions for their user id as shown in ",(0,o.kt)("a",{parentName:"p",href:"/guides/trigger-an-action"},"Trigger an action"),"."),(0,o.kt)("p",null,"Because Nango keeps track of all registered Connections for all Integrations and all Users it is also the perfect place to query for the Integrations a user has setup, get all users which have setup a specific Integration and similar queries."),(0,o.kt)("h2",{id:"getting-all-connections-for-a-specific-user-id"},"Getting all Connections for a specific user Id"),(0,o.kt)("p",null,"To get all Integrations which a user has setup you can query for all Connections of a user's id:"),(0,o.kt)(a.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"node",label:"Node",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const \n"))),(0,o.kt)(i.Z,{value:"other",label:"Other Languages",mdxType:"TabItem"},"Coming soon!")))}h.isMDXComponent=!0}}]);