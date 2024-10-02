import { BaseError } from './base'

/**
 * Represents an error that occurs during a fetch operation.
 *
 * @extends {BaseError<FetchErrorContext>}
 */
export class FetchError extends BaseError<FetchErrorContext> {
  /**
   * Indicates whether the fetch operation should be retried.
   */
  public readonly retry: boolean

  /**
   * The name of the error class.
   */
  public readonly name = FetchError.name

  /**
   * Creates a new instance of FetchError.
   *
   * @param {FetchErrorOptions} opts - The options for creating the FetchError.
   */
  constructor(opts: FetchErrorOptions) {
    super(opts)
    this.retry = opts.retry
  }
}

/**
 * Represents the context of a fetch error.
 */
interface FetchErrorContext {
  /**
   * The URL that was being fetched when the error occurred.
   */
  url: string

  /**
   * The HTTP method used for the fetch request.
   */
  method: string

  /**
   * Additional context properties.
   */
  [more: string]: unknown
}

/**
 * Options for creating a FetchError instance.
 */
interface FetchErrorOptions {
  /**
   * The error message.
   */
  message: string

  /**
   * Indicates whether the fetch operation should be retried.
   */
  retry: boolean

  /**
   * The underlying cause of the error, if any.
   */
  cause?: BaseError

  /**
   * Additional context for the fetch error.
   */
  context?: FetchErrorContext
}
