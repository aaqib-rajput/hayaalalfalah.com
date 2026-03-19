
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
 * Model ShuraMember
 * 
 */
export type ShuraMember = $Result.DefaultSelection<Prisma.$ShuraMemberPayload>
/**
 * Model MosqueVisit
 * 
 */
export type MosqueVisit = $Result.DefaultSelection<Prisma.$MosqueVisitPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShuraMembers
 * const shuraMembers = await prisma.shuraMember.findMany()
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
   * // Fetch zero or more ShuraMembers
   * const shuraMembers = await prisma.shuraMember.findMany()
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
   * `prisma.shuraMember`: Exposes CRUD operations for the **ShuraMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShuraMembers
    * const shuraMembers = await prisma.shuraMember.findMany()
    * ```
    */
  get shuraMember(): Prisma.ShuraMemberDelegate<ExtArgs>;

  /**
   * `prisma.mosqueVisit`: Exposes CRUD operations for the **MosqueVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MosqueVisits
    * const mosqueVisits = await prisma.mosqueVisit.findMany()
    * ```
    */
  get mosqueVisit(): Prisma.MosqueVisitDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    ShuraMember: 'ShuraMember',
    MosqueVisit: 'MosqueVisit'
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
      modelProps: "shuraMember" | "mosqueVisit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShuraMember: {
        payload: Prisma.$ShuraMemberPayload<ExtArgs>
        fields: Prisma.ShuraMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShuraMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShuraMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          findFirst: {
            args: Prisma.ShuraMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShuraMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          findMany: {
            args: Prisma.ShuraMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>[]
          }
          create: {
            args: Prisma.ShuraMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          createMany: {
            args: Prisma.ShuraMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShuraMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>[]
          }
          delete: {
            args: Prisma.ShuraMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          update: {
            args: Prisma.ShuraMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          deleteMany: {
            args: Prisma.ShuraMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShuraMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShuraMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShuraMemberPayload>
          }
          aggregate: {
            args: Prisma.ShuraMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShuraMember>
          }
          groupBy: {
            args: Prisma.ShuraMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShuraMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShuraMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ShuraMemberCountAggregateOutputType> | number
          }
        }
      }
      MosqueVisit: {
        payload: Prisma.$MosqueVisitPayload<ExtArgs>
        fields: Prisma.MosqueVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MosqueVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MosqueVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          findFirst: {
            args: Prisma.MosqueVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MosqueVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          findMany: {
            args: Prisma.MosqueVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>[]
          }
          create: {
            args: Prisma.MosqueVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          createMany: {
            args: Prisma.MosqueVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MosqueVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>[]
          }
          delete: {
            args: Prisma.MosqueVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          update: {
            args: Prisma.MosqueVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          deleteMany: {
            args: Prisma.MosqueVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MosqueVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MosqueVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosqueVisitPayload>
          }
          aggregate: {
            args: Prisma.MosqueVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMosqueVisit>
          }
          groupBy: {
            args: Prisma.MosqueVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<MosqueVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.MosqueVisitCountArgs<ExtArgs>
            result: $Utils.Optional<MosqueVisitCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model ShuraMember
   */

  export type AggregateShuraMember = {
    _count: ShuraMemberCountAggregateOutputType | null
    _min: ShuraMemberMinAggregateOutputType | null
    _max: ShuraMemberMaxAggregateOutputType | null
  }

  export type ShuraMemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    appointmentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShuraMemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    appointmentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShuraMemberCountAggregateOutputType = {
    id: number
    name: number
    title: number
    biography: number
    email: number
    phone: number
    isActive: number
    appointmentDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShuraMemberMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    isActive?: true
    appointmentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShuraMemberMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    isActive?: true
    appointmentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShuraMemberCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    isActive?: true
    appointmentDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShuraMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShuraMember to aggregate.
     */
    where?: ShuraMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShuraMembers to fetch.
     */
    orderBy?: ShuraMemberOrderByWithRelationInput | ShuraMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShuraMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShuraMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShuraMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShuraMembers
    **/
    _count?: true | ShuraMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShuraMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShuraMemberMaxAggregateInputType
  }

  export type GetShuraMemberAggregateType<T extends ShuraMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateShuraMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShuraMember[P]>
      : GetScalarType<T[P], AggregateShuraMember[P]>
  }




  export type ShuraMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShuraMemberWhereInput
    orderBy?: ShuraMemberOrderByWithAggregationInput | ShuraMemberOrderByWithAggregationInput[]
    by: ShuraMemberScalarFieldEnum[] | ShuraMemberScalarFieldEnum
    having?: ShuraMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShuraMemberCountAggregateInputType | true
    _min?: ShuraMemberMinAggregateInputType
    _max?: ShuraMemberMaxAggregateInputType
  }

  export type ShuraMemberGroupByOutputType = {
    id: string
    name: string
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    isActive: boolean
    appointmentDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ShuraMemberCountAggregateOutputType | null
    _min: ShuraMemberMinAggregateOutputType | null
    _max: ShuraMemberMaxAggregateOutputType | null
  }

  type GetShuraMemberGroupByPayload<T extends ShuraMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShuraMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShuraMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShuraMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ShuraMemberGroupByOutputType[P]>
        }
      >
    >


  export type ShuraMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    appointmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shuraMember"]>

  export type ShuraMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    appointmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shuraMember"]>

  export type ShuraMemberSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    appointmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ShuraMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShuraMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string | null
      biography: string | null
      email: string | null
      phone: string | null
      isActive: boolean
      appointmentDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shuraMember"]>
    composites: {}
  }

  type ShuraMemberGetPayload<S extends boolean | null | undefined | ShuraMemberDefaultArgs> = $Result.GetResult<Prisma.$ShuraMemberPayload, S>

  type ShuraMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShuraMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShuraMemberCountAggregateInputType | true
    }

  export interface ShuraMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShuraMember'], meta: { name: 'ShuraMember' } }
    /**
     * Find zero or one ShuraMember that matches the filter.
     * @param {ShuraMemberFindUniqueArgs} args - Arguments to find a ShuraMember
     * @example
     * // Get one ShuraMember
     * const shuraMember = await prisma.shuraMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShuraMemberFindUniqueArgs>(args: SelectSubset<T, ShuraMemberFindUniqueArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShuraMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShuraMemberFindUniqueOrThrowArgs} args - Arguments to find a ShuraMember
     * @example
     * // Get one ShuraMember
     * const shuraMember = await prisma.shuraMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShuraMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ShuraMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShuraMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberFindFirstArgs} args - Arguments to find a ShuraMember
     * @example
     * // Get one ShuraMember
     * const shuraMember = await prisma.shuraMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShuraMemberFindFirstArgs>(args?: SelectSubset<T, ShuraMemberFindFirstArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShuraMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberFindFirstOrThrowArgs} args - Arguments to find a ShuraMember
     * @example
     * // Get one ShuraMember
     * const shuraMember = await prisma.shuraMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShuraMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ShuraMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShuraMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShuraMembers
     * const shuraMembers = await prisma.shuraMember.findMany()
     * 
     * // Get first 10 ShuraMembers
     * const shuraMembers = await prisma.shuraMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shuraMemberWithIdOnly = await prisma.shuraMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShuraMemberFindManyArgs>(args?: SelectSubset<T, ShuraMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShuraMember.
     * @param {ShuraMemberCreateArgs} args - Arguments to create a ShuraMember.
     * @example
     * // Create one ShuraMember
     * const ShuraMember = await prisma.shuraMember.create({
     *   data: {
     *     // ... data to create a ShuraMember
     *   }
     * })
     * 
     */
    create<T extends ShuraMemberCreateArgs>(args: SelectSubset<T, ShuraMemberCreateArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShuraMembers.
     * @param {ShuraMemberCreateManyArgs} args - Arguments to create many ShuraMembers.
     * @example
     * // Create many ShuraMembers
     * const shuraMember = await prisma.shuraMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShuraMemberCreateManyArgs>(args?: SelectSubset<T, ShuraMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShuraMembers and returns the data saved in the database.
     * @param {ShuraMemberCreateManyAndReturnArgs} args - Arguments to create many ShuraMembers.
     * @example
     * // Create many ShuraMembers
     * const shuraMember = await prisma.shuraMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShuraMembers and only return the `id`
     * const shuraMemberWithIdOnly = await prisma.shuraMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShuraMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ShuraMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShuraMember.
     * @param {ShuraMemberDeleteArgs} args - Arguments to delete one ShuraMember.
     * @example
     * // Delete one ShuraMember
     * const ShuraMember = await prisma.shuraMember.delete({
     *   where: {
     *     // ... filter to delete one ShuraMember
     *   }
     * })
     * 
     */
    delete<T extends ShuraMemberDeleteArgs>(args: SelectSubset<T, ShuraMemberDeleteArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShuraMember.
     * @param {ShuraMemberUpdateArgs} args - Arguments to update one ShuraMember.
     * @example
     * // Update one ShuraMember
     * const shuraMember = await prisma.shuraMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShuraMemberUpdateArgs>(args: SelectSubset<T, ShuraMemberUpdateArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShuraMembers.
     * @param {ShuraMemberDeleteManyArgs} args - Arguments to filter ShuraMembers to delete.
     * @example
     * // Delete a few ShuraMembers
     * const { count } = await prisma.shuraMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShuraMemberDeleteManyArgs>(args?: SelectSubset<T, ShuraMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShuraMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShuraMembers
     * const shuraMember = await prisma.shuraMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShuraMemberUpdateManyArgs>(args: SelectSubset<T, ShuraMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShuraMember.
     * @param {ShuraMemberUpsertArgs} args - Arguments to update or create a ShuraMember.
     * @example
     * // Update or create a ShuraMember
     * const shuraMember = await prisma.shuraMember.upsert({
     *   create: {
     *     // ... data to create a ShuraMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShuraMember we want to update
     *   }
     * })
     */
    upsert<T extends ShuraMemberUpsertArgs>(args: SelectSubset<T, ShuraMemberUpsertArgs<ExtArgs>>): Prisma__ShuraMemberClient<$Result.GetResult<Prisma.$ShuraMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShuraMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberCountArgs} args - Arguments to filter ShuraMembers to count.
     * @example
     * // Count the number of ShuraMembers
     * const count = await prisma.shuraMember.count({
     *   where: {
     *     // ... the filter for the ShuraMembers we want to count
     *   }
     * })
    **/
    count<T extends ShuraMemberCountArgs>(
      args?: Subset<T, ShuraMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShuraMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShuraMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShuraMemberAggregateArgs>(args: Subset<T, ShuraMemberAggregateArgs>): Prisma.PrismaPromise<GetShuraMemberAggregateType<T>>

    /**
     * Group by ShuraMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShuraMemberGroupByArgs} args - Group by arguments.
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
      T extends ShuraMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShuraMemberGroupByArgs['orderBy'] }
        : { orderBy?: ShuraMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShuraMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShuraMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShuraMember model
   */
  readonly fields: ShuraMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShuraMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShuraMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShuraMember model
   */ 
  interface ShuraMemberFieldRefs {
    readonly id: FieldRef<"ShuraMember", 'String'>
    readonly name: FieldRef<"ShuraMember", 'String'>
    readonly title: FieldRef<"ShuraMember", 'String'>
    readonly biography: FieldRef<"ShuraMember", 'String'>
    readonly email: FieldRef<"ShuraMember", 'String'>
    readonly phone: FieldRef<"ShuraMember", 'String'>
    readonly isActive: FieldRef<"ShuraMember", 'Boolean'>
    readonly appointmentDate: FieldRef<"ShuraMember", 'DateTime'>
    readonly createdAt: FieldRef<"ShuraMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ShuraMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShuraMember findUnique
   */
  export type ShuraMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter, which ShuraMember to fetch.
     */
    where: ShuraMemberWhereUniqueInput
  }

  /**
   * ShuraMember findUniqueOrThrow
   */
  export type ShuraMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter, which ShuraMember to fetch.
     */
    where: ShuraMemberWhereUniqueInput
  }

  /**
   * ShuraMember findFirst
   */
  export type ShuraMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter, which ShuraMember to fetch.
     */
    where?: ShuraMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShuraMembers to fetch.
     */
    orderBy?: ShuraMemberOrderByWithRelationInput | ShuraMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShuraMembers.
     */
    cursor?: ShuraMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShuraMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShuraMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShuraMembers.
     */
    distinct?: ShuraMemberScalarFieldEnum | ShuraMemberScalarFieldEnum[]
  }

  /**
   * ShuraMember findFirstOrThrow
   */
  export type ShuraMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter, which ShuraMember to fetch.
     */
    where?: ShuraMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShuraMembers to fetch.
     */
    orderBy?: ShuraMemberOrderByWithRelationInput | ShuraMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShuraMembers.
     */
    cursor?: ShuraMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShuraMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShuraMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShuraMembers.
     */
    distinct?: ShuraMemberScalarFieldEnum | ShuraMemberScalarFieldEnum[]
  }

  /**
   * ShuraMember findMany
   */
  export type ShuraMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter, which ShuraMembers to fetch.
     */
    where?: ShuraMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShuraMembers to fetch.
     */
    orderBy?: ShuraMemberOrderByWithRelationInput | ShuraMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShuraMembers.
     */
    cursor?: ShuraMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShuraMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShuraMembers.
     */
    skip?: number
    distinct?: ShuraMemberScalarFieldEnum | ShuraMemberScalarFieldEnum[]
  }

  /**
   * ShuraMember create
   */
  export type ShuraMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * The data needed to create a ShuraMember.
     */
    data: XOR<ShuraMemberCreateInput, ShuraMemberUncheckedCreateInput>
  }

  /**
   * ShuraMember createMany
   */
  export type ShuraMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShuraMembers.
     */
    data: ShuraMemberCreateManyInput | ShuraMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShuraMember createManyAndReturn
   */
  export type ShuraMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShuraMembers.
     */
    data: ShuraMemberCreateManyInput | ShuraMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShuraMember update
   */
  export type ShuraMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * The data needed to update a ShuraMember.
     */
    data: XOR<ShuraMemberUpdateInput, ShuraMemberUncheckedUpdateInput>
    /**
     * Choose, which ShuraMember to update.
     */
    where: ShuraMemberWhereUniqueInput
  }

  /**
   * ShuraMember updateMany
   */
  export type ShuraMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShuraMembers.
     */
    data: XOR<ShuraMemberUpdateManyMutationInput, ShuraMemberUncheckedUpdateManyInput>
    /**
     * Filter which ShuraMembers to update
     */
    where?: ShuraMemberWhereInput
  }

  /**
   * ShuraMember upsert
   */
  export type ShuraMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * The filter to search for the ShuraMember to update in case it exists.
     */
    where: ShuraMemberWhereUniqueInput
    /**
     * In case the ShuraMember found by the `where` argument doesn't exist, create a new ShuraMember with this data.
     */
    create: XOR<ShuraMemberCreateInput, ShuraMemberUncheckedCreateInput>
    /**
     * In case the ShuraMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShuraMemberUpdateInput, ShuraMemberUncheckedUpdateInput>
  }

  /**
   * ShuraMember delete
   */
  export type ShuraMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
    /**
     * Filter which ShuraMember to delete.
     */
    where: ShuraMemberWhereUniqueInput
  }

  /**
   * ShuraMember deleteMany
   */
  export type ShuraMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShuraMembers to delete
     */
    where?: ShuraMemberWhereInput
  }

  /**
   * ShuraMember without action
   */
  export type ShuraMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShuraMember
     */
    select?: ShuraMemberSelect<ExtArgs> | null
  }


  /**
   * Model MosqueVisit
   */

  export type AggregateMosqueVisit = {
    _count: MosqueVisitCountAggregateOutputType | null
    _min: MosqueVisitMinAggregateOutputType | null
    _max: MosqueVisitMaxAggregateOutputType | null
  }

  export type MosqueVisitMinAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    visitorId: string | null
    visitDate: Date | null
    purpose: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueVisitMaxAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    visitorId: string | null
    visitDate: Date | null
    purpose: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueVisitCountAggregateOutputType = {
    id: number
    mosqueId: number
    visitorId: number
    visitDate: number
    purpose: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MosqueVisitMinAggregateInputType = {
    id?: true
    mosqueId?: true
    visitorId?: true
    visitDate?: true
    purpose?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueVisitMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    visitorId?: true
    visitDate?: true
    purpose?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueVisitCountAggregateInputType = {
    id?: true
    mosqueId?: true
    visitorId?: true
    visitDate?: true
    purpose?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MosqueVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MosqueVisit to aggregate.
     */
    where?: MosqueVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueVisits to fetch.
     */
    orderBy?: MosqueVisitOrderByWithRelationInput | MosqueVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MosqueVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MosqueVisits
    **/
    _count?: true | MosqueVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MosqueVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MosqueVisitMaxAggregateInputType
  }

  export type GetMosqueVisitAggregateType<T extends MosqueVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateMosqueVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMosqueVisit[P]>
      : GetScalarType<T[P], AggregateMosqueVisit[P]>
  }




  export type MosqueVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueVisitWhereInput
    orderBy?: MosqueVisitOrderByWithAggregationInput | MosqueVisitOrderByWithAggregationInput[]
    by: MosqueVisitScalarFieldEnum[] | MosqueVisitScalarFieldEnum
    having?: MosqueVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MosqueVisitCountAggregateInputType | true
    _min?: MosqueVisitMinAggregateInputType
    _max?: MosqueVisitMaxAggregateInputType
  }

  export type MosqueVisitGroupByOutputType = {
    id: string
    mosqueId: string
    visitorId: string
    visitDate: Date
    purpose: string
    notes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MosqueVisitCountAggregateOutputType | null
    _min: MosqueVisitMinAggregateOutputType | null
    _max: MosqueVisitMaxAggregateOutputType | null
  }

  type GetMosqueVisitGroupByPayload<T extends MosqueVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MosqueVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MosqueVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MosqueVisitGroupByOutputType[P]>
            : GetScalarType<T[P], MosqueVisitGroupByOutputType[P]>
        }
      >
    >


  export type MosqueVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    visitorId?: boolean
    visitDate?: boolean
    purpose?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mosqueVisit"]>

  export type MosqueVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    visitorId?: boolean
    visitDate?: boolean
    purpose?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mosqueVisit"]>

  export type MosqueVisitSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    visitorId?: boolean
    visitDate?: boolean
    purpose?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MosqueVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MosqueVisit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mosqueId: string
      visitorId: string
      visitDate: Date
      purpose: string
      notes: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mosqueVisit"]>
    composites: {}
  }

  type MosqueVisitGetPayload<S extends boolean | null | undefined | MosqueVisitDefaultArgs> = $Result.GetResult<Prisma.$MosqueVisitPayload, S>

  type MosqueVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MosqueVisitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MosqueVisitCountAggregateInputType | true
    }

  export interface MosqueVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MosqueVisit'], meta: { name: 'MosqueVisit' } }
    /**
     * Find zero or one MosqueVisit that matches the filter.
     * @param {MosqueVisitFindUniqueArgs} args - Arguments to find a MosqueVisit
     * @example
     * // Get one MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MosqueVisitFindUniqueArgs>(args: SelectSubset<T, MosqueVisitFindUniqueArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MosqueVisit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MosqueVisitFindUniqueOrThrowArgs} args - Arguments to find a MosqueVisit
     * @example
     * // Get one MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MosqueVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, MosqueVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MosqueVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitFindFirstArgs} args - Arguments to find a MosqueVisit
     * @example
     * // Get one MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MosqueVisitFindFirstArgs>(args?: SelectSubset<T, MosqueVisitFindFirstArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MosqueVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitFindFirstOrThrowArgs} args - Arguments to find a MosqueVisit
     * @example
     * // Get one MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MosqueVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, MosqueVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MosqueVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MosqueVisits
     * const mosqueVisits = await prisma.mosqueVisit.findMany()
     * 
     * // Get first 10 MosqueVisits
     * const mosqueVisits = await prisma.mosqueVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mosqueVisitWithIdOnly = await prisma.mosqueVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MosqueVisitFindManyArgs>(args?: SelectSubset<T, MosqueVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MosqueVisit.
     * @param {MosqueVisitCreateArgs} args - Arguments to create a MosqueVisit.
     * @example
     * // Create one MosqueVisit
     * const MosqueVisit = await prisma.mosqueVisit.create({
     *   data: {
     *     // ... data to create a MosqueVisit
     *   }
     * })
     * 
     */
    create<T extends MosqueVisitCreateArgs>(args: SelectSubset<T, MosqueVisitCreateArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MosqueVisits.
     * @param {MosqueVisitCreateManyArgs} args - Arguments to create many MosqueVisits.
     * @example
     * // Create many MosqueVisits
     * const mosqueVisit = await prisma.mosqueVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MosqueVisitCreateManyArgs>(args?: SelectSubset<T, MosqueVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MosqueVisits and returns the data saved in the database.
     * @param {MosqueVisitCreateManyAndReturnArgs} args - Arguments to create many MosqueVisits.
     * @example
     * // Create many MosqueVisits
     * const mosqueVisit = await prisma.mosqueVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MosqueVisits and only return the `id`
     * const mosqueVisitWithIdOnly = await prisma.mosqueVisit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MosqueVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, MosqueVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MosqueVisit.
     * @param {MosqueVisitDeleteArgs} args - Arguments to delete one MosqueVisit.
     * @example
     * // Delete one MosqueVisit
     * const MosqueVisit = await prisma.mosqueVisit.delete({
     *   where: {
     *     // ... filter to delete one MosqueVisit
     *   }
     * })
     * 
     */
    delete<T extends MosqueVisitDeleteArgs>(args: SelectSubset<T, MosqueVisitDeleteArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MosqueVisit.
     * @param {MosqueVisitUpdateArgs} args - Arguments to update one MosqueVisit.
     * @example
     * // Update one MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MosqueVisitUpdateArgs>(args: SelectSubset<T, MosqueVisitUpdateArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MosqueVisits.
     * @param {MosqueVisitDeleteManyArgs} args - Arguments to filter MosqueVisits to delete.
     * @example
     * // Delete a few MosqueVisits
     * const { count } = await prisma.mosqueVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MosqueVisitDeleteManyArgs>(args?: SelectSubset<T, MosqueVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MosqueVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MosqueVisits
     * const mosqueVisit = await prisma.mosqueVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MosqueVisitUpdateManyArgs>(args: SelectSubset<T, MosqueVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MosqueVisit.
     * @param {MosqueVisitUpsertArgs} args - Arguments to update or create a MosqueVisit.
     * @example
     * // Update or create a MosqueVisit
     * const mosqueVisit = await prisma.mosqueVisit.upsert({
     *   create: {
     *     // ... data to create a MosqueVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MosqueVisit we want to update
     *   }
     * })
     */
    upsert<T extends MosqueVisitUpsertArgs>(args: SelectSubset<T, MosqueVisitUpsertArgs<ExtArgs>>): Prisma__MosqueVisitClient<$Result.GetResult<Prisma.$MosqueVisitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MosqueVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitCountArgs} args - Arguments to filter MosqueVisits to count.
     * @example
     * // Count the number of MosqueVisits
     * const count = await prisma.mosqueVisit.count({
     *   where: {
     *     // ... the filter for the MosqueVisits we want to count
     *   }
     * })
    **/
    count<T extends MosqueVisitCountArgs>(
      args?: Subset<T, MosqueVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MosqueVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MosqueVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MosqueVisitAggregateArgs>(args: Subset<T, MosqueVisitAggregateArgs>): Prisma.PrismaPromise<GetMosqueVisitAggregateType<T>>

    /**
     * Group by MosqueVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueVisitGroupByArgs} args - Group by arguments.
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
      T extends MosqueVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MosqueVisitGroupByArgs['orderBy'] }
        : { orderBy?: MosqueVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MosqueVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMosqueVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MosqueVisit model
   */
  readonly fields: MosqueVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MosqueVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MosqueVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MosqueVisit model
   */ 
  interface MosqueVisitFieldRefs {
    readonly id: FieldRef<"MosqueVisit", 'String'>
    readonly mosqueId: FieldRef<"MosqueVisit", 'String'>
    readonly visitorId: FieldRef<"MosqueVisit", 'String'>
    readonly visitDate: FieldRef<"MosqueVisit", 'DateTime'>
    readonly purpose: FieldRef<"MosqueVisit", 'String'>
    readonly notes: FieldRef<"MosqueVisit", 'String'>
    readonly status: FieldRef<"MosqueVisit", 'String'>
    readonly createdAt: FieldRef<"MosqueVisit", 'DateTime'>
    readonly updatedAt: FieldRef<"MosqueVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MosqueVisit findUnique
   */
  export type MosqueVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter, which MosqueVisit to fetch.
     */
    where: MosqueVisitWhereUniqueInput
  }

  /**
   * MosqueVisit findUniqueOrThrow
   */
  export type MosqueVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter, which MosqueVisit to fetch.
     */
    where: MosqueVisitWhereUniqueInput
  }

  /**
   * MosqueVisit findFirst
   */
  export type MosqueVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter, which MosqueVisit to fetch.
     */
    where?: MosqueVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueVisits to fetch.
     */
    orderBy?: MosqueVisitOrderByWithRelationInput | MosqueVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MosqueVisits.
     */
    cursor?: MosqueVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MosqueVisits.
     */
    distinct?: MosqueVisitScalarFieldEnum | MosqueVisitScalarFieldEnum[]
  }

  /**
   * MosqueVisit findFirstOrThrow
   */
  export type MosqueVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter, which MosqueVisit to fetch.
     */
    where?: MosqueVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueVisits to fetch.
     */
    orderBy?: MosqueVisitOrderByWithRelationInput | MosqueVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MosqueVisits.
     */
    cursor?: MosqueVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MosqueVisits.
     */
    distinct?: MosqueVisitScalarFieldEnum | MosqueVisitScalarFieldEnum[]
  }

  /**
   * MosqueVisit findMany
   */
  export type MosqueVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter, which MosqueVisits to fetch.
     */
    where?: MosqueVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MosqueVisits to fetch.
     */
    orderBy?: MosqueVisitOrderByWithRelationInput | MosqueVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MosqueVisits.
     */
    cursor?: MosqueVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MosqueVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MosqueVisits.
     */
    skip?: number
    distinct?: MosqueVisitScalarFieldEnum | MosqueVisitScalarFieldEnum[]
  }

  /**
   * MosqueVisit create
   */
  export type MosqueVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * The data needed to create a MosqueVisit.
     */
    data: XOR<MosqueVisitCreateInput, MosqueVisitUncheckedCreateInput>
  }

  /**
   * MosqueVisit createMany
   */
  export type MosqueVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MosqueVisits.
     */
    data: MosqueVisitCreateManyInput | MosqueVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MosqueVisit createManyAndReturn
   */
  export type MosqueVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MosqueVisits.
     */
    data: MosqueVisitCreateManyInput | MosqueVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MosqueVisit update
   */
  export type MosqueVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * The data needed to update a MosqueVisit.
     */
    data: XOR<MosqueVisitUpdateInput, MosqueVisitUncheckedUpdateInput>
    /**
     * Choose, which MosqueVisit to update.
     */
    where: MosqueVisitWhereUniqueInput
  }

  /**
   * MosqueVisit updateMany
   */
  export type MosqueVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MosqueVisits.
     */
    data: XOR<MosqueVisitUpdateManyMutationInput, MosqueVisitUncheckedUpdateManyInput>
    /**
     * Filter which MosqueVisits to update
     */
    where?: MosqueVisitWhereInput
  }

  /**
   * MosqueVisit upsert
   */
  export type MosqueVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * The filter to search for the MosqueVisit to update in case it exists.
     */
    where: MosqueVisitWhereUniqueInput
    /**
     * In case the MosqueVisit found by the `where` argument doesn't exist, create a new MosqueVisit with this data.
     */
    create: XOR<MosqueVisitCreateInput, MosqueVisitUncheckedCreateInput>
    /**
     * In case the MosqueVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MosqueVisitUpdateInput, MosqueVisitUncheckedUpdateInput>
  }

  /**
   * MosqueVisit delete
   */
  export type MosqueVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
    /**
     * Filter which MosqueVisit to delete.
     */
    where: MosqueVisitWhereUniqueInput
  }

  /**
   * MosqueVisit deleteMany
   */
  export type MosqueVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MosqueVisits to delete
     */
    where?: MosqueVisitWhereInput
  }

  /**
   * MosqueVisit without action
   */
  export type MosqueVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueVisit
     */
    select?: MosqueVisitSelect<ExtArgs> | null
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


  export const ShuraMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    biography: 'biography',
    email: 'email',
    phone: 'phone',
    isActive: 'isActive',
    appointmentDate: 'appointmentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShuraMemberScalarFieldEnum = (typeof ShuraMemberScalarFieldEnum)[keyof typeof ShuraMemberScalarFieldEnum]


  export const MosqueVisitScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    visitorId: 'visitorId',
    visitDate: 'visitDate',
    purpose: 'purpose',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MosqueVisitScalarFieldEnum = (typeof MosqueVisitScalarFieldEnum)[keyof typeof MosqueVisitScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ShuraMemberWhereInput = {
    AND?: ShuraMemberWhereInput | ShuraMemberWhereInput[]
    OR?: ShuraMemberWhereInput[]
    NOT?: ShuraMemberWhereInput | ShuraMemberWhereInput[]
    id?: StringFilter<"ShuraMember"> | string
    name?: StringFilter<"ShuraMember"> | string
    title?: StringNullableFilter<"ShuraMember"> | string | null
    biography?: StringNullableFilter<"ShuraMember"> | string | null
    email?: StringNullableFilter<"ShuraMember"> | string | null
    phone?: StringNullableFilter<"ShuraMember"> | string | null
    isActive?: BoolFilter<"ShuraMember"> | boolean
    appointmentDate?: DateTimeNullableFilter<"ShuraMember"> | Date | string | null
    createdAt?: DateTimeFilter<"ShuraMember"> | Date | string
    updatedAt?: DateTimeFilter<"ShuraMember"> | Date | string
  }

  export type ShuraMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    appointmentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShuraMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShuraMemberWhereInput | ShuraMemberWhereInput[]
    OR?: ShuraMemberWhereInput[]
    NOT?: ShuraMemberWhereInput | ShuraMemberWhereInput[]
    name?: StringFilter<"ShuraMember"> | string
    title?: StringNullableFilter<"ShuraMember"> | string | null
    biography?: StringNullableFilter<"ShuraMember"> | string | null
    email?: StringNullableFilter<"ShuraMember"> | string | null
    phone?: StringNullableFilter<"ShuraMember"> | string | null
    isActive?: BoolFilter<"ShuraMember"> | boolean
    appointmentDate?: DateTimeNullableFilter<"ShuraMember"> | Date | string | null
    createdAt?: DateTimeFilter<"ShuraMember"> | Date | string
    updatedAt?: DateTimeFilter<"ShuraMember"> | Date | string
  }, "id">

  export type ShuraMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    appointmentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShuraMemberCountOrderByAggregateInput
    _max?: ShuraMemberMaxOrderByAggregateInput
    _min?: ShuraMemberMinOrderByAggregateInput
  }

  export type ShuraMemberScalarWhereWithAggregatesInput = {
    AND?: ShuraMemberScalarWhereWithAggregatesInput | ShuraMemberScalarWhereWithAggregatesInput[]
    OR?: ShuraMemberScalarWhereWithAggregatesInput[]
    NOT?: ShuraMemberScalarWhereWithAggregatesInput | ShuraMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShuraMember"> | string
    name?: StringWithAggregatesFilter<"ShuraMember"> | string
    title?: StringNullableWithAggregatesFilter<"ShuraMember"> | string | null
    biography?: StringNullableWithAggregatesFilter<"ShuraMember"> | string | null
    email?: StringNullableWithAggregatesFilter<"ShuraMember"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ShuraMember"> | string | null
    isActive?: BoolWithAggregatesFilter<"ShuraMember"> | boolean
    appointmentDate?: DateTimeNullableWithAggregatesFilter<"ShuraMember"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShuraMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShuraMember"> | Date | string
  }

  export type MosqueVisitWhereInput = {
    AND?: MosqueVisitWhereInput | MosqueVisitWhereInput[]
    OR?: MosqueVisitWhereInput[]
    NOT?: MosqueVisitWhereInput | MosqueVisitWhereInput[]
    id?: StringFilter<"MosqueVisit"> | string
    mosqueId?: StringFilter<"MosqueVisit"> | string
    visitorId?: StringFilter<"MosqueVisit"> | string
    visitDate?: DateTimeFilter<"MosqueVisit"> | Date | string
    purpose?: StringFilter<"MosqueVisit"> | string
    notes?: StringNullableFilter<"MosqueVisit"> | string | null
    status?: StringFilter<"MosqueVisit"> | string
    createdAt?: DateTimeFilter<"MosqueVisit"> | Date | string
    updatedAt?: DateTimeFilter<"MosqueVisit"> | Date | string
  }

  export type MosqueVisitOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    visitorId?: SortOrder
    visitDate?: SortOrder
    purpose?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MosqueVisitWhereInput | MosqueVisitWhereInput[]
    OR?: MosqueVisitWhereInput[]
    NOT?: MosqueVisitWhereInput | MosqueVisitWhereInput[]
    mosqueId?: StringFilter<"MosqueVisit"> | string
    visitorId?: StringFilter<"MosqueVisit"> | string
    visitDate?: DateTimeFilter<"MosqueVisit"> | Date | string
    purpose?: StringFilter<"MosqueVisit"> | string
    notes?: StringNullableFilter<"MosqueVisit"> | string | null
    status?: StringFilter<"MosqueVisit"> | string
    createdAt?: DateTimeFilter<"MosqueVisit"> | Date | string
    updatedAt?: DateTimeFilter<"MosqueVisit"> | Date | string
  }, "id">

  export type MosqueVisitOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    visitorId?: SortOrder
    visitDate?: SortOrder
    purpose?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MosqueVisitCountOrderByAggregateInput
    _max?: MosqueVisitMaxOrderByAggregateInput
    _min?: MosqueVisitMinOrderByAggregateInput
  }

  export type MosqueVisitScalarWhereWithAggregatesInput = {
    AND?: MosqueVisitScalarWhereWithAggregatesInput | MosqueVisitScalarWhereWithAggregatesInput[]
    OR?: MosqueVisitScalarWhereWithAggregatesInput[]
    NOT?: MosqueVisitScalarWhereWithAggregatesInput | MosqueVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MosqueVisit"> | string
    mosqueId?: StringWithAggregatesFilter<"MosqueVisit"> | string
    visitorId?: StringWithAggregatesFilter<"MosqueVisit"> | string
    visitDate?: DateTimeWithAggregatesFilter<"MosqueVisit"> | Date | string
    purpose?: StringWithAggregatesFilter<"MosqueVisit"> | string
    notes?: StringNullableWithAggregatesFilter<"MosqueVisit"> | string | null
    status?: StringWithAggregatesFilter<"MosqueVisit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MosqueVisit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MosqueVisit"> | Date | string
  }

  export type ShuraMemberCreateInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    isActive?: boolean
    appointmentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShuraMemberUncheckedCreateInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    isActive?: boolean
    appointmentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShuraMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShuraMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShuraMemberCreateManyInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    isActive?: boolean
    appointmentDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShuraMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShuraMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueVisitCreateInput = {
    id?: string
    mosqueId: string
    visitorId: string
    visitDate: Date | string
    purpose: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueVisitUncheckedCreateInput = {
    id?: string
    mosqueId: string
    visitorId: string
    visitDate: Date | string
    purpose: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueVisitCreateManyInput = {
    id?: string
    mosqueId: string
    visitorId: string
    visitDate: Date | string
    purpose: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShuraMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    appointmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShuraMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    appointmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShuraMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    appointmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MosqueVisitCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    visitorId?: SortOrder
    visitDate?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    visitorId?: SortOrder
    visitDate?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueVisitMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    visitorId?: SortOrder
    visitDate?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ShuraMemberDefaultArgs instead
     */
    export type ShuraMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShuraMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueVisitDefaultArgs instead
     */
    export type MosqueVisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueVisitDefaultArgs<ExtArgs>

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