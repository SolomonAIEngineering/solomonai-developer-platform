Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require("./runtime/index-browser.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36",
};

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.OrganizationsScalarFieldEnum = {
  id: "id",
  name: "name",
  display_name: "display_name",
  domain: "domain",
  subscription_tier: "subscription_tier",
  subscription_status: "subscription_status",
  email: "email",
  user_id: "user_id",
  technical_contact: "technical_contact",
  created_at: "created_at",
  updated_at: "updated_at",
  is_active: "is_active",
  metadata: "metadata",
  max_members: "max_members",
  security_settings: "security_settings",
  feature_flags: "feature_flags",
};

exports.Prisma.TenantsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  name: "name",
  external_id: "external_id",
  status: "status",
  created_at: "created_at",
  updated_at: "updated_at",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
  metadata: "metadata",
  custom_domain: "custom_domain",
  settings: "settings",
};

exports.Prisma.Account_statementsScalarFieldEnum = {
  bank_account_id: "bank_account_id",
  credit_account_id: "credit_account_id",
  id: "id",
  investment_account_id: "investment_account_id",
  month: "month",
  mortgage_account_id: "mortgage_account_id",
  plaid_statement_id: "plaid_statement_id",
  statement_pdf_url: "statement_pdf_url",
  student_loan_account_id: "student_loan_account_id",
  year: "year",
};

exports.Prisma.Actionable_insightsScalarFieldEnum = {
  detailed_action: "detailed_action",
  generated_time: "generated_time",
  id: "id",
  summarized_action: "summarized_action",
  tags: "tags",
  user_profile_id: "user_profile_id",
  financial_user_profile_id: "financial_user_profile_id",
  embedding_model: "embedding_model",
  embedding_error: "embedding_error",
  last_embedded_at: "last_embedded_at",
};

exports.Prisma.AddressesScalarFieldEnum = {
  city: "city",
  company_info_id: "company_info_id",
  country: "country",
  country_subdivision: "country_subdivision",
  id: "id",
  modified_at: "modified_at",
  purchase_order_id: "purchase_order_id",
  state: "state",
  street_1: "street_1",
  street_2: "street_2",
  type: "type",
  zip_code: "zip_code",
};

exports.Prisma.AprsScalarFieldEnum = {
  balance_subject_to_apr: "balance_subject_to_apr",
  credit_account_id: "credit_account_id",
  id: "id",
  interest_charge_amount: "interest_charge_amount",
  percentage: "percentage",
  type: "type",
};

exports.Prisma.Bank_accountsScalarFieldEnum = {
  balance: "balance",
  balance_limit: "balance_limit",
  currency: "currency",
  current_funds: "current_funds",
  id: "id",
  link_id: "link_id",
  name: "name",
  number: "number",
  plaid_account_id: "plaid_account_id",
  status: "status",
  subtype: "subtype",
  type: "type",
  user_id: "user_id",
  plaid_account_type: "plaid_account_type",
};

exports.Prisma.BudgetsScalarFieldEnum = {
  description: "description",
  end_date: "end_date",
  id: "id",
  milestone_id: "milestone_id",
  name: "name",
  start_date: "start_date",
};

exports.Prisma.CategoriesScalarFieldEnum = {
  budget_id: "budget_id",
  description: "description",
  id: "id",
  name: "name",
  subcategories: "subcategories",
};

exports.Prisma.Credit_accountsScalarFieldEnum = {
  balance: "balance",
  balance_limit: "balance_limit",
  current_funds: "current_funds",
  id: "id",
  is_overdue: "is_overdue",
  last_payment_amount: "last_payment_amount",
  last_payment_date: "last_payment_date",
  last_statement_balance: "last_statement_balance",
  last_statement_issue_date: "last_statement_issue_date",
  link_id: "link_id",
  minimum_amount_due_date: "minimum_amount_due_date",
  minimum_payment_amount: "minimum_payment_amount",
  name: "name",
  next_payment_date: "next_payment_date",
  next_payment_due_date: "next_payment_due_date",
  number: "number",
  plaid_account_id: "plaid_account_id",
  status: "status",
  subtype: "subtype",
  type: "type",
  user_id: "user_id",
  plaid_account_type: "plaid_account_type",
};

