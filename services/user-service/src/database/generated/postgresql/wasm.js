
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.A_ipowered_insightsScalarFieldEnum = {
  areas_of_interest: 'areas_of_interest',
  business_account_settings_id: 'business_account_settings_id',
  data_sharing: 'data_sharing',
  id: 'id',
  insight_frequency: 'insight_frequency'
};

exports.Prisma.Account_informationsScalarFieldEnum = {
  business_account_settings_id: 'business_account_settings_id',
  business_name: 'business_name',
  business_registration_number: 'business_registration_number',
  business_type: 'business_type',
  id: 'id'
};

exports.Prisma.AddressesScalarFieldEnum = {
  address: 'address',
  city: 'city',
  id: 'id',
  lattitude: 'lattitude',
  longitude: 'longitude',
  state: 'state',
  unit: 'unit',
  user_account_id: 'user_account_id',
  zipcode: 'zipcode',
  business_account_id: 'business_account_id'
};

exports.Prisma.Business_account_settingsScalarFieldEnum = {
  business_account_id: 'business_account_id',
  id: 'id'
};

exports.Prisma.Business_accountsScalarFieldEnum = {
  account_type: 'account_type',
  authn_account_id: 'authn_account_id',
  bio: 'bio',
  company_description: 'company_description',
  company_established_date: 'company_established_date',
  company_industry_type: 'company_industry_type',
  company_name: 'company_name',
  company_website_url: 'company_website_url',
  created_at: 'created_at',
  email: 'email',
  headline: 'headline',
  id: 'id',
  is_active: 'is_active',
  is_email_verified: 'is_email_verified',
  is_private: 'is_private',
  phone_number: 'phone_number',
  username: 'username',
  verified_at: 'verified_at',
  auth0_user_id: 'auth0_user_id',
  profile_image_url: 'profile_image_url',
  algolia_user_id: 'algolia_user_id',
  member_business_accounts_team_id: 'member_business_accounts_team_id',
  role_id: 'role_id',
  supabase_auth0_user_id: 'supabase_auth0_user_id',
  team_admin_team_id: 'team_admin_team_id'
};

exports.Prisma.Contact_informationsScalarFieldEnum = {
  account_information_id: 'account_information_id',
  address: 'address',
  email: 'email',
  id: 'id',
  phone_number: 'phone_number'
};

exports.Prisma.Digital_worker_settingsScalarFieldEnum = {
  enable_logging: 'enable_logging',
  id: 'id',
  settings_id: 'settings_id',
  worker_name: 'worker_name',
  worker_version: 'worker_version'
};

exports.Prisma.Financial_preferencesScalarFieldEnum = {
  business_account_settings_id: 'business_account_settings_id',
  currency_preference: 'currency_preference',
  financial_year_start: 'financial_year_start',
  id: 'id',
  settings_id: 'settings_id',
  tax_code: 'tax_code',
  tax_percentage: 'tax_percentage'
};

exports.Prisma.Integration_settingsScalarFieldEnum = {
  bank_account_linking: 'bank_account_linking',
  business_account_settings_id: 'business_account_settings_id',
  id: 'id',
  third_party_apps: 'third_party_apps'
};

exports.Prisma.Notification_settingsScalarFieldEnum = {
  alerts: 'alerts',
  business_account_settings_id: 'business_account_settings_id',
  id: 'id',
  notification_type: 'notification_type',
  settings_id: 'settings_id'
};

exports.Prisma.Role_audit_eventsScalarFieldEnum = {
  action: 'action',
  affected_fields: 'affected_fields',
  client_ip: 'client_ip',
  context: 'context',
  id: 'id',
  performed_by: 'performed_by',
  previous_values: 'previous_values',
  role_id: 'role_id',
  timestamp: 'timestamp',
  user_agent: 'user_agent'
};

