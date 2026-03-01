
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model units
 * 
 */
export type units = $Result.DefaultSelection<Prisma.$unitsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model athletes
 * 
 */
export type athletes = $Result.DefaultSelection<Prisma.$athletesPayload>
/**
 * Model registrations
 * 
 */
export type registrations = $Result.DefaultSelection<Prisma.$registrationsPayload>
/**
 * Model matches
 * 
 */
export type matches = $Result.DefaultSelection<Prisma.$matchesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  ADMIN: 'ADMIN',
  ORGANIZER: 'ORGANIZER',
  REFEREE: 'REFEREE',
  VIEWER: 'VIEWER'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const gender_enum: {
  NAM: 'NAM',
  NU: 'NU',
  HONHOP: 'HONHOP',
  KHAC: 'KHAC'
};

export type gender_enum = (typeof gender_enum)[keyof typeof gender_enum]


export const type_enum: {
  KYORUGI: 'KYORUGI',
  POOMSAE: 'POOMSAE',
  SKILL: 'SKILL'
};

export type type_enum = (typeof type_enum)[keyof typeof type_enum]


export const bracket_type_enum: {
  BRACKET: 'BRACKET',
  ROUND_ROBIN: 'ROUND_ROBIN'
};

export type bracket_type_enum = (typeof bracket_type_enum)[keyof typeof bracket_type_enum]


export const total_athletes_enum: {
  A4: 'A4',
  A8: 'A8',
  A16: 'A16',
  A32: 'A32'
};

export type total_athletes_enum = (typeof total_athletes_enum)[keyof typeof total_athletes_enum]


export const category_status_enum: {
  READY: 'READY',
  PROGRESS: 'PROGRESS',
  FINISHED: 'FINISHED'
};

export type category_status_enum = (typeof category_status_enum)[keyof typeof category_status_enum]


