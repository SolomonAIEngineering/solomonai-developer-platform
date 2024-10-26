
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BlockedsScalarFieldEnum = {
  created_at: 'created_at',
  id: 'id',
  profile_blocked_id: 'profile_blocked_id',
  profile_blocked_type: 'profile_blocked_type',
  profile_blocking_id: 'profile_blocking_id',
  profile_blocking_type: 'profile_blocking_type'
};

exports.Prisma.BookmarksScalarFieldEnum = {
  id: 'id',
  post_ids: 'post_ids'
};

exports.Prisma.Community_profilesScalarFieldEnum = {
  algolia_id: 'algolia_id',
  community_rules: 'community_rules',
  description: 'description',
  followers: 'followers',
  id: 'id',
  name: 'name',
  news_feed_timeline_id: 'news_feed_timeline_id',
  notification_feed_timeline_id: 'notification_feed_timeline_id',
  personal_feed_timeline_id: 'personal_feed_timeline_id',
  private: 'private',
  profile_image_url: 'profile_image_url',
  virtual_profile_id: 'virtual_profile_id',
  visible: 'visible'
};

exports.Prisma.FollowersScalarFieldEnum = {
  approved_at: 'approved_at',
  created_at: 'created_at',
  id: 'id',
  profile_followed_id: 'profile_followed_id',
  profile_following_id: 'profile_following_id',
  request_approved: 'request_approved',
  target_follower_type: 'target_follower_type'
};

exports.Prisma.PublicationsScalarFieldEnum = {
  admin_backend_platform_user_id: 'admin_backend_platform_user_id',
  bookmark_id: 'bookmark_id',
  created_at: 'created_at',
  description: 'description',
  id: 'id',
  post_ids: 'post_ids',
  publication_name: 'publication_name',
  subjects: 'subjects',
  tags: 'tags',
  type: 'type'
};

exports.Prisma.TopicsScalarFieldEnum = {
  community_profile_id: 'community_profile_id',
  description: 'description',
  id: 'id',
  image_url: 'image_url',
  topic_name: 'topic_name'
};

exports.Prisma.User_profilesScalarFieldEnum = {
  admin_publication_id: 'admin_publication_id',
  algolia_id: 'algolia_id',
  bookmark_id: 'bookmark_id',
  editors_publication_id: 'editors_publication_id',
  followers: 'followers',
  following: 'following',
  id: 'id',
  name: 'name',
  news_feed_timeline_id: 'news_feed_timeline_id',
  notification_feed_timeline_id: 'notification_feed_timeline_id',
  personal_feed_timeline_id: 'personal_feed_timeline_id',
  private: 'private',
  profile_image_url: 'profile_image_url',
  virtual_profile_id: 'virtual_profile_id'
};

exports.Prisma.User_tagsScalarFieldEnum = {
  description: 'description',
  id: 'id',
  tag_name: 'tag_name',
  user_profile_id: 'user_profile_id'
};

exports.Prisma.Virtual_profilesScalarFieldEnum = {
  activated: 'activated',
  id: 'id',
  profile_type: 'profile_type',
  user_id: 'user_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  blockeds: 'blockeds',
  bookmarks: 'bookmarks',
  community_profiles: 'community_profiles',
  followers: 'followers',
  publications: 'publications',
  topics: 'topics',
  user_profiles: 'user_profiles',
  user_tags: 'user_tags',
  virtual_profiles: 'virtual_profiles'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
