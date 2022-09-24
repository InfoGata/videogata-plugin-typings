---
id: "VideoComment"
title: "Interface: VideoComment"
sidebar_label: "VideoComment"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### apiId

• **apiId**: `string`

Id from third party service this VideoComment was retrieved from.

___

### author

• **author**: `string`

Name of author of comment

___

### content

• **content**: `string`

Content of comment

___

### createdDate

• `Optional` **createdDate**: `string`

ISO 8601 string, ex. 2011-10-05T14:48:00.000Z

___

### images

• `Optional` **images**: [`ImageInfo`](ImageInfo.md)[]

Avatar image of author

___

### likes

• `Optional` **likes**: `number`

Number of likes on comment

___

### replyCount

• `Optional` **replyCount**: `number`

Number of replies to this comment

___

### replyPage

• `Optional` **replyPage**: `string`

Information passed to CommentReplyRequest.page.nextPage

___

### videoCommentId

• `Optional` **videoCommentId**: `string`
