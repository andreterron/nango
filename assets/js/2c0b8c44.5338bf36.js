"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Create an Action",sidebar_position:2},r="Create an Action",s={unversionedId:"guides/create-an-action",id:"guides/create-an-action",title:"Create an Action",description:"Actions (cf. Architecture) contain the business logic that is specific to each integration. If you are not familiar with their function yet please take a brief look at the Architecture page first.",source:"@site/docs/guides/create-an-action.md",sourceDirName:"guides",slug:"/guides/create-an-action",permalink:"/guides/create-an-action",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/guides/create-an-action.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create an Action",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Create an Integration",permalink:"/guides/create-an-integration"},next:{title:"Trigger an Action",permalink:"/guides/trigger-an-action"}},c={},l=[{value:"Adding a new Action to an existing Integration",id:"adding-a-new-action-to-an-existing-integration",level:2},{value:"Writing your Action business logic",id:"writing-your-action-business-logic",level:2},{value:"Diving deeper: More complex Action examples",id:"diving-deeper-more-complex-action-examples",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-an-action"},"Create an Action"),(0,i.kt)("p",null,"Actions (cf. ",(0,i.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),") contain the business logic that is specific to each integration. If you are not familiar with their function yet please take a brief look at the Architecture page first."),(0,i.kt)("h2",{id:"adding-a-new-action-to-an-existing-integration"},"Adding a new Action to an existing Integration"),(0,i.kt)("p",null,"Every Action is part of an Integration. To add a new Action you must create the Integration first, if you don't have any setup yet please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/guides/create-an-integration"},"Create an Integration")," guide."),(0,i.kt)("p",null,"Let's assume you have an Integration called ",(0,i.kt)("inlineCode",{parentName:"p"},"myintegration")," already configured."),(0,i.kt)("p",null,"First you need to choose a name for your new Action. The only two requirements from Nango are that your Action name must be unique within the Integration and that it cannot contain any whitespaces. But because the Action name is so important we have a few ",(0,i.kt)("a",{parentName:"p",href:"/guides/best-practices#actionNaming"},"additional best practices")," which we recommend you follow."),(0,i.kt)("p",null,"In this case, let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"myaction"),", because we will keep this example very generic."),(0,i.kt)("p",null,"Create a file for our new ",(0,i.kt)("inlineCode",{parentName:"p"},"myaction")," Action which lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},"myintegration")," folder: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# We assume you are in the nango-integrations/myintegration folder\ntouch myaction.action.ts\n")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"myaction.action.ts")," file and paste the following scaffold into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="myaction.action.ts"',title:'"myaction.action.ts"'},"import { NangoAction } from '@nangohq/action';\n\nclass MyIntegrationMyActionAction extends NangoAction {\n\n    override async executeAction(input: any) {\n        // Add your Action code here\n    }\n}\n\nexport { MyIntegrationMyActionAction };\n")),(0,i.kt)("p",null,"Note that every Action must follow these naming patterns to the recognized by the Nango Server:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<action-name>.action.ts")," for the Action file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<IntegrationName><ActionName>Action")," in CamelCase for the Action class")),(0,i.kt)("h2",{id:"writing-your-action-business-logic"},"Writing your Action business logic"),(0,i.kt)("p",null,"The business logic of your Action is implemented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeAction")," method. When you trigger the Action (cf. ",(0,i.kt)("a",{parentName:"p",href:"/guides/trigger-an-action"},"trigger an Action")," guide) from your code, the Nango server will load your action file and call ",(0,i.kt)("inlineCode",{parentName:"p"},"executeAction(input)")," along with the input you specified."),(0,i.kt)("p",null,"Typically the input is a small object which tells the Action what should be posted/updated/imported. Common examples are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Slack notifications, the channelID & message to post"),(0,i.kt)("li",{parentName:"ul"},"For CRM contacts import, additional filters to apply"),(0,i.kt)("li",{parentName:"ul"},"For CRM contacts updating, the field to update, the new value and the contact's external ID in the CRM")),(0,i.kt)("p",null,"Note that because an action always gets triggered in the context of a specific user's Connection you do not have to pass in the user-id, auth token or similar per-user configuration. Nango already has all the credentials it needs to add authorization details to your request."),(0,i.kt)("p",null,"To make writing your business logic easier Nango provides you with some helpers that you can (and should) use in your Action (check the ",(0,i.kt)("a",{parentName:"p",href:"/reference/actions"},"NangoAction reference")," for all available methods):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For HTTP requests, use the built-in ",(0,i.kt)("inlineCode",{parentName:"li"},"this.httpRequest")," method (cf. ",(0,i.kt)("a",{parentName:"li",href:"/reference/actions#httpRequest"},"reference"),"), which takes care of auth parameters, retries,  etc."),(0,i.kt)("li",{parentName:"ul"},"For logging, use the built-in logger ",(0,i.kt)("inlineCode",{parentName:"li"},"this.logger")," (cf. ",(0,i.kt)("a",{parentName:"li",href:"/reference/logging"},"reference"),"), which automatically adds useful metadata to your logging statements")),(0,i.kt)("p",null,"We can now easily write the logic for our ",(0,i.kt)("inlineCode",{parentName:"p"},"myaction")," Action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myaction.action.ts"',title:'"myaction.action.ts"'},"// Add this inside of executeAction\nconst requestBody = {\n    param1: x,\n    param2: y\n};\nconst response = await this.httpRequest('/<external-api-action-path>', 'POST', undefined, requestBody);\n\nthis.logger.info(`API request has completed with status ${response.status}`);\n\nreturn { status: response.status, statusText: response.statusText };\n")),(0,i.kt)("p",null,"Note that the returned data here is just an example: You can return any data you want as long as it is JSON serializable and Nango will return it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerAction")," call in your application. You can find more details on input & return values from actions in the ",(0,i.kt)("a",{parentName:"p",href:"/reference/actions#inputReturnValues"},"NangoAction reference"),"."),(0,i.kt)("h2",{id:"diving-deeper-more-complex-action-examples"},"Diving deeper: More complex Action examples"),(0,i.kt)("p",null,"Actions in Nango are typically small, well contained pieces of code. But they can, and do, get a bit more complex than the very simple and straightforward example above."),(0,i.kt)("p",null,"To get a better idea of what is possible with Actions in Nango, and to really understand the execution framework they run in, we recommend you take a look at these resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/reference/actions"},"Nango Action reference")," explains the execution environment, available methods & behaviours in detail. If you are unsure how something works this is the place to start"),(0,i.kt)("li",{parentName:"ul"},"Take a look at the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NangoHQ/nango/tree/main/examples/hubspot-contacts-import"},"Hubspot contacts importer example")," for an example of a more complex Action with multiple HTTP calls, dynamic requests construction and an example of retrieving paged content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NangoHQ/nango/tree/main/nango-integrations"},"Nango's own Nango Folder")," also contains a number of different Actions doing everything from sending Slack messages and tweets to importing larger amounts of data.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Congratulations, your Integration now has an Action and is ready to be called from your code."),(0,i.kt)("p",null,"To learn more on how to do this read on with the ",(0,i.kt)("a",{parentName:"p",href:"/guides/trigger-an-action"},"Trigger an Action")," guide."))}p.isMDXComponent=!0}}]);