exports.Prisma.Financial_user_profilesScalarFieldEnum = {
  email: "email",
  id: "id",
  profile_type: "profile_type",
  stripe_customer_id: "stripe_customer_id",
  user_id: "user_id",
};

exports.Prisma.ForecastsScalarFieldEnum = {
  forecasted_amount: "forecasted_amount",
  forecasted_completion_date: "forecasted_completion_date",
  id: "id",
  smart_goal_id: "smart_goal_id",
  variance_amount: "variance_amount",
};

exports.Prisma.Invesment_holdingsScalarFieldEnum = {
  cost_basis: "cost_basis",
  id: "id",
  institution_price: "institution_price",
  institution_price_as_of: "institution_price_as_of",
  institution_price_datetime: "institution_price_datetime",
  institution_value: "institution_value",
  investment_account_id: "investment_account_id",
  iso_currency_code: "iso_currency_code",
  name: "name",
  plaid_account_id: "plaid_account_id",
  quantity: "quantity",
  security_id: "security_id",
  unofficial_currency_code: "unofficial_currency_code",
};

exports.Prisma.Investment_accountsScalarFieldEnum = {
  balance: "balance",
  balance_limit: "balance_limit",
  current_funds: "current_funds",
  id: "id",
  link_id: "link_id",
  name: "name",
  number: "number",
  plaid_account_id: "plaid_account_id",
  status: "status",
  subtype: "subtype",
  type: "type",
  user_id: "user_id",
  plaid_account_type: "plaid_account_type",
};

exports.Prisma.Investment_securitiesScalarFieldEnum = {
  close_price: "close_price",
  close_price_as_of: "close_price_as_of",
  cusip: "cusip",
  id: "id",
  institution_id: "institution_id",
  institution_security_id: "institution_security_id",
  investment_account_id: "investment_account_id",
  is_cash_equivalent: "is_cash_equivalent",
  isin: "isin",
  iso_currency_code: "iso_currency_code",
  name: "name",
  proxy_security_id: "proxy_security_id",
  security_id: "security_id",
  sedol: "sedol",
  ticker_symbol: "ticker_symbol",
  type: "type",
  unofficial_currency_code: "unofficial_currency_code",
  update_datetime: "update_datetime",
};

exports.Prisma.LinksScalarFieldEnum = {
  custom_institution_name: "custom_institution_name",
  description: "description",
  error_code: "error_code",
  expiration_date: "expiration_date",
  id: "id",
  institution_name: "institution_name",
  last_manual_sync: "last_manual_sync",
  last_successful_update: "last_successful_update",
  link_status: "link_status",
  link_type: "link_type",
  new_accounts_available: "new_accounts_available",
  plaid_institution_id: "plaid_institution_id",
  plaid_new_accounts_available: "plaid_new_accounts_available",
  should_be_updated: "should_be_updated",
  updated_at: "updated_at",
  user_profile_id: "user_profile_id",
  financial_user_profile_id: "financial_user_profile_id",
};

exports.Prisma.MilestonesScalarFieldEnum = {
  description: "description",
  id: "id",
  is_completed: "is_completed",
  name: "name",
  smart_goal_id: "smart_goal_id",
  target_amount: "target_amount",
  target_date: "target_date",
};

exports.Prisma.Mortgage_accountsScalarFieldEnum = {
  account_number: "account_number",
  current_late_fee: "current_late_fee",
  escrow_balance: "escrow_balance",
  has_pmi: "has_pmi",
  has_prepayment_penalty: "has_prepayment_penalty",
  id: "id",
  interest_rate_percentage: "interest_rate_percentage",
  interest_rate_type: "interest_rate_type",
  last_payment_amount: "last_payment_amount",
  last_payment_date: "last_payment_date",
  link_id: "link_id",
  loan_term: "loan_term",
  loan_type_description: "loan_type_description",
  maturity_date: "maturity_date",
  next_monthly_payment: "next_monthly_payment",
  next_payment_due_date: "next_payment_due_date",
  original_principal_balance: "original_principal_balance",
  original_property_value: "original_property_value",
  origination_date: "origination_date",
  origination_principal_amount: "origination_principal_amount",
  outstanding_principal_balance: "outstanding_principal_balance",
  past_due_amount: "past_due_amount",
  payment_amount: "payment_amount",
  payment_date: "payment_date",
  plaid_account_id: "plaid_account_id",
  property_address_city: "property_address_city",
  property_address_postal_code: "property_address_postal_code",
  property_address_state: "property_address_state",
  property_address_street: "property_address_street",
  property_country: "property_country",
  property_region: "property_region",
  status: "status",
  ytd_interest_paid: "ytd_interest_paid",
  ytd_principal_paid: "ytd_principal_paid",
  plaid_account_type: "plaid_account_type",
  type: "type",
};