exports.Prisma.RolesScalarFieldEnum = {
  business_account_id: 'business_account_id',
  can_create_projects: 'can_create_projects',
  can_create_reports: 'can_create_reports',
  can_create_users: 'can_create_users',
  can_delete_projects: 'can_delete_projects',
  can_delete_reports: 'can_delete_reports',
  can_delete_users: 'can_delete_users',
  can_read_projects: 'can_read_projects',
  can_read_reports: 'can_read_reports',
  can_read_users: 'can_read_users',
  can_update_projects: 'can_update_projects',
  can_update_reports: 'can_update_reports',
  can_update_users: 'can_update_users',
  created_at: 'created_at',
  id: 'id',
  name: 'name',
  type: 'type',
  updated_at: 'updated_at',
  user_account_id: 'user_account_id',
  team_id: 'team_id'
};

exports.Prisma.SettingsScalarFieldEnum = {
  app_theme: 'app_theme',
  business_account_id: 'business_account_id',
  id: 'id',
  preferred_language: 'preferred_language',
  risk_tolerance: 'risk_tolerance',
  user_account_id: 'user_account_id'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  metadata: 'metadata',
  tag_description: 'tag_description',
  tag_name: 'tag_name',
  user_account_id: 'user_account_id',
  business_account_id: 'business_account_id',
  team_id: 'team_id'
};

exports.Prisma.Tax_settingsScalarFieldEnum = {
  financial_preferences_id: 'financial_preferences_id',
  id: 'id',
  tax_code: 'tax_code',
  tax_percentage: 'tax_percentage'
};

exports.Prisma.TeamsScalarFieldEnum = {
  created_at: 'created_at',
  description: 'description',
  id: 'id',
  name: 'name',
  role_id: 'role_id',
  updated_at: 'updated_at'
};

exports.Prisma.User_accountsScalarFieldEnum = {
  authn_account_id: 'authn_account_id',
  bio: 'bio',
  created_at: 'created_at',
  email: 'email',
  firstname: 'firstname',
  headline: 'headline',
  id: 'id',
  is_active: 'is_active',
  is_email_verified: 'is_email_verified',
  is_private: 'is_private',
  lastname: 'lastname',
  phone_number: 'phone_number',
  username: 'username',
  verified_at: 'verified_at',
  company_description: 'company_description',
  company_established_date: 'company_established_date',
  company_industry_type: 'company_industry_type',
  company_name: 'company_name',
  company_website_url: 'company_website_url',
  profile_type: 'profile_type',
  account_type: 'account_type',
  auth0_user_id: 'auth0_user_id',
  profile_image_url: 'profile_image_url',
  algolia_user_id: 'algolia_user_id',
  role_id: 'role_id',
  supabase_auth0_user_id: 'supabase_auth0_user_id',
  team_id: 'team_id'
};

exports.Prisma.User_settingsScalarFieldEnum = {
  app_theme: 'app_theme',
  datetime_format: 'datetime_format',
  default_currency: 'default_currency',
  email_notifications: 'email_notifications',
  enable_goal_journal: 'enable_goal_journal',
  id: 'id',
  investment_risk_tolerance: 'investment_risk_tolerance',
  preferred_language: 'preferred_language',
  public_profile: 'public_profile',
  push_notifications: 'push_notifications',
  sms_notifications: 'sms_notifications',
  two_factor_authentication_enabled: 'two_factor_authentication_enabled',
  user_account_id: 'user_account_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  a_ipowered_insights: 'a_ipowered_insights',
  account_informations: 'account_informations',
  addresses: 'addresses',
  business_account_settings: 'business_account_settings',
  business_accounts: 'business_accounts',
  contact_informations: 'contact_informations',
  digital_worker_settings: 'digital_worker_settings',
  financial_preferences: 'financial_preferences',
  integration_settings: 'integration_settings',
  notification_settings: 'notification_settings',
  role_audit_events: 'role_audit_events',
  roles: 'roles',
  settings: 'settings',
  tags: 'tags',
  tax_settings: 'tax_settings',
  teams: 'teams',
  user_accounts: 'user_accounts',
  user_settings: 'user_settings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
