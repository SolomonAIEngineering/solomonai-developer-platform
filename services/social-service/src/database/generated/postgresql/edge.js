Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require("./runtime/edge.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.VirtualProfileScalarFieldEnum = {
  id: "id",
  userId: "userId",
  profileType: "profileType",
  activated: "activated",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.UserProfileScalarFieldEnum = {
  id: "id",
  virtualProfileId: "virtualProfileId",
  name: "name",
  profileImageUrl: "profileImageUrl",
  bio: "bio",
  private: "private",
  followersCount: "followersCount",
  followingCount: "followingCount",
  newsFeedTimelineId: "newsFeedTimelineId",
  personalFeedTimelineId: "personalFeedTimelineId",
  notificationFeedTimelineId: "notificationFeedTimelineId",
  algoliaId: "algoliaId",
  metadata: "metadata",
  settings: "settings",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.CommunityProfileScalarFieldEnum = {
  id: "id",
  virtualProfileId: "virtualProfileId",
  name: "name",
  description: "description",
  communityRules: "communityRules",
  profileImageUrl: "profileImageUrl",
  private: "private",
  visible: "visible",
  followers: "followers",
  newsFeedTimelineId: "newsFeedTimelineId",
  personalFeedTimelineId: "personalFeedTimelineId",
  notificationFeedTimelineId: "notificationFeedTimelineId",
  algoliaId: "algoliaId",
  metadata: "metadata",
  settings: "settings",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.TopicScalarFieldEnum = {
  id: "id",
  communityProfileId: "communityProfileId",
  topicName: "topicName",
  description: "description",
  imageUrl: "imageUrl",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.PublicationScalarFieldEnum = {
  id: "id",
  publicationName: "publicationName",
  description: "description",
  type: "type",
  postIds: "postIds",
  subjects: "subjects",
  tags: "tags",
  adminBackendPlatformUserId: "adminBackendPlatformUserId",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.MediaScalarFieldEnum = {
  id: "id",
  mediaType: "mediaType",
  status: "status",
  fileContent: "fileContent",
  fileName: "fileName",
  transcription: "transcription",
  extractedText: "extractedText",
  createdAt: "createdAt",
};

exports.Prisma.PostScalarFieldEnum = {
  id: "id",
  authorId: "authorId",
  communityId: "communityId",
  parentSpaceId: "parentSpaceId",
  title: "title",
  content: "content",
  description: "description",
  status: "status",
  workflowStatus: "workflowStatus",
  assignedTo: "assignedTo",
  contentFormat: "contentFormat",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  publishedAt: "publishedAt",
  postType: "postType",
  category: "category",
  threadParticipantType: "threadParticipantType",
  backendPlatformUserId: "backendPlatformUserId",
  profileId: "profileId",
  authorUsername: "authorUsername",
  authorProfileImage: "authorProfileImage",
  authorAccountType: "authorAccountType",
  tags: "tags",
  mentions: "mentions",
  hashtags: "hashtags",
  topicName: "topicName",
  mediaId: "mediaId",
  backgroundImageUrl: "backgroundImageUrl",
  affinityScore: "affinityScore",
  qualityScore: "qualityScore",
  viewCount: "viewCount",
  userIdToAffinityScoreMap: "userIdToAffinityScoreMap",
  userIdToReportsMap: "userIdToReportsMap",
  userIdToReactionMap: "userIdToReactionMap",
  insights: "insights",
  readingTime: "readingTime",
  aiGeneratedQuestionResponse: "aiGeneratedQuestionResponse",
  aiAnalysis: "aiAnalysis",
  searchMetadata: "searchMetadata",
  metadata: "metadata",
  threadId: "threadId",
  spaceId: "spaceId",
  channelId: "channelId",
  extra: "extra",
  visibility: "visibility",
  isPinned: "isPinned",
  isArchived: "isArchived",
  workflow: "workflow",
  version: "version",
};

exports.Prisma.PollPostScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  action: "action",
  content: "content",
  title: "title",
  pollOptions: "pollOptions",
  pollDistribution: "pollDistribution",
  userIdToPollResponsesMap: "userIdToPollResponsesMap",
  pollEndDate: "pollEndDate",
  mentions: "mentions",
  hashtags: "hashtags",
  tags: "tags",
  topicName: "topicName",
  backendPlatformUserId: "backendPlatformUserId",
  profileId: "profileId",
  mediaId: "mediaId",
  threadId: "threadId",
  extra: "extra",
  searchMetadata: "searchMetadata",
  aiAnalysis: "aiAnalysis",
};

exports.Prisma.CommentScalarFieldEnum = {
  id: "id",
  authorId: "authorId",
  content: "content",
  createdAt: "createdAt",
  backendPlatformUserId: "backendPlatformUserId",
  profileId: "profileId",
  authorUsername: "authorUsername",
  authorProfileImage: "authorProfileImage",
  authorAccountType: "authorAccountType",
  affinityScore: "affinityScore",
  qualityScore: "qualityScore",
  userIdToAffinityScoreMap: "userIdToAffinityScoreMap",
  userIdToReportsMap: "userIdToReportsMap",
  userIdToReactionMap: "userIdToReactionMap",
  mentions: "mentions",
  hashtags: "hashtags",
  mediaId: "mediaId",
  postId: "postId",
  pollPostId: "pollPostId",
  extra: "extra",
  aiAnalysis: "aiAnalysis",
};

exports.Prisma.CommentReplyScalarFieldEnum = {
  id: "id",
  content: "content",
  createdAt: "createdAt",
  backendPlatformUserId: "backendPlatformUserId",
  profileId: "profileId",
  authorUsername: "authorUsername",
  authorProfileImage: "authorProfileImage",
  authorAccountType: "authorAccountType",
  affinityScore: "affinityScore",
  qualityScore: "qualityScore",
  userIdToAffinityScoreMap: "userIdToAffinityScoreMap",
  userIdToReportsMap: "userIdToReportsMap",
  userIdToReactionMap: "userIdToReactionMap",
  mentions: "mentions",
  hashtags: "hashtags",
  mediaId: "mediaId",
  commentId: "commentId",
  extra: "extra",
  aiAnalysis: "aiAnalysis",
};

exports.Prisma.ReactionScalarFieldEnum = {
  id: "id",
  userId: "userId",
  postId: "postId",
  commentId: "commentId",
  type: "type",
  metadata: "metadata",
  createdAt: "createdAt",
};

exports.Prisma.BookmarkScalarFieldEnum = {
  id: "id",
  postIds: "postIds",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.BlockScalarFieldEnum = {
  id: "id",
  profileBlockingId: "profileBlockingId",
  profileBlockedId: "profileBlockedId",
  profileBlockingType: "profileBlockingType",
  profileBlockedType: "profileBlockedType",
  reason: "reason",
  metadata: "metadata",
  createdAt: "createdAt",
};

exports.Prisma.FollowScalarFieldEnum = {
  id: "id",
  profileFollowingId: "profileFollowingId",
  profileFollowedId: "profileFollowedId",
  targetFollowerType: "targetFollowerType",
  requestApproved: "requestApproved",
  metadata: "metadata",
  createdAt: "createdAt",
  approvedAt: "approvedAt",
};

exports.Prisma.UserTagScalarFieldEnum = {
  id: "id",
  userProfileId: "userProfileId",
  tagName: "tagName",
  description: "description",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ReportScalarFieldEnum = {
  id: "id",
  submitterId: "submitterId",
  postId: "postId",
  commentId: "commentId",
  userId: "userId",
  reason: "reason",
  description: "description",
  status: "status",
  metadata: "metadata",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  resolvedAt: "resolvedAt",
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: "id",
  userId: "userId",
  type: "type",
  title: "title",
  content: "content",
  isRead: "isRead",
  metadata: "metadata",
  createdAt: "createdAt",
  readAt: "readAt",
};

exports.Prisma.SpaceScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  type: "type",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  spaceType: "spaceType",
  status: "status",
  visibility: "visibility",
  parentSpaceId: "parentSpaceId",
  isPrivate: "isPrivate",
  metadata: "metadata",
  settings: "settings",
  accessLevel: "accessLevel",
  searchMetadata: "searchMetadata",
  tags: "tags",
};

exports.Prisma.ChannelScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  spaceId: "spaceId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  status: "status",
  pinnedPosts: "pinnedPosts",
  isPrivate: "isPrivate",
  metadata: "metadata",
  settings: "settings",
};

exports.Prisma.ThreadScalarFieldEnum = {
  id: "id",
  postIds: "postIds",
  parentPostId: "parentPostId",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  metadata: "metadata",
  status: "status",
  isLocked: "isLocked",
};

exports.Prisma.NoteScalarFieldEnum = {
  id: "id",
  content: "content",
  createdAt: "createdAt",
  authorId: "authorId",
  backendPlatformUserId: "backendPlatformUserId",
  profileId: "profileId",
  authorUserName: "authorUserName",
  authorProfileImage: "authorProfileImage",
  authorAccountType: "authorAccountType",
  mentions: "mentions",
  hashtags: "hashtags",
  mediaId: "mediaId",
  postId: "postId",
  commentId: "commentId",
  searchMetadata: "searchMetadata",
  aiAnalysis: "aiAnalysis",
};

exports.Prisma.SpaceMemberScalarFieldEnum = {
  id: "id",
  spaceId: "spaceId",
  userId: "userId",
  role: "role",
  joinedAt: "joinedAt",
  status: "status",
  permissions: "permissions",
};

exports.Prisma.ChannelMemberScalarFieldEnum = {
  id: "id",
  channelId: "channelId",
  userId: "userId",
  role: "role",
  joinedAt: "joinedAt",
  lastRead: "lastRead",
};

exports.Prisma.FileScalarFieldEnum = {
  id: "id",
  name: "name",
  type: "type",
  url: "url",
  metadata: "metadata",
  uploadedBy: "uploadedBy",
  uploadedAt: "uploadedAt",
  size: "size",
  status: "status",
  preview: "preview",
  thumbnail: "thumbnail",
  searchMetadata: "searchMetadata",
  aiAnalysis: "aiAnalysis",
  spaceId: "spaceId",
  channelId: "channelId",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};
exports.MediaType = exports.$Enums.MediaType = {
  MEDIA_TYPE_UNSPECIFIED: "MEDIA_TYPE_UNSPECIFIED",
  MEDIA_TYPE_IMAGE: "MEDIA_TYPE_IMAGE",
  MEDIA_TYPE_VIDEO: "MEDIA_TYPE_VIDEO",
  MEDIA_TYPE_AUDIO: "MEDIA_TYPE_AUDIO",
  MEDIA_TYPE_DOCUMENT: "MEDIA_TYPE_DOCUMENT",
  MEDIA_TYPE_SPREADSHEET: "MEDIA_TYPE_SPREADSHEET",
  MEDIA_TYPE_PRESENTATION: "MEDIA_TYPE_PRESENTATION",
  MEDIA_TYPE_PDF: "MEDIA_TYPE_PDF",
  MEDIA_TYPE_CODE: "MEDIA_TYPE_CODE",
  MEDIA_TYPE_ZIP: "MEDIA_TYPE_ZIP",
  MEDIA_TYPE_3D: "MEDIA_TYPE_3D",
  MEDIA_TYPE_AR: "MEDIA_TYPE_AR",
  MEDIA_TYPE_CAD: "MEDIA_TYPE_CAD",
  MEDIA_TYPE_VECTOR: "MEDIA_TYPE_VECTOR",
};

exports.PostStatus = exports.$Enums.PostStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
  HIDDEN: "HIDDEN",
};

exports.PostType = exports.$Enums.PostType = {
  POST_TYPE_UNSPECIFIED: "POST_TYPE_UNSPECIFIED",
  POST: "POST",
  REPOST: "REPOST",
  QUESTION: "QUESTION",
  ACHIEVEMENT: "ACHIEVEMENT",
  ANNOUNCEMENT: "ANNOUNCEMENT",
  POLL: "POLL",
  ARTICLE: "ARTICLE",
  SHORT_STORY: "SHORT_STORY",
};

exports.Category = exports.$Enums.Category = {
  CATEGORY_UNSPECIFIED: "CATEGORY_UNSPECIFIED",
  WORLD: "WORLD",
  BUSINESS: "BUSINESS",
  ECONOMICS: "ECONOMICS",
  FOREIGN_POLICY: "FOREIGN_POLICY",
  POLITICS: "POLITICS",
  TECHNOLOGY: "TECHNOLOGY",
  OTHER: "OTHER",
};

exports.ThreadParticipantType = exports.$Enums.ThreadParticipantType = {
  THREAD_PARTICIPANT_TYPE_UNSPECIFIED: "THREAD_PARTICIPANT_TYPE_UNSPECIFIED",
  PARENT: "PARENT",
  PARTICIPANT: "PARTICIPANT",
};

exports.AccountType = exports.$Enums.AccountType = {
  ACCOUNT_TYPE_UNSPECIFIED: "ACCOUNT_TYPE_UNSPECIFIED",
  USER: "USER",
  COMMUNITY: "COMMUNITY",
};

exports.Visibility = exports.$Enums.Visibility = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  FOLLOWERS_ONLY: "FOLLOWERS_ONLY",
  COMMUNITY_ONLY: "COMMUNITY_ONLY",
  RESTRICTED: "RESTRICTED",
  ORGANIZATION: "ORGANIZATION",
};

exports.ReactionType = exports.$Enums.ReactionType = {
  UNSPECIFIED: "UNSPECIFIED",
  LIKE: "LIKE",
  LOVE: "LOVE",
  HAHA: "HAHA",
  WOW: "WOW",
  SAD: "SAD",
  ANGRY: "ANGRY",
  DISLIKE: "DISLIKE",
  CELEBRATE: "CELEBRATE",
};

exports.ReportReason = exports.$Enums.ReportReason = {
  SPAM: "SPAM",
  HARASSMENT: "HARASSMENT",
  HATE_SPEECH: "HATE_SPEECH",
  MISINFORMATION: "MISINFORMATION",
  VIOLENCE: "VIOLENCE",
  ADULT_CONTENT: "ADULT_CONTENT",
  OTHER: "OTHER",
};

exports.ReportStatus = exports.$Enums.ReportStatus = {
  PENDING: "PENDING",
  INVESTIGATING: "INVESTIGATING",
  RESOLVED: "RESOLVED",
  DISMISSED: "DISMISSED",
};

exports.NotificationType = exports.$Enums.NotificationType = {
  FOLLOW: "FOLLOW",
  LIKE: "LIKE",
  COMMENT: "COMMENT",
  MENTION: "MENTION",
  POST: "POST",
  REPORT_UPDATE: "REPORT_UPDATE",
  COMMUNITY_INVITE: "COMMUNITY_INVITE",
  COMMUNITY_UPDATE: "COMMUNITY_UPDATE",
};

exports.SpaceType = exports.$Enums.SpaceType = {
  SPACE_TYPE_UNSPECIFIED: "SPACE_TYPE_UNSPECIFIED",
  TEAM: "TEAM",
  PROJECT: "PROJECT",
  DEPARTMENT: "DEPARTMENT",
  ANNOUNCEMENT: "ANNOUNCEMENT",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  SOCIAL: "SOCIAL",
  LEARNING: "LEARNING",
  INNOVATION: "INNOVATION",
};

exports.AccessLevel = exports.$Enums.AccessLevel = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  RESTRICTED: "RESTRICTED",
  ORGANIZATION: "ORGANIZATION",
};

exports.Prisma.ModelName = {
  VirtualProfile: "VirtualProfile",
  UserProfile: "UserProfile",
  CommunityProfile: "CommunityProfile",
  Topic: "Topic",
  Publication: "Publication",
  Media: "Media",
  Post: "Post",
  PollPost: "PollPost",
  Comment: "Comment",
  CommentReply: "CommentReply",
  Reaction: "Reaction",
  Bookmark: "Bookmark",
  Block: "Block",
  Follow: "Follow",
  UserTag: "UserTag",
  Report: "Report",
  Notification: "Notification",
  Space: "Space",
  Channel: "Channel",
  Thread: "Thread",
  Note: "Note",
  SpaceMember: "SpaceMember",
  ChannelMember: "ChannelMember",
  File: "File",
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "/Users/dyomba/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/social-service/src/database/generated/postgresql",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "darwin-arm64",
        native: true,
      },
    ],
    previewFeatures: ["fullTextIndex"],
    sourceFilePath:
      "/Users/dyomba/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/social-service/prisma/schema.postgresql.prisma",
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: "../../../../.env",
  },
  relativePath: "../../../../prisma",
  clientVersion: "5.21.1",
  engineVersion: "bf0e5e8a04cada8225617067eaa03d041e2bba36",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: "DATABASE_URL",
        value: null,
      },
    },
  },
  inlineSchema:
    'generator client {\n  provider        = "prisma-client-js"\n  output          = "../src/database/generated/postgresql"\n  previewFeatures = ["fullTextIndex"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n//\n// ENUMS\n//\n\nenum PostStatus {\n  DRAFT\n  PUBLISHED\n  ARCHIVED\n  HIDDEN\n}\n\nenum Visibility {\n  PUBLIC\n  PRIVATE\n  FOLLOWERS_ONLY\n  COMMUNITY_ONLY\n  RESTRICTED\n  ORGANIZATION\n}\n\nenum ReactionType {\n  UNSPECIFIED\n  LIKE\n  LOVE\n  HAHA\n  WOW\n  SAD\n  ANGRY\n  DISLIKE\n  CELEBRATE\n}\n\nenum ReportReason {\n  SPAM\n  HARASSMENT\n  HATE_SPEECH\n  MISINFORMATION\n  VIOLENCE\n  ADULT_CONTENT\n  OTHER\n}\n\nenum ReportStatus {\n  PENDING\n  INVESTIGATING\n  RESOLVED\n  DISMISSED\n}\n\nenum NotificationType {\n  FOLLOW\n  LIKE\n  COMMENT\n  MENTION\n  POST\n  REPORT_UPDATE\n  COMMUNITY_INVITE\n  COMMUNITY_UPDATE\n}\n\nenum MediaResize {\n  MEDIA_RESIZE_UNSPECIFIED\n  MEDIA_RESIZE_CLIP\n  MEDIA_RESIZE_CROP\n  MEDIA_RESIZE_SCALE\n}\n\nenum MediaCrop {\n  MEDIA_CROP_UNSPECIFIED\n  MEDIA_CROP_TOP\n  MEDIA_CROP_BOTTOM\n  MEDIA_CROP_LEFT\n  MEDIA_CROP_RIGHT\n  MEDIA_CROP_CENTER\n}\n\nenum MediaType {\n  MEDIA_TYPE_UNSPECIFIED\n  MEDIA_TYPE_IMAGE\n  MEDIA_TYPE_VIDEO\n  MEDIA_TYPE_AUDIO\n  MEDIA_TYPE_DOCUMENT\n  MEDIA_TYPE_SPREADSHEET\n  MEDIA_TYPE_PRESENTATION\n  MEDIA_TYPE_PDF\n  MEDIA_TYPE_CODE\n  MEDIA_TYPE_ZIP\n  MEDIA_TYPE_3D\n  MEDIA_TYPE_AR\n  MEDIA_TYPE_CAD\n  MEDIA_TYPE_VECTOR\n}\n\nenum PostType {\n  POST_TYPE_UNSPECIFIED\n  POST\n  REPOST\n  QUESTION\n  ACHIEVEMENT\n  ANNOUNCEMENT\n  POLL\n  ARTICLE\n  SHORT_STORY\n}\n\nenum AccountType {\n  ACCOUNT_TYPE_UNSPECIFIED\n  USER\n  COMMUNITY\n}\n\nenum ThreadParticipantType {\n  THREAD_PARTICIPANT_TYPE_UNSPECIFIED\n  PARENT\n  PARTICIPANT\n}\n\nenum Category {\n  CATEGORY_UNSPECIFIED\n  WORLD\n  BUSINESS\n  ECONOMICS\n  FOREIGN_POLICY\n  POLITICS\n  TECHNOLOGY\n  OTHER\n}\n\nenum SpaceType {\n  SPACE_TYPE_UNSPECIFIED\n  TEAM\n  PROJECT\n  DEPARTMENT\n  ANNOUNCEMENT\n  KNOWLEDGE_BASE\n  SOCIAL\n  LEARNING\n  INNOVATION\n}\n\nenum AIModelType {\n  AI_MODEL_UNSPECIFIED\n  TEXT\n  IMAGE\n  AUDIO\n  CODE\n  TRANSLATION\n  SUMMARIZATION\n}\n\nenum AccessLevel {\n  PUBLIC\n  PRIVATE\n  RESTRICTED\n  ORGANIZATION\n}\n\n//\n// MODELS\n//\n\nmodel VirtualProfile {\n  id               String             @id @default(uuid())\n  userId           String?            @map("user_id")\n  profileType      String?            @map("profile_type")\n  activated        Boolean?           @default(true)\n  metadata         Json? // Flexible metadata storage\n  createdAt        DateTime           @default(now()) @map("created_at")\n  updatedAt        DateTime           @updatedAt @map("updated_at")\n  userProfile      UserProfile[]\n  communityProfile CommunityProfile[]\n\n  @@index([userId])\n  @@map("virtual_profiles")\n}\n\nmodel UserProfile {\n  id                         String   @id @default(uuid())\n  virtualProfileId           String   @map("virtual_profile_id")\n  name                       String?\n  profileImageUrl            String?  @map("profile_image_url")\n  bio                        String?\n  private                    Boolean? @default(false)\n  followersCount             Int      @default(0)\n  followingCount             Int      @default(0)\n  newsFeedTimelineId         String?  @unique @map("news_feed_timeline_id")\n  personalFeedTimelineId     String?  @unique @map("personal_feed_timeline_id")\n  notificationFeedTimelineId String?  @unique @map("notification_feed_timeline_id")\n  algoliaId                  String?  @map("algolia_id")\n  metadata                   Json? // Flexible metadata storage\n  settings                   Json? // User preferences and settings\n  createdAt                  DateTime @default(now()) @map("created_at")\n  updatedAt                  DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  virtualProfile       VirtualProfile     @relation(fields: [virtualProfileId], references: [id])\n  bookmarks            Bookmark[]\n  tags                 UserTag[]\n  adminPublications    Publication[]      @relation("AdminPublication")\n  editorPublications   Publication[]      @relation("EditorPublication")\n  blockedBy            Block[]            @relation("BlockedProfile")\n  blocking             Block[]            @relation("BlockingProfile")\n  followers            Follow[]           @relation("FollowedProfile")\n  following            Follow[]           @relation("FollowingProfile")\n  posts                Post[] // User\'s posts\n  comments             Comment[] // User\'s comments\n  reactions            Reaction[] // User\'s reactions\n  notifications        Notification[] // User\'s notifications\n  reportsSubmitted     Report[]           @relation("ReportSubmitter")\n  reportedContent      Report[]           @relation("ReportedUser")\n  moderatedCommunities CommunityProfile[] @relation("CommunityModerators")\n\n  @@index([virtualProfileId])\n  @@map("user_profiles")\n}\n\nmodel CommunityProfile {\n  id                         String   @id @default(uuid())\n  virtualProfileId           String   @map("virtual_profile_id")\n  name                       String?\n  description                String?\n  communityRules             String?  @map("community_rules")\n  profileImageUrl            String?  @map("profile_image_url")\n  private                    Boolean? @default(false)\n  visible                    Boolean? @default(true)\n  followers                  Int      @default(0)\n  newsFeedTimelineId         String?  @unique @map("news_feed_timeline_id")\n  personalFeedTimelineId     String?  @unique @map("personal_feed_timeline_id")\n  notificationFeedTimelineId String?  @unique @map("notification_feed_timeline_id")\n  algoliaId                  String?  @map("algolia_id")\n  metadata                   Json? // Flexible metadata storage\n  settings                   Json? // Community settings\n  createdAt                  DateTime @default(now()) @map("created_at")\n  updatedAt                  DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  virtualProfile VirtualProfile @relation(fields: [virtualProfileId], references: [id])\n  topics         Topic[]\n  posts          Post[] // Community posts\n  moderators     UserProfile[]  @relation("CommunityModerators")\n\n  @@index([virtualProfileId])\n  @@map("community_profiles")\n}\n\nmodel Topic {\n  id                 String   @id @default(uuid())\n  communityProfileId String   @map("community_profile_id")\n  topicName          String?  @map("topic_name")\n  description        String?\n  imageUrl           String?  @map("image_url")\n  metadata           Json?\n  createdAt          DateTime @default(now()) @map("created_at")\n  updatedAt          DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  communityProfile CommunityProfile @relation(fields: [communityProfileId], references: [id])\n\n  @@index([communityProfileId])\n  @@map("topics")\n}\n\nmodel Publication {\n  id                         String   @id @default(uuid())\n  publicationName            String?  @map("publication_name")\n  description                String?\n  type                       String?\n  postIds                    String[] @map("post_ids")\n  subjects                   String[]\n  tags                       String[]\n  adminBackendPlatformUserId String?  @map("admin_backend_platform_user_id")\n  metadata                   Json?\n  createdAt                  DateTime @default(now()) @map("created_at")\n  updatedAt                  DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  bookmarks Bookmark[]\n  admins    UserProfile[] @relation("AdminPublication")\n  editors   UserProfile[] @relation("EditorPublication")\n  posts     Post[]\n\n  @@map("publications")\n}\n\nmodel Media {\n  id            String    @id @default(uuid())\n  mediaType     MediaType\n  status        String\n  fileContent   String?\n  fileName      String\n  transcription String?\n  extractedText String?\n  createdAt     DateTime  @default(now())\n\n  // Relations\n  commentReplies CommentReply[]\n  posts          Post[]\n  comments       Comment[]\n  pollPosts      PollPost[]\n  notes          Note[]\n\n  // Indexes\n  @@index([mediaType, status], name: "idx_media_status")\n  @@index([createdAt], name: "idx_media_timestamp")\n}\n\nmodel Post {\n  id            String  @id @default(uuid())\n  authorId      String  @map("author_id")\n  communityId   String? @map("community_id")\n  parentSpaceId String?\n\n  // Basic Information\n  title          String?\n  content        String     @db.Text\n  description    String?\n  status         PostStatus @default(PUBLISHED)\n  workflowStatus String?\n  assignedTo     String?\n  contentFormat  String     @default("markdown")\n  createdAt      DateTime   @default(now()) @map("created_at")\n  updatedAt      DateTime   @updatedAt @map("updated_at")\n  publishedAt    DateTime?\n\n  // Post Type and Category\n  postType              PostType\n  category              Category?\n  threadParticipantType ThreadParticipantType?\n\n  // Author Information\n  backendPlatformUserId String\n  profileId             Int\n  authorUsername        String\n  authorProfileImage    String?\n  authorAccountType     AccountType\n\n  // Organization\n  tags      String[]\n  mentions  String[]\n  hashtags  String[]\n  topicName String?\n\n  // Media and Files\n  media              Media?  @relation(fields: [mediaId], references: [id])\n  mediaId            String?\n  backgroundImageUrl String?\n  files              File[]\n\n  // Engagement Metrics\n  affinityScore            Int   @default(0)\n  qualityScore             Int   @default(0)\n  viewCount                Int   @default(0) @map("view_count")\n  userIdToAffinityScoreMap Json? // Map<String, Int>\n  userIdToReportsMap       Json? // Map<String, Int>\n  userIdToReactionMap      Json? // Map<String, ReactionType>\n\n  // Content Analysis\n  insights                    Json?\n  readingTime                 String?\n  aiGeneratedQuestionResponse String?\n  aiAnalysis                  Json?\n  searchMetadata              Json?\n  metadata                    Json?\n\n  // Relations\n  author       UserProfile       @relation(fields: [authorId], references: [id])\n  community    CommunityProfile? @relation(fields: [communityId], references: [id])\n  comments     Comment[]\n  reactions    Reaction[]\n  bookmarks    Bookmark[]\n  publications Publication[]\n  reports      Report[]          @relation("ReportedPost")\n  notes        Note[]\n  threadId     String?\n  thread       Thread?           @relation(fields: [threadId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  spaceId      String?\n  space        Space?            @relation(fields: [spaceId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  channelId    String?\n  channel      Channel?          @relation(fields: [channelId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n\n  // Additional Features\n  extra      Json? // Custom metadata\n  visibility Visibility @default(PUBLIC)\n  isPinned   Boolean    @default(false) @map("is_pinned")\n  isArchived Boolean    @default(false) @map("is_archived")\n  workflow   Json? // Workflow state\n  version    Int        @default(1)\n\n  // Indexes\n  @@index([authorId, createdAt], name: "idx_author_timestamp")\n  @@index([visibility, createdAt], name: "idx_content_access")\n  @@index([authorId, visibility], name: "idx_author_visibility")\n  @@index([spaceId, visibility, createdAt], name: "idx_space_content")\n  @@index([affinityScore, createdAt], name: "idx_engagement_time")\n  @@index([qualityScore, createdAt], name: "idx_quality_time")\n  @@index([viewCount, createdAt], name: "idx_popularity")\n  @@index([updatedAt], name: "idx_last_modified")\n  @@index([publishedAt], name: "idx_publication")\n  @@index([category, createdAt], name: "idx_category_time")\n  @@index([postType, createdAt], name: "idx_post_type_time")\n  @@index([threadId, createdAt], name: "idx_thread_time")\n  @@index([status, updatedAt], name: "idx_status_time")\n  @@index([workflowStatus, assignedTo], name: "idx_workflow_assignment")\n  @@index([authorId])\n  @@index([communityId])\n  @@map("posts")\n}\n\nmodel PollPost {\n  id        String   @id @default(uuid())\n  createdAt DateTime @default(now())\n  action    PostType\n  content   String\n  title     String?\n\n  // Poll Specific\n  pollOptions              String[]\n  pollDistribution         Json? // Map<String, Float>\n  userIdToPollResponsesMap Json? // Map<String, PollResponse>\n  pollEndDate              DateTime\n\n  // Organization\n  mentions  String[]\n  hashtags  String[]\n  tags      String[]\n  topicName String?\n\n  // Author Info\n  backendPlatformUserId String\n  profileId             Int\n\n  // Media\n  media   Media?  @relation(fields: [mediaId], references: [id])\n  mediaId String?\n\n  // Relations\n  comments Comment[]\n  thread   Thread?   @relation(fields: [threadId], references: [id])\n  threadId String?\n\n  // Additional Features\n  extra          Json?\n  searchMetadata Json?\n  aiAnalysis     Json?\n\n  // Indexes\n  @@index([backendPlatformUserId])\n  @@index([createdAt], name: "idx_poll_created_at")\n  @@index([action], name: "idx_poll_action")\n  @@index([pollEndDate], name: "idx_poll_end_date")\n  @@index([threadId], name: "idx_poll_thread")\n  @@index([topicName], name: "idx_poll_topic")\n  @@index([tags], name: "idx_poll_tags")\n}\n\nmodel Comment {\n  id        String   @id @default(uuid())\n  authorId  String\n  content   String\n  createdAt DateTime @default(now())\n\n  // Author Info\n  backendPlatformUserId String\n  profileId             Int\n  authorUsername        String\n  authorProfileImage    String?\n  authorAccountType     AccountType\n\n  // Metrics\n  affinityScore            Int   @default(0)\n  qualityScore             Int   @default(0)\n  userIdToAffinityScoreMap Json?\n  userIdToReportsMap       Json?\n  userIdToReactionMap      Json?\n\n  // Organization\n  mentions String[]\n  hashtags String[]\n\n  // Media\n  media   Media?  @relation(fields: [mediaId], references: [id])\n  mediaId String?\n\n  // Relations\n  replies    CommentReply[]\n  notes      Note[]\n  post       Post           @relation(fields: [postId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  postId     String\n  pollPost   PollPost?      @relation(fields: [pollPostId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  pollPostId String?\n\n  // Additional Features\n  extra       Json?\n  aiAnalysis  Json?\n  Report      Report[]      @relation("ReportedComment")\n  Reaction    Reaction[]\n  UserProfile UserProfile[]\n\n  // Indexes\n  @@index([postId])\n  @@index([postId, createdAt], name: "idx_comment_post_time")\n  @@index([authorId, createdAt], name: "idx_comment_author_time")\n}\n\nmodel CommentReply {\n  id        String   @id @default(uuid())\n  content   String\n  createdAt DateTime @default(now())\n\n  // Author Info\n  backendPlatformUserId String\n  profileId             Int\n  authorUsername        String\n  authorProfileImage    String?\n  authorAccountType     AccountType\n\n  // Metrics\n  affinityScore            Int   @default(0)\n  qualityScore             Int   @default(0)\n  userIdToAffinityScoreMap Json?\n  userIdToReportsMap       Json?\n  userIdToReactionMap      Json?\n\n  // Organization\n  mentions String[]\n  hashtags String[]\n\n  // Media\n  media   Media?  @relation(fields: [mediaId], references: [id])\n  mediaId String?\n\n  // Relations\n  comment   Comment @relation(fields: [commentId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  commentId String\n\n  // Additional Features\n  extra      Json?\n  aiAnalysis Json?\n\n  // Indexes\n  @@index([commentId])\n  @@index([commentId, createdAt], name: "idx_reply_comment_time")\n  @@index([backendPlatformUserId, createdAt], name: "idx_reply_author_time")\n  @@index([createdAt], name: "idx_reply_created_at")\n  @@index([authorAccountType], name: "idx_reply_account_type")\n  @@index([affinityScore], name: "idx_reply_affinity")\n  @@index([qualityScore], name: "idx_reply_quality")\n  @@index([mentions], name: "idx_reply_mentions")\n  @@index([hashtags], name: "idx_reply_hashtags")\n}\n\nmodel Reaction {\n  id        String       @id @default(uuid())\n  userId    String       @map("user_id")\n  postId    String?      @map("post_id")\n  commentId String?      @map("comment_id")\n  type      ReactionType\n  metadata  Json?\n  createdAt DateTime     @default(now()) @map("created_at")\n\n  // Relations\n  user    UserProfile @relation(fields: [userId], references: [id])\n  post    Post?       @relation(fields: [postId], references: [id])\n  comment Comment?    @relation(fields: [commentId], references: [id])\n\n  @@unique([userId, postId, commentId, type])\n  @@index([userId])\n  @@index([postId])\n  @@index([commentId])\n  @@map("reactions")\n}\n\nmodel Bookmark {\n  id        String   @id @default(uuid())\n  postIds   String[] @map("post_ids")\n  metadata  Json?\n  createdAt DateTime @default(now()) @map("created_at")\n  updatedAt DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  publications Publication[]\n  users        UserProfile[]\n  posts        Post[]\n\n  @@map("bookmarks")\n}\n\nmodel Block {\n  id                  String   @id @default(uuid())\n  profileBlockingId   String   @map("profile_blocking_id")\n  profileBlockedId    String   @map("profile_blocked_id")\n  profileBlockingType String   @map("profile_blocking_type")\n  profileBlockedType  String   @map("profile_blocked_type")\n  reason              String?\n  metadata            Json?\n  createdAt           DateTime @default(now()) @map("created_at")\n\n  // Relations\n  blockingProfile UserProfile @relation("BlockingProfile", fields: [profileBlockingId], references: [id])\n  blockedProfile  UserProfile @relation("BlockedProfile", fields: [profileBlockedId], references: [id])\n\n  @@unique([profileBlockingId, profileBlockedId])\n  @@index([profileBlockingId])\n  @@index([profileBlockedId])\n  @@map("blocks")\n}\n\nmodel Follow {\n  id                 String    @id @default(uuid())\n  profileFollowingId String    @map("profile_following_id")\n  profileFollowedId  String    @map("profile_followed_id")\n  targetFollowerType String    @map("target_follower_type")\n  requestApproved    Boolean   @default(false) @map("request_approved")\n  metadata           Json?\n  createdAt          DateTime  @default(now()) @map("created_at")\n  approvedAt         DateTime? @map("approved_at")\n\n  // Relations\n  followingProfile UserProfile @relation("FollowingProfile", fields: [profileFollowingId], references: [id])\n  followedProfile  UserProfile @relation("FollowedProfile", fields: [profileFollowedId], references: [id])\n\n  @@unique([profileFollowingId, profileFollowedId])\n  @@index([profileFollowingId])\n  @@index([profileFollowedId])\n  @@map("follows")\n}\n\nmodel UserTag {\n  id            String   @id @default(uuid())\n  userProfileId String   @map("user_profile_id")\n  tagName       String?  @map("tag_name")\n  description   String?\n  metadata      Json?\n  createdAt     DateTime @default(now()) @map("created_at")\n  updatedAt     DateTime @updatedAt @map("updated_at")\n\n  // Relations\n  userProfile UserProfile @relation(fields: [userProfileId], references: [id])\n\n  @@index([userProfileId])\n  @@map("user_tags")\n}\n\nmodel Report {\n  id          String       @id @default(uuid())\n  submitterId String       @map("submitter_id")\n  postId      String?      @map("post_id")\n  commentId   String?      @map("comment_id")\n  userId      String?      @map("user_id")\n  reason      ReportReason\n  description String?      @db.Text\n  status      ReportStatus @default(PENDING)\n  metadata    Json?\n  createdAt   DateTime     @default(now()) @map("created_at")\n  updatedAt   DateTime     @updatedAt @map("updated_at")\n  resolvedAt  DateTime?    @map("resolved_at")\n\n  // Relations\n  submitter       UserProfile  @relation("ReportSubmitter", fields: [submitterId], references: [id])\n  reportedUser    UserProfile? @relation("ReportedUser", fields: [userId], references: [id])\n  reportedPost    Post?        @relation("ReportedPost", fields: [postId], references: [id])\n  reportedComment Comment?     @relation("ReportedComment", fields: [commentId], references: [id])\n\n  @@index([submitterId])\n  @@index([postId])\n  @@index([commentId])\n  @@index([userId])\n  @@map("reports")\n}\n\nmodel Notification {\n  id        String           @id @default(uuid())\n  userId    String           @map("user_id")\n  type      NotificationType\n  title     String\n  content   String\n  isRead    Boolean          @default(false) @map("is_read")\n  metadata  Json? // Store related entity IDs and additional data\n  createdAt DateTime         @default(now()) @map("created_at")\n  readAt    DateTime?        @map("read_at")\n\n  // Relations\n  user UserProfile @relation(fields: [userId], references: [id])\n\n  @@index([userId])\n  @@index([createdAt])\n  @@map("notifications")\n}\n\nmodel Space {\n  id          String        @id @default(uuid())\n  name        String\n  description String?\n  type        SpaceType\n  createdAt   DateTime      @default(now())\n  updatedAt   DateTime      @updatedAt\n  spaceType   String\n  status      String\n  visibility  Visibility\n  // Relations\n  members     SpaceMember[]\n  channels    Channel[]\n  posts       Post[]\n  files       File[]\n\n  // Hierarchy\n  parentSpace   Space?  @relation("SpaceHierarchy", fields: [parentSpaceId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  parentSpaceId String?\n  childSpaces   Space[] @relation("SpaceHierarchy")\n\n  // Settings\n  isPrivate   Boolean     @default(false)\n  metadata    Json?\n  settings    Json?\n  accessLevel AccessLevel @default(ORGANIZATION)\n\n  // Features\n  searchMetadata Json?\n  tags           String[]\n\n  // Indexes\n  @@index([name])\n  @@index([parentSpaceId, id], name: "idx_space_hierarchy")\n  @@index([spaceType, status], name: "idx_space_status")\n  @@index([visibility, createdAt], name: "idx_space_visibility")\n  @@index([type], name: "idx_space_type")\n  @@index([createdAt], name: "idx_space_created_at")\n  @@index([updatedAt], name: "idx_space_updated_at")\n  @@index([accessLevel], name: "idx_space_access_level")\n  @@index([isPrivate], name: "idx_space_privacy")\n  @@index([tags], name: "idx_space_tags")\n}\n\nmodel Channel {\n  id          String   @id @default(uuid())\n  name        String\n  description String?\n  spaceId     String\n  space       Space    @relation(fields: [spaceId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n  status      String\n\n  // Content\n  posts       Post[]\n  files       File[]\n  pinnedPosts String[]\n\n  // Members\n  members ChannelMember[]\n\n  // Settings\n  isPrivate Boolean @default(false)\n  metadata  Json?\n  settings  Json?\n\n  // Indexes\n  @@index([spaceId])\n  @@index([spaceId, status], name: "idx_channel_status")\n  @@index([createdAt], name: "idx_channel_timestamp")\n  @@index([name], name: "idx_channel_name")\n  @@index([updatedAt], name: "idx_channel_updated")\n  @@index([isPrivate], name: "idx_channel_privacy")\n  @@index([spaceId, name], name: "idx_channel_space_name")\n  @@index([spaceId, createdAt], name: "idx_channel_space_created")\n  @@index([status, updatedAt], name: "idx_channel_status_updated")\n}\n\nmodel Thread {\n  id           String   @id @default(uuid())\n  postIds      String[]\n  parentPostId String\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  // Relations\n  posts     Post[]\n  pollPosts PollPost[]\n\n  // Additional Features\n  metadata Json?\n  status   String  @default("active")\n  isLocked Boolean @default(false)\n\n  // Indexes\n  @@index([parentPostId])\n  @@index([createdAt], name: "idx_thread_created_at")\n  @@index([updatedAt], name: "idx_thread_updated_at")\n  @@index([status], name: "idx_thread_status")\n  @@index([isLocked], name: "idx_thread_locked")\n  @@index([parentPostId, createdAt], name: "idx_thread_parent_created")\n  @@index([status, updatedAt], name: "idx_thread_status_updated")\n}\n\nmodel Note {\n  id        String   @id @default(uuid())\n  content   String\n  createdAt DateTime @default(now())\n  authorId  String\n\n  // Author Info\n  backendPlatformUserId String\n  profileId             Int\n  authorUserName        String\n  authorProfileImage    String?\n  authorAccountType     AccountType\n\n  // Organization\n  mentions String[]\n  hashtags String[]\n\n  // Media\n  media   Media?  @relation(fields: [mediaId], references: [id])\n  mediaId String?\n\n  // Relations\n  post      Post     @relation(fields: [postId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  postId    String\n  comment   Comment? @relation(fields: [commentId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  commentId String?\n\n  // Features\n  searchMetadata Json?\n  aiAnalysis     Json?\n\n  // Indexes\n  @@index([postId, createdAt], name: "idx_note_post_time")\n  @@index([authorId, createdAt], name: "idx_note_author_time")\n  @@index([backendPlatformUserId], name: "idx_note_backend_user")\n  @@index([createdAt], name: "idx_note_created_at")\n  @@index([commentId], name: "idx_note_comment")\n  @@index([authorAccountType], name: "idx_note_account_type")\n  @@index([mentions], name: "idx_note_mentions")\n  @@index([hashtags], name: "idx_note_hashtags")\n}\n\nmodel SpaceMember {\n  id          String   @id @default(uuid())\n  spaceId     String\n  space       Space    @relation(fields: [spaceId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  userId      String\n  role        String\n  joinedAt    DateTime @default(now())\n  status      String   @default("active")\n  permissions String[]\n\n  @@unique([spaceId, userId])\n  @@index([userId], name: "idx_space_member_user")\n  @@index([role], name: "idx_space_member_role")\n  @@index([status], name: "idx_space_member_status")\n  @@index([joinedAt], name: "idx_space_member_joined")\n}\n\nmodel ChannelMember {\n  id        String    @id @default(uuid())\n  channelId String\n  channel   Channel   @relation(fields: [channelId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  userId    String\n  role      String\n  joinedAt  DateTime  @default(now())\n  lastRead  DateTime?\n\n  @@unique([channelId, userId])\n  @@index([userId], name: "idx_channel_member_user")\n  @@index([role], name: "idx_channel_member_role")\n  @@index([joinedAt], name: "idx_channel_member_joined")\n  @@index([lastRead], name: "idx_channel_member_last_read")\n}\n\nmodel File {\n  id       String    @id @default(uuid())\n  name     String\n  type     MediaType\n  url      String\n  metadata Json\n\n  // Upload Info\n  uploadedBy String\n  uploadedAt DateTime @default(now())\n  size       Int\n\n  // Processing\n  status    String  @default("processing")\n  preview   String?\n  thumbnail String?\n\n  // Analysis\n  searchMetadata Json?\n  aiAnalysis     Json?\n\n  // Relations\n  posts     Post[]\n  space     Space?   @relation(fields: [spaceId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  spaceId   String?\n  channel   Channel? @relation(fields: [channelId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  channelId String?\n\n  @@index([type])\n  @@index([uploadedBy], name: "idx_file_uploaded_by")\n  @@index([uploadedAt], name: "idx_file_uploaded_at")\n  @@index([status], name: "idx_file_status")\n  @@index([size], name: "idx_file_size")\n  @@index([spaceId, type], name: "idx_file_space_type")\n  @@index([channelId, type], name: "idx_file_channel_type")\n}\n',
  inlineSchemaHash:
    "2d4915737101475f4a453eadd7534e4f0aab28126eec5428fa65549799a6dd41",
  copyEngine: true,
};
config.dirname = "/";

