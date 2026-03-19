
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
 * Model Mosque
 * 
 */
export type Mosque = $Result.DefaultSelection<Prisma.$MosquePayload>
/**
 * Model Imam
 * 
 */
export type Imam = $Result.DefaultSelection<Prisma.$ImamPayload>
/**
 * Model ManagementMember
 * 
 */
export type ManagementMember = $Result.DefaultSelection<Prisma.$ManagementMemberPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mosques
 * const mosques = await prisma.mosque.findMany()
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
   * // Fetch zero or more Mosques
   * const mosques = await prisma.mosque.findMany()
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
   * `prisma.mosque`: Exposes CRUD operations for the **Mosque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mosques
    * const mosques = await prisma.mosque.findMany()
    * ```
    */
  get mosque(): Prisma.MosqueDelegate<ExtArgs>;

  /**
   * `prisma.imam`: Exposes CRUD operations for the **Imam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imams
    * const imams = await prisma.imam.findMany()
    * ```
    */
  get imam(): Prisma.ImamDelegate<ExtArgs>;

  /**
   * `prisma.managementMember`: Exposes CRUD operations for the **ManagementMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagementMembers
    * const managementMembers = await prisma.managementMember.findMany()
    * ```
    */
  get managementMember(): Prisma.ManagementMemberDelegate<ExtArgs>;
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
    Mosque: 'Mosque',
    Imam: 'Imam',
    ManagementMember: 'ManagementMember'
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
      modelProps: "mosque" | "imam" | "managementMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mosque: {
        payload: Prisma.$MosquePayload<ExtArgs>
        fields: Prisma.MosqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MosqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MosqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          findFirst: {
            args: Prisma.MosqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MosqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          findMany: {
            args: Prisma.MosqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>[]
          }
          create: {
            args: Prisma.MosqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          createMany: {
            args: Prisma.MosqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MosqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>[]
          }
          delete: {
            args: Prisma.MosqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          update: {
            args: Prisma.MosqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          deleteMany: {
            args: Prisma.MosqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MosqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MosqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MosquePayload>
          }
          aggregate: {
            args: Prisma.MosqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMosque>
          }
          groupBy: {
            args: Prisma.MosqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MosqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MosqueCountArgs<ExtArgs>
            result: $Utils.Optional<MosqueCountAggregateOutputType> | number
          }
        }
      }
      Imam: {
        payload: Prisma.$ImamPayload<ExtArgs>
        fields: Prisma.ImamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          findFirst: {
            args: Prisma.ImamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          findMany: {
            args: Prisma.ImamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>[]
          }
          create: {
            args: Prisma.ImamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          createMany: {
            args: Prisma.ImamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>[]
          }
          delete: {
            args: Prisma.ImamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          update: {
            args: Prisma.ImamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          deleteMany: {
            args: Prisma.ImamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImamPayload>
          }
          aggregate: {
            args: Prisma.ImamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImam>
          }
          groupBy: {
            args: Prisma.ImamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImamCountArgs<ExtArgs>
            result: $Utils.Optional<ImamCountAggregateOutputType> | number
          }
        }
      }
      ManagementMember: {
        payload: Prisma.$ManagementMemberPayload<ExtArgs>
        fields: Prisma.ManagementMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagementMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagementMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          findFirst: {
            args: Prisma.ManagementMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagementMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          findMany: {
            args: Prisma.ManagementMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>[]
          }
          create: {
            args: Prisma.ManagementMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          createMany: {
            args: Prisma.ManagementMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagementMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>[]
          }
          delete: {
            args: Prisma.ManagementMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          update: {
            args: Prisma.ManagementMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          deleteMany: {
            args: Prisma.ManagementMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagementMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagementMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagementMemberPayload>
          }
          aggregate: {
            args: Prisma.ManagementMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagementMember>
          }
          groupBy: {
            args: Prisma.ManagementMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagementMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagementMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ManagementMemberCountAggregateOutputType> | number
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
   * Count Type MosqueCountOutputType
   */

  export type MosqueCountOutputType = {
    imams: number
    management: number
  }

  export type MosqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imams?: boolean | MosqueCountOutputTypeCountImamsArgs
    management?: boolean | MosqueCountOutputTypeCountManagementArgs
  }

  // Custom InputTypes
  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MosqueCountOutputType
     */
    select?: MosqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountImamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImamWhereInput
  }

  /**
   * MosqueCountOutputType without action
   */
  export type MosqueCountOutputTypeCountManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagementMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mosque
   */

  export type AggregateMosque = {
    _count: MosqueCountAggregateOutputType | null
    _avg: MosqueAvgAggregateOutputType | null
    _sum: MosqueSumAggregateOutputType | null
    _min: MosqueMinAggregateOutputType | null
    _max: MosqueMaxAggregateOutputType | null
  }

  export type MosqueAvgAggregateOutputType = {
    capacity: number | null
  }

  export type MosqueSumAggregateOutputType = {
    capacity: number | null
  }

  export type MosqueMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    postcode: string | null
    phone: string | null
    email: string | null
    website: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    postcode: string | null
    phone: string | null
    email: string | null
    website: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MosqueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    postcode: number
    phone: number
    email: number
    website: number
    capacity: number
    facilities: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MosqueAvgAggregateInputType = {
    capacity?: true
  }

  export type MosqueSumAggregateInputType = {
    capacity?: true
  }

  export type MosqueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postcode?: true
    phone?: true
    email?: true
    website?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postcode?: true
    phone?: true
    email?: true
    website?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MosqueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    postcode?: true
    phone?: true
    email?: true
    website?: true
    capacity?: true
    facilities?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MosqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mosque to aggregate.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mosques
    **/
    _count?: true | MosqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MosqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MosqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MosqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MosqueMaxAggregateInputType
  }

  export type GetMosqueAggregateType<T extends MosqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMosque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMosque[P]>
      : GetScalarType<T[P], AggregateMosque[P]>
  }




  export type MosqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MosqueWhereInput
    orderBy?: MosqueOrderByWithAggregationInput | MosqueOrderByWithAggregationInput[]
    by: MosqueScalarFieldEnum[] | MosqueScalarFieldEnum
    having?: MosqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MosqueCountAggregateInputType | true
    _avg?: MosqueAvgAggregateInputType
    _sum?: MosqueSumAggregateInputType
    _min?: MosqueMinAggregateInputType
    _max?: MosqueMaxAggregateInputType
  }

  export type MosqueGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    postcode: string
    phone: string | null
    email: string | null
    website: string | null
    capacity: number | null
    facilities: string[]
    createdAt: Date
    updatedAt: Date
    _count: MosqueCountAggregateOutputType | null
    _avg: MosqueAvgAggregateOutputType | null
    _sum: MosqueSumAggregateOutputType | null
    _min: MosqueMinAggregateOutputType | null
    _max: MosqueMaxAggregateOutputType | null
  }

  type GetMosqueGroupByPayload<T extends MosqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MosqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MosqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MosqueGroupByOutputType[P]>
            : GetScalarType<T[P], MosqueGroupByOutputType[P]>
        }
      >
    >


  export type MosqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    capacity?: boolean
    facilities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imams?: boolean | Mosque$imamsArgs<ExtArgs>
    management?: boolean | Mosque$managementArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mosque"]>

  export type MosqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    capacity?: boolean
    facilities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mosque"]>

  export type MosqueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    capacity?: boolean
    facilities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MosqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imams?: boolean | Mosque$imamsArgs<ExtArgs>
    management?: boolean | Mosque$managementArgs<ExtArgs>
    _count?: boolean | MosqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MosqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MosquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mosque"
    objects: {
      imams: Prisma.$ImamPayload<ExtArgs>[]
      management: Prisma.$ManagementMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      postcode: string
      phone: string | null
      email: string | null
      website: string | null
      capacity: number | null
      facilities: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mosque"]>
    composites: {}
  }

  type MosqueGetPayload<S extends boolean | null | undefined | MosqueDefaultArgs> = $Result.GetResult<Prisma.$MosquePayload, S>

  type MosqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MosqueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MosqueCountAggregateInputType | true
    }

  export interface MosqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mosque'], meta: { name: 'Mosque' } }
    /**
     * Find zero or one Mosque that matches the filter.
     * @param {MosqueFindUniqueArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MosqueFindUniqueArgs>(args: SelectSubset<T, MosqueFindUniqueArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mosque that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MosqueFindUniqueOrThrowArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MosqueFindUniqueOrThrowArgs>(args: SelectSubset<T, MosqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mosque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindFirstArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MosqueFindFirstArgs>(args?: SelectSubset<T, MosqueFindFirstArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mosque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindFirstOrThrowArgs} args - Arguments to find a Mosque
     * @example
     * // Get one Mosque
     * const mosque = await prisma.mosque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MosqueFindFirstOrThrowArgs>(args?: SelectSubset<T, MosqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mosques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mosques
     * const mosques = await prisma.mosque.findMany()
     * 
     * // Get first 10 Mosques
     * const mosques = await prisma.mosque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mosqueWithIdOnly = await prisma.mosque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MosqueFindManyArgs>(args?: SelectSubset<T, MosqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mosque.
     * @param {MosqueCreateArgs} args - Arguments to create a Mosque.
     * @example
     * // Create one Mosque
     * const Mosque = await prisma.mosque.create({
     *   data: {
     *     // ... data to create a Mosque
     *   }
     * })
     * 
     */
    create<T extends MosqueCreateArgs>(args: SelectSubset<T, MosqueCreateArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mosques.
     * @param {MosqueCreateManyArgs} args - Arguments to create many Mosques.
     * @example
     * // Create many Mosques
     * const mosque = await prisma.mosque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MosqueCreateManyArgs>(args?: SelectSubset<T, MosqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mosques and returns the data saved in the database.
     * @param {MosqueCreateManyAndReturnArgs} args - Arguments to create many Mosques.
     * @example
     * // Create many Mosques
     * const mosque = await prisma.mosque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mosques and only return the `id`
     * const mosqueWithIdOnly = await prisma.mosque.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MosqueCreateManyAndReturnArgs>(args?: SelectSubset<T, MosqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mosque.
     * @param {MosqueDeleteArgs} args - Arguments to delete one Mosque.
     * @example
     * // Delete one Mosque
     * const Mosque = await prisma.mosque.delete({
     *   where: {
     *     // ... filter to delete one Mosque
     *   }
     * })
     * 
     */
    delete<T extends MosqueDeleteArgs>(args: SelectSubset<T, MosqueDeleteArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mosque.
     * @param {MosqueUpdateArgs} args - Arguments to update one Mosque.
     * @example
     * // Update one Mosque
     * const mosque = await prisma.mosque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MosqueUpdateArgs>(args: SelectSubset<T, MosqueUpdateArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mosques.
     * @param {MosqueDeleteManyArgs} args - Arguments to filter Mosques to delete.
     * @example
     * // Delete a few Mosques
     * const { count } = await prisma.mosque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MosqueDeleteManyArgs>(args?: SelectSubset<T, MosqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mosques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mosques
     * const mosque = await prisma.mosque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MosqueUpdateManyArgs>(args: SelectSubset<T, MosqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mosque.
     * @param {MosqueUpsertArgs} args - Arguments to update or create a Mosque.
     * @example
     * // Update or create a Mosque
     * const mosque = await prisma.mosque.upsert({
     *   create: {
     *     // ... data to create a Mosque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mosque we want to update
     *   }
     * })
     */
    upsert<T extends MosqueUpsertArgs>(args: SelectSubset<T, MosqueUpsertArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mosques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueCountArgs} args - Arguments to filter Mosques to count.
     * @example
     * // Count the number of Mosques
     * const count = await prisma.mosque.count({
     *   where: {
     *     // ... the filter for the Mosques we want to count
     *   }
     * })
    **/
    count<T extends MosqueCountArgs>(
      args?: Subset<T, MosqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MosqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mosque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MosqueAggregateArgs>(args: Subset<T, MosqueAggregateArgs>): Prisma.PrismaPromise<GetMosqueAggregateType<T>>

    /**
     * Group by Mosque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MosqueGroupByArgs} args - Group by arguments.
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
      T extends MosqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MosqueGroupByArgs['orderBy'] }
        : { orderBy?: MosqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MosqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMosqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mosque model
   */
  readonly fields: MosqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mosque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MosqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imams<T extends Mosque$imamsArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$imamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findMany"> | Null>
    management<T extends Mosque$managementArgs<ExtArgs> = {}>(args?: Subset<T, Mosque$managementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Mosque model
   */ 
  interface MosqueFieldRefs {
    readonly id: FieldRef<"Mosque", 'String'>
    readonly name: FieldRef<"Mosque", 'String'>
    readonly address: FieldRef<"Mosque", 'String'>
    readonly city: FieldRef<"Mosque", 'String'>
    readonly postcode: FieldRef<"Mosque", 'String'>
    readonly phone: FieldRef<"Mosque", 'String'>
    readonly email: FieldRef<"Mosque", 'String'>
    readonly website: FieldRef<"Mosque", 'String'>
    readonly capacity: FieldRef<"Mosque", 'Int'>
    readonly facilities: FieldRef<"Mosque", 'String[]'>
    readonly createdAt: FieldRef<"Mosque", 'DateTime'>
    readonly updatedAt: FieldRef<"Mosque", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mosque findUnique
   */
  export type MosqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where: MosqueWhereUniqueInput
  }

  /**
   * Mosque findUniqueOrThrow
   */
  export type MosqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where: MosqueWhereUniqueInput
  }

  /**
   * Mosque findFirst
   */
  export type MosqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mosques.
     */
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }

  /**
   * Mosque findFirstOrThrow
   */
  export type MosqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosque to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mosques.
     */
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }

  /**
   * Mosque findMany
   */
  export type MosqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter, which Mosques to fetch.
     */
    where?: MosqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mosques to fetch.
     */
    orderBy?: MosqueOrderByWithRelationInput | MosqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mosques.
     */
    cursor?: MosqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mosques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mosques.
     */
    skip?: number
    distinct?: MosqueScalarFieldEnum | MosqueScalarFieldEnum[]
  }

  /**
   * Mosque create
   */
  export type MosqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Mosque.
     */
    data: XOR<MosqueCreateInput, MosqueUncheckedCreateInput>
  }

  /**
   * Mosque createMany
   */
  export type MosqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mosques.
     */
    data: MosqueCreateManyInput | MosqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mosque createManyAndReturn
   */
  export type MosqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mosques.
     */
    data: MosqueCreateManyInput | MosqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mosque update
   */
  export type MosqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Mosque.
     */
    data: XOR<MosqueUpdateInput, MosqueUncheckedUpdateInput>
    /**
     * Choose, which Mosque to update.
     */
    where: MosqueWhereUniqueInput
  }

  /**
   * Mosque updateMany
   */
  export type MosqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mosques.
     */
    data: XOR<MosqueUpdateManyMutationInput, MosqueUncheckedUpdateManyInput>
    /**
     * Filter which Mosques to update
     */
    where?: MosqueWhereInput
  }

  /**
   * Mosque upsert
   */
  export type MosqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Mosque to update in case it exists.
     */
    where: MosqueWhereUniqueInput
    /**
     * In case the Mosque found by the `where` argument doesn't exist, create a new Mosque with this data.
     */
    create: XOR<MosqueCreateInput, MosqueUncheckedCreateInput>
    /**
     * In case the Mosque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MosqueUpdateInput, MosqueUncheckedUpdateInput>
  }

  /**
   * Mosque delete
   */
  export type MosqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
    /**
     * Filter which Mosque to delete.
     */
    where: MosqueWhereUniqueInput
  }

  /**
   * Mosque deleteMany
   */
  export type MosqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mosques to delete
     */
    where?: MosqueWhereInput
  }

  /**
   * Mosque.imams
   */
  export type Mosque$imamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    where?: ImamWhereInput
    orderBy?: ImamOrderByWithRelationInput | ImamOrderByWithRelationInput[]
    cursor?: ImamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImamScalarFieldEnum | ImamScalarFieldEnum[]
  }

  /**
   * Mosque.management
   */
  export type Mosque$managementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    where?: ManagementMemberWhereInput
    orderBy?: ManagementMemberOrderByWithRelationInput | ManagementMemberOrderByWithRelationInput[]
    cursor?: ManagementMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagementMemberScalarFieldEnum | ManagementMemberScalarFieldEnum[]
  }

  /**
   * Mosque without action
   */
  export type MosqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mosque
     */
    select?: MosqueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MosqueInclude<ExtArgs> | null
  }


  /**
   * Model Imam
   */

  export type AggregateImam = {
    _count: ImamCountAggregateOutputType | null
    _min: ImamMinAggregateOutputType | null
    _max: ImamMaxAggregateOutputType | null
  }

  export type ImamMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    mosqueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    mosqueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImamCountAggregateOutputType = {
    id: number
    name: number
    title: number
    biography: number
    email: number
    phone: number
    mosqueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImamMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImamMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImamCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    biography?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imam to aggregate.
     */
    where?: ImamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imams to fetch.
     */
    orderBy?: ImamOrderByWithRelationInput | ImamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imams
    **/
    _count?: true | ImamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImamMaxAggregateInputType
  }

  export type GetImamAggregateType<T extends ImamAggregateArgs> = {
        [P in keyof T & keyof AggregateImam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImam[P]>
      : GetScalarType<T[P], AggregateImam[P]>
  }




  export type ImamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImamWhereInput
    orderBy?: ImamOrderByWithAggregationInput | ImamOrderByWithAggregationInput[]
    by: ImamScalarFieldEnum[] | ImamScalarFieldEnum
    having?: ImamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImamCountAggregateInputType | true
    _min?: ImamMinAggregateInputType
    _max?: ImamMaxAggregateInputType
  }

  export type ImamGroupByOutputType = {
    id: string
    name: string
    title: string | null
    biography: string | null
    email: string | null
    phone: string | null
    mosqueId: string
    createdAt: Date
    updatedAt: Date
    _count: ImamCountAggregateOutputType | null
    _min: ImamMinAggregateOutputType | null
    _max: ImamMaxAggregateOutputType | null
  }

  type GetImamGroupByPayload<T extends ImamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImamGroupByOutputType[P]>
            : GetScalarType<T[P], ImamGroupByOutputType[P]>
        }
      >
    >


  export type ImamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imam"]>

  export type ImamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imam"]>

  export type ImamSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    biography?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }
  export type ImamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }

  export type $ImamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imam"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string | null
      biography: string | null
      email: string | null
      phone: string | null
      mosqueId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imam"]>
    composites: {}
  }

  type ImamGetPayload<S extends boolean | null | undefined | ImamDefaultArgs> = $Result.GetResult<Prisma.$ImamPayload, S>

  type ImamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImamCountAggregateInputType | true
    }

  export interface ImamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imam'], meta: { name: 'Imam' } }
    /**
     * Find zero or one Imam that matches the filter.
     * @param {ImamFindUniqueArgs} args - Arguments to find a Imam
     * @example
     * // Get one Imam
     * const imam = await prisma.imam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImamFindUniqueArgs>(args: SelectSubset<T, ImamFindUniqueArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Imam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImamFindUniqueOrThrowArgs} args - Arguments to find a Imam
     * @example
     * // Get one Imam
     * const imam = await prisma.imam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImamFindUniqueOrThrowArgs>(args: SelectSubset<T, ImamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Imam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamFindFirstArgs} args - Arguments to find a Imam
     * @example
     * // Get one Imam
     * const imam = await prisma.imam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImamFindFirstArgs>(args?: SelectSubset<T, ImamFindFirstArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Imam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamFindFirstOrThrowArgs} args - Arguments to find a Imam
     * @example
     * // Get one Imam
     * const imam = await prisma.imam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImamFindFirstOrThrowArgs>(args?: SelectSubset<T, ImamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Imams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imams
     * const imams = await prisma.imam.findMany()
     * 
     * // Get first 10 Imams
     * const imams = await prisma.imam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imamWithIdOnly = await prisma.imam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImamFindManyArgs>(args?: SelectSubset<T, ImamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Imam.
     * @param {ImamCreateArgs} args - Arguments to create a Imam.
     * @example
     * // Create one Imam
     * const Imam = await prisma.imam.create({
     *   data: {
     *     // ... data to create a Imam
     *   }
     * })
     * 
     */
    create<T extends ImamCreateArgs>(args: SelectSubset<T, ImamCreateArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Imams.
     * @param {ImamCreateManyArgs} args - Arguments to create many Imams.
     * @example
     * // Create many Imams
     * const imam = await prisma.imam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImamCreateManyArgs>(args?: SelectSubset<T, ImamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imams and returns the data saved in the database.
     * @param {ImamCreateManyAndReturnArgs} args - Arguments to create many Imams.
     * @example
     * // Create many Imams
     * const imam = await prisma.imam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imams and only return the `id`
     * const imamWithIdOnly = await prisma.imam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImamCreateManyAndReturnArgs>(args?: SelectSubset<T, ImamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Imam.
     * @param {ImamDeleteArgs} args - Arguments to delete one Imam.
     * @example
     * // Delete one Imam
     * const Imam = await prisma.imam.delete({
     *   where: {
     *     // ... filter to delete one Imam
     *   }
     * })
     * 
     */
    delete<T extends ImamDeleteArgs>(args: SelectSubset<T, ImamDeleteArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Imam.
     * @param {ImamUpdateArgs} args - Arguments to update one Imam.
     * @example
     * // Update one Imam
     * const imam = await prisma.imam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImamUpdateArgs>(args: SelectSubset<T, ImamUpdateArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Imams.
     * @param {ImamDeleteManyArgs} args - Arguments to filter Imams to delete.
     * @example
     * // Delete a few Imams
     * const { count } = await prisma.imam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImamDeleteManyArgs>(args?: SelectSubset<T, ImamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imams
     * const imam = await prisma.imam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImamUpdateManyArgs>(args: SelectSubset<T, ImamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imam.
     * @param {ImamUpsertArgs} args - Arguments to update or create a Imam.
     * @example
     * // Update or create a Imam
     * const imam = await prisma.imam.upsert({
     *   create: {
     *     // ... data to create a Imam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imam we want to update
     *   }
     * })
     */
    upsert<T extends ImamUpsertArgs>(args: SelectSubset<T, ImamUpsertArgs<ExtArgs>>): Prisma__ImamClient<$Result.GetResult<Prisma.$ImamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Imams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamCountArgs} args - Arguments to filter Imams to count.
     * @example
     * // Count the number of Imams
     * const count = await prisma.imam.count({
     *   where: {
     *     // ... the filter for the Imams we want to count
     *   }
     * })
    **/
    count<T extends ImamCountArgs>(
      args?: Subset<T, ImamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImamAggregateArgs>(args: Subset<T, ImamAggregateArgs>): Prisma.PrismaPromise<GetImamAggregateType<T>>

    /**
     * Group by Imam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImamGroupByArgs} args - Group by arguments.
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
      T extends ImamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImamGroupByArgs['orderBy'] }
        : { orderBy?: ImamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imam model
   */
  readonly fields: ImamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mosque<T extends MosqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MosqueDefaultArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Imam model
   */ 
  interface ImamFieldRefs {
    readonly id: FieldRef<"Imam", 'String'>
    readonly name: FieldRef<"Imam", 'String'>
    readonly title: FieldRef<"Imam", 'String'>
    readonly biography: FieldRef<"Imam", 'String'>
    readonly email: FieldRef<"Imam", 'String'>
    readonly phone: FieldRef<"Imam", 'String'>
    readonly mosqueId: FieldRef<"Imam", 'String'>
    readonly createdAt: FieldRef<"Imam", 'DateTime'>
    readonly updatedAt: FieldRef<"Imam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Imam findUnique
   */
  export type ImamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter, which Imam to fetch.
     */
    where: ImamWhereUniqueInput
  }

  /**
   * Imam findUniqueOrThrow
   */
  export type ImamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter, which Imam to fetch.
     */
    where: ImamWhereUniqueInput
  }

  /**
   * Imam findFirst
   */
  export type ImamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter, which Imam to fetch.
     */
    where?: ImamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imams to fetch.
     */
    orderBy?: ImamOrderByWithRelationInput | ImamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imams.
     */
    cursor?: ImamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imams.
     */
    distinct?: ImamScalarFieldEnum | ImamScalarFieldEnum[]
  }

  /**
   * Imam findFirstOrThrow
   */
  export type ImamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter, which Imam to fetch.
     */
    where?: ImamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imams to fetch.
     */
    orderBy?: ImamOrderByWithRelationInput | ImamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imams.
     */
    cursor?: ImamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imams.
     */
    distinct?: ImamScalarFieldEnum | ImamScalarFieldEnum[]
  }

  /**
   * Imam findMany
   */
  export type ImamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter, which Imams to fetch.
     */
    where?: ImamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imams to fetch.
     */
    orderBy?: ImamOrderByWithRelationInput | ImamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imams.
     */
    cursor?: ImamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imams.
     */
    skip?: number
    distinct?: ImamScalarFieldEnum | ImamScalarFieldEnum[]
  }

  /**
   * Imam create
   */
  export type ImamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * The data needed to create a Imam.
     */
    data: XOR<ImamCreateInput, ImamUncheckedCreateInput>
  }

  /**
   * Imam createMany
   */
  export type ImamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imams.
     */
    data: ImamCreateManyInput | ImamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imam createManyAndReturn
   */
  export type ImamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Imams.
     */
    data: ImamCreateManyInput | ImamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imam update
   */
  export type ImamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * The data needed to update a Imam.
     */
    data: XOR<ImamUpdateInput, ImamUncheckedUpdateInput>
    /**
     * Choose, which Imam to update.
     */
    where: ImamWhereUniqueInput
  }

  /**
   * Imam updateMany
   */
  export type ImamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imams.
     */
    data: XOR<ImamUpdateManyMutationInput, ImamUncheckedUpdateManyInput>
    /**
     * Filter which Imams to update
     */
    where?: ImamWhereInput
  }

  /**
   * Imam upsert
   */
  export type ImamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * The filter to search for the Imam to update in case it exists.
     */
    where: ImamWhereUniqueInput
    /**
     * In case the Imam found by the `where` argument doesn't exist, create a new Imam with this data.
     */
    create: XOR<ImamCreateInput, ImamUncheckedCreateInput>
    /**
     * In case the Imam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImamUpdateInput, ImamUncheckedUpdateInput>
  }

  /**
   * Imam delete
   */
  export type ImamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
    /**
     * Filter which Imam to delete.
     */
    where: ImamWhereUniqueInput
  }

  /**
   * Imam deleteMany
   */
  export type ImamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imams to delete
     */
    where?: ImamWhereInput
  }

  /**
   * Imam without action
   */
  export type ImamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imam
     */
    select?: ImamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImamInclude<ExtArgs> | null
  }


  /**
   * Model ManagementMember
   */

  export type AggregateManagementMember = {
    _count: ManagementMemberCountAggregateOutputType | null
    _min: ManagementMemberMinAggregateOutputType | null
    _max: ManagementMemberMaxAggregateOutputType | null
  }

  export type ManagementMemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    email: string | null
    phone: string | null
    mosqueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagementMemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    email: string | null
    phone: string | null
    mosqueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagementMemberCountAggregateOutputType = {
    id: number
    name: number
    role: number
    email: number
    phone: number
    mosqueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManagementMemberMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagementMemberMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagementMemberCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    phone?: true
    mosqueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManagementMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagementMember to aggregate.
     */
    where?: ManagementMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementMembers to fetch.
     */
    orderBy?: ManagementMemberOrderByWithRelationInput | ManagementMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagementMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagementMembers
    **/
    _count?: true | ManagementMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagementMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagementMemberMaxAggregateInputType
  }

  export type GetManagementMemberAggregateType<T extends ManagementMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateManagementMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagementMember[P]>
      : GetScalarType<T[P], AggregateManagementMember[P]>
  }




  export type ManagementMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagementMemberWhereInput
    orderBy?: ManagementMemberOrderByWithAggregationInput | ManagementMemberOrderByWithAggregationInput[]
    by: ManagementMemberScalarFieldEnum[] | ManagementMemberScalarFieldEnum
    having?: ManagementMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagementMemberCountAggregateInputType | true
    _min?: ManagementMemberMinAggregateInputType
    _max?: ManagementMemberMaxAggregateInputType
  }

  export type ManagementMemberGroupByOutputType = {
    id: string
    name: string
    role: string
    email: string | null
    phone: string | null
    mosqueId: string
    createdAt: Date
    updatedAt: Date
    _count: ManagementMemberCountAggregateOutputType | null
    _min: ManagementMemberMinAggregateOutputType | null
    _max: ManagementMemberMaxAggregateOutputType | null
  }

  type GetManagementMemberGroupByPayload<T extends ManagementMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagementMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagementMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagementMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ManagementMemberGroupByOutputType[P]>
        }
      >
    >


  export type ManagementMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managementMember"]>

  export type ManagementMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managementMember"]>

  export type ManagementMemberSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    mosqueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManagementMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }
  export type ManagementMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mosque?: boolean | MosqueDefaultArgs<ExtArgs>
  }

  export type $ManagementMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagementMember"
    objects: {
      mosque: Prisma.$MosquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string
      email: string | null
      phone: string | null
      mosqueId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["managementMember"]>
    composites: {}
  }

  type ManagementMemberGetPayload<S extends boolean | null | undefined | ManagementMemberDefaultArgs> = $Result.GetResult<Prisma.$ManagementMemberPayload, S>

  type ManagementMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManagementMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ManagementMemberCountAggregateInputType | true
    }

  export interface ManagementMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagementMember'], meta: { name: 'ManagementMember' } }
    /**
     * Find zero or one ManagementMember that matches the filter.
     * @param {ManagementMemberFindUniqueArgs} args - Arguments to find a ManagementMember
     * @example
     * // Get one ManagementMember
     * const managementMember = await prisma.managementMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagementMemberFindUniqueArgs>(args: SelectSubset<T, ManagementMemberFindUniqueArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ManagementMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ManagementMemberFindUniqueOrThrowArgs} args - Arguments to find a ManagementMember
     * @example
     * // Get one ManagementMember
     * const managementMember = await prisma.managementMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagementMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagementMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ManagementMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberFindFirstArgs} args - Arguments to find a ManagementMember
     * @example
     * // Get one ManagementMember
     * const managementMember = await prisma.managementMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagementMemberFindFirstArgs>(args?: SelectSubset<T, ManagementMemberFindFirstArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ManagementMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberFindFirstOrThrowArgs} args - Arguments to find a ManagementMember
     * @example
     * // Get one ManagementMember
     * const managementMember = await prisma.managementMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagementMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagementMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ManagementMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagementMembers
     * const managementMembers = await prisma.managementMember.findMany()
     * 
     * // Get first 10 ManagementMembers
     * const managementMembers = await prisma.managementMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managementMemberWithIdOnly = await prisma.managementMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagementMemberFindManyArgs>(args?: SelectSubset<T, ManagementMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ManagementMember.
     * @param {ManagementMemberCreateArgs} args - Arguments to create a ManagementMember.
     * @example
     * // Create one ManagementMember
     * const ManagementMember = await prisma.managementMember.create({
     *   data: {
     *     // ... data to create a ManagementMember
     *   }
     * })
     * 
     */
    create<T extends ManagementMemberCreateArgs>(args: SelectSubset<T, ManagementMemberCreateArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ManagementMembers.
     * @param {ManagementMemberCreateManyArgs} args - Arguments to create many ManagementMembers.
     * @example
     * // Create many ManagementMembers
     * const managementMember = await prisma.managementMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagementMemberCreateManyArgs>(args?: SelectSubset<T, ManagementMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManagementMembers and returns the data saved in the database.
     * @param {ManagementMemberCreateManyAndReturnArgs} args - Arguments to create many ManagementMembers.
     * @example
     * // Create many ManagementMembers
     * const managementMember = await prisma.managementMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManagementMembers and only return the `id`
     * const managementMemberWithIdOnly = await prisma.managementMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagementMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagementMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ManagementMember.
     * @param {ManagementMemberDeleteArgs} args - Arguments to delete one ManagementMember.
     * @example
     * // Delete one ManagementMember
     * const ManagementMember = await prisma.managementMember.delete({
     *   where: {
     *     // ... filter to delete one ManagementMember
     *   }
     * })
     * 
     */
    delete<T extends ManagementMemberDeleteArgs>(args: SelectSubset<T, ManagementMemberDeleteArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ManagementMember.
     * @param {ManagementMemberUpdateArgs} args - Arguments to update one ManagementMember.
     * @example
     * // Update one ManagementMember
     * const managementMember = await prisma.managementMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagementMemberUpdateArgs>(args: SelectSubset<T, ManagementMemberUpdateArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ManagementMembers.
     * @param {ManagementMemberDeleteManyArgs} args - Arguments to filter ManagementMembers to delete.
     * @example
     * // Delete a few ManagementMembers
     * const { count } = await prisma.managementMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagementMemberDeleteManyArgs>(args?: SelectSubset<T, ManagementMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagementMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagementMembers
     * const managementMember = await prisma.managementMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagementMemberUpdateManyArgs>(args: SelectSubset<T, ManagementMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManagementMember.
     * @param {ManagementMemberUpsertArgs} args - Arguments to update or create a ManagementMember.
     * @example
     * // Update or create a ManagementMember
     * const managementMember = await prisma.managementMember.upsert({
     *   create: {
     *     // ... data to create a ManagementMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagementMember we want to update
     *   }
     * })
     */
    upsert<T extends ManagementMemberUpsertArgs>(args: SelectSubset<T, ManagementMemberUpsertArgs<ExtArgs>>): Prisma__ManagementMemberClient<$Result.GetResult<Prisma.$ManagementMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ManagementMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberCountArgs} args - Arguments to filter ManagementMembers to count.
     * @example
     * // Count the number of ManagementMembers
     * const count = await prisma.managementMember.count({
     *   where: {
     *     // ... the filter for the ManagementMembers we want to count
     *   }
     * })
    **/
    count<T extends ManagementMemberCountArgs>(
      args?: Subset<T, ManagementMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagementMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagementMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagementMemberAggregateArgs>(args: Subset<T, ManagementMemberAggregateArgs>): Prisma.PrismaPromise<GetManagementMemberAggregateType<T>>

    /**
     * Group by ManagementMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementMemberGroupByArgs} args - Group by arguments.
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
      T extends ManagementMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagementMemberGroupByArgs['orderBy'] }
        : { orderBy?: ManagementMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagementMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagementMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagementMember model
   */
  readonly fields: ManagementMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagementMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagementMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mosque<T extends MosqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MosqueDefaultArgs<ExtArgs>>): Prisma__MosqueClient<$Result.GetResult<Prisma.$MosquePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ManagementMember model
   */ 
  interface ManagementMemberFieldRefs {
    readonly id: FieldRef<"ManagementMember", 'String'>
    readonly name: FieldRef<"ManagementMember", 'String'>
    readonly role: FieldRef<"ManagementMember", 'String'>
    readonly email: FieldRef<"ManagementMember", 'String'>
    readonly phone: FieldRef<"ManagementMember", 'String'>
    readonly mosqueId: FieldRef<"ManagementMember", 'String'>
    readonly createdAt: FieldRef<"ManagementMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagementMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManagementMember findUnique
   */
  export type ManagementMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter, which ManagementMember to fetch.
     */
    where: ManagementMemberWhereUniqueInput
  }

  /**
   * ManagementMember findUniqueOrThrow
   */
  export type ManagementMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter, which ManagementMember to fetch.
     */
    where: ManagementMemberWhereUniqueInput
  }

  /**
   * ManagementMember findFirst
   */
  export type ManagementMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter, which ManagementMember to fetch.
     */
    where?: ManagementMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementMembers to fetch.
     */
    orderBy?: ManagementMemberOrderByWithRelationInput | ManagementMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagementMembers.
     */
    cursor?: ManagementMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagementMembers.
     */
    distinct?: ManagementMemberScalarFieldEnum | ManagementMemberScalarFieldEnum[]
  }

  /**
   * ManagementMember findFirstOrThrow
   */
  export type ManagementMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter, which ManagementMember to fetch.
     */
    where?: ManagementMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementMembers to fetch.
     */
    orderBy?: ManagementMemberOrderByWithRelationInput | ManagementMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagementMembers.
     */
    cursor?: ManagementMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagementMembers.
     */
    distinct?: ManagementMemberScalarFieldEnum | ManagementMemberScalarFieldEnum[]
  }

  /**
   * ManagementMember findMany
   */
  export type ManagementMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter, which ManagementMembers to fetch.
     */
    where?: ManagementMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementMembers to fetch.
     */
    orderBy?: ManagementMemberOrderByWithRelationInput | ManagementMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagementMembers.
     */
    cursor?: ManagementMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementMembers.
     */
    skip?: number
    distinct?: ManagementMemberScalarFieldEnum | ManagementMemberScalarFieldEnum[]
  }

  /**
   * ManagementMember create
   */
  export type ManagementMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagementMember.
     */
    data: XOR<ManagementMemberCreateInput, ManagementMemberUncheckedCreateInput>
  }

  /**
   * ManagementMember createMany
   */
  export type ManagementMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagementMembers.
     */
    data: ManagementMemberCreateManyInput | ManagementMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagementMember createManyAndReturn
   */
  export type ManagementMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ManagementMembers.
     */
    data: ManagementMemberCreateManyInput | ManagementMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagementMember update
   */
  export type ManagementMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagementMember.
     */
    data: XOR<ManagementMemberUpdateInput, ManagementMemberUncheckedUpdateInput>
    /**
     * Choose, which ManagementMember to update.
     */
    where: ManagementMemberWhereUniqueInput
  }

  /**
   * ManagementMember updateMany
   */
  export type ManagementMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagementMembers.
     */
    data: XOR<ManagementMemberUpdateManyMutationInput, ManagementMemberUncheckedUpdateManyInput>
    /**
     * Filter which ManagementMembers to update
     */
    where?: ManagementMemberWhereInput
  }

  /**
   * ManagementMember upsert
   */
  export type ManagementMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagementMember to update in case it exists.
     */
    where: ManagementMemberWhereUniqueInput
    /**
     * In case the ManagementMember found by the `where` argument doesn't exist, create a new ManagementMember with this data.
     */
    create: XOR<ManagementMemberCreateInput, ManagementMemberUncheckedCreateInput>
    /**
     * In case the ManagementMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagementMemberUpdateInput, ManagementMemberUncheckedUpdateInput>
  }

  /**
   * ManagementMember delete
   */
  export type ManagementMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
    /**
     * Filter which ManagementMember to delete.
     */
    where: ManagementMemberWhereUniqueInput
  }

  /**
   * ManagementMember deleteMany
   */
  export type ManagementMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagementMembers to delete
     */
    where?: ManagementMemberWhereInput
  }

  /**
   * ManagementMember without action
   */
  export type ManagementMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementMember
     */
    select?: ManagementMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagementMemberInclude<ExtArgs> | null
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


  export const MosqueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    postcode: 'postcode',
    phone: 'phone',
    email: 'email',
    website: 'website',
    capacity: 'capacity',
    facilities: 'facilities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MosqueScalarFieldEnum = (typeof MosqueScalarFieldEnum)[keyof typeof MosqueScalarFieldEnum]


  export const ImamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    biography: 'biography',
    email: 'email',
    phone: 'phone',
    mosqueId: 'mosqueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImamScalarFieldEnum = (typeof ImamScalarFieldEnum)[keyof typeof ImamScalarFieldEnum]


  export const ManagementMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    phone: 'phone',
    mosqueId: 'mosqueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManagementMemberScalarFieldEnum = (typeof ManagementMemberScalarFieldEnum)[keyof typeof ManagementMemberScalarFieldEnum]


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


  export const MosqueOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    postcode: 'postcode',
    phone: 'phone',
    email: 'email',
    website: 'website',
    facilities: 'facilities'
  };

  export type MosqueOrderByRelevanceFieldEnum = (typeof MosqueOrderByRelevanceFieldEnum)[keyof typeof MosqueOrderByRelevanceFieldEnum]


  export const ImamOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    biography: 'biography',
    email: 'email',
    phone: 'phone',
    mosqueId: 'mosqueId'
  };

  export type ImamOrderByRelevanceFieldEnum = (typeof ImamOrderByRelevanceFieldEnum)[keyof typeof ImamOrderByRelevanceFieldEnum]


  export const ManagementMemberOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    email: 'email',
    phone: 'phone',
    mosqueId: 'mosqueId'
  };

  export type ManagementMemberOrderByRelevanceFieldEnum = (typeof ManagementMemberOrderByRelevanceFieldEnum)[keyof typeof ManagementMemberOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MosqueWhereInput = {
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    id?: StringFilter<"Mosque"> | string
    name?: StringFilter<"Mosque"> | string
    address?: StringFilter<"Mosque"> | string
    city?: StringFilter<"Mosque"> | string
    postcode?: StringFilter<"Mosque"> | string
    phone?: StringNullableFilter<"Mosque"> | string | null
    email?: StringNullableFilter<"Mosque"> | string | null
    website?: StringNullableFilter<"Mosque"> | string | null
    capacity?: IntNullableFilter<"Mosque"> | number | null
    facilities?: StringNullableListFilter<"Mosque">
    createdAt?: DateTimeFilter<"Mosque"> | Date | string
    updatedAt?: DateTimeFilter<"Mosque"> | Date | string
    imams?: ImamListRelationFilter
    management?: ManagementMemberListRelationFilter
  }

  export type MosqueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    facilities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imams?: ImamOrderByRelationAggregateInput
    management?: ManagementMemberOrderByRelationAggregateInput
    _relevance?: MosqueOrderByRelevanceInput
  }

  export type MosqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MosqueWhereInput | MosqueWhereInput[]
    OR?: MosqueWhereInput[]
    NOT?: MosqueWhereInput | MosqueWhereInput[]
    name?: StringFilter<"Mosque"> | string
    address?: StringFilter<"Mosque"> | string
    city?: StringFilter<"Mosque"> | string
    postcode?: StringFilter<"Mosque"> | string
    phone?: StringNullableFilter<"Mosque"> | string | null
    email?: StringNullableFilter<"Mosque"> | string | null
    website?: StringNullableFilter<"Mosque"> | string | null
    capacity?: IntNullableFilter<"Mosque"> | number | null
    facilities?: StringNullableListFilter<"Mosque">
    createdAt?: DateTimeFilter<"Mosque"> | Date | string
    updatedAt?: DateTimeFilter<"Mosque"> | Date | string
    imams?: ImamListRelationFilter
    management?: ManagementMemberListRelationFilter
  }, "id">

  export type MosqueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    facilities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MosqueCountOrderByAggregateInput
    _avg?: MosqueAvgOrderByAggregateInput
    _max?: MosqueMaxOrderByAggregateInput
    _min?: MosqueMinOrderByAggregateInput
    _sum?: MosqueSumOrderByAggregateInput
  }

  export type MosqueScalarWhereWithAggregatesInput = {
    AND?: MosqueScalarWhereWithAggregatesInput | MosqueScalarWhereWithAggregatesInput[]
    OR?: MosqueScalarWhereWithAggregatesInput[]
    NOT?: MosqueScalarWhereWithAggregatesInput | MosqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mosque"> | string
    name?: StringWithAggregatesFilter<"Mosque"> | string
    address?: StringWithAggregatesFilter<"Mosque"> | string
    city?: StringWithAggregatesFilter<"Mosque"> | string
    postcode?: StringWithAggregatesFilter<"Mosque"> | string
    phone?: StringNullableWithAggregatesFilter<"Mosque"> | string | null
    email?: StringNullableWithAggregatesFilter<"Mosque"> | string | null
    website?: StringNullableWithAggregatesFilter<"Mosque"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Mosque"> | number | null
    facilities?: StringNullableListFilter<"Mosque">
    createdAt?: DateTimeWithAggregatesFilter<"Mosque"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mosque"> | Date | string
  }

  export type ImamWhereInput = {
    AND?: ImamWhereInput | ImamWhereInput[]
    OR?: ImamWhereInput[]
    NOT?: ImamWhereInput | ImamWhereInput[]
    id?: StringFilter<"Imam"> | string
    name?: StringFilter<"Imam"> | string
    title?: StringNullableFilter<"Imam"> | string | null
    biography?: StringNullableFilter<"Imam"> | string | null
    email?: StringNullableFilter<"Imam"> | string | null
    phone?: StringNullableFilter<"Imam"> | string | null
    mosqueId?: StringFilter<"Imam"> | string
    createdAt?: DateTimeFilter<"Imam"> | Date | string
    updatedAt?: DateTimeFilter<"Imam"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type ImamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
    _relevance?: ImamOrderByRelevanceInput
  }

  export type ImamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImamWhereInput | ImamWhereInput[]
    OR?: ImamWhereInput[]
    NOT?: ImamWhereInput | ImamWhereInput[]
    name?: StringFilter<"Imam"> | string
    title?: StringNullableFilter<"Imam"> | string | null
    biography?: StringNullableFilter<"Imam"> | string | null
    email?: StringNullableFilter<"Imam"> | string | null
    phone?: StringNullableFilter<"Imam"> | string | null
    mosqueId?: StringFilter<"Imam"> | string
    createdAt?: DateTimeFilter<"Imam"> | Date | string
    updatedAt?: DateTimeFilter<"Imam"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id">

  export type ImamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImamCountOrderByAggregateInput
    _max?: ImamMaxOrderByAggregateInput
    _min?: ImamMinOrderByAggregateInput
  }

  export type ImamScalarWhereWithAggregatesInput = {
    AND?: ImamScalarWhereWithAggregatesInput | ImamScalarWhereWithAggregatesInput[]
    OR?: ImamScalarWhereWithAggregatesInput[]
    NOT?: ImamScalarWhereWithAggregatesInput | ImamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Imam"> | string
    name?: StringWithAggregatesFilter<"Imam"> | string
    title?: StringNullableWithAggregatesFilter<"Imam"> | string | null
    biography?: StringNullableWithAggregatesFilter<"Imam"> | string | null
    email?: StringNullableWithAggregatesFilter<"Imam"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Imam"> | string | null
    mosqueId?: StringWithAggregatesFilter<"Imam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Imam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Imam"> | Date | string
  }

  export type ManagementMemberWhereInput = {
    AND?: ManagementMemberWhereInput | ManagementMemberWhereInput[]
    OR?: ManagementMemberWhereInput[]
    NOT?: ManagementMemberWhereInput | ManagementMemberWhereInput[]
    id?: StringFilter<"ManagementMember"> | string
    name?: StringFilter<"ManagementMember"> | string
    role?: StringFilter<"ManagementMember"> | string
    email?: StringNullableFilter<"ManagementMember"> | string | null
    phone?: StringNullableFilter<"ManagementMember"> | string | null
    mosqueId?: StringFilter<"ManagementMember"> | string
    createdAt?: DateTimeFilter<"ManagementMember"> | Date | string
    updatedAt?: DateTimeFilter<"ManagementMember"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }

  export type ManagementMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mosque?: MosqueOrderByWithRelationInput
    _relevance?: ManagementMemberOrderByRelevanceInput
  }

  export type ManagementMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManagementMemberWhereInput | ManagementMemberWhereInput[]
    OR?: ManagementMemberWhereInput[]
    NOT?: ManagementMemberWhereInput | ManagementMemberWhereInput[]
    name?: StringFilter<"ManagementMember"> | string
    role?: StringFilter<"ManagementMember"> | string
    email?: StringNullableFilter<"ManagementMember"> | string | null
    phone?: StringNullableFilter<"ManagementMember"> | string | null
    mosqueId?: StringFilter<"ManagementMember"> | string
    createdAt?: DateTimeFilter<"ManagementMember"> | Date | string
    updatedAt?: DateTimeFilter<"ManagementMember"> | Date | string
    mosque?: XOR<MosqueRelationFilter, MosqueWhereInput>
  }, "id">

  export type ManagementMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManagementMemberCountOrderByAggregateInput
    _max?: ManagementMemberMaxOrderByAggregateInput
    _min?: ManagementMemberMinOrderByAggregateInput
  }

  export type ManagementMemberScalarWhereWithAggregatesInput = {
    AND?: ManagementMemberScalarWhereWithAggregatesInput | ManagementMemberScalarWhereWithAggregatesInput[]
    OR?: ManagementMemberScalarWhereWithAggregatesInput[]
    NOT?: ManagementMemberScalarWhereWithAggregatesInput | ManagementMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagementMember"> | string
    name?: StringWithAggregatesFilter<"ManagementMember"> | string
    role?: StringWithAggregatesFilter<"ManagementMember"> | string
    email?: StringNullableWithAggregatesFilter<"ManagementMember"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ManagementMember"> | string | null
    mosqueId?: StringWithAggregatesFilter<"ManagementMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ManagementMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagementMember"> | Date | string
  }

  export type MosqueCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    imams?: ImamCreateNestedManyWithoutMosqueInput
    management?: ManagementMemberCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    imams?: ImamUncheckedCreateNestedManyWithoutMosqueInput
    management?: ManagementMemberUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imams?: ImamUpdateManyWithoutMosqueNestedInput
    management?: ManagementMemberUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imams?: ImamUncheckedUpdateManyWithoutMosqueNestedInput
    management?: ManagementMemberUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MosqueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MosqueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImamCreateInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mosque: MosqueCreateNestedOneWithoutImamsInput
  }

  export type ImamUncheckedCreateInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    mosqueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mosque?: MosqueUpdateOneRequiredWithoutImamsNestedInput
  }

  export type ImamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mosqueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImamCreateManyInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    mosqueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mosqueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberCreateInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mosque: MosqueCreateNestedOneWithoutManagementInput
  }

  export type ManagementMemberUncheckedCreateInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    mosqueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagementMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mosque?: MosqueUpdateOneRequiredWithoutManagementNestedInput
  }

  export type ManagementMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mosqueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberCreateManyInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    mosqueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagementMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mosqueId?: StringFieldUpdateOperationsInput | string
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
    search?: string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type ImamListRelationFilter = {
    every?: ImamWhereInput
    some?: ImamWhereInput
    none?: ImamWhereInput
  }

  export type ManagementMemberListRelationFilter = {
    every?: ManagementMemberWhereInput
    some?: ManagementMemberWhereInput
    none?: ManagementMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagementMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MosqueOrderByRelevanceInput = {
    fields: MosqueOrderByRelevanceFieldEnum | MosqueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MosqueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    capacity?: SortOrder
    facilities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type MosqueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueSumOrderByAggregateInput = {
    capacity?: SortOrder
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
    search?: string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type MosqueRelationFilter = {
    is?: MosqueWhereInput
    isNot?: MosqueWhereInput
  }

  export type ImamOrderByRelevanceInput = {
    fields: ImamOrderByRelevanceFieldEnum | ImamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    biography?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagementMemberOrderByRelevanceInput = {
    fields: ManagementMemberOrderByRelevanceFieldEnum | ManagementMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManagementMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagementMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagementMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mosqueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MosqueCreatefacilitiesInput = {
    set: string[]
  }

  export type ImamCreateNestedManyWithoutMosqueInput = {
    create?: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput> | ImamCreateWithoutMosqueInput[] | ImamUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ImamCreateOrConnectWithoutMosqueInput | ImamCreateOrConnectWithoutMosqueInput[]
    createMany?: ImamCreateManyMosqueInputEnvelope
    connect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
  }

  export type ManagementMemberCreateNestedManyWithoutMosqueInput = {
    create?: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput> | ManagementMemberCreateWithoutMosqueInput[] | ManagementMemberUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ManagementMemberCreateOrConnectWithoutMosqueInput | ManagementMemberCreateOrConnectWithoutMosqueInput[]
    createMany?: ManagementMemberCreateManyMosqueInputEnvelope
    connect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
  }

  export type ImamUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput> | ImamCreateWithoutMosqueInput[] | ImamUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ImamCreateOrConnectWithoutMosqueInput | ImamCreateOrConnectWithoutMosqueInput[]
    createMany?: ImamCreateManyMosqueInputEnvelope
    connect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
  }

  export type ManagementMemberUncheckedCreateNestedManyWithoutMosqueInput = {
    create?: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput> | ManagementMemberCreateWithoutMosqueInput[] | ManagementMemberUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ManagementMemberCreateOrConnectWithoutMosqueInput | ManagementMemberCreateOrConnectWithoutMosqueInput[]
    createMany?: ManagementMemberCreateManyMosqueInputEnvelope
    connect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MosqueUpdatefacilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImamUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput> | ImamCreateWithoutMosqueInput[] | ImamUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ImamCreateOrConnectWithoutMosqueInput | ImamCreateOrConnectWithoutMosqueInput[]
    upsert?: ImamUpsertWithWhereUniqueWithoutMosqueInput | ImamUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: ImamCreateManyMosqueInputEnvelope
    set?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    disconnect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    delete?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    connect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    update?: ImamUpdateWithWhereUniqueWithoutMosqueInput | ImamUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: ImamUpdateManyWithWhereWithoutMosqueInput | ImamUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: ImamScalarWhereInput | ImamScalarWhereInput[]
  }

  export type ManagementMemberUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput> | ManagementMemberCreateWithoutMosqueInput[] | ManagementMemberUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ManagementMemberCreateOrConnectWithoutMosqueInput | ManagementMemberCreateOrConnectWithoutMosqueInput[]
    upsert?: ManagementMemberUpsertWithWhereUniqueWithoutMosqueInput | ManagementMemberUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: ManagementMemberCreateManyMosqueInputEnvelope
    set?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    disconnect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    delete?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    connect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    update?: ManagementMemberUpdateWithWhereUniqueWithoutMosqueInput | ManagementMemberUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: ManagementMemberUpdateManyWithWhereWithoutMosqueInput | ManagementMemberUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: ManagementMemberScalarWhereInput | ManagementMemberScalarWhereInput[]
  }

  export type ImamUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput> | ImamCreateWithoutMosqueInput[] | ImamUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ImamCreateOrConnectWithoutMosqueInput | ImamCreateOrConnectWithoutMosqueInput[]
    upsert?: ImamUpsertWithWhereUniqueWithoutMosqueInput | ImamUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: ImamCreateManyMosqueInputEnvelope
    set?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    disconnect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    delete?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    connect?: ImamWhereUniqueInput | ImamWhereUniqueInput[]
    update?: ImamUpdateWithWhereUniqueWithoutMosqueInput | ImamUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: ImamUpdateManyWithWhereWithoutMosqueInput | ImamUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: ImamScalarWhereInput | ImamScalarWhereInput[]
  }

  export type ManagementMemberUncheckedUpdateManyWithoutMosqueNestedInput = {
    create?: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput> | ManagementMemberCreateWithoutMosqueInput[] | ManagementMemberUncheckedCreateWithoutMosqueInput[]
    connectOrCreate?: ManagementMemberCreateOrConnectWithoutMosqueInput | ManagementMemberCreateOrConnectWithoutMosqueInput[]
    upsert?: ManagementMemberUpsertWithWhereUniqueWithoutMosqueInput | ManagementMemberUpsertWithWhereUniqueWithoutMosqueInput[]
    createMany?: ManagementMemberCreateManyMosqueInputEnvelope
    set?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    disconnect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    delete?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    connect?: ManagementMemberWhereUniqueInput | ManagementMemberWhereUniqueInput[]
    update?: ManagementMemberUpdateWithWhereUniqueWithoutMosqueInput | ManagementMemberUpdateWithWhereUniqueWithoutMosqueInput[]
    updateMany?: ManagementMemberUpdateManyWithWhereWithoutMosqueInput | ManagementMemberUpdateManyWithWhereWithoutMosqueInput[]
    deleteMany?: ManagementMemberScalarWhereInput | ManagementMemberScalarWhereInput[]
  }

  export type MosqueCreateNestedOneWithoutImamsInput = {
    create?: XOR<MosqueCreateWithoutImamsInput, MosqueUncheckedCreateWithoutImamsInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutImamsInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutImamsNestedInput = {
    create?: XOR<MosqueCreateWithoutImamsInput, MosqueUncheckedCreateWithoutImamsInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutImamsInput
    upsert?: MosqueUpsertWithoutImamsInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutImamsInput, MosqueUpdateWithoutImamsInput>, MosqueUncheckedUpdateWithoutImamsInput>
  }

  export type MosqueCreateNestedOneWithoutManagementInput = {
    create?: XOR<MosqueCreateWithoutManagementInput, MosqueUncheckedCreateWithoutManagementInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutManagementInput
    connect?: MosqueWhereUniqueInput
  }

  export type MosqueUpdateOneRequiredWithoutManagementNestedInput = {
    create?: XOR<MosqueCreateWithoutManagementInput, MosqueUncheckedCreateWithoutManagementInput>
    connectOrCreate?: MosqueCreateOrConnectWithoutManagementInput
    upsert?: MosqueUpsertWithoutManagementInput
    connect?: MosqueWhereUniqueInput
    update?: XOR<XOR<MosqueUpdateToOneWithWhereWithoutManagementInput, MosqueUpdateWithoutManagementInput>, MosqueUncheckedUpdateWithoutManagementInput>
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ImamCreateWithoutMosqueInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImamUncheckedCreateWithoutMosqueInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImamCreateOrConnectWithoutMosqueInput = {
    where: ImamWhereUniqueInput
    create: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput>
  }

  export type ImamCreateManyMosqueInputEnvelope = {
    data: ImamCreateManyMosqueInput | ImamCreateManyMosqueInput[]
    skipDuplicates?: boolean
  }

  export type ManagementMemberCreateWithoutMosqueInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagementMemberUncheckedCreateWithoutMosqueInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagementMemberCreateOrConnectWithoutMosqueInput = {
    where: ManagementMemberWhereUniqueInput
    create: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput>
  }

  export type ManagementMemberCreateManyMosqueInputEnvelope = {
    data: ManagementMemberCreateManyMosqueInput | ManagementMemberCreateManyMosqueInput[]
    skipDuplicates?: boolean
  }

  export type ImamUpsertWithWhereUniqueWithoutMosqueInput = {
    where: ImamWhereUniqueInput
    update: XOR<ImamUpdateWithoutMosqueInput, ImamUncheckedUpdateWithoutMosqueInput>
    create: XOR<ImamCreateWithoutMosqueInput, ImamUncheckedCreateWithoutMosqueInput>
  }

  export type ImamUpdateWithWhereUniqueWithoutMosqueInput = {
    where: ImamWhereUniqueInput
    data: XOR<ImamUpdateWithoutMosqueInput, ImamUncheckedUpdateWithoutMosqueInput>
  }

  export type ImamUpdateManyWithWhereWithoutMosqueInput = {
    where: ImamScalarWhereInput
    data: XOR<ImamUpdateManyMutationInput, ImamUncheckedUpdateManyWithoutMosqueInput>
  }

  export type ImamScalarWhereInput = {
    AND?: ImamScalarWhereInput | ImamScalarWhereInput[]
    OR?: ImamScalarWhereInput[]
    NOT?: ImamScalarWhereInput | ImamScalarWhereInput[]
    id?: StringFilter<"Imam"> | string
    name?: StringFilter<"Imam"> | string
    title?: StringNullableFilter<"Imam"> | string | null
    biography?: StringNullableFilter<"Imam"> | string | null
    email?: StringNullableFilter<"Imam"> | string | null
    phone?: StringNullableFilter<"Imam"> | string | null
    mosqueId?: StringFilter<"Imam"> | string
    createdAt?: DateTimeFilter<"Imam"> | Date | string
    updatedAt?: DateTimeFilter<"Imam"> | Date | string
  }

  export type ManagementMemberUpsertWithWhereUniqueWithoutMosqueInput = {
    where: ManagementMemberWhereUniqueInput
    update: XOR<ManagementMemberUpdateWithoutMosqueInput, ManagementMemberUncheckedUpdateWithoutMosqueInput>
    create: XOR<ManagementMemberCreateWithoutMosqueInput, ManagementMemberUncheckedCreateWithoutMosqueInput>
  }

  export type ManagementMemberUpdateWithWhereUniqueWithoutMosqueInput = {
    where: ManagementMemberWhereUniqueInput
    data: XOR<ManagementMemberUpdateWithoutMosqueInput, ManagementMemberUncheckedUpdateWithoutMosqueInput>
  }

  export type ManagementMemberUpdateManyWithWhereWithoutMosqueInput = {
    where: ManagementMemberScalarWhereInput
    data: XOR<ManagementMemberUpdateManyMutationInput, ManagementMemberUncheckedUpdateManyWithoutMosqueInput>
  }

  export type ManagementMemberScalarWhereInput = {
    AND?: ManagementMemberScalarWhereInput | ManagementMemberScalarWhereInput[]
    OR?: ManagementMemberScalarWhereInput[]
    NOT?: ManagementMemberScalarWhereInput | ManagementMemberScalarWhereInput[]
    id?: StringFilter<"ManagementMember"> | string
    name?: StringFilter<"ManagementMember"> | string
    role?: StringFilter<"ManagementMember"> | string
    email?: StringNullableFilter<"ManagementMember"> | string | null
    phone?: StringNullableFilter<"ManagementMember"> | string | null
    mosqueId?: StringFilter<"ManagementMember"> | string
    createdAt?: DateTimeFilter<"ManagementMember"> | Date | string
    updatedAt?: DateTimeFilter<"ManagementMember"> | Date | string
  }

  export type MosqueCreateWithoutImamsInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    management?: ManagementMemberCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutImamsInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    management?: ManagementMemberUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutImamsInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutImamsInput, MosqueUncheckedCreateWithoutImamsInput>
  }

  export type MosqueUpsertWithoutImamsInput = {
    update: XOR<MosqueUpdateWithoutImamsInput, MosqueUncheckedUpdateWithoutImamsInput>
    create: XOR<MosqueCreateWithoutImamsInput, MosqueUncheckedCreateWithoutImamsInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutImamsInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutImamsInput, MosqueUncheckedUpdateWithoutImamsInput>
  }

  export type MosqueUpdateWithoutImamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementMemberUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutImamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementMemberUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueCreateWithoutManagementInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    imams?: ImamCreateNestedManyWithoutMosqueInput
  }

  export type MosqueUncheckedCreateWithoutManagementInput = {
    id?: string
    name: string
    address: string
    city: string
    postcode: string
    phone?: string | null
    email?: string | null
    website?: string | null
    capacity?: number | null
    facilities?: MosqueCreatefacilitiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    imams?: ImamUncheckedCreateNestedManyWithoutMosqueInput
  }

  export type MosqueCreateOrConnectWithoutManagementInput = {
    where: MosqueWhereUniqueInput
    create: XOR<MosqueCreateWithoutManagementInput, MosqueUncheckedCreateWithoutManagementInput>
  }

  export type MosqueUpsertWithoutManagementInput = {
    update: XOR<MosqueUpdateWithoutManagementInput, MosqueUncheckedUpdateWithoutManagementInput>
    create: XOR<MosqueCreateWithoutManagementInput, MosqueUncheckedCreateWithoutManagementInput>
    where?: MosqueWhereInput
  }

  export type MosqueUpdateToOneWithWhereWithoutManagementInput = {
    where?: MosqueWhereInput
    data: XOR<MosqueUpdateWithoutManagementInput, MosqueUncheckedUpdateWithoutManagementInput>
  }

  export type MosqueUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imams?: ImamUpdateManyWithoutMosqueNestedInput
  }

  export type MosqueUncheckedUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: MosqueUpdatefacilitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imams?: ImamUncheckedUpdateManyWithoutMosqueNestedInput
  }

  export type ImamCreateManyMosqueInput = {
    id?: string
    name: string
    title?: string | null
    biography?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagementMemberCreateManyMosqueInput = {
    id?: string
    name: string
    role: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImamUpdateWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImamUncheckedUpdateWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImamUncheckedUpdateManyWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberUpdateWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberUncheckedUpdateWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementMemberUncheckedUpdateManyWithoutMosqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MosqueCountOutputTypeDefaultArgs instead
     */
    export type MosqueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MosqueDefaultArgs instead
     */
    export type MosqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MosqueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImamDefaultArgs instead
     */
    export type ImamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManagementMemberDefaultArgs instead
     */
    export type ManagementMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManagementMemberDefaultArgs<ExtArgs>

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