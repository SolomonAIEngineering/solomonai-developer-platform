/**
 * Enum representing various error codes used in the application.
 * These codes correspond to different types of errors that can occur
 * during API operations or data processing.
 */
export var ErrorCode;
(function (ErrorCode) {
    /** Indicates that the request was malformed or contained invalid parameters. */
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    /** Indicates that the user does not have permission to access the requested resource. */
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    /** Indicates an unexpected error occurred on the server. */
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    /** Indicates that the user has exceeded their usage limit. */
    ErrorCode["USAGE_EXCEEDED"] = "USAGE_EXCEEDED";
    /** Indicates that the requested feature or resource is currently disabled. */
    ErrorCode["DISABLED"] = "DISABLED";
    /** Indicates that the requested resource could not be found. */
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    /** Indicates that the operation failed due to a uniqueness constraint violation. */
    ErrorCode["NOT_UNIQUE"] = "NOT_UNIQUE";
    /** Indicates that the user has sent too many requests in a given amount of time. */
    ErrorCode["RATE_LIMITED"] = "RATE_LIMITED";
    /** Indicates that the user is not authenticated to perform the requested operation. */
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    /** Indicates that a condition required for the request to be executed was not met. */
    ErrorCode["PRECONDITION_FAILED"] = "PRECONDITION_FAILED";
    /** Indicates that the user lacks the necessary permissions to perform the requested operation. */
    ErrorCode["INSUFFICIENT_PERMISSIONS"] = "INSUFFICIENT_PERMISSIONS";
    /** Indicates that the HTTP method used is not allowed for the requested resource. */
    ErrorCode["METHOD_NOT_ALLOWED"] = "METHOD_NOT_ALLOWED";
    /** Indicates that a token or session has expired. */
    ErrorCode["EXPIRED"] = "EXPIRED";
    /** Indicates that the requested delete operation is not allowed due to protection rules. */
    ErrorCode["DELETE_PROTECTED"] = "DELETE_PROTECTED";
    /** Indicates that a conflict occurred with the requested operation. */
    ErrorCode["CONFLICT"] = "CONFLICT";
})(ErrorCode || (ErrorCode = {}));