exports.Prisma.Personal_actionable_insightsScalarFieldEnum = {
  action: "action",
  description: "description",
  expected_benefit: "expected_benefit",
  financial_user_profile_id: "financial_user_profile_id",
  generated_time: "generated_time",
  id: "id",
  insight_name: "insight_name",
  metrics_to_optimize_for: "metrics_to_optimize_for",
  tags: "tags",
  takeaway: "takeaway",
};

exports.Prisma.Plaid_account_investment_transactionsScalarFieldEnum = {
  account_id: "account_id",
  ammount: "ammount",
  amount: "amount",
  created_at: "created_at",
  current_date: "current_date",
  fees: "fees",
  id: "id",
  investment_transaction_id: "investment_transaction_id",
  iso_currency_code: "iso_currency_code",
  link_id: "link_id",
  name: "name",
  price: "price",
  quantity: "quantity",
  security_id: "security_id",
  subtype: "subtype",
  time: "time",
  type: "type",
  unofficial_currency_code: "unofficial_currency_code",
  user_id: "user_id",
  investment_account_id: "investment_account_id",
};

exports.Prisma.Plaid_account_recurring_transactionsScalarFieldEnum = {
  account_id: "account_id",
  average_amount: "average_amount",
  average_amount_iso_currency_code: "average_amount_iso_currency_code",
  category_id: "category_id",
  description: "description",
  first_date: "first_date",
  flow: "flow",
  frequency: "frequency",
  id: "id",
  is_active: "is_active",
  last_amount: "last_amount",
  last_amount_iso_currency_code: "last_amount_iso_currency_code",
  last_date: "last_date",
  link_id: "link_id",
  merchant_name: "merchant_name",
  personal_finance_category_detailed: "personal_finance_category_detailed",
  personal_finance_category_primary: "personal_finance_category_primary",
  status: "status",
  stream_id: "stream_id",
  time: "time",
  transaction_ids: "transaction_ids",
  updated_time: "updated_time",
  user_id: "user_id",
  bank_account_id: "bank_account_id",
  credit_account_id: "credit_account_id",
};

exports.Prisma.Plaid_account_transactionsScalarFieldEnum = {
  account_id: "account_id",
  account_owner: "account_owner",
  amount: "amount",
  authorized_date: "authorized_date",
  authorized_datetime: "authorized_datetime",
  categories: "categories",
  category_id: "category_id",
  check_number: "check_number",
  current_date: "current_date",
  current_datetime: "current_datetime",
  id: "id",
  iso_currency_code: "iso_currency_code",
  link_id: "link_id",
  location_address: "location_address",
  location_city: "location_city",
  location_country: "location_country",
  location_lat: "location_lat",
  location_lon: "location_lon",
  location_postal_code: "location_postal_code",
  location_region: "location_region",
  location_store_number: "location_store_number",
  merchant_name: "merchant_name",
  name: "name",
  payment_channel: "payment_channel",
  payment_meta_by_order_of: "payment_meta_by_order_of",
  payment_meta_payee: "payment_meta_payee",
  payment_meta_payer: "payment_meta_payer",
  payment_meta_payment_method: "payment_meta_payment_method",
  payment_meta_payment_processor: "payment_meta_payment_processor",
  payment_meta_ppd_id: "payment_meta_ppd_id",
  payment_meta_reason: "payment_meta_reason",
  payment_meta_reference_number: "payment_meta_reference_number",
  pending: "pending",
  pending_transaction_id: "pending_transaction_id",
  personal_finance_category_detailed: "personal_finance_category_detailed",
  personal_finance_category_primary: "personal_finance_category_primary",
  time: "time",
  transaction_code: "transaction_code",
  transaction_id: "transaction_id",
  unofficial_currency_code: "unofficial_currency_code",
  user_id: "user_id",
  bank_account_id: "bank_account_id",
  credit_account_id: "credit_account_id",
  hide_transaction: "hide_transaction",
  needs_review: "needs_review",
  tags: "tags",
  transaction_name: "transaction_name",
  embedding: "embedding",
  embedding_model: "embedding_model",
  embedding_error: "embedding_error",
  last_embedded_at: "last_embedded_at",
};

