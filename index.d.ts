declare global {
  const application: Application;

  interface Application {
    /**
     * Make a networkRequest from parent VideoGata frame rather from plugin frame.
     */
    networkRequest: typeof fetch;
    /**
     * Used to determine whether requests from networkRequest are restricted by CORs.
     */
    isNetworkRequestCorsDisabled(): Promise<boolean>;
    /**
     * Sends a message to ui frames like `options` and `player` set in `manifest.json`.
     */
    postUiMessage(msg: any): Promise<void>;
    /**
     * Get cors proxy configured in settings.
     */
    getCorsProxy(): Promise<string | undefined>;
    /**
     * Get locale configured in settings.
     */
    getLocale(): Promise<string>;
    /**
     * Used to signal that current video embedded in player has ended.
     *
     * @remarks
     * This method must be called in order for VideoGata to determine when to go to the next video in a playlist.
     */
    endVideo(): Promise<void>;
    /**
     * Open user dialog for user to optionally install plugins
     */
    installPlugins(plugins: PluginInfo[]): Promise<void>;
    /**
     * Get user's currently installed plugins.
     */
    getPlugins(): Promise<PluginInfo[]>;
    /**
     * Get the user's current playlists.
     */
    getPlaylists(): Promise<Playlist[]>;
    /**
     * Get the users's current playlists metadata without tracks.
     */
    getPlaylistsInfo(): Promise<PlaylistInfo[]>;
    /**
     * Adds or updates playlists. Playlists with the same id are updated.
     */
    addPlaylists(playlists: Playlist[]): Promise<void>;
    /**
     * Adds videos to a playlist
     * @param playlistId id of playlist
     * @param videos Videos being added to playlist
     */
    addVideosToPlaylist(playlistId: string, videos: Video[]): Promise<void>;
    /**
     * Get the current plugin's id.
     */
    getPluginId(): Promise<string>;
    /**
     * Show user a notification on the bottom left of the screen
     */
    createNotification(notification: NotificationMessage): Promise<void>;
    /**
     * Returns true if thec user has been to logged in based in what is in
     * authentication in the manifest
     */
    isLoggedIn(): Promise<boolean>;
    /**
     * Request headers captured during this plugin's login for the domain that
     * `host` falls under, as declared in `authentication.domainHeadersToFind`
     * in `manifest.json`.
     *
     * @param host A hostname, e.g. `www.youtube.com`. It is matched against the
     * declared domain suffixes (`.youtube.com`) the same way the app decides
     * which requests are allowed to carry credentials.
     *
     * @remarks Returns an empty object when the user isn't logged in, when the
     * platform has no login support, or when `host` falls under no domain this
     * plugin declared.
     */
    getAuthHeaders(host: string): Promise<Record<string, string>>;
    /**
     * Returns the user's current theme
     */
    getTheme(): Promise<Theme>;
    /**
     * Callback method to return search results on `/search`
     *
     * @remarks This method must be set for the plugin to show on the
     * `/search` page
     */
    onSearchAll?(request: SearchRequest): Promise<SearchAllResult>;
    /**
     * Callback method to return video search results on `/search`
     *
     * @remarks This method must be set for video pagination to work on the
     * `/search` page
     */
    onSearchVideos?(request: SearchRequest): Promise<SearchVideoResult>;
    /**
     * Callback method to return playlist search results on `/search`
     *
     * @remarks This method must be set for playlist pagination to work on the
     * `/search` page
     */
    onSearchPlaylists?(request: SearchRequest): Promise<SearchPlaylistResult>;
    /**
     * Callback method to return playlist search channels on `/search`
     *
     * @remarks This method must be set for channel pagination to work on the
     * `/search` page
     */
    onSearchChannels?(request: SearchRequest): Promise<SearchChannelResult>;
    /**
     * Callback method to get video information. Used on `/plugins/:pluginId/videos/:apiId`
     */
    onGetVideo?(request: GetVideoRequest): Promise<Video>;
    /**
     * Callback method to get live video information. Used on `/plugins/:pluginId/channels/:apiId/live`
     */
    onGetLiveVideo?(requeset: GetLiveVideoRequest): Promise<Video | undefined>;
    /**
     * Callback method that receives parent.postMessage requests from UI frames.
     */
    onUiMessage?(message: any): Promise<void>;
    /**
     * Callback method that gets user playlists.  Used on `/plugins/:pluginId/playlists`
     */
    onGetUserPlaylists?(
      request: UserPlaylistRequest
    ): Promise<SearchPlaylistResult>;
    /**
     * Callback method that gets a user's subscribed channels.
     */
    onGetUserChannels?(
      request: UserChannelRequest
    ): Promise<SearchChannelResult>;
    /**
     * Callback method that gets the signed-in user's personalized feed, shown
     * on the Home page in preference to `onGetTopItems`.
     *
     * @remarks Return an empty `items` array when there is no signed-in feed
     * to show; the app then falls back to `onGetTopItems`.
     */
    onGetUserFeed?(request: UserFeedRequest): Promise<SearchVideoResult>;
    /**
     * Callback method that gets a playlist's videos.  Used on `/plugins/:pluginId/playlists/:apiId`
     */
    onGetPlaylistVideos?(
      request: PlaylistVideoRequest
    ): Promise<PlaylistVideosResult>;
    /**
     * Callback method that gets a channel's videos.  Used on `/plugins/:pluginId/channels/:apiId`
     */
    onGetChannelVideos?(
      request: ChannelVideosRequest
    ): Promise<ChannelVideosResult>;
    /**
     * Callback method that searches within a single channel's videos.
     * Used on `/plugins/:pluginId/channels/:apiId?q=`
     *
     * @remarks When this method is not defined, the app does not show a search
     * box on the channel page.
     */
    onSearchChannelVideos?(
      request: ChannelSearchRequest
    ): Promise<SearchVideoResult>;
    /**
     * Callback method to determine whether to use video player set in manifest.json.
     * The player is used by default when it is set in manifest.json, but this method can disable it.
     */
    onUsePlayer?(): Promise<boolean>;
    /**
     * Callback method to return video comments.
     */
    onGetVideoComments?(
      request: VideoCommentsRequest
    ): Promise<VideoCommentsResult>;
    /**
     * Callback method to return replies to a VideoComment.
     */
    onGetCommentReplies?(
      request: CommentReplyRequest
    ): Promise<VideoCommentsResult>;
    /**
     * Callback method to return items to display on Home page.
     */
    onGetTopItems?(): Promise<SearchAllResult>;
    /**
     * Callback method that checks to see if url can be parsed by plugin
     * so that onLookupPlaylistUrl returns results
     */
    onCanParseUrl?(url: string, type: ParseUrlType): Promise<boolean>;
    /**
     * Callback method that takes a url and returns a playlist.
     * Used on the `/playlists` page.
     */
    onLookupPlaylistUrl?(url: string): Promise<Playlist>;
    /**
     * Callback method that takes urls and returns videos.
     */
    onLookupVideoUrls?(urls: string[]): Promise<Video[]>;
    /**
     * Callback method that takes a query and returns search suggestions
     */
    onGetSearchSuggestions?(
      request: GetSearchSuggestionsRequest
    ): Promise<string[]>;
    /**
     * Callback method that is called after the user has logged in
     */
    onPostLogin?(): Promise<void>;
    /**
     * Callback method that is called after the user has logged out
     */
    onPostLogout?(): Promise<void>;
    /**
     * Callback method that is called after a users changes theme
     */
    onChangeTheme(theme: Theme): Promise<void>;
    /**
     * Callback method to handle login from the host.
     * When popupName is provided, the host has opened a blank popup with that
     * name. Return `{ url }` to have the host navigate the popup.
     * Put `state={"pluginId": <id>}` in the OAuth url so the mobile app can
     * route the callback back to the right plugin.
     */
    onLogin(request: LoginRequest): Promise<LoginResponse | void>;
    /**
     * Callback method to handle the OAuth callback URL relayed by the host.
     * Called after the popup redirects back with the full callback URL.
     */
    onLoginCallback(request: LoginCallbackRequest): Promise<void>;
    /**
     * Callback method to handle logout from the host
     */
    onLogout(): Promise<void>;
    /**
     * Callback method to check if currently logged in
     */
    onIsLoggedIn(): Promise<boolean>;
    /**
     * Callback method to upload sync data to cloud storage.
     * Plugins that define both onSyncUpload and onSyncDownload can be chosen
     * as the cloud sync provider in Settings.
     */
    onSyncUpload(request: SyncUploadRequest): Promise<SyncUploadResponse>;
    /**
     * Callback method to download sync data from cloud storage
     */
    onSyncDownload(request: SyncDownloadRequest): Promise<SyncDownloadResponse>;
  }

  interface SearchAllResult {
    videos?: SearchVideoResult;
    playlists?: SearchPlaylistResult;
    channels?: SearchChannelResult;
  }

  interface SearchResult {
    filterInfo?: FilterInfo;
    pageInfo?: PageInfo;
  }

  interface SearchVideoResult extends SearchResult {
    items: Video[];
  }

  interface SearchRequest {
    /**
     * Search query used to search things like videos, channels, etc.
     */
    query: string;
    /**
     * Current page to search.
     */
    pageInfo?: PageInfo;
    /**
     * Current filters to search based on.
     */
    filterInfo?: FilterInfo;
  }

  interface PluginInfo {
    /**
     * Unique Id of Plugin
     */
    id?: string;
    /**
     * Name of plugin
     */
    name: string;
    /**
     * Javascript code of plugin
     */
    script: string;
    /**
     * Plugin version number
     */
    version?: string;
    /**
     * URL for the plugin's home page.
     */
    homepage?: string;
    /**
     * Description of plugin
     */
    description?: string;
    /**
     * Options page html code
     */
    optionsHtml?: string;
    /**
     * Player page html code
     */
    playerHtml?: string;
    /**
     * Determines whether the origin of the options iframe
     * should be pluginId.videogata.com or should be null.
     * Setting to true may be useful for running some libraries
     * on options page.
     */
    optionsSameOrigin?: boolean;
    /**
     * Plugin's manifest
     */
    manifest?: Manifest;
  }

  interface Video {
    /**
     * Unique Id generated by VideoGata
     */
    id?: string;
    /**
     * Title of video
     */
    title: string;
    /**
     * Id from third party service this Playlist was retrieved from.
     */
    apiId?: string;
    /**
     * Url and type of video
     */
    sources?: VideoSource[];
    /**
     * Length of video in seconds
     */
    duration?: number;
    /**
     * Plugin Id of plugin where Video was retrieved from. Set by VideoGata.
     */
    pluginId?: string;
    /**
     * Images associated with this Video
     */
    images?: ImageInfo[];
    /**
     * Number of views
     */
    views?: number;
    /**
     * Number of dislikes
     */
    likes?: number;
    /**
     * Number of dislikes
     */
    dislikes?: number;
    description?: string;
    /**
     * Name of channel where this video came from
     */
    channelName?: string;
    /**
     * Id of the channel from the third party service this video came from
     */
    channelApiId?: string;
    /**
     * Avatar images for the channel this video came from, shown beside the
     * title on video cards.
     */
    channelImages?: ImageInfo[];
    recommendedVideos?: Video[];
    /**
     * ISO 8601 string, ex. 2011-10-05T14:48:00.000Z
     */
    uploadDate?: string;
    /**
     * Url that points to third party service where to video was retrieved from
     */
    originalUrl?: string;
    /**
     * A stream in progress rather than a recording. VideoGata opens it through
     * the channel's live page (`onGetLiveVideo` with `channelApiId`), so
     * `channelApiId` must be set, and `views` is read as current viewers.
     */
    isLive?: boolean;
  }

  interface VideoSource {
    /**
     * Url of video
     */
    source: string;
    /**
     * Type of video. For example `video/mp4`
     */
    type: string;
  }

  interface PlaylistInfo {
    /**
     * Unique id of playlist, generated by VideoGata
     */
    id?: string;
    /**
     * Images associated with Playlist
     */
    images?: ImageInfo[];
    /**
     * Name of Playlist
     */
    name?: string;
    /**
     * Determine whether this a private playlist only associated with a user.
     */
    isUserPlaylist?: boolean;
    /**
     * Id from third party service this Playlist was retrieved from.
     */
    apiId?: string;
    /**
     * Plugin Id of plugin where Playlist was retrieved from. Set by VideoGata.
     */
    pluginId?: string;
    /**
     * Url that points to third party service where to playlist was retrieved from
     */
    originalUrl?: string;
  }

  interface Playlist extends PlaylistInfo {
    videos: Video[];
  }

  interface UserPlaylistRequest {
    pageInfo?: PageInfo;
  }

  interface UserChannelRequest {
    pageInfo?: PageInfo;
  }

  interface UserFeedRequest {
    pageInfo?: PageInfo;
  }

  interface SearchPlaylistResult extends SearchResult {
    items: PlaylistInfo[];
  }

  interface PlaylistVideoRequest {
    apiId?: string;
    /**
     * Determine whether this a private playlist only associated with a user.
     */
    isUserPlaylist: boolean;
    pageInfo?: PageInfo;
  }

  interface PlaylistVideosResult extends SearchVideoResult {
    playlist?: PlaylistInfo;
  }

  interface Channel {
    /**
     * Unique Id generated by VideoGata
     */
    id?: string;
    /**
     * Name of Channel
     */
    name: string;
    /**
     * Id from third party service this Channel was retrieved from.
     */
    apiId?: string;
    /**
     * Images associated with Channel
     */
    images?: ImageInfo[];
    /**
     * Plugin Id of plugin where Channel was retrieved from. Set by VideoGata.
     */
    pluginId?: string;
    /**
     * Url that points to third party service where to channel was retrieved from
     */
    originalUrl?: string;
    /**
     * Indicates whether this channel is currently live streaming.
     */
    isLive?: boolean;
  }

  interface ChannelVideosRequest {
    /**
     * Id from third party service this was retrieved from.
     */
    apiId?: string;
    pageInfo?: PageInfo;
  }

  interface ChannelVideosResult extends SearchVideoResult {
    channel?: Channel;
    isLive?: boolean;
  }

  interface ChannelSearchRequest {
    /**
     * Id from third party service this was retrieved from.
     */
    apiId?: string;
    /**
     * Query to search for within the channel.
     */
    query: string;
    pageInfo?: PageInfo;
  }

  interface SearchChannelResult extends SearchResult {
    items: Channel[];
  }

  interface GetVideoRequest {
    apiId: string;
  }

  interface GetLiveVideoRequest {
    channelApiId: string;
  }

  interface VideoCommentsRequest {
    apiId?: string;
    pageInfo?: PageInfo;
  }

  interface VideoCommentsResult {
    comments: VideoComment[];
    pageInfo?: PageInfo;
  }

  interface CommentReplyRequest {
    commentApiId: string;
    videoApiId?: string;
    pageInfo?: PageInfo;
  }

  interface VideoComment {
    /**
     * Id from third party service this VideoComment was retrieved from.
     */
    apiId: string;
    videoCommentId?: string;
    /**
     * Content of comment
     */
    content: string;
    /**
     * Avatar image of author
     */
    images?: ImageInfo[];
    /**
     * Name of author of comment
     */
    author: string;
    /**
     * ISO 8601 string, ex. 2011-10-05T14:48:00.000Z
     */
    createdDate?: string;
    /**
     * Number of likes on comment
     */
    likes?: number;
    /**
     * Number of replies to this comment
     */
    replyCount?: number;
    /**
     * Information passed to CommentReplyRequest.page.nextPage
     */
    replyPage?: string;
  }

  interface ImageInfo {
    /**
     * Url of image
     */
    url: string;
    height?: number;
    width?: number;
  }

  interface NotificationMessage {
    /**
     * Message to show
     */
    message: string;
    type?: "default" | "success" | "error" | "warning" | "info";
  }

  interface PageInfo {
    /**
     * Total number of results returned
     */
    totalResults?: number;
    /**
     * Number of results on current page
     */
    resultsPerPage: number;
    /**
     * Current offset
     */
    offset: number;
    /**
     * Optional string containing information about next page. For example, a url to the next page.
     */
    nextPage?: string;
    /**
     * Optional string containing information about previous page. For example, a url to the next page.
     */
    prevPage?: string;
  }

  /**
   * Information used for filtering in search requests.
   */
  interface FilterInfo {
    filters: Filter[];
  }

  type FilterType = "radio" | "select" | "text";

  interface Filter {
    /**
     * Unique identifier of filter.
     */
    id: string;
    /**
     * Name of filter that will be displayed to user.
     */
    displayName: string;
    /**
     * Type of filter used to determine if filter will be displayed
     * as a radio field, select tag, or text field.
     */
    type: FilterType;
    /**
     * Value that this filter is set to.
     */
    value?: string;
    /**
     * Selectable options for filter used when filter
     * is type "radio" or "select"
     */
    options?: FilterOption[];
  }

  interface FilterOption {
    displayName: string;
    value: string;
  }

  type ParseUrlType = "playlist" | "video";

  interface GetSearchSuggestionsRequest {
    query: string;
  }

  interface Manifest {
    name: string;
    script: string;
    id?: string;
    version?: string;
    description?: string;
    options?: string | ManifestOptions;
    player?: string;
    updateUrl?: string;
    homepage?: string;
    authentication?: ManifestAuthentication;
  }

  interface ManifestOptions {
    page: string;
    sameOrigin?: boolean;
  }

  interface ManifestAuthentication {
    loginUrl: string;
    cookiesToFind?: string[];
    loginButton?: string;
    headersToFind?: string[];
    domainHeadersToFind: Record<string, string[]>;
    completionUrl?: string;
  }

  type Theme = "dark" | "light" | "system";

  interface LoginRequest {
    apiKey: string;
    apiSecret: string;
    /**
     * Name of the popup window opened by the host.
     */
    popupName?: string;
  }

  interface LoginResponse {
    /**
     * URL the host should open in the popup for OAuth.
     */
    url?: string;
  }

  interface LoginCallbackRequest {
    /**
     * The full callback URL from the OAuth popup, including query parameters.
     */
    url: string;
  }

  /**
   * Request to upload document data to cloud storage
   */
  interface SyncUploadRequest {
    /**
     * Identifies the document; use it to name the file.
     */
    docUrl: string;
    /**
     * Base64-encoded automerge document
     */
    data: string;
  }

  interface SyncUploadResponse {
    success: boolean;
    error?: string;
  }

  /**
   * Request to download document data from cloud storage
   */
  interface SyncDownloadRequest {
    docUrl: string;
  }

  interface SyncDownloadResponse {
    /**
     * Base64-encoded automerge document, or null if there is none yet
     */
    data: string | null;
    error?: string;
  }
}

export {};
