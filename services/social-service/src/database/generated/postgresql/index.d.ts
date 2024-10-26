
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model blockeds
 * 
 */
export type blockeds = $Result.DefaultSelection<Prisma.$blockedsPayload>
/**
 * Model bookmarks
 * 
 */
export type bookmarks = $Result.DefaultSelection<Prisma.$bookmarksPayload>
/**
 * Model community_profiles
 * 
 */
export type community_profiles = $Result.DefaultSelection<Prisma.$community_profilesPayload>
/**
 * Model followers
 * 
 */
export type followers = $Result.DefaultSelection<Prisma.$followersPayload>
/**
 * Model publications
 * 
 */
export type publications = $Result.DefaultSelection<Prisma.$publicationsPayload>
/**
 * Model topics
 * 
 */
export type topics = $Result.DefaultSelection<Prisma.$topicsPayload>
/**
 * Model user_profiles
 * 
 */
export type user_profiles = $Result.DefaultSelection<Prisma.$user_profilesPayload>
/**
 * Model user_tags
 * 
 */
export type user_tags = $Result.DefaultSelection<Prisma.$user_tagsPayload>
/**
 * Model virtual_profiles
 * 
 */
export type virtual_profiles = $Result.DefaultSelection<Prisma.$virtual_profilesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blockeds
 * const blockeds = await prisma.blockeds.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blockeds
   * const blockeds = await prisma.blockeds.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.blockeds`: Exposes CRUD operations for the **blockeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blockeds
    * const blockeds = await prisma.blockeds.findMany()
    * ```
    */
  get blockeds(): Prisma.blockedsDelegate<ExtArgs>;

  /**
   * `prisma.bookmarks`: Exposes CRUD operations for the **bookmarks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmarks.findMany()
    * ```
    */
  get bookmarks(): Prisma.bookmarksDelegate<ExtArgs>;

  /**
   * `prisma.community_profiles`: Exposes CRUD operations for the **community_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Community_profiles
    * const community_profiles = await prisma.community_profiles.findMany()
    * ```
    */
  get community_profiles(): Prisma.community_profilesDelegate<ExtArgs>;

  /**
   * `prisma.followers`: Exposes CRUD operations for the **followers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.followers.findMany()
    * ```
    */
  get followers(): Prisma.followersDelegate<ExtArgs>;

  /**
   * `prisma.publications`: Exposes CRUD operations for the **publications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publications.findMany()
    * ```
    */
  get publications(): Prisma.publicationsDelegate<ExtArgs>;

  /**
   * `prisma.topics`: Exposes CRUD operations for the **topics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topics.findMany()
    * ```
    */
  get topics(): Prisma.topicsDelegate<ExtArgs>;

  /**
   * `prisma.user_profiles`: Exposes CRUD operations for the **user_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_profiles
    * const user_profiles = await prisma.user_profiles.findMany()
    * ```
    */
  get user_profiles(): Prisma.user_profilesDelegate<ExtArgs>;

  /**
   * `prisma.user_tags`: Exposes CRUD operations for the **user_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tags
    * const user_tags = await prisma.user_tags.findMany()
    * ```
    */
  get user_tags(): Prisma.user_tagsDelegate<ExtArgs>;

  /**
   * `prisma.virtual_profiles`: Exposes CRUD operations for the **virtual_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Virtual_profiles
    * const virtual_profiles = await prisma.virtual_profiles.findMany()
    * ```
    */
  get virtual_profiles(): Prisma.virtual_profilesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "blockeds" | "bookmarks" | "community_profiles" | "followers" | "publications" | "topics" | "user_profiles" | "user_tags" | "virtual_profiles"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      blockeds: {
        payload: Prisma.$blockedsPayload<ExtArgs>
        fields: Prisma.blockedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blockedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blockedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          findFirst: {
            args: Prisma.blockedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blockedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          findMany: {
            args: Prisma.blockedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>[]
          }
          create: {
            args: Prisma.blockedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          createMany: {
            args: Prisma.blockedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blockedsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>[]
          }
          delete: {
            args: Prisma.blockedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          update: {
            args: Prisma.blockedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          deleteMany: {
            args: Prisma.blockedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blockedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blockedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedsPayload>
          }
          aggregate: {
            args: Prisma.BlockedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockeds>
          }
          groupBy: {
            args: Prisma.blockedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.blockedsCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedsCountAggregateOutputType> | number
          }
        }
      }
      bookmarks: {
        payload: Prisma.$bookmarksPayload<ExtArgs>
        fields: Prisma.bookmarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookmarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookmarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          findFirst: {
            args: Prisma.bookmarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookmarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          findMany: {
            args: Prisma.bookmarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>[]
          }
          create: {
            args: Prisma.bookmarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          createMany: {
            args: Prisma.bookmarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookmarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>[]
          }
          delete: {
            args: Prisma.bookmarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          update: {
            args: Prisma.bookmarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          deleteMany: {
            args: Prisma.bookmarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookmarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookmarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookmarksPayload>
          }
          aggregate: {
            args: Prisma.BookmarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarks>
          }
          groupBy: {
            args: Prisma.bookmarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookmarksCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarksCountAggregateOutputType> | number
          }
        }
      }
      community_profiles: {
        payload: Prisma.$community_profilesPayload<ExtArgs>
        fields: Prisma.community_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.community_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.community_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          findFirst: {
            args: Prisma.community_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.community_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          findMany: {
            args: Prisma.community_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>[]
          }
          create: {
            args: Prisma.community_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          createMany: {
            args: Prisma.community_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.community_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>[]
          }
          delete: {
            args: Prisma.community_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          update: {
            args: Prisma.community_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          deleteMany: {
            args: Prisma.community_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.community_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.community_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_profilesPayload>
          }
          aggregate: {
            args: Prisma.Community_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity_profiles>
          }
          groupBy: {
            args: Prisma.community_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Community_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.community_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<Community_profilesCountAggregateOutputType> | number
          }
        }
      }
      followers: {
        payload: Prisma.$followersPayload<ExtArgs>
        fields: Prisma.followersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          findFirst: {
            args: Prisma.followersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          findMany: {
            args: Prisma.followersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>[]
          }
          create: {
            args: Prisma.followersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          createMany: {
            args: Prisma.followersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.followersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>[]
          }
          delete: {
            args: Prisma.followersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          update: {
            args: Prisma.followersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          deleteMany: {
            args: Prisma.followersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.followersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followersPayload>
          }
          aggregate: {
            args: Prisma.FollowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowers>
          }
          groupBy: {
            args: Prisma.followersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.followersCountArgs<ExtArgs>
            result: $Utils.Optional<FollowersCountAggregateOutputType> | number
          }
        }
      }
      publications: {
        payload: Prisma.$publicationsPayload<ExtArgs>
        fields: Prisma.publicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.publicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.publicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          findFirst: {
            args: Prisma.publicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.publicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          findMany: {
            args: Prisma.publicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>[]
          }
          create: {
            args: Prisma.publicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          createMany: {
            args: Prisma.publicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.publicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>[]
          }
          delete: {
            args: Prisma.publicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          update: {
            args: Prisma.publicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          deleteMany: {
            args: Prisma.publicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.publicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.publicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationsPayload>
          }
          aggregate: {
            args: Prisma.PublicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublications>
          }
          groupBy: {
            args: Prisma.publicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.publicationsCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationsCountAggregateOutputType> | number
          }
        }
      }
      topics: {
        payload: Prisma.$topicsPayload<ExtArgs>
        fields: Prisma.topicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.topicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.topicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          findFirst: {
            args: Prisma.topicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.topicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          findMany: {
            args: Prisma.topicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>[]
          }
          create: {
            args: Prisma.topicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          createMany: {
            args: Prisma.topicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.topicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>[]
          }
          delete: {
            args: Prisma.topicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          update: {
            args: Prisma.topicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          deleteMany: {
            args: Prisma.topicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.topicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.topicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicsPayload>
          }
          aggregate: {
            args: Prisma.TopicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopics>
          }
          groupBy: {
            args: Prisma.topicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.topicsCountArgs<ExtArgs>
            result: $Utils.Optional<TopicsCountAggregateOutputType> | number
          }
        }
      }
      user_profiles: {
        payload: Prisma.$user_profilesPayload<ExtArgs>
        fields: Prisma.user_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findFirst: {
            args: Prisma.user_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findMany: {
            args: Prisma.user_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          create: {
            args: Prisma.user_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          createMany: {
            args: Prisma.user_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          delete: {
            args: Prisma.user_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          update: {
            args: Prisma.user_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          deleteMany: {
            args: Prisma.user_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          aggregate: {
            args: Prisma.User_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_profiles>
          }
          groupBy: {
            args: Prisma.user_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<User_profilesCountAggregateOutputType> | number
          }
        }
      }
      user_tags: {
        payload: Prisma.$user_tagsPayload<ExtArgs>
        fields: Prisma.user_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          findFirst: {
            args: Prisma.user_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          findMany: {
            args: Prisma.user_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>[]
          }
          create: {
            args: Prisma.user_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          createMany: {
            args: Prisma.user_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>[]
          }
          delete: {
            args: Prisma.user_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          update: {
            args: Prisma.user_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          deleteMany: {
            args: Prisma.user_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tagsPayload>
          }
          aggregate: {
            args: Prisma.User_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tags>
          }
          groupBy: {
            args: Prisma.user_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<User_tagsCountAggregateOutputType> | number
          }
        }
      }
      virtual_profiles: {
        payload: Prisma.$virtual_profilesPayload<ExtArgs>
        fields: Prisma.virtual_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.virtual_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.virtual_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          findFirst: {
            args: Prisma.virtual_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.virtual_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          findMany: {
            args: Prisma.virtual_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>[]
          }
          create: {
            args: Prisma.virtual_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          createMany: {
            args: Prisma.virtual_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.virtual_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>[]
          }
          delete: {
            args: Prisma.virtual_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          update: {
            args: Prisma.virtual_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          deleteMany: {
            args: Prisma.virtual_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.virtual_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.virtual_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$virtual_profilesPayload>
          }
          aggregate: {
            args: Prisma.Virtual_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtual_profiles>
          }
          groupBy: {
            args: Prisma.virtual_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Virtual_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.virtual_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<Virtual_profilesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookmarksCountOutputType
   */

  export type BookmarksCountOutputType = {
    publications: number
    user_profiles: number
  }

  export type BookmarksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publications?: boolean | BookmarksCountOutputTypeCountPublicationsArgs
    user_profiles?: boolean | BookmarksCountOutputTypeCountUser_profilesArgs
  }

  // Custom InputTypes
  /**
   * BookmarksCountOutputType without action
   */
  export type BookmarksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksCountOutputType
     */
    select?: BookmarksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookmarksCountOutputType without action
   */
  export type BookmarksCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicationsWhereInput
  }

  /**
   * BookmarksCountOutputType without action
   */
  export type BookmarksCountOutputTypeCountUser_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
  }


  /**
   * Count Type Community_profilesCountOutputType
   */

  export type Community_profilesCountOutputType = {
    topics: number
  }

  export type Community_profilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | Community_profilesCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * Community_profilesCountOutputType without action
   */
  export type Community_profilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community_profilesCountOutputType
     */
    select?: Community_profilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Community_profilesCountOutputType without action
   */
  export type Community_profilesCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topicsWhereInput
  }


  /**
   * Count Type PublicationsCountOutputType
   */

  export type PublicationsCountOutputType = {
    user_profiles_user_profiles_admin_publication_idTopublications: number
    user_profiles_user_profiles_editors_publication_idTopublications: number
  }

  export type PublicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_profiles_user_profiles_admin_publication_idTopublications?: boolean | PublicationsCountOutputTypeCountUser_profiles_user_profiles_admin_publication_idTopublicationsArgs
    user_profiles_user_profiles_editors_publication_idTopublications?: boolean | PublicationsCountOutputTypeCountUser_profiles_user_profiles_editors_publication_idTopublicationsArgs
  }

  // Custom InputTypes
  /**
   * PublicationsCountOutputType without action
   */
  export type PublicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationsCountOutputType
     */
    select?: PublicationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicationsCountOutputType without action
   */
  export type PublicationsCountOutputTypeCountUser_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
  }

  /**
   * PublicationsCountOutputType without action
   */
  export type PublicationsCountOutputTypeCountUser_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
  }


  /**
   * Count Type User_profilesCountOutputType
   */

  export type User_profilesCountOutputType = {
    user_tags: number
  }

  export type User_profilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_tags?: boolean | User_profilesCountOutputTypeCountUser_tagsArgs
  }

  // Custom InputTypes
  /**
   * User_profilesCountOutputType without action
   */
  export type User_profilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_profilesCountOutputType
     */
    select?: User_profilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_profilesCountOutputType without action
   */
  export type User_profilesCountOutputTypeCountUser_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tagsWhereInput
  }


  /**
   * Count Type Virtual_profilesCountOutputType
   */

  export type Virtual_profilesCountOutputType = {
    community_profiles: number
    user_profiles: number
  }

  export type Virtual_profilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_profiles?: boolean | Virtual_profilesCountOutputTypeCountCommunity_profilesArgs
    user_profiles?: boolean | Virtual_profilesCountOutputTypeCountUser_profilesArgs
  }

  // Custom InputTypes
  /**
   * Virtual_profilesCountOutputType without action
   */
  export type Virtual_profilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Virtual_profilesCountOutputType
     */
    select?: Virtual_profilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Virtual_profilesCountOutputType without action
   */
  export type Virtual_profilesCountOutputTypeCountCommunity_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_profilesWhereInput
  }

  /**
   * Virtual_profilesCountOutputType without action
   */
  export type Virtual_profilesCountOutputTypeCountUser_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model blockeds
   */

  export type AggregateBlockeds = {
    _count: BlockedsCountAggregateOutputType | null
    _avg: BlockedsAvgAggregateOutputType | null
    _sum: BlockedsSumAggregateOutputType | null
    _min: BlockedsMinAggregateOutputType | null
    _max: BlockedsMaxAggregateOutputType | null
  }

  export type BlockedsAvgAggregateOutputType = {
    id: number | null
    profile_blocked_id: number | null
    profile_blocking_id: number | null
  }

  export type BlockedsSumAggregateOutputType = {
    id: bigint | null
    profile_blocked_id: bigint | null
    profile_blocking_id: bigint | null
  }

  export type BlockedsMinAggregateOutputType = {
    created_at: string | null
    id: bigint | null
    profile_blocked_id: bigint | null
    profile_blocked_type: string | null
    profile_blocking_id: bigint | null
    profile_blocking_type: string | null
  }

  export type BlockedsMaxAggregateOutputType = {
    created_at: string | null
    id: bigint | null
    profile_blocked_id: bigint | null
    profile_blocked_type: string | null
    profile_blocking_id: bigint | null
    profile_blocking_type: string | null
  }

  export type BlockedsCountAggregateOutputType = {
    created_at: number
    id: number
    profile_blocked_id: number
    profile_blocked_type: number
    profile_blocking_id: number
    profile_blocking_type: number
    _all: number
  }


  export type BlockedsAvgAggregateInputType = {
    id?: true
    profile_blocked_id?: true
    profile_blocking_id?: true
  }

  export type BlockedsSumAggregateInputType = {
    id?: true
    profile_blocked_id?: true
    profile_blocking_id?: true
  }

  export type BlockedsMinAggregateInputType = {
    created_at?: true
    id?: true
    profile_blocked_id?: true
    profile_blocked_type?: true
    profile_blocking_id?: true
    profile_blocking_type?: true
  }

  export type BlockedsMaxAggregateInputType = {
    created_at?: true
    id?: true
    profile_blocked_id?: true
    profile_blocked_type?: true
    profile_blocking_id?: true
    profile_blocking_type?: true
  }

  export type BlockedsCountAggregateInputType = {
    created_at?: true
    id?: true
    profile_blocked_id?: true
    profile_blocked_type?: true
    profile_blocking_id?: true
    profile_blocking_type?: true
    _all?: true
  }

  export type BlockedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blockeds to aggregate.
     */
    where?: blockedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockeds to fetch.
     */
    orderBy?: blockedsOrderByWithRelationInput | blockedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blockedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blockeds
    **/
    _count?: true | BlockedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockedsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockedsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedsMaxAggregateInputType
  }

  export type GetBlockedsAggregateType<T extends BlockedsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockeds[P]>
      : GetScalarType<T[P], AggregateBlockeds[P]>
  }




  export type blockedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockedsWhereInput
    orderBy?: blockedsOrderByWithAggregationInput | blockedsOrderByWithAggregationInput[]
    by: BlockedsScalarFieldEnum[] | BlockedsScalarFieldEnum
    having?: blockedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedsCountAggregateInputType | true
    _avg?: BlockedsAvgAggregateInputType
    _sum?: BlockedsSumAggregateInputType
    _min?: BlockedsMinAggregateInputType
    _max?: BlockedsMaxAggregateInputType
  }

  export type BlockedsGroupByOutputType = {
    created_at: string | null
    id: bigint
    profile_blocked_id: bigint | null
    profile_blocked_type: string | null
    profile_blocking_id: bigint | null
    profile_blocking_type: string | null
    _count: BlockedsCountAggregateOutputType | null
    _avg: BlockedsAvgAggregateOutputType | null
    _sum: BlockedsSumAggregateOutputType | null
    _min: BlockedsMinAggregateOutputType | null
    _max: BlockedsMaxAggregateOutputType | null
  }

  type GetBlockedsGroupByPayload<T extends blockedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedsGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedsGroupByOutputType[P]>
        }
      >
    >


  export type blockedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    id?: boolean
    profile_blocked_id?: boolean
    profile_blocked_type?: boolean
    profile_blocking_id?: boolean
    profile_blocking_type?: boolean
  }, ExtArgs["result"]["blockeds"]>

  export type blockedsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    id?: boolean
    profile_blocked_id?: boolean
    profile_blocked_type?: boolean
    profile_blocking_id?: boolean
    profile_blocking_type?: boolean
  }, ExtArgs["result"]["blockeds"]>

  export type blockedsSelectScalar = {
    created_at?: boolean
    id?: boolean
    profile_blocked_id?: boolean
    profile_blocked_type?: boolean
    profile_blocking_id?: boolean
    profile_blocking_type?: boolean
  }


  export type $blockedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blockeds"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created_at: string | null
      id: bigint
      profile_blocked_id: bigint | null
      profile_blocked_type: string | null
      profile_blocking_id: bigint | null
      profile_blocking_type: string | null
    }, ExtArgs["result"]["blockeds"]>
    composites: {}
  }

  type blockedsGetPayload<S extends boolean | null | undefined | blockedsDefaultArgs> = $Result.GetResult<Prisma.$blockedsPayload, S>

  type blockedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<blockedsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockedsCountAggregateInputType | true
    }

  export interface blockedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blockeds'], meta: { name: 'blockeds' } }
    /**
     * Find zero or one Blockeds that matches the filter.
     * @param {blockedsFindUniqueArgs} args - Arguments to find a Blockeds
     * @example
     * // Get one Blockeds
     * const blockeds = await prisma.blockeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blockedsFindUniqueArgs>(args: SelectSubset<T, blockedsFindUniqueArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Blockeds that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {blockedsFindUniqueOrThrowArgs} args - Arguments to find a Blockeds
     * @example
     * // Get one Blockeds
     * const blockeds = await prisma.blockeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blockedsFindUniqueOrThrowArgs>(args: SelectSubset<T, blockedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Blockeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsFindFirstArgs} args - Arguments to find a Blockeds
     * @example
     * // Get one Blockeds
     * const blockeds = await prisma.blockeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blockedsFindFirstArgs>(args?: SelectSubset<T, blockedsFindFirstArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Blockeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsFindFirstOrThrowArgs} args - Arguments to find a Blockeds
     * @example
     * // Get one Blockeds
     * const blockeds = await prisma.blockeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blockedsFindFirstOrThrowArgs>(args?: SelectSubset<T, blockedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Blockeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blockeds
     * const blockeds = await prisma.blockeds.findMany()
     * 
     * // Get first 10 Blockeds
     * const blockeds = await prisma.blockeds.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const blockedsWithCreated_atOnly = await prisma.blockeds.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends blockedsFindManyArgs>(args?: SelectSubset<T, blockedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Blockeds.
     * @param {blockedsCreateArgs} args - Arguments to create a Blockeds.
     * @example
     * // Create one Blockeds
     * const Blockeds = await prisma.blockeds.create({
     *   data: {
     *     // ... data to create a Blockeds
     *   }
     * })
     * 
     */
    create<T extends blockedsCreateArgs>(args: SelectSubset<T, blockedsCreateArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Blockeds.
     * @param {blockedsCreateManyArgs} args - Arguments to create many Blockeds.
     * @example
     * // Create many Blockeds
     * const blockeds = await prisma.blockeds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blockedsCreateManyArgs>(args?: SelectSubset<T, blockedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blockeds and returns the data saved in the database.
     * @param {blockedsCreateManyAndReturnArgs} args - Arguments to create many Blockeds.
     * @example
     * // Create many Blockeds
     * const blockeds = await prisma.blockeds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blockeds and only return the `created_at`
     * const blockedsWithCreated_atOnly = await prisma.blockeds.createManyAndReturn({ 
     *   select: { created_at: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blockedsCreateManyAndReturnArgs>(args?: SelectSubset<T, blockedsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Blockeds.
     * @param {blockedsDeleteArgs} args - Arguments to delete one Blockeds.
     * @example
     * // Delete one Blockeds
     * const Blockeds = await prisma.blockeds.delete({
     *   where: {
     *     // ... filter to delete one Blockeds
     *   }
     * })
     * 
     */
    delete<T extends blockedsDeleteArgs>(args: SelectSubset<T, blockedsDeleteArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Blockeds.
     * @param {blockedsUpdateArgs} args - Arguments to update one Blockeds.
     * @example
     * // Update one Blockeds
     * const blockeds = await prisma.blockeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blockedsUpdateArgs>(args: SelectSubset<T, blockedsUpdateArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Blockeds.
     * @param {blockedsDeleteManyArgs} args - Arguments to filter Blockeds to delete.
     * @example
     * // Delete a few Blockeds
     * const { count } = await prisma.blockeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blockedsDeleteManyArgs>(args?: SelectSubset<T, blockedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blockeds
     * const blockeds = await prisma.blockeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blockedsUpdateManyArgs>(args: SelectSubset<T, blockedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blockeds.
     * @param {blockedsUpsertArgs} args - Arguments to update or create a Blockeds.
     * @example
     * // Update or create a Blockeds
     * const blockeds = await prisma.blockeds.upsert({
     *   create: {
     *     // ... data to create a Blockeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blockeds we want to update
     *   }
     * })
     */
    upsert<T extends blockedsUpsertArgs>(args: SelectSubset<T, blockedsUpsertArgs<ExtArgs>>): Prisma__blockedsClient<$Result.GetResult<Prisma.$blockedsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsCountArgs} args - Arguments to filter Blockeds to count.
     * @example
     * // Count the number of Blockeds
     * const count = await prisma.blockeds.count({
     *   where: {
     *     // ... the filter for the Blockeds we want to count
     *   }
     * })
    **/
    count<T extends blockedsCountArgs>(
      args?: Subset<T, blockedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedsAggregateArgs>(args: Subset<T, BlockedsAggregateArgs>): Prisma.PrismaPromise<GetBlockedsAggregateType<T>>

    /**
     * Group by Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blockedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blockedsGroupByArgs['orderBy'] }
        : { orderBy?: blockedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blockedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blockeds model
   */
  readonly fields: blockedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blockeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blockedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blockeds model
   */ 
  interface blockedsFieldRefs {
    readonly created_at: FieldRef<"blockeds", 'String'>
    readonly id: FieldRef<"blockeds", 'BigInt'>
    readonly profile_blocked_id: FieldRef<"blockeds", 'BigInt'>
    readonly profile_blocked_type: FieldRef<"blockeds", 'String'>
    readonly profile_blocking_id: FieldRef<"blockeds", 'BigInt'>
    readonly profile_blocking_type: FieldRef<"blockeds", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blockeds findUnique
   */
  export type blockedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter, which blockeds to fetch.
     */
    where: blockedsWhereUniqueInput
  }

  /**
   * blockeds findUniqueOrThrow
   */
  export type blockedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter, which blockeds to fetch.
     */
    where: blockedsWhereUniqueInput
  }

  /**
   * blockeds findFirst
   */
  export type blockedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter, which blockeds to fetch.
     */
    where?: blockedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockeds to fetch.
     */
    orderBy?: blockedsOrderByWithRelationInput | blockedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockeds.
     */
    cursor?: blockedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockeds.
     */
    distinct?: BlockedsScalarFieldEnum | BlockedsScalarFieldEnum[]
  }

  /**
   * blockeds findFirstOrThrow
   */
  export type blockedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter, which blockeds to fetch.
     */
    where?: blockedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockeds to fetch.
     */
    orderBy?: blockedsOrderByWithRelationInput | blockedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockeds.
     */
    cursor?: blockedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockeds.
     */
    distinct?: BlockedsScalarFieldEnum | BlockedsScalarFieldEnum[]
  }

  /**
   * blockeds findMany
   */
  export type blockedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter, which blockeds to fetch.
     */
    where?: blockedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockeds to fetch.
     */
    orderBy?: blockedsOrderByWithRelationInput | blockedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blockeds.
     */
    cursor?: blockedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockeds.
     */
    skip?: number
    distinct?: BlockedsScalarFieldEnum | BlockedsScalarFieldEnum[]
  }

  /**
   * blockeds create
   */
  export type blockedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * The data needed to create a blockeds.
     */
    data?: XOR<blockedsCreateInput, blockedsUncheckedCreateInput>
  }

  /**
   * blockeds createMany
   */
  export type blockedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blockeds.
     */
    data: blockedsCreateManyInput | blockedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blockeds createManyAndReturn
   */
  export type blockedsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many blockeds.
     */
    data: blockedsCreateManyInput | blockedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blockeds update
   */
  export type blockedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * The data needed to update a blockeds.
     */
    data: XOR<blockedsUpdateInput, blockedsUncheckedUpdateInput>
    /**
     * Choose, which blockeds to update.
     */
    where: blockedsWhereUniqueInput
  }

  /**
   * blockeds updateMany
   */
  export type blockedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blockeds.
     */
    data: XOR<blockedsUpdateManyMutationInput, blockedsUncheckedUpdateManyInput>
    /**
     * Filter which blockeds to update
     */
    where?: blockedsWhereInput
  }

  /**
   * blockeds upsert
   */
  export type blockedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * The filter to search for the blockeds to update in case it exists.
     */
    where: blockedsWhereUniqueInput
    /**
     * In case the blockeds found by the `where` argument doesn't exist, create a new blockeds with this data.
     */
    create: XOR<blockedsCreateInput, blockedsUncheckedCreateInput>
    /**
     * In case the blockeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blockedsUpdateInput, blockedsUncheckedUpdateInput>
  }

  /**
   * blockeds delete
   */
  export type blockedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
    /**
     * Filter which blockeds to delete.
     */
    where: blockedsWhereUniqueInput
  }

  /**
   * blockeds deleteMany
   */
  export type blockedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blockeds to delete
     */
    where?: blockedsWhereInput
  }

  /**
   * blockeds without action
   */
  export type blockedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockeds
     */
    select?: blockedsSelect<ExtArgs> | null
  }


  /**
   * Model bookmarks
   */

  export type AggregateBookmarks = {
    _count: BookmarksCountAggregateOutputType | null
    _avg: BookmarksAvgAggregateOutputType | null
    _sum: BookmarksSumAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  export type BookmarksAvgAggregateOutputType = {
    id: number | null
  }

  export type BookmarksSumAggregateOutputType = {
    id: bigint | null
  }

  export type BookmarksMinAggregateOutputType = {
    id: bigint | null
  }

  export type BookmarksMaxAggregateOutputType = {
    id: bigint | null
  }

  export type BookmarksCountAggregateOutputType = {
    id: number
    post_ids: number
    _all: number
  }


  export type BookmarksAvgAggregateInputType = {
    id?: true
  }

  export type BookmarksSumAggregateInputType = {
    id?: true
  }

  export type BookmarksMinAggregateInputType = {
    id?: true
  }

  export type BookmarksMaxAggregateInputType = {
    id?: true
  }

  export type BookmarksCountAggregateInputType = {
    id?: true
    post_ids?: true
    _all?: true
  }

  export type BookmarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookmarks to aggregate.
     */
    where?: bookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarksOrderByWithRelationInput | bookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookmarks
    **/
    _count?: true | BookmarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarksMaxAggregateInputType
  }

  export type GetBookmarksAggregateType<T extends BookmarksAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarks[P]>
      : GetScalarType<T[P], AggregateBookmarks[P]>
  }




  export type bookmarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookmarksWhereInput
    orderBy?: bookmarksOrderByWithAggregationInput | bookmarksOrderByWithAggregationInput[]
    by: BookmarksScalarFieldEnum[] | BookmarksScalarFieldEnum
    having?: bookmarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarksCountAggregateInputType | true
    _avg?: BookmarksAvgAggregateInputType
    _sum?: BookmarksSumAggregateInputType
    _min?: BookmarksMinAggregateInputType
    _max?: BookmarksMaxAggregateInputType
  }

  export type BookmarksGroupByOutputType = {
    id: bigint
    post_ids: string[]
    _count: BookmarksCountAggregateOutputType | null
    _avg: BookmarksAvgAggregateOutputType | null
    _sum: BookmarksSumAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  type GetBookmarksGroupByPayload<T extends bookmarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
        }
      >
    >


  export type bookmarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_ids?: boolean
    publications?: boolean | bookmarks$publicationsArgs<ExtArgs>
    user_profiles?: boolean | bookmarks$user_profilesArgs<ExtArgs>
    _count?: boolean | BookmarksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type bookmarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_ids?: boolean
  }, ExtArgs["result"]["bookmarks"]>

  export type bookmarksSelectScalar = {
    id?: boolean
    post_ids?: boolean
  }

  export type bookmarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publications?: boolean | bookmarks$publicationsArgs<ExtArgs>
    user_profiles?: boolean | bookmarks$user_profilesArgs<ExtArgs>
    _count?: boolean | BookmarksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookmarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $bookmarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookmarks"
    objects: {
      publications: Prisma.$publicationsPayload<ExtArgs>[]
      user_profiles: Prisma.$user_profilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      post_ids: string[]
    }, ExtArgs["result"]["bookmarks"]>
    composites: {}
  }

  type bookmarksGetPayload<S extends boolean | null | undefined | bookmarksDefaultArgs> = $Result.GetResult<Prisma.$bookmarksPayload, S>

  type bookmarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bookmarksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarksCountAggregateInputType | true
    }

  export interface bookmarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookmarks'], meta: { name: 'bookmarks' } }
    /**
     * Find zero or one Bookmarks that matches the filter.
     * @param {bookmarksFindUniqueArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookmarksFindUniqueArgs>(args: SelectSubset<T, bookmarksFindUniqueArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bookmarks that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bookmarksFindUniqueOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookmarksFindUniqueOrThrowArgs>(args: SelectSubset<T, bookmarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksFindFirstArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookmarksFindFirstArgs>(args?: SelectSubset<T, bookmarksFindFirstArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bookmarks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksFindFirstOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookmarksFindFirstOrThrowArgs>(args?: SelectSubset<T, bookmarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarksWithIdOnly = await prisma.bookmarks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookmarksFindManyArgs>(args?: SelectSubset<T, bookmarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bookmarks.
     * @param {bookmarksCreateArgs} args - Arguments to create a Bookmarks.
     * @example
     * // Create one Bookmarks
     * const Bookmarks = await prisma.bookmarks.create({
     *   data: {
     *     // ... data to create a Bookmarks
     *   }
     * })
     * 
     */
    create<T extends bookmarksCreateArgs>(args: SelectSubset<T, bookmarksCreateArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookmarks.
     * @param {bookmarksCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookmarksCreateManyArgs>(args?: SelectSubset<T, bookmarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {bookmarksCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarksWithIdOnly = await prisma.bookmarks.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookmarksCreateManyAndReturnArgs>(args?: SelectSubset<T, bookmarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bookmarks.
     * @param {bookmarksDeleteArgs} args - Arguments to delete one Bookmarks.
     * @example
     * // Delete one Bookmarks
     * const Bookmarks = await prisma.bookmarks.delete({
     *   where: {
     *     // ... filter to delete one Bookmarks
     *   }
     * })
     * 
     */
    delete<T extends bookmarksDeleteArgs>(args: SelectSubset<T, bookmarksDeleteArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bookmarks.
     * @param {bookmarksUpdateArgs} args - Arguments to update one Bookmarks.
     * @example
     * // Update one Bookmarks
     * const bookmarks = await prisma.bookmarks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookmarksUpdateArgs>(args: SelectSubset<T, bookmarksUpdateArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {bookmarksDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmarks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookmarksDeleteManyArgs>(args?: SelectSubset<T, bookmarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmarks = await prisma.bookmarks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookmarksUpdateManyArgs>(args: SelectSubset<T, bookmarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmarks.
     * @param {bookmarksUpsertArgs} args - Arguments to update or create a Bookmarks.
     * @example
     * // Update or create a Bookmarks
     * const bookmarks = await prisma.bookmarks.upsert({
     *   create: {
     *     // ... data to create a Bookmarks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmarks we want to update
     *   }
     * })
     */
    upsert<T extends bookmarksUpsertArgs>(args: SelectSubset<T, bookmarksUpsertArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmarks.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends bookmarksCountArgs>(
      args?: Subset<T, bookmarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarksAggregateArgs>(args: Subset<T, BookmarksAggregateArgs>): Prisma.PrismaPromise<GetBookmarksAggregateType<T>>

    /**
     * Group by Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookmarksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookmarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookmarksGroupByArgs['orderBy'] }
        : { orderBy?: bookmarksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookmarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookmarks model
   */
  readonly fields: bookmarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookmarks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookmarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publications<T extends bookmarks$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, bookmarks$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findMany"> | Null>
    user_profiles<T extends bookmarks$user_profilesArgs<ExtArgs> = {}>(args?: Subset<T, bookmarks$user_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookmarks model
   */ 
  interface bookmarksFieldRefs {
    readonly id: FieldRef<"bookmarks", 'BigInt'>
    readonly post_ids: FieldRef<"bookmarks", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * bookmarks findUnique
   */
  export type bookmarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where: bookmarksWhereUniqueInput
  }

  /**
   * bookmarks findUniqueOrThrow
   */
  export type bookmarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where: bookmarksWhereUniqueInput
  }

  /**
   * bookmarks findFirst
   */
  export type bookmarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where?: bookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarksOrderByWithRelationInput | bookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookmarks.
     */
    cursor?: bookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * bookmarks findFirstOrThrow
   */
  export type bookmarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where?: bookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarksOrderByWithRelationInput | bookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookmarks.
     */
    cursor?: bookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * bookmarks findMany
   */
  export type bookmarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter, which bookmarks to fetch.
     */
    where?: bookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookmarks to fetch.
     */
    orderBy?: bookmarksOrderByWithRelationInput | bookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookmarks.
     */
    cursor?: bookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookmarks.
     */
    skip?: number
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * bookmarks create
   */
  export type bookmarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * The data needed to create a bookmarks.
     */
    data?: XOR<bookmarksCreateInput, bookmarksUncheckedCreateInput>
  }

  /**
   * bookmarks createMany
   */
  export type bookmarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookmarks.
     */
    data: bookmarksCreateManyInput | bookmarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookmarks createManyAndReturn
   */
  export type bookmarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many bookmarks.
     */
    data: bookmarksCreateManyInput | bookmarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookmarks update
   */
  export type bookmarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * The data needed to update a bookmarks.
     */
    data: XOR<bookmarksUpdateInput, bookmarksUncheckedUpdateInput>
    /**
     * Choose, which bookmarks to update.
     */
    where: bookmarksWhereUniqueInput
  }

  /**
   * bookmarks updateMany
   */
  export type bookmarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookmarks.
     */
    data: XOR<bookmarksUpdateManyMutationInput, bookmarksUncheckedUpdateManyInput>
    /**
     * Filter which bookmarks to update
     */
    where?: bookmarksWhereInput
  }

  /**
   * bookmarks upsert
   */
  export type bookmarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * The filter to search for the bookmarks to update in case it exists.
     */
    where: bookmarksWhereUniqueInput
    /**
     * In case the bookmarks found by the `where` argument doesn't exist, create a new bookmarks with this data.
     */
    create: XOR<bookmarksCreateInput, bookmarksUncheckedCreateInput>
    /**
     * In case the bookmarks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookmarksUpdateInput, bookmarksUncheckedUpdateInput>
  }

  /**
   * bookmarks delete
   */
  export type bookmarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    /**
     * Filter which bookmarks to delete.
     */
    where: bookmarksWhereUniqueInput
  }

  /**
   * bookmarks deleteMany
   */
  export type bookmarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookmarks to delete
     */
    where?: bookmarksWhereInput
  }

  /**
   * bookmarks.publications
   */
  export type bookmarks$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    where?: publicationsWhereInput
    orderBy?: publicationsOrderByWithRelationInput | publicationsOrderByWithRelationInput[]
    cursor?: publicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationsScalarFieldEnum | PublicationsScalarFieldEnum[]
  }

  /**
   * bookmarks.user_profiles
   */
  export type bookmarks$user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    cursor?: user_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * bookmarks without action
   */
  export type bookmarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
  }


  /**
   * Model community_profiles
   */

  export type AggregateCommunity_profiles = {
    _count: Community_profilesCountAggregateOutputType | null
    _avg: Community_profilesAvgAggregateOutputType | null
    _sum: Community_profilesSumAggregateOutputType | null
    _min: Community_profilesMinAggregateOutputType | null
    _max: Community_profilesMaxAggregateOutputType | null
  }

  export type Community_profilesAvgAggregateOutputType = {
    followers: number | null
    id: number | null
    virtual_profile_id: number | null
  }

  export type Community_profilesSumAggregateOutputType = {
    followers: bigint | null
    id: bigint | null
    virtual_profile_id: bigint | null
  }

  export type Community_profilesMinAggregateOutputType = {
    algolia_id: string | null
    community_rules: string | null
    description: string | null
    followers: bigint | null
    id: bigint | null
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
    visible: boolean | null
  }

  export type Community_profilesMaxAggregateOutputType = {
    algolia_id: string | null
    community_rules: string | null
    description: string | null
    followers: bigint | null
    id: bigint | null
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
    visible: boolean | null
  }

  export type Community_profilesCountAggregateOutputType = {
    algolia_id: number
    community_rules: number
    description: number
    followers: number
    id: number
    name: number
    news_feed_timeline_id: number
    notification_feed_timeline_id: number
    personal_feed_timeline_id: number
    private: number
    profile_image_url: number
    virtual_profile_id: number
    visible: number
    _all: number
  }


  export type Community_profilesAvgAggregateInputType = {
    followers?: true
    id?: true
    virtual_profile_id?: true
  }

  export type Community_profilesSumAggregateInputType = {
    followers?: true
    id?: true
    virtual_profile_id?: true
  }

  export type Community_profilesMinAggregateInputType = {
    algolia_id?: true
    community_rules?: true
    description?: true
    followers?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
    visible?: true
  }

  export type Community_profilesMaxAggregateInputType = {
    algolia_id?: true
    community_rules?: true
    description?: true
    followers?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
    visible?: true
  }

  export type Community_profilesCountAggregateInputType = {
    algolia_id?: true
    community_rules?: true
    description?: true
    followers?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
    visible?: true
    _all?: true
  }

  export type Community_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_profiles to aggregate.
     */
    where?: community_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_profiles to fetch.
     */
    orderBy?: community_profilesOrderByWithRelationInput | community_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: community_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned community_profiles
    **/
    _count?: true | Community_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Community_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Community_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Community_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Community_profilesMaxAggregateInputType
  }

  export type GetCommunity_profilesAggregateType<T extends Community_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity_profiles[P]>
      : GetScalarType<T[P], AggregateCommunity_profiles[P]>
  }




  export type community_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_profilesWhereInput
    orderBy?: community_profilesOrderByWithAggregationInput | community_profilesOrderByWithAggregationInput[]
    by: Community_profilesScalarFieldEnum[] | Community_profilesScalarFieldEnum
    having?: community_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Community_profilesCountAggregateInputType | true
    _avg?: Community_profilesAvgAggregateInputType
    _sum?: Community_profilesSumAggregateInputType
    _min?: Community_profilesMinAggregateInputType
    _max?: Community_profilesMaxAggregateInputType
  }

  export type Community_profilesGroupByOutputType = {
    algolia_id: string | null
    community_rules: string | null
    description: string | null
    followers: bigint | null
    id: bigint
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
    visible: boolean | null
    _count: Community_profilesCountAggregateOutputType | null
    _avg: Community_profilesAvgAggregateOutputType | null
    _sum: Community_profilesSumAggregateOutputType | null
    _min: Community_profilesMinAggregateOutputType | null
    _max: Community_profilesMaxAggregateOutputType | null
  }

  type GetCommunity_profilesGroupByPayload<T extends community_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Community_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Community_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Community_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], Community_profilesGroupByOutputType[P]>
        }
      >
    >


  export type community_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    algolia_id?: boolean
    community_rules?: boolean
    description?: boolean
    followers?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
    visible?: boolean
    virtual_profiles?: boolean | community_profiles$virtual_profilesArgs<ExtArgs>
    topics?: boolean | community_profiles$topicsArgs<ExtArgs>
    _count?: boolean | Community_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_profiles"]>

  export type community_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    algolia_id?: boolean
    community_rules?: boolean
    description?: boolean
    followers?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
    visible?: boolean
    virtual_profiles?: boolean | community_profiles$virtual_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["community_profiles"]>

  export type community_profilesSelectScalar = {
    algolia_id?: boolean
    community_rules?: boolean
    description?: boolean
    followers?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
    visible?: boolean
  }

  export type community_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    virtual_profiles?: boolean | community_profiles$virtual_profilesArgs<ExtArgs>
    topics?: boolean | community_profiles$topicsArgs<ExtArgs>
    _count?: boolean | Community_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type community_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    virtual_profiles?: boolean | community_profiles$virtual_profilesArgs<ExtArgs>
  }

  export type $community_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "community_profiles"
    objects: {
      virtual_profiles: Prisma.$virtual_profilesPayload<ExtArgs> | null
      topics: Prisma.$topicsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      algolia_id: string | null
      community_rules: string | null
      description: string | null
      followers: bigint | null
      id: bigint
      name: string | null
      news_feed_timeline_id: string | null
      notification_feed_timeline_id: string | null
      personal_feed_timeline_id: string | null
      private: boolean | null
      profile_image_url: string | null
      virtual_profile_id: bigint | null
      visible: boolean | null
    }, ExtArgs["result"]["community_profiles"]>
    composites: {}
  }

  type community_profilesGetPayload<S extends boolean | null | undefined | community_profilesDefaultArgs> = $Result.GetResult<Prisma.$community_profilesPayload, S>

  type community_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<community_profilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Community_profilesCountAggregateInputType | true
    }

  export interface community_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['community_profiles'], meta: { name: 'community_profiles' } }
    /**
     * Find zero or one Community_profiles that matches the filter.
     * @param {community_profilesFindUniqueArgs} args - Arguments to find a Community_profiles
     * @example
     * // Get one Community_profiles
     * const community_profiles = await prisma.community_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends community_profilesFindUniqueArgs>(args: SelectSubset<T, community_profilesFindUniqueArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Community_profiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {community_profilesFindUniqueOrThrowArgs} args - Arguments to find a Community_profiles
     * @example
     * // Get one Community_profiles
     * const community_profiles = await prisma.community_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends community_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, community_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Community_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesFindFirstArgs} args - Arguments to find a Community_profiles
     * @example
     * // Get one Community_profiles
     * const community_profiles = await prisma.community_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends community_profilesFindFirstArgs>(args?: SelectSubset<T, community_profilesFindFirstArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Community_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesFindFirstOrThrowArgs} args - Arguments to find a Community_profiles
     * @example
     * // Get one Community_profiles
     * const community_profiles = await prisma.community_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends community_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, community_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Community_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Community_profiles
     * const community_profiles = await prisma.community_profiles.findMany()
     * 
     * // Get first 10 Community_profiles
     * const community_profiles = await prisma.community_profiles.findMany({ take: 10 })
     * 
     * // Only select the `algolia_id`
     * const community_profilesWithAlgolia_idOnly = await prisma.community_profiles.findMany({ select: { algolia_id: true } })
     * 
     */
    findMany<T extends community_profilesFindManyArgs>(args?: SelectSubset<T, community_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Community_profiles.
     * @param {community_profilesCreateArgs} args - Arguments to create a Community_profiles.
     * @example
     * // Create one Community_profiles
     * const Community_profiles = await prisma.community_profiles.create({
     *   data: {
     *     // ... data to create a Community_profiles
     *   }
     * })
     * 
     */
    create<T extends community_profilesCreateArgs>(args: SelectSubset<T, community_profilesCreateArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Community_profiles.
     * @param {community_profilesCreateManyArgs} args - Arguments to create many Community_profiles.
     * @example
     * // Create many Community_profiles
     * const community_profiles = await prisma.community_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends community_profilesCreateManyArgs>(args?: SelectSubset<T, community_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Community_profiles and returns the data saved in the database.
     * @param {community_profilesCreateManyAndReturnArgs} args - Arguments to create many Community_profiles.
     * @example
     * // Create many Community_profiles
     * const community_profiles = await prisma.community_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Community_profiles and only return the `algolia_id`
     * const community_profilesWithAlgolia_idOnly = await prisma.community_profiles.createManyAndReturn({ 
     *   select: { algolia_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends community_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, community_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Community_profiles.
     * @param {community_profilesDeleteArgs} args - Arguments to delete one Community_profiles.
     * @example
     * // Delete one Community_profiles
     * const Community_profiles = await prisma.community_profiles.delete({
     *   where: {
     *     // ... filter to delete one Community_profiles
     *   }
     * })
     * 
     */
    delete<T extends community_profilesDeleteArgs>(args: SelectSubset<T, community_profilesDeleteArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Community_profiles.
     * @param {community_profilesUpdateArgs} args - Arguments to update one Community_profiles.
     * @example
     * // Update one Community_profiles
     * const community_profiles = await prisma.community_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends community_profilesUpdateArgs>(args: SelectSubset<T, community_profilesUpdateArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Community_profiles.
     * @param {community_profilesDeleteManyArgs} args - Arguments to filter Community_profiles to delete.
     * @example
     * // Delete a few Community_profiles
     * const { count } = await prisma.community_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends community_profilesDeleteManyArgs>(args?: SelectSubset<T, community_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Community_profiles
     * const community_profiles = await prisma.community_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends community_profilesUpdateManyArgs>(args: SelectSubset<T, community_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community_profiles.
     * @param {community_profilesUpsertArgs} args - Arguments to update or create a Community_profiles.
     * @example
     * // Update or create a Community_profiles
     * const community_profiles = await prisma.community_profiles.upsert({
     *   create: {
     *     // ... data to create a Community_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community_profiles we want to update
     *   }
     * })
     */
    upsert<T extends community_profilesUpsertArgs>(args: SelectSubset<T, community_profilesUpsertArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Community_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesCountArgs} args - Arguments to filter Community_profiles to count.
     * @example
     * // Count the number of Community_profiles
     * const count = await prisma.community_profiles.count({
     *   where: {
     *     // ... the filter for the Community_profiles we want to count
     *   }
     * })
    **/
    count<T extends community_profilesCountArgs>(
      args?: Subset<T, community_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Community_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Community_profilesAggregateArgs>(args: Subset<T, Community_profilesAggregateArgs>): Prisma.PrismaPromise<GetCommunity_profilesAggregateType<T>>

    /**
     * Group by Community_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends community_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: community_profilesGroupByArgs['orderBy'] }
        : { orderBy?: community_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, community_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunity_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the community_profiles model
   */
  readonly fields: community_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for community_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__community_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    virtual_profiles<T extends community_profiles$virtual_profilesArgs<ExtArgs> = {}>(args?: Subset<T, community_profiles$virtual_profilesArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    topics<T extends community_profiles$topicsArgs<ExtArgs> = {}>(args?: Subset<T, community_profiles$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the community_profiles model
   */ 
  interface community_profilesFieldRefs {
    readonly algolia_id: FieldRef<"community_profiles", 'String'>
    readonly community_rules: FieldRef<"community_profiles", 'String'>
    readonly description: FieldRef<"community_profiles", 'String'>
    readonly followers: FieldRef<"community_profiles", 'BigInt'>
    readonly id: FieldRef<"community_profiles", 'BigInt'>
    readonly name: FieldRef<"community_profiles", 'String'>
    readonly news_feed_timeline_id: FieldRef<"community_profiles", 'String'>
    readonly notification_feed_timeline_id: FieldRef<"community_profiles", 'String'>
    readonly personal_feed_timeline_id: FieldRef<"community_profiles", 'String'>
    readonly private: FieldRef<"community_profiles", 'Boolean'>
    readonly profile_image_url: FieldRef<"community_profiles", 'String'>
    readonly virtual_profile_id: FieldRef<"community_profiles", 'BigInt'>
    readonly visible: FieldRef<"community_profiles", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * community_profiles findUnique
   */
  export type community_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter, which community_profiles to fetch.
     */
    where: community_profilesWhereUniqueInput
  }

  /**
   * community_profiles findUniqueOrThrow
   */
  export type community_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter, which community_profiles to fetch.
     */
    where: community_profilesWhereUniqueInput
  }

  /**
   * community_profiles findFirst
   */
  export type community_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter, which community_profiles to fetch.
     */
    where?: community_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_profiles to fetch.
     */
    orderBy?: community_profilesOrderByWithRelationInput | community_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_profiles.
     */
    cursor?: community_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_profiles.
     */
    distinct?: Community_profilesScalarFieldEnum | Community_profilesScalarFieldEnum[]
  }

  /**
   * community_profiles findFirstOrThrow
   */
  export type community_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter, which community_profiles to fetch.
     */
    where?: community_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_profiles to fetch.
     */
    orderBy?: community_profilesOrderByWithRelationInput | community_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_profiles.
     */
    cursor?: community_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_profiles.
     */
    distinct?: Community_profilesScalarFieldEnum | Community_profilesScalarFieldEnum[]
  }

  /**
   * community_profiles findMany
   */
  export type community_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter, which community_profiles to fetch.
     */
    where?: community_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_profiles to fetch.
     */
    orderBy?: community_profilesOrderByWithRelationInput | community_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing community_profiles.
     */
    cursor?: community_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_profiles.
     */
    skip?: number
    distinct?: Community_profilesScalarFieldEnum | Community_profilesScalarFieldEnum[]
  }

  /**
   * community_profiles create
   */
  export type community_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a community_profiles.
     */
    data?: XOR<community_profilesCreateInput, community_profilesUncheckedCreateInput>
  }

  /**
   * community_profiles createMany
   */
  export type community_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many community_profiles.
     */
    data: community_profilesCreateManyInput | community_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * community_profiles createManyAndReturn
   */
  export type community_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many community_profiles.
     */
    data: community_profilesCreateManyInput | community_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * community_profiles update
   */
  export type community_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a community_profiles.
     */
    data: XOR<community_profilesUpdateInput, community_profilesUncheckedUpdateInput>
    /**
     * Choose, which community_profiles to update.
     */
    where: community_profilesWhereUniqueInput
  }

  /**
   * community_profiles updateMany
   */
  export type community_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update community_profiles.
     */
    data: XOR<community_profilesUpdateManyMutationInput, community_profilesUncheckedUpdateManyInput>
    /**
     * Filter which community_profiles to update
     */
    where?: community_profilesWhereInput
  }

  /**
   * community_profiles upsert
   */
  export type community_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the community_profiles to update in case it exists.
     */
    where: community_profilesWhereUniqueInput
    /**
     * In case the community_profiles found by the `where` argument doesn't exist, create a new community_profiles with this data.
     */
    create: XOR<community_profilesCreateInput, community_profilesUncheckedCreateInput>
    /**
     * In case the community_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<community_profilesUpdateInput, community_profilesUncheckedUpdateInput>
  }

  /**
   * community_profiles delete
   */
  export type community_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    /**
     * Filter which community_profiles to delete.
     */
    where: community_profilesWhereUniqueInput
  }

  /**
   * community_profiles deleteMany
   */
  export type community_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_profiles to delete
     */
    where?: community_profilesWhereInput
  }

  /**
   * community_profiles.virtual_profiles
   */
  export type community_profiles$virtual_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    where?: virtual_profilesWhereInput
  }

  /**
   * community_profiles.topics
   */
  export type community_profiles$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    where?: topicsWhereInput
    orderBy?: topicsOrderByWithRelationInput | topicsOrderByWithRelationInput[]
    cursor?: topicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * community_profiles without action
   */
  export type community_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
  }


  /**
   * Model followers
   */

  export type AggregateFollowers = {
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  export type FollowersAvgAggregateOutputType = {
    id: number | null
    profile_followed_id: number | null
    profile_following_id: number | null
  }

  export type FollowersSumAggregateOutputType = {
    id: bigint | null
    profile_followed_id: bigint | null
    profile_following_id: bigint | null
  }

  export type FollowersMinAggregateOutputType = {
    approved_at: string | null
    created_at: string | null
    id: bigint | null
    profile_followed_id: bigint | null
    profile_following_id: bigint | null
    request_approved: boolean | null
    target_follower_type: string | null
  }

  export type FollowersMaxAggregateOutputType = {
    approved_at: string | null
    created_at: string | null
    id: bigint | null
    profile_followed_id: bigint | null
    profile_following_id: bigint | null
    request_approved: boolean | null
    target_follower_type: string | null
  }

  export type FollowersCountAggregateOutputType = {
    approved_at: number
    created_at: number
    id: number
    profile_followed_id: number
    profile_following_id: number
    request_approved: number
    target_follower_type: number
    _all: number
  }


  export type FollowersAvgAggregateInputType = {
    id?: true
    profile_followed_id?: true
    profile_following_id?: true
  }

  export type FollowersSumAggregateInputType = {
    id?: true
    profile_followed_id?: true
    profile_following_id?: true
  }

  export type FollowersMinAggregateInputType = {
    approved_at?: true
    created_at?: true
    id?: true
    profile_followed_id?: true
    profile_following_id?: true
    request_approved?: true
    target_follower_type?: true
  }

  export type FollowersMaxAggregateInputType = {
    approved_at?: true
    created_at?: true
    id?: true
    profile_followed_id?: true
    profile_following_id?: true
    request_approved?: true
    target_follower_type?: true
  }

  export type FollowersCountAggregateInputType = {
    approved_at?: true
    created_at?: true
    id?: true
    profile_followed_id?: true
    profile_following_id?: true
    request_approved?: true
    target_follower_type?: true
    _all?: true
  }

  export type FollowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followers to aggregate.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned followers
    **/
    _count?: true | FollowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersMaxAggregateInputType
  }

  export type GetFollowersAggregateType<T extends FollowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowers[P]>
      : GetScalarType<T[P], AggregateFollowers[P]>
  }




  export type followersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followersWhereInput
    orderBy?: followersOrderByWithAggregationInput | followersOrderByWithAggregationInput[]
    by: FollowersScalarFieldEnum[] | FollowersScalarFieldEnum
    having?: followersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersCountAggregateInputType | true
    _avg?: FollowersAvgAggregateInputType
    _sum?: FollowersSumAggregateInputType
    _min?: FollowersMinAggregateInputType
    _max?: FollowersMaxAggregateInputType
  }

  export type FollowersGroupByOutputType = {
    approved_at: string | null
    created_at: string | null
    id: bigint
    profile_followed_id: bigint | null
    profile_following_id: bigint | null
    request_approved: boolean | null
    target_follower_type: string | null
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  type GetFollowersGroupByPayload<T extends followersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersGroupByOutputType[P]>
        }
      >
    >


  export type followersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    approved_at?: boolean
    created_at?: boolean
    id?: boolean
    profile_followed_id?: boolean
    profile_following_id?: boolean
    request_approved?: boolean
    target_follower_type?: boolean
  }, ExtArgs["result"]["followers"]>

  export type followersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    approved_at?: boolean
    created_at?: boolean
    id?: boolean
    profile_followed_id?: boolean
    profile_following_id?: boolean
    request_approved?: boolean
    target_follower_type?: boolean
  }, ExtArgs["result"]["followers"]>

  export type followersSelectScalar = {
    approved_at?: boolean
    created_at?: boolean
    id?: boolean
    profile_followed_id?: boolean
    profile_following_id?: boolean
    request_approved?: boolean
    target_follower_type?: boolean
  }


  export type $followersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "followers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      approved_at: string | null
      created_at: string | null
      id: bigint
      profile_followed_id: bigint | null
      profile_following_id: bigint | null
      request_approved: boolean | null
      target_follower_type: string | null
    }, ExtArgs["result"]["followers"]>
    composites: {}
  }

  type followersGetPayload<S extends boolean | null | undefined | followersDefaultArgs> = $Result.GetResult<Prisma.$followersPayload, S>

  type followersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<followersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowersCountAggregateInputType | true
    }

  export interface followersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['followers'], meta: { name: 'followers' } }
    /**
     * Find zero or one Followers that matches the filter.
     * @param {followersFindUniqueArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followersFindUniqueArgs>(args: SelectSubset<T, followersFindUniqueArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Followers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {followersFindUniqueOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followersFindUniqueOrThrowArgs>(args: SelectSubset<T, followersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindFirstArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followersFindFirstArgs>(args?: SelectSubset<T, followersFindFirstArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Followers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindFirstOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followersFindFirstOrThrowArgs>(args?: SelectSubset<T, followersFindFirstOrThrowArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.followers.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.followers.findMany({ take: 10 })
     * 
     * // Only select the `approved_at`
     * const followersWithApproved_atOnly = await prisma.followers.findMany({ select: { approved_at: true } })
     * 
     */
    findMany<T extends followersFindManyArgs>(args?: SelectSubset<T, followersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Followers.
     * @param {followersCreateArgs} args - Arguments to create a Followers.
     * @example
     * // Create one Followers
     * const Followers = await prisma.followers.create({
     *   data: {
     *     // ... data to create a Followers
     *   }
     * })
     * 
     */
    create<T extends followersCreateArgs>(args: SelectSubset<T, followersCreateArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Followers.
     * @param {followersCreateManyArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const followers = await prisma.followers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followersCreateManyArgs>(args?: SelectSubset<T, followersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followers and returns the data saved in the database.
     * @param {followersCreateManyAndReturnArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const followers = await prisma.followers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followers and only return the `approved_at`
     * const followersWithApproved_atOnly = await prisma.followers.createManyAndReturn({ 
     *   select: { approved_at: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends followersCreateManyAndReturnArgs>(args?: SelectSubset<T, followersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Followers.
     * @param {followersDeleteArgs} args - Arguments to delete one Followers.
     * @example
     * // Delete one Followers
     * const Followers = await prisma.followers.delete({
     *   where: {
     *     // ... filter to delete one Followers
     *   }
     * })
     * 
     */
    delete<T extends followersDeleteArgs>(args: SelectSubset<T, followersDeleteArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Followers.
     * @param {followersUpdateArgs} args - Arguments to update one Followers.
     * @example
     * // Update one Followers
     * const followers = await prisma.followers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followersUpdateArgs>(args: SelectSubset<T, followersUpdateArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Followers.
     * @param {followersDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.followers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followersDeleteManyArgs>(args?: SelectSubset<T, followersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followersUpdateManyArgs>(args: SelectSubset<T, followersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Followers.
     * @param {followersUpsertArgs} args - Arguments to update or create a Followers.
     * @example
     * // Update or create a Followers
     * const followers = await prisma.followers.upsert({
     *   create: {
     *     // ... data to create a Followers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followers we want to update
     *   }
     * })
     */
    upsert<T extends followersUpsertArgs>(args: SelectSubset<T, followersUpsertArgs<ExtArgs>>): Prisma__followersClient<$Result.GetResult<Prisma.$followersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.followers.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends followersCountArgs>(
      args?: Subset<T, followersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowersAggregateArgs>(args: Subset<T, FollowersAggregateArgs>): Prisma.PrismaPromise<GetFollowersAggregateType<T>>

    /**
     * Group by Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends followersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followersGroupByArgs['orderBy'] }
        : { orderBy?: followersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, followersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the followers model
   */
  readonly fields: followersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for followers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the followers model
   */ 
  interface followersFieldRefs {
    readonly approved_at: FieldRef<"followers", 'String'>
    readonly created_at: FieldRef<"followers", 'String'>
    readonly id: FieldRef<"followers", 'BigInt'>
    readonly profile_followed_id: FieldRef<"followers", 'BigInt'>
    readonly profile_following_id: FieldRef<"followers", 'BigInt'>
    readonly request_approved: FieldRef<"followers", 'Boolean'>
    readonly target_follower_type: FieldRef<"followers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * followers findUnique
   */
  export type followersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where: followersWhereUniqueInput
  }

  /**
   * followers findUniqueOrThrow
   */
  export type followersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where: followersWhereUniqueInput
  }

  /**
   * followers findFirst
   */
  export type followersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * followers findFirstOrThrow
   */
  export type followersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * followers findMany
   */
  export type followersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter, which followers to fetch.
     */
    where?: followersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followers to fetch.
     */
    orderBy?: followersOrderByWithRelationInput | followersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing followers.
     */
    cursor?: followersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followers.
     */
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }

  /**
   * followers create
   */
  export type followersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * The data needed to create a followers.
     */
    data?: XOR<followersCreateInput, followersUncheckedCreateInput>
  }

  /**
   * followers createMany
   */
  export type followersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many followers.
     */
    data: followersCreateManyInput | followersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * followers createManyAndReturn
   */
  export type followersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many followers.
     */
    data: followersCreateManyInput | followersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * followers update
   */
  export type followersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * The data needed to update a followers.
     */
    data: XOR<followersUpdateInput, followersUncheckedUpdateInput>
    /**
     * Choose, which followers to update.
     */
    where: followersWhereUniqueInput
  }

  /**
   * followers updateMany
   */
  export type followersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update followers.
     */
    data: XOR<followersUpdateManyMutationInput, followersUncheckedUpdateManyInput>
    /**
     * Filter which followers to update
     */
    where?: followersWhereInput
  }

  /**
   * followers upsert
   */
  export type followersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * The filter to search for the followers to update in case it exists.
     */
    where: followersWhereUniqueInput
    /**
     * In case the followers found by the `where` argument doesn't exist, create a new followers with this data.
     */
    create: XOR<followersCreateInput, followersUncheckedCreateInput>
    /**
     * In case the followers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followersUpdateInput, followersUncheckedUpdateInput>
  }

  /**
   * followers delete
   */
  export type followersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
    /**
     * Filter which followers to delete.
     */
    where: followersWhereUniqueInput
  }

  /**
   * followers deleteMany
   */
  export type followersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followers to delete
     */
    where?: followersWhereInput
  }

  /**
   * followers without action
   */
  export type followersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the followers
     */
    select?: followersSelect<ExtArgs> | null
  }


  /**
   * Model publications
   */

  export type AggregatePublications = {
    _count: PublicationsCountAggregateOutputType | null
    _avg: PublicationsAvgAggregateOutputType | null
    _sum: PublicationsSumAggregateOutputType | null
    _min: PublicationsMinAggregateOutputType | null
    _max: PublicationsMaxAggregateOutputType | null
  }

  export type PublicationsAvgAggregateOutputType = {
    bookmark_id: number | null
    id: number | null
  }

  export type PublicationsSumAggregateOutputType = {
    bookmark_id: bigint | null
    id: bigint | null
  }

  export type PublicationsMinAggregateOutputType = {
    admin_backend_platform_user_id: string | null
    bookmark_id: bigint | null
    created_at: string | null
    description: string | null
    id: bigint | null
    publication_name: string | null
    type: string | null
  }

  export type PublicationsMaxAggregateOutputType = {
    admin_backend_platform_user_id: string | null
    bookmark_id: bigint | null
    created_at: string | null
    description: string | null
    id: bigint | null
    publication_name: string | null
    type: string | null
  }

  export type PublicationsCountAggregateOutputType = {
    admin_backend_platform_user_id: number
    bookmark_id: number
    created_at: number
    description: number
    id: number
    post_ids: number
    publication_name: number
    subjects: number
    tags: number
    type: number
    _all: number
  }


  export type PublicationsAvgAggregateInputType = {
    bookmark_id?: true
    id?: true
  }

  export type PublicationsSumAggregateInputType = {
    bookmark_id?: true
    id?: true
  }

  export type PublicationsMinAggregateInputType = {
    admin_backend_platform_user_id?: true
    bookmark_id?: true
    created_at?: true
    description?: true
    id?: true
    publication_name?: true
    type?: true
  }

  export type PublicationsMaxAggregateInputType = {
    admin_backend_platform_user_id?: true
    bookmark_id?: true
    created_at?: true
    description?: true
    id?: true
    publication_name?: true
    type?: true
  }

  export type PublicationsCountAggregateInputType = {
    admin_backend_platform_user_id?: true
    bookmark_id?: true
    created_at?: true
    description?: true
    id?: true
    post_ids?: true
    publication_name?: true
    subjects?: true
    tags?: true
    type?: true
    _all?: true
  }

  export type PublicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publications to aggregate.
     */
    where?: publicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationsOrderByWithRelationInput | publicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: publicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned publications
    **/
    _count?: true | PublicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationsMaxAggregateInputType
  }

  export type GetPublicationsAggregateType<T extends PublicationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePublications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublications[P]>
      : GetScalarType<T[P], AggregatePublications[P]>
  }




  export type publicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicationsWhereInput
    orderBy?: publicationsOrderByWithAggregationInput | publicationsOrderByWithAggregationInput[]
    by: PublicationsScalarFieldEnum[] | PublicationsScalarFieldEnum
    having?: publicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationsCountAggregateInputType | true
    _avg?: PublicationsAvgAggregateInputType
    _sum?: PublicationsSumAggregateInputType
    _min?: PublicationsMinAggregateInputType
    _max?: PublicationsMaxAggregateInputType
  }

  export type PublicationsGroupByOutputType = {
    admin_backend_platform_user_id: string | null
    bookmark_id: bigint | null
    created_at: string | null
    description: string | null
    id: bigint
    post_ids: string[]
    publication_name: string | null
    subjects: string[]
    tags: string[]
    type: string | null
    _count: PublicationsCountAggregateOutputType | null
    _avg: PublicationsAvgAggregateOutputType | null
    _sum: PublicationsSumAggregateOutputType | null
    _min: PublicationsMinAggregateOutputType | null
    _max: PublicationsMaxAggregateOutputType | null
  }

  type GetPublicationsGroupByPayload<T extends publicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationsGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationsGroupByOutputType[P]>
        }
      >
    >


  export type publicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_backend_platform_user_id?: boolean
    bookmark_id?: boolean
    created_at?: boolean
    description?: boolean
    id?: boolean
    post_ids?: boolean
    publication_name?: boolean
    subjects?: boolean
    tags?: boolean
    type?: boolean
    bookmarks?: boolean | publications$bookmarksArgs<ExtArgs>
    user_profiles_user_profiles_admin_publication_idTopublications?: boolean | publications$user_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    user_profiles_user_profiles_editors_publication_idTopublications?: boolean | publications$user_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    _count?: boolean | PublicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publications"]>

  export type publicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_backend_platform_user_id?: boolean
    bookmark_id?: boolean
    created_at?: boolean
    description?: boolean
    id?: boolean
    post_ids?: boolean
    publication_name?: boolean
    subjects?: boolean
    tags?: boolean
    type?: boolean
    bookmarks?: boolean | publications$bookmarksArgs<ExtArgs>
  }, ExtArgs["result"]["publications"]>

  export type publicationsSelectScalar = {
    admin_backend_platform_user_id?: boolean
    bookmark_id?: boolean
    created_at?: boolean
    description?: boolean
    id?: boolean
    post_ids?: boolean
    publication_name?: boolean
    subjects?: boolean
    tags?: boolean
    type?: boolean
  }

  export type publicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | publications$bookmarksArgs<ExtArgs>
    user_profiles_user_profiles_admin_publication_idTopublications?: boolean | publications$user_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    user_profiles_user_profiles_editors_publication_idTopublications?: boolean | publications$user_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    _count?: boolean | PublicationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type publicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | publications$bookmarksArgs<ExtArgs>
  }

  export type $publicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "publications"
    objects: {
      bookmarks: Prisma.$bookmarksPayload<ExtArgs> | null
      user_profiles_user_profiles_admin_publication_idTopublications: Prisma.$user_profilesPayload<ExtArgs>[]
      user_profiles_user_profiles_editors_publication_idTopublications: Prisma.$user_profilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_backend_platform_user_id: string | null
      bookmark_id: bigint | null
      created_at: string | null
      description: string | null
      id: bigint
      post_ids: string[]
      publication_name: string | null
      subjects: string[]
      tags: string[]
      type: string | null
    }, ExtArgs["result"]["publications"]>
    composites: {}
  }

  type publicationsGetPayload<S extends boolean | null | undefined | publicationsDefaultArgs> = $Result.GetResult<Prisma.$publicationsPayload, S>

  type publicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<publicationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicationsCountAggregateInputType | true
    }

  export interface publicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publications'], meta: { name: 'publications' } }
    /**
     * Find zero or one Publications that matches the filter.
     * @param {publicationsFindUniqueArgs} args - Arguments to find a Publications
     * @example
     * // Get one Publications
     * const publications = await prisma.publications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends publicationsFindUniqueArgs>(args: SelectSubset<T, publicationsFindUniqueArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Publications that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {publicationsFindUniqueOrThrowArgs} args - Arguments to find a Publications
     * @example
     * // Get one Publications
     * const publications = await prisma.publications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends publicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, publicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsFindFirstArgs} args - Arguments to find a Publications
     * @example
     * // Get one Publications
     * const publications = await prisma.publications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends publicationsFindFirstArgs>(args?: SelectSubset<T, publicationsFindFirstArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Publications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsFindFirstOrThrowArgs} args - Arguments to find a Publications
     * @example
     * // Get one Publications
     * const publications = await prisma.publications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends publicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, publicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publications.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publications.findMany({ take: 10 })
     * 
     * // Only select the `admin_backend_platform_user_id`
     * const publicationsWithAdmin_backend_platform_user_idOnly = await prisma.publications.findMany({ select: { admin_backend_platform_user_id: true } })
     * 
     */
    findMany<T extends publicationsFindManyArgs>(args?: SelectSubset<T, publicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Publications.
     * @param {publicationsCreateArgs} args - Arguments to create a Publications.
     * @example
     * // Create one Publications
     * const Publications = await prisma.publications.create({
     *   data: {
     *     // ... data to create a Publications
     *   }
     * })
     * 
     */
    create<T extends publicationsCreateArgs>(args: SelectSubset<T, publicationsCreateArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Publications.
     * @param {publicationsCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publications = await prisma.publications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends publicationsCreateManyArgs>(args?: SelectSubset<T, publicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {publicationsCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publications = await prisma.publications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `admin_backend_platform_user_id`
     * const publicationsWithAdmin_backend_platform_user_idOnly = await prisma.publications.createManyAndReturn({ 
     *   select: { admin_backend_platform_user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends publicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, publicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Publications.
     * @param {publicationsDeleteArgs} args - Arguments to delete one Publications.
     * @example
     * // Delete one Publications
     * const Publications = await prisma.publications.delete({
     *   where: {
     *     // ... filter to delete one Publications
     *   }
     * })
     * 
     */
    delete<T extends publicationsDeleteArgs>(args: SelectSubset<T, publicationsDeleteArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Publications.
     * @param {publicationsUpdateArgs} args - Arguments to update one Publications.
     * @example
     * // Update one Publications
     * const publications = await prisma.publications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends publicationsUpdateArgs>(args: SelectSubset<T, publicationsUpdateArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Publications.
     * @param {publicationsDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends publicationsDeleteManyArgs>(args?: SelectSubset<T, publicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publications = await prisma.publications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends publicationsUpdateManyArgs>(args: SelectSubset<T, publicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publications.
     * @param {publicationsUpsertArgs} args - Arguments to update or create a Publications.
     * @example
     * // Update or create a Publications
     * const publications = await prisma.publications.upsert({
     *   create: {
     *     // ... data to create a Publications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publications we want to update
     *   }
     * })
     */
    upsert<T extends publicationsUpsertArgs>(args: SelectSubset<T, publicationsUpsertArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publications.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends publicationsCountArgs>(
      args?: Subset<T, publicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationsAggregateArgs>(args: Subset<T, PublicationsAggregateArgs>): Prisma.PrismaPromise<GetPublicationsAggregateType<T>>

    /**
     * Group by Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends publicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicationsGroupByArgs['orderBy'] }
        : { orderBy?: publicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, publicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the publications model
   */
  readonly fields: publicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends publications$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, publications$bookmarksArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user_profiles_user_profiles_admin_publication_idTopublications<T extends publications$user_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs> = {}>(args?: Subset<T, publications$user_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany"> | Null>
    user_profiles_user_profiles_editors_publication_idTopublications<T extends publications$user_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs> = {}>(args?: Subset<T, publications$user_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the publications model
   */ 
  interface publicationsFieldRefs {
    readonly admin_backend_platform_user_id: FieldRef<"publications", 'String'>
    readonly bookmark_id: FieldRef<"publications", 'BigInt'>
    readonly created_at: FieldRef<"publications", 'String'>
    readonly description: FieldRef<"publications", 'String'>
    readonly id: FieldRef<"publications", 'BigInt'>
    readonly post_ids: FieldRef<"publications", 'String[]'>
    readonly publication_name: FieldRef<"publications", 'String'>
    readonly subjects: FieldRef<"publications", 'String[]'>
    readonly tags: FieldRef<"publications", 'String[]'>
    readonly type: FieldRef<"publications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * publications findUnique
   */
  export type publicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where: publicationsWhereUniqueInput
  }

  /**
   * publications findUniqueOrThrow
   */
  export type publicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where: publicationsWhereUniqueInput
  }

  /**
   * publications findFirst
   */
  export type publicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationsOrderByWithRelationInput | publicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publications.
     */
    cursor?: publicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationsScalarFieldEnum | PublicationsScalarFieldEnum[]
  }

  /**
   * publications findFirstOrThrow
   */
  export type publicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationsOrderByWithRelationInput | publicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publications.
     */
    cursor?: publicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationsScalarFieldEnum | PublicationsScalarFieldEnum[]
  }

  /**
   * publications findMany
   */
  export type publicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationsOrderByWithRelationInput | publicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing publications.
     */
    cursor?: publicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    distinct?: PublicationsScalarFieldEnum | PublicationsScalarFieldEnum[]
  }

  /**
   * publications create
   */
  export type publicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a publications.
     */
    data?: XOR<publicationsCreateInput, publicationsUncheckedCreateInput>
  }

  /**
   * publications createMany
   */
  export type publicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publications.
     */
    data: publicationsCreateManyInput | publicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publications createManyAndReturn
   */
  export type publicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many publications.
     */
    data: publicationsCreateManyInput | publicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * publications update
   */
  export type publicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a publications.
     */
    data: XOR<publicationsUpdateInput, publicationsUncheckedUpdateInput>
    /**
     * Choose, which publications to update.
     */
    where: publicationsWhereUniqueInput
  }

  /**
   * publications updateMany
   */
  export type publicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publications.
     */
    data: XOR<publicationsUpdateManyMutationInput, publicationsUncheckedUpdateManyInput>
    /**
     * Filter which publications to update
     */
    where?: publicationsWhereInput
  }

  /**
   * publications upsert
   */
  export type publicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the publications to update in case it exists.
     */
    where: publicationsWhereUniqueInput
    /**
     * In case the publications found by the `where` argument doesn't exist, create a new publications with this data.
     */
    create: XOR<publicationsCreateInput, publicationsUncheckedCreateInput>
    /**
     * In case the publications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicationsUpdateInput, publicationsUncheckedUpdateInput>
  }

  /**
   * publications delete
   */
  export type publicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    /**
     * Filter which publications to delete.
     */
    where: publicationsWhereUniqueInput
  }

  /**
   * publications deleteMany
   */
  export type publicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publications to delete
     */
    where?: publicationsWhereInput
  }

  /**
   * publications.bookmarks
   */
  export type publications$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    where?: bookmarksWhereInput
  }

  /**
   * publications.user_profiles_user_profiles_admin_publication_idTopublications
   */
  export type publications$user_profiles_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    cursor?: user_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * publications.user_profiles_user_profiles_editors_publication_idTopublications
   */
  export type publications$user_profiles_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    cursor?: user_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * publications without action
   */
  export type publicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
  }


  /**
   * Model topics
   */

  export type AggregateTopics = {
    _count: TopicsCountAggregateOutputType | null
    _avg: TopicsAvgAggregateOutputType | null
    _sum: TopicsSumAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  export type TopicsAvgAggregateOutputType = {
    community_profile_id: number | null
    id: number | null
  }

  export type TopicsSumAggregateOutputType = {
    community_profile_id: bigint | null
    id: bigint | null
  }

  export type TopicsMinAggregateOutputType = {
    community_profile_id: bigint | null
    description: string | null
    id: bigint | null
    image_url: string | null
    topic_name: string | null
  }

  export type TopicsMaxAggregateOutputType = {
    community_profile_id: bigint | null
    description: string | null
    id: bigint | null
    image_url: string | null
    topic_name: string | null
  }

  export type TopicsCountAggregateOutputType = {
    community_profile_id: number
    description: number
    id: number
    image_url: number
    topic_name: number
    _all: number
  }


  export type TopicsAvgAggregateInputType = {
    community_profile_id?: true
    id?: true
  }

  export type TopicsSumAggregateInputType = {
    community_profile_id?: true
    id?: true
  }

  export type TopicsMinAggregateInputType = {
    community_profile_id?: true
    description?: true
    id?: true
    image_url?: true
    topic_name?: true
  }

  export type TopicsMaxAggregateInputType = {
    community_profile_id?: true
    description?: true
    id?: true
    image_url?: true
    topic_name?: true
  }

  export type TopicsCountAggregateInputType = {
    community_profile_id?: true
    description?: true
    id?: true
    image_url?: true
    topic_name?: true
    _all?: true
  }

  export type TopicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topics to aggregate.
     */
    where?: topicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicsOrderByWithRelationInput | topicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: topicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned topics
    **/
    _count?: true | TopicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicsMaxAggregateInputType
  }

  export type GetTopicsAggregateType<T extends TopicsAggregateArgs> = {
        [P in keyof T & keyof AggregateTopics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopics[P]>
      : GetScalarType<T[P], AggregateTopics[P]>
  }




  export type topicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topicsWhereInput
    orderBy?: topicsOrderByWithAggregationInput | topicsOrderByWithAggregationInput[]
    by: TopicsScalarFieldEnum[] | TopicsScalarFieldEnum
    having?: topicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicsCountAggregateInputType | true
    _avg?: TopicsAvgAggregateInputType
    _sum?: TopicsSumAggregateInputType
    _min?: TopicsMinAggregateInputType
    _max?: TopicsMaxAggregateInputType
  }

  export type TopicsGroupByOutputType = {
    community_profile_id: bigint | null
    description: string | null
    id: bigint
    image_url: string | null
    topic_name: string | null
    _count: TopicsCountAggregateOutputType | null
    _avg: TopicsAvgAggregateOutputType | null
    _sum: TopicsSumAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  type GetTopicsGroupByPayload<T extends topicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicsGroupByOutputType[P]>
            : GetScalarType<T[P], TopicsGroupByOutputType[P]>
        }
      >
    >


  export type topicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_profile_id?: boolean
    description?: boolean
    id?: boolean
    image_url?: boolean
    topic_name?: boolean
    community_profiles?: boolean | topics$community_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["topics"]>

  export type topicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_profile_id?: boolean
    description?: boolean
    id?: boolean
    image_url?: boolean
    topic_name?: boolean
    community_profiles?: boolean | topics$community_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["topics"]>

  export type topicsSelectScalar = {
    community_profile_id?: boolean
    description?: boolean
    id?: boolean
    image_url?: boolean
    topic_name?: boolean
  }

  export type topicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_profiles?: boolean | topics$community_profilesArgs<ExtArgs>
  }
  export type topicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_profiles?: boolean | topics$community_profilesArgs<ExtArgs>
  }

  export type $topicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "topics"
    objects: {
      community_profiles: Prisma.$community_profilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      community_profile_id: bigint | null
      description: string | null
      id: bigint
      image_url: string | null
      topic_name: string | null
    }, ExtArgs["result"]["topics"]>
    composites: {}
  }

  type topicsGetPayload<S extends boolean | null | undefined | topicsDefaultArgs> = $Result.GetResult<Prisma.$topicsPayload, S>

  type topicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<topicsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TopicsCountAggregateInputType | true
    }

  export interface topicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['topics'], meta: { name: 'topics' } }
    /**
     * Find zero or one Topics that matches the filter.
     * @param {topicsFindUniqueArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends topicsFindUniqueArgs>(args: SelectSubset<T, topicsFindUniqueArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Topics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {topicsFindUniqueOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends topicsFindUniqueOrThrowArgs>(args: SelectSubset<T, topicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsFindFirstArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends topicsFindFirstArgs>(args?: SelectSubset<T, topicsFindFirstArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Topics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsFindFirstOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends topicsFindFirstOrThrowArgs>(args?: SelectSubset<T, topicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topics.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topics.findMany({ take: 10 })
     * 
     * // Only select the `community_profile_id`
     * const topicsWithCommunity_profile_idOnly = await prisma.topics.findMany({ select: { community_profile_id: true } })
     * 
     */
    findMany<T extends topicsFindManyArgs>(args?: SelectSubset<T, topicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Topics.
     * @param {topicsCreateArgs} args - Arguments to create a Topics.
     * @example
     * // Create one Topics
     * const Topics = await prisma.topics.create({
     *   data: {
     *     // ... data to create a Topics
     *   }
     * })
     * 
     */
    create<T extends topicsCreateArgs>(args: SelectSubset<T, topicsCreateArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Topics.
     * @param {topicsCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topics = await prisma.topics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends topicsCreateManyArgs>(args?: SelectSubset<T, topicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {topicsCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topics = await prisma.topics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `community_profile_id`
     * const topicsWithCommunity_profile_idOnly = await prisma.topics.createManyAndReturn({ 
     *   select: { community_profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends topicsCreateManyAndReturnArgs>(args?: SelectSubset<T, topicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Topics.
     * @param {topicsDeleteArgs} args - Arguments to delete one Topics.
     * @example
     * // Delete one Topics
     * const Topics = await prisma.topics.delete({
     *   where: {
     *     // ... filter to delete one Topics
     *   }
     * })
     * 
     */
    delete<T extends topicsDeleteArgs>(args: SelectSubset<T, topicsDeleteArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Topics.
     * @param {topicsUpdateArgs} args - Arguments to update one Topics.
     * @example
     * // Update one Topics
     * const topics = await prisma.topics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends topicsUpdateArgs>(args: SelectSubset<T, topicsUpdateArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Topics.
     * @param {topicsDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends topicsDeleteManyArgs>(args?: SelectSubset<T, topicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topics = await prisma.topics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends topicsUpdateManyArgs>(args: SelectSubset<T, topicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topics.
     * @param {topicsUpsertArgs} args - Arguments to update or create a Topics.
     * @example
     * // Update or create a Topics
     * const topics = await prisma.topics.upsert({
     *   create: {
     *     // ... data to create a Topics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topics we want to update
     *   }
     * })
     */
    upsert<T extends topicsUpsertArgs>(args: SelectSubset<T, topicsUpsertArgs<ExtArgs>>): Prisma__topicsClient<$Result.GetResult<Prisma.$topicsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topics.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends topicsCountArgs>(
      args?: Subset<T, topicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicsAggregateArgs>(args: Subset<T, TopicsAggregateArgs>): Prisma.PrismaPromise<GetTopicsAggregateType<T>>

    /**
     * Group by Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends topicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: topicsGroupByArgs['orderBy'] }
        : { orderBy?: topicsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, topicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the topics model
   */
  readonly fields: topicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for topics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__topicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community_profiles<T extends topics$community_profilesArgs<ExtArgs> = {}>(args?: Subset<T, topics$community_profilesArgs<ExtArgs>>): Prisma__community_profilesClient<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the topics model
   */ 
  interface topicsFieldRefs {
    readonly community_profile_id: FieldRef<"topics", 'BigInt'>
    readonly description: FieldRef<"topics", 'String'>
    readonly id: FieldRef<"topics", 'BigInt'>
    readonly image_url: FieldRef<"topics", 'String'>
    readonly topic_name: FieldRef<"topics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * topics findUnique
   */
  export type topicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where: topicsWhereUniqueInput
  }

  /**
   * topics findUniqueOrThrow
   */
  export type topicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where: topicsWhereUniqueInput
  }

  /**
   * topics findFirst
   */
  export type topicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where?: topicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicsOrderByWithRelationInput | topicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * topics findFirstOrThrow
   */
  export type topicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where?: topicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicsOrderByWithRelationInput | topicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * topics findMany
   */
  export type topicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where?: topicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicsOrderByWithRelationInput | topicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing topics.
     */
    cursor?: topicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * topics create
   */
  export type topicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * The data needed to create a topics.
     */
    data?: XOR<topicsCreateInput, topicsUncheckedCreateInput>
  }

  /**
   * topics createMany
   */
  export type topicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many topics.
     */
    data: topicsCreateManyInput | topicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * topics createManyAndReturn
   */
  export type topicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many topics.
     */
    data: topicsCreateManyInput | topicsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * topics update
   */
  export type topicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * The data needed to update a topics.
     */
    data: XOR<topicsUpdateInput, topicsUncheckedUpdateInput>
    /**
     * Choose, which topics to update.
     */
    where: topicsWhereUniqueInput
  }

  /**
   * topics updateMany
   */
  export type topicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update topics.
     */
    data: XOR<topicsUpdateManyMutationInput, topicsUncheckedUpdateManyInput>
    /**
     * Filter which topics to update
     */
    where?: topicsWhereInput
  }

  /**
   * topics upsert
   */
  export type topicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * The filter to search for the topics to update in case it exists.
     */
    where: topicsWhereUniqueInput
    /**
     * In case the topics found by the `where` argument doesn't exist, create a new topics with this data.
     */
    create: XOR<topicsCreateInput, topicsUncheckedCreateInput>
    /**
     * In case the topics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<topicsUpdateInput, topicsUncheckedUpdateInput>
  }

  /**
   * topics delete
   */
  export type topicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
    /**
     * Filter which topics to delete.
     */
    where: topicsWhereUniqueInput
  }

  /**
   * topics deleteMany
   */
  export type topicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topics to delete
     */
    where?: topicsWhereInput
  }

  /**
   * topics.community_profiles
   */
  export type topics$community_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    where?: community_profilesWhereInput
  }

  /**
   * topics without action
   */
  export type topicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topics
     */
    select?: topicsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicsInclude<ExtArgs> | null
  }


  /**
   * Model user_profiles
   */

  export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  export type User_profilesAvgAggregateOutputType = {
    admin_publication_id: number | null
    bookmark_id: number | null
    editors_publication_id: number | null
    followers: number | null
    following: number | null
    id: number | null
    virtual_profile_id: number | null
  }

  export type User_profilesSumAggregateOutputType = {
    admin_publication_id: bigint | null
    bookmark_id: bigint | null
    editors_publication_id: bigint | null
    followers: bigint | null
    following: bigint | null
    id: bigint | null
    virtual_profile_id: bigint | null
  }

  export type User_profilesMinAggregateOutputType = {
    admin_publication_id: bigint | null
    algolia_id: string | null
    bookmark_id: bigint | null
    editors_publication_id: bigint | null
    followers: bigint | null
    following: bigint | null
    id: bigint | null
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
  }

  export type User_profilesMaxAggregateOutputType = {
    admin_publication_id: bigint | null
    algolia_id: string | null
    bookmark_id: bigint | null
    editors_publication_id: bigint | null
    followers: bigint | null
    following: bigint | null
    id: bigint | null
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
  }

  export type User_profilesCountAggregateOutputType = {
    admin_publication_id: number
    algolia_id: number
    bookmark_id: number
    editors_publication_id: number
    followers: number
    following: number
    id: number
    name: number
    news_feed_timeline_id: number
    notification_feed_timeline_id: number
    personal_feed_timeline_id: number
    private: number
    profile_image_url: number
    virtual_profile_id: number
    _all: number
  }


  export type User_profilesAvgAggregateInputType = {
    admin_publication_id?: true
    bookmark_id?: true
    editors_publication_id?: true
    followers?: true
    following?: true
    id?: true
    virtual_profile_id?: true
  }

  export type User_profilesSumAggregateInputType = {
    admin_publication_id?: true
    bookmark_id?: true
    editors_publication_id?: true
    followers?: true
    following?: true
    id?: true
    virtual_profile_id?: true
  }

  export type User_profilesMinAggregateInputType = {
    admin_publication_id?: true
    algolia_id?: true
    bookmark_id?: true
    editors_publication_id?: true
    followers?: true
    following?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
  }

  export type User_profilesMaxAggregateInputType = {
    admin_publication_id?: true
    algolia_id?: true
    bookmark_id?: true
    editors_publication_id?: true
    followers?: true
    following?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
  }

  export type User_profilesCountAggregateInputType = {
    admin_publication_id?: true
    algolia_id?: true
    bookmark_id?: true
    editors_publication_id?: true
    followers?: true
    following?: true
    id?: true
    name?: true
    news_feed_timeline_id?: true
    notification_feed_timeline_id?: true
    personal_feed_timeline_id?: true
    private?: true
    profile_image_url?: true
    virtual_profile_id?: true
    _all?: true
  }

  export type User_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to aggregate.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_profiles
    **/
    _count?: true | User_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_profilesMaxAggregateInputType
  }

  export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_profiles[P]>
      : GetScalarType<T[P], AggregateUser_profiles[P]>
  }




  export type user_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithAggregationInput | user_profilesOrderByWithAggregationInput[]
    by: User_profilesScalarFieldEnum[] | User_profilesScalarFieldEnum
    having?: user_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_profilesCountAggregateInputType | true
    _avg?: User_profilesAvgAggregateInputType
    _sum?: User_profilesSumAggregateInputType
    _min?: User_profilesMinAggregateInputType
    _max?: User_profilesMaxAggregateInputType
  }

  export type User_profilesGroupByOutputType = {
    admin_publication_id: bigint | null
    algolia_id: string | null
    bookmark_id: bigint | null
    editors_publication_id: bigint | null
    followers: bigint | null
    following: bigint | null
    id: bigint
    name: string | null
    news_feed_timeline_id: string | null
    notification_feed_timeline_id: string | null
    personal_feed_timeline_id: string | null
    private: boolean | null
    profile_image_url: string | null
    virtual_profile_id: bigint | null
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
        }
      >
    >


  export type user_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_publication_id?: boolean
    algolia_id?: boolean
    bookmark_id?: boolean
    editors_publication_id?: boolean
    followers?: boolean
    following?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
    publications_user_profiles_admin_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    publications_user_profiles_editors_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    bookmarks?: boolean | user_profiles$bookmarksArgs<ExtArgs>
    virtual_profiles?: boolean | user_profiles$virtual_profilesArgs<ExtArgs>
    user_tags?: boolean | user_profiles$user_tagsArgs<ExtArgs>
    _count?: boolean | User_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_publication_id?: boolean
    algolia_id?: boolean
    bookmark_id?: boolean
    editors_publication_id?: boolean
    followers?: boolean
    following?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
    publications_user_profiles_admin_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    publications_user_profiles_editors_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    bookmarks?: boolean | user_profiles$bookmarksArgs<ExtArgs>
    virtual_profiles?: boolean | user_profiles$virtual_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectScalar = {
    admin_publication_id?: boolean
    algolia_id?: boolean
    bookmark_id?: boolean
    editors_publication_id?: boolean
    followers?: boolean
    following?: boolean
    id?: boolean
    name?: boolean
    news_feed_timeline_id?: boolean
    notification_feed_timeline_id?: boolean
    personal_feed_timeline_id?: boolean
    private?: boolean
    profile_image_url?: boolean
    virtual_profile_id?: boolean
  }

  export type user_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publications_user_profiles_admin_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    publications_user_profiles_editors_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    bookmarks?: boolean | user_profiles$bookmarksArgs<ExtArgs>
    virtual_profiles?: boolean | user_profiles$virtual_profilesArgs<ExtArgs>
    user_tags?: boolean | user_profiles$user_tagsArgs<ExtArgs>
    _count?: boolean | User_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publications_user_profiles_admin_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>
    publications_user_profiles_editors_publication_idTopublications?: boolean | user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>
    bookmarks?: boolean | user_profiles$bookmarksArgs<ExtArgs>
    virtual_profiles?: boolean | user_profiles$virtual_profilesArgs<ExtArgs>
  }

  export type $user_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_profiles"
    objects: {
      publications_user_profiles_admin_publication_idTopublications: Prisma.$publicationsPayload<ExtArgs> | null
      publications_user_profiles_editors_publication_idTopublications: Prisma.$publicationsPayload<ExtArgs> | null
      bookmarks: Prisma.$bookmarksPayload<ExtArgs> | null
      virtual_profiles: Prisma.$virtual_profilesPayload<ExtArgs> | null
      user_tags: Prisma.$user_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_publication_id: bigint | null
      algolia_id: string | null
      bookmark_id: bigint | null
      editors_publication_id: bigint | null
      followers: bigint | null
      following: bigint | null
      id: bigint
      name: string | null
      news_feed_timeline_id: string | null
      notification_feed_timeline_id: string | null
      personal_feed_timeline_id: string | null
      private: boolean | null
      profile_image_url: string | null
      virtual_profile_id: bigint | null
    }, ExtArgs["result"]["user_profiles"]>
    composites: {}
  }

  type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = $Result.GetResult<Prisma.$user_profilesPayload, S>

  type user_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_profilesCountAggregateInputType | true
    }

  export interface user_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'], meta: { name: 'user_profiles' } }
    /**
     * Find zero or one User_profiles that matches the filter.
     * @param {user_profilesFindUniqueArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profilesFindUniqueArgs>(args: SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_profiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_profilesFindUniqueOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profilesFindFirstArgs>(args?: SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profiles.findMany()
     * 
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profiles.findMany({ take: 10 })
     * 
     * // Only select the `admin_publication_id`
     * const user_profilesWithAdmin_publication_idOnly = await prisma.user_profiles.findMany({ select: { admin_publication_id: true } })
     * 
     */
    findMany<T extends user_profilesFindManyArgs>(args?: SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_profiles.
     * @param {user_profilesCreateArgs} args - Arguments to create a User_profiles.
     * @example
     * // Create one User_profiles
     * const User_profiles = await prisma.user_profiles.create({
     *   data: {
     *     // ... data to create a User_profiles
     *   }
     * })
     * 
     */
    create<T extends user_profilesCreateArgs>(args: SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_profiles.
     * @param {user_profilesCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_profilesCreateManyArgs>(args?: SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profilesCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_profiles and only return the `admin_publication_id`
     * const user_profilesWithAdmin_publication_idOnly = await prisma.user_profiles.createManyAndReturn({ 
     *   select: { admin_publication_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_profiles.
     * @param {user_profilesDeleteArgs} args - Arguments to delete one User_profiles.
     * @example
     * // Delete one User_profiles
     * const User_profiles = await prisma.user_profiles.delete({
     *   where: {
     *     // ... filter to delete one User_profiles
     *   }
     * })
     * 
     */
    delete<T extends user_profilesDeleteArgs>(args: SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_profiles.
     * @param {user_profilesUpdateArgs} args - Arguments to update one User_profiles.
     * @example
     * // Update one User_profiles
     * const user_profiles = await prisma.user_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_profilesUpdateArgs>(args: SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_profiles.
     * @param {user_profilesDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_profilesUpdateManyArgs>(args: SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_profiles.
     * @param {user_profilesUpsertArgs} args - Arguments to update or create a User_profiles.
     * @example
     * // Update or create a User_profiles
     * const user_profiles = await prisma.user_profiles.upsert({
     *   create: {
     *     // ... data to create a User_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profiles we want to update
     *   }
     * })
     */
    upsert<T extends user_profilesUpsertArgs>(args: SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profiles.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profilesCountArgs>(
      args?: Subset<T, user_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_profilesAggregateArgs>(args: Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>

    /**
     * Group by User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_profilesGroupByArgs['orderBy'] }
        : { orderBy?: user_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_profiles model
   */
  readonly fields: user_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publications_user_profiles_admin_publication_idTopublications<T extends user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs> = {}>(args?: Subset<T, user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    publications_user_profiles_editors_publication_idTopublications<T extends user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs> = {}>(args?: Subset<T, user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs>>): Prisma__publicationsClient<$Result.GetResult<Prisma.$publicationsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    bookmarks<T extends user_profiles$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, user_profiles$bookmarksArgs<ExtArgs>>): Prisma__bookmarksClient<$Result.GetResult<Prisma.$bookmarksPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    virtual_profiles<T extends user_profiles$virtual_profilesArgs<ExtArgs> = {}>(args?: Subset<T, user_profiles$virtual_profilesArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user_tags<T extends user_profiles$user_tagsArgs<ExtArgs> = {}>(args?: Subset<T, user_profiles$user_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_profiles model
   */ 
  interface user_profilesFieldRefs {
    readonly admin_publication_id: FieldRef<"user_profiles", 'BigInt'>
    readonly algolia_id: FieldRef<"user_profiles", 'String'>
    readonly bookmark_id: FieldRef<"user_profiles", 'BigInt'>
    readonly editors_publication_id: FieldRef<"user_profiles", 'BigInt'>
    readonly followers: FieldRef<"user_profiles", 'BigInt'>
    readonly following: FieldRef<"user_profiles", 'BigInt'>
    readonly id: FieldRef<"user_profiles", 'BigInt'>
    readonly name: FieldRef<"user_profiles", 'String'>
    readonly news_feed_timeline_id: FieldRef<"user_profiles", 'String'>
    readonly notification_feed_timeline_id: FieldRef<"user_profiles", 'String'>
    readonly personal_feed_timeline_id: FieldRef<"user_profiles", 'String'>
    readonly private: FieldRef<"user_profiles", 'Boolean'>
    readonly profile_image_url: FieldRef<"user_profiles", 'String'>
    readonly virtual_profile_id: FieldRef<"user_profiles", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * user_profiles findUnique
   */
  export type user_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findUniqueOrThrow
   */
  export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findFirst
   */
  export type user_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findFirstOrThrow
   */
  export type user_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findMany
   */
  export type user_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles create
   */
  export type user_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_profiles.
     */
    data?: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
  }

  /**
   * user_profiles createMany
   */
  export type user_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profiles createManyAndReturn
   */
  export type user_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profiles update
   */
  export type user_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_profiles.
     */
    data: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
    /**
     * Choose, which user_profiles to update.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles updateMany
   */
  export type user_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
  }

  /**
   * user_profiles upsert
   */
  export type user_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_profiles to update in case it exists.
     */
    where: user_profilesWhereUniqueInput
    /**
     * In case the user_profiles found by the `where` argument doesn't exist, create a new user_profiles with this data.
     */
    create: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
    /**
     * In case the user_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
  }

  /**
   * user_profiles delete
   */
  export type user_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter which user_profiles to delete.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles deleteMany
   */
  export type user_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: user_profilesWhereInput
  }

  /**
   * user_profiles.publications_user_profiles_admin_publication_idTopublications
   */
  export type user_profiles$publications_user_profiles_admin_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    where?: publicationsWhereInput
  }

  /**
   * user_profiles.publications_user_profiles_editors_publication_idTopublications
   */
  export type user_profiles$publications_user_profiles_editors_publication_idTopublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publications
     */
    select?: publicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationsInclude<ExtArgs> | null
    where?: publicationsWhereInput
  }

  /**
   * user_profiles.bookmarks
   */
  export type user_profiles$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookmarks
     */
    select?: bookmarksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookmarksInclude<ExtArgs> | null
    where?: bookmarksWhereInput
  }

  /**
   * user_profiles.virtual_profiles
   */
  export type user_profiles$virtual_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    where?: virtual_profilesWhereInput
  }

  /**
   * user_profiles.user_tags
   */
  export type user_profiles$user_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    where?: user_tagsWhereInput
    orderBy?: user_tagsOrderByWithRelationInput | user_tagsOrderByWithRelationInput[]
    cursor?: user_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tagsScalarFieldEnum | User_tagsScalarFieldEnum[]
  }

  /**
   * user_profiles without action
   */
  export type user_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
  }


  /**
   * Model user_tags
   */

  export type AggregateUser_tags = {
    _count: User_tagsCountAggregateOutputType | null
    _avg: User_tagsAvgAggregateOutputType | null
    _sum: User_tagsSumAggregateOutputType | null
    _min: User_tagsMinAggregateOutputType | null
    _max: User_tagsMaxAggregateOutputType | null
  }

  export type User_tagsAvgAggregateOutputType = {
    id: number | null
    user_profile_id: number | null
  }

  export type User_tagsSumAggregateOutputType = {
    id: bigint | null
    user_profile_id: bigint | null
  }

  export type User_tagsMinAggregateOutputType = {
    description: string | null
    id: bigint | null
    tag_name: string | null
    user_profile_id: bigint | null
  }

  export type User_tagsMaxAggregateOutputType = {
    description: string | null
    id: bigint | null
    tag_name: string | null
    user_profile_id: bigint | null
  }

  export type User_tagsCountAggregateOutputType = {
    description: number
    id: number
    tag_name: number
    user_profile_id: number
    _all: number
  }


  export type User_tagsAvgAggregateInputType = {
    id?: true
    user_profile_id?: true
  }

  export type User_tagsSumAggregateInputType = {
    id?: true
    user_profile_id?: true
  }

  export type User_tagsMinAggregateInputType = {
    description?: true
    id?: true
    tag_name?: true
    user_profile_id?: true
  }

  export type User_tagsMaxAggregateInputType = {
    description?: true
    id?: true
    tag_name?: true
    user_profile_id?: true
  }

  export type User_tagsCountAggregateInputType = {
    description?: true
    id?: true
    tag_name?: true
    user_profile_id?: true
    _all?: true
  }

  export type User_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tags to aggregate.
     */
    where?: user_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tags to fetch.
     */
    orderBy?: user_tagsOrderByWithRelationInput | user_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tags
    **/
    _count?: true | User_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tagsMaxAggregateInputType
  }

  export type GetUser_tagsAggregateType<T extends User_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tags[P]>
      : GetScalarType<T[P], AggregateUser_tags[P]>
  }




  export type user_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tagsWhereInput
    orderBy?: user_tagsOrderByWithAggregationInput | user_tagsOrderByWithAggregationInput[]
    by: User_tagsScalarFieldEnum[] | User_tagsScalarFieldEnum
    having?: user_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tagsCountAggregateInputType | true
    _avg?: User_tagsAvgAggregateInputType
    _sum?: User_tagsSumAggregateInputType
    _min?: User_tagsMinAggregateInputType
    _max?: User_tagsMaxAggregateInputType
  }

  export type User_tagsGroupByOutputType = {
    description: string | null
    id: bigint
    tag_name: string | null
    user_profile_id: bigint | null
    _count: User_tagsCountAggregateOutputType | null
    _avg: User_tagsAvgAggregateOutputType | null
    _sum: User_tagsSumAggregateOutputType | null
    _min: User_tagsMinAggregateOutputType | null
    _max: User_tagsMaxAggregateOutputType | null
  }

  type GetUser_tagsGroupByPayload<T extends user_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], User_tagsGroupByOutputType[P]>
        }
      >
    >


  export type user_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean
    id?: boolean
    tag_name?: boolean
    user_profile_id?: boolean
    user_profiles?: boolean | user_tags$user_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["user_tags"]>

  export type user_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean
    id?: boolean
    tag_name?: boolean
    user_profile_id?: boolean
    user_profiles?: boolean | user_tags$user_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["user_tags"]>

  export type user_tagsSelectScalar = {
    description?: boolean
    id?: boolean
    tag_name?: boolean
    user_profile_id?: boolean
  }

  export type user_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_profiles?: boolean | user_tags$user_profilesArgs<ExtArgs>
  }
  export type user_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_profiles?: boolean | user_tags$user_profilesArgs<ExtArgs>
  }

  export type $user_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tags"
    objects: {
      user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      description: string | null
      id: bigint
      tag_name: string | null
      user_profile_id: bigint | null
    }, ExtArgs["result"]["user_tags"]>
    composites: {}
  }

  type user_tagsGetPayload<S extends boolean | null | undefined | user_tagsDefaultArgs> = $Result.GetResult<Prisma.$user_tagsPayload, S>

  type user_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_tagsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_tagsCountAggregateInputType | true
    }

  export interface user_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tags'], meta: { name: 'user_tags' } }
    /**
     * Find zero or one User_tags that matches the filter.
     * @param {user_tagsFindUniqueArgs} args - Arguments to find a User_tags
     * @example
     * // Get one User_tags
     * const user_tags = await prisma.user_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tagsFindUniqueArgs>(args: SelectSubset<T, user_tagsFindUniqueArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_tags that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_tagsFindUniqueOrThrowArgs} args - Arguments to find a User_tags
     * @example
     * // Get one User_tags
     * const user_tags = await prisma.user_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsFindFirstArgs} args - Arguments to find a User_tags
     * @example
     * // Get one User_tags
     * const user_tags = await prisma.user_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tagsFindFirstArgs>(args?: SelectSubset<T, user_tagsFindFirstArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsFindFirstOrThrowArgs} args - Arguments to find a User_tags
     * @example
     * // Get one User_tags
     * const user_tags = await prisma.user_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tags
     * const user_tags = await prisma.user_tags.findMany()
     * 
     * // Get first 10 User_tags
     * const user_tags = await prisma.user_tags.findMany({ take: 10 })
     * 
     * // Only select the `description`
     * const user_tagsWithDescriptionOnly = await prisma.user_tags.findMany({ select: { description: true } })
     * 
     */
    findMany<T extends user_tagsFindManyArgs>(args?: SelectSubset<T, user_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_tags.
     * @param {user_tagsCreateArgs} args - Arguments to create a User_tags.
     * @example
     * // Create one User_tags
     * const User_tags = await prisma.user_tags.create({
     *   data: {
     *     // ... data to create a User_tags
     *   }
     * })
     * 
     */
    create<T extends user_tagsCreateArgs>(args: SelectSubset<T, user_tagsCreateArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_tags.
     * @param {user_tagsCreateManyArgs} args - Arguments to create many User_tags.
     * @example
     * // Create many User_tags
     * const user_tags = await prisma.user_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tagsCreateManyArgs>(args?: SelectSubset<T, user_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_tags and returns the data saved in the database.
     * @param {user_tagsCreateManyAndReturnArgs} args - Arguments to create many User_tags.
     * @example
     * // Create many User_tags
     * const user_tags = await prisma.user_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_tags and only return the `description`
     * const user_tagsWithDescriptionOnly = await prisma.user_tags.createManyAndReturn({ 
     *   select: { description: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_tags.
     * @param {user_tagsDeleteArgs} args - Arguments to delete one User_tags.
     * @example
     * // Delete one User_tags
     * const User_tags = await prisma.user_tags.delete({
     *   where: {
     *     // ... filter to delete one User_tags
     *   }
     * })
     * 
     */
    delete<T extends user_tagsDeleteArgs>(args: SelectSubset<T, user_tagsDeleteArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_tags.
     * @param {user_tagsUpdateArgs} args - Arguments to update one User_tags.
     * @example
     * // Update one User_tags
     * const user_tags = await prisma.user_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tagsUpdateArgs>(args: SelectSubset<T, user_tagsUpdateArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_tags.
     * @param {user_tagsDeleteManyArgs} args - Arguments to filter User_tags to delete.
     * @example
     * // Delete a few User_tags
     * const { count } = await prisma.user_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tagsDeleteManyArgs>(args?: SelectSubset<T, user_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tags
     * const user_tags = await prisma.user_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tagsUpdateManyArgs>(args: SelectSubset<T, user_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tags.
     * @param {user_tagsUpsertArgs} args - Arguments to update or create a User_tags.
     * @example
     * // Update or create a User_tags
     * const user_tags = await prisma.user_tags.upsert({
     *   create: {
     *     // ... data to create a User_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tags we want to update
     *   }
     * })
     */
    upsert<T extends user_tagsUpsertArgs>(args: SelectSubset<T, user_tagsUpsertArgs<ExtArgs>>): Prisma__user_tagsClient<$Result.GetResult<Prisma.$user_tagsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsCountArgs} args - Arguments to filter User_tags to count.
     * @example
     * // Count the number of User_tags
     * const count = await prisma.user_tags.count({
     *   where: {
     *     // ... the filter for the User_tags we want to count
     *   }
     * })
    **/
    count<T extends user_tagsCountArgs>(
      args?: Subset<T, user_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tagsAggregateArgs>(args: Subset<T, User_tagsAggregateArgs>): Prisma.PrismaPromise<GetUser_tagsAggregateType<T>>

    /**
     * Group by User_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tagsGroupByArgs['orderBy'] }
        : { orderBy?: user_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tags model
   */
  readonly fields: user_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_profiles<T extends user_tags$user_profilesArgs<ExtArgs> = {}>(args?: Subset<T, user_tags$user_profilesArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tags model
   */ 
  interface user_tagsFieldRefs {
    readonly description: FieldRef<"user_tags", 'String'>
    readonly id: FieldRef<"user_tags", 'BigInt'>
    readonly tag_name: FieldRef<"user_tags", 'String'>
    readonly user_profile_id: FieldRef<"user_tags", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * user_tags findUnique
   */
  export type user_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter, which user_tags to fetch.
     */
    where: user_tagsWhereUniqueInput
  }

  /**
   * user_tags findUniqueOrThrow
   */
  export type user_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter, which user_tags to fetch.
     */
    where: user_tagsWhereUniqueInput
  }

  /**
   * user_tags findFirst
   */
  export type user_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter, which user_tags to fetch.
     */
    where?: user_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tags to fetch.
     */
    orderBy?: user_tagsOrderByWithRelationInput | user_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tags.
     */
    cursor?: user_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tags.
     */
    distinct?: User_tagsScalarFieldEnum | User_tagsScalarFieldEnum[]
  }

  /**
   * user_tags findFirstOrThrow
   */
  export type user_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter, which user_tags to fetch.
     */
    where?: user_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tags to fetch.
     */
    orderBy?: user_tagsOrderByWithRelationInput | user_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tags.
     */
    cursor?: user_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tags.
     */
    distinct?: User_tagsScalarFieldEnum | User_tagsScalarFieldEnum[]
  }

  /**
   * user_tags findMany
   */
  export type user_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter, which user_tags to fetch.
     */
    where?: user_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tags to fetch.
     */
    orderBy?: user_tagsOrderByWithRelationInput | user_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tags.
     */
    cursor?: user_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tags.
     */
    skip?: number
    distinct?: User_tagsScalarFieldEnum | User_tagsScalarFieldEnum[]
  }

  /**
   * user_tags create
   */
  export type user_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tags.
     */
    data?: XOR<user_tagsCreateInput, user_tagsUncheckedCreateInput>
  }

  /**
   * user_tags createMany
   */
  export type user_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tags.
     */
    data: user_tagsCreateManyInput | user_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tags createManyAndReturn
   */
  export type user_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many user_tags.
     */
    data: user_tagsCreateManyInput | user_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_tags update
   */
  export type user_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tags.
     */
    data: XOR<user_tagsUpdateInput, user_tagsUncheckedUpdateInput>
    /**
     * Choose, which user_tags to update.
     */
    where: user_tagsWhereUniqueInput
  }

  /**
   * user_tags updateMany
   */
  export type user_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tags.
     */
    data: XOR<user_tagsUpdateManyMutationInput, user_tagsUncheckedUpdateManyInput>
    /**
     * Filter which user_tags to update
     */
    where?: user_tagsWhereInput
  }

  /**
   * user_tags upsert
   */
  export type user_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tags to update in case it exists.
     */
    where: user_tagsWhereUniqueInput
    /**
     * In case the user_tags found by the `where` argument doesn't exist, create a new user_tags with this data.
     */
    create: XOR<user_tagsCreateInput, user_tagsUncheckedCreateInput>
    /**
     * In case the user_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tagsUpdateInput, user_tagsUncheckedUpdateInput>
  }

  /**
   * user_tags delete
   */
  export type user_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
    /**
     * Filter which user_tags to delete.
     */
    where: user_tagsWhereUniqueInput
  }

  /**
   * user_tags deleteMany
   */
  export type user_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tags to delete
     */
    where?: user_tagsWhereInput
  }

  /**
   * user_tags.user_profiles
   */
  export type user_tags$user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
  }

  /**
   * user_tags without action
   */
  export type user_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tags
     */
    select?: user_tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tagsInclude<ExtArgs> | null
  }


  /**
   * Model virtual_profiles
   */

  export type AggregateVirtual_profiles = {
    _count: Virtual_profilesCountAggregateOutputType | null
    _avg: Virtual_profilesAvgAggregateOutputType | null
    _sum: Virtual_profilesSumAggregateOutputType | null
    _min: Virtual_profilesMinAggregateOutputType | null
    _max: Virtual_profilesMaxAggregateOutputType | null
  }

  export type Virtual_profilesAvgAggregateOutputType = {
    id: number | null
  }

  export type Virtual_profilesSumAggregateOutputType = {
    id: bigint | null
  }

  export type Virtual_profilesMinAggregateOutputType = {
    activated: boolean | null
    id: bigint | null
    profile_type: string | null
    user_id: string | null
  }

  export type Virtual_profilesMaxAggregateOutputType = {
    activated: boolean | null
    id: bigint | null
    profile_type: string | null
    user_id: string | null
  }

  export type Virtual_profilesCountAggregateOutputType = {
    activated: number
    id: number
    profile_type: number
    user_id: number
    _all: number
  }


  export type Virtual_profilesAvgAggregateInputType = {
    id?: true
  }

  export type Virtual_profilesSumAggregateInputType = {
    id?: true
  }

  export type Virtual_profilesMinAggregateInputType = {
    activated?: true
    id?: true
    profile_type?: true
    user_id?: true
  }

  export type Virtual_profilesMaxAggregateInputType = {
    activated?: true
    id?: true
    profile_type?: true
    user_id?: true
  }

  export type Virtual_profilesCountAggregateInputType = {
    activated?: true
    id?: true
    profile_type?: true
    user_id?: true
    _all?: true
  }

  export type Virtual_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which virtual_profiles to aggregate.
     */
    where?: virtual_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of virtual_profiles to fetch.
     */
    orderBy?: virtual_profilesOrderByWithRelationInput | virtual_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: virtual_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` virtual_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` virtual_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned virtual_profiles
    **/
    _count?: true | Virtual_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Virtual_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Virtual_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Virtual_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Virtual_profilesMaxAggregateInputType
  }

  export type GetVirtual_profilesAggregateType<T extends Virtual_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtual_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtual_profiles[P]>
      : GetScalarType<T[P], AggregateVirtual_profiles[P]>
  }




  export type virtual_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: virtual_profilesWhereInput
    orderBy?: virtual_profilesOrderByWithAggregationInput | virtual_profilesOrderByWithAggregationInput[]
    by: Virtual_profilesScalarFieldEnum[] | Virtual_profilesScalarFieldEnum
    having?: virtual_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Virtual_profilesCountAggregateInputType | true
    _avg?: Virtual_profilesAvgAggregateInputType
    _sum?: Virtual_profilesSumAggregateInputType
    _min?: Virtual_profilesMinAggregateInputType
    _max?: Virtual_profilesMaxAggregateInputType
  }

  export type Virtual_profilesGroupByOutputType = {
    activated: boolean | null
    id: bigint
    profile_type: string | null
    user_id: string | null
    _count: Virtual_profilesCountAggregateOutputType | null
    _avg: Virtual_profilesAvgAggregateOutputType | null
    _sum: Virtual_profilesSumAggregateOutputType | null
    _min: Virtual_profilesMinAggregateOutputType | null
    _max: Virtual_profilesMaxAggregateOutputType | null
  }

  type GetVirtual_profilesGroupByPayload<T extends virtual_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Virtual_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Virtual_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Virtual_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], Virtual_profilesGroupByOutputType[P]>
        }
      >
    >


  export type virtual_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activated?: boolean
    id?: boolean
    profile_type?: boolean
    user_id?: boolean
    community_profiles?: boolean | virtual_profiles$community_profilesArgs<ExtArgs>
    user_profiles?: boolean | virtual_profiles$user_profilesArgs<ExtArgs>
    _count?: boolean | Virtual_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtual_profiles"]>

  export type virtual_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activated?: boolean
    id?: boolean
    profile_type?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["virtual_profiles"]>

  export type virtual_profilesSelectScalar = {
    activated?: boolean
    id?: boolean
    profile_type?: boolean
    user_id?: boolean
  }

  export type virtual_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_profiles?: boolean | virtual_profiles$community_profilesArgs<ExtArgs>
    user_profiles?: boolean | virtual_profiles$user_profilesArgs<ExtArgs>
    _count?: boolean | Virtual_profilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type virtual_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $virtual_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "virtual_profiles"
    objects: {
      community_profiles: Prisma.$community_profilesPayload<ExtArgs>[]
      user_profiles: Prisma.$user_profilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      activated: boolean | null
      id: bigint
      profile_type: string | null
      user_id: string | null
    }, ExtArgs["result"]["virtual_profiles"]>
    composites: {}
  }

  type virtual_profilesGetPayload<S extends boolean | null | undefined | virtual_profilesDefaultArgs> = $Result.GetResult<Prisma.$virtual_profilesPayload, S>

  type virtual_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<virtual_profilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Virtual_profilesCountAggregateInputType | true
    }

  export interface virtual_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['virtual_profiles'], meta: { name: 'virtual_profiles' } }
    /**
     * Find zero or one Virtual_profiles that matches the filter.
     * @param {virtual_profilesFindUniqueArgs} args - Arguments to find a Virtual_profiles
     * @example
     * // Get one Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends virtual_profilesFindUniqueArgs>(args: SelectSubset<T, virtual_profilesFindUniqueArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Virtual_profiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {virtual_profilesFindUniqueOrThrowArgs} args - Arguments to find a Virtual_profiles
     * @example
     * // Get one Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends virtual_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, virtual_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Virtual_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesFindFirstArgs} args - Arguments to find a Virtual_profiles
     * @example
     * // Get one Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends virtual_profilesFindFirstArgs>(args?: SelectSubset<T, virtual_profilesFindFirstArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Virtual_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesFindFirstOrThrowArgs} args - Arguments to find a Virtual_profiles
     * @example
     * // Get one Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends virtual_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, virtual_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Virtual_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findMany()
     * 
     * // Get first 10 Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.findMany({ take: 10 })
     * 
     * // Only select the `activated`
     * const virtual_profilesWithActivatedOnly = await prisma.virtual_profiles.findMany({ select: { activated: true } })
     * 
     */
    findMany<T extends virtual_profilesFindManyArgs>(args?: SelectSubset<T, virtual_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Virtual_profiles.
     * @param {virtual_profilesCreateArgs} args - Arguments to create a Virtual_profiles.
     * @example
     * // Create one Virtual_profiles
     * const Virtual_profiles = await prisma.virtual_profiles.create({
     *   data: {
     *     // ... data to create a Virtual_profiles
     *   }
     * })
     * 
     */
    create<T extends virtual_profilesCreateArgs>(args: SelectSubset<T, virtual_profilesCreateArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Virtual_profiles.
     * @param {virtual_profilesCreateManyArgs} args - Arguments to create many Virtual_profiles.
     * @example
     * // Create many Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends virtual_profilesCreateManyArgs>(args?: SelectSubset<T, virtual_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Virtual_profiles and returns the data saved in the database.
     * @param {virtual_profilesCreateManyAndReturnArgs} args - Arguments to create many Virtual_profiles.
     * @example
     * // Create many Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Virtual_profiles and only return the `activated`
     * const virtual_profilesWithActivatedOnly = await prisma.virtual_profiles.createManyAndReturn({ 
     *   select: { activated: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends virtual_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, virtual_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Virtual_profiles.
     * @param {virtual_profilesDeleteArgs} args - Arguments to delete one Virtual_profiles.
     * @example
     * // Delete one Virtual_profiles
     * const Virtual_profiles = await prisma.virtual_profiles.delete({
     *   where: {
     *     // ... filter to delete one Virtual_profiles
     *   }
     * })
     * 
     */
    delete<T extends virtual_profilesDeleteArgs>(args: SelectSubset<T, virtual_profilesDeleteArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Virtual_profiles.
     * @param {virtual_profilesUpdateArgs} args - Arguments to update one Virtual_profiles.
     * @example
     * // Update one Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends virtual_profilesUpdateArgs>(args: SelectSubset<T, virtual_profilesUpdateArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Virtual_profiles.
     * @param {virtual_profilesDeleteManyArgs} args - Arguments to filter Virtual_profiles to delete.
     * @example
     * // Delete a few Virtual_profiles
     * const { count } = await prisma.virtual_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends virtual_profilesDeleteManyArgs>(args?: SelectSubset<T, virtual_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Virtual_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends virtual_profilesUpdateManyArgs>(args: SelectSubset<T, virtual_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Virtual_profiles.
     * @param {virtual_profilesUpsertArgs} args - Arguments to update or create a Virtual_profiles.
     * @example
     * // Update or create a Virtual_profiles
     * const virtual_profiles = await prisma.virtual_profiles.upsert({
     *   create: {
     *     // ... data to create a Virtual_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Virtual_profiles we want to update
     *   }
     * })
     */
    upsert<T extends virtual_profilesUpsertArgs>(args: SelectSubset<T, virtual_profilesUpsertArgs<ExtArgs>>): Prisma__virtual_profilesClient<$Result.GetResult<Prisma.$virtual_profilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Virtual_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesCountArgs} args - Arguments to filter Virtual_profiles to count.
     * @example
     * // Count the number of Virtual_profiles
     * const count = await prisma.virtual_profiles.count({
     *   where: {
     *     // ... the filter for the Virtual_profiles we want to count
     *   }
     * })
    **/
    count<T extends virtual_profilesCountArgs>(
      args?: Subset<T, virtual_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Virtual_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Virtual_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Virtual_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Virtual_profilesAggregateArgs>(args: Subset<T, Virtual_profilesAggregateArgs>): Prisma.PrismaPromise<GetVirtual_profilesAggregateType<T>>

    /**
     * Group by Virtual_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {virtual_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends virtual_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: virtual_profilesGroupByArgs['orderBy'] }
        : { orderBy?: virtual_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, virtual_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtual_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the virtual_profiles model
   */
  readonly fields: virtual_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for virtual_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__virtual_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community_profiles<T extends virtual_profiles$community_profilesArgs<ExtArgs> = {}>(args?: Subset<T, virtual_profiles$community_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_profilesPayload<ExtArgs>, T, "findMany"> | Null>
    user_profiles<T extends virtual_profiles$user_profilesArgs<ExtArgs> = {}>(args?: Subset<T, virtual_profiles$user_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the virtual_profiles model
   */ 
  interface virtual_profilesFieldRefs {
    readonly activated: FieldRef<"virtual_profiles", 'Boolean'>
    readonly id: FieldRef<"virtual_profiles", 'BigInt'>
    readonly profile_type: FieldRef<"virtual_profiles", 'String'>
    readonly user_id: FieldRef<"virtual_profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * virtual_profiles findUnique
   */
  export type virtual_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter, which virtual_profiles to fetch.
     */
    where: virtual_profilesWhereUniqueInput
  }

  /**
   * virtual_profiles findUniqueOrThrow
   */
  export type virtual_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter, which virtual_profiles to fetch.
     */
    where: virtual_profilesWhereUniqueInput
  }

  /**
   * virtual_profiles findFirst
   */
  export type virtual_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter, which virtual_profiles to fetch.
     */
    where?: virtual_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of virtual_profiles to fetch.
     */
    orderBy?: virtual_profilesOrderByWithRelationInput | virtual_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for virtual_profiles.
     */
    cursor?: virtual_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` virtual_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` virtual_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of virtual_profiles.
     */
    distinct?: Virtual_profilesScalarFieldEnum | Virtual_profilesScalarFieldEnum[]
  }

  /**
   * virtual_profiles findFirstOrThrow
   */
  export type virtual_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter, which virtual_profiles to fetch.
     */
    where?: virtual_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of virtual_profiles to fetch.
     */
    orderBy?: virtual_profilesOrderByWithRelationInput | virtual_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for virtual_profiles.
     */
    cursor?: virtual_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` virtual_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` virtual_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of virtual_profiles.
     */
    distinct?: Virtual_profilesScalarFieldEnum | Virtual_profilesScalarFieldEnum[]
  }

  /**
   * virtual_profiles findMany
   */
  export type virtual_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter, which virtual_profiles to fetch.
     */
    where?: virtual_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of virtual_profiles to fetch.
     */
    orderBy?: virtual_profilesOrderByWithRelationInput | virtual_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing virtual_profiles.
     */
    cursor?: virtual_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` virtual_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` virtual_profiles.
     */
    skip?: number
    distinct?: Virtual_profilesScalarFieldEnum | Virtual_profilesScalarFieldEnum[]
  }

  /**
   * virtual_profiles create
   */
  export type virtual_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a virtual_profiles.
     */
    data?: XOR<virtual_profilesCreateInput, virtual_profilesUncheckedCreateInput>
  }

  /**
   * virtual_profiles createMany
   */
  export type virtual_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many virtual_profiles.
     */
    data: virtual_profilesCreateManyInput | virtual_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * virtual_profiles createManyAndReturn
   */
  export type virtual_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many virtual_profiles.
     */
    data: virtual_profilesCreateManyInput | virtual_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * virtual_profiles update
   */
  export type virtual_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a virtual_profiles.
     */
    data: XOR<virtual_profilesUpdateInput, virtual_profilesUncheckedUpdateInput>
    /**
     * Choose, which virtual_profiles to update.
     */
    where: virtual_profilesWhereUniqueInput
  }

  /**
   * virtual_profiles updateMany
   */
  export type virtual_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update virtual_profiles.
     */
    data: XOR<virtual_profilesUpdateManyMutationInput, virtual_profilesUncheckedUpdateManyInput>
    /**
     * Filter which virtual_profiles to update
     */
    where?: virtual_profilesWhereInput
  }

  /**
   * virtual_profiles upsert
   */
  export type virtual_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the virtual_profiles to update in case it exists.
     */
    where: virtual_profilesWhereUniqueInput
    /**
     * In case the virtual_profiles found by the `where` argument doesn't exist, create a new virtual_profiles with this data.
     */
    create: XOR<virtual_profilesCreateInput, virtual_profilesUncheckedCreateInput>
    /**
     * In case the virtual_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<virtual_profilesUpdateInput, virtual_profilesUncheckedUpdateInput>
  }

  /**
   * virtual_profiles delete
   */
  export type virtual_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
    /**
     * Filter which virtual_profiles to delete.
     */
    where: virtual_profilesWhereUniqueInput
  }

  /**
   * virtual_profiles deleteMany
   */
  export type virtual_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which virtual_profiles to delete
     */
    where?: virtual_profilesWhereInput
  }

  /**
   * virtual_profiles.community_profiles
   */
  export type virtual_profiles$community_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_profiles
     */
    select?: community_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_profilesInclude<ExtArgs> | null
    where?: community_profilesWhereInput
    orderBy?: community_profilesOrderByWithRelationInput | community_profilesOrderByWithRelationInput[]
    cursor?: community_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Community_profilesScalarFieldEnum | Community_profilesScalarFieldEnum[]
  }

  /**
   * virtual_profiles.user_profiles
   */
  export type virtual_profiles$user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    cursor?: user_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * virtual_profiles without action
   */
  export type virtual_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the virtual_profiles
     */
    select?: virtual_profilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: virtual_profilesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlockedsScalarFieldEnum: {
    created_at: 'created_at',
    id: 'id',
    profile_blocked_id: 'profile_blocked_id',
    profile_blocked_type: 'profile_blocked_type',
    profile_blocking_id: 'profile_blocking_id',
    profile_blocking_type: 'profile_blocking_type'
  };

  export type BlockedsScalarFieldEnum = (typeof BlockedsScalarFieldEnum)[keyof typeof BlockedsScalarFieldEnum]


  export const BookmarksScalarFieldEnum: {
    id: 'id',
    post_ids: 'post_ids'
  };

  export type BookmarksScalarFieldEnum = (typeof BookmarksScalarFieldEnum)[keyof typeof BookmarksScalarFieldEnum]


  export const Community_profilesScalarFieldEnum: {
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

  export type Community_profilesScalarFieldEnum = (typeof Community_profilesScalarFieldEnum)[keyof typeof Community_profilesScalarFieldEnum]


  export const FollowersScalarFieldEnum: {
    approved_at: 'approved_at',
    created_at: 'created_at',
    id: 'id',
    profile_followed_id: 'profile_followed_id',
    profile_following_id: 'profile_following_id',
    request_approved: 'request_approved',
    target_follower_type: 'target_follower_type'
  };

  export type FollowersScalarFieldEnum = (typeof FollowersScalarFieldEnum)[keyof typeof FollowersScalarFieldEnum]


  export const PublicationsScalarFieldEnum: {
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

  export type PublicationsScalarFieldEnum = (typeof PublicationsScalarFieldEnum)[keyof typeof PublicationsScalarFieldEnum]


  export const TopicsScalarFieldEnum: {
    community_profile_id: 'community_profile_id',
    description: 'description',
    id: 'id',
    image_url: 'image_url',
    topic_name: 'topic_name'
  };

  export type TopicsScalarFieldEnum = (typeof TopicsScalarFieldEnum)[keyof typeof TopicsScalarFieldEnum]


  export const User_profilesScalarFieldEnum: {
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

  export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum]


  export const User_tagsScalarFieldEnum: {
    description: 'description',
    id: 'id',
    tag_name: 'tag_name',
    user_profile_id: 'user_profile_id'
  };

  export type User_tagsScalarFieldEnum = (typeof User_tagsScalarFieldEnum)[keyof typeof User_tagsScalarFieldEnum]


  export const Virtual_profilesScalarFieldEnum: {
    activated: 'activated',
    id: 'id',
    profile_type: 'profile_type',
    user_id: 'user_id'
  };

  export type Virtual_profilesScalarFieldEnum = (typeof Virtual_profilesScalarFieldEnum)[keyof typeof Virtual_profilesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type blockedsWhereInput = {
    AND?: blockedsWhereInput | blockedsWhereInput[]
    OR?: blockedsWhereInput[]
    NOT?: blockedsWhereInput | blockedsWhereInput[]
    created_at?: StringNullableFilter<"blockeds"> | string | null
    id?: BigIntFilter<"blockeds"> | bigint | number
    profile_blocked_id?: BigIntNullableFilter<"blockeds"> | bigint | number | null
    profile_blocked_type?: StringNullableFilter<"blockeds"> | string | null
    profile_blocking_id?: BigIntNullableFilter<"blockeds"> | bigint | number | null
    profile_blocking_type?: StringNullableFilter<"blockeds"> | string | null
  }

  export type blockedsOrderByWithRelationInput = {
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_blocked_id?: SortOrderInput | SortOrder
    profile_blocked_type?: SortOrderInput | SortOrder
    profile_blocking_id?: SortOrderInput | SortOrder
    profile_blocking_type?: SortOrderInput | SortOrder
  }

  export type blockedsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: blockedsWhereInput | blockedsWhereInput[]
    OR?: blockedsWhereInput[]
    NOT?: blockedsWhereInput | blockedsWhereInput[]
    created_at?: StringNullableFilter<"blockeds"> | string | null
    profile_blocked_id?: BigIntNullableFilter<"blockeds"> | bigint | number | null
    profile_blocked_type?: StringNullableFilter<"blockeds"> | string | null
    profile_blocking_id?: BigIntNullableFilter<"blockeds"> | bigint | number | null
    profile_blocking_type?: StringNullableFilter<"blockeds"> | string | null
  }, "id">

  export type blockedsOrderByWithAggregationInput = {
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_blocked_id?: SortOrderInput | SortOrder
    profile_blocked_type?: SortOrderInput | SortOrder
    profile_blocking_id?: SortOrderInput | SortOrder
    profile_blocking_type?: SortOrderInput | SortOrder
    _count?: blockedsCountOrderByAggregateInput
    _avg?: blockedsAvgOrderByAggregateInput
    _max?: blockedsMaxOrderByAggregateInput
    _min?: blockedsMinOrderByAggregateInput
    _sum?: blockedsSumOrderByAggregateInput
  }

  export type blockedsScalarWhereWithAggregatesInput = {
    AND?: blockedsScalarWhereWithAggregatesInput | blockedsScalarWhereWithAggregatesInput[]
    OR?: blockedsScalarWhereWithAggregatesInput[]
    NOT?: blockedsScalarWhereWithAggregatesInput | blockedsScalarWhereWithAggregatesInput[]
    created_at?: StringNullableWithAggregatesFilter<"blockeds"> | string | null
    id?: BigIntWithAggregatesFilter<"blockeds"> | bigint | number
    profile_blocked_id?: BigIntNullableWithAggregatesFilter<"blockeds"> | bigint | number | null
    profile_blocked_type?: StringNullableWithAggregatesFilter<"blockeds"> | string | null
    profile_blocking_id?: BigIntNullableWithAggregatesFilter<"blockeds"> | bigint | number | null
    profile_blocking_type?: StringNullableWithAggregatesFilter<"blockeds"> | string | null
  }

  export type bookmarksWhereInput = {
    AND?: bookmarksWhereInput | bookmarksWhereInput[]
    OR?: bookmarksWhereInput[]
    NOT?: bookmarksWhereInput | bookmarksWhereInput[]
    id?: BigIntFilter<"bookmarks"> | bigint | number
    post_ids?: StringNullableListFilter<"bookmarks">
    publications?: PublicationsListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }

  export type bookmarksOrderByWithRelationInput = {
    id?: SortOrder
    post_ids?: SortOrder
    publications?: publicationsOrderByRelationAggregateInput
    user_profiles?: user_profilesOrderByRelationAggregateInput
  }

  export type bookmarksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: bookmarksWhereInput | bookmarksWhereInput[]
    OR?: bookmarksWhereInput[]
    NOT?: bookmarksWhereInput | bookmarksWhereInput[]
    post_ids?: StringNullableListFilter<"bookmarks">
    publications?: PublicationsListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }, "id">

  export type bookmarksOrderByWithAggregationInput = {
    id?: SortOrder
    post_ids?: SortOrder
    _count?: bookmarksCountOrderByAggregateInput
    _avg?: bookmarksAvgOrderByAggregateInput
    _max?: bookmarksMaxOrderByAggregateInput
    _min?: bookmarksMinOrderByAggregateInput
    _sum?: bookmarksSumOrderByAggregateInput
  }

  export type bookmarksScalarWhereWithAggregatesInput = {
    AND?: bookmarksScalarWhereWithAggregatesInput | bookmarksScalarWhereWithAggregatesInput[]
    OR?: bookmarksScalarWhereWithAggregatesInput[]
    NOT?: bookmarksScalarWhereWithAggregatesInput | bookmarksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"bookmarks"> | bigint | number
    post_ids?: StringNullableListFilter<"bookmarks">
  }

  export type community_profilesWhereInput = {
    AND?: community_profilesWhereInput | community_profilesWhereInput[]
    OR?: community_profilesWhereInput[]
    NOT?: community_profilesWhereInput | community_profilesWhereInput[]
    algolia_id?: StringNullableFilter<"community_profiles"> | string | null
    community_rules?: StringNullableFilter<"community_profiles"> | string | null
    description?: StringNullableFilter<"community_profiles"> | string | null
    followers?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    id?: BigIntFilter<"community_profiles"> | bigint | number
    name?: StringNullableFilter<"community_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    private?: BoolNullableFilter<"community_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"community_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    visible?: BoolNullableFilter<"community_profiles"> | boolean | null
    virtual_profiles?: XOR<Virtual_profilesNullableRelationFilter, virtual_profilesWhereInput> | null
    topics?: TopicsListRelationFilter
  }

  export type community_profilesOrderByWithRelationInput = {
    algolia_id?: SortOrderInput | SortOrder
    community_rules?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    news_feed_timeline_id?: SortOrderInput | SortOrder
    notification_feed_timeline_id?: SortOrderInput | SortOrder
    personal_feed_timeline_id?: SortOrderInput | SortOrder
    private?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    virtual_profile_id?: SortOrderInput | SortOrder
    visible?: SortOrderInput | SortOrder
    virtual_profiles?: virtual_profilesOrderByWithRelationInput
    topics?: topicsOrderByRelationAggregateInput
  }

  export type community_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: community_profilesWhereInput | community_profilesWhereInput[]
    OR?: community_profilesWhereInput[]
    NOT?: community_profilesWhereInput | community_profilesWhereInput[]
    algolia_id?: StringNullableFilter<"community_profiles"> | string | null
    community_rules?: StringNullableFilter<"community_profiles"> | string | null
    description?: StringNullableFilter<"community_profiles"> | string | null
    followers?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    name?: StringNullableFilter<"community_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    private?: BoolNullableFilter<"community_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"community_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    visible?: BoolNullableFilter<"community_profiles"> | boolean | null
    virtual_profiles?: XOR<Virtual_profilesNullableRelationFilter, virtual_profilesWhereInput> | null
    topics?: TopicsListRelationFilter
  }, "id">

  export type community_profilesOrderByWithAggregationInput = {
    algolia_id?: SortOrderInput | SortOrder
    community_rules?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    news_feed_timeline_id?: SortOrderInput | SortOrder
    notification_feed_timeline_id?: SortOrderInput | SortOrder
    personal_feed_timeline_id?: SortOrderInput | SortOrder
    private?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    virtual_profile_id?: SortOrderInput | SortOrder
    visible?: SortOrderInput | SortOrder
    _count?: community_profilesCountOrderByAggregateInput
    _avg?: community_profilesAvgOrderByAggregateInput
    _max?: community_profilesMaxOrderByAggregateInput
    _min?: community_profilesMinOrderByAggregateInput
    _sum?: community_profilesSumOrderByAggregateInput
  }

  export type community_profilesScalarWhereWithAggregatesInput = {
    AND?: community_profilesScalarWhereWithAggregatesInput | community_profilesScalarWhereWithAggregatesInput[]
    OR?: community_profilesScalarWhereWithAggregatesInput[]
    NOT?: community_profilesScalarWhereWithAggregatesInput | community_profilesScalarWhereWithAggregatesInput[]
    algolia_id?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    community_rules?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    description?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    followers?: BigIntNullableWithAggregatesFilter<"community_profiles"> | bigint | number | null
    id?: BigIntWithAggregatesFilter<"community_profiles"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    news_feed_timeline_id?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    private?: BoolNullableWithAggregatesFilter<"community_profiles"> | boolean | null
    profile_image_url?: StringNullableWithAggregatesFilter<"community_profiles"> | string | null
    virtual_profile_id?: BigIntNullableWithAggregatesFilter<"community_profiles"> | bigint | number | null
    visible?: BoolNullableWithAggregatesFilter<"community_profiles"> | boolean | null
  }

  export type followersWhereInput = {
    AND?: followersWhereInput | followersWhereInput[]
    OR?: followersWhereInput[]
    NOT?: followersWhereInput | followersWhereInput[]
    approved_at?: StringNullableFilter<"followers"> | string | null
    created_at?: StringNullableFilter<"followers"> | string | null
    id?: BigIntFilter<"followers"> | bigint | number
    profile_followed_id?: BigIntNullableFilter<"followers"> | bigint | number | null
    profile_following_id?: BigIntNullableFilter<"followers"> | bigint | number | null
    request_approved?: BoolNullableFilter<"followers"> | boolean | null
    target_follower_type?: StringNullableFilter<"followers"> | string | null
  }

  export type followersOrderByWithRelationInput = {
    approved_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_followed_id?: SortOrderInput | SortOrder
    profile_following_id?: SortOrderInput | SortOrder
    request_approved?: SortOrderInput | SortOrder
    target_follower_type?: SortOrderInput | SortOrder
  }

  export type followersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: followersWhereInput | followersWhereInput[]
    OR?: followersWhereInput[]
    NOT?: followersWhereInput | followersWhereInput[]
    approved_at?: StringNullableFilter<"followers"> | string | null
    created_at?: StringNullableFilter<"followers"> | string | null
    profile_followed_id?: BigIntNullableFilter<"followers"> | bigint | number | null
    profile_following_id?: BigIntNullableFilter<"followers"> | bigint | number | null
    request_approved?: BoolNullableFilter<"followers"> | boolean | null
    target_follower_type?: StringNullableFilter<"followers"> | string | null
  }, "id">

  export type followersOrderByWithAggregationInput = {
    approved_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_followed_id?: SortOrderInput | SortOrder
    profile_following_id?: SortOrderInput | SortOrder
    request_approved?: SortOrderInput | SortOrder
    target_follower_type?: SortOrderInput | SortOrder
    _count?: followersCountOrderByAggregateInput
    _avg?: followersAvgOrderByAggregateInput
    _max?: followersMaxOrderByAggregateInput
    _min?: followersMinOrderByAggregateInput
    _sum?: followersSumOrderByAggregateInput
  }

  export type followersScalarWhereWithAggregatesInput = {
    AND?: followersScalarWhereWithAggregatesInput | followersScalarWhereWithAggregatesInput[]
    OR?: followersScalarWhereWithAggregatesInput[]
    NOT?: followersScalarWhereWithAggregatesInput | followersScalarWhereWithAggregatesInput[]
    approved_at?: StringNullableWithAggregatesFilter<"followers"> | string | null
    created_at?: StringNullableWithAggregatesFilter<"followers"> | string | null
    id?: BigIntWithAggregatesFilter<"followers"> | bigint | number
    profile_followed_id?: BigIntNullableWithAggregatesFilter<"followers"> | bigint | number | null
    profile_following_id?: BigIntNullableWithAggregatesFilter<"followers"> | bigint | number | null
    request_approved?: BoolNullableWithAggregatesFilter<"followers"> | boolean | null
    target_follower_type?: StringNullableWithAggregatesFilter<"followers"> | string | null
  }

  export type publicationsWhereInput = {
    AND?: publicationsWhereInput | publicationsWhereInput[]
    OR?: publicationsWhereInput[]
    NOT?: publicationsWhereInput | publicationsWhereInput[]
    admin_backend_platform_user_id?: StringNullableFilter<"publications"> | string | null
    bookmark_id?: BigIntNullableFilter<"publications"> | bigint | number | null
    created_at?: StringNullableFilter<"publications"> | string | null
    description?: StringNullableFilter<"publications"> | string | null
    id?: BigIntFilter<"publications"> | bigint | number
    post_ids?: StringNullableListFilter<"publications">
    publication_name?: StringNullableFilter<"publications"> | string | null
    subjects?: StringNullableListFilter<"publications">
    tags?: StringNullableListFilter<"publications">
    type?: StringNullableFilter<"publications"> | string | null
    bookmarks?: XOR<BookmarksNullableRelationFilter, bookmarksWhereInput> | null
    user_profiles_user_profiles_admin_publication_idTopublications?: User_profilesListRelationFilter
    user_profiles_user_profiles_editors_publication_idTopublications?: User_profilesListRelationFilter
  }

  export type publicationsOrderByWithRelationInput = {
    admin_backend_platform_user_id?: SortOrderInput | SortOrder
    bookmark_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    post_ids?: SortOrder
    publication_name?: SortOrderInput | SortOrder
    subjects?: SortOrder
    tags?: SortOrder
    type?: SortOrderInput | SortOrder
    bookmarks?: bookmarksOrderByWithRelationInput
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesOrderByRelationAggregateInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesOrderByRelationAggregateInput
  }

  export type publicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: publicationsWhereInput | publicationsWhereInput[]
    OR?: publicationsWhereInput[]
    NOT?: publicationsWhereInput | publicationsWhereInput[]
    admin_backend_platform_user_id?: StringNullableFilter<"publications"> | string | null
    bookmark_id?: BigIntNullableFilter<"publications"> | bigint | number | null
    created_at?: StringNullableFilter<"publications"> | string | null
    description?: StringNullableFilter<"publications"> | string | null
    post_ids?: StringNullableListFilter<"publications">
    publication_name?: StringNullableFilter<"publications"> | string | null
    subjects?: StringNullableListFilter<"publications">
    tags?: StringNullableListFilter<"publications">
    type?: StringNullableFilter<"publications"> | string | null
    bookmarks?: XOR<BookmarksNullableRelationFilter, bookmarksWhereInput> | null
    user_profiles_user_profiles_admin_publication_idTopublications?: User_profilesListRelationFilter
    user_profiles_user_profiles_editors_publication_idTopublications?: User_profilesListRelationFilter
  }, "id">

  export type publicationsOrderByWithAggregationInput = {
    admin_backend_platform_user_id?: SortOrderInput | SortOrder
    bookmark_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    post_ids?: SortOrder
    publication_name?: SortOrderInput | SortOrder
    subjects?: SortOrder
    tags?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: publicationsCountOrderByAggregateInput
    _avg?: publicationsAvgOrderByAggregateInput
    _max?: publicationsMaxOrderByAggregateInput
    _min?: publicationsMinOrderByAggregateInput
    _sum?: publicationsSumOrderByAggregateInput
  }

  export type publicationsScalarWhereWithAggregatesInput = {
    AND?: publicationsScalarWhereWithAggregatesInput | publicationsScalarWhereWithAggregatesInput[]
    OR?: publicationsScalarWhereWithAggregatesInput[]
    NOT?: publicationsScalarWhereWithAggregatesInput | publicationsScalarWhereWithAggregatesInput[]
    admin_backend_platform_user_id?: StringNullableWithAggregatesFilter<"publications"> | string | null
    bookmark_id?: BigIntNullableWithAggregatesFilter<"publications"> | bigint | number | null
    created_at?: StringNullableWithAggregatesFilter<"publications"> | string | null
    description?: StringNullableWithAggregatesFilter<"publications"> | string | null
    id?: BigIntWithAggregatesFilter<"publications"> | bigint | number
    post_ids?: StringNullableListFilter<"publications">
    publication_name?: StringNullableWithAggregatesFilter<"publications"> | string | null
    subjects?: StringNullableListFilter<"publications">
    tags?: StringNullableListFilter<"publications">
    type?: StringNullableWithAggregatesFilter<"publications"> | string | null
  }

  export type topicsWhereInput = {
    AND?: topicsWhereInput | topicsWhereInput[]
    OR?: topicsWhereInput[]
    NOT?: topicsWhereInput | topicsWhereInput[]
    community_profile_id?: BigIntNullableFilter<"topics"> | bigint | number | null
    description?: StringNullableFilter<"topics"> | string | null
    id?: BigIntFilter<"topics"> | bigint | number
    image_url?: StringNullableFilter<"topics"> | string | null
    topic_name?: StringNullableFilter<"topics"> | string | null
    community_profiles?: XOR<Community_profilesNullableRelationFilter, community_profilesWhereInput> | null
  }

  export type topicsOrderByWithRelationInput = {
    community_profile_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    topic_name?: SortOrderInput | SortOrder
    community_profiles?: community_profilesOrderByWithRelationInput
  }

  export type topicsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: topicsWhereInput | topicsWhereInput[]
    OR?: topicsWhereInput[]
    NOT?: topicsWhereInput | topicsWhereInput[]
    community_profile_id?: BigIntNullableFilter<"topics"> | bigint | number | null
    description?: StringNullableFilter<"topics"> | string | null
    image_url?: StringNullableFilter<"topics"> | string | null
    topic_name?: StringNullableFilter<"topics"> | string | null
    community_profiles?: XOR<Community_profilesNullableRelationFilter, community_profilesWhereInput> | null
  }, "id">

  export type topicsOrderByWithAggregationInput = {
    community_profile_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    topic_name?: SortOrderInput | SortOrder
    _count?: topicsCountOrderByAggregateInput
    _avg?: topicsAvgOrderByAggregateInput
    _max?: topicsMaxOrderByAggregateInput
    _min?: topicsMinOrderByAggregateInput
    _sum?: topicsSumOrderByAggregateInput
  }

  export type topicsScalarWhereWithAggregatesInput = {
    AND?: topicsScalarWhereWithAggregatesInput | topicsScalarWhereWithAggregatesInput[]
    OR?: topicsScalarWhereWithAggregatesInput[]
    NOT?: topicsScalarWhereWithAggregatesInput | topicsScalarWhereWithAggregatesInput[]
    community_profile_id?: BigIntNullableWithAggregatesFilter<"topics"> | bigint | number | null
    description?: StringNullableWithAggregatesFilter<"topics"> | string | null
    id?: BigIntWithAggregatesFilter<"topics"> | bigint | number
    image_url?: StringNullableWithAggregatesFilter<"topics"> | string | null
    topic_name?: StringNullableWithAggregatesFilter<"topics"> | string | null
  }

  export type user_profilesWhereInput = {
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    admin_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    algolia_id?: StringNullableFilter<"user_profiles"> | string | null
    bookmark_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    editors_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    followers?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    following?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    id?: BigIntFilter<"user_profiles"> | bigint | number
    name?: StringNullableFilter<"user_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    private?: BoolNullableFilter<"user_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"user_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    publications_user_profiles_admin_publication_idTopublications?: XOR<PublicationsNullableRelationFilter, publicationsWhereInput> | null
    publications_user_profiles_editors_publication_idTopublications?: XOR<PublicationsNullableRelationFilter, publicationsWhereInput> | null
    bookmarks?: XOR<BookmarksNullableRelationFilter, bookmarksWhereInput> | null
    virtual_profiles?: XOR<Virtual_profilesNullableRelationFilter, virtual_profilesWhereInput> | null
    user_tags?: User_tagsListRelationFilter
  }

  export type user_profilesOrderByWithRelationInput = {
    admin_publication_id?: SortOrderInput | SortOrder
    algolia_id?: SortOrderInput | SortOrder
    bookmark_id?: SortOrderInput | SortOrder
    editors_publication_id?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    news_feed_timeline_id?: SortOrderInput | SortOrder
    notification_feed_timeline_id?: SortOrderInput | SortOrder
    personal_feed_timeline_id?: SortOrderInput | SortOrder
    private?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    virtual_profile_id?: SortOrderInput | SortOrder
    publications_user_profiles_admin_publication_idTopublications?: publicationsOrderByWithRelationInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsOrderByWithRelationInput
    bookmarks?: bookmarksOrderByWithRelationInput
    virtual_profiles?: virtual_profilesOrderByWithRelationInput
    user_tags?: user_tagsOrderByRelationAggregateInput
  }

  export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    admin_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    algolia_id?: StringNullableFilter<"user_profiles"> | string | null
    bookmark_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    editors_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    followers?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    following?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    name?: StringNullableFilter<"user_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    private?: BoolNullableFilter<"user_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"user_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    publications_user_profiles_admin_publication_idTopublications?: XOR<PublicationsNullableRelationFilter, publicationsWhereInput> | null
    publications_user_profiles_editors_publication_idTopublications?: XOR<PublicationsNullableRelationFilter, publicationsWhereInput> | null
    bookmarks?: XOR<BookmarksNullableRelationFilter, bookmarksWhereInput> | null
    virtual_profiles?: XOR<Virtual_profilesNullableRelationFilter, virtual_profilesWhereInput> | null
    user_tags?: User_tagsListRelationFilter
  }, "id">

  export type user_profilesOrderByWithAggregationInput = {
    admin_publication_id?: SortOrderInput | SortOrder
    algolia_id?: SortOrderInput | SortOrder
    bookmark_id?: SortOrderInput | SortOrder
    editors_publication_id?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    news_feed_timeline_id?: SortOrderInput | SortOrder
    notification_feed_timeline_id?: SortOrderInput | SortOrder
    personal_feed_timeline_id?: SortOrderInput | SortOrder
    private?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    virtual_profile_id?: SortOrderInput | SortOrder
    _count?: user_profilesCountOrderByAggregateInput
    _avg?: user_profilesAvgOrderByAggregateInput
    _max?: user_profilesMaxOrderByAggregateInput
    _min?: user_profilesMinOrderByAggregateInput
    _sum?: user_profilesSumOrderByAggregateInput
  }

  export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    OR?: user_profilesScalarWhereWithAggregatesInput[]
    NOT?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    admin_publication_id?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
    algolia_id?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    bookmark_id?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
    editors_publication_id?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
    followers?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
    following?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
    id?: BigIntWithAggregatesFilter<"user_profiles"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    news_feed_timeline_id?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    private?: BoolNullableWithAggregatesFilter<"user_profiles"> | boolean | null
    profile_image_url?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    virtual_profile_id?: BigIntNullableWithAggregatesFilter<"user_profiles"> | bigint | number | null
  }

  export type user_tagsWhereInput = {
    AND?: user_tagsWhereInput | user_tagsWhereInput[]
    OR?: user_tagsWhereInput[]
    NOT?: user_tagsWhereInput | user_tagsWhereInput[]
    description?: StringNullableFilter<"user_tags"> | string | null
    id?: BigIntFilter<"user_tags"> | bigint | number
    tag_name?: StringNullableFilter<"user_tags"> | string | null
    user_profile_id?: BigIntNullableFilter<"user_tags"> | bigint | number | null
    user_profiles?: XOR<User_profilesNullableRelationFilter, user_profilesWhereInput> | null
  }

  export type user_tagsOrderByWithRelationInput = {
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    tag_name?: SortOrderInput | SortOrder
    user_profile_id?: SortOrderInput | SortOrder
    user_profiles?: user_profilesOrderByWithRelationInput
  }

  export type user_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: user_tagsWhereInput | user_tagsWhereInput[]
    OR?: user_tagsWhereInput[]
    NOT?: user_tagsWhereInput | user_tagsWhereInput[]
    description?: StringNullableFilter<"user_tags"> | string | null
    tag_name?: StringNullableFilter<"user_tags"> | string | null
    user_profile_id?: BigIntNullableFilter<"user_tags"> | bigint | number | null
    user_profiles?: XOR<User_profilesNullableRelationFilter, user_profilesWhereInput> | null
  }, "id">

  export type user_tagsOrderByWithAggregationInput = {
    description?: SortOrderInput | SortOrder
    id?: SortOrder
    tag_name?: SortOrderInput | SortOrder
    user_profile_id?: SortOrderInput | SortOrder
    _count?: user_tagsCountOrderByAggregateInput
    _avg?: user_tagsAvgOrderByAggregateInput
    _max?: user_tagsMaxOrderByAggregateInput
    _min?: user_tagsMinOrderByAggregateInput
    _sum?: user_tagsSumOrderByAggregateInput
  }

  export type user_tagsScalarWhereWithAggregatesInput = {
    AND?: user_tagsScalarWhereWithAggregatesInput | user_tagsScalarWhereWithAggregatesInput[]
    OR?: user_tagsScalarWhereWithAggregatesInput[]
    NOT?: user_tagsScalarWhereWithAggregatesInput | user_tagsScalarWhereWithAggregatesInput[]
    description?: StringNullableWithAggregatesFilter<"user_tags"> | string | null
    id?: BigIntWithAggregatesFilter<"user_tags"> | bigint | number
    tag_name?: StringNullableWithAggregatesFilter<"user_tags"> | string | null
    user_profile_id?: BigIntNullableWithAggregatesFilter<"user_tags"> | bigint | number | null
  }

  export type virtual_profilesWhereInput = {
    AND?: virtual_profilesWhereInput | virtual_profilesWhereInput[]
    OR?: virtual_profilesWhereInput[]
    NOT?: virtual_profilesWhereInput | virtual_profilesWhereInput[]
    activated?: BoolNullableFilter<"virtual_profiles"> | boolean | null
    id?: BigIntFilter<"virtual_profiles"> | bigint | number
    profile_type?: StringNullableFilter<"virtual_profiles"> | string | null
    user_id?: StringNullableFilter<"virtual_profiles"> | string | null
    community_profiles?: Community_profilesListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }

  export type virtual_profilesOrderByWithRelationInput = {
    activated?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_type?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    community_profiles?: community_profilesOrderByRelationAggregateInput
    user_profiles?: user_profilesOrderByRelationAggregateInput
  }

  export type virtual_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: virtual_profilesWhereInput | virtual_profilesWhereInput[]
    OR?: virtual_profilesWhereInput[]
    NOT?: virtual_profilesWhereInput | virtual_profilesWhereInput[]
    activated?: BoolNullableFilter<"virtual_profiles"> | boolean | null
    profile_type?: StringNullableFilter<"virtual_profiles"> | string | null
    user_id?: StringNullableFilter<"virtual_profiles"> | string | null
    community_profiles?: Community_profilesListRelationFilter
    user_profiles?: User_profilesListRelationFilter
  }, "id">

  export type virtual_profilesOrderByWithAggregationInput = {
    activated?: SortOrderInput | SortOrder
    id?: SortOrder
    profile_type?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: virtual_profilesCountOrderByAggregateInput
    _avg?: virtual_profilesAvgOrderByAggregateInput
    _max?: virtual_profilesMaxOrderByAggregateInput
    _min?: virtual_profilesMinOrderByAggregateInput
    _sum?: virtual_profilesSumOrderByAggregateInput
  }

  export type virtual_profilesScalarWhereWithAggregatesInput = {
    AND?: virtual_profilesScalarWhereWithAggregatesInput | virtual_profilesScalarWhereWithAggregatesInput[]
    OR?: virtual_profilesScalarWhereWithAggregatesInput[]
    NOT?: virtual_profilesScalarWhereWithAggregatesInput | virtual_profilesScalarWhereWithAggregatesInput[]
    activated?: BoolNullableWithAggregatesFilter<"virtual_profiles"> | boolean | null
    id?: BigIntWithAggregatesFilter<"virtual_profiles"> | bigint | number
    profile_type?: StringNullableWithAggregatesFilter<"virtual_profiles"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"virtual_profiles"> | string | null
  }

  export type blockedsCreateInput = {
    created_at?: string | null
    id?: bigint | number
    profile_blocked_id?: bigint | number | null
    profile_blocked_type?: string | null
    profile_blocking_id?: bigint | number | null
    profile_blocking_type?: string | null
  }

  export type blockedsUncheckedCreateInput = {
    created_at?: string | null
    id?: bigint | number
    profile_blocked_id?: bigint | number | null
    profile_blocked_type?: string | null
    profile_blocking_id?: bigint | number | null
    profile_blocking_type?: string | null
  }

  export type blockedsUpdateInput = {
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_blocked_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocked_type?: NullableStringFieldUpdateOperationsInput | string | null
    profile_blocking_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocking_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type blockedsUncheckedUpdateInput = {
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_blocked_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocked_type?: NullableStringFieldUpdateOperationsInput | string | null
    profile_blocking_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocking_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type blockedsCreateManyInput = {
    created_at?: string | null
    id?: bigint | number
    profile_blocked_id?: bigint | number | null
    profile_blocked_type?: string | null
    profile_blocking_id?: bigint | number | null
    profile_blocking_type?: string | null
  }

  export type blockedsUpdateManyMutationInput = {
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_blocked_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocked_type?: NullableStringFieldUpdateOperationsInput | string | null
    profile_blocking_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocking_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type blockedsUncheckedUpdateManyInput = {
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_blocked_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocked_type?: NullableStringFieldUpdateOperationsInput | string | null
    profile_blocking_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_blocking_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookmarksCreateInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    publications?: publicationsCreateNestedManyWithoutBookmarksInput
    user_profiles?: user_profilesCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksUncheckedCreateInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    publications?: publicationsUncheckedCreateNestedManyWithoutBookmarksInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    publications?: publicationsUpdateManyWithoutBookmarksNestedInput
    user_profiles?: user_profilesUpdateManyWithoutBookmarksNestedInput
  }

  export type bookmarksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    publications?: publicationsUncheckedUpdateManyWithoutBookmarksNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutBookmarksNestedInput
  }

  export type bookmarksCreateManyInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
  }

  export type bookmarksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
  }

  export type bookmarksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
  }

  export type community_profilesCreateInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    visible?: boolean | null
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutCommunity_profilesInput
    topics?: topicsCreateNestedManyWithoutCommunity_profilesInput
  }

  export type community_profilesUncheckedCreateInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    visible?: boolean | null
    topics?: topicsUncheckedCreateNestedManyWithoutCommunity_profilesInput
  }

  export type community_profilesUpdateInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    virtual_profiles?: virtual_profilesUpdateOneWithoutCommunity_profilesNestedInput
    topics?: topicsUpdateManyWithoutCommunity_profilesNestedInput
  }

  export type community_profilesUncheckedUpdateInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    topics?: topicsUncheckedUpdateManyWithoutCommunity_profilesNestedInput
  }

  export type community_profilesCreateManyInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    visible?: boolean | null
  }

  export type community_profilesUpdateManyMutationInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type community_profilesUncheckedUpdateManyInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type followersCreateInput = {
    approved_at?: string | null
    created_at?: string | null
    id?: bigint | number
    profile_followed_id?: bigint | number | null
    profile_following_id?: bigint | number | null
    request_approved?: boolean | null
    target_follower_type?: string | null
  }

  export type followersUncheckedCreateInput = {
    approved_at?: string | null
    created_at?: string | null
    id?: bigint | number
    profile_followed_id?: bigint | number | null
    profile_following_id?: bigint | number | null
    request_approved?: boolean | null
    target_follower_type?: string | null
  }

  export type followersUpdateInput = {
    approved_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_followed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_following_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    request_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    target_follower_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followersUncheckedUpdateInput = {
    approved_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_followed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_following_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    request_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    target_follower_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followersCreateManyInput = {
    approved_at?: string | null
    created_at?: string | null
    id?: bigint | number
    profile_followed_id?: bigint | number | null
    profile_following_id?: bigint | number | null
    request_approved?: boolean | null
    target_follower_type?: string | null
  }

  export type followersUpdateManyMutationInput = {
    approved_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_followed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_following_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    request_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    target_follower_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type followersUncheckedUpdateManyInput = {
    approved_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_followed_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profile_following_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    request_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    target_follower_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type publicationsCreateInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    bookmarks?: bookmarksCreateNestedOneWithoutPublicationsInput
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsUncheckedCreateInput = {
    admin_backend_platform_user_id?: string | null
    bookmark_id?: bigint | number | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsUpdateInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: bookmarksUpdateOneWithoutPublicationsNestedInput
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsUncheckedUpdateInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsCreateManyInput = {
    admin_backend_platform_user_id?: string | null
    bookmark_id?: bigint | number | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
  }

  export type publicationsUpdateManyMutationInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type publicationsUncheckedUpdateManyInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicsCreateInput = {
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
    community_profiles?: community_profilesCreateNestedOneWithoutTopicsInput
  }

  export type topicsUncheckedCreateInput = {
    community_profile_id?: bigint | number | null
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
  }

  export type topicsUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
    community_profiles?: community_profilesUpdateOneWithoutTopicsNestedInput
  }

  export type topicsUncheckedUpdateInput = {
    community_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicsCreateManyInput = {
    community_profile_id?: bigint | number | null
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
  }

  export type topicsUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicsUncheckedUpdateManyInput = {
    community_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesCreateInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    bookmarks?: bookmarksCreateNestedOneWithoutUser_profilesInput
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutUser_profilesInput
    user_tags?: user_tagsCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    user_tags?: user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUpdateInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput
    bookmarks?: bookmarksUpdateOneWithoutUser_profilesNestedInput
    virtual_profiles?: virtual_profilesUpdateOneWithoutUser_profilesNestedInput
    user_tags?: user_tagsUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_tags?: user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesCreateManyInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
  }

  export type user_profilesUpdateManyMutationInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesUncheckedUpdateManyInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type user_tagsCreateInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
    user_profiles?: user_profilesCreateNestedOneWithoutUser_tagsInput
  }

  export type user_tagsUncheckedCreateInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
    user_profile_id?: bigint | number | null
  }

  export type user_tagsUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles?: user_profilesUpdateOneWithoutUser_tagsNestedInput
  }

  export type user_tagsUncheckedUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type user_tagsCreateManyInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
    user_profile_id?: bigint | number | null
  }

  export type user_tagsUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tagsUncheckedUpdateManyInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type virtual_profilesCreateInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    community_profiles?: community_profilesCreateNestedManyWithoutVirtual_profilesInput
    user_profiles?: user_profilesCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesUncheckedCreateInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    community_profiles?: community_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesUpdateInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_profiles?: community_profilesUpdateManyWithoutVirtual_profilesNestedInput
    user_profiles?: user_profilesUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type virtual_profilesUncheckedUpdateInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_profiles?: community_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput
    user_profiles?: user_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type virtual_profilesCreateManyInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
  }

  export type virtual_profilesUpdateManyMutationInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type virtual_profilesUncheckedUpdateManyInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type blockedsCountOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    profile_blocked_id?: SortOrder
    profile_blocked_type?: SortOrder
    profile_blocking_id?: SortOrder
    profile_blocking_type?: SortOrder
  }

  export type blockedsAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_blocked_id?: SortOrder
    profile_blocking_id?: SortOrder
  }

  export type blockedsMaxOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    profile_blocked_id?: SortOrder
    profile_blocked_type?: SortOrder
    profile_blocking_id?: SortOrder
    profile_blocking_type?: SortOrder
  }

  export type blockedsMinOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    profile_blocked_id?: SortOrder
    profile_blocked_type?: SortOrder
    profile_blocking_id?: SortOrder
    profile_blocking_type?: SortOrder
  }

  export type blockedsSumOrderByAggregateInput = {
    id?: SortOrder
    profile_blocked_id?: SortOrder
    profile_blocking_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PublicationsListRelationFilter = {
    every?: publicationsWhereInput
    some?: publicationsWhereInput
    none?: publicationsWhereInput
  }

  export type User_profilesListRelationFilter = {
    every?: user_profilesWhereInput
    some?: user_profilesWhereInput
    none?: user_profilesWhereInput
  }

  export type publicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_profilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookmarksCountOrderByAggregateInput = {
    id?: SortOrder
    post_ids?: SortOrder
  }

  export type bookmarksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bookmarksMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bookmarksMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bookmarksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Virtual_profilesNullableRelationFilter = {
    is?: virtual_profilesWhereInput | null
    isNot?: virtual_profilesWhereInput | null
  }

  export type TopicsListRelationFilter = {
    every?: topicsWhereInput
    some?: topicsWhereInput
    none?: topicsWhereInput
  }

  export type topicsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type community_profilesCountOrderByAggregateInput = {
    algolia_id?: SortOrder
    community_rules?: SortOrder
    description?: SortOrder
    followers?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
    visible?: SortOrder
  }

  export type community_profilesAvgOrderByAggregateInput = {
    followers?: SortOrder
    id?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type community_profilesMaxOrderByAggregateInput = {
    algolia_id?: SortOrder
    community_rules?: SortOrder
    description?: SortOrder
    followers?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
    visible?: SortOrder
  }

  export type community_profilesMinOrderByAggregateInput = {
    algolia_id?: SortOrder
    community_rules?: SortOrder
    description?: SortOrder
    followers?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
    visible?: SortOrder
  }

  export type community_profilesSumOrderByAggregateInput = {
    followers?: SortOrder
    id?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type followersCountOrderByAggregateInput = {
    approved_at?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    profile_followed_id?: SortOrder
    profile_following_id?: SortOrder
    request_approved?: SortOrder
    target_follower_type?: SortOrder
  }

  export type followersAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_followed_id?: SortOrder
    profile_following_id?: SortOrder
  }

  export type followersMaxOrderByAggregateInput = {
    approved_at?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    profile_followed_id?: SortOrder
    profile_following_id?: SortOrder
    request_approved?: SortOrder
    target_follower_type?: SortOrder
  }

  export type followersMinOrderByAggregateInput = {
    approved_at?: SortOrder
    created_at?: SortOrder
    id?: SortOrder
    profile_followed_id?: SortOrder
    profile_following_id?: SortOrder
    request_approved?: SortOrder
    target_follower_type?: SortOrder
  }

  export type followersSumOrderByAggregateInput = {
    id?: SortOrder
    profile_followed_id?: SortOrder
    profile_following_id?: SortOrder
  }

  export type BookmarksNullableRelationFilter = {
    is?: bookmarksWhereInput | null
    isNot?: bookmarksWhereInput | null
  }

  export type publicationsCountOrderByAggregateInput = {
    admin_backend_platform_user_id?: SortOrder
    bookmark_id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    id?: SortOrder
    post_ids?: SortOrder
    publication_name?: SortOrder
    subjects?: SortOrder
    tags?: SortOrder
    type?: SortOrder
  }

  export type publicationsAvgOrderByAggregateInput = {
    bookmark_id?: SortOrder
    id?: SortOrder
  }

  export type publicationsMaxOrderByAggregateInput = {
    admin_backend_platform_user_id?: SortOrder
    bookmark_id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publication_name?: SortOrder
    type?: SortOrder
  }

  export type publicationsMinOrderByAggregateInput = {
    admin_backend_platform_user_id?: SortOrder
    bookmark_id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    id?: SortOrder
    publication_name?: SortOrder
    type?: SortOrder
  }

  export type publicationsSumOrderByAggregateInput = {
    bookmark_id?: SortOrder
    id?: SortOrder
  }

  export type Community_profilesNullableRelationFilter = {
    is?: community_profilesWhereInput | null
    isNot?: community_profilesWhereInput | null
  }

  export type topicsCountOrderByAggregateInput = {
    community_profile_id?: SortOrder
    description?: SortOrder
    id?: SortOrder
    image_url?: SortOrder
    topic_name?: SortOrder
  }

  export type topicsAvgOrderByAggregateInput = {
    community_profile_id?: SortOrder
    id?: SortOrder
  }

  export type topicsMaxOrderByAggregateInput = {
    community_profile_id?: SortOrder
    description?: SortOrder
    id?: SortOrder
    image_url?: SortOrder
    topic_name?: SortOrder
  }

  export type topicsMinOrderByAggregateInput = {
    community_profile_id?: SortOrder
    description?: SortOrder
    id?: SortOrder
    image_url?: SortOrder
    topic_name?: SortOrder
  }

  export type topicsSumOrderByAggregateInput = {
    community_profile_id?: SortOrder
    id?: SortOrder
  }

  export type PublicationsNullableRelationFilter = {
    is?: publicationsWhereInput | null
    isNot?: publicationsWhereInput | null
  }

  export type User_tagsListRelationFilter = {
    every?: user_tagsWhereInput
    some?: user_tagsWhereInput
    none?: user_tagsWhereInput
  }

  export type user_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_profilesCountOrderByAggregateInput = {
    admin_publication_id?: SortOrder
    algolia_id?: SortOrder
    bookmark_id?: SortOrder
    editors_publication_id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type user_profilesAvgOrderByAggregateInput = {
    admin_publication_id?: SortOrder
    bookmark_id?: SortOrder
    editors_publication_id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    id?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type user_profilesMaxOrderByAggregateInput = {
    admin_publication_id?: SortOrder
    algolia_id?: SortOrder
    bookmark_id?: SortOrder
    editors_publication_id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type user_profilesMinOrderByAggregateInput = {
    admin_publication_id?: SortOrder
    algolia_id?: SortOrder
    bookmark_id?: SortOrder
    editors_publication_id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    id?: SortOrder
    name?: SortOrder
    news_feed_timeline_id?: SortOrder
    notification_feed_timeline_id?: SortOrder
    personal_feed_timeline_id?: SortOrder
    private?: SortOrder
    profile_image_url?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type user_profilesSumOrderByAggregateInput = {
    admin_publication_id?: SortOrder
    bookmark_id?: SortOrder
    editors_publication_id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    id?: SortOrder
    virtual_profile_id?: SortOrder
  }

  export type User_profilesNullableRelationFilter = {
    is?: user_profilesWhereInput | null
    isNot?: user_profilesWhereInput | null
  }

  export type user_tagsCountOrderByAggregateInput = {
    description?: SortOrder
    id?: SortOrder
    tag_name?: SortOrder
    user_profile_id?: SortOrder
  }

  export type user_tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_profile_id?: SortOrder
  }

  export type user_tagsMaxOrderByAggregateInput = {
    description?: SortOrder
    id?: SortOrder
    tag_name?: SortOrder
    user_profile_id?: SortOrder
  }

  export type user_tagsMinOrderByAggregateInput = {
    description?: SortOrder
    id?: SortOrder
    tag_name?: SortOrder
    user_profile_id?: SortOrder
  }

  export type user_tagsSumOrderByAggregateInput = {
    id?: SortOrder
    user_profile_id?: SortOrder
  }

  export type Community_profilesListRelationFilter = {
    every?: community_profilesWhereInput
    some?: community_profilesWhereInput
    none?: community_profilesWhereInput
  }

  export type community_profilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type virtual_profilesCountOrderByAggregateInput = {
    activated?: SortOrder
    id?: SortOrder
    profile_type?: SortOrder
    user_id?: SortOrder
  }

  export type virtual_profilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type virtual_profilesMaxOrderByAggregateInput = {
    activated?: SortOrder
    id?: SortOrder
    profile_type?: SortOrder
    user_id?: SortOrder
  }

  export type virtual_profilesMinOrderByAggregateInput = {
    activated?: SortOrder
    id?: SortOrder
    profile_type?: SortOrder
    user_id?: SortOrder
  }

  export type virtual_profilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type bookmarksCreatepost_idsInput = {
    set: string[]
  }

  export type publicationsCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput> | publicationsCreateWithoutBookmarksInput[] | publicationsUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: publicationsCreateOrConnectWithoutBookmarksInput | publicationsCreateOrConnectWithoutBookmarksInput[]
    createMany?: publicationsCreateManyBookmarksInputEnvelope
    connect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
  }

  export type user_profilesCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput> | user_profilesCreateWithoutBookmarksInput[] | user_profilesUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutBookmarksInput | user_profilesCreateOrConnectWithoutBookmarksInput[]
    createMany?: user_profilesCreateManyBookmarksInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type publicationsUncheckedCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput> | publicationsCreateWithoutBookmarksInput[] | publicationsUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: publicationsCreateOrConnectWithoutBookmarksInput | publicationsCreateOrConnectWithoutBookmarksInput[]
    createMany?: publicationsCreateManyBookmarksInputEnvelope
    connect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
  }

  export type user_profilesUncheckedCreateNestedManyWithoutBookmarksInput = {
    create?: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput> | user_profilesCreateWithoutBookmarksInput[] | user_profilesUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutBookmarksInput | user_profilesCreateOrConnectWithoutBookmarksInput[]
    createMany?: user_profilesCreateManyBookmarksInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type bookmarksUpdatepost_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type publicationsUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput> | publicationsCreateWithoutBookmarksInput[] | publicationsUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: publicationsCreateOrConnectWithoutBookmarksInput | publicationsCreateOrConnectWithoutBookmarksInput[]
    upsert?: publicationsUpsertWithWhereUniqueWithoutBookmarksInput | publicationsUpsertWithWhereUniqueWithoutBookmarksInput[]
    createMany?: publicationsCreateManyBookmarksInputEnvelope
    set?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    disconnect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    delete?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    connect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    update?: publicationsUpdateWithWhereUniqueWithoutBookmarksInput | publicationsUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: publicationsUpdateManyWithWhereWithoutBookmarksInput | publicationsUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: publicationsScalarWhereInput | publicationsScalarWhereInput[]
  }

  export type user_profilesUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput> | user_profilesCreateWithoutBookmarksInput[] | user_profilesUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutBookmarksInput | user_profilesCreateOrConnectWithoutBookmarksInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutBookmarksInput | user_profilesUpsertWithWhereUniqueWithoutBookmarksInput[]
    createMany?: user_profilesCreateManyBookmarksInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutBookmarksInput | user_profilesUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutBookmarksInput | user_profilesUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type publicationsUncheckedUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput> | publicationsCreateWithoutBookmarksInput[] | publicationsUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: publicationsCreateOrConnectWithoutBookmarksInput | publicationsCreateOrConnectWithoutBookmarksInput[]
    upsert?: publicationsUpsertWithWhereUniqueWithoutBookmarksInput | publicationsUpsertWithWhereUniqueWithoutBookmarksInput[]
    createMany?: publicationsCreateManyBookmarksInputEnvelope
    set?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    disconnect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    delete?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    connect?: publicationsWhereUniqueInput | publicationsWhereUniqueInput[]
    update?: publicationsUpdateWithWhereUniqueWithoutBookmarksInput | publicationsUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: publicationsUpdateManyWithWhereWithoutBookmarksInput | publicationsUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: publicationsScalarWhereInput | publicationsScalarWhereInput[]
  }

  export type user_profilesUncheckedUpdateManyWithoutBookmarksNestedInput = {
    create?: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput> | user_profilesCreateWithoutBookmarksInput[] | user_profilesUncheckedCreateWithoutBookmarksInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutBookmarksInput | user_profilesCreateOrConnectWithoutBookmarksInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutBookmarksInput | user_profilesUpsertWithWhereUniqueWithoutBookmarksInput[]
    createMany?: user_profilesCreateManyBookmarksInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutBookmarksInput | user_profilesUpdateWithWhereUniqueWithoutBookmarksInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutBookmarksInput | user_profilesUpdateManyWithWhereWithoutBookmarksInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type virtual_profilesCreateNestedOneWithoutCommunity_profilesInput = {
    create?: XOR<virtual_profilesCreateWithoutCommunity_profilesInput, virtual_profilesUncheckedCreateWithoutCommunity_profilesInput>
    connectOrCreate?: virtual_profilesCreateOrConnectWithoutCommunity_profilesInput
    connect?: virtual_profilesWhereUniqueInput
  }

  export type topicsCreateNestedManyWithoutCommunity_profilesInput = {
    create?: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput> | topicsCreateWithoutCommunity_profilesInput[] | topicsUncheckedCreateWithoutCommunity_profilesInput[]
    connectOrCreate?: topicsCreateOrConnectWithoutCommunity_profilesInput | topicsCreateOrConnectWithoutCommunity_profilesInput[]
    createMany?: topicsCreateManyCommunity_profilesInputEnvelope
    connect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
  }

  export type topicsUncheckedCreateNestedManyWithoutCommunity_profilesInput = {
    create?: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput> | topicsCreateWithoutCommunity_profilesInput[] | topicsUncheckedCreateWithoutCommunity_profilesInput[]
    connectOrCreate?: topicsCreateOrConnectWithoutCommunity_profilesInput | topicsCreateOrConnectWithoutCommunity_profilesInput[]
    createMany?: topicsCreateManyCommunity_profilesInputEnvelope
    connect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type virtual_profilesUpdateOneWithoutCommunity_profilesNestedInput = {
    create?: XOR<virtual_profilesCreateWithoutCommunity_profilesInput, virtual_profilesUncheckedCreateWithoutCommunity_profilesInput>
    connectOrCreate?: virtual_profilesCreateOrConnectWithoutCommunity_profilesInput
    upsert?: virtual_profilesUpsertWithoutCommunity_profilesInput
    disconnect?: virtual_profilesWhereInput | boolean
    delete?: virtual_profilesWhereInput | boolean
    connect?: virtual_profilesWhereUniqueInput
    update?: XOR<XOR<virtual_profilesUpdateToOneWithWhereWithoutCommunity_profilesInput, virtual_profilesUpdateWithoutCommunity_profilesInput>, virtual_profilesUncheckedUpdateWithoutCommunity_profilesInput>
  }

  export type topicsUpdateManyWithoutCommunity_profilesNestedInput = {
    create?: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput> | topicsCreateWithoutCommunity_profilesInput[] | topicsUncheckedCreateWithoutCommunity_profilesInput[]
    connectOrCreate?: topicsCreateOrConnectWithoutCommunity_profilesInput | topicsCreateOrConnectWithoutCommunity_profilesInput[]
    upsert?: topicsUpsertWithWhereUniqueWithoutCommunity_profilesInput | topicsUpsertWithWhereUniqueWithoutCommunity_profilesInput[]
    createMany?: topicsCreateManyCommunity_profilesInputEnvelope
    set?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    disconnect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    delete?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    connect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    update?: topicsUpdateWithWhereUniqueWithoutCommunity_profilesInput | topicsUpdateWithWhereUniqueWithoutCommunity_profilesInput[]
    updateMany?: topicsUpdateManyWithWhereWithoutCommunity_profilesInput | topicsUpdateManyWithWhereWithoutCommunity_profilesInput[]
    deleteMany?: topicsScalarWhereInput | topicsScalarWhereInput[]
  }

  export type topicsUncheckedUpdateManyWithoutCommunity_profilesNestedInput = {
    create?: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput> | topicsCreateWithoutCommunity_profilesInput[] | topicsUncheckedCreateWithoutCommunity_profilesInput[]
    connectOrCreate?: topicsCreateOrConnectWithoutCommunity_profilesInput | topicsCreateOrConnectWithoutCommunity_profilesInput[]
    upsert?: topicsUpsertWithWhereUniqueWithoutCommunity_profilesInput | topicsUpsertWithWhereUniqueWithoutCommunity_profilesInput[]
    createMany?: topicsCreateManyCommunity_profilesInputEnvelope
    set?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    disconnect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    delete?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    connect?: topicsWhereUniqueInput | topicsWhereUniqueInput[]
    update?: topicsUpdateWithWhereUniqueWithoutCommunity_profilesInput | topicsUpdateWithWhereUniqueWithoutCommunity_profilesInput[]
    updateMany?: topicsUpdateManyWithWhereWithoutCommunity_profilesInput | topicsUpdateManyWithWhereWithoutCommunity_profilesInput[]
    deleteMany?: topicsScalarWhereInput | topicsScalarWhereInput[]
  }

  export type publicationsCreatepost_idsInput = {
    set: string[]
  }

  export type publicationsCreatesubjectsInput = {
    set: string[]
  }

  export type publicationsCreatetagsInput = {
    set: string[]
  }

  export type bookmarksCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<bookmarksCreateWithoutPublicationsInput, bookmarksUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: bookmarksCreateOrConnectWithoutPublicationsInput
    connect?: bookmarksWhereUniqueInput
  }

  export type user_profilesCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type user_profilesCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type publicationsUpdatepost_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type publicationsUpdatesubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type publicationsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type bookmarksUpdateOneWithoutPublicationsNestedInput = {
    create?: XOR<bookmarksCreateWithoutPublicationsInput, bookmarksUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: bookmarksCreateOrConnectWithoutPublicationsInput
    upsert?: bookmarksUpsertWithoutPublicationsInput
    disconnect?: bookmarksWhereInput | boolean
    delete?: bookmarksWhereInput | boolean
    connect?: bookmarksWhereUniqueInput
    update?: XOR<XOR<bookmarksUpdateToOneWithWhereWithoutPublicationsInput, bookmarksUpdateWithoutPublicationsInput>, bookmarksUncheckedUpdateWithoutPublicationsInput>
  }

  export type user_profilesUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type user_profilesUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_admin_publication_idTopublicationsInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput = {
    create?: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput> | user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[] | user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    createMany?: user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_editors_publication_idTopublicationsInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type community_profilesCreateNestedOneWithoutTopicsInput = {
    create?: XOR<community_profilesCreateWithoutTopicsInput, community_profilesUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: community_profilesCreateOrConnectWithoutTopicsInput
    connect?: community_profilesWhereUniqueInput
  }

  export type community_profilesUpdateOneWithoutTopicsNestedInput = {
    create?: XOR<community_profilesCreateWithoutTopicsInput, community_profilesUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: community_profilesCreateOrConnectWithoutTopicsInput
    upsert?: community_profilesUpsertWithoutTopicsInput
    disconnect?: community_profilesWhereInput | boolean
    delete?: community_profilesWhereInput | boolean
    connect?: community_profilesWhereUniqueInput
    update?: XOR<XOR<community_profilesUpdateToOneWithWhereWithoutTopicsInput, community_profilesUpdateWithoutTopicsInput>, community_profilesUncheckedUpdateWithoutTopicsInput>
  }

  export type publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    create?: XOR<publicationsCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
    connectOrCreate?: publicationsCreateOrConnectWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    connect?: publicationsWhereUniqueInput
  }

  export type publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    create?: XOR<publicationsCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
    connectOrCreate?: publicationsCreateOrConnectWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    connect?: publicationsWhereUniqueInput
  }

  export type bookmarksCreateNestedOneWithoutUser_profilesInput = {
    create?: XOR<bookmarksCreateWithoutUser_profilesInput, bookmarksUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: bookmarksCreateOrConnectWithoutUser_profilesInput
    connect?: bookmarksWhereUniqueInput
  }

  export type virtual_profilesCreateNestedOneWithoutUser_profilesInput = {
    create?: XOR<virtual_profilesCreateWithoutUser_profilesInput, virtual_profilesUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: virtual_profilesCreateOrConnectWithoutUser_profilesInput
    connect?: virtual_profilesWhereUniqueInput
  }

  export type user_tagsCreateNestedManyWithoutUser_profilesInput = {
    create?: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput> | user_tagsCreateWithoutUser_profilesInput[] | user_tagsUncheckedCreateWithoutUser_profilesInput[]
    connectOrCreate?: user_tagsCreateOrConnectWithoutUser_profilesInput | user_tagsCreateOrConnectWithoutUser_profilesInput[]
    createMany?: user_tagsCreateManyUser_profilesInputEnvelope
    connect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
  }

  export type user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput> | user_tagsCreateWithoutUser_profilesInput[] | user_tagsUncheckedCreateWithoutUser_profilesInput[]
    connectOrCreate?: user_tagsCreateOrConnectWithoutUser_profilesInput | user_tagsCreateOrConnectWithoutUser_profilesInput[]
    createMany?: user_tagsCreateManyUser_profilesInputEnvelope
    connect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
  }

  export type publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput = {
    create?: XOR<publicationsCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
    connectOrCreate?: publicationsCreateOrConnectWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    upsert?: publicationsUpsertWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    disconnect?: publicationsWhereInput | boolean
    delete?: publicationsWhereInput | boolean
    connect?: publicationsWhereUniqueInput
    update?: XOR<XOR<publicationsUpdateToOneWithWhereWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput = {
    create?: XOR<publicationsCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
    connectOrCreate?: publicationsCreateOrConnectWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    upsert?: publicationsUpsertWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    disconnect?: publicationsWhereInput | boolean
    delete?: publicationsWhereInput | boolean
    connect?: publicationsWhereUniqueInput
    update?: XOR<XOR<publicationsUpdateToOneWithWhereWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type bookmarksUpdateOneWithoutUser_profilesNestedInput = {
    create?: XOR<bookmarksCreateWithoutUser_profilesInput, bookmarksUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: bookmarksCreateOrConnectWithoutUser_profilesInput
    upsert?: bookmarksUpsertWithoutUser_profilesInput
    disconnect?: bookmarksWhereInput | boolean
    delete?: bookmarksWhereInput | boolean
    connect?: bookmarksWhereUniqueInput
    update?: XOR<XOR<bookmarksUpdateToOneWithWhereWithoutUser_profilesInput, bookmarksUpdateWithoutUser_profilesInput>, bookmarksUncheckedUpdateWithoutUser_profilesInput>
  }

  export type virtual_profilesUpdateOneWithoutUser_profilesNestedInput = {
    create?: XOR<virtual_profilesCreateWithoutUser_profilesInput, virtual_profilesUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: virtual_profilesCreateOrConnectWithoutUser_profilesInput
    upsert?: virtual_profilesUpsertWithoutUser_profilesInput
    disconnect?: virtual_profilesWhereInput | boolean
    delete?: virtual_profilesWhereInput | boolean
    connect?: virtual_profilesWhereUniqueInput
    update?: XOR<XOR<virtual_profilesUpdateToOneWithWhereWithoutUser_profilesInput, virtual_profilesUpdateWithoutUser_profilesInput>, virtual_profilesUncheckedUpdateWithoutUser_profilesInput>
  }

  export type user_tagsUpdateManyWithoutUser_profilesNestedInput = {
    create?: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput> | user_tagsCreateWithoutUser_profilesInput[] | user_tagsUncheckedCreateWithoutUser_profilesInput[]
    connectOrCreate?: user_tagsCreateOrConnectWithoutUser_profilesInput | user_tagsCreateOrConnectWithoutUser_profilesInput[]
    upsert?: user_tagsUpsertWithWhereUniqueWithoutUser_profilesInput | user_tagsUpsertWithWhereUniqueWithoutUser_profilesInput[]
    createMany?: user_tagsCreateManyUser_profilesInputEnvelope
    set?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    disconnect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    delete?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    connect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    update?: user_tagsUpdateWithWhereUniqueWithoutUser_profilesInput | user_tagsUpdateWithWhereUniqueWithoutUser_profilesInput[]
    updateMany?: user_tagsUpdateManyWithWhereWithoutUser_profilesInput | user_tagsUpdateManyWithWhereWithoutUser_profilesInput[]
    deleteMany?: user_tagsScalarWhereInput | user_tagsScalarWhereInput[]
  }

  export type user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput> | user_tagsCreateWithoutUser_profilesInput[] | user_tagsUncheckedCreateWithoutUser_profilesInput[]
    connectOrCreate?: user_tagsCreateOrConnectWithoutUser_profilesInput | user_tagsCreateOrConnectWithoutUser_profilesInput[]
    upsert?: user_tagsUpsertWithWhereUniqueWithoutUser_profilesInput | user_tagsUpsertWithWhereUniqueWithoutUser_profilesInput[]
    createMany?: user_tagsCreateManyUser_profilesInputEnvelope
    set?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    disconnect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    delete?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    connect?: user_tagsWhereUniqueInput | user_tagsWhereUniqueInput[]
    update?: user_tagsUpdateWithWhereUniqueWithoutUser_profilesInput | user_tagsUpdateWithWhereUniqueWithoutUser_profilesInput[]
    updateMany?: user_tagsUpdateManyWithWhereWithoutUser_profilesInput | user_tagsUpdateManyWithWhereWithoutUser_profilesInput[]
    deleteMany?: user_tagsScalarWhereInput | user_tagsScalarWhereInput[]
  }

  export type user_profilesCreateNestedOneWithoutUser_tagsInput = {
    create?: XOR<user_profilesCreateWithoutUser_tagsInput, user_profilesUncheckedCreateWithoutUser_tagsInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUser_tagsInput
    connect?: user_profilesWhereUniqueInput
  }

  export type user_profilesUpdateOneWithoutUser_tagsNestedInput = {
    create?: XOR<user_profilesCreateWithoutUser_tagsInput, user_profilesUncheckedCreateWithoutUser_tagsInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUser_tagsInput
    upsert?: user_profilesUpsertWithoutUser_tagsInput
    disconnect?: user_profilesWhereInput | boolean
    delete?: user_profilesWhereInput | boolean
    connect?: user_profilesWhereUniqueInput
    update?: XOR<XOR<user_profilesUpdateToOneWithWhereWithoutUser_tagsInput, user_profilesUpdateWithoutUser_tagsInput>, user_profilesUncheckedUpdateWithoutUser_tagsInput>
  }

  export type community_profilesCreateNestedManyWithoutVirtual_profilesInput = {
    create?: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput> | community_profilesCreateWithoutVirtual_profilesInput[] | community_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: community_profilesCreateOrConnectWithoutVirtual_profilesInput | community_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    createMany?: community_profilesCreateManyVirtual_profilesInputEnvelope
    connect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
  }

  export type user_profilesCreateNestedManyWithoutVirtual_profilesInput = {
    create?: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput> | user_profilesCreateWithoutVirtual_profilesInput[] | user_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutVirtual_profilesInput | user_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    createMany?: user_profilesCreateManyVirtual_profilesInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type community_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput = {
    create?: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput> | community_profilesCreateWithoutVirtual_profilesInput[] | community_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: community_profilesCreateOrConnectWithoutVirtual_profilesInput | community_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    createMany?: community_profilesCreateManyVirtual_profilesInputEnvelope
    connect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
  }

  export type user_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput = {
    create?: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput> | user_profilesCreateWithoutVirtual_profilesInput[] | user_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutVirtual_profilesInput | user_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    createMany?: user_profilesCreateManyVirtual_profilesInputEnvelope
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
  }

  export type community_profilesUpdateManyWithoutVirtual_profilesNestedInput = {
    create?: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput> | community_profilesCreateWithoutVirtual_profilesInput[] | community_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: community_profilesCreateOrConnectWithoutVirtual_profilesInput | community_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    upsert?: community_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput | community_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput[]
    createMany?: community_profilesCreateManyVirtual_profilesInputEnvelope
    set?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    disconnect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    delete?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    connect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    update?: community_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput | community_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput[]
    updateMany?: community_profilesUpdateManyWithWhereWithoutVirtual_profilesInput | community_profilesUpdateManyWithWhereWithoutVirtual_profilesInput[]
    deleteMany?: community_profilesScalarWhereInput | community_profilesScalarWhereInput[]
  }

  export type user_profilesUpdateManyWithoutVirtual_profilesNestedInput = {
    create?: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput> | user_profilesCreateWithoutVirtual_profilesInput[] | user_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutVirtual_profilesInput | user_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput | user_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput[]
    createMany?: user_profilesCreateManyVirtual_profilesInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput | user_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutVirtual_profilesInput | user_profilesUpdateManyWithWhereWithoutVirtual_profilesInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type community_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput = {
    create?: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput> | community_profilesCreateWithoutVirtual_profilesInput[] | community_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: community_profilesCreateOrConnectWithoutVirtual_profilesInput | community_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    upsert?: community_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput | community_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput[]
    createMany?: community_profilesCreateManyVirtual_profilesInputEnvelope
    set?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    disconnect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    delete?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    connect?: community_profilesWhereUniqueInput | community_profilesWhereUniqueInput[]
    update?: community_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput | community_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput[]
    updateMany?: community_profilesUpdateManyWithWhereWithoutVirtual_profilesInput | community_profilesUpdateManyWithWhereWithoutVirtual_profilesInput[]
    deleteMany?: community_profilesScalarWhereInput | community_profilesScalarWhereInput[]
  }

  export type user_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput = {
    create?: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput> | user_profilesCreateWithoutVirtual_profilesInput[] | user_profilesUncheckedCreateWithoutVirtual_profilesInput[]
    connectOrCreate?: user_profilesCreateOrConnectWithoutVirtual_profilesInput | user_profilesCreateOrConnectWithoutVirtual_profilesInput[]
    upsert?: user_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput | user_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput[]
    createMany?: user_profilesCreateManyVirtual_profilesInputEnvelope
    set?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    disconnect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    delete?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    connect?: user_profilesWhereUniqueInput | user_profilesWhereUniqueInput[]
    update?: user_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput | user_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput[]
    updateMany?: user_profilesUpdateManyWithWhereWithoutVirtual_profilesInput | user_profilesUpdateManyWithWhereWithoutVirtual_profilesInput[]
    deleteMany?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type publicationsCreateWithoutBookmarksInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsUncheckedCreateWithoutBookmarksInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsCreateOrConnectWithoutBookmarksInput = {
    where: publicationsWhereUniqueInput
    create: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput>
  }

  export type publicationsCreateManyBookmarksInputEnvelope = {
    data: publicationsCreateManyBookmarksInput | publicationsCreateManyBookmarksInput[]
    skipDuplicates?: boolean
  }

  export type user_profilesCreateWithoutBookmarksInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutUser_profilesInput
    user_tags?: user_tagsCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateWithoutBookmarksInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    user_tags?: user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesCreateOrConnectWithoutBookmarksInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput>
  }

  export type user_profilesCreateManyBookmarksInputEnvelope = {
    data: user_profilesCreateManyBookmarksInput | user_profilesCreateManyBookmarksInput[]
    skipDuplicates?: boolean
  }

  export type publicationsUpsertWithWhereUniqueWithoutBookmarksInput = {
    where: publicationsWhereUniqueInput
    update: XOR<publicationsUpdateWithoutBookmarksInput, publicationsUncheckedUpdateWithoutBookmarksInput>
    create: XOR<publicationsCreateWithoutBookmarksInput, publicationsUncheckedCreateWithoutBookmarksInput>
  }

  export type publicationsUpdateWithWhereUniqueWithoutBookmarksInput = {
    where: publicationsWhereUniqueInput
    data: XOR<publicationsUpdateWithoutBookmarksInput, publicationsUncheckedUpdateWithoutBookmarksInput>
  }

  export type publicationsUpdateManyWithWhereWithoutBookmarksInput = {
    where: publicationsScalarWhereInput
    data: XOR<publicationsUpdateManyMutationInput, publicationsUncheckedUpdateManyWithoutBookmarksInput>
  }

  export type publicationsScalarWhereInput = {
    AND?: publicationsScalarWhereInput | publicationsScalarWhereInput[]
    OR?: publicationsScalarWhereInput[]
    NOT?: publicationsScalarWhereInput | publicationsScalarWhereInput[]
    admin_backend_platform_user_id?: StringNullableFilter<"publications"> | string | null
    bookmark_id?: BigIntNullableFilter<"publications"> | bigint | number | null
    created_at?: StringNullableFilter<"publications"> | string | null
    description?: StringNullableFilter<"publications"> | string | null
    id?: BigIntFilter<"publications"> | bigint | number
    post_ids?: StringNullableListFilter<"publications">
    publication_name?: StringNullableFilter<"publications"> | string | null
    subjects?: StringNullableListFilter<"publications">
    tags?: StringNullableListFilter<"publications">
    type?: StringNullableFilter<"publications"> | string | null
  }

  export type user_profilesUpsertWithWhereUniqueWithoutBookmarksInput = {
    where: user_profilesWhereUniqueInput
    update: XOR<user_profilesUpdateWithoutBookmarksInput, user_profilesUncheckedUpdateWithoutBookmarksInput>
    create: XOR<user_profilesCreateWithoutBookmarksInput, user_profilesUncheckedCreateWithoutBookmarksInput>
  }

  export type user_profilesUpdateWithWhereUniqueWithoutBookmarksInput = {
    where: user_profilesWhereUniqueInput
    data: XOR<user_profilesUpdateWithoutBookmarksInput, user_profilesUncheckedUpdateWithoutBookmarksInput>
  }

  export type user_profilesUpdateManyWithWhereWithoutBookmarksInput = {
    where: user_profilesScalarWhereInput
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyWithoutBookmarksInput>
  }

  export type user_profilesScalarWhereInput = {
    AND?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
    OR?: user_profilesScalarWhereInput[]
    NOT?: user_profilesScalarWhereInput | user_profilesScalarWhereInput[]
    admin_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    algolia_id?: StringNullableFilter<"user_profiles"> | string | null
    bookmark_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    editors_publication_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    followers?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    following?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
    id?: BigIntFilter<"user_profiles"> | bigint | number
    name?: StringNullableFilter<"user_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"user_profiles"> | string | null
    private?: BoolNullableFilter<"user_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"user_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"user_profiles"> | bigint | number | null
  }

  export type virtual_profilesCreateWithoutCommunity_profilesInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    user_profiles?: user_profilesCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesUncheckedCreateWithoutCommunity_profilesInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesCreateOrConnectWithoutCommunity_profilesInput = {
    where: virtual_profilesWhereUniqueInput
    create: XOR<virtual_profilesCreateWithoutCommunity_profilesInput, virtual_profilesUncheckedCreateWithoutCommunity_profilesInput>
  }

  export type topicsCreateWithoutCommunity_profilesInput = {
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
  }

  export type topicsUncheckedCreateWithoutCommunity_profilesInput = {
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
  }

  export type topicsCreateOrConnectWithoutCommunity_profilesInput = {
    where: topicsWhereUniqueInput
    create: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput>
  }

  export type topicsCreateManyCommunity_profilesInputEnvelope = {
    data: topicsCreateManyCommunity_profilesInput | topicsCreateManyCommunity_profilesInput[]
    skipDuplicates?: boolean
  }

  export type virtual_profilesUpsertWithoutCommunity_profilesInput = {
    update: XOR<virtual_profilesUpdateWithoutCommunity_profilesInput, virtual_profilesUncheckedUpdateWithoutCommunity_profilesInput>
    create: XOR<virtual_profilesCreateWithoutCommunity_profilesInput, virtual_profilesUncheckedCreateWithoutCommunity_profilesInput>
    where?: virtual_profilesWhereInput
  }

  export type virtual_profilesUpdateToOneWithWhereWithoutCommunity_profilesInput = {
    where?: virtual_profilesWhereInput
    data: XOR<virtual_profilesUpdateWithoutCommunity_profilesInput, virtual_profilesUncheckedUpdateWithoutCommunity_profilesInput>
  }

  export type virtual_profilesUpdateWithoutCommunity_profilesInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles?: user_profilesUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type virtual_profilesUncheckedUpdateWithoutCommunity_profilesInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles?: user_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type topicsUpsertWithWhereUniqueWithoutCommunity_profilesInput = {
    where: topicsWhereUniqueInput
    update: XOR<topicsUpdateWithoutCommunity_profilesInput, topicsUncheckedUpdateWithoutCommunity_profilesInput>
    create: XOR<topicsCreateWithoutCommunity_profilesInput, topicsUncheckedCreateWithoutCommunity_profilesInput>
  }

  export type topicsUpdateWithWhereUniqueWithoutCommunity_profilesInput = {
    where: topicsWhereUniqueInput
    data: XOR<topicsUpdateWithoutCommunity_profilesInput, topicsUncheckedUpdateWithoutCommunity_profilesInput>
  }

  export type topicsUpdateManyWithWhereWithoutCommunity_profilesInput = {
    where: topicsScalarWhereInput
    data: XOR<topicsUpdateManyMutationInput, topicsUncheckedUpdateManyWithoutCommunity_profilesInput>
  }

  export type topicsScalarWhereInput = {
    AND?: topicsScalarWhereInput | topicsScalarWhereInput[]
    OR?: topicsScalarWhereInput[]
    NOT?: topicsScalarWhereInput | topicsScalarWhereInput[]
    community_profile_id?: BigIntNullableFilter<"topics"> | bigint | number | null
    description?: StringNullableFilter<"topics"> | string | null
    id?: BigIntFilter<"topics"> | bigint | number
    image_url?: StringNullableFilter<"topics"> | string | null
    topic_name?: StringNullableFilter<"topics"> | string | null
  }

  export type bookmarksCreateWithoutPublicationsInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    user_profiles?: user_profilesCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksUncheckedCreateWithoutPublicationsInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    user_profiles?: user_profilesUncheckedCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksCreateOrConnectWithoutPublicationsInput = {
    where: bookmarksWhereUniqueInput
    create: XOR<bookmarksCreateWithoutPublicationsInput, bookmarksUncheckedCreateWithoutPublicationsInput>
  }

  export type user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_editors_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    bookmarks?: bookmarksCreateNestedOneWithoutUser_profilesInput
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutUser_profilesInput
    user_tags?: user_tagsCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    user_tags?: user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesCreateOrConnectWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInputEnvelope = {
    data: user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInput | user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInput[]
    skipDuplicates?: boolean
  }

  export type user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    bookmarks?: bookmarksCreateNestedOneWithoutUser_profilesInput
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutUser_profilesInput
    user_tags?: user_tagsCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    user_tags?: user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesCreateOrConnectWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInputEnvelope = {
    data: user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInput | user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInput[]
    skipDuplicates?: boolean
  }

  export type bookmarksUpsertWithoutPublicationsInput = {
    update: XOR<bookmarksUpdateWithoutPublicationsInput, bookmarksUncheckedUpdateWithoutPublicationsInput>
    create: XOR<bookmarksCreateWithoutPublicationsInput, bookmarksUncheckedCreateWithoutPublicationsInput>
    where?: bookmarksWhereInput
  }

  export type bookmarksUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: bookmarksWhereInput
    data: XOR<bookmarksUpdateWithoutPublicationsInput, bookmarksUncheckedUpdateWithoutPublicationsInput>
  }

  export type bookmarksUpdateWithoutPublicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    user_profiles?: user_profilesUpdateManyWithoutBookmarksNestedInput
  }

  export type bookmarksUncheckedUpdateWithoutPublicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    user_profiles?: user_profilesUncheckedUpdateManyWithoutBookmarksNestedInput
  }

  export type user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    update: XOR<user_profilesUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput>
    create: XOR<user_profilesCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    data: XOR<user_profilesUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput, user_profilesUncheckedUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    where: user_profilesScalarWhereInput
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type user_profilesUpsertWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    update: XOR<user_profilesUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput>
    create: XOR<user_profilesCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedCreateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type user_profilesUpdateWithWhereUniqueWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    where: user_profilesWhereUniqueInput
    data: XOR<user_profilesUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput, user_profilesUncheckedUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type user_profilesUpdateManyWithWhereWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    where: user_profilesScalarWhereInput
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type community_profilesCreateWithoutTopicsInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    visible?: boolean | null
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutCommunity_profilesInput
  }

  export type community_profilesUncheckedCreateWithoutTopicsInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
    visible?: boolean | null
  }

  export type community_profilesCreateOrConnectWithoutTopicsInput = {
    where: community_profilesWhereUniqueInput
    create: XOR<community_profilesCreateWithoutTopicsInput, community_profilesUncheckedCreateWithoutTopicsInput>
  }

  export type community_profilesUpsertWithoutTopicsInput = {
    update: XOR<community_profilesUpdateWithoutTopicsInput, community_profilesUncheckedUpdateWithoutTopicsInput>
    create: XOR<community_profilesCreateWithoutTopicsInput, community_profilesUncheckedCreateWithoutTopicsInput>
    where?: community_profilesWhereInput
  }

  export type community_profilesUpdateToOneWithWhereWithoutTopicsInput = {
    where?: community_profilesWhereInput
    data: XOR<community_profilesUpdateWithoutTopicsInput, community_profilesUncheckedUpdateWithoutTopicsInput>
  }

  export type community_profilesUpdateWithoutTopicsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    virtual_profiles?: virtual_profilesUpdateOneWithoutCommunity_profilesNestedInput
  }

  export type community_profilesUncheckedUpdateWithoutTopicsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type publicationsCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    bookmarks?: bookmarksCreateNestedOneWithoutPublicationsInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsUncheckedCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: string | null
    bookmark_id?: bigint | number | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput
  }

  export type publicationsCreateOrConnectWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    where: publicationsWhereUniqueInput
    create: XOR<publicationsCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type publicationsCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    bookmarks?: bookmarksCreateNestedOneWithoutPublicationsInput
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
  }

  export type publicationsUncheckedCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: string | null
    bookmark_id?: bigint | number | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedCreateNestedManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput
  }

  export type publicationsCreateOrConnectWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    where: publicationsWhereUniqueInput
    create: XOR<publicationsCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type bookmarksCreateWithoutUser_profilesInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    publications?: publicationsCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksUncheckedCreateWithoutUser_profilesInput = {
    id?: bigint | number
    post_ids?: bookmarksCreatepost_idsInput | string[]
    publications?: publicationsUncheckedCreateNestedManyWithoutBookmarksInput
  }

  export type bookmarksCreateOrConnectWithoutUser_profilesInput = {
    where: bookmarksWhereUniqueInput
    create: XOR<bookmarksCreateWithoutUser_profilesInput, bookmarksUncheckedCreateWithoutUser_profilesInput>
  }

  export type virtual_profilesCreateWithoutUser_profilesInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    community_profiles?: community_profilesCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesUncheckedCreateWithoutUser_profilesInput = {
    activated?: boolean | null
    id?: bigint | number
    profile_type?: string | null
    user_id?: string | null
    community_profiles?: community_profilesUncheckedCreateNestedManyWithoutVirtual_profilesInput
  }

  export type virtual_profilesCreateOrConnectWithoutUser_profilesInput = {
    where: virtual_profilesWhereUniqueInput
    create: XOR<virtual_profilesCreateWithoutUser_profilesInput, virtual_profilesUncheckedCreateWithoutUser_profilesInput>
  }

  export type user_tagsCreateWithoutUser_profilesInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
  }

  export type user_tagsUncheckedCreateWithoutUser_profilesInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
  }

  export type user_tagsCreateOrConnectWithoutUser_profilesInput = {
    where: user_tagsWhereUniqueInput
    create: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput>
  }

  export type user_tagsCreateManyUser_profilesInputEnvelope = {
    data: user_tagsCreateManyUser_profilesInput | user_tagsCreateManyUser_profilesInput[]
    skipDuplicates?: boolean
  }

  export type publicationsUpsertWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    update: XOR<publicationsUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
    create: XOR<publicationsCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
    where?: publicationsWhereInput
  }

  export type publicationsUpdateToOneWithWhereWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    where?: publicationsWhereInput
    data: XOR<publicationsUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput>
  }

  export type publicationsUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: bookmarksUpdateOneWithoutPublicationsNestedInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsUpsertWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    update: XOR<publicationsUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
    create: XOR<publicationsCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedCreateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
    where?: publicationsWhereInput
  }

  export type publicationsUpdateToOneWithWhereWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    where?: publicationsWhereInput
    data: XOR<publicationsUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput, publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput>
  }

  export type publicationsUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: bookmarksUpdateOneWithoutPublicationsNestedInput
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
  }

  export type publicationsUncheckedUpdateWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
  }

  export type bookmarksUpsertWithoutUser_profilesInput = {
    update: XOR<bookmarksUpdateWithoutUser_profilesInput, bookmarksUncheckedUpdateWithoutUser_profilesInput>
    create: XOR<bookmarksCreateWithoutUser_profilesInput, bookmarksUncheckedCreateWithoutUser_profilesInput>
    where?: bookmarksWhereInput
  }

  export type bookmarksUpdateToOneWithWhereWithoutUser_profilesInput = {
    where?: bookmarksWhereInput
    data: XOR<bookmarksUpdateWithoutUser_profilesInput, bookmarksUncheckedUpdateWithoutUser_profilesInput>
  }

  export type bookmarksUpdateWithoutUser_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    publications?: publicationsUpdateManyWithoutBookmarksNestedInput
  }

  export type bookmarksUncheckedUpdateWithoutUser_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: bookmarksUpdatepost_idsInput | string[]
    publications?: publicationsUncheckedUpdateManyWithoutBookmarksNestedInput
  }

  export type virtual_profilesUpsertWithoutUser_profilesInput = {
    update: XOR<virtual_profilesUpdateWithoutUser_profilesInput, virtual_profilesUncheckedUpdateWithoutUser_profilesInput>
    create: XOR<virtual_profilesCreateWithoutUser_profilesInput, virtual_profilesUncheckedCreateWithoutUser_profilesInput>
    where?: virtual_profilesWhereInput
  }

  export type virtual_profilesUpdateToOneWithWhereWithoutUser_profilesInput = {
    where?: virtual_profilesWhereInput
    data: XOR<virtual_profilesUpdateWithoutUser_profilesInput, virtual_profilesUncheckedUpdateWithoutUser_profilesInput>
  }

  export type virtual_profilesUpdateWithoutUser_profilesInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_profiles?: community_profilesUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type virtual_profilesUncheckedUpdateWithoutUser_profilesInput = {
    activated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_type?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_profiles?: community_profilesUncheckedUpdateManyWithoutVirtual_profilesNestedInput
  }

  export type user_tagsUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: user_tagsWhereUniqueInput
    update: XOR<user_tagsUpdateWithoutUser_profilesInput, user_tagsUncheckedUpdateWithoutUser_profilesInput>
    create: XOR<user_tagsCreateWithoutUser_profilesInput, user_tagsUncheckedCreateWithoutUser_profilesInput>
  }

  export type user_tagsUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: user_tagsWhereUniqueInput
    data: XOR<user_tagsUpdateWithoutUser_profilesInput, user_tagsUncheckedUpdateWithoutUser_profilesInput>
  }

  export type user_tagsUpdateManyWithWhereWithoutUser_profilesInput = {
    where: user_tagsScalarWhereInput
    data: XOR<user_tagsUpdateManyMutationInput, user_tagsUncheckedUpdateManyWithoutUser_profilesInput>
  }

  export type user_tagsScalarWhereInput = {
    AND?: user_tagsScalarWhereInput | user_tagsScalarWhereInput[]
    OR?: user_tagsScalarWhereInput[]
    NOT?: user_tagsScalarWhereInput | user_tagsScalarWhereInput[]
    description?: StringNullableFilter<"user_tags"> | string | null
    id?: BigIntFilter<"user_tags"> | bigint | number
    tag_name?: StringNullableFilter<"user_tags"> | string | null
    user_profile_id?: BigIntNullableFilter<"user_tags"> | bigint | number | null
  }

  export type user_profilesCreateWithoutUser_tagsInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    bookmarks?: bookmarksCreateNestedOneWithoutUser_profilesInput
    virtual_profiles?: virtual_profilesCreateNestedOneWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateWithoutUser_tagsInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
  }

  export type user_profilesCreateOrConnectWithoutUser_tagsInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutUser_tagsInput, user_profilesUncheckedCreateWithoutUser_tagsInput>
  }

  export type user_profilesUpsertWithoutUser_tagsInput = {
    update: XOR<user_profilesUpdateWithoutUser_tagsInput, user_profilesUncheckedUpdateWithoutUser_tagsInput>
    create: XOR<user_profilesCreateWithoutUser_tagsInput, user_profilesUncheckedCreateWithoutUser_tagsInput>
    where?: user_profilesWhereInput
  }

  export type user_profilesUpdateToOneWithWhereWithoutUser_tagsInput = {
    where?: user_profilesWhereInput
    data: XOR<user_profilesUpdateWithoutUser_tagsInput, user_profilesUncheckedUpdateWithoutUser_tagsInput>
  }

  export type user_profilesUpdateWithoutUser_tagsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput
    bookmarks?: bookmarksUpdateOneWithoutUser_profilesNestedInput
    virtual_profiles?: virtual_profilesUpdateOneWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateWithoutUser_tagsInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type community_profilesCreateWithoutVirtual_profilesInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    visible?: boolean | null
    topics?: topicsCreateNestedManyWithoutCommunity_profilesInput
  }

  export type community_profilesUncheckedCreateWithoutVirtual_profilesInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    visible?: boolean | null
    topics?: topicsUncheckedCreateNestedManyWithoutCommunity_profilesInput
  }

  export type community_profilesCreateOrConnectWithoutVirtual_profilesInput = {
    where: community_profilesWhereUniqueInput
    create: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput>
  }

  export type community_profilesCreateManyVirtual_profilesInputEnvelope = {
    data: community_profilesCreateManyVirtual_profilesInput | community_profilesCreateManyVirtual_profilesInput[]
    skipDuplicates?: boolean
  }

  export type user_profilesCreateWithoutVirtual_profilesInput = {
    algolia_id?: string | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsCreateNestedOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsInput
    bookmarks?: bookmarksCreateNestedOneWithoutUser_profilesInput
    user_tags?: user_tagsCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateWithoutVirtual_profilesInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    user_tags?: user_tagsUncheckedCreateNestedManyWithoutUser_profilesInput
  }

  export type user_profilesCreateOrConnectWithoutVirtual_profilesInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput>
  }

  export type user_profilesCreateManyVirtual_profilesInputEnvelope = {
    data: user_profilesCreateManyVirtual_profilesInput | user_profilesCreateManyVirtual_profilesInput[]
    skipDuplicates?: boolean
  }

  export type community_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput = {
    where: community_profilesWhereUniqueInput
    update: XOR<community_profilesUpdateWithoutVirtual_profilesInput, community_profilesUncheckedUpdateWithoutVirtual_profilesInput>
    create: XOR<community_profilesCreateWithoutVirtual_profilesInput, community_profilesUncheckedCreateWithoutVirtual_profilesInput>
  }

  export type community_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput = {
    where: community_profilesWhereUniqueInput
    data: XOR<community_profilesUpdateWithoutVirtual_profilesInput, community_profilesUncheckedUpdateWithoutVirtual_profilesInput>
  }

  export type community_profilesUpdateManyWithWhereWithoutVirtual_profilesInput = {
    where: community_profilesScalarWhereInput
    data: XOR<community_profilesUpdateManyMutationInput, community_profilesUncheckedUpdateManyWithoutVirtual_profilesInput>
  }

  export type community_profilesScalarWhereInput = {
    AND?: community_profilesScalarWhereInput | community_profilesScalarWhereInput[]
    OR?: community_profilesScalarWhereInput[]
    NOT?: community_profilesScalarWhereInput | community_profilesScalarWhereInput[]
    algolia_id?: StringNullableFilter<"community_profiles"> | string | null
    community_rules?: StringNullableFilter<"community_profiles"> | string | null
    description?: StringNullableFilter<"community_profiles"> | string | null
    followers?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    id?: BigIntFilter<"community_profiles"> | bigint | number
    name?: StringNullableFilter<"community_profiles"> | string | null
    news_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    notification_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    personal_feed_timeline_id?: StringNullableFilter<"community_profiles"> | string | null
    private?: BoolNullableFilter<"community_profiles"> | boolean | null
    profile_image_url?: StringNullableFilter<"community_profiles"> | string | null
    virtual_profile_id?: BigIntNullableFilter<"community_profiles"> | bigint | number | null
    visible?: BoolNullableFilter<"community_profiles"> | boolean | null
  }

  export type user_profilesUpsertWithWhereUniqueWithoutVirtual_profilesInput = {
    where: user_profilesWhereUniqueInput
    update: XOR<user_profilesUpdateWithoutVirtual_profilesInput, user_profilesUncheckedUpdateWithoutVirtual_profilesInput>
    create: XOR<user_profilesCreateWithoutVirtual_profilesInput, user_profilesUncheckedCreateWithoutVirtual_profilesInput>
  }

  export type user_profilesUpdateWithWhereUniqueWithoutVirtual_profilesInput = {
    where: user_profilesWhereUniqueInput
    data: XOR<user_profilesUpdateWithoutVirtual_profilesInput, user_profilesUncheckedUpdateWithoutVirtual_profilesInput>
  }

  export type user_profilesUpdateManyWithWhereWithoutVirtual_profilesInput = {
    where: user_profilesScalarWhereInput
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyWithoutVirtual_profilesInput>
  }

  export type publicationsCreateManyBookmarksInput = {
    admin_backend_platform_user_id?: string | null
    created_at?: string | null
    description?: string | null
    id?: bigint | number
    post_ids?: publicationsCreatepost_idsInput | string[]
    publication_name?: string | null
    subjects?: publicationsCreatesubjectsInput | string[]
    tags?: publicationsCreatetagsInput | string[]
    type?: string | null
  }

  export type user_profilesCreateManyBookmarksInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
  }

  export type publicationsUpdateWithoutBookmarksInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsUncheckedUpdateWithoutBookmarksInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
    user_profiles_user_profiles_admin_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsNestedInput
    user_profiles_user_profiles_editors_publication_idTopublications?: user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsNestedInput
  }

  export type publicationsUncheckedUpdateManyWithoutBookmarksInput = {
    admin_backend_platform_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    post_ids?: publicationsUpdatepost_idsInput | string[]
    publication_name?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: publicationsUpdatesubjectsInput | string[]
    tags?: publicationsUpdatetagsInput | string[]
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesUpdateWithoutBookmarksInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput
    virtual_profiles?: virtual_profilesUpdateOneWithoutUser_profilesNestedInput
    user_tags?: user_tagsUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateWithoutBookmarksInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_tags?: user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateManyWithoutBookmarksInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type topicsCreateManyCommunity_profilesInput = {
    description?: string | null
    id?: bigint | number
    image_url?: string | null
    topic_name?: string | null
  }

  export type topicsUpdateWithoutCommunity_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicsUncheckedUpdateWithoutCommunity_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicsUncheckedUpdateManyWithoutCommunity_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    topic_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profilesCreateManyPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
  }

  export type user_profilesCreateManyPublications_user_profiles_editors_publication_idTopublicationsInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    virtual_profile_id?: bigint | number | null
  }

  export type user_profilesUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_editors_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput
    bookmarks?: bookmarksUpdateOneWithoutUser_profilesNestedInput
    virtual_profiles?: virtual_profilesUpdateOneWithoutUser_profilesNestedInput
    user_tags?: user_tagsUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_tags?: user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_admin_publication_idTopublicationsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type user_profilesUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput
    bookmarks?: bookmarksUpdateOneWithoutUser_profilesNestedInput
    virtual_profiles?: virtual_profilesUpdateOneWithoutUser_profilesNestedInput
    user_tags?: user_tagsUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_tags?: user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateManyWithoutPublications_user_profiles_editors_publication_idTopublicationsInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    virtual_profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type user_tagsCreateManyUser_profilesInput = {
    description?: string | null
    id?: bigint | number
    tag_name?: string | null
  }

  export type user_tagsUpdateWithoutUser_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tagsUncheckedUpdateWithoutUser_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_tagsUncheckedUpdateManyWithoutUser_profilesInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type community_profilesCreateManyVirtual_profilesInput = {
    algolia_id?: string | null
    community_rules?: string | null
    description?: string | null
    followers?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
    visible?: boolean | null
  }

  export type user_profilesCreateManyVirtual_profilesInput = {
    admin_publication_id?: bigint | number | null
    algolia_id?: string | null
    bookmark_id?: bigint | number | null
    editors_publication_id?: bigint | number | null
    followers?: bigint | number | null
    following?: bigint | number | null
    id?: bigint | number
    name?: string | null
    news_feed_timeline_id?: string | null
    notification_feed_timeline_id?: string | null
    personal_feed_timeline_id?: string | null
    private?: boolean | null
    profile_image_url?: string | null
  }

  export type community_profilesUpdateWithoutVirtual_profilesInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    topics?: topicsUpdateManyWithoutCommunity_profilesNestedInput
  }

  export type community_profilesUncheckedUpdateWithoutVirtual_profilesInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    topics?: topicsUncheckedUpdateManyWithoutCommunity_profilesNestedInput
  }

  export type community_profilesUncheckedUpdateManyWithoutVirtual_profilesInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    community_rules?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_profilesUpdateWithoutVirtual_profilesInput = {
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    publications_user_profiles_admin_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_admin_publication_idTopublicationsNestedInput
    publications_user_profiles_editors_publication_idTopublications?: publicationsUpdateOneWithoutUser_profiles_user_profiles_editors_publication_idTopublicationsNestedInput
    bookmarks?: bookmarksUpdateOneWithoutUser_profilesNestedInput
    user_tags?: user_tagsUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateWithoutVirtual_profilesInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_tags?: user_tagsUncheckedUpdateManyWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateManyWithoutVirtual_profilesInput = {
    admin_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    algolia_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookmark_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    editors_publication_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    news_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    notification_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    personal_feed_timeline_id?: NullableStringFieldUpdateOperationsInput | string | null
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BookmarksCountOutputTypeDefaultArgs instead
     */
    export type BookmarksCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Community_profilesCountOutputTypeDefaultArgs instead
     */
    export type Community_profilesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Community_profilesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicationsCountOutputTypeDefaultArgs instead
     */
    export type PublicationsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_profilesCountOutputTypeDefaultArgs instead
     */
    export type User_profilesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_profilesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Virtual_profilesCountOutputTypeDefaultArgs instead
     */
    export type Virtual_profilesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Virtual_profilesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use blockedsDefaultArgs instead
     */
    export type blockedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = blockedsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bookmarksDefaultArgs instead
     */
    export type bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bookmarksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use community_profilesDefaultArgs instead
     */
    export type community_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = community_profilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use followersDefaultArgs instead
     */
    export type followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = followersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use publicationsDefaultArgs instead
     */
    export type publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = publicationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use topicsDefaultArgs instead
     */
    export type topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = topicsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_profilesDefaultArgs instead
     */
    export type user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_profilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_tagsDefaultArgs instead
     */
    export type user_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_tagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use virtual_profilesDefaultArgs instead
     */
    export type virtual_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = virtual_profilesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}