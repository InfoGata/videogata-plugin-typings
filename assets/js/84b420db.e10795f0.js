"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[945],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),f=o(i),g=a,m=f["".concat(s,".").concat(g)]||f[g]||u[g]||r;return i?n.createElement(m,l(l({ref:t},d),{},{components:i})):n.createElement(m,l({ref:t},d))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=i[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=i(7462),a=(i(7294),i(3905));const r={id:"Playlist",title:"Interface: Playlist",sidebar_label:"Playlist",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"plugins/api/interfaces/Playlist",id:"plugins/api/interfaces/Playlist",title:"Interface: Playlist",description:"Hierarchy",source:"@site/docs/plugins/api/interfaces/Playlist.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/Playlist",permalink:"/videogata-plugin-typings/plugins/api/interfaces/Playlist",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Playlist",title:"Interface: Playlist",sidebar_label:"Playlist",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PageInfo",permalink:"/videogata-plugin-typings/plugins/api/interfaces/PageInfo"},next:{title:"PlaylistInfo",permalink:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"apiId",id:"apiid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"images",id:"images",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isUserPlaylist",id:"isuserplaylist",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"pluginId",id:"pluginid",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"videos",id:"videos",level:3}],d={toc:o};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"PlaylistInfo"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Playlist"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"apiid"},"apiId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"apiId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id from third party service this Playlist was retrieved from."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#apiid"},"apiId")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Unique id of playlist, generated by VideoGata"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#id"},"id")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"images"},"images"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"images"),": ",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/ImageInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"ImageInfo")),"[]"),(0,a.kt)("p",null,"Images associated with Playlist"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#images"},"images")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isuserplaylist"},"isUserPlaylist"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isUserPlaylist"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Determine whether this a private playlist only associated with a user."),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#isuserplaylist"},"isUserPlaylist")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of Playlist"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#name"},"name")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pluginid"},"pluginId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"pluginId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Plugin Id of plugin where Playlist was retrieved from. Set by VideoGata."),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo"},"PlaylistInfo"),".",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistInfo#pluginid"},"pluginId")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"videos"},"videos"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"videos"),": ",(0,a.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/Video"},(0,a.kt)("inlineCode",{parentName:"a"},"Video")),"[]"))}u.isMDXComponent=!0}}]);