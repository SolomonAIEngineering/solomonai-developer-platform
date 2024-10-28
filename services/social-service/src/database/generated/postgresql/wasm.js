Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require("./runtime/index-browser.js");

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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
            runtime.prettyName +
            "`).";
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      },
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
