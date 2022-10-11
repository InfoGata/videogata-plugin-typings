"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(a),k=l,g=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const i={id:"Application",title:"Interface: Application",sidebar_label:"Application",sidebar_position:0,custom_edit_url:null},r=void 0,p={unversionedId:"plugins/api/interfaces/Application",id:"plugins/api/interfaces/Application",title:"Interface: Application",description:"Methods",source:"@site/docs/plugins/api/interfaces/Application.md",sourceDirName:"plugins/api/interfaces",slug:"/plugins/api/interfaces/Application",permalink:"/videogata-plugin-typings/plugins/api/interfaces/Application",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Application",title:"Interface: Application",sidebar_label:"Application",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/videogata-plugin-typings/plugins/api/modules"},next:{title:"Channel",permalink:"/videogata-plugin-typings/plugins/api/interfaces/Channel"}},s={},o=[{value:"Methods",id:"methods",level:2},{value:"addPlaylists",id:"addplaylists",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"createNotification",id:"createnotification",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"endVideo",id:"endvideo",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getCorsProxy",id:"getcorsproxy",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getPlaylists",id:"getplaylists",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getPluginId",id:"getpluginid",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getPlugins",id:"getplugins",level:3},{value:"Returns",id:"returns-6",level:4},{value:"installPlugins",id:"installplugins",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-7",level:4},{value:"onGetChannelVideos",id:"ongetchannelvideos",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"onGetCommentReplies",id:"ongetcommentreplies",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"onGetPlaylistVideos",id:"ongetplaylistvideos",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"onGetTopItems",id:"ongettopitems",level:3},{value:"Returns",id:"returns-11",level:4},{value:"onGetUserPlaylists",id:"ongetuserplaylists",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"onGetVideo",id:"ongetvideo",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-13",level:4},{value:"onGetVideoComments",id:"ongetvideocomments",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-14",level:4},{value:"onSearchAll",id:"onsearchall",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-15",level:4},{value:"onSearchChannels",id:"onsearchchannels",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-16",level:4},{value:"onSearchPlaylists",id:"onsearchplaylists",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-17",level:4},{value:"onSearchVideos",id:"onsearchvideos",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-18",level:4},{value:"onUiMessage",id:"onuimessage",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-19",level:4},{value:"onUsePlayer",id:"onuseplayer",level:3},{value:"Returns",id:"returns-20",level:4},{value:"postUiMessage",id:"postuimessage",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"Returns",id:"returns-21",level:4}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"addplaylists"},"addPlaylists"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"addPlaylists"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"playlists"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Adds or updates playlists. Playlists with the same id are updated."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"playlists")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/Playlist"},(0,l.kt)("inlineCode",{parentName:"a"},"Playlist")),"[]")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"createnotification"},"createNotification"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"createNotification"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"notification"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Show user a notification on the bottom left of the screen"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"notification")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/NotificationMessage"},(0,l.kt)("inlineCode",{parentName:"a"},"NotificationMessage")))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"endvideo"},"endVideo"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"endVideo"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Used to signal that current video embedded in player has ended."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"This method must be called in order for VideoGata to determine when to go to the next video in a playlist."),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcorsproxy"},"getCorsProxy"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getCorsProxy"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Get cors proxy configured in settings."),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getplaylists"},"getPlaylists"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getPlaylists"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/Playlist"},(0,l.kt)("inlineCode",{parentName:"a"},"Playlist")),"[]",">"),(0,l.kt)("p",null,"Get the user's current playlists."),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/Playlist"},(0,l.kt)("inlineCode",{parentName:"a"},"Playlist")),"[]",">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getpluginid"},"getPluginId"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getPluginId"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Get the current plugin's id."),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getplugins"},"getPlugins"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getPlugins"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PluginInfo"},(0,l.kt)("inlineCode",{parentName:"a"},"PluginInfo")),"[]",">"),(0,l.kt)("p",null,"Get user's currently installed plugins."),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PluginInfo"},(0,l.kt)("inlineCode",{parentName:"a"},"PluginInfo")),"[]",">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"installplugins"},"installPlugins"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"installPlugins"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"plugins"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Open user dialog for user to optionally install plugins"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"plugins")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/PluginInfo"},(0,l.kt)("inlineCode",{parentName:"a"},"PluginInfo")),"[]")))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetchannelvideos"},"onGetChannelVideos"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetChannelVideos"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/ChannelVideosResult"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelVideosResult")),">"),(0,l.kt)("p",null,"Callback method that gets a channel's videos.  Used on ",(0,l.kt)("inlineCode",{parentName:"p"},"/plugins/:pluginId/channels/:apiId")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/ChannelVideosRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelVideosRequest")))))),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/ChannelVideosResult"},(0,l.kt)("inlineCode",{parentName:"a"},"ChannelVideosResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetcommentreplies"},"onGetCommentReplies"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetCommentReplies"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/VideoCommentsResult"},(0,l.kt)("inlineCode",{parentName:"a"},"VideoCommentsResult")),">"),(0,l.kt)("p",null,"Callback method to return replies to a VideoComment."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/CommentReplyRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"CommentReplyRequest")))))),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/VideoCommentsResult"},(0,l.kt)("inlineCode",{parentName:"a"},"VideoCommentsResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetplaylistvideos"},"onGetPlaylistVideos"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetPlaylistVideos"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistVideosResult"},(0,l.kt)("inlineCode",{parentName:"a"},"PlaylistVideosResult")),">"),(0,l.kt)("p",null,"Callback method that gets a playlist's videos.  Used on ",(0,l.kt)("inlineCode",{parentName:"p"},"/plugins/:pluginId/playlists/:apiId")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistVideoRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"PlaylistVideoRequest")))))),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/PlaylistVideosResult"},(0,l.kt)("inlineCode",{parentName:"a"},"PlaylistVideosResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongettopitems"},"onGetTopItems"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetTopItems"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchAllResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchAllResult")),">"),(0,l.kt)("p",null,"Callback method to return items to display on Home page."),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchAllResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchAllResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetuserplaylists"},"onGetUserPlaylists"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetUserPlaylists"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchPlaylistResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchPlaylistResult")),">"),(0,l.kt)("p",null,"Callback method that gets user playlists.  Used on ",(0,l.kt)("inlineCode",{parentName:"p"},"/plugins/:pluginId/playlists")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/UserPlaylistRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"UserPlaylistRequest")))))),(0,l.kt)("h4",{id:"returns-12"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchPlaylistResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchPlaylistResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetvideo"},"onGetVideo"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetVideo"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/Video"},(0,l.kt)("inlineCode",{parentName:"a"},"Video")),">"),(0,l.kt)("p",null,"Callback method to get video information. Used on ",(0,l.kt)("inlineCode",{parentName:"p"},"/plugins/:pluginId/videos/:apiId")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/GetVideoRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"GetVideoRequest")))))),(0,l.kt)("h4",{id:"returns-13"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/Video"},(0,l.kt)("inlineCode",{parentName:"a"},"Video")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ongetvideocomments"},"onGetVideoComments"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onGetVideoComments"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/VideoCommentsResult"},(0,l.kt)("inlineCode",{parentName:"a"},"VideoCommentsResult")),">"),(0,l.kt)("p",null,"Callback method to return video comments."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/VideoCommentsRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"VideoCommentsRequest")))))),(0,l.kt)("h4",{id:"returns-14"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/VideoCommentsResult"},(0,l.kt)("inlineCode",{parentName:"a"},"VideoCommentsResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onsearchall"},"onSearchAll"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onSearchAll"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchAllResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchAllResult")),">"),(0,l.kt)("p",null,"Callback method to return search results on ",(0,l.kt)("inlineCode",{parentName:"p"},"/search")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"This method must be set for the plugin to show on the\n",(0,l.kt)("inlineCode",{parentName:"p"},"/search")," page"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchRequest")))))),(0,l.kt)("h4",{id:"returns-15"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchAllResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchAllResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onsearchchannels"},"onSearchChannels"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onSearchChannels"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchChannelResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchChannelResult")),">"),(0,l.kt)("p",null,"Callback method to return playlist search channels on ",(0,l.kt)("inlineCode",{parentName:"p"},"/search")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"This method must be set for channel pagination to work on the\n",(0,l.kt)("inlineCode",{parentName:"p"},"/search")," page"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchRequest")))))),(0,l.kt)("h4",{id:"returns-16"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchChannelResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchChannelResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onsearchplaylists"},"onSearchPlaylists"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onSearchPlaylists"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchPlaylistResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchPlaylistResult")),">"),(0,l.kt)("p",null,"Callback method to return playlist search results on ",(0,l.kt)("inlineCode",{parentName:"p"},"/search")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"This method must be set for playlist pagination to work on the\n",(0,l.kt)("inlineCode",{parentName:"p"},"/search")," page"),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchRequest")))))),(0,l.kt)("h4",{id:"returns-17"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchPlaylistResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchPlaylistResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onsearchvideos"},"onSearchVideos"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onSearchVideos"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchVideoResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchVideoResult")),">"),(0,l.kt)("p",null,"Callback method to return video search results on ",(0,l.kt)("inlineCode",{parentName:"p"},"/search")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.kt)("p",null,"This method must be set for video pagination to work on the\n",(0,l.kt)("inlineCode",{parentName:"p"},"/search")," page"),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchRequest"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchRequest")))))),(0,l.kt)("h4",{id:"returns-18"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/videogata-plugin-typings/plugins/api/interfaces/SearchVideoResult"},(0,l.kt)("inlineCode",{parentName:"a"},"SearchVideoResult")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onuimessage"},"onUiMessage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onUiMessage"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Callback method that receives parent.postMessage requests from UI frames."),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("h4",{id:"returns-19"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onuseplayer"},"onUsePlayer"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"onUsePlayer"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,l.kt)("p",null,"Callback method to determine whether to use video player set in manifest.json.\nThe player is used by default when it is set in manifest.json, but this method can disable it."),(0,l.kt)("h4",{id:"returns-20"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"postuimessage"},"postUiMessage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"postUiMessage"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"msg"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Sends a message to ui frames like ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"player")," set in ",(0,l.kt)("inlineCode",{parentName:"p"},"manifest.json"),"."),(0,l.kt)("h4",{id:"parameters-14"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"msg")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("h4",{id:"returns-21"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"))}m.isMDXComponent=!0}}]);