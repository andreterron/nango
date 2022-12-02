"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:h,groupId:m,className:g}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[v,_]=(0,o.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&f.some((t=>t.value===e))&&_(e)}const A=e=>{const t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==v&&(x(t),_(a),null!=m&&w(m,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>S.push(e),onKeyDown:T,onClick:A},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,o.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function h(e){const t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},1082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={sidebar_label:"Adding a Sync"},s="Adding a Sync to Nango",p={unversionedId:"add-sync",id:"add-sync",title:"Adding a Sync to Nango",description:"Adding a Sync to Nango is quick & easy. If you are not sure yet what a Sync is please take a look at our Architecture page.",source:"@site/docs/add-sync.md",sourceDirName:".",slug:"/add-sync",permalink:"/add-sync",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/add-sync.md",tags:[],version:"current",frontMatter:{sidebar_label:"Adding a Sync"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Real World Examples",permalink:"/real-world-examples"}},u={},d=[{value:"Add a Sync in minutes",id:"add-a-sync-in-minutes",level:2},{value:"<code>Nango.sync</code> options",id:"sync-options",level:2},{value:"Syncing modes &amp; frequency",id:"syncing-modes--frequency",level:2},{value:"Syncing modes",id:"syncing-modes",level:3},{value:"Syncing frequency",id:"syncing-frequency",level:3},{value:"Database Storage",id:"database-storage",level:2},{value:"Use your own Postgres database &amp; schema",id:"use-your-own-postgres-database--schema",level:3},{value:"JSON-to-SQL schema mapping",id:"mapping",level:2},{value:"Auto Mapping",id:"auto-mapping",level:3},{value:"How Nango determines the schema",id:"how-nango-determines-the-schema",level:4},{value:"How Nango treats data that does not align with the schema",id:"how-nango-treats-data-that-does-not-align-with-the-schema",level:4},{value:"How Nango deals with schema changes",id:"how-nango-deals-with-schema-changes",level:4},{value:"How to disable Auto Mapping",id:"how-to-disable-auto-mapping",level:4},{value:"Custom Mapping (coming soon)",id:"custommapping",level:3},{value:"Raw data",id:"raw-data",level:3},{value:"Attach metadata",id:"attach-metadata",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Cursor based pagination",id:"cursor-based-pagination",level:3},{value:"&quot;Next URL&quot; based pagination",id:"next-url-based-pagination",level:3},{value:"OAuth",id:"oauth",level:2},{value:"Log, debug &amp; manually control Syncs",id:"log-debug--manually-control-syncs",level:2},{value:"Problems with your Sync? We are happy to help!",id:"problems-with-your-sync-we-are-happy-to-help",level:2}],c={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-a-sync-to-nango"},"Adding a Sync to Nango"),(0,o.kt)("p",null,"Adding a Sync to Nango is quick & easy. If you are not sure yet what a Sync is please take a look at our ",(0,o.kt)("a",{parentName:"p",href:"/architecture"},"Architecture")," page."),(0,o.kt)("h2",{id:"add-a-sync-in-minutes"},"Add a Sync in minutes"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can think of Syncs as HTTP requests that Nango periodically runs for you to get the latest data.")),(0,o.kt)("p",null,"We recommend the following steps when you add a new Sync to Nango:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure the API request works as expected (using Postman, a script, CLI etc.)"),(0,o.kt)("li",{parentName:"ol"},"Look at the ",(0,o.kt)("inlineCode",{parentName:"li"},"Nango.sync")," (or REST API) call options below and configure them for your Sync"),(0,o.kt)("li",{parentName:"ol"},"Run your code once and make sure Nango syncs your data as expected")),(0,o.kt)("h2",{id:"sync-options"},(0,o.kt)("inlineCode",{parentName:"h2"},"Nango.sync")," options"),(0,o.kt)("p",null,"This example shows you all the possible configuration options for a Nango Sync. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All configuration fields are optional")," (though you may need to provide the relevant ones for the external API request to succeed). "),(0,o.kt)("p",null,"If you want to see some examples of them in action take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/real-world-examples"},"real world examples")," page."),(0,o.kt)("p",null,'For all the "path" parameters you can use "." syntax to reference keys in nested objects: ',(0,o.kt)("inlineCode",{parentName:"p"},"paging.next.after")),(0,o.kt)(r.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {Nango, NangoHttpMethod} from '@nangohq/node-client'\n\nlet config = {\n    // External API HTTP request related\n    method: NangoHttpMethod.Get,    // The HTTP method of the external REST API endpoint (GET, POST, etc.). Default: GET.\n    headers: {                      // HTTP headers to send along with every request to the external API (e.g. auth header).\n        'Accept': 'application/json'\n    },\n    body: {                         // HTTP body to send along with every request to the external API.\n        'mykey': 'A great value'\n    },\n    query_params: {\n        'mykey': 'A great value'    // URL query params to send along with every request to the external API.\n    },\n\n    // To fetch results & uniquely identify records\n    response_path: 'data.results',  // The path to the result objects inside the external API response.\n    unique_key: 'profile.email',    // The key in the result objects used for deduping (e.g. email, id) + enables Full Refresh + Upsert syncing mode.\n\n    // Providing paging information in external requests (required for paging)\n    paging_cursor_request_path: 'after',   // Provide the cursor request path for fetching the next page.\n\n    // Extracting paging information from external responses (one and only one required for paging)\n    paging_cursor_metadata_response_path: 'paging.next.after',   // Use a field in the response as cursor for the next page.\n    paging_url_path: 'next',        // Alternatively, use a field in the response as URL for the next page.\n    paging_cursor_object_response_path: 'id', // Alternatively, use a field of the response's last object as cursor for the next page.\n    paging_header_link_rel: 'next', // Alternatively, use the Link Header to fetch the next page.\n\n    // JSON-to-SQL schema mapping\n    auto_mapping: true,             // Automatically map JSON objects returned from external APIs to SQL columns. Default: true.\n\n    // Sync frequency\n    frequency: 15,                  // In minutes\n\n    // Authentication (leverages the Pizzly Oauth to automatically authenticate requests with OAuth APIs)\n    pizzly_connection_id: \"user1\",  // The ID of the connection registered with Pizzly\n    pizzly_provider_config_key: \"hubspot\",  // The key of the provider configuration registered with Pizzly\n    \n    // Convenience\n    max_total: 100,                 // Limit the total number of total objects synced for testing purposes.\n    friendly_name: 'My Sync',       // To print prettier logs.\n    metadata: { company_id: 123 }   // Attach metadata to each synced row.\n};\n\n// Add the Sync\nnew Nango().sync('https://api.example.com/my/endpoint?query=A+query', config);\n"))),(0,o.kt)(l.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'curl --request POST \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n// External API endpoint URL\n"url": "https://api.example.com/my/endpoint?query=A+query",\n\n// External API HTTP request related\n"method": "GET", // The HTTP method of the external REST API endpoint (GET, POST, etc.). Default: "GET".\n"headers": { "Accept": "application/json"}, // HTTP headers to send along with every request to the external API (e.g. auth header).\n"body": { "mykey": "A great value"}, // HTTP body to send along with every request to the external API.\n"query_params": { "mykey": "A great value"}, // URL query params to send along with every request to the external API.\n\n// To fetch results & uniquely identify records\n"response_path": "data.results", // The path to the result objects inside the external API response.\n"unique_key": "profile.email", // The key in the result objects used for deduping (e.g. email, id) + enables Full Refresh + Upsert sync mode.\n\n// Providing paging information in external requests (required for paging)\n"paging_cursor_request_path": "after", // Provide the cursor request path for fetching the next page.\n\n// Extracting paging information from external responses (one and only one required for paging)\n"paging_cursor_metadata_response_path": "next", // Use a field in the response as cursor for the next page.\n"paging_url_path": "next", // Alternatively, use a field in the response as URL for the next page.\n"paging_cursor_object_response_path": "id", // Alternatively, use a field of the response last object as cursor for the next page.\n"paging_header_link_rel": "next", // Alternatively, use the Link Header to fetch the next page.\n\n// JSON-to-SQL schema mapping\n"auto_mapping": true, // Automatically map JSON objects returned from external APIs to SQL columns. Default: true.\n\n// Sync frequency\n"frequency": 15,  // In minutes\n\n// Authentication (leverages the Pizzly Oauth to automatically authenticate requests with OAuth APIs)\n"pizzly_connection_id": "user1",  // The ID of the connection registered with Pizzly\n"pizzly_provider_config_key": "hubspot",  // The key of the provider configuration registered with Pizzly\n\n// Convenience\n"max_total": 100 // Limit the total number of total objects synced for testing purposes.\n"friendly_name": "My Sync",  // To print prettier logs.\n"metadata": { "company_id": 123 }  // Attach metadata to each synced row.\n}\'\n')))),(0,o.kt)("h2",{id:"syncing-modes--frequency"},"Syncing modes & frequency"),(0,o.kt)("h3",{id:"syncing-modes"},"Syncing modes"),(0,o.kt)("p",null,"Nango supports the following syncing modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full Refresh + Overwrite"),": on each job, read all the objects from the API, overwrite by first deleting existing rows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full Refresh + Upsert"),": on each job, read all the objects from the API, append new rows & update existing rows (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental + Upsert")," (coming soon): on each job, only read the new/updated objects from the API, append new rows & update existing rows")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Full Refresh + Overwrite")," mode is used by default. To use the ",(0,o.kt)("strong",{parentName:"p"},"Full Refresh + Upsert")," mode, provide a right value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"unique_key")," field in the ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#sync-options"},"Sync config options"),", the value of which will be used to dedupe rows."),(0,o.kt)("p",null,"You can view your Sync configurations in the SQL table ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_syncs")," and your Sync jobs in ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_jobs"),"."),(0,o.kt)("h3",{id:"syncing-frequency"},"Syncing frequency"),(0,o.kt)("p",null,"By default, Sync jobs run hourly by default. You can configure the Sync frequency with the ",(0,o.kt)("inlineCode",{parentName:"p"},"frequency")," parameter in the ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#sync-options"},"Sync config options"),"."),(0,o.kt)("h2",{id:"database-storage"},"Database Storage"),(0,o.kt)("p",null,"Nango stores both the synced data and Sync/Job configuration in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"Postgres database"),"."),(0,o.kt)("p",null,"For the synced data, Nango stores all the objects in their original JSON form in a table called ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_raw"),". This single table contains the raw data from all Syncs combined."),(0,o.kt)("p",null,"Additionally, Nango supports optional ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#mapping"},"JSON-to-SQL mapping"),". If enabled, each Sync in Nango will have its own table in postgres containing the transformed data from that Sync. The default name for Sync-specific SQL tables is ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_sync_[syncId]"),"."),(0,o.kt)("h3",{id:"use-your-own-postgres-database--schema"},"Use your own Postgres database & schema"),(0,o.kt)("p",null,"By default, Nango creates a local Postgres database with credentials: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host: localhost\nport: 5432\nuser: nango\npassword: nango\ndatabase: nango\n")),(0,o.kt)("p",null,"You can point Nango to a different database by adding the following environment variables to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file (in the root folder):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NANGO_DB_HOST=[your-host]\nNANGO_DB_PORT=[your-port]\nNANGO_DB_USER=[your-user]\nNANGO_DB_NAME=[your-database-name]\nNANGO_DB_PASSWORD=[your-password]\nNANGO_DB_SSL=TRUE # Set to 'TRUE' if database requires SSL connections\n")),(0,o.kt)("p",null,"By default, Nango will create and use a separate Postgres schema called ",(0,o.kt)("inlineCode",{parentName:"p"},"nango")," to cleanly separate Nango-related data from the rest of your database."),(0,o.kt)("p",null,"You can use a different schema with the following environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NANGO_DB_SCHEMA=[your-preferred-schema]\n")),(0,o.kt)("h2",{id:"mapping"},"JSON-to-SQL schema mapping"),(0,o.kt)("h3",{id:"auto-mapping"},"Auto Mapping"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Automatically inferring a schema from API responses is tricky. If you run into issues or want to understand why your schema came out the way it did we are happy to help you in the ",(0,o.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community"),"!"),(0,o.kt)("p",{parentName:"admonition"},"In the near future we will also support ",(0,o.kt)("a",{parentName:"p",href:"#custommapping"},"custom mappings")," which will give you full control over the destination schema of Nango's mapping.")),(0,o.kt)("h4",{id:"how-nango-determines-the-schema"},"How Nango determines the schema"),(0,o.kt)("p",null,"By default, Nango automatically maps the JSON objects returned from external APIs to SQL columns. The mapping rules are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nested fields are flattened and the path is joined with ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," into a single column name"),(0,o.kt)("li",{parentName:"ul"},"Arrays are flattened into multiple columns with suffix ",(0,o.kt)("inlineCode",{parentName:"li"},"_[index]")),(0,o.kt)("li",{parentName:"ul"},"Null values are ignored"),(0,o.kt)("li",{parentName:"ul"},"Data types are inferred, but currently only for these supported types: string, number, date, boolean")),(0,o.kt)("p",null,"Here is an example: "),(0,o.kt)("p",null,"The following JSON response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": true,\n  "parent": {"nested": "string_value"},\n  "nullField": null,\n  "list": [1, 2]\n}\n')),(0,o.kt)("p",null,"turns into this SQL table: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"field (boolean)"),(0,o.kt)("th",{parentName:"tr",align:null},"parent_nested (string)"),(0,o.kt)("th",{parentName:"tr",align:null},"list_0 (number)"),(0,o.kt)("th",{parentName:"tr",align:null},"list_1 (number)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"string_value"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"2")))),(0,o.kt)("h4",{id:"how-nango-treats-data-that-does-not-align-with-the-schema"},"How Nango treats data that does not align with the schema"),(0,o.kt)("p",null,"Once a schema with data types has been generated, Nango will only store values in the SQL table that align with the data type of the schema.\nAs an example, let's assume the field ",(0,o.kt)("inlineCode",{parentName:"p"},"num_users")," has type number and these objects get returned by the API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "obj1",\n    "num_users": 23\n  },\n  {\n    "name": "obj2",\n    "num_users": 182\n  },\n  {\n    "name": "obj3",\n    "num_users": "nango is great"\n  }\n]\n')),(0,o.kt)("p",null,"In this case Nango would store the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"num_users")," for obj1 and obj2, but not for obj3 (because the type string is not compatible with the schema's type number)."),(0,o.kt)("h4",{id:"how-nango-deals-with-schema-changes"},"How Nango deals with schema changes"),(0,o.kt)("p",null,"Nango will also change the schema of the generated table if the schema of the API response changes.\nCurrently the following transformations are supported: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a previously unseen field appears in the JSON, the relevant SQL column will be created (with the right data type)"),(0,o.kt)("li",{parentName:"ul"},"If a previously seen field is not present in the JSON nothing happens (if a field is there we store it's value, if its not there we just ignore that)")),(0,o.kt)("h4",{id:"how-to-disable-auto-mapping"},"How to disable Auto Mapping"),(0,o.kt)("p",null,"Auto mapping is on by default for new Syncs. You can disable Auto Mapping for an individual Sync by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"auto_mapping")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#sync-options"},"Sync config options"),"."),(0,o.kt)("h3",{id:"custommapping"},"Custom Mapping (coming soon)"),(0,o.kt)("p",null,"We plan to introduce custom mappings soon. These will allow you to specify exactly (in code) how you want the JSON mapped to a SQL-table.\nThis will enable a few interesting features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stable SQL schemas that are guaranteed not to change even as the API response changes (with optional alerts for response changes)"),(0,o.kt)("li",{parentName:"ul"},"The ability to map & merge several Syncs to the same SQL-table"),(0,o.kt)("li",{parentName:"ul"},"The ability to specify which fields should be extracted from the JSON (and which should be ignored)"),(0,o.kt)("li",{parentName:"ul"},"Optional, more complex transformations & mappings (e.g. combining data from multiple JSON-fields into one SQL column, transforming values etc.)")),(0,o.kt)("h3",{id:"raw-data"},"Raw data"),(0,o.kt)("p",null,"Nango stores all the objects, in their original JSON form, in a combined SQL table called ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_raw"),"."),(0,o.kt)("h2",{id:"attach-metadata"},"Attach metadata"),(0,o.kt)("p",null,"You can attach arbitrary metadata to each synced row using the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," field in the ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#sync-options"},"Sync config options"),". "),(0,o.kt)("p",null,"This is useful if you want to query the synced data based on fields from your other SQL tables (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"company_id"),", etc.)."),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"Nango currently supports two types of pagination, with more in the works. Your favorite API is not compatible? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/issues/new"},"Open a github issue")," with a link to the endpoint documentation and a sample response and we are happy to make it work for you! Or reach out on our Slack community and we will do our best to help."),(0,o.kt)("h3",{id:"cursor-based-pagination"},"Cursor based pagination"),(0,o.kt)("p",null,"The API returns a cursor that points at the next page, which should be passed along with the request in a special parameter (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"after"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If the cursor field is in the metadata pf the response:")),(0,o.kt)("p",null,"Example response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [ ... ],\n  "paging": {\n    "next": {\n      "after": "NTI1Cg%3D%3D",\n      "link": "?after=NTI1Cg%3D%3D"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"=> use the ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_cursor_metadata_response_path")," (here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"paging.next.after"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_cursor_request_path")," (here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"after"),") config parameters of Nango."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If the cursor field is in the last object of the response:")),(0,o.kt)("p",null,"Example response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [ \n    {},\n    ...,\n    {\n      "cursor": "NTI1Cg%3D%3D"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"=> If the cursor field is in the last object of the response, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_cursor_object_response_path")," (here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_cursor_request_path")," (here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"after"),") config parameters of Nango."),(0,o.kt)("h3",{id:"next-url-based-pagination"},'"Next URL" based pagination'),(0,o.kt)("p",null,"The API returns a URL where the next page of results can be fetched."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If the URL is returned in the body of the response:")),(0,o.kt)("p",null,"Example response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "results": [ ... ],\n    "next": "https://api.example.com/docs?nextPage=2749ns92md"\n}\n')),(0,o.kt)("p",null,"=> Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_url_path")," config parameter of Nango, here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"next")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If the URL is returned as a Link header of the response:")),(0,o.kt)("p",null,"Example response header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "link": "\'<https://api.github.com/user/2560456/repos?per_page=10&page=2>; rel=\\"next\\", <https://api.github.com/user/2560456/repos?per_page=10&page=3>; rel=\\"last\\"\'" }\n')),(0,o.kt)("p",null,"=> Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"paging_header_link_rel")," config parameter of Nango, here set to ",(0,o.kt)("inlineCode",{parentName:"p"},"next")),(0,o.kt)("h2",{id:"oauth"},"OAuth"),(0,o.kt)("p",null,"Nango leverages our sister project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/Pizzly"},"Pizzly")," to handle authentication with OAuth APIs. "),(0,o.kt)("p",null,"Pizzly + Nango will let you: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initiate OAuth user authentication flows from your frontend with the Pizzly frontend SDK"),(0,o.kt)("li",{parentName:"ul"},"Let Nango automatically authenticate requests, using access tokens maintained fresh by Pizzly")),(0,o.kt)("p",null,"To leverage Pizzly in Nango, you only need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"PIZZLY_BASE_URL")," environment variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file at the root of Nango's folder. "),(0,o.kt)("p",null,"Then, specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"pizzly_connection_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pizzly_provider_config_key")," parameters in your ",(0,o.kt)("a",{parentName:"p",href:"/add-sync#sync-options"},"Sync config options"),"."),(0,o.kt)("p",null,"To use Pizzly, with or without Nango, start ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/Pizzly"},"here"),"."),(0,o.kt)("h2",{id:"log-debug--manually-control-syncs"},"Log, debug & manually control Syncs"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://temporal.io/"},"Temporal")," orchestrator to schedule and perform Sync jobs. You can view, debug and control Sync jobs on the Temporal UI on http://localhost:8011."),(0,o.kt)("h2",{id:"problems-with-your-sync-we-are-happy-to-help"},"Problems with your Sync? We are happy to help!"),(0,o.kt)("p",null,"If you run into issues, limitations or problems when setting up your Sync please reach out! We are online on our ",(0,o.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack Community")," all day and happy to help you resolve whatever is needed to make Nango work for you and your Syncs."))}h.isMDXComponent=!0}}]);