exports.Prisma.Plaid_linksScalarFieldEnum = {
  id: "id",
  institution_id: "institution_id",
  institution_name: "institution_name",
  item_id: "item_id",
  link_id: "link_id",
  products: "products",
  use_plaid_sync: "use_plaid_sync",
  webhook_url: "webhook_url",
};

exports.Prisma.Plaid_syncsScalarFieldEnum = {
  added: "added",
  id: "id",
  link_id: "link_id",
  modified: "modified",
  next_cursor: "next_cursor",
  removed: "removed",
  time_stamp: "time_stamp",
  trigger: "trigger",
};

exports.Prisma.PocketsScalarFieldEnum = {
  bank_account_id: "bank_account_id",
  id: "id",
  type: "type",
  credit_account_id: "credit_account_id",
  tags: "tags",
};

exports.Prisma.Smart_goalsScalarFieldEnum = {
  current_amount: "current_amount",
  description: "description",
  duration: "duration",
  end_date: "end_date",
  goal_type: "goal_type",
  id: "id",
  is_completed: "is_completed",
  name: "name",
  pocket_id: "pocket_id",
  start_date: "start_date",
  target_amount: "target_amount",
  user_id: "user_id",
};

exports.Prisma.Smart_notesScalarFieldEnum = {
  content: "content",
  created_at: "created_at",
  id: "id",
  smart_goal_id: "smart_goal_id",
  updated_at: "updated_at",
  user_id: "user_id",
  embedding_model: "embedding_model",
  embedding_error: "embedding_error",
  last_embedded_at: "last_embedded_at",
  plaid_account_investment_transaction_id:
    "plaid_account_investment_transaction_id",
  plaid_account_recurring_transaction_id:
    "plaid_account_recurring_transaction_id",
  plaid_account_transaction_id: "plaid_account_transaction_id",
  financial_user_profile_id: "financial_user_profile_id",
};

exports.Prisma.Stripe_subscriptionsScalarFieldEnum = {
  id: "id",
  is_trialing: "is_trialing",
  stripe_subscription_active_until: "stripe_subscription_active_until",
  stripe_subscription_id: "stripe_subscription_id",
  stripe_subscription_status: "stripe_subscription_status",
  stripe_webhook_latest_timestamp: "stripe_webhook_latest_timestamp",
  user_profile_id: "user_profile_id",
  financial_user_profile_id: "financial_user_profile_id",
};

exports.Prisma.Student_loan_accountsScalarFieldEnum = {
  disbursement_dates: "disbursement_dates",
  expected_payoff_date: "expected_payoff_date",
  guarantor: "guarantor",
  id: "id",
  interest_rate_percentage: "interest_rate_percentage",
  is_overdue: "is_overdue",
  last_payment_amount: "last_payment_amount",
  last_payment_date: "last_payment_date",
  last_statement_issue_date: "last_statement_issue_date",
  link_id: "link_id",
  loan_end_date: "loan_end_date",
  loan_name: "loan_name",
  loan_type: "loan_type",
  minimum_payment_amount: "minimum_payment_amount",
  name: "name",
  next_payment_due_date: "next_payment_due_date",
  origination_date: "origination_date",
  origination_principal_amount: "origination_principal_amount",
  outstanding_interest_amount: "outstanding_interest_amount",
  payment_reference_number: "payment_reference_number",
  plaid_account_id: "plaid_account_id",
  pslf_status_estimated_eligibility_date:
    "pslf_status_estimated_eligibility_date",
  pslf_status_payments_made: "pslf_status_payments_made",
  pslf_status_payments_remaining: "pslf_status_payments_remaining",
  repayment_plan_description: "repayment_plan_description",
  repayment_plan_type: "repayment_plan_type",
  sequence_number: "sequence_number",
  servicer_address_city: "servicer_address_city",
  servicer_address_country: "servicer_address_country",
  servicer_address_postal_code: "servicer_address_postal_code",
  servicer_address_region: "servicer_address_region",
  servicer_address_state: "servicer_address_state",
  servicer_address_street: "servicer_address_street",
  status: "status",
  user_id: "user_id",
  ytd_interest_paid: "ytd_interest_paid",
  ytd_principal_paid: "ytd_principal_paid",
  plaid_account_type: "plaid_account_type",
  type: "type",
};

