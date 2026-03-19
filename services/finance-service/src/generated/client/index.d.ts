
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
 * Model DonationGoal
 * 
 */
export type DonationGoal = $Result.DefaultSelection<Prisma.$DonationGoalPayload>
/**
 * Model FinanceRecord
 * 
 */
export type FinanceRecord = $Result.DefaultSelection<Prisma.$FinanceRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DonationGoals
 * const donationGoals = await prisma.donationGoal.findMany()
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
   * // Fetch zero or more DonationGoals
   * const donationGoals = await prisma.donationGoal.findMany()
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
   * `prisma.donationGoal`: Exposes CRUD operations for the **DonationGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationGoals
    * const donationGoals = await prisma.donationGoal.findMany()
    * ```
    */
  get donationGoal(): Prisma.DonationGoalDelegate<ExtArgs>;

  /**
   * `prisma.financeRecord`: Exposes CRUD operations for the **FinanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceRecords
    * const financeRecords = await prisma.financeRecord.findMany()
    * ```
    */
  get financeRecord(): Prisma.FinanceRecordDelegate<ExtArgs>;
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
    DonationGoal: 'DonationGoal',
    FinanceRecord: 'FinanceRecord'
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
      modelProps: "donationGoal" | "financeRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DonationGoal: {
        payload: Prisma.$DonationGoalPayload<ExtArgs>
        fields: Prisma.DonationGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          findFirst: {
            args: Prisma.DonationGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          findMany: {
            args: Prisma.DonationGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>[]
          }
          create: {
            args: Prisma.DonationGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          createMany: {
            args: Prisma.DonationGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>[]
          }
          delete: {
            args: Prisma.DonationGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          update: {
            args: Prisma.DonationGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          deleteMany: {
            args: Prisma.DonationGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonationGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationGoalPayload>
          }
          aggregate: {
            args: Prisma.DonationGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationGoal>
          }
          groupBy: {
            args: Prisma.DonationGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationGoalCountArgs<ExtArgs>
            result: $Utils.Optional<DonationGoalCountAggregateOutputType> | number
          }
        }
      }
      FinanceRecord: {
        payload: Prisma.$FinanceRecordPayload<ExtArgs>
        fields: Prisma.FinanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          findFirst: {
            args: Prisma.FinanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          findMany: {
            args: Prisma.FinanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>[]
          }
          create: {
            args: Prisma.FinanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          createMany: {
            args: Prisma.FinanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>[]
          }
          delete: {
            args: Prisma.FinanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          update: {
            args: Prisma.FinanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.FinanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceRecordPayload>
          }
          aggregate: {
            args: Prisma.FinanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceRecord>
          }
          groupBy: {
            args: Prisma.FinanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceRecordCountAggregateOutputType> | number
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
   * Model DonationGoal
   */

  export type AggregateDonationGoal = {
    _count: DonationGoalCountAggregateOutputType | null
    _avg: DonationGoalAvgAggregateOutputType | null
    _sum: DonationGoalSumAggregateOutputType | null
    _min: DonationGoalMinAggregateOutputType | null
    _max: DonationGoalMaxAggregateOutputType | null
  }

  export type DonationGoalAvgAggregateOutputType = {
    targetAmount: Decimal | null
    currentAmount: Decimal | null
  }

  export type DonationGoalSumAggregateOutputType = {
    targetAmount: Decimal | null
    currentAmount: Decimal | null
  }

  export type DonationGoalMinAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    title: string | null
    description: string | null
    targetAmount: Decimal | null
    currentAmount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationGoalMaxAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    title: string | null
    description: string | null
    targetAmount: Decimal | null
    currentAmount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationGoalCountAggregateOutputType = {
    id: number
    mosqueId: number
    title: number
    description: number
    targetAmount: number
    currentAmount: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationGoalAvgAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type DonationGoalSumAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type DonationGoalMinAggregateInputType = {
    id?: true
    mosqueId?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationGoalMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationGoalCountAggregateInputType = {
    id?: true
    mosqueId?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationGoal to aggregate.
     */
    where?: DonationGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationGoals to fetch.
     */
    orderBy?: DonationGoalOrderByWithRelationInput | DonationGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationGoals
    **/
    _count?: true | DonationGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationGoalMaxAggregateInputType
  }

  export type GetDonationGoalAggregateType<T extends DonationGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationGoal[P]>
      : GetScalarType<T[P], AggregateDonationGoal[P]>
  }




  export type DonationGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationGoalWhereInput
    orderBy?: DonationGoalOrderByWithAggregationInput | DonationGoalOrderByWithAggregationInput[]
    by: DonationGoalScalarFieldEnum[] | DonationGoalScalarFieldEnum
    having?: DonationGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationGoalCountAggregateInputType | true
    _avg?: DonationGoalAvgAggregateInputType
    _sum?: DonationGoalSumAggregateInputType
    _min?: DonationGoalMinAggregateInputType
    _max?: DonationGoalMaxAggregateInputType
  }

  export type DonationGoalGroupByOutputType = {
    id: string
    mosqueId: string
    title: string
    description: string | null
    targetAmount: Decimal
    currentAmount: Decimal
    startDate: Date
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DonationGoalCountAggregateOutputType | null
    _avg: DonationGoalAvgAggregateOutputType | null
    _sum: DonationGoalSumAggregateOutputType | null
    _min: DonationGoalMinAggregateOutputType | null
    _max: DonationGoalMaxAggregateOutputType | null
  }

  type GetDonationGoalGroupByPayload<T extends DonationGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGoalGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGoalGroupByOutputType[P]>
        }
      >
    >


  export type DonationGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donationGoal"]>

  export type DonationGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donationGoal"]>

  export type DonationGoalSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DonationGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationGoal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mosqueId: string
      title: string
      description: string | null
      targetAmount: Prisma.Decimal
      currentAmount: Prisma.Decimal
      startDate: Date
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donationGoal"]>
    composites: {}
  }

  type DonationGoalGetPayload<S extends boolean | null | undefined | DonationGoalDefaultArgs> = $Result.GetResult<Prisma.$DonationGoalPayload, S>

  type DonationGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DonationGoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DonationGoalCountAggregateInputType | true
    }

  export interface DonationGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationGoal'], meta: { name: 'DonationGoal' } }
    /**
     * Find zero or one DonationGoal that matches the filter.
     * @param {DonationGoalFindUniqueArgs} args - Arguments to find a DonationGoal
     * @example
     * // Get one DonationGoal
     * const donationGoal = await prisma.donationGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationGoalFindUniqueArgs>(args: SelectSubset<T, DonationGoalFindUniqueArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DonationGoal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DonationGoalFindUniqueOrThrowArgs} args - Arguments to find a DonationGoal
     * @example
     * // Get one DonationGoal
     * const donationGoal = await prisma.donationGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DonationGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalFindFirstArgs} args - Arguments to find a DonationGoal
     * @example
     * // Get one DonationGoal
     * const donationGoal = await prisma.donationGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationGoalFindFirstArgs>(args?: SelectSubset<T, DonationGoalFindFirstArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DonationGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalFindFirstOrThrowArgs} args - Arguments to find a DonationGoal
     * @example
     * // Get one DonationGoal
     * const donationGoal = await prisma.donationGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DonationGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationGoals
     * const donationGoals = await prisma.donationGoal.findMany()
     * 
     * // Get first 10 DonationGoals
     * const donationGoals = await prisma.donationGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationGoalWithIdOnly = await prisma.donationGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationGoalFindManyArgs>(args?: SelectSubset<T, DonationGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DonationGoal.
     * @param {DonationGoalCreateArgs} args - Arguments to create a DonationGoal.
     * @example
     * // Create one DonationGoal
     * const DonationGoal = await prisma.donationGoal.create({
     *   data: {
     *     // ... data to create a DonationGoal
     *   }
     * })
     * 
     */
    create<T extends DonationGoalCreateArgs>(args: SelectSubset<T, DonationGoalCreateArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DonationGoals.
     * @param {DonationGoalCreateManyArgs} args - Arguments to create many DonationGoals.
     * @example
     * // Create many DonationGoals
     * const donationGoal = await prisma.donationGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationGoalCreateManyArgs>(args?: SelectSubset<T, DonationGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationGoals and returns the data saved in the database.
     * @param {DonationGoalCreateManyAndReturnArgs} args - Arguments to create many DonationGoals.
     * @example
     * // Create many DonationGoals
     * const donationGoal = await prisma.donationGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationGoals and only return the `id`
     * const donationGoalWithIdOnly = await prisma.donationGoal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DonationGoal.
     * @param {DonationGoalDeleteArgs} args - Arguments to delete one DonationGoal.
     * @example
     * // Delete one DonationGoal
     * const DonationGoal = await prisma.donationGoal.delete({
     *   where: {
     *     // ... filter to delete one DonationGoal
     *   }
     * })
     * 
     */
    delete<T extends DonationGoalDeleteArgs>(args: SelectSubset<T, DonationGoalDeleteArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DonationGoal.
     * @param {DonationGoalUpdateArgs} args - Arguments to update one DonationGoal.
     * @example
     * // Update one DonationGoal
     * const donationGoal = await prisma.donationGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationGoalUpdateArgs>(args: SelectSubset<T, DonationGoalUpdateArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DonationGoals.
     * @param {DonationGoalDeleteManyArgs} args - Arguments to filter DonationGoals to delete.
     * @example
     * // Delete a few DonationGoals
     * const { count } = await prisma.donationGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationGoalDeleteManyArgs>(args?: SelectSubset<T, DonationGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationGoals
     * const donationGoal = await prisma.donationGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationGoalUpdateManyArgs>(args: SelectSubset<T, DonationGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DonationGoal.
     * @param {DonationGoalUpsertArgs} args - Arguments to update or create a DonationGoal.
     * @example
     * // Update or create a DonationGoal
     * const donationGoal = await prisma.donationGoal.upsert({
     *   create: {
     *     // ... data to create a DonationGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationGoal we want to update
     *   }
     * })
     */
    upsert<T extends DonationGoalUpsertArgs>(args: SelectSubset<T, DonationGoalUpsertArgs<ExtArgs>>): Prisma__DonationGoalClient<$Result.GetResult<Prisma.$DonationGoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DonationGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalCountArgs} args - Arguments to filter DonationGoals to count.
     * @example
     * // Count the number of DonationGoals
     * const count = await prisma.donationGoal.count({
     *   where: {
     *     // ... the filter for the DonationGoals we want to count
     *   }
     * })
    **/
    count<T extends DonationGoalCountArgs>(
      args?: Subset<T, DonationGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationGoalAggregateArgs>(args: Subset<T, DonationGoalAggregateArgs>): Prisma.PrismaPromise<GetDonationGoalAggregateType<T>>

    /**
     * Group by DonationGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGoalGroupByArgs} args - Group by arguments.
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
      T extends DonationGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGoalGroupByArgs['orderBy'] }
        : { orderBy?: DonationGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationGoal model
   */
  readonly fields: DonationGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DonationGoal model
   */ 
  interface DonationGoalFieldRefs {
    readonly id: FieldRef<"DonationGoal", 'String'>
    readonly mosqueId: FieldRef<"DonationGoal", 'String'>
    readonly title: FieldRef<"DonationGoal", 'String'>
    readonly description: FieldRef<"DonationGoal", 'String'>
    readonly targetAmount: FieldRef<"DonationGoal", 'Decimal'>
    readonly currentAmount: FieldRef<"DonationGoal", 'Decimal'>
    readonly startDate: FieldRef<"DonationGoal", 'DateTime'>
    readonly endDate: FieldRef<"DonationGoal", 'DateTime'>
    readonly isActive: FieldRef<"DonationGoal", 'Boolean'>
    readonly createdAt: FieldRef<"DonationGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationGoal findUnique
   */
  export type DonationGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter, which DonationGoal to fetch.
     */
    where: DonationGoalWhereUniqueInput
  }

  /**
   * DonationGoal findUniqueOrThrow
   */
  export type DonationGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter, which DonationGoal to fetch.
     */
    where: DonationGoalWhereUniqueInput
  }

  /**
   * DonationGoal findFirst
   */
  export type DonationGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter, which DonationGoal to fetch.
     */
    where?: DonationGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationGoals to fetch.
     */
    orderBy?: DonationGoalOrderByWithRelationInput | DonationGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationGoals.
     */
    cursor?: DonationGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationGoals.
     */
    distinct?: DonationGoalScalarFieldEnum | DonationGoalScalarFieldEnum[]
  }

  /**
   * DonationGoal findFirstOrThrow
   */
  export type DonationGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter, which DonationGoal to fetch.
     */
    where?: DonationGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationGoals to fetch.
     */
    orderBy?: DonationGoalOrderByWithRelationInput | DonationGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationGoals.
     */
    cursor?: DonationGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationGoals.
     */
    distinct?: DonationGoalScalarFieldEnum | DonationGoalScalarFieldEnum[]
  }

  /**
   * DonationGoal findMany
   */
  export type DonationGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter, which DonationGoals to fetch.
     */
    where?: DonationGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationGoals to fetch.
     */
    orderBy?: DonationGoalOrderByWithRelationInput | DonationGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationGoals.
     */
    cursor?: DonationGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationGoals.
     */
    skip?: number
    distinct?: DonationGoalScalarFieldEnum | DonationGoalScalarFieldEnum[]
  }

  /**
   * DonationGoal create
   */
  export type DonationGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * The data needed to create a DonationGoal.
     */
    data: XOR<DonationGoalCreateInput, DonationGoalUncheckedCreateInput>
  }

  /**
   * DonationGoal createMany
   */
  export type DonationGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationGoals.
     */
    data: DonationGoalCreateManyInput | DonationGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationGoal createManyAndReturn
   */
  export type DonationGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DonationGoals.
     */
    data: DonationGoalCreateManyInput | DonationGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationGoal update
   */
  export type DonationGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * The data needed to update a DonationGoal.
     */
    data: XOR<DonationGoalUpdateInput, DonationGoalUncheckedUpdateInput>
    /**
     * Choose, which DonationGoal to update.
     */
    where: DonationGoalWhereUniqueInput
  }

  /**
   * DonationGoal updateMany
   */
  export type DonationGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationGoals.
     */
    data: XOR<DonationGoalUpdateManyMutationInput, DonationGoalUncheckedUpdateManyInput>
    /**
     * Filter which DonationGoals to update
     */
    where?: DonationGoalWhereInput
  }

  /**
   * DonationGoal upsert
   */
  export type DonationGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * The filter to search for the DonationGoal to update in case it exists.
     */
    where: DonationGoalWhereUniqueInput
    /**
     * In case the DonationGoal found by the `where` argument doesn't exist, create a new DonationGoal with this data.
     */
    create: XOR<DonationGoalCreateInput, DonationGoalUncheckedCreateInput>
    /**
     * In case the DonationGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationGoalUpdateInput, DonationGoalUncheckedUpdateInput>
  }

  /**
   * DonationGoal delete
   */
  export type DonationGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
    /**
     * Filter which DonationGoal to delete.
     */
    where: DonationGoalWhereUniqueInput
  }

  /**
   * DonationGoal deleteMany
   */
  export type DonationGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationGoals to delete
     */
    where?: DonationGoalWhereInput
  }

  /**
   * DonationGoal without action
   */
  export type DonationGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationGoal
     */
    select?: DonationGoalSelect<ExtArgs> | null
  }


  /**
   * Model FinanceRecord
   */

  export type AggregateFinanceRecord = {
    _count: FinanceRecordCountAggregateOutputType | null
    _avg: FinanceRecordAvgAggregateOutputType | null
    _sum: FinanceRecordSumAggregateOutputType | null
    _min: FinanceRecordMinAggregateOutputType | null
    _max: FinanceRecordMaxAggregateOutputType | null
  }

  export type FinanceRecordAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinanceRecordSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinanceRecordMinAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    type: string | null
    category: string | null
    amount: Decimal | null
    description: string | null
    date: Date | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceRecordMaxAggregateOutputType = {
    id: string | null
    mosqueId: string | null
    type: string | null
    category: string | null
    amount: Decimal | null
    description: string | null
    date: Date | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceRecordCountAggregateOutputType = {
    id: number
    mosqueId: number
    type: number
    category: number
    amount: number
    description: number
    date: number
    isAnonymous: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinanceRecordAvgAggregateInputType = {
    amount?: true
  }

  export type FinanceRecordSumAggregateInputType = {
    amount?: true
  }

  export type FinanceRecordMinAggregateInputType = {
    id?: true
    mosqueId?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceRecordMaxAggregateInputType = {
    id?: true
    mosqueId?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceRecordCountAggregateInputType = {
    id?: true
    mosqueId?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    date?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceRecord to aggregate.
     */
    where?: FinanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceRecords to fetch.
     */
    orderBy?: FinanceRecordOrderByWithRelationInput | FinanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceRecords
    **/
    _count?: true | FinanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceRecordMaxAggregateInputType
  }

  export type GetFinanceRecordAggregateType<T extends FinanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceRecord[P]>
      : GetScalarType<T[P], AggregateFinanceRecord[P]>
  }




  export type FinanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceRecordWhereInput
    orderBy?: FinanceRecordOrderByWithAggregationInput | FinanceRecordOrderByWithAggregationInput[]
    by: FinanceRecordScalarFieldEnum[] | FinanceRecordScalarFieldEnum
    having?: FinanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceRecordCountAggregateInputType | true
    _avg?: FinanceRecordAvgAggregateInputType
    _sum?: FinanceRecordSumAggregateInputType
    _min?: FinanceRecordMinAggregateInputType
    _max?: FinanceRecordMaxAggregateInputType
  }

  export type FinanceRecordGroupByOutputType = {
    id: string
    mosqueId: string
    type: string
    category: string
    amount: Decimal
    description: string | null
    date: Date
    isAnonymous: boolean
    createdAt: Date
    updatedAt: Date
    _count: FinanceRecordCountAggregateOutputType | null
    _avg: FinanceRecordAvgAggregateOutputType | null
    _sum: FinanceRecordSumAggregateOutputType | null
    _min: FinanceRecordMinAggregateOutputType | null
    _max: FinanceRecordMaxAggregateOutputType | null
  }

  type GetFinanceRecordGroupByPayload<T extends FinanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type FinanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financeRecord"]>

  export type FinanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mosqueId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financeRecord"]>

  export type FinanceRecordSelectScalar = {
    id?: boolean
    mosqueId?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FinanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mosqueId: string
      type: string
      category: string
      amount: Prisma.Decimal
      description: string | null
      date: Date
      isAnonymous: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financeRecord"]>
    composites: {}
  }

  type FinanceRecordGetPayload<S extends boolean | null | undefined | FinanceRecordDefaultArgs> = $Result.GetResult<Prisma.$FinanceRecordPayload, S>

  type FinanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinanceRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinanceRecordCountAggregateInputType | true
    }

  export interface FinanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceRecord'], meta: { name: 'FinanceRecord' } }
    /**
     * Find zero or one FinanceRecord that matches the filter.
     * @param {FinanceRecordFindUniqueArgs} args - Arguments to find a FinanceRecord
     * @example
     * // Get one FinanceRecord
     * const financeRecord = await prisma.financeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceRecordFindUniqueArgs>(args: SelectSubset<T, FinanceRecordFindUniqueArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FinanceRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinanceRecordFindUniqueOrThrowArgs} args - Arguments to find a FinanceRecord
     * @example
     * // Get one FinanceRecord
     * const financeRecord = await prisma.financeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FinanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordFindFirstArgs} args - Arguments to find a FinanceRecord
     * @example
     * // Get one FinanceRecord
     * const financeRecord = await prisma.financeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceRecordFindFirstArgs>(args?: SelectSubset<T, FinanceRecordFindFirstArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FinanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordFindFirstOrThrowArgs} args - Arguments to find a FinanceRecord
     * @example
     * // Get one FinanceRecord
     * const financeRecord = await prisma.financeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FinanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceRecords
     * const financeRecords = await prisma.financeRecord.findMany()
     * 
     * // Get first 10 FinanceRecords
     * const financeRecords = await prisma.financeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeRecordWithIdOnly = await prisma.financeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceRecordFindManyArgs>(args?: SelectSubset<T, FinanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FinanceRecord.
     * @param {FinanceRecordCreateArgs} args - Arguments to create a FinanceRecord.
     * @example
     * // Create one FinanceRecord
     * const FinanceRecord = await prisma.financeRecord.create({
     *   data: {
     *     // ... data to create a FinanceRecord
     *   }
     * })
     * 
     */
    create<T extends FinanceRecordCreateArgs>(args: SelectSubset<T, FinanceRecordCreateArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FinanceRecords.
     * @param {FinanceRecordCreateManyArgs} args - Arguments to create many FinanceRecords.
     * @example
     * // Create many FinanceRecords
     * const financeRecord = await prisma.financeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceRecordCreateManyArgs>(args?: SelectSubset<T, FinanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceRecords and returns the data saved in the database.
     * @param {FinanceRecordCreateManyAndReturnArgs} args - Arguments to create many FinanceRecords.
     * @example
     * // Create many FinanceRecords
     * const financeRecord = await prisma.financeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceRecords and only return the `id`
     * const financeRecordWithIdOnly = await prisma.financeRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FinanceRecord.
     * @param {FinanceRecordDeleteArgs} args - Arguments to delete one FinanceRecord.
     * @example
     * // Delete one FinanceRecord
     * const FinanceRecord = await prisma.financeRecord.delete({
     *   where: {
     *     // ... filter to delete one FinanceRecord
     *   }
     * })
     * 
     */
    delete<T extends FinanceRecordDeleteArgs>(args: SelectSubset<T, FinanceRecordDeleteArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FinanceRecord.
     * @param {FinanceRecordUpdateArgs} args - Arguments to update one FinanceRecord.
     * @example
     * // Update one FinanceRecord
     * const financeRecord = await prisma.financeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceRecordUpdateArgs>(args: SelectSubset<T, FinanceRecordUpdateArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FinanceRecords.
     * @param {FinanceRecordDeleteManyArgs} args - Arguments to filter FinanceRecords to delete.
     * @example
     * // Delete a few FinanceRecords
     * const { count } = await prisma.financeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceRecordDeleteManyArgs>(args?: SelectSubset<T, FinanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceRecords
     * const financeRecord = await prisma.financeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceRecordUpdateManyArgs>(args: SelectSubset<T, FinanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinanceRecord.
     * @param {FinanceRecordUpsertArgs} args - Arguments to update or create a FinanceRecord.
     * @example
     * // Update or create a FinanceRecord
     * const financeRecord = await prisma.financeRecord.upsert({
     *   create: {
     *     // ... data to create a FinanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends FinanceRecordUpsertArgs>(args: SelectSubset<T, FinanceRecordUpsertArgs<ExtArgs>>): Prisma__FinanceRecordClient<$Result.GetResult<Prisma.$FinanceRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FinanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordCountArgs} args - Arguments to filter FinanceRecords to count.
     * @example
     * // Count the number of FinanceRecords
     * const count = await prisma.financeRecord.count({
     *   where: {
     *     // ... the filter for the FinanceRecords we want to count
     *   }
     * })
    **/
    count<T extends FinanceRecordCountArgs>(
      args?: Subset<T, FinanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceRecordAggregateArgs>(args: Subset<T, FinanceRecordAggregateArgs>): Prisma.PrismaPromise<GetFinanceRecordAggregateType<T>>

    /**
     * Group by FinanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceRecordGroupByArgs} args - Group by arguments.
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
      T extends FinanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: FinanceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceRecord model
   */
  readonly fields: FinanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FinanceRecord model
   */ 
  interface FinanceRecordFieldRefs {
    readonly id: FieldRef<"FinanceRecord", 'String'>
    readonly mosqueId: FieldRef<"FinanceRecord", 'String'>
    readonly type: FieldRef<"FinanceRecord", 'String'>
    readonly category: FieldRef<"FinanceRecord", 'String'>
    readonly amount: FieldRef<"FinanceRecord", 'Decimal'>
    readonly description: FieldRef<"FinanceRecord", 'String'>
    readonly date: FieldRef<"FinanceRecord", 'DateTime'>
    readonly isAnonymous: FieldRef<"FinanceRecord", 'Boolean'>
    readonly createdAt: FieldRef<"FinanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"FinanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinanceRecord findUnique
   */
  export type FinanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter, which FinanceRecord to fetch.
     */
    where: FinanceRecordWhereUniqueInput
  }

  /**
   * FinanceRecord findUniqueOrThrow
   */
  export type FinanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter, which FinanceRecord to fetch.
     */
    where: FinanceRecordWhereUniqueInput
  }

  /**
   * FinanceRecord findFirst
   */
  export type FinanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter, which FinanceRecord to fetch.
     */
    where?: FinanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceRecords to fetch.
     */
    orderBy?: FinanceRecordOrderByWithRelationInput | FinanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceRecords.
     */
    cursor?: FinanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceRecords.
     */
    distinct?: FinanceRecordScalarFieldEnum | FinanceRecordScalarFieldEnum[]
  }

  /**
   * FinanceRecord findFirstOrThrow
   */
  export type FinanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter, which FinanceRecord to fetch.
     */
    where?: FinanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceRecords to fetch.
     */
    orderBy?: FinanceRecordOrderByWithRelationInput | FinanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceRecords.
     */
    cursor?: FinanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceRecords.
     */
    distinct?: FinanceRecordScalarFieldEnum | FinanceRecordScalarFieldEnum[]
  }

  /**
   * FinanceRecord findMany
   */
  export type FinanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter, which FinanceRecords to fetch.
     */
    where?: FinanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceRecords to fetch.
     */
    orderBy?: FinanceRecordOrderByWithRelationInput | FinanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceRecords.
     */
    cursor?: FinanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceRecords.
     */
    skip?: number
    distinct?: FinanceRecordScalarFieldEnum | FinanceRecordScalarFieldEnum[]
  }

  /**
   * FinanceRecord create
   */
  export type FinanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * The data needed to create a FinanceRecord.
     */
    data: XOR<FinanceRecordCreateInput, FinanceRecordUncheckedCreateInput>
  }

  /**
   * FinanceRecord createMany
   */
  export type FinanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceRecords.
     */
    data: FinanceRecordCreateManyInput | FinanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceRecord createManyAndReturn
   */
  export type FinanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FinanceRecords.
     */
    data: FinanceRecordCreateManyInput | FinanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceRecord update
   */
  export type FinanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * The data needed to update a FinanceRecord.
     */
    data: XOR<FinanceRecordUpdateInput, FinanceRecordUncheckedUpdateInput>
    /**
     * Choose, which FinanceRecord to update.
     */
    where: FinanceRecordWhereUniqueInput
  }

  /**
   * FinanceRecord updateMany
   */
  export type FinanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceRecords.
     */
    data: XOR<FinanceRecordUpdateManyMutationInput, FinanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which FinanceRecords to update
     */
    where?: FinanceRecordWhereInput
  }

  /**
   * FinanceRecord upsert
   */
  export type FinanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * The filter to search for the FinanceRecord to update in case it exists.
     */
    where: FinanceRecordWhereUniqueInput
    /**
     * In case the FinanceRecord found by the `where` argument doesn't exist, create a new FinanceRecord with this data.
     */
    create: XOR<FinanceRecordCreateInput, FinanceRecordUncheckedCreateInput>
    /**
     * In case the FinanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceRecordUpdateInput, FinanceRecordUncheckedUpdateInput>
  }

  /**
   * FinanceRecord delete
   */
  export type FinanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
    /**
     * Filter which FinanceRecord to delete.
     */
    where: FinanceRecordWhereUniqueInput
  }

  /**
   * FinanceRecord deleteMany
   */
  export type FinanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceRecords to delete
     */
    where?: FinanceRecordWhereInput
  }

  /**
   * FinanceRecord without action
   */
  export type FinanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceRecord
     */
    select?: FinanceRecordSelect<ExtArgs> | null
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


  export const DonationGoalScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    title: 'title',
    description: 'description',
    targetAmount: 'targetAmount',
    currentAmount: 'currentAmount',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationGoalScalarFieldEnum = (typeof DonationGoalScalarFieldEnum)[keyof typeof DonationGoalScalarFieldEnum]


  export const FinanceRecordScalarFieldEnum: {
    id: 'id',
    mosqueId: 'mosqueId',
    type: 'type',
    category: 'category',
    amount: 'amount',
    description: 'description',
    date: 'date',
    isAnonymous: 'isAnonymous',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinanceRecordScalarFieldEnum = (typeof FinanceRecordScalarFieldEnum)[keyof typeof FinanceRecordScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Deep Input Types
   */


  export type DonationGoalWhereInput = {
    AND?: DonationGoalWhereInput | DonationGoalWhereInput[]
    OR?: DonationGoalWhereInput[]
    NOT?: DonationGoalWhereInput | DonationGoalWhereInput[]
    id?: StringFilter<"DonationGoal"> | string
    mosqueId?: StringFilter<"DonationGoal"> | string
    title?: StringFilter<"DonationGoal"> | string
    description?: StringNullableFilter<"DonationGoal"> | string | null
    targetAmount?: DecimalFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"DonationGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"DonationGoal"> | Date | string | null
    isActive?: BoolFilter<"DonationGoal"> | boolean
    createdAt?: DateTimeFilter<"DonationGoal"> | Date | string
    updatedAt?: DateTimeFilter<"DonationGoal"> | Date | string
  }

  export type DonationGoalOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationGoalWhereInput | DonationGoalWhereInput[]
    OR?: DonationGoalWhereInput[]
    NOT?: DonationGoalWhereInput | DonationGoalWhereInput[]
    mosqueId?: StringFilter<"DonationGoal"> | string
    title?: StringFilter<"DonationGoal"> | string
    description?: StringNullableFilter<"DonationGoal"> | string | null
    targetAmount?: DecimalFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"DonationGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"DonationGoal"> | Date | string | null
    isActive?: BoolFilter<"DonationGoal"> | boolean
    createdAt?: DateTimeFilter<"DonationGoal"> | Date | string
    updatedAt?: DateTimeFilter<"DonationGoal"> | Date | string
  }, "id">

  export type DonationGoalOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationGoalCountOrderByAggregateInput
    _avg?: DonationGoalAvgOrderByAggregateInput
    _max?: DonationGoalMaxOrderByAggregateInput
    _min?: DonationGoalMinOrderByAggregateInput
    _sum?: DonationGoalSumOrderByAggregateInput
  }

  export type DonationGoalScalarWhereWithAggregatesInput = {
    AND?: DonationGoalScalarWhereWithAggregatesInput | DonationGoalScalarWhereWithAggregatesInput[]
    OR?: DonationGoalScalarWhereWithAggregatesInput[]
    NOT?: DonationGoalScalarWhereWithAggregatesInput | DonationGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationGoal"> | string
    mosqueId?: StringWithAggregatesFilter<"DonationGoal"> | string
    title?: StringWithAggregatesFilter<"DonationGoal"> | string
    description?: StringNullableWithAggregatesFilter<"DonationGoal"> | string | null
    targetAmount?: DecimalWithAggregatesFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalWithAggregatesFilter<"DonationGoal"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"DonationGoal"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"DonationGoal"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"DonationGoal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DonationGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationGoal"> | Date | string
  }

  export type FinanceRecordWhereInput = {
    AND?: FinanceRecordWhereInput | FinanceRecordWhereInput[]
    OR?: FinanceRecordWhereInput[]
    NOT?: FinanceRecordWhereInput | FinanceRecordWhereInput[]
    id?: StringFilter<"FinanceRecord"> | string
    mosqueId?: StringFilter<"FinanceRecord"> | string
    type?: StringFilter<"FinanceRecord"> | string
    category?: StringFilter<"FinanceRecord"> | string
    amount?: DecimalFilter<"FinanceRecord"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"FinanceRecord"> | string | null
    date?: DateTimeFilter<"FinanceRecord"> | Date | string
    isAnonymous?: BoolFilter<"FinanceRecord"> | boolean
    createdAt?: DateTimeFilter<"FinanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FinanceRecord"> | Date | string
  }

  export type FinanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceRecordWhereInput | FinanceRecordWhereInput[]
    OR?: FinanceRecordWhereInput[]
    NOT?: FinanceRecordWhereInput | FinanceRecordWhereInput[]
    mosqueId?: StringFilter<"FinanceRecord"> | string
    type?: StringFilter<"FinanceRecord"> | string
    category?: StringFilter<"FinanceRecord"> | string
    amount?: DecimalFilter<"FinanceRecord"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"FinanceRecord"> | string | null
    date?: DateTimeFilter<"FinanceRecord"> | Date | string
    isAnonymous?: BoolFilter<"FinanceRecord"> | boolean
    createdAt?: DateTimeFilter<"FinanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"FinanceRecord"> | Date | string
  }, "id">

  export type FinanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinanceRecordCountOrderByAggregateInput
    _avg?: FinanceRecordAvgOrderByAggregateInput
    _max?: FinanceRecordMaxOrderByAggregateInput
    _min?: FinanceRecordMinOrderByAggregateInput
    _sum?: FinanceRecordSumOrderByAggregateInput
  }

  export type FinanceRecordScalarWhereWithAggregatesInput = {
    AND?: FinanceRecordScalarWhereWithAggregatesInput | FinanceRecordScalarWhereWithAggregatesInput[]
    OR?: FinanceRecordScalarWhereWithAggregatesInput[]
    NOT?: FinanceRecordScalarWhereWithAggregatesInput | FinanceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceRecord"> | string
    mosqueId?: StringWithAggregatesFilter<"FinanceRecord"> | string
    type?: StringWithAggregatesFilter<"FinanceRecord"> | string
    category?: StringWithAggregatesFilter<"FinanceRecord"> | string
    amount?: DecimalWithAggregatesFilter<"FinanceRecord"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"FinanceRecord"> | string | null
    date?: DateTimeWithAggregatesFilter<"FinanceRecord"> | Date | string
    isAnonymous?: BoolWithAggregatesFilter<"FinanceRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FinanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinanceRecord"> | Date | string
  }

  export type DonationGoalCreateInput = {
    id?: string
    mosqueId: string
    title: string
    description?: string | null
    targetAmount: Decimal | DecimalJsLike | number | string
    currentAmount?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationGoalUncheckedCreateInput = {
    id?: string
    mosqueId: string
    title: string
    description?: string | null
    targetAmount: Decimal | DecimalJsLike | number | string
    currentAmount?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationGoalCreateManyInput = {
    id?: string
    mosqueId: string
    title: string
    description?: string | null
    targetAmount: Decimal | DecimalJsLike | number | string
    currentAmount?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceRecordCreateInput = {
    id?: string
    mosqueId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceRecordUncheckedCreateInput = {
    id?: string
    mosqueId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceRecordCreateManyInput = {
    id?: string
    mosqueId: string
    type: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mosqueId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonationGoalCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationGoalAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type DonationGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationGoalMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationGoalSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FinanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    mosqueId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceRecordSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DonationGoalDefaultArgs instead
     */
    export type DonationGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DonationGoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinanceRecordDefaultArgs instead
     */
    export type FinanceRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinanceRecordDefaultArgs<ExtArgs>

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