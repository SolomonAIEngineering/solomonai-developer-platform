/** Enum representing required and optional request headers */
enum HeaderKey {
  ORG_ID = "X-Org-ID",
  USER_ID = "X-User-ID",
  USER_ROLES = "X-User-Roles",
  TENANT_ID = "X-Tenant-ID",
  API_KEY = "X-API-Key",
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