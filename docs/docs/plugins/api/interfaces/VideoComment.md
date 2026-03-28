# Interface: VideoComment

## Properties

### apiId

> **apiId**: `string`

Id from third party service this VideoComment was retrieved from.

***

### author

> **author**: `string`

Name of author of comment

***

### content

> **content**: `string`

Content of comment

***

### createdDate?

> `optional` **createdDate?**: `string`

ISO 8601 string, ex. 2011-10-05T14:48:00.000Z

***

### images?

> `optional` **images?**: [`ImageInfo`](ImageInfo.md)[]

Avatar image of author

***

### likes?

> `optional` **likes?**: `number`

Number of likes on comment

***

### replyCount?

> `optional` **replyCount?**: `number`

Number of replies to this comment

***

### replyPage?

> `optional` **replyPage?**: `string`

Information passed to CommentReplyRequest.page.nextPage

***

### videoCommentId?

> `optional` **videoCommentId?**: `string`
