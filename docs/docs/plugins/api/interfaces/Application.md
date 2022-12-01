---
id: "Application"
title: "Interface: Application"
sidebar_label: "Application"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### addPlaylists

▸ **addPlaylists**(`playlists`): `Promise`<`void`\>

Adds or updates playlists. Playlists with the same id are updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlists` | [`Playlist`](Playlist.md)[] |

#### Returns

`Promise`<`void`\>

___

### addVideosToPlaylist

▸ **addVideosToPlaylist**(`playlistId`, `videos`): `Promise`<`void`\>

Adds videos to a playlist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlistId` | `string` | id of playlist |
| `videos` | [`Video`](Video.md)[] | Videos being added to playlist |

#### Returns

`Promise`<`void`\>

___

### createNotification

▸ **createNotification**(`notification`): `Promise`<`void`\>

Show user a notification on the bottom left of the screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`NotificationMessage`](NotificationMessage.md) |

#### Returns

`Promise`<`void`\>

___

### endVideo

▸ **endVideo**(): `Promise`<`void`\>

Used to signal that current video embedded in player has ended.

**`Remarks`**

This method must be called in order for VideoGata to determine when to go to the next video in a playlist.

#### Returns

`Promise`<`void`\>

___

### getCorsProxy

▸ **getCorsProxy**(): `Promise`<`undefined` \| `string`\>

Get cors proxy configured in settings.

#### Returns

`Promise`<`undefined` \| `string`\>

___

### getLocale

▸ **getLocale**(): `Promise`<`string`\>

Get locale configured in settings.

#### Returns

`Promise`<`string`\>

___

### getPlaylists

▸ **getPlaylists**(): `Promise`<[`Playlist`](Playlist.md)[]\>

Get the user's current playlists.

#### Returns

`Promise`<[`Playlist`](Playlist.md)[]\>

___

### getPlaylistsInfo

▸ **getPlaylistsInfo**(): `Promise`<[`PlaylistInfo`](PlaylistInfo.md)[]\>

Get the users's current playlists metadata without tracks.

#### Returns

`Promise`<[`PlaylistInfo`](PlaylistInfo.md)[]\>

___

### getPluginId

▸ **getPluginId**(): `Promise`<`string`\>

Get the current plugin's id.

#### Returns

`Promise`<`string`\>

___

### getPlugins

▸ **getPlugins**(): `Promise`<[`PluginInfo`](PluginInfo.md)[]\>

Get user's currently installed plugins.

#### Returns

`Promise`<[`PluginInfo`](PluginInfo.md)[]\>

___

### installPlugins

▸ **installPlugins**(`plugins`): `Promise`<`void`\>

Open user dialog for user to optionally install plugins

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugins` | [`PluginInfo`](PluginInfo.md)[] |

#### Returns

`Promise`<`void`\>

___

### onGetChannelVideos

▸ `Optional` **onGetChannelVideos**(`request`): `Promise`<[`ChannelVideosResult`](ChannelVideosResult.md)\>

Callback method that gets a channel's videos.  Used on `/plugins/:pluginId/channels/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ChannelVideosRequest`](ChannelVideosRequest.md) |

#### Returns

`Promise`<[`ChannelVideosResult`](ChannelVideosResult.md)\>

___

### onGetCommentReplies

▸ `Optional` **onGetCommentReplies**(`request`): `Promise`<[`VideoCommentsResult`](VideoCommentsResult.md)\>

Callback method to return replies to a VideoComment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CommentReplyRequest`](CommentReplyRequest.md) |

#### Returns

`Promise`<[`VideoCommentsResult`](VideoCommentsResult.md)\>

___

### onGetPlaylistVideos

▸ `Optional` **onGetPlaylistVideos**(`request`): `Promise`<[`PlaylistVideosResult`](PlaylistVideosResult.md)\>

Callback method that gets a playlist's videos.  Used on `/plugins/:pluginId/playlists/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PlaylistVideoRequest`](PlaylistVideoRequest.md) |

#### Returns

`Promise`<[`PlaylistVideosResult`](PlaylistVideosResult.md)\>

___

### onGetTopItems

▸ `Optional` **onGetTopItems**(): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return items to display on Home page.

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onGetUserPlaylists

▸ `Optional` **onGetUserPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`UserPlaylistRequest`](UserPlaylistRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onGetVideo

▸ `Optional` **onGetVideo**(`request`): `Promise`<[`Video`](Video.md)\>

Callback method to get video information. Used on `/plugins/:pluginId/videos/:apiId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetVideoRequest`](GetVideoRequest.md) |

#### Returns

`Promise`<[`Video`](Video.md)\>

___

### onGetVideoComments

▸ `Optional` **onGetVideoComments**(`request`): `Promise`<[`VideoCommentsResult`](VideoCommentsResult.md)\>

Callback method to return video comments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`VideoCommentsRequest`](VideoCommentsRequest.md) |

#### Returns

`Promise`<[`VideoCommentsResult`](VideoCommentsResult.md)\>

___

### onSearchAll

▸ `Optional` **onSearchAll**(`request`): `Promise`<[`SearchAllResult`](SearchAllResult.md)\>

Callback method to return search results on `/search`

**`Remarks`**

This method must be set for the plugin to show on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchAllResult`](SearchAllResult.md)\>

___

### onSearchChannels

▸ `Optional` **onSearchChannels**(`request`): `Promise`<[`SearchChannelResult`](SearchChannelResult.md)\>

Callback method to return playlist search channels on `/search`

**`Remarks`**

This method must be set for channel pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchChannelResult`](SearchChannelResult.md)\>

___

### onSearchPlaylists

▸ `Optional` **onSearchPlaylists**(`request`): `Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

Callback method to return playlist search results on `/search`

**`Remarks`**

This method must be set for playlist pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchPlaylistResult`](SearchPlaylistResult.md)\>

___

### onSearchVideos

▸ `Optional` **onSearchVideos**(`request`): `Promise`<[`SearchVideoResult`](SearchVideoResult.md)\>

Callback method to return video search results on `/search`

**`Remarks`**

This method must be set for video pagination to work on the
`/search` page

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SearchRequest`](SearchRequest.md) |

#### Returns

`Promise`<[`SearchVideoResult`](SearchVideoResult.md)\>

___

### onUiMessage

▸ `Optional` **onUiMessage**(`message`): `Promise`<`void`\>

Callback method that receives parent.postMessage requests from UI frames.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`Promise`<`void`\>

___

### onUsePlayer

▸ `Optional` **onUsePlayer**(): `Promise`<`boolean`\>

Callback method to determine whether to use video player set in manifest.json.
The player is used by default when it is set in manifest.json, but this method can disable it.

#### Returns

`Promise`<`boolean`\>

___

### postUiMessage

▸ **postUiMessage**(`msg`): `Promise`<`void`\>

Sends a message to ui frames like `options` and `player` set in `manifest.json`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`Promise`<`void`\>
