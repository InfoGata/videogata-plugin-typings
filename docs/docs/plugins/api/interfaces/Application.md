# Interface: Application

## Properties

### networkRequest

> **networkRequest**: (`input`, `init?`) => `Promise`\<`Response`\>

Make a networkRequest from parent VideoGata frame rather from plugin frame.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`RequestInfo` \| `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

## Methods

### addPlaylists()

> **addPlaylists**(`playlists`): `Promise`\<`void`\>

Adds or updates playlists. Playlists with the same id are updated.

#### Parameters

##### playlists

[`Playlist`](Playlist.md)[]

#### Returns

`Promise`\<`void`\>

***

### addVideosToPlaylist()

> **addVideosToPlaylist**(`playlistId`, `videos`): `Promise`\<`void`\>

Adds videos to a playlist

#### Parameters

##### playlistId

`string`

id of playlist

##### videos

[`Video`](Video.md)[]

Videos being added to playlist

#### Returns

`Promise`\<`void`\>

***

### createNotification()

> **createNotification**(`notification`): `Promise`\<`void`\>

Show user a notification on the bottom left of the screen

#### Parameters

##### notification

[`NotificationMessage`](NotificationMessage.md)

#### Returns

`Promise`\<`void`\>

***

### endVideo()

> **endVideo**(): `Promise`\<`void`\>

Used to signal that current video embedded in player has ended.

#### Returns

`Promise`\<`void`\>

#### Remarks

This method must be called in order for VideoGata to determine when to go to the next video in a playlist.

***

### getCorsProxy()

> **getCorsProxy**(): `Promise`\<`string` \| `undefined`\>

Get cors proxy configured in settings.

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### getLocale()

> **getLocale**(): `Promise`\<`string`\>

Get locale configured in settings.

#### Returns

`Promise`\<`string`\>

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Playlist`](Playlist.md)[]\>

Get the user's current playlists.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)[]\>

***

### getPlaylistsInfo()

> **getPlaylistsInfo**(): `Promise`\<[`PlaylistInfo`](PlaylistInfo.md)[]\>

Get the users's current playlists metadata without tracks.

#### Returns

`Promise`\<[`PlaylistInfo`](PlaylistInfo.md)[]\>

***

### getPluginId()

> **getPluginId**(): `Promise`\<`string`\>

Get the current plugin's id.

#### Returns

`Promise`\<`string`\>

***

### getPlugins()

> **getPlugins**(): `Promise`\<[`PluginInfo`](PluginInfo.md)[]\>

Get user's currently installed plugins.

#### Returns

`Promise`\<[`PluginInfo`](PluginInfo.md)[]\>

***

### getTheme()

> **getTheme**(): `Promise`\<[`Theme`](../type-aliases/Theme.md)\>

Returns the user's current theme

#### Returns

`Promise`\<[`Theme`](../type-aliases/Theme.md)\>

***

### installPlugins()

> **installPlugins**(`plugins`): `Promise`\<`void`\>

Open user dialog for user to optionally install plugins

#### Parameters

##### plugins

[`PluginInfo`](PluginInfo.md)[]

#### Returns

`Promise`\<`void`\>

***

### isLoggedIn()

> **isLoggedIn**(): `Promise`\<`boolean`\>

Returns true if thec user has been to logged in based in what is in
authentication in the manifest

#### Returns

`Promise`\<`boolean`\>

***

### isNetworkRequestCorsDisabled()

> **isNetworkRequestCorsDisabled**(): `Promise`\<`boolean`\>

Used to determine whether requests from networkRequest are restricted by CORs.

#### Returns

`Promise`\<`boolean`\>

***

### onCanParseUrl()?

> `optional` **onCanParseUrl**(`url`, `type`): `Promise`\<`boolean`\>

Callback method that checks to see if url can be parsed by plugin
so that onLookupPlaylistUrl returns results

#### Parameters

##### url

`string`

##### type

[`ParseUrlType`](../type-aliases/ParseUrlType.md)

#### Returns

`Promise`\<`boolean`\>

***

### onChangeTheme()

> **onChangeTheme**(`theme`): `Promise`\<`void`\>

Callback method that is called after a users changes theme

#### Parameters

##### theme

[`Theme`](../type-aliases/Theme.md)

#### Returns

`Promise`\<`void`\>

***

### onGetChannelVideos()?

> `optional` **onGetChannelVideos**(`request`): `Promise`\<[`ChannelVideosResult`](ChannelVideosResult.md)\>

Callback method that gets a channel's videos.  Used on `/plugins/:pluginId/channels/:apiId`

#### Parameters

##### request

[`ChannelVideosRequest`](ChannelVideosRequest.md)

#### Returns

`Promise`\<[`ChannelVideosResult`](ChannelVideosResult.md)\>

***

### onGetCommentReplies()?

> `optional` **onGetCommentReplies**(`request`): `Promise`\<[`VideoCommentsResult`](VideoCommentsResult.md)\>

Callback method to return replies to a VideoComment.

#### Parameters

##### request

[`CommentReplyRequest`](CommentReplyRequest.md)

#### Returns

`Promise`\<[`VideoCommentsResult`](VideoCommentsResult.md)\>

***

### onGetLiveVideo()?

> `optional` **onGetLiveVideo**(`requeset`): `Promise`\<[`Video`](Video.md) \| `undefined`\>

Callback method to get live video information. Used on `/plugins/:pluginId/channels/:apiId/live`

#### Parameters

