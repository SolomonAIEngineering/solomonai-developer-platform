/**
 * Represents the context object for errors.
 * It's a record with string keys and unknown values.
 */
export type ErrorContext = Record<string, unknown>;

/**
 * Abstract base class for custom error types.
 * Extends the built-in Error class with additional functionality.
 *
 * @template TContext - The type of the error context, defaults to ErrorContext.
 */
export abstract class BaseError<
  TContext extends ErrorContext = ErrorContext,
> extends Error {
  /**
   * Indicates whether the operation that caused this error can be retried.
   * Implementing classes should define this property.
   */
  public abstract readonly retry: boolean;

  /**
   * The error that caused this error, if any.
   * Useful for creating error chains.
   */
  public readonly cause: BaseError | undefined;

  /**
   * Additional context information about the error.
   * Can be used to provide more details about the error's occurrence.
   */
  public readonly context: TContext | undefined;

  /**
   * The name of the error.
   * Implementing classes should define this property to identify the error type.
   */
  public abstract readonly name: string;

  /**
   * Creates a new instance of BaseError.
   *
   * @param opts - The options for creating the error.
   * @param opts.message - The error message.
   * @param opts.cause - The error that caused this error, if any.
   * @param opts.context - Additional context information about the error.
   */
  constructor(opts: {
    message: string;
    cause?: BaseError;
    context?: TContext;
  }) {
    super(opts.message);
    this.cause = opts.cause;
    this.context = opts.context;
  }

  /**
   * Returns a string representation of the error.
   * Includes the error name, message, context, and cause (if any).
   *
   * @returns A string representation of the error.
   */
  public toString(): string {
    return `${this.name}: ${this.message} - ${JSON.stringify(
      this.context,
    )} - caused by ${this.cause?.toString()}`;
  }
}
