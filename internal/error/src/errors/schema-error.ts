import type { ZodError } from "zod";

import { BaseError } from "./base";

/**
 * Represents an error that occurs when an object does not conform to the required schema.
 * This class extends BaseError and provides specific functionality for schema validation errors.
 *
 * @extends {BaseError<{ raw: unknown }>}
 */
export class SchemaError extends BaseError<{ raw: unknown }> {
  /** Indicates whether the operation can be retried. Always false for schema errors. */
  public readonly retry = false;

  /** The name of the error class. */
  public readonly name = SchemaError.name;

  /**
   * Creates a new instance of SchemaError.
   *
   * @param {Object} opts - The options for creating the error.
   * @param {string} opts.message - The error message.
   * @param {Object} [opts.context] - Additional context for the error.
   * @param {unknown} [opts.context.raw] - The raw data that failed schema validation.
   * @param {BaseError} [opts.cause] - The underlying cause of this error, if any.
   */
  constructor(opts: {
    message: string;
    context?: { raw: unknown };
    cause?: BaseError;
  }) {
    super({
      ...opts,
    });
  }

  /**
   * Creates a SchemaError instance from a Zod validation error.
   *
   * @template T - The type of the data being validated.
   * @param {ZodError<T>} e - The Zod error object.
   * @param {unknown} raw - The raw data that failed validation.
   * @param {Record<string, unknown>} [context] - Additional context to include in the error.
   * @returns {SchemaError} A new SchemaError instance.
   */
  static fromZod<T>(
    e: ZodError<T>,
    raw: unknown,
    context?: Record<string, unknown>,
  ): SchemaError {
    return new SchemaError({
      message: e.message,
      context: {
        raw: JSON.stringify(raw),
        ...context,
      },
    });
  }
}