##### requeset

[`GetLiveVideoRequest`](GetLiveVideoRequest.md)

#### Returns

`Promise`\<[`Video`](Video.md) \| `undefined`\>

***

### onGetPlaylistVideos()?

> `optional` **onGetPlaylistVideos**(`request`): `Promise`\<[`PlaylistVideosResult`](PlaylistVideosResult.md)\>

Callback method that gets a playlist's videos.  Used on `/plugins/:pluginId/playlists/:apiId`

#### Parameters

##### request

[`PlaylistVideoRequest`](PlaylistVideoRequest.md)

#### Returns

`Promise`\<[`PlaylistVideosResult`](PlaylistVideosResult.md)\>

***

### onGetSearchSuggestions()?

> `optional` **onGetSearchSuggestions**(`request`): `Promise`\<`string`[]\>

Callback method that takes a query and returns search suggestions

#### Parameters

##### request

[`GetSearchSuggestionsRequest`](GetSearchSuggestionsRequest.md)

#### Returns

`Promise`\<`string`[]\>

***

### onGetTopItems()?

> `optional` **onGetTopItems**(): `Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return items to display on Home page.

#### Returns

`Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

***

### onGetUserChannels()?

> `optional` **onGetUserChannels**(`request`): `Promise`\<[`SearchChannelResult`](SearchChannelResult.md)\>

Callback method that gets a user's subscribed channels.

#### Parameters

##### request

[`UserChannelRequest`](UserChannelRequest.md)

#### Returns

`Promise`\<[`SearchChannelResult`](SearchChannelResult.md)\>

***

### onGetUserPlaylists()?

> `optional` **onGetUserPlaylists**(`request`): `Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`

#### Parameters

##### request

[`UserPlaylistRequest`](UserPlaylistRequest.md)

#### Returns

`Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

***

### onGetVideo()?

> `optional` **onGetVideo**(`request`): `Promise`\<[`Video`](Video.md)\>

Callback method to get video information. Used on `/plugins/:pluginId/videos/:apiId`

#### Parameters

##### request

[`GetVideoRequest`](GetVideoRequest.md)

#### Returns

`Promise`\<[`Video`](Video.md)\>

***

### onGetVideoComments()?

> `optional` **onGetVideoComments**(`request`): `Promise`\<[`VideoCommentsResult`](VideoCommentsResult.md)\>

Callback method to return video comments.

#### Parameters

##### request

[`VideoCommentsRequest`](VideoCommentsRequest.md)

#### Returns

`Promise`\<[`VideoCommentsResult`](VideoCommentsResult.md)\>

***

### onLookupPlaylistUrl()?

> `optional` **onLookupPlaylistUrl**(`url`): `Promise`\<[`Playlist`](Playlist.md)\>

Callback method that takes a url and returns a playlist.
Used on the `/playlists` page.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

***

### onLookupVideoUrls()?

> `optional` **onLookupVideoUrls**(`urls`): `Promise`\<[`Video`](Video.md)[]\>

Callback method that takes urls and returns videos.

#### Parameters

##### urls

`string`[]

#### Returns

`Promise`\<[`Video`](Video.md)[]\>

***

### onPostLogin()?

> `optional` **onPostLogin**(): `Promise`\<`void`\>

Callback method that is called after the user has logged in

#### Returns

`Promise`\<`void`\>

***

### onPostLogout()?

> `optional` **onPostLogout**(): `Promise`\<`void`\>

Callback method that is called after the user has logged out

#### Returns

`Promise`\<`void`\>

***

### onSearchAll()?

> `optional` **onSearchAll**(`request`): `Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchAllResult`](SearchAllResult.md)\>

#### Remarks

This method must be set for the plugin to show on the
`/search` page

***

### onSearchChannels()?

> `optional` **onSearchChannels**(`request`): `Promise`\<[`SearchChannelResult`](SearchChannelResult.md)\>

Callback method to return playlist search channels on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchChannelResult`](SearchChannelResult.md)\>

#### Remarks

This method must be set for channel pagination to work on the
`/search` page

***

### onSearchPlaylists()?

> `optional` **onSearchPlaylists**(`request`): `Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method to return playlist search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

#### Remarks

This method must be set for playlist pagination to work on the
`/search` page

***

### onSearchVideos()?

> `optional` **onSearchVideos**(`request`): `Promise`\<[`SearchVideoResult`](SearchVideoResult.md)\>

Callback method to return video search results on `/search`

#### Parameters

##### request

[`SearchRequest`](SearchRequest.md)

#### Returns

`Promise`\<[`SearchVideoResult`](SearchVideoResult.md)\>

#### Remarks

This method must be set for video pagination to work on the
`/search` page

***

### onUiMessage()?

> `optional` **onUiMessage**(`message`): `Promise`\<`void`\>

Callback method that receives parent.postMessage requests from UI frames.

#### Parameters

##### message

`any`

#### Returns

`Promise`\<`void`\>

***

### onUsePlayer()?

> `optional` **onUsePlayer**(): `Promise`\<`boolean`\>

Callback method to determine whether to use video player set in manifest.json.
The player is used by default when it is set in manifest.json, but this method can disable it.

#### Returns

`Promise`\<`boolean`\>

***

### postUiMessage()

> **postUiMessage**(`msg`): `Promise`\<`void`\>

Sends a message to ui frames like `options` and `player` set in `manifest.json`.

#### Parameters

##### msg

`any`

#### Returns

`Promise`\<`void`\>