exports.Prisma.Transaction_splitsScalarFieldEnum = {
  amount: "amount",
  authorized_date: "authorized_date",
  authorized_datetime: "authorized_datetime",
  categories: "categories",
  description: "description",
  id: "id",
  link_id: "link_id",
  personal_finance_category_detailed: "personal_finance_category_detailed",
  personal_finance_category_primary: "personal_finance_category_primary",
  plaid_account_transaction_id: "plaid_account_transaction_id",
  tags: "tags",
  time_of_split: "time_of_split",
  user_id: "user_id",
};

exports.Prisma.User_profilesScalarFieldEnum = {
  email: "email",
  id: "id",
  stripe_customer_id: "stripe_customer_id",
  user_id: "user_id",
};

exports.Prisma.AttachmentsScalarFieldEnum = {
  company: "company",
  file_name: "file_name",
  file_url: "file_url",
  id: "id",
  linked_accounting_account_id: "linked_accounting_account_id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
};

exports.Prisma.Balance_sheetsScalarFieldEnum = {
  company: "company",
  currency: "currency",
  date: "date",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  name: "name",
  net_assets: "net_assets",
  remote_generated_at: "remote_generated_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  report_details_id: "report_details_id",
};

exports.Prisma.Business_chart_of_accountsScalarFieldEnum = {
  account_number: "account_number",
  classification: "classification",
  company: "company",
  currency: "currency",
  current_balance: "current_balance",
  description: "description",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  name: "name",
  parent_account_id: "parent_account_id",
  reference_details_id: "reference_details_id",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  status: "status",
  type: "type",
};

exports.Prisma.Cash_flow_statementsScalarFieldEnum = {
  cash_at_beginning_of_period: "cash_at_beginning_of_period",
  cash_at_end_of_period: "cash_at_end_of_period",
  company: "company",
  currency: "currency",
  end_period: "end_period",
  id: "id",
  merge_record_id: "merge_record_id",
  modified_at: "modified_at",
  name: "name",
  remote_generated_at: "remote_generated_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  report_details_id: "report_details_id",
  start_period: "start_period",
};

exports.Prisma.Company_infosScalarFieldEnum = {
  currency: "currency",
  fiscal_year_end_day: "fiscal_year_end_day",
  fiscal_year_end_month: "fiscal_year_end_month",
  id: "id",
  legal_name: "legal_name",
  linked_accounting_account_id: "linked_accounting_account_id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  name: "name",
  phone_numbers: "phone_numbers",
  remote_created_at: "remote_created_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  tax_number: "tax_number",
  urls: "urls",
};

exports.Prisma.ContactsScalarFieldEnum = {
  addresses_ids: "addresses_ids",
  company: "company",
  currency: "currency",
  email_address: "email_address",
  id: "id",
  is_customer: "is_customer",
  is_supplier: "is_supplier",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  name: "name",
  phone_numbers: "phone_numbers",
  reference_details_id: "reference_details_id",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  status: "status",
  tax_number: "tax_number",
};

exports.Prisma.Credit_note_line_itemsScalarFieldEnum = {
  account: "account",
  company: "company",
  credit_note_id: "credit_note_id",
  description: "description",
  id: "id",
  item: "item",
  name: "name",
  quantity: "quantity",
  remote_id: "remote_id",
  tax_rate: "tax_rate",
  total_line_amount: "total_line_amount",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
  unit_price: "unit_price",
};

