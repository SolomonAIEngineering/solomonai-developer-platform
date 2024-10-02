"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedTransactionsByBankAccountId = exports.getInventoryCostAnalysis = exports.getExpenseTrendsByTimeOfDay = exports.getExpenseAnomalies = exports.getExpenseForecast = exports.getExpenseGrowthRate = exports.getExpenseDistributionByDayOfWeek = exports.getRecurringExpenses = exports.getExpenseComparison = exports.getExpensesByPaymentChannel = exports.getWeeklyExpenseTrends = exports.getExpensesByMerchant = exports.getTopExpenseCategories = exports.getDailyExpenses = exports.getExpensesByLocation = exports.getExpensesByCategory = exports.getMonthlyExpenses = exports.getTeamSettings = exports.getCategories = exports.getRunway = exports.getBurnRate = exports.getTrackerRecordsByRange = exports.getTrackerProjects = exports.getUserInvites = exports.getTeamInvites = exports.getTeams = exports.getExpenses = exports.getMetrics = exports.getBankAccountsCurrencies = exports.getSpending = exports.getTeamMembers = exports.getTeamBankAccounts = exports.getBankConnectionsByTeamId = exports.getTeamUser = exports.getUser = exports.getSession = exports.getRecentTransactions = exports.getTransactions = exports.getUserSubscriptions = void 0;
require("server-only");
const react_1 = require("react");
const cache_1 = require("next/cache");
const server_1 = require("../client/server");
const queries_1 = require("../queries");
const analytic_queries_1 = require("./analytic-queries");
const getUserSubscriptions = async (invalidateCache = false) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const userId = user?.data?.id;
    if (!userId) {
        return null;
    }
    if (invalidateCache) {
        return (0, queries_1.getUserSubscriptionsQuery)(supabase, userId);
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getUserSubscriptionsQuery)(supabase, userId);
    }, ['user', 'subscriptions', userId], {
        tags: [`user_subscriptions_${userId}`],
        revalidate: 180,
    })();
};
exports.getUserSubscriptions = getUserSubscriptions;
const getTransactions = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTransactionsQuery)(supabase, { ...params, teamId });
    }, ['transactions', teamId], {
        revalidate: 180,
        tags: [`transactions_${teamId}`],
    })(params);
};
exports.getTransactions = getTransactions;
/**
 * Fetches recent transactions for a team, with caching.
 *
 * @async
 * @function getRecentTransactions
 * @param {Omit<GetRecentTransactionsParams, "teamId">} params - Parameters for the query, excluding teamId.
 * @returns {Promise<RecentTransactionsResult | null>} A promise that resolves to the recent transactions or null if no team is found.
 *
 * @description
 * This function retrieves recent transactions for the current user's team. It uses Next.js's
 * unstable_cache for performance optimization. The function performs the following steps:
 * 1. Creates a Supabase client.
 * 2. Fetches the current user and extracts the team ID.
 * 3. If no team ID is found, it returns null.
 * 4. Otherwise, it calls the getRecentTransactionsQuery with caching applied.
 *
 * @example
 * ```typescript
 * const recentTransactions = await getRecentTransactions({ limit: 10, accountId: "sdlhsadghlads" });
 * if (recentTransactions) {
 *   console.log(recentTransactions);
 * } else {
 *   console.log("No team found or error occurred");
 * }
 * ```
 *
 * @throws Will throw an error if the database query fails.
 *
 * @see {@link GetRecentTransactionsParams} for the full list of accepted parameters.
 * @see {@link getRecentTransactionsQuery} for the underlying query function.
 */
