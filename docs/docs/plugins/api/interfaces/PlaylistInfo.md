---
id: "PlaylistInfo"
title: "Interface: PlaylistInfo"
sidebar_label: "PlaylistInfo"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`PlaylistInfo`**

  ↳ [`Playlist`](Playlist.md)

## Properties

### apiId

• `Optional` **apiId**: `string`

Id from third party service this Playlist was retrieved from.

___

### id

• `Optional` **id**: `string`

Unique id of playlist, generated by VideoGata

___

### images

• `Optional` **images**: [`ImageInfo`](ImageInfo.md)[]

Images associated with Playlist

___

### isUserPlaylist

• `Optional` **isUserPlaylist**: `boolean`

Determine whether this a private playlist only associated with a user.

___

### name

• `Optional` **name**: `string`

Name of Playlist

___

### originalUrl

• `Optional` **originalUrl**: `string`

Url that points to third party service where to playlist was retrieved from

___

### pluginId

• `Optional` **pluginId**: `string`

Plugin Id of plugin where Playlist was retrieved from. Set by VideoGata.