exports.Prisma.Credit_notesScalarFieldEnum = {
  accounting_period: "accounting_period",
  company: "company",
  contact: "contact",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  number: "number",
  payment_ids: "payment_ids",
  remaining_credit: "remaining_credit",
  remote_created_at: "remote_created_at",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  status: "status",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
};

exports.Prisma.Expense_linesScalarFieldEnum = {
  account: "account",
  company: "company",
  contact: "contact",
  currency: "currency",
  description: "description",
  exchange_rate: "exchange_rate",
  expense_id: "expense_id",
  id: "id",
  item: "item",
  modified_at: "modified_at",
  net_amount: "net_amount",
  remote_id: "remote_id",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
};

exports.Prisma.ExpensesScalarFieldEnum = {
  account: "account",
  accounting_period: "accounting_period",
  company: "company",
  contact: "contact",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  memo: "memo",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  remote_created_at: "remote_created_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  sub_total: "sub_total",
  total_amount: "total_amount",
  total_tax_amount: "total_tax_amount",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
};

exports.Prisma.Income_statementsScalarFieldEnum = {
  company: "company",
  currency: "currency",
  end_period: "end_period",
  gross_profit: "gross_profit",
  id: "id",
  modified_at: "modified_at",
  name: "name",
  net_income: "net_income",
  net_operating_income: "net_operating_income",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  report_details_id: "report_details_id",
  start_period: "start_period",
};

exports.Prisma.Invoice_line_itemsScalarFieldEnum = {
  account: "account",
  company: "company",
  currency: "currency",
  description: "description",
  exchange_rate: "exchange_rate",
  id: "id",
  invoice_id: "invoice_id",
  item: "item",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  quantity: "quantity",
  remote_id: "remote_id",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
  unit_price: "unit_price",
};

exports.Prisma.InvoicesScalarFieldEnum = {
  accounting_period: "accounting_period",
  balance: "balance",
  company: "company",
  contact: "contact",
  currency: "currency",
  due_date: "due_date",
  exchange_rate: "exchange_rate",
  id: "id",
  issue_date: "issue_date",
  memo: "memo",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  number: "number",
  paid_on_date: "paid_on_date",
  payments: "payments",
  purchase_orders: "purchase_orders",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  status: "status",
  sub_total: "sub_total",
  total_amount: "total_amount",
  total_discount: "total_discount",
  total_tax_amount: "total_tax_amount",
  tracking_categories: "tracking_categories",
  transaction_details_id: "transaction_details_id",
  type: "type",
};

exports.Prisma.ItemsScalarFieldEnum = {
  company: "company",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  name: "name",
  purchase_account: "purchase_account",
  purchase_price: "purchase_price",
  reference_details_id: "reference_details_id",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  sales_account: "sales_account",
  status: "status",
  unit_price: "unit_price",
};

exports.Prisma.Journal_entriesScalarFieldEnum = {
  accounting_period: "accounting_period",
  company: "company",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  journal_number: "journal_number",
  memo: "memo",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  payment_ids: "payment_ids",
  posting_status: "posting_status",
  remote_created_at: "remote_created_at",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
};

exports.Prisma.Journal_linesScalarFieldEnum = {
  account: "account",
  company: "company",
  contact: "contact",
  description: "description",
  exchange_rate: "exchange_rate",
  id: "id",
  journal_entry_id: "journal_entry_id",
  modified_at: "modified_at",
  net_amount: "net_amount",
  remote_id: "remote_id",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
};

exports.Prisma.Linked_accounting_accountsScalarFieldEnum = {
  id: "id",
  merge_link_id: "merge_link_id",
};

exports.Prisma.Merge_linksScalarFieldEnum = {
  category: "category",
  end_user_email_address: "end_user_email_address",
  end_user_organization_name: "end_user_organization_name",
  end_user_origin_id: "end_user_origin_id",
  id: "id",
  integration: "integration",
  integration_image: "integration_image",
  integration_name: "integration_name",
  integration_slug: "integration_slug",
  integration_square_image: "integration_square_image",
  is_duplicate: "is_duplicate",
  merge_linked_account_id: "merge_linked_account_id",
  status: "status",
  user_profile_id: "user_profile_id",
  webhook_listener_url: "webhook_listener_url",
  financial_user_profile_id: "financial_user_profile_id",
};