config.runtimeDataModel = JSON.parse(
  '{"models":{"VirtualProfile":{"dbName":"virtual_profiles","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileType","dbName":"profile_type","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"activated","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"userProfile","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"UserProfileToVirtualProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"communityProfile","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommunityProfile","relationName":"CommunityProfileToVirtualProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"UserProfile":{"dbName":"user_profiles","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"virtualProfileId","dbName":"virtual_profile_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileImageUrl","dbName":"profile_image_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bio","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"private","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"followersCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"followingCount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"newsFeedTimelineId","dbName":"news_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"personalFeedTimelineId","dbName":"personal_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"notificationFeedTimelineId","dbName":"notification_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"algoliaId","dbName":"algolia_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"settings","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"virtualProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"VirtualProfile","relationName":"UserProfileToVirtualProfile","relationFromFields":["virtualProfileId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"bookmarks","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bookmark","relationName":"BookmarkToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserTag","relationName":"UserProfileToUserTag","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"adminPublications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Publication","relationName":"AdminPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"editorPublications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Publication","relationName":"EditorPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"blockedBy","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Block","relationName":"BlockedProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"blocking","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Block","relationName":"BlockingProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"followers","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Follow","relationName":"FollowedProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"following","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Follow","relationName":"FollowingProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"reactions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reaction","relationName":"ReactionToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notifications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Notification","relationName":"NotificationToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"reportsSubmitted","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Report","relationName":"ReportSubmitter","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"reportedContent","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Report","relationName":"ReportedUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"moderatedCommunities","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommunityProfile","relationName":"CommunityModerators","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"CommunityProfile":{"dbName":"community_profiles","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"virtualProfileId","dbName":"virtual_profile_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"communityRules","dbName":"community_rules","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileImageUrl","dbName":"profile_image_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"private","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"visible","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"followers","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"newsFeedTimelineId","dbName":"news_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"personalFeedTimelineId","dbName":"personal_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"notificationFeedTimelineId","dbName":"notification_feed_timeline_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"algoliaId","dbName":"algolia_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"settings","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"virtualProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"VirtualProfile","relationName":"CommunityProfileToVirtualProfile","relationFromFields":["virtualProfileId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"topics","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Topic","relationName":"CommunityProfileToTopic","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"CommunityProfileToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"moderators","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"CommunityModerators","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Topic":{"dbName":"topics","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"communityProfileId","dbName":"community_profile_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"topicName","dbName":"topic_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"imageUrl","dbName":"image_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"communityProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommunityProfile","relationName":"CommunityProfileToTopic","relationFromFields":["communityProfileId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Publication":{"dbName":"publications","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicationName","dbName":"publication_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"postIds","dbName":"post_ids","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"subjects","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"adminBackendPlatformUserId","dbName":"admin_backend_platform_user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"bookmarks","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bookmark","relationName":"BookmarkToPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"admins","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"AdminPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"editors","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"EditorPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Media":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"mediaType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MediaType","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fileContent","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fileName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"transcription","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"extractedText","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"commentReplies","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommentReply","relationName":"CommentReplyToMedia","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"MediaToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToMedia","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"pollPosts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PollPost","relationName":"MediaToPollPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Note","relationName":"MediaToNote","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":"posts","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","dbName":"author_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"communityId","dbName":"community_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"parentSpaceId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"PostStatus","default":"PUBLISHED","isGenerated":false,"isUpdatedAt":false},{"name":"workflowStatus","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"assignedTo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contentFormat","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"markdown","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"publishedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"postType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PostType","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","isGenerated":false,"isUpdatedAt":false},{"name":"threadParticipantType","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ThreadParticipantType","isGenerated":false,"isUpdatedAt":false},{"name":"backendPlatformUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"authorUsername","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorProfileImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorAccountType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccountType","isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"mentions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashtags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"topicName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"MediaToPost","relationFromFields":["mediaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"mediaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"backgroundImageUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"files","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"File","relationName":"FileToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"affinityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"qualityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"viewCount","dbName":"view_count","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"userIdToAffinityScoreMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReportsMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReactionMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"insights","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"readingTime","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"aiGeneratedQuestionResponse","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"searchMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"PostToUserProfile","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"community","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommunityProfile","relationName":"CommunityProfileToPost","relationFromFields":["communityId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"reactions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reaction","relationName":"PostToReaction","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"bookmarks","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bookmark","relationName":"BookmarkToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"publications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Publication","relationName":"PostToPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"reports","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Report","relationName":"ReportedPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Note","relationName":"NoteToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"threadId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"thread","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Thread","relationName":"PostToThread","relationFromFields":["threadId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"spaceId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"space","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"PostToSpace","relationFromFields":["spaceId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"channelId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"channel","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Channel","relationName":"ChannelToPost","relationFromFields":["channelId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"extra","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"visibility","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Visibility","default":"PUBLIC","isGenerated":false,"isUpdatedAt":false},{"name":"isPinned","dbName":"is_pinned","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"isArchived","dbName":"is_archived","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"workflow","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"version","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":1,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"PollPost":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"action","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PostType","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pollOptions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pollDistribution","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToPollResponsesMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"pollEndDate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"mentions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashtags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"topicName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"backendPlatformUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"MediaToPollPost","relationFromFields":["mediaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"mediaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToPollPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"thread","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Thread","relationName":"PollPostToThread","relationFromFields":["threadId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"threadId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"extra","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"searchMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Comment":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"backendPlatformUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"authorUsername","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorProfileImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorAccountType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccountType","isGenerated":false,"isUpdatedAt":false},{"name":"affinityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"qualityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"userIdToAffinityScoreMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReportsMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReactionMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"mentions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashtags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"CommentToMedia","relationFromFields":["mediaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"mediaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"replies","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CommentReply","relationName":"CommentToCommentReply","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Note","relationName":"CommentToNote","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"CommentToPost","relationFromFields":["postId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"postId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pollPost","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PollPost","relationName":"CommentToPollPost","relationFromFields":["pollPostId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"pollPostId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"extra","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"Report","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Report","relationName":"ReportedComment","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Reaction","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reaction","relationName":"CommentToReaction","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"UserProfile","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"CommentToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"CommentReply":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"backendPlatformUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"authorUsername","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorProfileImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorAccountType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccountType","isGenerated":false,"isUpdatedAt":false},{"name":"affinityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"qualityScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"userIdToAffinityScoreMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReportsMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"userIdToReactionMap","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"mentions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashtags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"CommentReplyToMedia","relationFromFields":["mediaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"mediaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"comment","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToCommentReply","relationFromFields":["commentId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"commentId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"extra","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Reaction":{"dbName":"reactions","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"postId","dbName":"post_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"commentId","dbName":"comment_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ReactionType","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"ReactionToUserProfile","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToReaction","relationFromFields":["postId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"comment","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToReaction","relationFromFields":["commentId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["userId","postId","commentId","type"]],"uniqueIndexes":[{"name":null,"fields":["userId","postId","commentId","type"]}],"isGenerated":false},"Bookmark":{"dbName":"bookmarks","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"postIds","dbName":"post_ids","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"publications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Publication","relationName":"BookmarkToPublication","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"users","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"BookmarkToUserProfile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"BookmarkToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Block":{"dbName":"blocks","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"profileBlockingId","dbName":"profile_blocking_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileBlockedId","dbName":"profile_blocked_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileBlockingType","dbName":"profile_blocking_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileBlockedType","dbName":"profile_blocked_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"reason","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"blockingProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"BlockingProfile","relationFromFields":["profileBlockingId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"blockedProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"BlockedProfile","relationFromFields":["profileBlockedId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["profileBlockingId","profileBlockedId"]],"uniqueIndexes":[{"name":null,"fields":["profileBlockingId","profileBlockedId"]}],"isGenerated":false},"Follow":{"dbName":"follows","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"profileFollowingId","dbName":"profile_following_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileFollowedId","dbName":"profile_followed_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"targetFollowerType","dbName":"target_follower_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"requestApproved","dbName":"request_approved","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"approvedAt","dbName":"approved_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"followingProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"FollowingProfile","relationFromFields":["profileFollowingId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"followedProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"FollowedProfile","relationFromFields":["profileFollowedId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["profileFollowingId","profileFollowedId"]],"uniqueIndexes":[{"name":null,"fields":["profileFollowingId","profileFollowedId"]}],"isGenerated":false},"UserTag":{"dbName":"user_tags","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userProfileId","dbName":"user_profile_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tagName","dbName":"tag_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"userProfile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"UserProfileToUserTag","relationFromFields":["userProfileId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Report":{"dbName":"reports","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"submitterId","dbName":"submitter_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"postId","dbName":"post_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"commentId","dbName":"comment_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"reason","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ReportReason","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"ReportStatus","default":"PENDING","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"resolvedAt","dbName":"resolved_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"submitter","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"ReportSubmitter","relationFromFields":["submitterId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"reportedUser","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"ReportedUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"reportedPost","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"ReportedPost","relationFromFields":["postId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"reportedComment","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"ReportedComment","relationFromFields":["commentId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Notification":{"dbName":"notifications","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"NotificationType","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"isRead","dbName":"is_read","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"readAt","dbName":"read_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserProfile","relationName":"NotificationToUserProfile","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Space":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpaceType","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"spaceType","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"visibility","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Visibility","isGenerated":false,"isUpdatedAt":false},{"name":"members","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SpaceMember","relationName":"SpaceToSpaceMember","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"channels","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Channel","relationName":"ChannelToSpace","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToSpace","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"files","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"File","relationName":"FileToSpace","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"parentSpace","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"SpaceHierarchy","relationFromFields":["parentSpaceId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"parentSpaceId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"childSpaces","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"SpaceHierarchy","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"isPrivate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"settings","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"accessLevel","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"AccessLevel","default":"ORGANIZATION","isGenerated":false,"isUpdatedAt":false},{"name":"searchMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Channel":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"spaceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"space","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"ChannelToSpace","relationFromFields":["spaceId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"ChannelToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"files","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"File","relationName":"ChannelToFile","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"pinnedPosts","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"members","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ChannelMember","relationName":"ChannelToChannelMember","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"isPrivate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"settings","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Thread":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"postIds","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"parentPostId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToThread","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"pollPosts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PollPost","relationName":"PollPostToThread","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"active","isGenerated":false,"isUpdatedAt":false},{"name":"isLocked","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Note":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"backendPlatformUserId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"authorUserName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorProfileImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"authorAccountType","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"AccountType","isGenerated":false,"isUpdatedAt":false},{"name":"mentions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hashtags","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"media","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Media","relationName":"MediaToNote","relationFromFields":["mediaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"mediaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"NoteToPost","relationFromFields":["postId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"postId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"comment","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToNote","relationFromFields":["commentId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"commentId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"searchMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"SpaceMember":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"spaceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"space","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"SpaceToSpaceMember","relationFromFields":["spaceId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"joinedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"active","isGenerated":false,"isUpdatedAt":false},{"name":"permissions","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["spaceId","userId"]],"uniqueIndexes":[{"name":null,"fields":["spaceId","userId"]}],"isGenerated":false},"ChannelMember":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"channelId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"channel","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Channel","relationName":"ChannelToChannelMember","relationFromFields":["channelId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"joinedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"lastRead","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["channelId","userId"]],"uniqueIndexes":[{"name":null,"fields":["channelId","userId"]}],"isGenerated":false},"File":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MediaType","isGenerated":false,"isUpdatedAt":false},{"name":"url","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"uploadedBy","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uploadedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"size","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"processing","isGenerated":false,"isUpdatedAt":false},{"name":"preview","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"thumbnail","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"searchMetadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"aiAnalysis","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"FileToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"space","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Space","relationName":"FileToSpace","relationFromFields":["spaceId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"spaceId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"channel","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Channel","relationName":"ChannelToFile","relationFromFields":["channelId"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"channelId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"PostStatus":{"values":[{"name":"DRAFT","dbName":null},{"name":"PUBLISHED","dbName":null},{"name":"ARCHIVED","dbName":null},{"name":"HIDDEN","dbName":null}],"dbName":null},"Visibility":{"values":[{"name":"PUBLIC","dbName":null},{"name":"PRIVATE","dbName":null},{"name":"FOLLOWERS_ONLY","dbName":null},{"name":"COMMUNITY_ONLY","dbName":null},{"name":"RESTRICTED","dbName":null},{"name":"ORGANIZATION","dbName":null}],"dbName":null},"ReactionType":{"values":[{"name":"UNSPECIFIED","dbName":null},{"name":"LIKE","dbName":null},{"name":"LOVE","dbName":null},{"name":"HAHA","dbName":null},{"name":"WOW","dbName":null},{"name":"SAD","dbName":null},{"name":"ANGRY","dbName":null},{"name":"DISLIKE","dbName":null},{"name":"CELEBRATE","dbName":null}],"dbName":null},"ReportReason":{"values":[{"name":"SPAM","dbName":null},{"name":"HARASSMENT","dbName":null},{"name":"HATE_SPEECH","dbName":null},{"name":"MISINFORMATION","dbName":null},{"name":"VIOLENCE","dbName":null},{"name":"ADULT_CONTENT","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"ReportStatus":{"values":[{"name":"PENDING","dbName":null},{"name":"INVESTIGATING","dbName":null},{"name":"RESOLVED","dbName":null},{"name":"DISMISSED","dbName":null}],"dbName":null},"NotificationType":{"values":[{"name":"FOLLOW","dbName":null},{"name":"LIKE","dbName":null},{"name":"COMMENT","dbName":null},{"name":"MENTION","dbName":null},{"name":"POST","dbName":null},{"name":"REPORT_UPDATE","dbName":null},{"name":"COMMUNITY_INVITE","dbName":null},{"name":"COMMUNITY_UPDATE","dbName":null}],"dbName":null},"MediaResize":{"values":[{"name":"MEDIA_RESIZE_UNSPECIFIED","dbName":null},{"name":"MEDIA_RESIZE_CLIP","dbName":null},{"name":"MEDIA_RESIZE_CROP","dbName":null},{"name":"MEDIA_RESIZE_SCALE","dbName":null}],"dbName":null},"MediaCrop":{"values":[{"name":"MEDIA_CROP_UNSPECIFIED","dbName":null},{"name":"MEDIA_CROP_TOP","dbName":null},{"name":"MEDIA_CROP_BOTTOM","dbName":null},{"name":"MEDIA_CROP_LEFT","dbName":null},{"name":"MEDIA_CROP_RIGHT","dbName":null},{"name":"MEDIA_CROP_CENTER","dbName":null}],"dbName":null},"MediaType":{"values":[{"name":"MEDIA_TYPE_UNSPECIFIED","dbName":null},{"name":"MEDIA_TYPE_IMAGE","dbName":null},{"name":"MEDIA_TYPE_VIDEO","dbName":null},{"name":"MEDIA_TYPE_AUDIO","dbName":null},{"name":"MEDIA_TYPE_DOCUMENT","dbName":null},{"name":"MEDIA_TYPE_SPREADSHEET","dbName":null},{"name":"MEDIA_TYPE_PRESENTATION","dbName":null},{"name":"MEDIA_TYPE_PDF","dbName":null},{"name":"MEDIA_TYPE_CODE","dbName":null},{"name":"MEDIA_TYPE_ZIP","dbName":null},{"name":"MEDIA_TYPE_3D","dbName":null},{"name":"MEDIA_TYPE_AR","dbName":null},{"name":"MEDIA_TYPE_CAD","dbName":null},{"name":"MEDIA_TYPE_VECTOR","dbName":null}],"dbName":null},"PostType":{"values":[{"name":"POST_TYPE_UNSPECIFIED","dbName":null},{"name":"POST","dbName":null},{"name":"REPOST","dbName":null},{"name":"QUESTION","dbName":null},{"name":"ACHIEVEMENT","dbName":null},{"name":"ANNOUNCEMENT","dbName":null},{"name":"POLL","dbName":null},{"name":"ARTICLE","dbName":null},{"name":"SHORT_STORY","dbName":null}],"dbName":null},"AccountType":{"values":[{"name":"ACCOUNT_TYPE_UNSPECIFIED","dbName":null},{"name":"USER","dbName":null},{"name":"COMMUNITY","dbName":null}],"dbName":null},"ThreadParticipantType":{"values":[{"name":"THREAD_PARTICIPANT_TYPE_UNSPECIFIED","dbName":null},{"name":"PARENT","dbName":null},{"name":"PARTICIPANT","dbName":null}],"dbName":null},"Category":{"values":[{"name":"CATEGORY_UNSPECIFIED","dbName":null},{"name":"WORLD","dbName":null},{"name":"BUSINESS","dbName":null},{"name":"ECONOMICS","dbName":null},{"name":"FOREIGN_POLICY","dbName":null},{"name":"POLITICS","dbName":null},{"name":"TECHNOLOGY","dbName":null},{"name":"OTHER","dbName":null}],"dbName":null},"SpaceType":{"values":[{"name":"SPACE_TYPE_UNSPECIFIED","dbName":null},{"name":"TEAM","dbName":null},{"name":"PROJECT","dbName":null},{"name":"DEPARTMENT","dbName":null},{"name":"ANNOUNCEMENT","dbName":null},{"name":"KNOWLEDGE_BASE","dbName":null},{"name":"SOCIAL","dbName":null},{"name":"LEARNING","dbName":null},{"name":"INNOVATION","dbName":null}],"dbName":null},"AIModelType":{"values":[{"name":"AI_MODEL_UNSPECIFIED","dbName":null},{"name":"TEXT","dbName":null},{"name":"IMAGE","dbName":null},{"name":"AUDIO","dbName":null},{"name":"CODE","dbName":null},{"name":"TRANSLATION","dbName":null},{"name":"SUMMARIZATION","dbName":null}],"dbName":null},"AccessLevel":{"values":[{"name":"PUBLIC","dbName":null},{"name":"PRIVATE","dbName":null},{"name":"RESTRICTED","dbName":null},{"name":"ORGANIZATION","dbName":null}],"dbName":null}},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL:
      (typeof globalThis !== "undefined" && globalThis["DATABASE_URL"]) ||
      (typeof process !== "undefined" &&
        process.env &&
        process.env.DATABASE_URL) ||
      undefined,
  },
});

if (
  (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
  (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
      (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
      undefined,
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
