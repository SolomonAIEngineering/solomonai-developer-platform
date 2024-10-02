import type { BaseError } from './errors/base'

/**
 * Represents a successful result containing a value.
 * @template V The type of the successful value.
 */
type OkResult<V> = {
  val: V
  err?: never
}

/**
 * Represents an error result containing a BaseError.
 * @template E The specific error type extending BaseError.
 */
type ErrResult<E extends BaseError> = {
  val?: never
  err: E
}

/**
 * A union type representing either a successful result or an error result.
 * This is the core type for the Result pattern implementation.
 * @template V The type of the successful value.
 * @template E The specific error type extending BaseError.
 */
export type Result<V, E extends BaseError = BaseError> =
  | OkResult<V>
  | ErrResult<E>

/**
 * Creates a successful result with no value.
 * @returns An OkResult with a 'never' type value.
 */
export function Ok(): OkResult<never>
/**
 * Creates a successful result with the given value.
 * @template V The type of the successful value.
 * @param val The value to be wrapped in the OkResult.
 * @returns An OkResult containing the provided value.
 */
export function Ok<V>(val: V): OkResult<V>
export function Ok<V>(val?: V): OkResult<V> {
  return { val } as OkResult<V>
}

/**
 * Creates an error result with the given error.
 * @template E The specific error type extending BaseError.
 * @param err The error to be wrapped in the ErrResult.
 * @returns An ErrResult containing the provided error.
 */
export function Err<E extends BaseError>(err: E): ErrResult<E> {
  return { err }
}

/**
 * Wraps a promise execution in a try-catch block and returns a Result.
 * If the promise resolves successfully, it returns an OkResult with the resolved value.
 * If an error is thrown, it catches the error and returns an ErrResult using the provided error factory.
 *
 * @template T The type of the value that the promise resolves to.
 * @template E The specific error type extending BaseError.
 * @param p The promise to be executed and wrapped.
 * @param errorFactory A function that takes an Error and returns a specific BaseError instance.
 * @returns A Promise that resolves to a Result containing either the successful value or the error.
 *
 * @example
 * ```typescript
 * const result = await wrap(
 *   fetchUserData(userId),
 *   (err) => new UserFetchError("Failed to fetch user data", { cause: err })
 * );
 *
 * if (result.err) {
 *   console.error(result.err.message);
 * } else {
 *   console.log(result.val);
 * }
 * ```
 */
export async function wrap<T, E extends BaseError>(
  p: Promise<T>,
  errorFactory: (err: Error) => E,
): Promise<Result<T, E>> {
  try {
    return Ok(await p)
  } catch (e) {
    return Err(errorFactory(e as Error))
  }
}
