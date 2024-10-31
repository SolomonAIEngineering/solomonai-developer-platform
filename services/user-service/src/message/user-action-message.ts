import { z } from "zod";

/**
 * Enum representing the different types of user actions tracked in the system.
 */
export enum UserActionType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  READ = "read",
  LOGIN = "login",
  LOGOUT = "logout",
}

/**
 * Zod schema defining the structure of a user action message body.
 * This schema is organization-specific and designed to capture detailed audit and tracking data.
 */
export const UserActionMessageBodySchema = z.object({
  /** Type of action performed by the user */
  actionType: z.nativeEnum(UserActionType),

  /** Unique identifier of the user performing the action */
  userId: z.string().min(1, "User ID must be a non-empty string"),

  /** Timestamp of when the action was performed, represented as a UNIX timestamp (in milliseconds) */
  timestamp: z.number().int().positive(),

  /** Identifier for the workspace or organization where the action took place */
  workspaceId: z.string().min(1, "Workspace ID must be a non-empty string"),

  /** Additional payload data related to the action, structured as key-value pairs */
  payload: z.record(z.unknown()),

  /** Optional identifier of the resource associated with the action, if applicable */
  resourceId: z.string().optional(),

  /** Optional type of the resource associated with the action, if applicable */
  resourceType: z.string().optional(),

  /** Status of the action, indicating if it was successful, failed, or is pending */
  status: z.enum(["success", "failure", "pending"]),

  /** Optional error message if the action failed or encountered an issue */
  errorMessage: z.string().optional(),

  /** Version of the client application from which the action was performed, if available */
  clientVersion: z.string().optional(),

  /** Version of the server or backend application processing the action, if available */
  serverVersion: z.string().optional(),

  /** Environment in which the action occurred, restricted to production, staging, or development */
  environment: z.enum(["production", "staging", "development"]),

  /** Source from which the action originated, limited to web, mobile, or API */
  source: z.enum(["web", "mobile", "api"]),

  /** Optional reason provided for the action, useful for additional context on updates or deletes */
  actionReason: z.string().optional(),

  /** Optional session ID for tracing the user session associated with the action */
  sessionId: z.string().optional(),

  /** Optional correlation ID to trace related actions across distributed systems */
  correlationId: z.string().optional(),

  /** Contextual data for audit logging, including location, user agent, and optional referer */
  auditLogContext: z.object({
    /** Geographic or organizational location where the action was performed */
    location: z.string().min(1, "Location is required for audit logging"),

    /** User agent string of the client from which the action was performed */
    userAgent: z.string().min(1, "User agent information is required"),

    /** IP address of the client from which the action was performed */
    ipAddress: z.string().min(1, "IP address is required for audit logging"),

    /** Optional referer URL, indicating the source page of the action */
    referer: z.string().url().optional(),
  }),
});

/**
 * Type representing the structure of a user action message body.
 * This type is derived from the `UserActionMessageBodySchema` and is used to strongly type
 * user action data in the organization-specific context.
 */
export type UserActionMessageBody = z.infer<typeof UserActionMessageBodySchema>;