exports.Prisma.PaymentsScalarFieldEnum = {
  account: "account",
  accounting_period: "accounting_period",
  company: "company",
  contact: "contact",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
};

exports.Prisma.Tax_ratesScalarFieldEnum = {
  company: "company",
  description: "description",
  effective_tax_rate: "effective_tax_rate",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  reference_details_id: "reference_details_id",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  total_tax_rate: "total_tax_rate",
};

exports.Prisma.TokensScalarFieldEnum = {
  access_token: "access_token",
  id: "id",
  item_id: "item_id",
  key_id: "key_id",
  link_id: "link_id",
  version: "version",
  last_merge_created_at: "last_merge_created_at",
  merge_end_user_origin_id: "merge_end_user_origin_id",
  merge_integration_slug: "merge_integration_slug",
  merge_link_id: "merge_link_id",
};

exports.Prisma.Tracking_categoriesScalarFieldEnum = {
  category_type: "category_type",
  company: "company",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  parent_category: "parent_category",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
};

exports.Prisma.Transaction_detailsScalarFieldEnum = {
  id: "id",
  linked_accounting_account_id: "linked_accounting_account_id",
};

exports.Prisma.Purchase_order_line_itemsScalarFieldEnum = {
  account: "account",
  company: "company",
  currency: "currency",
  description: "description",
  exchange_rate: "exchange_rate",
  id: "id",
  item: "item",
  modified_at: "modified_at",
  purchase_order_id: "purchase_order_id",
  quantity: "quantity",
  remote_id: "remote_id",
  tax_amount: "tax_amount",
  total_line_amount: "total_line_amount",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
  unit_price: "unit_price",
};

exports.Prisma.Purchase_ordersScalarFieldEnum = {
  accounting_period: "accounting_period",
  company: "company",
  currency: "currency",
  customer: "customer",
  delivery_date: "delivery_date",
  exchange_rate: "exchange_rate",
  id: "id",
  issue_date: "issue_date",
  linked_accounting_account_id: "linked_accounting_account_id",
  memo: "memo",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  purchase_order_number: "purchase_order_number",
  remote_created_at: "remote_created_at",
  remote_id: "remote_id",
  remote_updated_at: "remote_updated_at",
  remote_was_deleted: "remote_was_deleted",
  status: "status",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  vendor: "vendor",
};

exports.Prisma.Reference_detailsScalarFieldEnum = {
  id: "id",
  linked_accounting_account_id: "linked_accounting_account_id",
};

exports.Prisma.Report_detailsScalarFieldEnum = {
  id: "id",
  linked_accounting_account_id: "linked_accounting_account_id",
};

exports.Prisma.Report_itemsScalarFieldEnum = {
  assets_balance_sheet_id: "assets_balance_sheet_id",
  company: "company",
  cost_of_sales_income_statement_id: "cost_of_sales_income_statement_id",
  equity_balance_sheet_id: "equity_balance_sheet_id",
  financing_activities_cash_flow_statements_id:
    "financing_activities_cash_flow_statements_id",
  id: "id",
  income_income_statement_id: "income_income_statement_id",
  investing_activities_cash_flow_statements_id:
    "investing_activities_cash_flow_statements_id",
  liabilities_balance_sheet_id: "liabilities_balance_sheet_id",
  modified_at: "modified_at",
  name: "name",
  non_operating_expenses_income_statement_id:
    "non_operating_expenses_income_statement_id",
  operating_activities_cash_flow_statements_id:
    "operating_activities_cash_flow_statements_id",
  operating_expenses_income_statement_id:
    "operating_expenses_income_statement_id",
  remote_id: "remote_id",
  value: "value",
};

exports.Prisma.Business_transactionsScalarFieldEnum = {
  account: "account",
  accounting_period: "accounting_period",
  company: "company",
  contact: "contact",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  number: "number",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
  transaction_type: "transaction_type",
};

