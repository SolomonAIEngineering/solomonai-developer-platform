"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseBreakdownByLocationQueryParamsSchema = void 0;
exports.getMonthlyExpensesQuery = getMonthlyExpensesQuery;
exports.getExpensesByCategoryQuery = getExpensesByCategoryQuery;
exports.getDailyExpensesQuery = getDailyExpensesQuery;
exports.getTopExpenseCategoriesQuery = getTopExpenseCategoriesQuery;
exports.getExpensesByMerchantQuery = getExpensesByMerchantQuery;
exports.getWeeklyExpenseTrendsQuery = getWeeklyExpenseTrendsQuery;
exports.getExpensesByPaymentChannelQuery = getExpensesByPaymentChannelQuery;
exports.getRecurringExpensesQuery = getRecurringExpensesQuery;
exports.getExpenseDistributionByDayOfWeekQuery = getExpenseDistributionByDayOfWeekQuery;
exports.getExpenseGrowthRateQuery = getExpenseGrowthRateQuery;
exports.getExpenseForecastQuery = getExpenseForecastQuery;
exports.getExpenseAnomaliesQuery = getExpenseAnomaliesQuery;
exports.getExpenseTrendsByTimeOfDayQuery = getExpenseTrendsByTimeOfDayQuery;
exports.getExpenseComparisonQuery = getExpenseComparisonQuery;
exports.getExpenseByPersonalFinanceCategoryQuery = getExpenseByPersonalFinanceCategoryQuery;
exports.getInventoryCostAnalysisQuery = getInventoryCostAnalysisQuery;
exports.getRentAndUtilitiesAnalysisQuery = getRentAndUtilitiesAnalysisQuery;
exports.getSalariesAndWagesAnalysisQuery = getSalariesAndWagesAnalysisQuery;
exports.getEquipmentAndMaintenanceAnalysisQuery = getEquipmentAndMaintenanceAnalysisQuery;
exports.getProfessionalServicesAnalysisQuery = getProfessionalServicesAnalysisQuery;
exports.getSoftwareSubscriptionAnalysisQuery = getSoftwareSubscriptionAnalysisQuery;
exports.getSupplierExpenseAnalysisQuery = getSupplierExpenseAnalysisQuery;
exports.getShippingLogisticsAnalysisQuery = getShippingLogisticsAnalysisQuery;
exports.getExpenseBreakdownByLocationQuery = getExpenseBreakdownByLocationQuery;
const utc_1 = require("@date-fns/utc");
const zod_1 = require("zod");
/**
 * Converts a date string to a UTCDate object.
 * @param dateString - The date string to convert.
 * @returns A UTCDate object representing the input date string.
 */
function toUTCDate(dateString) {
    return new utc_1.UTCDate(dateString);
}
// Base schema for common parameters
const baseQueryParamsSchema = zod_1.z.object({
    teamId: zod_1.z.string(),
    from: zod_1.z.string(),
    to: zod_1.z.string(),
    currency: zod_1.z.string().optional().default('USD'),
});
// Schema and type for getMonthlyExpensesQuery
const getMonthlyExpensesQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves monthly expenses for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the monthly expenses data.
 */
