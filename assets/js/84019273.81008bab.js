"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[5177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),g=a,d=f["".concat(p,".").concat(g)]||f[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"PageInfo",title:"Interface: PageInfo",sidebar_label:"PageInfo",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"plugins/api/interfaces/PageInfo",id:"plugins/api/interfaces/PageInfo",title:"Interface: PageInfo",description:"Properties",source:"@site/docs/plugins/api/interfaces/PageInfo.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/PageInfo",permalink:"/videogata-plugin-typings/plugins/api/interfaces/PageInfo",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PageInfo",title:"Interface: PageInfo",sidebar_label:"PageInfo",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"NotificationMessage",permalink:"/videogata-plugin-typings/plugins/api/interfaces/NotificationMessage"},next:{title:"Playlist",permalink:"/videogata-plugin-typings/plugins/api/interfaces/Playlist"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"nextPage",id:"nextpage",level:3},{value:"offset",id:"offset",level:3},{value:"prevPage",id:"prevpage",level:3},{value:"resultsPerPage",id:"resultsperpage",level:3},{value:"totalResults",id:"totalresults",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"nextpage"},"nextPage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nextPage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Optional string containing information about next page. For example, a url to the next page."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offset"},"offset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"offset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Current offset"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prevpage"},"prevPage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"prevPage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Optional string containing information about previous page. For example, a url to the next page."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resultsperpage"},"resultsPerPage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"resultsPerPage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Number of results on current page"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"totalresults"},"totalResults"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"totalResults"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Total number of results returned"))}c.isMDXComponent=!0}}]);