"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7600],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_label:"Integrations Folder",sidebar_position:4},r="The Nango Folder",l={unversionedId:"reference/nango-folder",id:"reference/nango-folder",title:"The Nango Folder",description:"Integrations and Actions that you use with Nango as part of your product live inside the Nango Folder in your code base called nango-integrations.",source:"@site/docs/reference/nango-folder.md",sourceDirName:"reference",slug:"/reference/nango-folder",permalink:"/reference/nango-folder",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/reference/nango-folder.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Integrations Folder",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"SDK: Node",permalink:"/reference/SDKs/node"},next:{title:"Logging",permalink:"/reference/logging"}},s={},c=[{value:"Structure of the Nango Folder",id:"structure-of-the-nango-folder",level:2},{value:"<code>nango-config.yaml</code>",id:"nango-configyaml",level:3},{value:"<code>integrations.yaml</code>",id:"integrationsyaml",level:3},{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"Action files in Nango",id:"actionFiles",level:2},{value:"Where are Actions stored",id:"where-are-actions-stored",level:3},{value:"Content of the Action files",id:"content-of-the-action-files",level:3},{value:"Optional content: <code>docker-compose.yaml</code> and <code>.env</code>",id:"optional-content-docker-composeyaml-and-env",level:2}],p={toc:c};function d(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-nango-folder"},"The Nango Folder"),(0,o.kt)("p",null,"Integrations and Actions that you use with Nango as part of your product live inside the Nango Folder in your code base called ",(0,o.kt)("inlineCode",{parentName:"p"},"nango-integrations"),"."),(0,o.kt)("p",null,"The Nango Folder folder contains all the details, configuration and code of the Integrations and Actions that you defined in Nango. As such, it fully defines the behavior of Nango at runtime: You are guaranteed that a Nango server which loads your Nango Folder always behaves the same way, which makes deployments across different environments easy and painless."),(0,o.kt)("p",null,"Usually the Nango Folder lives in the root directory of your application which uses Nango for its native integrations, but you could place it anywhere in your code base where you see fit. In all cases we highly recommend that you version control it as part of the main repo of your application so it gets deployed together with the rest of your application (see also ",(0,o.kt)("a",{parentName:"p",href:"/nango-hosted"},"deploying Nango"),")."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Nango can be used with any language or application framework, it is completely language agnostic."),(0,o.kt)("p",{parentName:"admonition"},"However, because ",(0,o.kt)("strong",{parentName:"p"},"Actions")," in Nango run inside the Nango runtime these currently ",(0,o.kt)("strong",{parentName:"p"},"have to be written in Javascript/TypeScript"),". We go to great lengths to make sure that it is easy to write Actions for Nango even if you are not an expert in TypeScript or JavaScript, all you need is basic knowledge of these languages."),(0,o.kt)("p",{parentName:"admonition"},"You will find some references to the Node.js and JavaScript ecosystem on this page for those who are familiar with this ecosystem. If this is not you, don't worry: You will not have to be familiar with it to use Nango effectively and develop integrations or actions (we have step by step guides available for you with all the necessary commands).")),(0,o.kt)("h2",{id:"structure-of-the-nango-folder"},"Structure of the Nango Folder"),(0,o.kt)("p",null,"The Nango Folder contains at least 3 files and should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overview diagram of the Nango Folder",src:t(2322).Z,width:"421",height:"481"})),(0,o.kt)("p",null,"If you are familiar with the JavaScript/Node ecosystem you might have recognized the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file: Indeed, your Nango Folder is just an npm package and acts like one in many ways. You can package your Nango Folder, version it, add additional dependencies from npm and publish it on any private (or public) npm registry such as the ones that are provided by GitHub and GitLab."),(0,o.kt)("p",null,"In practice this makes it easy to have your Nango Folder versioned along with your main application and deployed by version number in production or any other environment. This gives you fully reproducible builds and behavior across all environments. For more information on how to deploy to production or a staging environment please read our guide on ",(0,o.kt)("a",{parentName:"p",href:"/nango-hosted"},"deploying Nango"),"."),(0,o.kt)("p",null,"Now let's take a closer look of what is inside the Nango Folder (",(0,o.kt)("inlineCode",{parentName:"p"},"/nango-integrations"),"):"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"slack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"salesforce")," folders contain the Actions of their respective Integrations and we will get to them in a minute."),(0,o.kt)("p",null,"Besides the folder there are three top level files:"),(0,o.kt)("h3",{id:"nango-configyaml"},(0,o.kt)("inlineCode",{parentName:"h3"},"nango-config.yaml")),(0,o.kt)("p",null,"This YAML file contains all the global configuration for Nango. Many of these configuration parameters relate to how Nango executes Actions, interacts with 3rd party APIs and treats response data: These configuration keys can usually be overwritten for specific Integrations by specifying them in the iItegration's ",(0,o.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," config."),(0,o.kt)("p",null,"For a list of all possible keys currently supported please check the ",(0,o.kt)("a",{parentName:"p",href:"/reference/configuration#nangoConfigYaml"},(0,o.kt)("inlineCode",{parentName:"a"},"nango-config.yaml")," reference"),"."),(0,o.kt)("h3",{id:"integrationsyaml"},(0,o.kt)("inlineCode",{parentName:"h3"},"integrations.yaml")),(0,o.kt)("p",null,"Contains the integration-specific configuration for each Integration. Because this file lists all the available Integrations in your Nango installation it is also a good lookup place for that."),(0,o.kt)("p",null,"Integrations can be based on a ",(0,o.kt)("a",{parentName:"p",href:"/blueprint-catalog/blueprint-overview"},"Blueprint"),", which makes them much faster and easier to add."),(0,o.kt)("p",null,"Configurations specified here generally take precedence over the defaults specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"nango-config.yaml"),", so you can overwrite defaults on a per integration-level. The same is true for configuration that is inherited from the blueprint (if specified)."),(0,o.kt)("p",null,"As an example let's look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"integrations.yaml")," configuration of a simple Slack Integration that uses the ",(0,o.kt)("a",{parentName:"p",href:"/blueprint-catalog/blueprint-slack"},"Slack blueprint"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"integrations:\n    slack:\n        extends_blueprint: slack:v0\n        log_level: debug\n\n        oauth_client_id: 'XXXXXXXX'\n        oauth_client_secret: ${SLACK_CLIENT_SECRET}\n        oauth_scopes:\n            - your scopes\n")),(0,o.kt)("p",null,"Some keys here are optional, for all the details and possibilities please consult the ",(0,o.kt)("a",{parentName:"p",href:"/reference/configuration#integrationsYaml"},(0,o.kt)("inlineCode",{parentName:"a"},"integrations.yaml")," reference"),"."),(0,o.kt)("h3",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,o.kt)("p",null,"This file makes Nango Folder an npm package, if you are familiar with npm packages and the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," format you will find all the usual keys in here. If not don't worry: To use Nango you don't need to understand its content and we have guides with step by step commands for the few occasions where you do need to interact with it."),(0,o.kt)("h2",{id:"actionFiles"},"Action files in Nango"),(0,o.kt)("p",null,"The main components in the ",(0,o.kt)("a",{parentName:"p",href:"/architecture"},"Nango framework")," are Actions: Small pieces of code which form the bridge between your application and an external system."),(0,o.kt)("p",null,"Nango executes Actions inside of the Nango runtime, you can think of this very similar to how a web framework gives you a structure around handling incoming HTTP requests."),(0,o.kt)("h3",{id:"where-are-actions-stored"},"Where are Actions stored"),(0,o.kt)("p",null,"All Actions of an Integration live in the Nango Folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inside a sub-folder with the name of the Integration in lowercase letters, for example our Slack Integration's folder is called ",(0,o.kt)("inlineCode",{parentName:"li"},"slack")),(0,o.kt)("li",{parentName:"ul"},"each Action is in its separate file that follows the naming convention ",(0,o.kt)("inlineCode",{parentName:"li"},"<ACTION-NAME>.action.ts"),".")),(0,o.kt)("p",null,"In our example above we have"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slack")," folder which contains the actions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notify")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"notify.action.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reply")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"reply.action.ts")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"salesforce")," folder which contains the actions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import-contacts")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"import-contact.action.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update-contact")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"update-contact.action.ts"))))),(0,o.kt)("p",null,"To add a new action for an Integration all you have to do is add a file to the corresponding subfolder with a file name that follows the naming scheme."),(0,o.kt)("h3",{id:"content-of-the-action-files"},"Content of the Action files"),(0,o.kt)("p",null,"Actions are written in TypeScript and make use of a Nango provided runtime class. Because of this every Action file has the same structure and follows this scaffold:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NangoAction } from '@nangohq/action';\n\nclass SampleAction extends NangoAction {\n\n  override async executeAction(input: any) {\n    // Add your action code here\n  }\n}\n\nexport { SampleAction };\n")),(0,o.kt)("p",null,"Nango will help you generate these scaffolds with our CLI."),(0,o.kt)("h2",{id:"optional-content-docker-composeyaml-and-env"},"Optional content: ",(0,o.kt)("inlineCode",{parentName:"h2"},"docker-compose.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},".env")),(0,o.kt)("p",null,"When you ",(0,o.kt)("a",{parentName:"p",href:"/quickstart/node"},"initialize a new Nango Folder")," with our CLI Nango adds two additional files by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file that specifies a single environment variable"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file which specifies a simple docker compose configuration")),(0,o.kt)("p",null,"Whilst useful, these files are entirely optional and not used by Nango itself. You can delete them at any point if you want."),(0,o.kt)("p",null,"Together these files make it very easy to launch a local development environment directly from your Nango Folder. Just open a terminal, cd into the Nango Folder (",(0,o.kt)("inlineCode",{parentName:"p"},"nango-integrations"),") and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up  # or docker-compose up if you are on an older version of docker\n")),(0,o.kt)("p",null,"You can learn more about local development ",(0,o.kt)("a",{parentName:"p",href:"/local-development"},"here"),"."))}d.isMDXComponent=!0},2322:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/nango-integrations-folder-c1670dd4ff025a183b823f930354b6db.png"}}]);