exports.Prisma.Transaction_line_itemsScalarFieldEnum = {
  account: "account",
  business_transaction_id: "business_transaction_id",
  company: "company",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  item: "item",
  memo: "memo",
  modified_at: "modified_at",
  quantity: "quantity",
  remote_id: "remote_id",
  tax_rate: "tax_rate",
  total_line_amount: "total_line_amount",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
  unit_price: "unit_price",
};

exports.Prisma.Accounting_attachmentsScalarFieldEnum = {
  company: "company",
  file_name: "file_name",
  file_url: "file_url",
  id: "id",
  merge_record_id: "merge_record_id",
  modified_at: "modified_at",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
};

exports.Prisma.Vendor_credit_linesScalarFieldEnum = {
  account: "account",
  company: "company",
  description: "description",
  exchange_rate: "exchange_rate",
  id: "id",
  modified_at: "modified_at",
  net_amount: "net_amount",
  remote_id: "remote_id",
  tracking_categories: "tracking_categories",
  tracking_category: "tracking_category",
  vendor_credit_id: "vendor_credit_id",
};

exports.Prisma.Vendor_creditsScalarFieldEnum = {
  accounting_period: "accounting_period",
  company: "company",
  currency: "currency",
  exchange_rate: "exchange_rate",
  id: "id",
  merge_account_id: "merge_account_id",
  modified_at: "modified_at",
  number: "number",
  remote_id: "remote_id",
  remote_was_deleted: "remote_was_deleted",
  total_amount: "total_amount",
  tracking_categories: "tracking_categories",
  transaction_date: "transaction_date",
  transaction_details_id: "transaction_details_id",
  vendor: "vendor",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};

exports.Prisma.ModelName = {
  organizations: "organizations",
  tenants: "tenants",
  account_statements: "account_statements",
  actionable_insights: "actionable_insights",
  addresses: "addresses",
  aprs: "aprs",
  bank_accounts: "bank_accounts",
  budgets: "budgets",
  categories: "categories",
  credit_accounts: "credit_accounts",
  financial_user_profiles: "financial_user_profiles",
  forecasts: "forecasts",
  invesment_holdings: "invesment_holdings",
  investment_accounts: "investment_accounts",
  investment_securities: "investment_securities",
  links: "links",
  milestones: "milestones",
  mortgage_accounts: "mortgage_accounts",
  personal_actionable_insights: "personal_actionable_insights",
  plaid_account_investment_transactions:
    "plaid_account_investment_transactions",
  plaid_account_recurring_transactions: "plaid_account_recurring_transactions",
  plaid_account_transactions: "plaid_account_transactions",
  plaid_links: "plaid_links",
  plaid_syncs: "plaid_syncs",
  pockets: "pockets",
  smart_goals: "smart_goals",
  smart_notes: "smart_notes",
  stripe_subscriptions: "stripe_subscriptions",
  student_loan_accounts: "student_loan_accounts",
  transaction_splits: "transaction_splits",
  user_profiles: "user_profiles",
  attachments: "attachments",
  balance_sheets: "balance_sheets",
  business_chart_of_accounts: "business_chart_of_accounts",
  cash_flow_statements: "cash_flow_statements",
  company_infos: "company_infos",
  contacts: "contacts",
  credit_note_line_items: "credit_note_line_items",
  credit_notes: "credit_notes",
  expense_lines: "expense_lines",
  expenses: "expenses",
  income_statements: "income_statements",
  invoice_line_items: "invoice_line_items",
  invoices: "invoices",
  items: "items",
  journal_entries: "journal_entries",
  journal_lines: "journal_lines",
  linked_accounting_accounts: "linked_accounting_accounts",
  merge_links: "merge_links",
  payments: "payments",
  tax_rates: "tax_rates",
  tokens: "tokens",
  tracking_categories: "tracking_categories",
  transaction_details: "transaction_details",
  purchase_order_line_items: "purchase_order_line_items",
  purchase_orders: "purchase_orders",
  reference_details: "reference_details",
  report_details: "report_details",
  report_items: "report_items",
  business_transactions: "business_transactions",
  transaction_line_items: "transaction_line_items",
  accounting_attachments: "accounting_attachments",
  vendor_credit_lines: "vendor_credit_lines",
  vendor_credits: "vendor_credits",
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
            runtime.prettyName +
            "`).";
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      },
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
