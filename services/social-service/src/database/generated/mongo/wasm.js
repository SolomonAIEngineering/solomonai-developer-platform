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
  readingTime: "readingTime",
  aiGeneratedQuestionResponse: "aiGeneratedQuestionResponse",
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
  postId: "postId",
  pollPostId: "pollPostId",
  extra: "extra",
  mediaId: "mediaId",
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
  mediaid: "mediaid",
  commentId: "commentId",
  extra: "extra",
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
  uploadedBy: "uploadedBy",
  uploadedAt: "uploadedAt",
  size: "size",
  status: "status",
  preview: "preview",
  thumbnail: "thumbnail",
  spaceId: "spaceId",
  channelId: "channelId",
};

exports.Prisma.FileToPostScalarFieldEnum = {
  id: "id",
  fileId: "fileId",
  postId: "postId",
  createdAt: "createdAt",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};
exports.PostType = exports.$Enums.PostType = {
  POST_TYPE_UNSPECIFIED: "POST_TYPE_UNSPECIFIED",
  POST_TYPE_POST: "POST_TYPE_POST",
  POST_TYPE_REPOST: "POST_TYPE_REPOST",
  POST_TYPE_QUESTION: "POST_TYPE_QUESTION",
  POST_TYPE_ACHIEVEMENT: "POST_TYPE_ACHIEVEMENT",
  POST_TYPE_ANNOUNCEMENT: "POST_TYPE_ANNOUNCEMENT",
  POST_TYPE_POLL: "POST_TYPE_POLL",
  POST_TYPE_ARTICLE: "POST_TYPE_ARTICLE",
  POST_TYPE_SHORT_STORY: "POST_TYPE_SHORT_STORY",
};

exports.Category = exports.$Enums.Category = {
  CATEGORY_UNSPECIFIED: "CATEGORY_UNSPECIFIED",
  CATEGORY_WORLD: "CATEGORY_WORLD",
  CATEGORY_BUSINESS: "CATEGORY_BUSINESS",
  CATEGORY_ECONOMICS: "CATEGORY_ECONOMICS",
  CATEGORY_FOREIGN_POLICY: "CATEGORY_FOREIGN_POLICY",
  CATEGORY_POLITICS: "CATEGORY_POLITICS",
  CATEGORY_TECHNOLOGY: "CATEGORY_TECHNOLOGY",
  CATEGORY_OTHER: "CATEGORY_OTHER",
};

exports.ThreadParticipantType = exports.$Enums.ThreadParticipantType = {
  THREAD_PARTICIPANT_TYPE_UNSPECIFIED: "THREAD_PARTICIPANT_TYPE_UNSPECIFIED",
  THREAD_PARTICIPANT_TYPE_PARENT: "THREAD_PARTICIPANT_TYPE_PARENT",
  THREAD_PARTICIPANT_TYPE_PARTICIPANT: "THREAD_PARTICIPANT_TYPE_PARTICIPANT",
};

exports.AccountType = exports.$Enums.AccountType = {
  ACCOUNT_TYPE_UNSPECIFIED: "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_USER: "ACCOUNT_TYPE_USER",
  ACCOUNT_TYPE_COMMUNITY: "ACCOUNT_TYPE_COMMUNITY",
};

exports.SpaceType = exports.$Enums.SpaceType = {
  SPACE_TYPE_UNSPECIFIED: "SPACE_TYPE_UNSPECIFIED",
  SPACE_TYPE_TEAM: "SPACE_TYPE_TEAM",
  SPACE_TYPE_PROJECT: "SPACE_TYPE_PROJECT",
  SPACE_TYPE_DEPARTMENT: "SPACE_TYPE_DEPARTMENT",
  SPACE_TYPE_ANNOUNCEMENT: "SPACE_TYPE_ANNOUNCEMENT",
  SPACE_TYPE_KNOWLEDGE_BASE: "SPACE_TYPE_KNOWLEDGE_BASE",
  SPACE_TYPE_SOCIAL: "SPACE_TYPE_SOCIAL",
  SPACE_TYPE_LEARNING: "SPACE_TYPE_LEARNING",
  SPACE_TYPE_INNOVATION: "SPACE_TYPE_INNOVATION",
};

exports.AccessLevel = exports.$Enums.AccessLevel = {
  ACCESS_LEVEL_PUBLIC: "ACCESS_LEVEL_PUBLIC",
  ACCESS_LEVEL_PRIVATE: "ACCESS_LEVEL_PRIVATE",
  ACCESS_LEVEL_RESTRICTED: "ACCESS_LEVEL_RESTRICTED",
  ACCESS_LEVEL_ORGANIZATION: "ACCESS_LEVEL_ORGANIZATION",
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

exports.Prisma.ModelName = {
  Media: "Media",
  Post: "Post",
  PollPost: "PollPost",
  Space: "Space",
  Channel: "Channel",
  Thread: "Thread",
  Note: "Note",
  Comment: "Comment",
  CommentReply: "CommentReply",
  SpaceMember: "SpaceMember",
  ChannelMember: "ChannelMember",
  File: "File",
  FileToPost: "FileToPost",
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
