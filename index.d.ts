declare global {
  const application: Application;

  interface Application {
    postUiMessage: (msg: any) => Promise<void>;
    getCorsProxy: () => Promise<string | undefined>;
    endVideo: () => Promise<void>;
    installPlugins: (plugins: PluginInfo[]) => Promise<void>;
    getPlugins: () => Promise<PluginInfo[]>;
    getPlaylists: () => Promise<Playlist[]>;
    addPlaylists: (playlists: Playlist[]) => Promise<void>;
    onSearchAll?: (request: SearchRequest) => Promise<SearchAllResult>;
    onSearchVideos?: (request: SearchRequest) => Promise<SearchVideoResult>;
    onSearchPlaylists?: (
      request: SearchRequest
    ) => Promise<SearchPlaylistResult>;
    onGetVideo?: (request: GetVideoRequest) => Promise<Video>;
    onPlayVideo?: (apiId: string) => Promise<void>;
    onUiMessage?: (message: any) => Promise<void>;
    onGetUserPlaylists?: (
      request: UserPlaylistRequest
    ) => Promise<SearchPlaylistResult>;
    onGetPlaylistVideos?: (
      request: PlaylistVideoRequest
    ) => Promise<PlaylistVideosResult>;
    getPluginId: () => Promise<string>;
    createNotification: (notification: NotificationMessage) => Promise<void>;
    onSearchChannels?: (request: SearchRequest) => Promise<SearchChannelResult>;
    onGetChannelVideos?: (
      request: ChannelVideosRequest
    ) => Promise<ChannelVideosResult>;
    onUsePlayer?: () => Promise<boolean>;
    onGetVideoComments?: (
      request: VideoCommentsRequest
    ) => Promise<VideoCommentsResult>;
    onGetCommentReplies?: (
      request: CommentReplyRequest
    ) => Promise<VideoCommentsResult>;
    onGetTopItems?: () => Promise<SearchAllResult>;
  }

  interface SearchAllResult {
    videos?: SearchVideoResult;
    playlists?: SearchPlaylistResult;
    channels?: SearchChannelResult;
  }

  interface SearchVideoResult {
    items: Video[];
    pageInfo?: PageInfo;
  }

  interface SearchRequest {
    query: string;
    page?: PageInfo;
  }

  interface PluginInfo {
    id?: string;
    name: string;
    script: string;
    version?: string;
    description?: string;
    optionsHtml?: string;
    optionsSameOrigin?: boolean;
  }

  interface Video {
    id?: string;
    title: string;
    apiId?: string;
    sources?: VideoSource[];
    duration: number;
    pluginId?: string;
    images?: ImageInfo[];
    views?: number;
    likes?: number;
    dislikes?: number;
    description?: string;
    channelName?: string;
    channelApiId?: string;
    recommendedVideos?: Video[];
    uploadDate?: string;
    originalUrl?: string;
  }

  interface VideoSource {
    source: string;
    type: string;
  }

  interface PlaylistInfo {
    id?: string;
    images?: ImageInfo[];
    name?: string;
    isUserPlaylist?: boolean;
    apiId?: string;
    pluginId?: string;
  }

  interface Playlist extends PlaylistInfo {
    videos: Video[];
  }

  interface UserPlaylistRequest {
    page?: PageInfo;
  }

  interface SearchPlaylistResult {
    items: PlaylistInfo[];
    pageInfo?: PageInfo;
  }

  interface PlaylistVideoRequest {
    apiId?: string;
    isUserPlaylist: boolean;
    page?: PageInfo;
  }

  interface PlaylistVideosResult extends SearchVideoResult {
    playlist?: PlaylistInfo;
  }

  interface Channel {
    name: string;
    apiId?: string;
    images?: ImageInfo[];
    pluginId?: string;
  }

  interface ChannelVideosRequest {
    apiId?: string;
    page?: PageInfo;
  }

  interface ChannelVideosResult extends SearchVideoResult {
    channel?: Channel;
  }

  interface SearchChannelResult {
    items: Channel[];
    page?: PageInfo;
  }

  interface GetVideoRequest {
    apiId: string;
  }

  interface VideoCommentsRequest {
    apiId?: string;
    page?: PageInfo;
  }

  interface VideoCommentsResult {
    comments: VideoComment[];
    page?: PageInfo;
  }

  interface CommentReplyRequest {
    commentApiId: string;
    videoApiId?: string;
    page?: PageInfo;
  }

  interface VideoComment {
    apiId: string;
    videoCommentId?: string;
    content: string;
    images?: ImageInfo[];
    author: string;
    createdDate?: string;
    likes?: number;
    replyCount?: number;
    // Information passed to CommentReplyRequest.page.nextPage
    replyPage?: string;
  }

  interface ImageInfo {
    url: string;
    height?: number;
    width?: number;
  }

  interface NotificationMessage {
    message: string;
    type?: "default" | "success" | "error" | "warning" | "info";
  }

  interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
    offset: number;
    nextPage?: string;
    prevPage?: string;
  }
}

export {};
