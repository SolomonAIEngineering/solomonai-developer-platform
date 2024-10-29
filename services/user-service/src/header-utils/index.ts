/** Enum representing required and optional request headers */
enum HeaderKey {
  ORG_ID = "x-org-id",
  USER_ID = "x-user-id",
  USER_ROLES = "x-user-roles",
  TENANT_ID = "x-tenant-id",
  API_KEY = "x-api-key",
}

/** Type representing required and optional headers in the request */
interface RequestHeaders {
  [HeaderKey.ORG_ID]: string;
  [HeaderKey.USER_ID]: string;
  [HeaderKey.USER_ROLES]?: string;
  [HeaderKey.TENANT_ID]?: string;
  [HeaderKey.API_KEY]?: string;
}

export type { RequestHeaders };
export { HeaderKey };