async function getMonthlyExpensesQuery(supabase, params) {
    const { teamId, from, to, currency } = getMonthlyExpensesQueryParamsSchema.parse(params);
    return supabase.rpc('get_monthly_expenses', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getExpensesByCategoryQuery
const getExpensesByCategoryQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expenses by category for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expenses by category data.
 */
async function getExpensesByCategoryQuery(supabase, params) {
    const { teamId, from, to, currency } = getExpensesByCategoryQueryParamsSchema.parse(params);
    return supabase.rpc('get_expenses_by_category', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getDailyExpensesQuery
const getDailyExpensesQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves daily expenses for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the daily expenses data.
 */
async function getDailyExpensesQuery(supabase, params) {
    const { teamId, from, to, currency } = getDailyExpensesQueryParamsSchema.parse(params);
    const dailyExpenses = await supabase.rpc('get_daily_expenses', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
    return dailyExpenses;
}
// Schema and type for getTopExpenseCategoriesQuery
const getTopExpenseCategoriesQueryParamsSchema = baseQueryParamsSchema.extend({
    limit: zod_1.z.number().optional().default(5),
});
/**
 * Retrieves the top expense categories for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the top expense categories data.
 */
async function getTopExpenseCategoriesQuery(supabase, params) {
    const { teamId, from, to, currency, limit } = getTopExpenseCategoriesQueryParamsSchema.parse(params);
    return supabase.rpc('get_top_expense_categories', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
        limit_count: limit,
    });
}
// Schema and type for getExpensesByMerchantQuery
const getExpensesByMerchantQueryParamsSchema = baseQueryParamsSchema.extend({
    limit: zod_1.z.number().optional().default(10),
});
/**
 * Retrieves expenses by merchant for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expenses by merchant data.
 */
async function getExpensesByMerchantQuery(supabase, params) {
    const { teamId, from, to, currency, limit } = getExpensesByMerchantQueryParamsSchema.parse(params);
    return supabase.rpc('get_expenses_by_merchant', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
        limit_count: limit,
    });
}
// Schema and type for getWeeklyExpenseTrendsQuery
const getWeeklyExpenseTrendsQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves weekly expense trends for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the weekly expense trends data.
 */
async function getWeeklyExpenseTrendsQuery(supabase, params) {
    const { teamId, from, to, currency } = getWeeklyExpenseTrendsQueryParamsSchema.parse(params);
    return supabase.rpc('get_weekly_expense_trends', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getExpensesByPaymentChannelQuery
const getExpensesByPaymentChannelQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expenses by payment channel for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expenses by payment channel data.
 */
async function getExpensesByPaymentChannelQuery(supabase, params) {
    const { teamId, from, to, currency } = getExpensesByPaymentChannelQueryParamsSchema.parse(params);
    return supabase.rpc('get_expenses_by_payment_channel', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getRecurringExpensesQuery
const getRecurringExpensesQueryParamsSchema = baseQueryParamsSchema.extend({
    minOccurrences: zod_1.z.number().optional().default(3),
});
/**
 * Retrieves recurring expenses for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the recurring expenses data.
 */
async function getRecurringExpensesQuery(supabase, params) {
    const { teamId, from, to, currency, minOccurrences } = getRecurringExpensesQueryParamsSchema.parse(params);
    return supabase.rpc('get_recurring_expenses', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
        min_occurrences: minOccurrences,
    });
}
// Schema and type for getExpenseDistributionByDayOfWeekQuery
const getExpenseDistributionByDayOfWeekQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expense distribution by day of week for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense distribution by day of week data.
 */
async function getExpenseDistributionByDayOfWeekQuery(supabase, params) {
    const { teamId, from, to, currency } = getExpenseDistributionByDayOfWeekQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_distribution_by_day_of_week', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getExpenseGrowthRateQuery
const getExpenseGrowthRateQueryParamsSchema = baseQueryParamsSchema.extend({
    intervalType: zod_1.z.string().optional().default('month'),
});
/**
 * Retrieves expense growth rate for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense growth rate data.
 */
async function getExpenseGrowthRateQuery(supabase, params) {
    const { teamId, from, to, currency, intervalType } = getExpenseGrowthRateQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_growth_rate', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
        interval_type: intervalType,
    });
}
// Schema and type for getExpenseForecastQuery
const getExpenseForecastQueryParamsSchema = zod_1.z.object({
    teamId: zod_1.z.string(),
    forecastDate: zod_1.z.string(),
    currency: zod_1.z.string().optional().default('USD'),
    lookbackMonths: zod_1.z.number().optional().default(3),
});
/**
 * Retrieves expense forecast for a specified team and forecast date.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense forecast data.
 */
async function getExpenseForecastQuery(supabase, params) {
    const { teamId, forecastDate, currency, lookbackMonths } = getExpenseForecastQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_forecast', {
        team_id: teamId,
        forecast_date: toUTCDate(forecastDate).toDateString(),
        currency: currency,
        lookback_months: lookbackMonths,
    });
}
// Schema and type for getExpenseAnomaliesQuery
const getExpenseAnomaliesQueryParamsSchema = baseQueryParamsSchema.extend({
    thresholdPercentage: zod_1.z.number().optional().default(50),
});
/**
 * Retrieves expense anomalies for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense anomalies data.
 */
async function getExpenseAnomaliesQuery(supabase, params) {
    const { teamId, from, to, currency, thresholdPercentage } = getExpenseAnomaliesQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_anomalies', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
        threshold_percentage: thresholdPercentage,
    });
}
// Schema and type for getExpenseTrendsByTimeOfDayQuery
const getExpenseTrendsByTimeOfDayQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expense trends by time of day for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense trends by time of day data.
 */
async function getExpenseTrendsByTimeOfDayQuery(supabase, params) {
    const { teamId, from, to, currency } = getExpenseTrendsByTimeOfDayQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_trends_by_time_of_day', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getExpenseComparisonQuery
const getExpenseComparisonQueryParamsSchema = zod_1.z.object({
    teamId: zod_1.z.string(),
    currentFrom: zod_1.z.string(),
    currentTo: zod_1.z.string(),
    currency: zod_1.z.string().optional().default('USD'),
});
/**
 * Retrieves expense comparison data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense comparison data.
 */
async function getExpenseComparisonQuery(supabase, params) {
    const { teamId, currentFrom, currentTo, currency } = getExpenseComparisonQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_comparison', {
        team_id: teamId,
        current_start_date: toUTCDate(currentFrom).toDateString(),
        current_end_date: toUTCDate(currentTo).toDateString(),
        currency: currency,
    });
}
// Schema and type for getExpenseByPersonalFinanceCategoryQuery
const getExpenseByPersonalFinanceCategoryQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expenses by personal finance category for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expenses by personal finance category data.
 */
