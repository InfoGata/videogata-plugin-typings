"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={id:"Filter",title:"Interface: Filter",sidebar_label:"Filter",sidebar_position:0,custom_edit_url:null},a=void 0,p={unversionedId:"plugins/api/interfaces/Filter",id:"plugins/api/interfaces/Filter",title:"Interface: Filter",description:"Properties",source:"@site/docs/plugins/api/interfaces/Filter.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/Filter",permalink:"/videogata-plugin-typings/plugins/api/interfaces/Filter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Filter",title:"Interface: Filter",sidebar_label:"Filter",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CommentReplyRequest",permalink:"/videogata-plugin-typings/plugins/api/interfaces/CommentReplyRequest"},next:{title:"FilterInfo",permalink:"/videogata-plugin-typings/plugins/api/interfaces/FilterInfo"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"displayName",id:"displayname",level:3},{value:"id",id:"id",level:3},{value:"options",id:"options",level:3},{value:"type",id:"type",level:3},{value:"value",id:"value",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"displayname"},"displayName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"displayName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of filter that will be displayed to user."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Unique identifier of filter."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/FilterOption"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOption")),"[]"),(0,i.kt)("p",null,'Selectable options for filter used when filter\nis type "radio" or "select"'),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"../#filtertype"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterType"))),(0,i.kt)("p",null,"Type of filter used to determine if filter will be displayed\nas a radio field, select tag, or text field."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"value"},"value"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Value that this filter is set to."))}c.isMDXComponent=!0}}]);