const getRecentTransactions = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    // we convert the params to a string to make the cache key unique
    const paramsString = JSON.stringify(params);
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getRecentTransactionsQuery)(supabase, { ...params, teamId });
    }, ['recent_transactions', teamId], {
        revalidate: 180,
        tags: [`recent_transactions_${teamId}_${paramsString}`],
    })(params);
};
exports.getRecentTransactions = getRecentTransactions;
exports.getSession = (0, react_1.cache)(async () => {
    const supabase = (0, server_1.createClient)();
    return supabase.auth.getSession();
});
const getUser = async () => {
    const { data: { session }, } = await (0, exports.getSession)();
    const userId = session?.user?.id;
    if (!userId) {
        return null;
    }
    const supabase = (0, server_1.createClient)();
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getUserQuery)(supabase, userId);
    }, ['user', userId], {
        tags: [`user_${userId}`],
        revalidate: 180,
    })(userId);
};
exports.getUser = getUser;
const getTeamUser = async () => {
    const supabase = (0, server_1.createClient)();
    const { data } = await (0, exports.getUser)();
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamUserQuery)(supabase, {
            userId: data.id,
            teamId: data.team_id,
        });
    }, ['team', 'user', data.id], {
        tags: [`team_user_${data.id}`],
        revalidate: 180,
    })(data.id);
};
exports.getTeamUser = getTeamUser;
const getBankConnectionsByTeamId = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getBankConnectionsByTeamIdQuery)(supabase, teamId);
    }, ['bank_connections', teamId], {
        tags: [`bank_connections_${teamId}`],
        revalidate: 3600,
    })(teamId);
};
exports.getBankConnectionsByTeamId = getBankConnectionsByTeamId;
const getTeamBankAccounts = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamBankAccountsQuery)(supabase, { ...params, teamId });
    }, ['bank_accounts', teamId], {
        tags: [`bank_accounts_${teamId}`],
        revalidate: 180,
    })(params);
};
exports.getTeamBankAccounts = getTeamBankAccounts;
const getTeamMembers = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamMembersQuery)(supabase, teamId);
    }, ['team_members', teamId], {
        tags: [`team_members_${teamId}`],
        revalidate: 180,
    })(teamId);
};
exports.getTeamMembers = getTeamMembers;
const getSpending = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getSpendingQuery)(supabase, { ...params, teamId });
    }, ['spending', teamId], {
        tags: [`spending_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getSpending = getSpending;
const getBankAccountsCurrencies = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getBankAccountsCurrenciesQuery)(supabase, {
            teamId,
        });
    }, ['bank_accounts_currencies', teamId], {
        tags: [`bank_accounts_currencies_${teamId}`],
        revalidate: 180,
    })();
};
exports.getBankAccountsCurrencies = getBankAccountsCurrencies;
const getMetrics = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getMetricsQuery)(supabase, { ...params, teamId });
    }, ['metrics', teamId], {
        tags: [`metrics_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getMetrics = getMetrics;
const getExpenses = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getExpensesQuery)(supabase, { ...params, teamId });
    }, ['expenses', teamId], {
        tags: [`expenses_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenses = getExpenses;
const getTeams = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const userId = user?.data?.id;
    if (!userId) {
        return;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamsByUserIdQuery)(supabase, userId);
    }, ['teams', userId], {
        tags: [`teams_${userId}`],
        revalidate: 180,
    })();
};
exports.getTeams = getTeams;
const getTeamInvites = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamInvitesQuery)(supabase, teamId);
    }, ['team', 'invites', teamId], {
        tags: [`team_invites_${teamId}`],
        revalidate: 180,
    })();
};
exports.getTeamInvites = getTeamInvites;
const getUserInvites = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const email = user?.data?.email;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getUserInvitesQuery)(supabase, email);
    }, ['user', 'invites', email], {
        tags: [`user_invites_${email}`],
        revalidate: 180,
    })();
};
exports.getUserInvites = getUserInvites;
const getTrackerProjects = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTrackerProjectsQuery)(supabase, { ...params, teamId });
    }, ['tracker_projects', teamId], {
        tags: [`tracker_projects_${teamId}`],
        revalidate: 180,
    })(params);
};
exports.getTrackerProjects = getTrackerProjects;
const getTrackerRecordsByRange = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTrackerRecordsByRangeQuery)(supabase, { ...params, teamId });
    }, ['tracker_entries', teamId], {
        tags: [`tracker_entries_${teamId}`],
        revalidate: 180,
    })(params);
};
exports.getTrackerRecordsByRange = getTrackerRecordsByRange;
const getBurnRate = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getBurnRateQuery)(supabase, { ...params, teamId });
    }, ['burn_rate', teamId], {
        tags: [`burn_rate_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getBurnRate = getBurnRate;
const getRunway = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getRunwayQuery)(supabase, { ...params, teamId });
    }, ['runway', teamId], {
        tags: [`runway_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getRunway = getRunway;
const getCategories = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getCategoriesQuery)(supabase, { ...params, teamId });
    }, ['transaction_categories', teamId], {
        tags: [`transaction_categories_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getCategories = getCategories;
const getTeamSettings = async () => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTeamSettingsQuery)(supabase, teamId);
    }, ['team_settings', teamId], {
        tags: [`team_settings_${teamId}`],
        revalidate: 3600,
    })();
};
exports.getTeamSettings = getTeamSettings;
const getMonthlyExpenses = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getMonthlyExpensesQuery)(supabase, { ...params, teamId });
    }, ['monthly_expenses', teamId], {
        tags: [`monthly_expenses_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getMonthlyExpenses = getMonthlyExpenses;
const getExpensesByCategory = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpensesByCategoryQuery)(supabase, { ...params, teamId });
    }, ['expenses_by_category', teamId], {
        tags: [`expenses_by_category_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpensesByCategory = getExpensesByCategory;
const getExpensesByLocation = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseBreakdownByLocationQuery)(supabase, {
            ...params,
            teamId,
        });
    }, ['expenses_by_location', teamId], {
        tags: [`expenses_by_location_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpensesByLocation = getExpensesByLocation;
const getDailyExpenses = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getDailyExpensesQuery)(supabase, { ...params, teamId });
    }, ['daily_expenses', teamId], {
        tags: [`daily_expenses_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getDailyExpenses = getDailyExpenses;
const getTopExpenseCategories = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getTopExpenseCategoriesQuery)(supabase, { ...params, teamId });
    }, ['top_expense_categories', teamId], {
        tags: [`top_expense_categories_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getTopExpenseCategories = getTopExpenseCategories;
const getExpensesByMerchant = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpensesByMerchantQuery)(supabase, { ...params, teamId });
    }, ['expenses_by_merchant', teamId], {
        tags: [`expenses_by_merchant_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpensesByMerchant = getExpensesByMerchant;
const getWeeklyExpenseTrends = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getWeeklyExpenseTrendsQuery)(supabase, { ...params, teamId });
    }, ['weekly_expense_trends', teamId], {
        tags: [`weekly_expense_trends_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getWeeklyExpenseTrends = getWeeklyExpenseTrends;
const getExpensesByPaymentChannel = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpensesByPaymentChannelQuery)(supabase, { ...params, teamId });
    }, ['expenses_by_payment_channel', teamId], {
        tags: [`expenses_by_payment_channel_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpensesByPaymentChannel = getExpensesByPaymentChannel;
const getExpenseComparison = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseComparisonQuery)(supabase, { ...params, teamId });
    }, ['expense_anomalies', teamId], {
        tags: [`expense_comparison_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseComparison = getExpenseComparison;
const getRecurringExpenses = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getRecurringExpensesQuery)(supabase, { ...params, teamId });
    }, ['recurring_expenses', teamId], {
        tags: [`recurring_expenses_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getRecurringExpenses = getRecurringExpenses;
const getExpenseDistributionByDayOfWeek = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseDistributionByDayOfWeekQuery)(supabase, {
            ...params,
            teamId,
        });
    }, ['expense_distribution_by_day_of_week', teamId], {
        tags: [`expense_distribution_by_day_of_week_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseDistributionByDayOfWeek = getExpenseDistributionByDayOfWeek;
const getExpenseGrowthRate = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseGrowthRateQuery)(supabase, { ...params, teamId });
    }, ['expense_growth_rate', teamId], {
        tags: [`expense_growth_rate_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseGrowthRate = getExpenseGrowthRate;
const getExpenseForecast = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseForecastQuery)(supabase, { ...params, teamId });
    }, ['expense_forecast', teamId], {
        tags: [`expense_forecast_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseForecast = getExpenseForecast;
const getExpenseAnomalies = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseAnomaliesQuery)(supabase, { ...params, teamId });
    }, ['expense_anomalies', teamId], {
        tags: [`expense_anomalies_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseAnomalies = getExpenseAnomalies;
const getExpenseTrendsByTimeOfDay = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getExpenseTrendsByTimeOfDayQuery)(supabase, { ...params, teamId });
    }, ['expense_trends_by_time_of_day', teamId], {
        tags: [`expense_trends_by_time_of_day_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getExpenseTrendsByTimeOfDay = getExpenseTrendsByTimeOfDay;
const getInventoryCostAnalysis = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, analytic_queries_1.getInventoryCostAnalysisQuery)(supabase, { ...params, teamId });
    }, ['inventory_cost_analysis', teamId], {
        tags: [`inventory_cost_analysis_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getInventoryCostAnalysis = getInventoryCostAnalysis;
/**
 * Cached query to get transactions by bank account ID
 * @param supabase - Supabase client
 * @param bankAccountId - Bank account ID
 * @param limit - Number of transactions to fetch (default: 5)
 * @returns Promise resolving to an array of transactions
 */
const getCachedTransactionsByBankAccountId = async (params) => {
    const supabase = (0, server_1.createClient)();
    const user = await (0, exports.getUser)();
    const teamId = user?.data?.team_id;
    if (!teamId) {
        return null;
    }
    return (0, cache_1.unstable_cache)(async () => {
        return (0, queries_1.getTransactionsByBankAccountQuery)(supabase, params);
    }, ['transactions_by_bank_account', teamId], {
        tags: [`transactions_by_bank_account_${teamId}`],
        revalidate: 3600,
    })(params);
};
exports.getCachedTransactionsByBankAccountId = getCachedTransactionsByBankAccountId;