async function getExpenseByPersonalFinanceCategoryQuery(supabase, params) {
    const { teamId, from, to, currency } = getExpenseByPersonalFinanceCategoryQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_by_personal_finance_category', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getInventoryCostAnalysisQuery
const getInventoryCostAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves inventory cost analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the inventory cost analysis data.
 */
async function getInventoryCostAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getInventoryCostAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_inventory_cost_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getRentAndUtilitiesAnalysisQuery
const getRentAndUtilitiesAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves rent and utilities analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the rent and utilities analysis data.
 */
async function getRentAndUtilitiesAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getRentAndUtilitiesAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_rent_and_utilities_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getSalariesAndWagesAnalysisQuery
const getSalariesAndWagesAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves salaries and wages analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the salaries and wages analysis data.
 */
async function getSalariesAndWagesAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getSalariesAndWagesAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_salaries_and_wages_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getEquipmentAndMaintenanceAnalysisQuery
const getEquipmentAndMaintenanceAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves equipment and maintenance analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the equipment and maintenance analysis data.
 */
async function getEquipmentAndMaintenanceAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getEquipmentAndMaintenanceAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_equipment_and_maintenance_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getProfessionalServicesAnalysisQuery
const getProfessionalServicesAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves professional services analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the professional services analysis data.
 */
async function getProfessionalServicesAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getProfessionalServicesAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_professional_services_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getSoftwareSubscriptionAnalysisQuery
const getSoftwareSubscriptionAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves software subscription analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the software subscription analysis data.
 */
async function getSoftwareSubscriptionAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getSoftwareSubscriptionAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_software_subscription_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getSupplierExpenseAnalysisQuery
const getSupplierExpenseAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves supplier expense analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the supplier expense analysis data.
 */
async function getSupplierExpenseAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getSupplierExpenseAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_supplier_expense_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
// Schema and type for getShippingLogisticsAnalysisQuery
const getShippingLogisticsAnalysisQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves shipping and logistics analysis data for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the shipping and logistics analysis data.
 */
async function getShippingLogisticsAnalysisQuery(supabase, params) {
    const { teamId, from, to, currency } = getShippingLogisticsAnalysisQueryParamsSchema.parse(params);
    return supabase.rpc('get_shipping_logistics_analysis', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
/**
 * Zod schema for the parameters of the getExpenseBreakdownByLocationQuery function.
 */
exports.getExpenseBreakdownByLocationQueryParamsSchema = baseQueryParamsSchema;
/**
 * Retrieves expense breakdown by location for a specified team and date range.
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to the expense breakdown by location data.
 */
async function getExpenseBreakdownByLocationQuery(supabase, params) {
    const { teamId, from, to, currency } = exports.getExpenseBreakdownByLocationQueryParamsSchema.parse(params);
    return supabase.rpc('get_expense_breakdown_by_location', {
        team_id: teamId,
        start_date: toUTCDate(from).toDateString(),
        end_date: toUTCDate(to).toDateString(),
        currency: currency,
    });
}