export const match_status_enum: {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type match_status_enum = (typeof match_status_enum)[keyof typeof match_status_enum]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type gender_enum = $Enums.gender_enum

export const gender_enum: typeof $Enums.gender_enum

export type type_enum = $Enums.type_enum

export const type_enum: typeof $Enums.type_enum

export type bracket_type_enum = $Enums.bracket_type_enum

export const bracket_type_enum: typeof $Enums.bracket_type_enum

export type total_athletes_enum = $Enums.total_athletes_enum

export const total_athletes_enum: typeof $Enums.total_athletes_enum

export type category_status_enum = $Enums.category_status_enum

export const category_status_enum: typeof $Enums.category_status_enum

export type match_status_enum = $Enums.match_status_enum

export const match_status_enum: typeof $Enums.match_status_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profiles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.units`: Exposes CRUD operations for the **units** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.units.findMany()
    * ```
    */
  get units(): Prisma.unitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athletes`: Exposes CRUD operations for the **athletes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athletes
    * const athletes = await prisma.athletes.findMany()
    * ```
    */
  get athletes(): Prisma.athletesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrations`: Exposes CRUD operations for the **registrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registrations.findMany()
    * ```
    */
  get registrations(): Prisma.registrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.matchesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    profiles: 'profiles',
    units: 'units',
    categories: 'categories',
    athletes: 'athletes',
    registrations: 'registrations',
    matches: 'matches'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profiles" | "units" | "categories" | "athletes" | "registrations" | "matches"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      units: {
        payload: Prisma.$unitsPayload<ExtArgs>
        fields: Prisma.unitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findFirst: {
            args: Prisma.unitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findMany: {
            args: Prisma.unitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          create: {
            args: Prisma.unitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          createMany: {
            args: Prisma.unitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          delete: {
            args: Prisma.unitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          update: {
            args: Prisma.unitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          deleteMany: {
            args: Prisma.unitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          upsert: {
            args: Prisma.unitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          aggregate: {
            args: Prisma.UnitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnits>
          }
          groupBy: {
            args: Prisma.unitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.unitsCountArgs<ExtArgs>
            result: $Utils.Optional<UnitsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      athletes: {
        payload: Prisma.$athletesPayload<ExtArgs>
        fields: Prisma.athletesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.athletesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.athletesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          findFirst: {
            args: Prisma.athletesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.athletesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          findMany: {
            args: Prisma.athletesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>[]
          }
          create: {
            args: Prisma.athletesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          createMany: {
            args: Prisma.athletesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.athletesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>[]
          }
          delete: {
            args: Prisma.athletesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          update: {
            args: Prisma.athletesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          deleteMany: {
            args: Prisma.athletesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.athletesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.athletesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>[]
          }
          upsert: {
            args: Prisma.athletesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletesPayload>
          }
          aggregate: {
            args: Prisma.AthletesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthletes>
          }
          groupBy: {
            args: Prisma.athletesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthletesGroupByOutputType>[]
          }
          count: {
            args: Prisma.athletesCountArgs<ExtArgs>
            result: $Utils.Optional<AthletesCountAggregateOutputType> | number
          }
        }
      }
      registrations: {
        payload: Prisma.$registrationsPayload<ExtArgs>
        fields: Prisma.registrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          findFirst: {
            args: Prisma.registrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          findMany: {
            args: Prisma.registrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>[]
          }
          create: {
            args: Prisma.registrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          createMany: {
            args: Prisma.registrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.registrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>[]
          }
          delete: {
            args: Prisma.registrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          update: {
            args: Prisma.registrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          deleteMany: {
            args: Prisma.registrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.registrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>[]
          }
          upsert: {
            args: Prisma.registrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          aggregate: {
            args: Prisma.RegistrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrations>
          }
          groupBy: {
            args: Prisma.registrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.registrationsCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsCountAggregateOutputType> | number
          }
        }
      }
      matches: {
        payload: Prisma.$matchesPayload<ExtArgs>
        fields: Prisma.matchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findFirst: {
            args: Prisma.matchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findMany: {
            args: Prisma.matchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          create: {
            args: Prisma.matchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          createMany: {
            args: Prisma.matchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.matchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          delete: {
            args: Prisma.matchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          update: {
            args: Prisma.matchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          deleteMany: {
            args: Prisma.matchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.matchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          upsert: {
            args: Prisma.matchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.matchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.matchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profiles?: profilesOmit
    units?: unitsOmit
    categories?: categoriesOmit
    athletes?: athletesOmit
    registrations?: registrationsOmit
    matches?: matchesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UnitsCountOutputType
   */

  export type UnitsCountOutputType = {
    athletes: number
  }

  export type UnitsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athletes?: boolean | UnitsCountOutputTypeCountAthletesArgs
  }

  // Custom InputTypes
  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsCountOutputType
     */
    select?: UnitsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeCountAthletesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athletesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    registrations: number
    matches: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | CategoriesCountOutputTypeCountRegistrationsArgs
    matches?: boolean | CategoriesCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }


  /**
   * Count Type AthletesCountOutputType
   */

  export type AthletesCountOutputType = {
    registrations: number
  }

  export type AthletesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | AthletesCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * AthletesCountOutputType without action
   */
  export type AthletesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthletesCountOutputType
     */
    select?: AthletesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AthletesCountOutputType without action
   */
  export type AthletesCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
  }


  /**
   * Count Type RegistrationsCountOutputType
   */

  export type RegistrationsCountOutputType = {
    matches_as_player1: number
    matches_as_player2: number
    matches_won: number
  }

  export type RegistrationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches_as_player1?: boolean | RegistrationsCountOutputTypeCountMatches_as_player1Args
    matches_as_player2?: boolean | RegistrationsCountOutputTypeCountMatches_as_player2Args
    matches_won?: boolean | RegistrationsCountOutputTypeCountMatches_wonArgs
  }

  // Custom InputTypes
  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationsCountOutputType
     */
    select?: RegistrationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeCountMatches_as_player1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }

  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeCountMatches_as_player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }

  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeCountMatches_wonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    role: $Enums.user_role | null
    full_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    role: $Enums.user_role | null
    full_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    role: number
    full_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    role?: true
    full_name?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    role?: true
    full_name?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    role?: true
    full_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    role: $Enums.user_role
    full_name: string | null
    created_at: Date
    updated_at: Date
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    full_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    full_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    full_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    role?: boolean
    full_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "full_name" | "created_at" | "updated_at", ExtArgs["result"]["profiles"]>

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.user_role
      full_name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'String'>
    readonly role: FieldRef<"profiles", 'user_role'>
    readonly full_name: FieldRef<"profiles", 'String'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
    readonly updated_at: FieldRef<"profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
  }


  /**
   * Model units
   */

  export type AggregateUnits = {
    _count: UnitsCountAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  export type UnitsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UnitsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UnitsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UnitsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UnitsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UnitsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UnitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to aggregate.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units
    **/
    _count?: true | UnitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitsMaxAggregateInputType
  }

  export type GetUnitsAggregateType<T extends UnitsAggregateArgs> = {
        [P in keyof T & keyof AggregateUnits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnits[P]>
      : GetScalarType<T[P], AggregateUnits[P]>
  }




  export type unitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unitsWhereInput
    orderBy?: unitsOrderByWithAggregationInput | unitsOrderByWithAggregationInput[]
    by: UnitsScalarFieldEnum[] | UnitsScalarFieldEnum
    having?: unitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitsCountAggregateInputType | true
    _min?: UnitsMinAggregateInputType
    _max?: UnitsMaxAggregateInputType
  }

  export type UnitsGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: UnitsCountAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  type GetUnitsGroupByPayload<T extends unitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitsGroupByOutputType[P]>
            : GetScalarType<T[P], UnitsGroupByOutputType[P]>
        }
      >
    >


  export type unitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    athletes?: boolean | units$athletesArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units"]>

  export type unitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["units"]>

  export type unitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["units"]>

  export type unitsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type unitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["units"]>
  export type unitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athletes?: boolean | units$athletesArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type unitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $unitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "units"
    objects: {
      athletes: Prisma.$athletesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["units"]>
    composites: {}
  }

  type unitsGetPayload<S extends boolean | null | undefined | unitsDefaultArgs> = $Result.GetResult<Prisma.$unitsPayload, S>

  type unitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitsCountAggregateInputType | true
    }

  export interface unitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['units'], meta: { name: 'units' } }
    /**
     * Find zero or one Units that matches the filter.
     * @param {unitsFindUniqueArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unitsFindUniqueArgs>(args: SelectSubset<T, unitsFindUniqueArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Units that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unitsFindUniqueOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unitsFindUniqueOrThrowArgs>(args: SelectSubset<T, unitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unitsFindFirstArgs>(args?: SelectSubset<T, unitsFindFirstArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unitsFindFirstOrThrowArgs>(args?: SelectSubset<T, unitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.units.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.units.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitsWithIdOnly = await prisma.units.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends unitsFindManyArgs>(args?: SelectSubset<T, unitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Units.
     * @param {unitsCreateArgs} args - Arguments to create a Units.
     * @example
     * // Create one Units
     * const Units = await prisma.units.create({
     *   data: {
     *     // ... data to create a Units
     *   }
     * })
     * 
     */
    create<T extends unitsCreateArgs>(args: SelectSubset<T, unitsCreateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {unitsCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unitsCreateManyArgs>(args?: SelectSubset<T, unitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {unitsCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitsWithIdOnly = await prisma.units.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unitsCreateManyAndReturnArgs>(args?: SelectSubset<T, unitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Units.
     * @param {unitsDeleteArgs} args - Arguments to delete one Units.
     * @example
     * // Delete one Units
     * const Units = await prisma.units.delete({
     *   where: {
     *     // ... filter to delete one Units
     *   }
     * })
     * 
     */
    delete<T extends unitsDeleteArgs>(args: SelectSubset<T, unitsDeleteArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Units.
     * @param {unitsUpdateArgs} args - Arguments to update one Units.
     * @example
     * // Update one Units
     * const units = await prisma.units.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unitsUpdateArgs>(args: SelectSubset<T, unitsUpdateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {unitsDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.units.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unitsDeleteManyArgs>(args?: SelectSubset<T, unitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unitsUpdateManyArgs>(args: SelectSubset<T, unitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {unitsUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitsWithIdOnly = await prisma.units.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unitsUpdateManyAndReturnArgs>(args: SelectSubset<T, unitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Units.
     * @param {unitsUpsertArgs} args - Arguments to update or create a Units.
     * @example
     * // Update or create a Units
     * const units = await prisma.units.upsert({
     *   create: {
     *     // ... data to create a Units
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Units we want to update
     *   }
     * })
     */
    upsert<T extends unitsUpsertArgs>(args: SelectSubset<T, unitsUpsertArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.units.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends unitsCountArgs>(
      args?: Subset<T, unitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitsAggregateArgs>(args: Subset<T, UnitsAggregateArgs>): Prisma.PrismaPromise<GetUnitsAggregateType<T>>

    /**
     * Group by Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsGroupByArgs} args - Group by arguments.
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
      T extends unitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unitsGroupByArgs['orderBy'] }
        : { orderBy?: unitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, unitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the units model
   */
  readonly fields: unitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for units.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athletes<T extends units$athletesArgs<ExtArgs> = {}>(args?: Subset<T, units$athletesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the units model
   */
  interface unitsFieldRefs {
    readonly id: FieldRef<"units", 'String'>
    readonly name: FieldRef<"units", 'String'>
    readonly created_at: FieldRef<"units", 'DateTime'>
    readonly updated_at: FieldRef<"units", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * units findUnique
   */
  export type unitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findUniqueOrThrow
   */
  export type unitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findFirst
   */
  export type unitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findFirstOrThrow
   */
  export type unitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findMany
   */
  export type unitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units create
   */
  export type unitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to create a units.
     */
    data: XOR<unitsCreateInput, unitsUncheckedCreateInput>
  }

  /**
   * units createMany
   */
  export type unitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * units createManyAndReturn
   */
  export type unitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * units update
   */
  export type unitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to update a units.
     */
    data: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
    /**
     * Choose, which units to update.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units updateMany
   */
  export type unitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * units updateManyAndReturn
   */
  export type unitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * units upsert
   */
  export type unitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The filter to search for the units to update in case it exists.
     */
    where: unitsWhereUniqueInput
    /**
     * In case the units found by the `where` argument doesn't exist, create a new units with this data.
     */
    create: XOR<unitsCreateInput, unitsUncheckedCreateInput>
    /**
     * In case the units was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
  }

  /**
   * units delete
   */
  export type unitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter which units to delete.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units deleteMany
   */
  export type unitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to delete
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to delete.
     */
    limit?: number
  }

  /**
   * units.athletes
   */
  export type units$athletesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    where?: athletesWhereInput
    orderBy?: athletesOrderByWithRelationInput | athletesOrderByWithRelationInput[]
    cursor?: athletesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * units without action
   */
  export type unitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    category_name: string | null
    gender: $Enums.gender_enum | null
    type: $Enums.type_enum | null
    group_age: string | null
    bracket_type: $Enums.bracket_type_enum | null
    total_athletes: $Enums.total_athletes_enum | null
    status: $Enums.category_status_enum | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    category_name: string | null
    gender: $Enums.gender_enum | null
    type: $Enums.type_enum | null
    group_age: string | null
    bracket_type: $Enums.bracket_type_enum | null
    total_athletes: $Enums.total_athletes_enum | null
    status: $Enums.category_status_enum | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    category_name: number
    gender: number
    type: number
    group_age: number
    bracket_type: number
    total_athletes: number
    status: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    category_name?: true
    gender?: true
    type?: true
    group_age?: true
    bracket_type?: true
    total_athletes?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    category_name?: true
    gender?: true
    type?: true
    group_age?: true
    bracket_type?: true
    total_athletes?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    category_name?: true
    gender?: true
    type?: true
    group_age?: true
    bracket_type?: true
    total_athletes?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status: $Enums.category_status_enum
    start_date: Date
    end_date: Date
    created_at: Date
    updated_at: Date
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    gender?: boolean
    type?: boolean
    group_age?: boolean
    bracket_type?: boolean
    total_athletes?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    registrations?: boolean | categories$registrationsArgs<ExtArgs>
    matches?: boolean | categories$matchesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    gender?: boolean
    type?: boolean
    group_age?: boolean
    bracket_type?: boolean
    total_athletes?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    gender?: boolean
    type?: boolean
    group_age?: boolean
    bracket_type?: boolean
    total_athletes?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    category_name?: boolean
    gender?: boolean
    type?: boolean
    group_age?: boolean
    bracket_type?: boolean
    total_athletes?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_name" | "gender" | "type" | "group_age" | "bracket_type" | "total_athletes" | "status" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | categories$registrationsArgs<ExtArgs>
    matches?: boolean | categories$matchesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      registrations: Prisma.$registrationsPayload<ExtArgs>[]
      matches: Prisma.$matchesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_name: string
      gender: $Enums.gender_enum
      type: $Enums.type_enum
      group_age: string
      bracket_type: $Enums.bracket_type_enum
      total_athletes: $Enums.total_athletes_enum
      status: $Enums.category_status_enum
      start_date: Date
      end_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends categories$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, categories$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends categories$matchesArgs<ExtArgs> = {}>(args?: Subset<T, categories$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'String'>
    readonly category_name: FieldRef<"categories", 'String'>
    readonly gender: FieldRef<"categories", 'gender_enum'>
    readonly type: FieldRef<"categories", 'type_enum'>
    readonly group_age: FieldRef<"categories", 'String'>
    readonly bracket_type: FieldRef<"categories", 'bracket_type_enum'>
    readonly total_athletes: FieldRef<"categories", 'total_athletes_enum'>
    readonly status: FieldRef<"categories", 'category_status_enum'>
    readonly start_date: FieldRef<"categories", 'DateTime'>
    readonly end_date: FieldRef<"categories", 'DateTime'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.registrations
   */
  export type categories$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    cursor?: registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * categories.matches
   */
  export type categories$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model athletes
   */

  export type AggregateAthletes = {
    _count: AthletesCountAggregateOutputType | null
    _min: AthletesMinAggregateOutputType | null
    _max: AthletesMaxAggregateOutputType | null
  }

  export type AthletesMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    unit_id: string | null
    gender: $Enums.gender_enum | null
    birthday: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AthletesMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    unit_id: string | null
    gender: $Enums.gender_enum | null
    birthday: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AthletesCountAggregateOutputType = {
    id: number
    full_name: number
    unit_id: number
    gender: number
    birthday: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AthletesMinAggregateInputType = {
    id?: true
    full_name?: true
    unit_id?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type AthletesMaxAggregateInputType = {
    id?: true
    full_name?: true
    unit_id?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type AthletesCountAggregateInputType = {
    id?: true
    full_name?: true
    unit_id?: true
    gender?: true
    birthday?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AthletesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athletes to aggregate.
     */
    where?: athletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athletesOrderByWithRelationInput | athletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: athletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned athletes
    **/
    _count?: true | AthletesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthletesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthletesMaxAggregateInputType
  }

  export type GetAthletesAggregateType<T extends AthletesAggregateArgs> = {
        [P in keyof T & keyof AggregateAthletes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthletes[P]>
      : GetScalarType<T[P], AggregateAthletes[P]>
  }




  export type athletesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athletesWhereInput
    orderBy?: athletesOrderByWithAggregationInput | athletesOrderByWithAggregationInput[]
    by: AthletesScalarFieldEnum[] | AthletesScalarFieldEnum
    having?: athletesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthletesCountAggregateInputType | true
    _min?: AthletesMinAggregateInputType
    _max?: AthletesMaxAggregateInputType
  }

  export type AthletesGroupByOutputType = {
    id: string
    full_name: string
    unit_id: string
    gender: $Enums.gender_enum
    birthday: Date
    created_at: Date
    updated_at: Date
    _count: AthletesCountAggregateOutputType | null
    _min: AthletesMinAggregateOutputType | null
    _max: AthletesMaxAggregateOutputType | null
  }

  type GetAthletesGroupByPayload<T extends athletesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthletesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthletesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthletesGroupByOutputType[P]>
            : GetScalarType<T[P], AthletesGroupByOutputType[P]>
        }
      >
    >


  export type athletesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    unit_id?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit?: boolean | unitsDefaultArgs<ExtArgs>
    registrations?: boolean | athletes$registrationsArgs<ExtArgs>
    _count?: boolean | AthletesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type athletesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    unit_id?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type athletesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    unit_id?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type athletesSelectScalar = {
    id?: boolean
    full_name?: boolean
    unit_id?: boolean
    gender?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type athletesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "unit_id" | "gender" | "birthday" | "created_at" | "updated_at", ExtArgs["result"]["athletes"]>
  export type athletesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | unitsDefaultArgs<ExtArgs>
    registrations?: boolean | athletes$registrationsArgs<ExtArgs>
    _count?: boolean | AthletesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type athletesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | unitsDefaultArgs<ExtArgs>
  }
  export type athletesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | unitsDefaultArgs<ExtArgs>
  }

  export type $athletesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "athletes"
    objects: {
      unit: Prisma.$unitsPayload<ExtArgs>
      registrations: Prisma.$registrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      unit_id: string
      gender: $Enums.gender_enum
      birthday: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["athletes"]>
    composites: {}
  }

  type athletesGetPayload<S extends boolean | null | undefined | athletesDefaultArgs> = $Result.GetResult<Prisma.$athletesPayload, S>

  type athletesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<athletesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthletesCountAggregateInputType | true
    }

  export interface athletesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['athletes'], meta: { name: 'athletes' } }
    /**
     * Find zero or one Athletes that matches the filter.
     * @param {athletesFindUniqueArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends athletesFindUniqueArgs>(args: SelectSubset<T, athletesFindUniqueArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Athletes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {athletesFindUniqueOrThrowArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends athletesFindUniqueOrThrowArgs>(args: SelectSubset<T, athletesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesFindFirstArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends athletesFindFirstArgs>(args?: SelectSubset<T, athletesFindFirstArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athletes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesFindFirstOrThrowArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends athletesFindFirstOrThrowArgs>(args?: SelectSubset<T, athletesFindFirstOrThrowArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athletes
     * const athletes = await prisma.athletes.findMany()
     * 
     * // Get first 10 Athletes
     * const athletes = await prisma.athletes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athletesWithIdOnly = await prisma.athletes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends athletesFindManyArgs>(args?: SelectSubset<T, athletesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Athletes.
     * @param {athletesCreateArgs} args - Arguments to create a Athletes.
     * @example
     * // Create one Athletes
     * const Athletes = await prisma.athletes.create({
     *   data: {
     *     // ... data to create a Athletes
     *   }
     * })
     * 
     */
    create<T extends athletesCreateArgs>(args: SelectSubset<T, athletesCreateArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Athletes.
     * @param {athletesCreateManyArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athletes = await prisma.athletes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends athletesCreateManyArgs>(args?: SelectSubset<T, athletesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athletes and returns the data saved in the database.
     * @param {athletesCreateManyAndReturnArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athletes = await prisma.athletes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athletes and only return the `id`
     * const athletesWithIdOnly = await prisma.athletes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends athletesCreateManyAndReturnArgs>(args?: SelectSubset<T, athletesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Athletes.
     * @param {athletesDeleteArgs} args - Arguments to delete one Athletes.
     * @example
     * // Delete one Athletes
     * const Athletes = await prisma.athletes.delete({
     *   where: {
     *     // ... filter to delete one Athletes
     *   }
     * })
     * 
     */
    delete<T extends athletesDeleteArgs>(args: SelectSubset<T, athletesDeleteArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Athletes.
     * @param {athletesUpdateArgs} args - Arguments to update one Athletes.
     * @example
     * // Update one Athletes
     * const athletes = await prisma.athletes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends athletesUpdateArgs>(args: SelectSubset<T, athletesUpdateArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Athletes.
     * @param {athletesDeleteManyArgs} args - Arguments to filter Athletes to delete.
     * @example
     * // Delete a few Athletes
     * const { count } = await prisma.athletes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends athletesDeleteManyArgs>(args?: SelectSubset<T, athletesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athletes
     * const athletes = await prisma.athletes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends athletesUpdateManyArgs>(args: SelectSubset<T, athletesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes and returns the data updated in the database.
     * @param {athletesUpdateManyAndReturnArgs} args - Arguments to update many Athletes.
     * @example
     * // Update many Athletes
     * const athletes = await prisma.athletes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athletes and only return the `id`
     * const athletesWithIdOnly = await prisma.athletes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends athletesUpdateManyAndReturnArgs>(args: SelectSubset<T, athletesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Athletes.
     * @param {athletesUpsertArgs} args - Arguments to update or create a Athletes.
     * @example
     * // Update or create a Athletes
     * const athletes = await prisma.athletes.upsert({
     *   create: {
     *     // ... data to create a Athletes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athletes we want to update
     *   }
     * })
     */
    upsert<T extends athletesUpsertArgs>(args: SelectSubset<T, athletesUpsertArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesCountArgs} args - Arguments to filter Athletes to count.
     * @example
     * // Count the number of Athletes
     * const count = await prisma.athletes.count({
     *   where: {
     *     // ... the filter for the Athletes we want to count
     *   }
     * })
    **/
    count<T extends athletesCountArgs>(
      args?: Subset<T, athletesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthletesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AthletesAggregateArgs>(args: Subset<T, AthletesAggregateArgs>): Prisma.PrismaPromise<GetAthletesAggregateType<T>>

    /**
     * Group by Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athletesGroupByArgs} args - Group by arguments.
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
      T extends athletesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: athletesGroupByArgs['orderBy'] }
        : { orderBy?: athletesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, athletesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthletesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the athletes model
   */
  readonly fields: athletesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for athletes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__athletesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends unitsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unitsDefaultArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends athletes$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, athletes$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the athletes model
   */
  interface athletesFieldRefs {
    readonly id: FieldRef<"athletes", 'String'>
    readonly full_name: FieldRef<"athletes", 'String'>
    readonly unit_id: FieldRef<"athletes", 'String'>
    readonly gender: FieldRef<"athletes", 'gender_enum'>
    readonly birthday: FieldRef<"athletes", 'DateTime'>
    readonly created_at: FieldRef<"athletes", 'DateTime'>
    readonly updated_at: FieldRef<"athletes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * athletes findUnique
   */
  export type athletesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where: athletesWhereUniqueInput
  }

  /**
   * athletes findUniqueOrThrow
   */
  export type athletesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where: athletesWhereUniqueInput
  }

  /**
   * athletes findFirst
   */
  export type athletesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where?: athletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athletesOrderByWithRelationInput | athletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athletes.
     */
    cursor?: athletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athletes.
     */
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * athletes findFirstOrThrow
   */
  export type athletesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where?: athletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athletesOrderByWithRelationInput | athletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athletes.
     */
    cursor?: athletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athletes.
     */
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * athletes findMany
   */
  export type athletesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where?: athletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athletesOrderByWithRelationInput | athletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing athletes.
     */
    cursor?: athletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * athletes create
   */
  export type athletesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * The data needed to create a athletes.
     */
    data: XOR<athletesCreateInput, athletesUncheckedCreateInput>
  }

  /**
   * athletes createMany
   */
  export type athletesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many athletes.
     */
    data: athletesCreateManyInput | athletesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * athletes createManyAndReturn
   */
  export type athletesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * The data used to create many athletes.
     */
    data: athletesCreateManyInput | athletesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * athletes update
   */
  export type athletesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * The data needed to update a athletes.
     */
    data: XOR<athletesUpdateInput, athletesUncheckedUpdateInput>
    /**
     * Choose, which athletes to update.
     */
    where: athletesWhereUniqueInput
  }

  /**
   * athletes updateMany
   */
  export type athletesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update athletes.
     */
    data: XOR<athletesUpdateManyMutationInput, athletesUncheckedUpdateManyInput>
    /**
     * Filter which athletes to update
     */
    where?: athletesWhereInput
    /**
     * Limit how many athletes to update.
     */
    limit?: number
  }

  /**
   * athletes updateManyAndReturn
   */
  export type athletesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * The data used to update athletes.
     */
    data: XOR<athletesUpdateManyMutationInput, athletesUncheckedUpdateManyInput>
    /**
     * Filter which athletes to update
     */
    where?: athletesWhereInput
    /**
     * Limit how many athletes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * athletes upsert
   */
  export type athletesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * The filter to search for the athletes to update in case it exists.
     */
    where: athletesWhereUniqueInput
    /**
     * In case the athletes found by the `where` argument doesn't exist, create a new athletes with this data.
     */
    create: XOR<athletesCreateInput, athletesUncheckedCreateInput>
    /**
     * In case the athletes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<athletesUpdateInput, athletesUncheckedUpdateInput>
  }

  /**
   * athletes delete
   */
  export type athletesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
    /**
     * Filter which athletes to delete.
     */
    where: athletesWhereUniqueInput
  }

  /**
   * athletes deleteMany
   */
  export type athletesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athletes to delete
     */
    where?: athletesWhereInput
    /**
     * Limit how many athletes to delete.
     */
    limit?: number
  }

  /**
   * athletes.registrations
   */
  export type athletes$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    cursor?: registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * athletes without action
   */
  export type athletesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athletes
     */
    select?: athletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athletes
     */
    omit?: athletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athletesInclude<ExtArgs> | null
  }


  /**
   * Model registrations
   */

  export type AggregateRegistrations = {
    _count: RegistrationsCountAggregateOutputType | null
    _avg: RegistrationsAvgAggregateOutputType | null
    _sum: RegistrationsSumAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  export type RegistrationsAvgAggregateOutputType = {
    final_score: Decimal | null
    final_rank: number | null
  }

  export type RegistrationsSumAggregateOutputType = {
    final_score: Decimal | null
    final_rank: number | null
  }

  export type RegistrationsMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    athlete_id: string | null
    final_score: Decimal | null
    final_rank: number | null
    registration_date: Date | null
  }

  export type RegistrationsMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    athlete_id: string | null
    final_score: Decimal | null
    final_rank: number | null
    registration_date: Date | null
  }

  export type RegistrationsCountAggregateOutputType = {
    id: number
    category_id: number
    athlete_id: number
    final_score: number
    final_rank: number
    registration_date: number
    _all: number
  }


  export type RegistrationsAvgAggregateInputType = {
    final_score?: true
    final_rank?: true
  }

  export type RegistrationsSumAggregateInputType = {
    final_score?: true
    final_rank?: true
  }

  export type RegistrationsMinAggregateInputType = {
    id?: true
    category_id?: true
    athlete_id?: true
    final_score?: true
    final_rank?: true
    registration_date?: true
  }

  export type RegistrationsMaxAggregateInputType = {
    id?: true
    category_id?: true
    athlete_id?: true
    final_score?: true
    final_rank?: true
    registration_date?: true
  }

  export type RegistrationsCountAggregateInputType = {
    id?: true
    category_id?: true
    athlete_id?: true
    final_score?: true
    final_rank?: true
    registration_date?: true
    _all?: true
  }

  export type RegistrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrations to aggregate.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registrations
    **/
    _count?: true | RegistrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationsMaxAggregateInputType
  }

  export type GetRegistrationsAggregateType<T extends RegistrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrations[P]>
      : GetScalarType<T[P], AggregateRegistrations[P]>
  }




  export type registrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithAggregationInput | registrationsOrderByWithAggregationInput[]
    by: RegistrationsScalarFieldEnum[] | RegistrationsScalarFieldEnum
    having?: registrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationsCountAggregateInputType | true
    _avg?: RegistrationsAvgAggregateInputType
    _sum?: RegistrationsSumAggregateInputType
    _min?: RegistrationsMinAggregateInputType
    _max?: RegistrationsMaxAggregateInputType
  }

  export type RegistrationsGroupByOutputType = {
    id: string
    category_id: string
    athlete_id: string
    final_score: Decimal | null
    final_rank: number | null
    registration_date: Date
    _count: RegistrationsCountAggregateOutputType | null
    _avg: RegistrationsAvgAggregateOutputType | null
    _sum: RegistrationsSumAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  type GetRegistrationsGroupByPayload<T extends registrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
        }
      >
    >


  export type registrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete_id?: boolean
    final_score?: boolean
    final_rank?: boolean
    registration_date?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
    matches_as_player1?: boolean | registrations$matches_as_player1Args<ExtArgs>
    matches_as_player2?: boolean | registrations$matches_as_player2Args<ExtArgs>
    matches_won?: boolean | registrations$matches_wonArgs<ExtArgs>
    _count?: boolean | RegistrationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type registrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete_id?: boolean
    final_score?: boolean
    final_rank?: boolean
    registration_date?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type registrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete_id?: boolean
    final_score?: boolean
    final_rank?: boolean
    registration_date?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type registrationsSelectScalar = {
    id?: boolean
    category_id?: boolean
    athlete_id?: boolean
    final_score?: boolean
    final_rank?: boolean
    registration_date?: boolean
  }

  export type registrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "athlete_id" | "final_score" | "final_rank" | "registration_date", ExtArgs["result"]["registrations"]>
  export type registrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
    matches_as_player1?: boolean | registrations$matches_as_player1Args<ExtArgs>
    matches_as_player2?: boolean | registrations$matches_as_player2Args<ExtArgs>
    matches_won?: boolean | registrations$matches_wonArgs<ExtArgs>
    _count?: boolean | RegistrationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type registrationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
  }
  export type registrationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    athlete?: boolean | athletesDefaultArgs<ExtArgs>
  }

  export type $registrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registrations"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs>
      athlete: Prisma.$athletesPayload<ExtArgs>
      matches_as_player1: Prisma.$matchesPayload<ExtArgs>[]
      matches_as_player2: Prisma.$matchesPayload<ExtArgs>[]
      matches_won: Prisma.$matchesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string
      athlete_id: string
      final_score: Prisma.Decimal | null
      final_rank: number | null
      registration_date: Date
    }, ExtArgs["result"]["registrations"]>
    composites: {}
  }

  type registrationsGetPayload<S extends boolean | null | undefined | registrationsDefaultArgs> = $Result.GetResult<Prisma.$registrationsPayload, S>

  type registrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationsCountAggregateInputType | true
    }

  export interface registrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registrations'], meta: { name: 'registrations' } }
    /**
     * Find zero or one Registrations that matches the filter.
     * @param {registrationsFindUniqueArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registrationsFindUniqueArgs>(args: SelectSubset<T, registrationsFindUniqueArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registrationsFindUniqueOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, registrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindFirstArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registrationsFindFirstArgs>(args?: SelectSubset<T, registrationsFindFirstArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindFirstOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, registrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registrations.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationsWithIdOnly = await prisma.registrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends registrationsFindManyArgs>(args?: SelectSubset<T, registrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registrations.
     * @param {registrationsCreateArgs} args - Arguments to create a Registrations.
     * @example
     * // Create one Registrations
     * const Registrations = await prisma.registrations.create({
     *   data: {
     *     // ... data to create a Registrations
     *   }
     * })
     * 
     */
    create<T extends registrationsCreateArgs>(args: SelectSubset<T, registrationsCreateArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {registrationsCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registrations = await prisma.registrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registrationsCreateManyArgs>(args?: SelectSubset<T, registrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {registrationsCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registrations = await prisma.registrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `id`
     * const registrationsWithIdOnly = await prisma.registrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends registrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, registrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registrations.
     * @param {registrationsDeleteArgs} args - Arguments to delete one Registrations.
     * @example
     * // Delete one Registrations
     * const Registrations = await prisma.registrations.delete({
     *   where: {
     *     // ... filter to delete one Registrations
     *   }
     * })
     * 
     */
    delete<T extends registrationsDeleteArgs>(args: SelectSubset<T, registrationsDeleteArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registrations.
     * @param {registrationsUpdateArgs} args - Arguments to update one Registrations.
     * @example
     * // Update one Registrations
     * const registrations = await prisma.registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registrationsUpdateArgs>(args: SelectSubset<T, registrationsUpdateArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {registrationsDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registrationsDeleteManyArgs>(args?: SelectSubset<T, registrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registrations = await prisma.registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registrationsUpdateManyArgs>(args: SelectSubset<T, registrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations and returns the data updated in the database.
     * @param {registrationsUpdateManyAndReturnArgs} args - Arguments to update many Registrations.
     * @example
     * // Update many Registrations
     * const registrations = await prisma.registrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registrations and only return the `id`
     * const registrationsWithIdOnly = await prisma.registrations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends registrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, registrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registrations.
     * @param {registrationsUpsertArgs} args - Arguments to update or create a Registrations.
     * @example
     * // Update or create a Registrations
     * const registrations = await prisma.registrations.upsert({
     *   create: {
     *     // ... data to create a Registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registrations we want to update
     *   }
     * })
     */
    upsert<T extends registrationsUpsertArgs>(args: SelectSubset<T, registrationsUpsertArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registrations.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends registrationsCountArgs>(
      args?: Subset<T, registrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationsAggregateArgs>(args: Subset<T, RegistrationsAggregateArgs>): Prisma.PrismaPromise<GetRegistrationsAggregateType<T>>

    /**
     * Group by Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsGroupByArgs} args - Group by arguments.
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
      T extends registrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registrationsGroupByArgs['orderBy'] }
        : { orderBy?: registrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registrations model
   */
  readonly fields: registrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    athlete<T extends athletesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, athletesDefaultArgs<ExtArgs>>): Prisma__athletesClient<$Result.GetResult<Prisma.$athletesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matches_as_player1<T extends registrations$matches_as_player1Args<ExtArgs> = {}>(args?: Subset<T, registrations$matches_as_player1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches_as_player2<T extends registrations$matches_as_player2Args<ExtArgs> = {}>(args?: Subset<T, registrations$matches_as_player2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches_won<T extends registrations$matches_wonArgs<ExtArgs> = {}>(args?: Subset<T, registrations$matches_wonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the registrations model
   */
  interface registrationsFieldRefs {
    readonly id: FieldRef<"registrations", 'String'>
    readonly category_id: FieldRef<"registrations", 'String'>
    readonly athlete_id: FieldRef<"registrations", 'String'>
    readonly final_score: FieldRef<"registrations", 'Decimal'>
    readonly final_rank: FieldRef<"registrations", 'Int'>
    readonly registration_date: FieldRef<"registrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * registrations findUnique
   */
  export type registrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations findUniqueOrThrow
   */
  export type registrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations findFirst
   */
  export type registrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations findFirstOrThrow
   */
  export type registrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations findMany
   */
  export type registrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations create
   */
  export type registrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a registrations.
     */
    data: XOR<registrationsCreateInput, registrationsUncheckedCreateInput>
  }

  /**
   * registrations createMany
   */
  export type registrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registrations.
     */
    data: registrationsCreateManyInput | registrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registrations createManyAndReturn
   */
  export type registrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * The data used to create many registrations.
     */
    data: registrationsCreateManyInput | registrationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * registrations update
   */
  export type registrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a registrations.
     */
    data: XOR<registrationsUpdateInput, registrationsUncheckedUpdateInput>
    /**
     * Choose, which registrations to update.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations updateMany
   */
  export type registrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registrations.
     */
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyInput>
    /**
     * Filter which registrations to update
     */
    where?: registrationsWhereInput
    /**
     * Limit how many registrations to update.
     */
    limit?: number
  }

  /**
   * registrations updateManyAndReturn
   */
  export type registrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * The data used to update registrations.
     */
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyInput>
    /**
     * Filter which registrations to update
     */
    where?: registrationsWhereInput
    /**
     * Limit how many registrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * registrations upsert
   */
  export type registrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the registrations to update in case it exists.
     */
    where: registrationsWhereUniqueInput
    /**
     * In case the registrations found by the `where` argument doesn't exist, create a new registrations with this data.
     */
    create: XOR<registrationsCreateInput, registrationsUncheckedCreateInput>
    /**
     * In case the registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registrationsUpdateInput, registrationsUncheckedUpdateInput>
  }

  /**
   * registrations delete
   */
  export type registrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter which registrations to delete.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations deleteMany
   */
  export type registrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrations to delete
     */
    where?: registrationsWhereInput
    /**
     * Limit how many registrations to delete.
     */
    limit?: number
  }

  /**
   * registrations.matches_as_player1
   */
  export type registrations$matches_as_player1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * registrations.matches_as_player2
   */
  export type registrations$matches_as_player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * registrations.matches_won
   */
  export type registrations$matches_wonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    cursor?: matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * registrations without action
   */
  export type registrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
  }


  /**
   * Model matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesAvgAggregateOutputType = {
    round: number | null
    match_order: number | null
    score1: Decimal | null
    score2: Decimal | null
  }

  export type MatchesSumAggregateOutputType = {
    round: number | null
    match_order: number | null
    score1: Decimal | null
    score2: Decimal | null
  }

  export type MatchesMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    athlete1_registration_id: string | null
    athlete2_registration_id: string | null
    winner_id: string | null
    round: number | null
    match_order: number | null
    score1: Decimal | null
    score2: Decimal | null
    status: $Enums.match_status_enum | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    athlete1_registration_id: string | null
    athlete2_registration_id: string | null
    winner_id: string | null
    round: number | null
    match_order: number | null
    score1: Decimal | null
    score2: Decimal | null
    status: $Enums.match_status_enum | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    category_id: number
    athlete1_registration_id: number
    athlete2_registration_id: number
    winner_id: number
    round: number
    match_order: number
    score1: number
    score2: number
    status: number
    _all: number
  }


  export type MatchesAvgAggregateInputType = {
    round?: true
    match_order?: true
    score1?: true
    score2?: true
  }

  export type MatchesSumAggregateInputType = {
    round?: true
    match_order?: true
    score1?: true
    score2?: true
  }

  export type MatchesMinAggregateInputType = {
    id?: true
    category_id?: true
    athlete1_registration_id?: true
    athlete2_registration_id?: true
    winner_id?: true
    round?: true
    match_order?: true
    score1?: true
    score2?: true
    status?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    category_id?: true
    athlete1_registration_id?: true
    athlete2_registration_id?: true
    winner_id?: true
    round?: true
    match_order?: true
    score1?: true
    score2?: true
    status?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    category_id?: true
    athlete1_registration_id?: true
    athlete2_registration_id?: true
    winner_id?: true
    round?: true
    match_order?: true
    score1?: true
    score2?: true
    status?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to aggregate.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type matchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithAggregationInput | matchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: matchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _avg?: MatchesAvgAggregateInputType
    _sum?: MatchesSumAggregateInputType
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: string
    category_id: string
    athlete1_registration_id: string | null
    athlete2_registration_id: string | null
    winner_id: string | null
    round: number
    match_order: number
    score1: Decimal | null
    score2: Decimal | null
    status: $Enums.match_status_enum
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends matchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type matchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete1_registration_id?: boolean
    athlete2_registration_id?: boolean
    winner_id?: boolean
    round?: boolean
    match_order?: boolean
    score1?: boolean
    score2?: boolean
    status?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete1_registration_id?: boolean
    athlete2_registration_id?: boolean
    winner_id?: boolean
    round?: boolean
    match_order?: boolean
    score1?: boolean
    score2?: boolean
    status?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    athlete1_registration_id?: boolean
    athlete2_registration_id?: boolean
    winner_id?: boolean
    round?: boolean
    match_order?: boolean
    score1?: boolean
    score2?: boolean
    status?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectScalar = {
    id?: boolean
    category_id?: boolean
    athlete1_registration_id?: boolean
    athlete2_registration_id?: boolean
    winner_id?: boolean
    round?: boolean
    match_order?: boolean
    score1?: boolean
    score2?: boolean
    status?: boolean
  }

  export type matchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "athlete1_registration_id" | "athlete2_registration_id" | "winner_id" | "round" | "match_order" | "score1" | "score2" | "status", ExtArgs["result"]["matches"]>
  export type matchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }
  export type matchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }
  export type matchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    player1?: boolean | matches$player1Args<ExtArgs>
    player2?: boolean | matches$player2Args<ExtArgs>
    winner?: boolean | matches$winnerArgs<ExtArgs>
  }

  export type $matchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "matches"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs>
      player1: Prisma.$registrationsPayload<ExtArgs> | null
      player2: Prisma.$registrationsPayload<ExtArgs> | null
      winner: Prisma.$registrationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string
      athlete1_registration_id: string | null
      athlete2_registration_id: string | null
      winner_id: string | null
      round: number
      match_order: number
      score1: Prisma.Decimal | null
      score2: Prisma.Decimal | null
      status: $Enums.match_status_enum
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type matchesGetPayload<S extends boolean | null | undefined | matchesDefaultArgs> = $Result.GetResult<Prisma.$matchesPayload, S>

  type matchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface matchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['matches'], meta: { name: 'matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {matchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matchesFindUniqueArgs>(args: SelectSubset<T, matchesFindUniqueArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matchesFindUniqueOrThrowArgs>(args: SelectSubset<T, matchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matchesFindFirstArgs>(args?: SelectSubset<T, matchesFindFirstArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matchesFindFirstOrThrowArgs>(args?: SelectSubset<T, matchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends matchesFindManyArgs>(args?: SelectSubset<T, matchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {matchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends matchesCreateArgs>(args: SelectSubset<T, matchesCreateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {matchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matchesCreateManyArgs>(args?: SelectSubset<T, matchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {matchesCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends matchesCreateManyAndReturnArgs>(args?: SelectSubset<T, matchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matches.
     * @param {matchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends matchesDeleteArgs>(args: SelectSubset<T, matchesDeleteArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {matchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matchesUpdateArgs>(args: SelectSubset<T, matchesUpdateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {matchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matchesDeleteManyArgs>(args?: SelectSubset<T, matchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matchesUpdateManyArgs>(args: SelectSubset<T, matchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {matchesUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends matchesUpdateManyAndReturnArgs>(args: SelectSubset<T, matchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matches.
     * @param {matchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends matchesUpsertArgs>(args: SelectSubset<T, matchesUpsertArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchesCountArgs>(
      args?: Subset<T, matchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesGroupByArgs} args - Group by arguments.
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
      T extends matchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matchesGroupByArgs['orderBy'] }
        : { orderBy?: matchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, matchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the matches model
   */
  readonly fields: matchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player1<T extends matches$player1Args<ExtArgs> = {}>(args?: Subset<T, matches$player1Args<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player2<T extends matches$player2Args<ExtArgs> = {}>(args?: Subset<T, matches$player2Args<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends matches$winnerArgs<ExtArgs> = {}>(args?: Subset<T, matches$winnerArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the matches model
   */
  interface matchesFieldRefs {
    readonly id: FieldRef<"matches", 'String'>
    readonly category_id: FieldRef<"matches", 'String'>
    readonly athlete1_registration_id: FieldRef<"matches", 'String'>
    readonly athlete2_registration_id: FieldRef<"matches", 'String'>
    readonly winner_id: FieldRef<"matches", 'String'>
    readonly round: FieldRef<"matches", 'Int'>
    readonly match_order: FieldRef<"matches", 'Int'>
    readonly score1: FieldRef<"matches", 'Decimal'>
    readonly score2: FieldRef<"matches", 'Decimal'>
    readonly status: FieldRef<"matches", 'match_status_enum'>
  }
    

  // Custom InputTypes
  /**
   * matches findUnique
   */
  export type matchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findUniqueOrThrow
   */
  export type matchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findFirst
   */
  export type matchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findFirstOrThrow
   */
  export type matchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findMany
   */
  export type matchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches create
   */
  export type matchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to create a matches.
     */
    data: XOR<matchesCreateInput, matchesUncheckedCreateInput>
  }

  /**
   * matches createMany
   */
  export type matchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matches.
     */
    data: matchesCreateManyInput | matchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matches createManyAndReturn
   */
  export type matchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * The data used to create many matches.
     */
    data: matchesCreateManyInput | matchesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * matches update
   */
  export type matchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to update a matches.
     */
    data: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
    /**
     * Choose, which matches to update.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches updateMany
   */
  export type matchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matches.
     */
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
  }

  /**
   * matches updateManyAndReturn
   */
  export type matchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * The data used to update matches.
     */
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * matches upsert
   */
  export type matchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The filter to search for the matches to update in case it exists.
     */
    where: matchesWhereUniqueInput
    /**
     * In case the matches found by the `where` argument doesn't exist, create a new matches with this data.
     */
    create: XOR<matchesCreateInput, matchesUncheckedCreateInput>
    /**
     * In case the matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
  }

  /**
   * matches delete
   */
  export type matchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter which matches to delete.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches deleteMany
   */
  export type matchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to delete
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to delete.
     */
    limit?: number
  }

  /**
   * matches.player1
   */
  export type matches$player1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
  }

  /**
   * matches.player2
   */
  export type matches$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
  }

  /**
   * matches.winner
   */
  export type matches$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
  }

  /**
   * matches without action
   */
  export type matchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
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


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    role: 'role',
    full_name: 'full_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const UnitsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UnitsScalarFieldEnum = (typeof UnitsScalarFieldEnum)[keyof typeof UnitsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name',
    gender: 'gender',
    type: 'type',
    group_age: 'group_age',
    bracket_type: 'bracket_type',
    total_athletes: 'total_athletes',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const AthletesScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    unit_id: 'unit_id',
    gender: 'gender',
    birthday: 'birthday',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AthletesScalarFieldEnum = (typeof AthletesScalarFieldEnum)[keyof typeof AthletesScalarFieldEnum]


  export const RegistrationsScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    athlete_id: 'athlete_id',
    final_score: 'final_score',
    final_rank: 'final_rank',
    registration_date: 'registration_date'
  };

  export type RegistrationsScalarFieldEnum = (typeof RegistrationsScalarFieldEnum)[keyof typeof RegistrationsScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    athlete1_registration_id: 'athlete1_registration_id',
    athlete2_registration_id: 'athlete2_registration_id',
    winner_id: 'winner_id',
    round: 'round',
    match_order: 'match_order',
    score1: 'score1',
    score2: 'score2',
    status: 'status'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


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
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'gender_enum'
   */
  export type Enumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum'>
    


  /**
   * Reference to a field of type 'gender_enum[]'
   */
  export type ListEnumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum[]'>
    


  /**
   * Reference to a field of type 'type_enum'
   */
  export type Enumtype_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_enum'>
    


  /**
   * Reference to a field of type 'type_enum[]'
   */
  export type ListEnumtype_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type_enum[]'>
    


  /**
   * Reference to a field of type 'bracket_type_enum'
   */
  export type Enumbracket_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bracket_type_enum'>
    


  /**
   * Reference to a field of type 'bracket_type_enum[]'
   */
  export type ListEnumbracket_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bracket_type_enum[]'>
    


  /**
   * Reference to a field of type 'total_athletes_enum'
   */
  export type Enumtotal_athletes_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'total_athletes_enum'>
    


  /**
   * Reference to a field of type 'total_athletes_enum[]'
   */
  export type ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'total_athletes_enum[]'>
    


  /**
   * Reference to a field of type 'category_status_enum'
   */
  export type Enumcategory_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category_status_enum'>
    


  /**
   * Reference to a field of type 'category_status_enum[]'
   */
  export type ListEnumcategory_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category_status_enum[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'match_status_enum'
   */
  export type Enummatch_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_status_enum'>
    


  /**
   * Reference to a field of type 'match_status_enum[]'
   */
  export type ListEnummatch_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_status_enum[]'>
    


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


  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: UuidFilter<"profiles"> | string
    role?: Enumuser_roleFilter<"profiles"> | $Enums.user_role
    full_name?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeFilter<"profiles"> | Date | string
    updated_at?: DateTimeFilter<"profiles"> | Date | string
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    full_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    role?: Enumuser_roleFilter<"profiles"> | $Enums.user_role
    full_name?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeFilter<"profiles"> | Date | string
    updated_at?: DateTimeFilter<"profiles"> | Date | string
  }, "id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    full_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: profilesCountOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"profiles"> | string
    role?: Enumuser_roleWithAggregatesFilter<"profiles"> | $Enums.user_role
    full_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"profiles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"profiles"> | Date | string
  }

  export type unitsWhereInput = {
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    id?: UuidFilter<"units"> | string
    name?: StringFilter<"units"> | string
    created_at?: DateTimeFilter<"units"> | Date | string
    updated_at?: DateTimeFilter<"units"> | Date | string
    athletes?: AthletesListRelationFilter
  }

  export type unitsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    athletes?: athletesOrderByRelationAggregateInput
  }

  export type unitsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    created_at?: DateTimeFilter<"units"> | Date | string
    updated_at?: DateTimeFilter<"units"> | Date | string
    athletes?: AthletesListRelationFilter
  }, "id" | "name">

  export type unitsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: unitsCountOrderByAggregateInput
    _max?: unitsMaxOrderByAggregateInput
    _min?: unitsMinOrderByAggregateInput
  }

  export type unitsScalarWhereWithAggregatesInput = {
    AND?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    OR?: unitsScalarWhereWithAggregatesInput[]
    NOT?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"units"> | string
    name?: StringWithAggregatesFilter<"units"> | string
    created_at?: DateTimeWithAggregatesFilter<"units"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"units"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: UuidFilter<"categories"> | string
    category_name?: StringFilter<"categories"> | string
    gender?: Enumgender_enumFilter<"categories"> | $Enums.gender_enum
    type?: Enumtype_enumFilter<"categories"> | $Enums.type_enum
    group_age?: StringFilter<"categories"> | string
    bracket_type?: Enumbracket_type_enumFilter<"categories"> | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFilter<"categories"> | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFilter<"categories"> | $Enums.category_status_enum
    start_date?: DateTimeFilter<"categories"> | Date | string
    end_date?: DateTimeFilter<"categories"> | Date | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    registrations?: RegistrationsListRelationFilter
    matches?: MatchesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    group_age?: SortOrder
    bracket_type?: SortOrder
    total_athletes?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    registrations?: registrationsOrderByRelationAggregateInput
    matches?: matchesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    category_name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    gender?: Enumgender_enumFilter<"categories"> | $Enums.gender_enum
    type?: Enumtype_enumFilter<"categories"> | $Enums.type_enum
    group_age?: StringFilter<"categories"> | string
    bracket_type?: Enumbracket_type_enumFilter<"categories"> | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFilter<"categories"> | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFilter<"categories"> | $Enums.category_status_enum
    start_date?: DateTimeFilter<"categories"> | Date | string
    end_date?: DateTimeFilter<"categories"> | Date | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    registrations?: RegistrationsListRelationFilter
    matches?: MatchesListRelationFilter
  }, "id" | "category_name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    group_age?: SortOrder
    bracket_type?: SortOrder
    total_athletes?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"categories"> | string
    category_name?: StringWithAggregatesFilter<"categories"> | string
    gender?: Enumgender_enumWithAggregatesFilter<"categories"> | $Enums.gender_enum
    type?: Enumtype_enumWithAggregatesFilter<"categories"> | $Enums.type_enum
    group_age?: StringWithAggregatesFilter<"categories"> | string
    bracket_type?: Enumbracket_type_enumWithAggregatesFilter<"categories"> | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumWithAggregatesFilter<"categories"> | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumWithAggregatesFilter<"categories"> | $Enums.category_status_enum
    start_date?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type athletesWhereInput = {
    AND?: athletesWhereInput | athletesWhereInput[]
    OR?: athletesWhereInput[]
    NOT?: athletesWhereInput | athletesWhereInput[]
    id?: UuidFilter<"athletes"> | string
    full_name?: StringFilter<"athletes"> | string
    unit_id?: UuidFilter<"athletes"> | string
    gender?: Enumgender_enumFilter<"athletes"> | $Enums.gender_enum
    birthday?: DateTimeFilter<"athletes"> | Date | string
    created_at?: DateTimeFilter<"athletes"> | Date | string
    updated_at?: DateTimeFilter<"athletes"> | Date | string
    unit?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
    registrations?: RegistrationsListRelationFilter
  }

  export type athletesOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    unit_id?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    unit?: unitsOrderByWithRelationInput
    registrations?: registrationsOrderByRelationAggregateInput
  }

  export type athletesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: athletesWhereInput | athletesWhereInput[]
    OR?: athletesWhereInput[]
    NOT?: athletesWhereInput | athletesWhereInput[]
    full_name?: StringFilter<"athletes"> | string
    unit_id?: UuidFilter<"athletes"> | string
    gender?: Enumgender_enumFilter<"athletes"> | $Enums.gender_enum
    birthday?: DateTimeFilter<"athletes"> | Date | string
    created_at?: DateTimeFilter<"athletes"> | Date | string
    updated_at?: DateTimeFilter<"athletes"> | Date | string
    unit?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
    registrations?: RegistrationsListRelationFilter
  }, "id">

  export type athletesOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    unit_id?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: athletesCountOrderByAggregateInput
    _max?: athletesMaxOrderByAggregateInput
    _min?: athletesMinOrderByAggregateInput
  }

  export type athletesScalarWhereWithAggregatesInput = {
    AND?: athletesScalarWhereWithAggregatesInput | athletesScalarWhereWithAggregatesInput[]
    OR?: athletesScalarWhereWithAggregatesInput[]
    NOT?: athletesScalarWhereWithAggregatesInput | athletesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"athletes"> | string
    full_name?: StringWithAggregatesFilter<"athletes"> | string
    unit_id?: UuidWithAggregatesFilter<"athletes"> | string
    gender?: Enumgender_enumWithAggregatesFilter<"athletes"> | $Enums.gender_enum
    birthday?: DateTimeWithAggregatesFilter<"athletes"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"athletes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"athletes"> | Date | string
  }

  export type registrationsWhereInput = {
    AND?: registrationsWhereInput | registrationsWhereInput[]
    OR?: registrationsWhereInput[]
    NOT?: registrationsWhereInput | registrationsWhereInput[]
    id?: UuidFilter<"registrations"> | string
    category_id?: UuidFilter<"registrations"> | string
    athlete_id?: UuidFilter<"registrations"> | string
    final_score?: DecimalNullableFilter<"registrations"> | Decimal | DecimalJsLike | number | string | null
    final_rank?: IntNullableFilter<"registrations"> | number | null
    registration_date?: DateTimeFilter<"registrations"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    athlete?: XOR<AthletesScalarRelationFilter, athletesWhereInput>
    matches_as_player1?: MatchesListRelationFilter
    matches_as_player2?: MatchesListRelationFilter
    matches_won?: MatchesListRelationFilter
  }

  export type registrationsOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete_id?: SortOrder
    final_score?: SortOrderInput | SortOrder
    final_rank?: SortOrderInput | SortOrder
    registration_date?: SortOrder
    category?: categoriesOrderByWithRelationInput
    athlete?: athletesOrderByWithRelationInput
    matches_as_player1?: matchesOrderByRelationAggregateInput
    matches_as_player2?: matchesOrderByRelationAggregateInput
    matches_won?: matchesOrderByRelationAggregateInput
  }

  export type registrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    category_id_athlete_id?: registrationsCategory_idAthlete_idCompoundUniqueInput
    AND?: registrationsWhereInput | registrationsWhereInput[]
    OR?: registrationsWhereInput[]
    NOT?: registrationsWhereInput | registrationsWhereInput[]
    category_id?: UuidFilter<"registrations"> | string
    athlete_id?: UuidFilter<"registrations"> | string
    final_score?: DecimalNullableFilter<"registrations"> | Decimal | DecimalJsLike | number | string | null
    final_rank?: IntNullableFilter<"registrations"> | number | null
    registration_date?: DateTimeFilter<"registrations"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    athlete?: XOR<AthletesScalarRelationFilter, athletesWhereInput>
    matches_as_player1?: MatchesListRelationFilter
    matches_as_player2?: MatchesListRelationFilter
    matches_won?: MatchesListRelationFilter
  }, "id" | "category_id_athlete_id">

  export type registrationsOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete_id?: SortOrder
    final_score?: SortOrderInput | SortOrder
    final_rank?: SortOrderInput | SortOrder
    registration_date?: SortOrder
    _count?: registrationsCountOrderByAggregateInput
    _avg?: registrationsAvgOrderByAggregateInput
    _max?: registrationsMaxOrderByAggregateInput
    _min?: registrationsMinOrderByAggregateInput
    _sum?: registrationsSumOrderByAggregateInput
  }

  export type registrationsScalarWhereWithAggregatesInput = {
    AND?: registrationsScalarWhereWithAggregatesInput | registrationsScalarWhereWithAggregatesInput[]
    OR?: registrationsScalarWhereWithAggregatesInput[]
    NOT?: registrationsScalarWhereWithAggregatesInput | registrationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"registrations"> | string
    category_id?: UuidWithAggregatesFilter<"registrations"> | string
    athlete_id?: UuidWithAggregatesFilter<"registrations"> | string
    final_score?: DecimalNullableWithAggregatesFilter<"registrations"> | Decimal | DecimalJsLike | number | string | null
    final_rank?: IntNullableWithAggregatesFilter<"registrations"> | number | null
    registration_date?: DateTimeWithAggregatesFilter<"registrations"> | Date | string
  }

  export type matchesWhereInput = {
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    id?: UuidFilter<"matches"> | string
    category_id?: UuidFilter<"matches"> | string
    athlete1_registration_id?: UuidNullableFilter<"matches"> | string | null
    athlete2_registration_id?: UuidNullableFilter<"matches"> | string | null
    winner_id?: UuidNullableFilter<"matches"> | string | null
    round?: IntFilter<"matches"> | number
    match_order?: IntFilter<"matches"> | number
    score1?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    score2?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFilter<"matches"> | $Enums.match_status_enum
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    player1?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
    player2?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
    winner?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
  }

  export type matchesOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete1_registration_id?: SortOrderInput | SortOrder
    athlete2_registration_id?: SortOrderInput | SortOrder
    winner_id?: SortOrderInput | SortOrder
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrderInput | SortOrder
    score2?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: categoriesOrderByWithRelationInput
    player1?: registrationsOrderByWithRelationInput
    player2?: registrationsOrderByWithRelationInput
    winner?: registrationsOrderByWithRelationInput
  }

  export type matchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    category_id?: UuidFilter<"matches"> | string
    athlete1_registration_id?: UuidNullableFilter<"matches"> | string | null
    athlete2_registration_id?: UuidNullableFilter<"matches"> | string | null
    winner_id?: UuidNullableFilter<"matches"> | string | null
    round?: IntFilter<"matches"> | number
    match_order?: IntFilter<"matches"> | number
    score1?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    score2?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFilter<"matches"> | $Enums.match_status_enum
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    player1?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
    player2?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
    winner?: XOR<RegistrationsNullableScalarRelationFilter, registrationsWhereInput> | null
  }, "id">

  export type matchesOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete1_registration_id?: SortOrderInput | SortOrder
    athlete2_registration_id?: SortOrderInput | SortOrder
    winner_id?: SortOrderInput | SortOrder
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrderInput | SortOrder
    score2?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: matchesCountOrderByAggregateInput
    _avg?: matchesAvgOrderByAggregateInput
    _max?: matchesMaxOrderByAggregateInput
    _min?: matchesMinOrderByAggregateInput
    _sum?: matchesSumOrderByAggregateInput
  }

  export type matchesScalarWhereWithAggregatesInput = {
    AND?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    OR?: matchesScalarWhereWithAggregatesInput[]
    NOT?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"matches"> | string
    category_id?: UuidWithAggregatesFilter<"matches"> | string
    athlete1_registration_id?: UuidNullableWithAggregatesFilter<"matches"> | string | null
    athlete2_registration_id?: UuidNullableWithAggregatesFilter<"matches"> | string | null
    winner_id?: UuidNullableWithAggregatesFilter<"matches"> | string | null
    round?: IntWithAggregatesFilter<"matches"> | number
    match_order?: IntWithAggregatesFilter<"matches"> | number
    score1?: DecimalNullableWithAggregatesFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    score2?: DecimalNullableWithAggregatesFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumWithAggregatesFilter<"matches"> | $Enums.match_status_enum
  }

  export type profilesCreateInput = {
    id: string
    role?: $Enums.user_role
    full_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesUncheckedCreateInput = {
    id: string
    role?: $Enums.user_role
    full_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesCreateManyInput = {
    id: string
    role?: $Enums.user_role
    full_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unitsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    athletes?: athletesCreateNestedManyWithoutUnitInput
  }

  export type unitsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    athletes?: athletesUncheckedCreateNestedManyWithoutUnitInput
  }

  export type unitsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: athletesUpdateManyWithoutUnitNestedInput
  }

  export type unitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: athletesUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type unitsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unitsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsCreateNestedManyWithoutCategoryInput
    matches?: matchesCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsUncheckedCreateNestedManyWithoutCategoryInput
    matches?: matchesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUpdateManyWithoutCategoryNestedInput
    matches?: matchesUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUncheckedUpdateManyWithoutCategoryNestedInput
    matches?: matchesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type athletesCreateInput = {
    id?: string
    full_name: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    unit: unitsCreateNestedOneWithoutAthletesInput
    registrations?: registrationsCreateNestedManyWithoutAthleteInput
  }

  export type athletesUncheckedCreateInput = {
    id?: string
    full_name: string
    unit_id: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athletesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: unitsUpdateOneRequiredWithoutAthletesNestedInput
    registrations?: registrationsUpdateManyWithoutAthleteNestedInput
  }

  export type athletesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type athletesCreateManyInput = {
    id?: string
    full_name: string
    unit_id: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type athletesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type athletesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrationsCreateInput = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    category: categoriesCreateNestedOneWithoutRegistrationsInput
    athlete: athletesCreateNestedOneWithoutRegistrationsInput
    matches_as_player1?: matchesCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUncheckedCreateInput = {
    id?: string
    category_id: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player1?: matchesUncheckedCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesUncheckedCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutRegistrationsNestedInput
    athlete?: athletesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player1?: matchesUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player1?: matchesUncheckedUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUncheckedUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsCreateManyInput = {
    id?: string
    category_id: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
  }

  export type registrationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesCreateInput = {
    id?: string
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
    category: categoriesCreateNestedOneWithoutMatchesInput
    player1?: registrationsCreateNestedOneWithoutMatches_as_player1Input
    player2?: registrationsCreateNestedOneWithoutMatches_as_player2Input
    winner?: registrationsCreateNestedOneWithoutMatches_wonInput
  }

  export type matchesUncheckedCreateInput = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
    category?: categoriesUpdateOneRequiredWithoutMatchesNestedInput
    player1?: registrationsUpdateOneWithoutMatches_as_player1NestedInput
    player2?: registrationsUpdateOneWithoutMatches_as_player2NestedInput
    winner?: registrationsUpdateOneWithoutMatches_wonNestedInput
  }

  export type matchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesCreateManyInput = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    full_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    full_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    full_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
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

  export type AthletesListRelationFilter = {
    every?: athletesWhereInput
    some?: athletesWhereInput
    none?: athletesWhereInput
  }

  export type athletesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unitsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unitsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unitsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type Enumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type Enumtype_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.type_enum | Enumtype_enumFieldRefInput<$PrismaModel>
    in?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_enumFilter<$PrismaModel> | $Enums.type_enum
  }

  export type Enumbracket_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.bracket_type_enum | Enumbracket_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumbracket_type_enumFilter<$PrismaModel> | $Enums.bracket_type_enum
  }

  export type Enumtotal_athletes_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.total_athletes_enum | Enumtotal_athletes_enumFieldRefInput<$PrismaModel>
    in?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtotal_athletes_enumFilter<$PrismaModel> | $Enums.total_athletes_enum
  }

  export type Enumcategory_status_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.category_status_enum | Enumcategory_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_status_enumFilter<$PrismaModel> | $Enums.category_status_enum
  }

  export type RegistrationsListRelationFilter = {
    every?: registrationsWhereInput
    some?: registrationsWhereInput
    none?: registrationsWhereInput
  }

  export type MatchesListRelationFilter = {
    every?: matchesWhereInput
    some?: matchesWhereInput
    none?: matchesWhereInput
  }

  export type registrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    group_age?: SortOrder
    bracket_type?: SortOrder
    total_athletes?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    group_age?: SortOrder
    bracket_type?: SortOrder
    total_athletes?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    group_age?: SortOrder
    bracket_type?: SortOrder
    total_athletes?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type Enumtype_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_enum | Enumtype_enumFieldRefInput<$PrismaModel>
    in?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_enumWithAggregatesFilter<$PrismaModel> | $Enums.type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_enumFilter<$PrismaModel>
    _max?: NestedEnumtype_enumFilter<$PrismaModel>
  }

  export type Enumbracket_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bracket_type_enum | Enumbracket_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumbracket_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.bracket_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbracket_type_enumFilter<$PrismaModel>
    _max?: NestedEnumbracket_type_enumFilter<$PrismaModel>
  }

  export type Enumtotal_athletes_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.total_athletes_enum | Enumtotal_athletes_enumFieldRefInput<$PrismaModel>
    in?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtotal_athletes_enumWithAggregatesFilter<$PrismaModel> | $Enums.total_athletes_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtotal_athletes_enumFilter<$PrismaModel>
    _max?: NestedEnumtotal_athletes_enumFilter<$PrismaModel>
  }

  export type Enumcategory_status_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category_status_enum | Enumcategory_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_status_enumWithAggregatesFilter<$PrismaModel> | $Enums.category_status_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategory_status_enumFilter<$PrismaModel>
    _max?: NestedEnumcategory_status_enumFilter<$PrismaModel>
  }

  export type UnitsScalarRelationFilter = {
    is?: unitsWhereInput
    isNot?: unitsWhereInput
  }

  export type athletesCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    unit_id?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type athletesMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    unit_id?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type athletesMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    unit_id?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type AthletesScalarRelationFilter = {
    is?: athletesWhereInput
    isNot?: athletesWhereInput
  }

  export type registrationsCategory_idAthlete_idCompoundUniqueInput = {
    category_id: string
    athlete_id: string
  }

  export type registrationsCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete_id?: SortOrder
    final_score?: SortOrder
    final_rank?: SortOrder
    registration_date?: SortOrder
  }

  export type registrationsAvgOrderByAggregateInput = {
    final_score?: SortOrder
    final_rank?: SortOrder
  }

  export type registrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete_id?: SortOrder
    final_score?: SortOrder
    final_rank?: SortOrder
    registration_date?: SortOrder
  }

  export type registrationsMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete_id?: SortOrder
    final_score?: SortOrder
    final_rank?: SortOrder
    registration_date?: SortOrder
  }

  export type registrationsSumOrderByAggregateInput = {
    final_score?: SortOrder
    final_rank?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enummatch_status_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status_enum | Enummatch_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnummatch_status_enumFilter<$PrismaModel> | $Enums.match_status_enum
  }

  export type RegistrationsNullableScalarRelationFilter = {
    is?: registrationsWhereInput | null
    isNot?: registrationsWhereInput | null
  }

  export type matchesCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete1_registration_id?: SortOrder
    athlete2_registration_id?: SortOrder
    winner_id?: SortOrder
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrder
    score2?: SortOrder
    status?: SortOrder
  }

  export type matchesAvgOrderByAggregateInput = {
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrder
    score2?: SortOrder
  }

  export type matchesMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete1_registration_id?: SortOrder
    athlete2_registration_id?: SortOrder
    winner_id?: SortOrder
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrder
    score2?: SortOrder
    status?: SortOrder
  }

  export type matchesMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    athlete1_registration_id?: SortOrder
    athlete2_registration_id?: SortOrder
    winner_id?: SortOrder
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrder
    score2?: SortOrder
    status?: SortOrder
  }

  export type matchesSumOrderByAggregateInput = {
    round?: SortOrder
    match_order?: SortOrder
    score1?: SortOrder
    score2?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enummatch_status_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status_enum | Enummatch_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnummatch_status_enumWithAggregatesFilter<$PrismaModel> | $Enums.match_status_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_status_enumFilter<$PrismaModel>
    _max?: NestedEnummatch_status_enumFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type athletesCreateNestedManyWithoutUnitInput = {
    create?: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput> | athletesCreateWithoutUnitInput[] | athletesUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: athletesCreateOrConnectWithoutUnitInput | athletesCreateOrConnectWithoutUnitInput[]
    createMany?: athletesCreateManyUnitInputEnvelope
    connect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
  }

  export type athletesUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput> | athletesCreateWithoutUnitInput[] | athletesUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: athletesCreateOrConnectWithoutUnitInput | athletesCreateOrConnectWithoutUnitInput[]
    createMany?: athletesCreateManyUnitInputEnvelope
    connect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
  }

  export type athletesUpdateManyWithoutUnitNestedInput = {
    create?: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput> | athletesCreateWithoutUnitInput[] | athletesUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: athletesCreateOrConnectWithoutUnitInput | athletesCreateOrConnectWithoutUnitInput[]
    upsert?: athletesUpsertWithWhereUniqueWithoutUnitInput | athletesUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: athletesCreateManyUnitInputEnvelope
    set?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    disconnect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    delete?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    connect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    update?: athletesUpdateWithWhereUniqueWithoutUnitInput | athletesUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: athletesUpdateManyWithWhereWithoutUnitInput | athletesUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: athletesScalarWhereInput | athletesScalarWhereInput[]
  }

  export type athletesUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput> | athletesCreateWithoutUnitInput[] | athletesUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: athletesCreateOrConnectWithoutUnitInput | athletesCreateOrConnectWithoutUnitInput[]
    upsert?: athletesUpsertWithWhereUniqueWithoutUnitInput | athletesUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: athletesCreateManyUnitInputEnvelope
    set?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    disconnect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    delete?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    connect?: athletesWhereUniqueInput | athletesWhereUniqueInput[]
    update?: athletesUpdateWithWhereUniqueWithoutUnitInput | athletesUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: athletesUpdateManyWithWhereWithoutUnitInput | athletesUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: athletesScalarWhereInput | athletesScalarWhereInput[]
  }

  export type registrationsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput> | registrationsCreateWithoutCategoryInput[] | registrationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutCategoryInput | registrationsCreateOrConnectWithoutCategoryInput[]
    createMany?: registrationsCreateManyCategoryInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type matchesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput> | matchesCreateWithoutCategoryInput[] | matchesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutCategoryInput | matchesCreateOrConnectWithoutCategoryInput[]
    createMany?: matchesCreateManyCategoryInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type registrationsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput> | registrationsCreateWithoutCategoryInput[] | registrationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutCategoryInput | registrationsCreateOrConnectWithoutCategoryInput[]
    createMany?: registrationsCreateManyCategoryInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput> | matchesCreateWithoutCategoryInput[] | matchesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutCategoryInput | matchesCreateOrConnectWithoutCategoryInput[]
    createMany?: matchesCreateManyCategoryInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type Enumgender_enumFieldUpdateOperationsInput = {
    set?: $Enums.gender_enum
  }

  export type Enumtype_enumFieldUpdateOperationsInput = {
    set?: $Enums.type_enum
  }

  export type Enumbracket_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.bracket_type_enum
  }

  export type Enumtotal_athletes_enumFieldUpdateOperationsInput = {
    set?: $Enums.total_athletes_enum
  }

  export type Enumcategory_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.category_status_enum
  }

  export type registrationsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput> | registrationsCreateWithoutCategoryInput[] | registrationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutCategoryInput | registrationsCreateOrConnectWithoutCategoryInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutCategoryInput | registrationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: registrationsCreateManyCategoryInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutCategoryInput | registrationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutCategoryInput | registrationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type matchesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput> | matchesCreateWithoutCategoryInput[] | matchesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutCategoryInput | matchesCreateOrConnectWithoutCategoryInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutCategoryInput | matchesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: matchesCreateManyCategoryInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutCategoryInput | matchesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutCategoryInput | matchesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type registrationsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput> | registrationsCreateWithoutCategoryInput[] | registrationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutCategoryInput | registrationsCreateOrConnectWithoutCategoryInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutCategoryInput | registrationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: registrationsCreateManyCategoryInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutCategoryInput | registrationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutCategoryInput | registrationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput> | matchesCreateWithoutCategoryInput[] | matchesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutCategoryInput | matchesCreateOrConnectWithoutCategoryInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutCategoryInput | matchesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: matchesCreateManyCategoryInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutCategoryInput | matchesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutCategoryInput | matchesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type unitsCreateNestedOneWithoutAthletesInput = {
    create?: XOR<unitsCreateWithoutAthletesInput, unitsUncheckedCreateWithoutAthletesInput>
    connectOrCreate?: unitsCreateOrConnectWithoutAthletesInput
    connect?: unitsWhereUniqueInput
  }

  export type registrationsCreateNestedManyWithoutAthleteInput = {
    create?: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput> | registrationsCreateWithoutAthleteInput[] | registrationsUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAthleteInput | registrationsCreateOrConnectWithoutAthleteInput[]
    createMany?: registrationsCreateManyAthleteInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type registrationsUncheckedCreateNestedManyWithoutAthleteInput = {
    create?: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput> | registrationsCreateWithoutAthleteInput[] | registrationsUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAthleteInput | registrationsCreateOrConnectWithoutAthleteInput[]
    createMany?: registrationsCreateManyAthleteInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type unitsUpdateOneRequiredWithoutAthletesNestedInput = {
    create?: XOR<unitsCreateWithoutAthletesInput, unitsUncheckedCreateWithoutAthletesInput>
    connectOrCreate?: unitsCreateOrConnectWithoutAthletesInput
    upsert?: unitsUpsertWithoutAthletesInput
    connect?: unitsWhereUniqueInput
    update?: XOR<XOR<unitsUpdateToOneWithWhereWithoutAthletesInput, unitsUpdateWithoutAthletesInput>, unitsUncheckedUpdateWithoutAthletesInput>
  }

  export type registrationsUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput> | registrationsCreateWithoutAthleteInput[] | registrationsUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAthleteInput | registrationsCreateOrConnectWithoutAthleteInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutAthleteInput | registrationsUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: registrationsCreateManyAthleteInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutAthleteInput | registrationsUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutAthleteInput | registrationsUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type registrationsUncheckedUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput> | registrationsCreateWithoutAthleteInput[] | registrationsUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAthleteInput | registrationsCreateOrConnectWithoutAthleteInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutAthleteInput | registrationsUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: registrationsCreateManyAthleteInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutAthleteInput | registrationsUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutAthleteInput | registrationsUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<categoriesCreateWithoutRegistrationsInput, categoriesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutRegistrationsInput
    connect?: categoriesWhereUniqueInput
  }

  export type athletesCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<athletesCreateWithoutRegistrationsInput, athletesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: athletesCreateOrConnectWithoutRegistrationsInput
    connect?: athletesWhereUniqueInput
  }

  export type matchesCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input> | matchesCreateWithoutPlayer1Input[] | matchesUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer1Input | matchesCreateOrConnectWithoutPlayer1Input[]
    createMany?: matchesCreateManyPlayer1InputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input> | matchesCreateWithoutPlayer2Input[] | matchesUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer2Input | matchesCreateOrConnectWithoutPlayer2Input[]
    createMany?: matchesCreateManyPlayer2InputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesCreateNestedManyWithoutWinnerInput = {
    create?: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput> | matchesCreateWithoutWinnerInput[] | matchesUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutWinnerInput | matchesCreateOrConnectWithoutWinnerInput[]
    createMany?: matchesCreateManyWinnerInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input> | matchesCreateWithoutPlayer1Input[] | matchesUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer1Input | matchesCreateOrConnectWithoutPlayer1Input[]
    createMany?: matchesCreateManyPlayer1InputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input> | matchesCreateWithoutPlayer2Input[] | matchesUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer2Input | matchesCreateOrConnectWithoutPlayer2Input[]
    createMany?: matchesCreateManyPlayer2InputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type matchesUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput> | matchesCreateWithoutWinnerInput[] | matchesUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutWinnerInput | matchesCreateOrConnectWithoutWinnerInput[]
    createMany?: matchesCreateManyWinnerInputEnvelope
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriesUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<categoriesCreateWithoutRegistrationsInput, categoriesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutRegistrationsInput
    upsert?: categoriesUpsertWithoutRegistrationsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutRegistrationsInput, categoriesUpdateWithoutRegistrationsInput>, categoriesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type athletesUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<athletesCreateWithoutRegistrationsInput, athletesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: athletesCreateOrConnectWithoutRegistrationsInput
    upsert?: athletesUpsertWithoutRegistrationsInput
    connect?: athletesWhereUniqueInput
    update?: XOR<XOR<athletesUpdateToOneWithWhereWithoutRegistrationsInput, athletesUpdateWithoutRegistrationsInput>, athletesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type matchesUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input> | matchesCreateWithoutPlayer1Input[] | matchesUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer1Input | matchesCreateOrConnectWithoutPlayer1Input[]
    upsert?: matchesUpsertWithWhereUniqueWithoutPlayer1Input | matchesUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: matchesCreateManyPlayer1InputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutPlayer1Input | matchesUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: matchesUpdateManyWithWhereWithoutPlayer1Input | matchesUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input> | matchesCreateWithoutPlayer2Input[] | matchesUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer2Input | matchesCreateOrConnectWithoutPlayer2Input[]
    upsert?: matchesUpsertWithWhereUniqueWithoutPlayer2Input | matchesUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: matchesCreateManyPlayer2InputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutPlayer2Input | matchesUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: matchesUpdateManyWithWhereWithoutPlayer2Input | matchesUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput> | matchesCreateWithoutWinnerInput[] | matchesUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutWinnerInput | matchesCreateOrConnectWithoutWinnerInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutWinnerInput | matchesUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: matchesCreateManyWinnerInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutWinnerInput | matchesUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutWinnerInput | matchesUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input> | matchesCreateWithoutPlayer1Input[] | matchesUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer1Input | matchesCreateOrConnectWithoutPlayer1Input[]
    upsert?: matchesUpsertWithWhereUniqueWithoutPlayer1Input | matchesUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: matchesCreateManyPlayer1InputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutPlayer1Input | matchesUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: matchesUpdateManyWithWhereWithoutPlayer1Input | matchesUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input> | matchesCreateWithoutPlayer2Input[] | matchesUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: matchesCreateOrConnectWithoutPlayer2Input | matchesCreateOrConnectWithoutPlayer2Input[]
    upsert?: matchesUpsertWithWhereUniqueWithoutPlayer2Input | matchesUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: matchesCreateManyPlayer2InputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutPlayer2Input | matchesUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: matchesUpdateManyWithWhereWithoutPlayer2Input | matchesUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type matchesUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput> | matchesCreateWithoutWinnerInput[] | matchesUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: matchesCreateOrConnectWithoutWinnerInput | matchesCreateOrConnectWithoutWinnerInput[]
    upsert?: matchesUpsertWithWhereUniqueWithoutWinnerInput | matchesUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: matchesCreateManyWinnerInputEnvelope
    set?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    disconnect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    delete?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    connect?: matchesWhereUniqueInput | matchesWhereUniqueInput[]
    update?: matchesUpdateWithWhereUniqueWithoutWinnerInput | matchesUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: matchesUpdateManyWithWhereWithoutWinnerInput | matchesUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: matchesScalarWhereInput | matchesScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutMatchesInput = {
    create?: XOR<categoriesCreateWithoutMatchesInput, categoriesUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutMatchesInput
    connect?: categoriesWhereUniqueInput
  }

  export type registrationsCreateNestedOneWithoutMatches_as_player1Input = {
    create?: XOR<registrationsCreateWithoutMatches_as_player1Input, registrationsUncheckedCreateWithoutMatches_as_player1Input>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_as_player1Input
    connect?: registrationsWhereUniqueInput
  }

  export type registrationsCreateNestedOneWithoutMatches_as_player2Input = {
    create?: XOR<registrationsCreateWithoutMatches_as_player2Input, registrationsUncheckedCreateWithoutMatches_as_player2Input>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_as_player2Input
    connect?: registrationsWhereUniqueInput
  }

  export type registrationsCreateNestedOneWithoutMatches_wonInput = {
    create?: XOR<registrationsCreateWithoutMatches_wonInput, registrationsUncheckedCreateWithoutMatches_wonInput>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_wonInput
    connect?: registrationsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enummatch_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.match_status_enum
  }

  export type categoriesUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<categoriesCreateWithoutMatchesInput, categoriesUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutMatchesInput
    upsert?: categoriesUpsertWithoutMatchesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutMatchesInput, categoriesUpdateWithoutMatchesInput>, categoriesUncheckedUpdateWithoutMatchesInput>
  }

  export type registrationsUpdateOneWithoutMatches_as_player1NestedInput = {
    create?: XOR<registrationsCreateWithoutMatches_as_player1Input, registrationsUncheckedCreateWithoutMatches_as_player1Input>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_as_player1Input
    upsert?: registrationsUpsertWithoutMatches_as_player1Input
    disconnect?: registrationsWhereInput | boolean
    delete?: registrationsWhereInput | boolean
    connect?: registrationsWhereUniqueInput
    update?: XOR<XOR<registrationsUpdateToOneWithWhereWithoutMatches_as_player1Input, registrationsUpdateWithoutMatches_as_player1Input>, registrationsUncheckedUpdateWithoutMatches_as_player1Input>
  }

  export type registrationsUpdateOneWithoutMatches_as_player2NestedInput = {
    create?: XOR<registrationsCreateWithoutMatches_as_player2Input, registrationsUncheckedCreateWithoutMatches_as_player2Input>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_as_player2Input
    upsert?: registrationsUpsertWithoutMatches_as_player2Input
    disconnect?: registrationsWhereInput | boolean
    delete?: registrationsWhereInput | boolean
    connect?: registrationsWhereUniqueInput
    update?: XOR<XOR<registrationsUpdateToOneWithWhereWithoutMatches_as_player2Input, registrationsUpdateWithoutMatches_as_player2Input>, registrationsUncheckedUpdateWithoutMatches_as_player2Input>
  }

  export type registrationsUpdateOneWithoutMatches_wonNestedInput = {
    create?: XOR<registrationsCreateWithoutMatches_wonInput, registrationsUncheckedCreateWithoutMatches_wonInput>
    connectOrCreate?: registrationsCreateOrConnectWithoutMatches_wonInput
    upsert?: registrationsUpsertWithoutMatches_wonInput
    disconnect?: registrationsWhereInput | boolean
    delete?: registrationsWhereInput | boolean
    connect?: registrationsWhereUniqueInput
    update?: XOR<XOR<registrationsUpdateToOneWithWhereWithoutMatches_wonInput, registrationsUpdateWithoutMatches_wonInput>, registrationsUncheckedUpdateWithoutMatches_wonInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
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

  export type NestedEnumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type NestedEnumtype_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.type_enum | Enumtype_enumFieldRefInput<$PrismaModel>
    in?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_enumFilter<$PrismaModel> | $Enums.type_enum
  }

  export type NestedEnumbracket_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.bracket_type_enum | Enumbracket_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumbracket_type_enumFilter<$PrismaModel> | $Enums.bracket_type_enum
  }

  export type NestedEnumtotal_athletes_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.total_athletes_enum | Enumtotal_athletes_enumFieldRefInput<$PrismaModel>
    in?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtotal_athletes_enumFilter<$PrismaModel> | $Enums.total_athletes_enum
  }

  export type NestedEnumcategory_status_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.category_status_enum | Enumcategory_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_status_enumFilter<$PrismaModel> | $Enums.category_status_enum
  }

  export type NestedEnumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type NestedEnumtype_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type_enum | Enumtype_enumFieldRefInput<$PrismaModel>
    in?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.type_enum[] | ListEnumtype_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtype_enumWithAggregatesFilter<$PrismaModel> | $Enums.type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtype_enumFilter<$PrismaModel>
    _max?: NestedEnumtype_enumFilter<$PrismaModel>
  }

  export type NestedEnumbracket_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bracket_type_enum | Enumbracket_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.bracket_type_enum[] | ListEnumbracket_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumbracket_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.bracket_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbracket_type_enumFilter<$PrismaModel>
    _max?: NestedEnumbracket_type_enumFilter<$PrismaModel>
  }

  export type NestedEnumtotal_athletes_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.total_athletes_enum | Enumtotal_athletes_enumFieldRefInput<$PrismaModel>
    in?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.total_athletes_enum[] | ListEnumtotal_athletes_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtotal_athletes_enumWithAggregatesFilter<$PrismaModel> | $Enums.total_athletes_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtotal_athletes_enumFilter<$PrismaModel>
    _max?: NestedEnumtotal_athletes_enumFilter<$PrismaModel>
  }

  export type NestedEnumcategory_status_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category_status_enum | Enumcategory_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_status_enum[] | ListEnumcategory_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_status_enumWithAggregatesFilter<$PrismaModel> | $Enums.category_status_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategory_status_enumFilter<$PrismaModel>
    _max?: NestedEnumcategory_status_enumFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnummatch_status_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status_enum | Enummatch_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnummatch_status_enumFilter<$PrismaModel> | $Enums.match_status_enum
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnummatch_status_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status_enum | Enummatch_status_enumFieldRefInput<$PrismaModel>
    in?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.match_status_enum[] | ListEnummatch_status_enumFieldRefInput<$PrismaModel>
    not?: NestedEnummatch_status_enumWithAggregatesFilter<$PrismaModel> | $Enums.match_status_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_status_enumFilter<$PrismaModel>
    _max?: NestedEnummatch_status_enumFilter<$PrismaModel>
  }

  export type athletesCreateWithoutUnitInput = {
    id?: string
    full_name: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsCreateNestedManyWithoutAthleteInput
  }

  export type athletesUncheckedCreateWithoutUnitInput = {
    id?: string
    full_name: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athletesCreateOrConnectWithoutUnitInput = {
    where: athletesWhereUniqueInput
    create: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput>
  }

  export type athletesCreateManyUnitInputEnvelope = {
    data: athletesCreateManyUnitInput | athletesCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type athletesUpsertWithWhereUniqueWithoutUnitInput = {
    where: athletesWhereUniqueInput
    update: XOR<athletesUpdateWithoutUnitInput, athletesUncheckedUpdateWithoutUnitInput>
    create: XOR<athletesCreateWithoutUnitInput, athletesUncheckedCreateWithoutUnitInput>
  }

  export type athletesUpdateWithWhereUniqueWithoutUnitInput = {
    where: athletesWhereUniqueInput
    data: XOR<athletesUpdateWithoutUnitInput, athletesUncheckedUpdateWithoutUnitInput>
  }

  export type athletesUpdateManyWithWhereWithoutUnitInput = {
    where: athletesScalarWhereInput
    data: XOR<athletesUpdateManyMutationInput, athletesUncheckedUpdateManyWithoutUnitInput>
  }

  export type athletesScalarWhereInput = {
    AND?: athletesScalarWhereInput | athletesScalarWhereInput[]
    OR?: athletesScalarWhereInput[]
    NOT?: athletesScalarWhereInput | athletesScalarWhereInput[]
    id?: UuidFilter<"athletes"> | string
    full_name?: StringFilter<"athletes"> | string
    unit_id?: UuidFilter<"athletes"> | string
    gender?: Enumgender_enumFilter<"athletes"> | $Enums.gender_enum
    birthday?: DateTimeFilter<"athletes"> | Date | string
    created_at?: DateTimeFilter<"athletes"> | Date | string
    updated_at?: DateTimeFilter<"athletes"> | Date | string
  }

  export type registrationsCreateWithoutCategoryInput = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    athlete: athletesCreateNestedOneWithoutRegistrationsInput
    matches_as_player1?: matchesCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUncheckedCreateWithoutCategoryInput = {
    id?: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player1?: matchesUncheckedCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesUncheckedCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type registrationsCreateOrConnectWithoutCategoryInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput>
  }

  export type registrationsCreateManyCategoryInputEnvelope = {
    data: registrationsCreateManyCategoryInput | registrationsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type matchesCreateWithoutCategoryInput = {
    id?: string
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
    player1?: registrationsCreateNestedOneWithoutMatches_as_player1Input
    player2?: registrationsCreateNestedOneWithoutMatches_as_player2Input
    winner?: registrationsCreateNestedOneWithoutMatches_wonInput
  }

  export type matchesUncheckedCreateWithoutCategoryInput = {
    id?: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateOrConnectWithoutCategoryInput = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput>
  }

  export type matchesCreateManyCategoryInputEnvelope = {
    data: matchesCreateManyCategoryInput | matchesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type registrationsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: registrationsWhereUniqueInput
    update: XOR<registrationsUpdateWithoutCategoryInput, registrationsUncheckedUpdateWithoutCategoryInput>
    create: XOR<registrationsCreateWithoutCategoryInput, registrationsUncheckedCreateWithoutCategoryInput>
  }

  export type registrationsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: registrationsWhereUniqueInput
    data: XOR<registrationsUpdateWithoutCategoryInput, registrationsUncheckedUpdateWithoutCategoryInput>
  }

  export type registrationsUpdateManyWithWhereWithoutCategoryInput = {
    where: registrationsScalarWhereInput
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type registrationsScalarWhereInput = {
    AND?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
    OR?: registrationsScalarWhereInput[]
    NOT?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
    id?: UuidFilter<"registrations"> | string
    category_id?: UuidFilter<"registrations"> | string
    athlete_id?: UuidFilter<"registrations"> | string
    final_score?: DecimalNullableFilter<"registrations"> | Decimal | DecimalJsLike | number | string | null
    final_rank?: IntNullableFilter<"registrations"> | number | null
    registration_date?: DateTimeFilter<"registrations"> | Date | string
  }

  export type matchesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutCategoryInput, matchesUncheckedUpdateWithoutCategoryInput>
    create: XOR<matchesCreateWithoutCategoryInput, matchesUncheckedCreateWithoutCategoryInput>
  }

  export type matchesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutCategoryInput, matchesUncheckedUpdateWithoutCategoryInput>
  }

  export type matchesUpdateManyWithWhereWithoutCategoryInput = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type matchesScalarWhereInput = {
    AND?: matchesScalarWhereInput | matchesScalarWhereInput[]
    OR?: matchesScalarWhereInput[]
    NOT?: matchesScalarWhereInput | matchesScalarWhereInput[]
    id?: UuidFilter<"matches"> | string
    category_id?: UuidFilter<"matches"> | string
    athlete1_registration_id?: UuidNullableFilter<"matches"> | string | null
    athlete2_registration_id?: UuidNullableFilter<"matches"> | string | null
    winner_id?: UuidNullableFilter<"matches"> | string | null
    round?: IntFilter<"matches"> | number
    match_order?: IntFilter<"matches"> | number
    score1?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    score2?: DecimalNullableFilter<"matches"> | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFilter<"matches"> | $Enums.match_status_enum
  }

  export type unitsCreateWithoutAthletesInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unitsUncheckedCreateWithoutAthletesInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unitsCreateOrConnectWithoutAthletesInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutAthletesInput, unitsUncheckedCreateWithoutAthletesInput>
  }

  export type registrationsCreateWithoutAthleteInput = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    category: categoriesCreateNestedOneWithoutRegistrationsInput
    matches_as_player1?: matchesCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUncheckedCreateWithoutAthleteInput = {
    id?: string
    category_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player1?: matchesUncheckedCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesUncheckedCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type registrationsCreateOrConnectWithoutAthleteInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput>
  }

  export type registrationsCreateManyAthleteInputEnvelope = {
    data: registrationsCreateManyAthleteInput | registrationsCreateManyAthleteInput[]
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithoutAthletesInput = {
    update: XOR<unitsUpdateWithoutAthletesInput, unitsUncheckedUpdateWithoutAthletesInput>
    create: XOR<unitsCreateWithoutAthletesInput, unitsUncheckedCreateWithoutAthletesInput>
    where?: unitsWhereInput
  }

  export type unitsUpdateToOneWithWhereWithoutAthletesInput = {
    where?: unitsWhereInput
    data: XOR<unitsUpdateWithoutAthletesInput, unitsUncheckedUpdateWithoutAthletesInput>
  }

  export type unitsUpdateWithoutAthletesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unitsUncheckedUpdateWithoutAthletesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrationsUpsertWithWhereUniqueWithoutAthleteInput = {
    where: registrationsWhereUniqueInput
    update: XOR<registrationsUpdateWithoutAthleteInput, registrationsUncheckedUpdateWithoutAthleteInput>
    create: XOR<registrationsCreateWithoutAthleteInput, registrationsUncheckedCreateWithoutAthleteInput>
  }

  export type registrationsUpdateWithWhereUniqueWithoutAthleteInput = {
    where: registrationsWhereUniqueInput
    data: XOR<registrationsUpdateWithoutAthleteInput, registrationsUncheckedUpdateWithoutAthleteInput>
  }

  export type registrationsUpdateManyWithWhereWithoutAthleteInput = {
    where: registrationsScalarWhereInput
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyWithoutAthleteInput>
  }

  export type categoriesCreateWithoutRegistrationsInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    matches?: matchesCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    matches?: matchesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutRegistrationsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutRegistrationsInput, categoriesUncheckedCreateWithoutRegistrationsInput>
  }

  export type athletesCreateWithoutRegistrationsInput = {
    id?: string
    full_name: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    unit: unitsCreateNestedOneWithoutAthletesInput
  }

  export type athletesUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    full_name: string
    unit_id: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type athletesCreateOrConnectWithoutRegistrationsInput = {
    where: athletesWhereUniqueInput
    create: XOR<athletesCreateWithoutRegistrationsInput, athletesUncheckedCreateWithoutRegistrationsInput>
  }

  export type matchesCreateWithoutPlayer1Input = {
    id?: string
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
    category: categoriesCreateNestedOneWithoutMatchesInput
    player2?: registrationsCreateNestedOneWithoutMatches_as_player2Input
    winner?: registrationsCreateNestedOneWithoutMatches_wonInput
  }

  export type matchesUncheckedCreateWithoutPlayer1Input = {
    id?: string
    category_id: string
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateOrConnectWithoutPlayer1Input = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input>
  }

  export type matchesCreateManyPlayer1InputEnvelope = {
    data: matchesCreateManyPlayer1Input | matchesCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type matchesCreateWithoutPlayer2Input = {
    id?: string
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
    category: categoriesCreateNestedOneWithoutMatchesInput
    player1?: registrationsCreateNestedOneWithoutMatches_as_player1Input
    winner?: registrationsCreateNestedOneWithoutMatches_wonInput
  }

  export type matchesUncheckedCreateWithoutPlayer2Input = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateOrConnectWithoutPlayer2Input = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input>
  }

  export type matchesCreateManyPlayer2InputEnvelope = {
    data: matchesCreateManyPlayer2Input | matchesCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type matchesCreateWithoutWinnerInput = {
    id?: string
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
    category: categoriesCreateNestedOneWithoutMatchesInput
    player1?: registrationsCreateNestedOneWithoutMatches_as_player1Input
    player2?: registrationsCreateNestedOneWithoutMatches_as_player2Input
  }

  export type matchesUncheckedCreateWithoutWinnerInput = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateOrConnectWithoutWinnerInput = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput>
  }

  export type matchesCreateManyWinnerInputEnvelope = {
    data: matchesCreateManyWinnerInput | matchesCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutRegistrationsInput = {
    update: XOR<categoriesUpdateWithoutRegistrationsInput, categoriesUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<categoriesCreateWithoutRegistrationsInput, categoriesUncheckedCreateWithoutRegistrationsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutRegistrationsInput, categoriesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type categoriesUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: matchesUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: matchesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type athletesUpsertWithoutRegistrationsInput = {
    update: XOR<athletesUpdateWithoutRegistrationsInput, athletesUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<athletesCreateWithoutRegistrationsInput, athletesUncheckedCreateWithoutRegistrationsInput>
    where?: athletesWhereInput
  }

  export type athletesUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: athletesWhereInput
    data: XOR<athletesUpdateWithoutRegistrationsInput, athletesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type athletesUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: unitsUpdateOneRequiredWithoutAthletesNestedInput
  }

  export type athletesUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutPlayer1Input, matchesUncheckedUpdateWithoutPlayer1Input>
    create: XOR<matchesCreateWithoutPlayer1Input, matchesUncheckedCreateWithoutPlayer1Input>
  }

  export type matchesUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutPlayer1Input, matchesUncheckedUpdateWithoutPlayer1Input>
  }

  export type matchesUpdateManyWithWhereWithoutPlayer1Input = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type matchesUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutPlayer2Input, matchesUncheckedUpdateWithoutPlayer2Input>
    create: XOR<matchesCreateWithoutPlayer2Input, matchesUncheckedCreateWithoutPlayer2Input>
  }

  export type matchesUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutPlayer2Input, matchesUncheckedUpdateWithoutPlayer2Input>
  }

  export type matchesUpdateManyWithWhereWithoutPlayer2Input = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type matchesUpsertWithWhereUniqueWithoutWinnerInput = {
    where: matchesWhereUniqueInput
    update: XOR<matchesUpdateWithoutWinnerInput, matchesUncheckedUpdateWithoutWinnerInput>
    create: XOR<matchesCreateWithoutWinnerInput, matchesUncheckedCreateWithoutWinnerInput>
  }

  export type matchesUpdateWithWhereUniqueWithoutWinnerInput = {
    where: matchesWhereUniqueInput
    data: XOR<matchesUpdateWithoutWinnerInput, matchesUncheckedUpdateWithoutWinnerInput>
  }

  export type matchesUpdateManyWithWhereWithoutWinnerInput = {
    where: matchesScalarWhereInput
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyWithoutWinnerInput>
  }

  export type categoriesCreateWithoutMatchesInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateWithoutMatchesInput = {
    id?: string
    category_name: string
    gender: $Enums.gender_enum
    type: $Enums.type_enum
    group_age: string
    bracket_type: $Enums.bracket_type_enum
    total_athletes: $Enums.total_athletes_enum
    status?: $Enums.category_status_enum
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrations?: registrationsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesCreateOrConnectWithoutMatchesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutMatchesInput, categoriesUncheckedCreateWithoutMatchesInput>
  }

  export type registrationsCreateWithoutMatches_as_player1Input = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    category: categoriesCreateNestedOneWithoutRegistrationsInput
    athlete: athletesCreateNestedOneWithoutRegistrationsInput
    matches_as_player2?: matchesCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUncheckedCreateWithoutMatches_as_player1Input = {
    id?: string
    category_id: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player2?: matchesUncheckedCreateNestedManyWithoutPlayer2Input
    matches_won?: matchesUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type registrationsCreateOrConnectWithoutMatches_as_player1Input = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutMatches_as_player1Input, registrationsUncheckedCreateWithoutMatches_as_player1Input>
  }

  export type registrationsCreateWithoutMatches_as_player2Input = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    category: categoriesCreateNestedOneWithoutRegistrationsInput
    athlete: athletesCreateNestedOneWithoutRegistrationsInput
    matches_as_player1?: matchesCreateNestedManyWithoutPlayer1Input
    matches_won?: matchesCreateNestedManyWithoutWinnerInput
  }

  export type registrationsUncheckedCreateWithoutMatches_as_player2Input = {
    id?: string
    category_id: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player1?: matchesUncheckedCreateNestedManyWithoutPlayer1Input
    matches_won?: matchesUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type registrationsCreateOrConnectWithoutMatches_as_player2Input = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutMatches_as_player2Input, registrationsUncheckedCreateWithoutMatches_as_player2Input>
  }

  export type registrationsCreateWithoutMatches_wonInput = {
    id?: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    category: categoriesCreateNestedOneWithoutRegistrationsInput
    athlete: athletesCreateNestedOneWithoutRegistrationsInput
    matches_as_player1?: matchesCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesCreateNestedManyWithoutPlayer2Input
  }

  export type registrationsUncheckedCreateWithoutMatches_wonInput = {
    id?: string
    category_id: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
    matches_as_player1?: matchesUncheckedCreateNestedManyWithoutPlayer1Input
    matches_as_player2?: matchesUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type registrationsCreateOrConnectWithoutMatches_wonInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutMatches_wonInput, registrationsUncheckedCreateWithoutMatches_wonInput>
  }

  export type categoriesUpsertWithoutMatchesInput = {
    update: XOR<categoriesUpdateWithoutMatchesInput, categoriesUncheckedUpdateWithoutMatchesInput>
    create: XOR<categoriesCreateWithoutMatchesInput, categoriesUncheckedCreateWithoutMatchesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutMatchesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutMatchesInput, categoriesUncheckedUpdateWithoutMatchesInput>
  }

  export type categoriesUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    type?: Enumtype_enumFieldUpdateOperationsInput | $Enums.type_enum
    group_age?: StringFieldUpdateOperationsInput | string
    bracket_type?: Enumbracket_type_enumFieldUpdateOperationsInput | $Enums.bracket_type_enum
    total_athletes?: Enumtotal_athletes_enumFieldUpdateOperationsInput | $Enums.total_athletes_enum
    status?: Enumcategory_status_enumFieldUpdateOperationsInput | $Enums.category_status_enum
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type registrationsUpsertWithoutMatches_as_player1Input = {
    update: XOR<registrationsUpdateWithoutMatches_as_player1Input, registrationsUncheckedUpdateWithoutMatches_as_player1Input>
    create: XOR<registrationsCreateWithoutMatches_as_player1Input, registrationsUncheckedCreateWithoutMatches_as_player1Input>
    where?: registrationsWhereInput
  }

  export type registrationsUpdateToOneWithWhereWithoutMatches_as_player1Input = {
    where?: registrationsWhereInput
    data: XOR<registrationsUpdateWithoutMatches_as_player1Input, registrationsUncheckedUpdateWithoutMatches_as_player1Input>
  }

  export type registrationsUpdateWithoutMatches_as_player1Input = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutRegistrationsNestedInput
    athlete?: athletesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player2?: matchesUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateWithoutMatches_as_player1Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player2?: matchesUncheckedUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUpsertWithoutMatches_as_player2Input = {
    update: XOR<registrationsUpdateWithoutMatches_as_player2Input, registrationsUncheckedUpdateWithoutMatches_as_player2Input>
    create: XOR<registrationsCreateWithoutMatches_as_player2Input, registrationsUncheckedCreateWithoutMatches_as_player2Input>
    where?: registrationsWhereInput
  }

  export type registrationsUpdateToOneWithWhereWithoutMatches_as_player2Input = {
    where?: registrationsWhereInput
    data: XOR<registrationsUpdateWithoutMatches_as_player2Input, registrationsUncheckedUpdateWithoutMatches_as_player2Input>
  }

  export type registrationsUpdateWithoutMatches_as_player2Input = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutRegistrationsNestedInput
    athlete?: athletesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player1?: matchesUpdateManyWithoutPlayer1NestedInput
    matches_won?: matchesUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateWithoutMatches_as_player2Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player1?: matchesUncheckedUpdateManyWithoutPlayer1NestedInput
    matches_won?: matchesUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUpsertWithoutMatches_wonInput = {
    update: XOR<registrationsUpdateWithoutMatches_wonInput, registrationsUncheckedUpdateWithoutMatches_wonInput>
    create: XOR<registrationsCreateWithoutMatches_wonInput, registrationsUncheckedCreateWithoutMatches_wonInput>
    where?: registrationsWhereInput
  }

  export type registrationsUpdateToOneWithWhereWithoutMatches_wonInput = {
    where?: registrationsWhereInput
    data: XOR<registrationsUpdateWithoutMatches_wonInput, registrationsUncheckedUpdateWithoutMatches_wonInput>
  }

  export type registrationsUpdateWithoutMatches_wonInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutRegistrationsNestedInput
    athlete?: athletesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player1?: matchesUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUpdateManyWithoutPlayer2NestedInput
  }

  export type registrationsUncheckedUpdateWithoutMatches_wonInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player1?: matchesUncheckedUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type athletesCreateManyUnitInput = {
    id?: string
    full_name: string
    gender: $Enums.gender_enum
    birthday: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type athletesUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUpdateManyWithoutAthleteNestedInput
  }

  export type athletesUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: registrationsUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type athletesUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrationsCreateManyCategoryInput = {
    id?: string
    athlete_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
  }

  export type matchesCreateManyCategoryInput = {
    id?: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type registrationsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    athlete?: athletesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player1?: matchesUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player1?: matchesUncheckedUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUncheckedUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
    player1?: registrationsUpdateOneWithoutMatches_as_player1NestedInput
    player2?: registrationsUpdateOneWithoutMatches_as_player2NestedInput
    winner?: registrationsUpdateOneWithoutMatches_wonNestedInput
  }

  export type matchesUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type registrationsCreateManyAthleteInput = {
    id?: string
    category_id: string
    final_score?: Decimal | DecimalJsLike | number | string | null
    final_rank?: number | null
    registration_date?: Date | string
  }

  export type registrationsUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutRegistrationsNestedInput
    matches_as_player1?: matchesUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    matches_as_player1?: matchesUncheckedUpdateManyWithoutPlayer1NestedInput
    matches_as_player2?: matchesUncheckedUpdateManyWithoutPlayer2NestedInput
    matches_won?: matchesUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type registrationsUncheckedUpdateManyWithoutAthleteInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    final_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_rank?: NullableIntFieldUpdateOperationsInput | number | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type matchesCreateManyPlayer1Input = {
    id?: string
    category_id: string
    athlete2_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateManyPlayer2Input = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    winner_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesCreateManyWinnerInput = {
    id?: string
    category_id: string
    athlete1_registration_id?: string | null
    athlete2_registration_id?: string | null
    round: number
    match_order: number
    score1?: Decimal | DecimalJsLike | number | string | null
    score2?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.match_status_enum
  }

  export type matchesUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
    category?: categoriesUpdateOneRequiredWithoutMatchesNestedInput
    player2?: registrationsUpdateOneWithoutMatches_as_player2NestedInput
    winner?: registrationsUpdateOneWithoutMatches_wonNestedInput
  }

  export type matchesUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
    category?: categoriesUpdateOneRequiredWithoutMatchesNestedInput
    player1?: registrationsUpdateOneWithoutMatches_as_player1NestedInput
    winner?: registrationsUpdateOneWithoutMatches_wonNestedInput
  }

  export type matchesUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    winner_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
    category?: categoriesUpdateOneRequiredWithoutMatchesNestedInput
    player1?: registrationsUpdateOneWithoutMatches_as_player1NestedInput
    player2?: registrationsUpdateOneWithoutMatches_as_player2NestedInput
  }

  export type matchesUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }

  export type matchesUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    athlete1_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    athlete2_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    round?: IntFieldUpdateOperationsInput | number
    match_order?: IntFieldUpdateOperationsInput | number
    score1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    score2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enummatch_status_enumFieldUpdateOperationsInput | $Enums.match_status_enum
  }



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