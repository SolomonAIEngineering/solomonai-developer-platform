import "server-only";

import { unstable_cache } from "next/cache";
import { cache } from "react";

import type {
  GetBurnRateQueryParams,
  GetCategoriesParams,
  GetExpensesQueryParams,
  GetMetricsParams,
  GetRunwayQueryParams,
  GetSpendingParams,
  GetTeamBankAccountsParams,
  GetTrackerProjectsQueryParams,
  GetTrackerRecordsByRangeParams,
  GetTransactionsParams,
} from "../queries";
import type {
  GetDailyExpensesQueryParams,
  GetExpenseAnomaliesQueryParams,
  GetExpenseComparisonQueryParams,
  GetExpenseDistributionByDayOfWeekQueryParams,
  GetExpenseForecastQueryParams,
  GetExpenseGrowthRateQueryParams,
  GetExpensesByCategoryQueryParams,
  GetExpensesByMerchantQueryParams,
  GetExpensesByPaymentChannelQueryParams,
  GetExpenseTrendsByTimeOfDayQueryParams,
  GetMonthlyExpensesQueryParams,
  GetRecurringExpensesQueryParams,
  GetTopExpenseCategoriesQueryParams,
  GetWeeklyExpenseTrendsQueryParams,
} from "./analytic-queries";

import { createClient } from "../client/server";
import {
  getBankAccountsCurrenciesQuery,
  getBankConnectionsByTeamIdQuery,
  getBurnRateQuery,
  getCategoriesQuery,
  getExpensesQuery,
  getMetricsQuery,
  GetRecentTransactionsParams,
  getRecentTransactionsQuery,
  getRunwayQuery,
  getSpendingQuery,
  getTeamBankAccountsQuery,
  getTeamInvitesQuery,
  getTeamMembersQuery,
  getTeamsByUserIdQuery,
  getTeamSettingsQuery,
  getTeamUserQuery,
  getTrackerProjectsQuery,
  getTrackerRecordsByRangeQuery,
  getTransactionsByBankAccountQuery,
  GetTransactionsByBankAccountQueryParams,
  getTransactionsQuery,
  getUserInvitesQuery,
  getUserQuery,
  getUserSubscriptionsQuery,
} from "../queries";
import { Client, PublicSchemaClient } from "../types";
import {
  getDailyExpensesQuery,
  getExpenseAnomaliesQuery,
  getExpenseBreakdownByLocationQuery,
  GetExpenseBreakdownByLocationQueryParams,
  getExpenseComparisonQuery,
  getExpenseDistributionByDayOfWeekQuery,
  getExpenseForecastQuery,
  getExpenseGrowthRateQuery,
  getExpensesByCategoryQuery,
  getExpensesByMerchantQuery,
  getExpensesByPaymentChannelQuery,
  getExpenseTrendsByTimeOfDayQuery,
  getInventoryCostAnalysisQuery,
  GetInventoryCostAnalysisQueryParams,
  getMonthlyExpensesQuery,
  getRecurringExpensesQuery,
  getTopExpenseCategoriesQuery,
  getWeeklyExpenseTrendsQuery,
} from "./analytic-queries";

export const getUserSubscriptions = async (invalidateCache = false) => {
  const supabase = createClient();
  const user = await getUser();
  const userId = user?.data?.id;

  if (!userId) {
    return null;
  }

  if (invalidateCache) {
    return getUserSubscriptionsQuery(supabase as any, userId);
  }

  return unstable_cache(
    async () => {
      return getUserSubscriptionsQuery(supabase as any, userId);
    },
    ["user", "subscriptions", userId],
    {
      tags: [`user_subscriptions_${userId}`],
      revalidate: 180,
    },
  )();
};

export const getTransactions = async (
  params: Omit<GetTransactionsParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetTransactionsParams, "teamId">) => {
      return getTransactionsQuery(supabase as any, { ...queryParams, teamId });
    },
    ["transactions", teamId],
    {
      revalidate: 180,
      tags: [`transactions_${teamId}`],
    },
  )(params);
};

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
export const getRecentTransactions = async (
  params: Omit<GetRecentTransactionsParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  // we convert the params to a string to make the cache key unique
  const paramsString = JSON.stringify(params);

  return unstable_cache(
    async (queryParams: Omit<GetRecentTransactionsParams, "teamId">) => {
      return getRecentTransactionsQuery(supabase as any, { ...params, teamId });
    },
    ["recent_transactions", teamId],
    {
      revalidate: 180,
      tags: [`recent_transactions_${teamId}_${paramsString}`],
    },
  )(params);
};

export const getSession = cache(async () => {
  const supabase = createClient();

  return supabase.auth.getSession();
});

export const getUser = async () => {
  const {
    data: { session },
  } = await getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  const supabase = createClient();

  return unstable_cache(
    async () => {
      return getUserQuery(supabase as any, userId);
    },
    ["user", userId],
    {
      tags: [`user_${userId}`],
      revalidate: 180,
    }
  )();
};

export const getTeamUser = async () => {
  const supabase = createClient();
  const user = await getUser();

  if (!user || !user.data) {
    return null;
  }

  const userId = user.data.id as string
  const teamId = user.data.team_id as string

  return unstable_cache(
    async () => {
      return getTeamUserQuery(supabase as any, {
        userId: userId,
        teamId: teamId,
      });
    },
    ["team", "user", user.data.id],
    {
      tags: [`team_user_${user.data.id}`],
      revalidate: 180,
    }
  )();
};

export const getBankConnectionsByTeamId = async () => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (teamId: string) => {
      return getBankConnectionsByTeamIdQuery(supabase as any, teamId);
    },
    ["bank_connections", teamId],
    {
      tags: [`bank_connections_${teamId}`],
      revalidate: 3600,
    },
  )(teamId);
};

export const getTeamBankAccounts = async (
  params?: Omit<GetTeamBankAccountsParams, "teamId">,
) => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (params?: Omit<GetTeamBankAccountsParams, "teamId">) => {
      return getTeamBankAccountsQuery(supabase as any, { ...params, teamId });
    },
    ["bank_accounts", teamId],
    {
      tags: [`bank_accounts_${teamId}`],
      revalidate: 180,
    },
  )(params);
};

export const getTeamMembers = async () => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (teamId: string) => {
      return getTeamMembersQuery(supabase as any, teamId);
    },
    ["team_members", teamId],
    {
      tags: [`team_members_${teamId}`],
      revalidate: 180,
    },
  )(teamId);
};

export const getSpending = async (
  params: Omit<GetSpendingParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (params: Omit<GetSpendingParams, "teamId">) => {
      return getSpendingQuery(supabase as any, { ...params, teamId });
    },
    ["spending", teamId],
    {
      tags: [`spending_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getBankAccountsCurrencies = async () => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getBankAccountsCurrenciesQuery(supabase as any, {
        teamId,
      });
    },
    ["bank_accounts_currencies", teamId],
    {
      tags: [`bank_accounts_currencies_${teamId}`],
      revalidate: 180,
    },
  )();
};

export const getMetrics = async (params: Omit<GetMetricsParams, "teamId">) => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (params: Omit<GetMetricsParams, "teamId">) => {
      return getMetricsQuery(supabase as any, { ...params, teamId });
    },
    ["metrics", teamId],
    {
      tags: [`metrics_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenses = async (params: GetExpensesQueryParams) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (params: GetExpensesQueryParams) => {
      return getExpensesQuery(supabase as any, { ...params, teamId });
    },
    ["expenses", teamId],
    {
      tags: [`expenses_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getTeams = async () => {
  const supabase = createClient();

  const user = await getUser();
  const userId = user?.data?.id as string;

  if (!userId) {
    return;
  }

  return unstable_cache(
    async () => {
      return getTeamsByUserIdQuery(supabase as any, userId);
    },
    ["teams", userId],
    {
      tags: [`teams_${userId}`],
      revalidate: 180,
    },
  )();
};

export const getTeamInvites = async () => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return;
  }

  return unstable_cache(
    async () => {
      return getTeamInvitesQuery(supabase as any, teamId);
    },
    ["team", "invites", teamId],
    {
      tags: [`team_invites_${teamId}`],
      revalidate: 180,
    },
  )();
};

export const getUserInvites = async () => {
  const supabase = createClient();

  const user = await getUser();
  const email = user?.data?.email as string;

  return unstable_cache(
    async () => {
      return getUserInvitesQuery(supabase as any, email);
    },
    ["user", "invites", email],
    {
      tags: [`user_invites_${email}`],
      revalidate: 180,
    },
  )();
};

export const getTrackerProjects = async (
  params: GetTrackerProjectsQueryParams,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  return unstable_cache(
    async (params: GetTrackerProjectsQueryParams) => {
      return getTrackerProjectsQuery(supabase as any, { ...params, teamId });
    },
    ["tracker_projects", teamId],
    {
      tags: [`tracker_projects_${teamId}`],
      revalidate: 180,
    },
  )(params);
};

export const getTrackerRecordsByRange = async (
  params: GetTrackerRecordsByRangeParams,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  return unstable_cache(
    async (params: GetTrackerRecordsByRangeParams) => {
      return getTrackerRecordsByRangeQuery(supabase as any, { ...params, teamId });
    },
    ["tracker_entries", teamId],
    {
      tags: [`tracker_entries_${teamId}`],
      revalidate: 180,
    },
  )(params);
};

export const getBurnRate = async (
  params: Omit<GetBurnRateQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  return unstable_cache(
    async (queryParams: Omit<GetBurnRateQueryParams, "teamId">) => {
      return getBurnRateQuery(supabase as any, { ...queryParams, teamId });
    },
    ["burn_rate", teamId],
    {
      tags: [`burn_rate_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getRunway = async (
  params: Omit<GetRunwayQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  return unstable_cache(
    async (queryParams: Omit<GetRunwayQueryParams, "teamId">) => {
      return getRunwayQuery(supabase as any, { ...queryParams, teamId });
    },
    ["runway", teamId],
    {
      tags: [`runway_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getCategories = async (
  params?: Omit<GetCategoriesParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  return unstable_cache(
    async (queryParams?: Omit<GetCategoriesParams, "teamId">) => {
      return getCategoriesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["transaction_categories", teamId],
    {
      tags: [`transaction_categories_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getTeamSettings = async () => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id as string;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getTeamSettingsQuery(supabase as any, teamId);
    },
    ["team_settings", teamId],
    {
      tags: [`team_settings_${teamId}`],
      revalidate: 3600,
    },
  )();
};

export const getMonthlyExpenses = async (
  params: Omit<GetMonthlyExpensesQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetMonthlyExpensesQueryParams, "teamId">) => {
      return getMonthlyExpensesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["monthly_expenses", teamId],
    {
      tags: [`monthly_expenses_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpensesByCategory = async (
  params: Omit<GetExpensesByCategoryQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpensesByCategoryQueryParams, "teamId">) => {
      return getExpensesByCategoryQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expenses_by_category", teamId],
    {
      tags: [`expenses_by_category_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpensesByLocation = async (
  params: Omit<GetExpenseBreakdownByLocationQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseBreakdownByLocationQueryParams, "teamId">) => {
      return getExpenseBreakdownByLocationQuery(supabase as any, {
        ...queryParams,
        teamId,
      });
    },
    ["expenses_by_location", teamId],
    {
      tags: [`expenses_by_location_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getDailyExpenses = async (
  params: Omit<GetDailyExpensesQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetDailyExpensesQueryParams, "teamId">) => {
      return getDailyExpensesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["daily_expenses", teamId],
    {
      tags: [`daily_expenses_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getTopExpenseCategories = async (
  params: Omit<GetTopExpenseCategoriesQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetTopExpenseCategoriesQueryParams, "teamId">) => {
      return getTopExpenseCategoriesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["top_expense_categories", teamId],
    {
      tags: [`top_expense_categories_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpensesByMerchant = async (
  params: Omit<GetExpensesByMerchantQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpensesByMerchantQueryParams, "teamId">) => {
      return getExpensesByMerchantQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expenses_by_merchant", teamId],
    {
      tags: [`expenses_by_merchant_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getWeeklyExpenseTrends = async (
  params: Omit<GetWeeklyExpenseTrendsQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetWeeklyExpenseTrendsQueryParams, "teamId">) => {
      return getWeeklyExpenseTrendsQuery(supabase as any, { ...queryParams, teamId });
    },
    ["weekly_expense_trends", teamId],
    {
      tags: [`weekly_expense_trends_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpensesByPaymentChannel = async (
  params: Omit<GetExpensesByPaymentChannelQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpensesByPaymentChannelQueryParams, "teamId">) => {
      return getExpensesByPaymentChannelQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expenses_by_payment_channel", teamId],
    {
      tags: [`expenses_by_payment_channel_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseComparison = async (
  params: Omit<GetExpenseComparisonQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseComparisonQueryParams, "teamId">) => {
      return getExpenseComparisonQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expense_anomalies", teamId],
    {
      tags: [`expense_comparison_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getRecurringExpenses = async (
  params: Omit<GetRecurringExpensesQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetRecurringExpensesQueryParams, "teamId">) => {
      return getRecurringExpensesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["recurring_expenses", teamId],
    {
      tags: [`recurring_expenses_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseDistributionByDayOfWeek = async (
  params: Omit<GetExpenseDistributionByDayOfWeekQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseDistributionByDayOfWeekQueryParams, "teamId">) => {
      return getExpenseDistributionByDayOfWeekQuery(supabase as any, {
        ...queryParams,
        teamId,
      });
    },
    ["expense_distribution_by_day_of_week", teamId],
    {
      tags: [`expense_distribution_by_day_of_week_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseGrowthRate = async (
  params: Omit<GetExpenseGrowthRateQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseGrowthRateQueryParams, "teamId">) => {
      return getExpenseGrowthRateQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expense_growth_rate", teamId],
    {
      tags: [`expense_growth_rate_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseForecast = async (
  params: Omit<GetExpenseForecastQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseForecastQueryParams, "teamId">) => {
      return getExpenseForecastQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expense_forecast", teamId],
    {
      tags: [`expense_forecast_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseAnomalies = async (
  params: Omit<GetExpenseAnomaliesQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseAnomaliesQueryParams, "teamId">) => {
      return getExpenseAnomaliesQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expense_anomalies", teamId],
    {
      tags: [`expense_anomalies_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getExpenseTrendsByTimeOfDay = async (
  params: Omit<GetExpenseTrendsByTimeOfDayQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetExpenseTrendsByTimeOfDayQueryParams, "teamId">) => {
      return getExpenseTrendsByTimeOfDayQuery(supabase as any, { ...queryParams, teamId });
    },
    ["expense_trends_by_time_of_day", teamId],
    {
      tags: [`expense_trends_by_time_of_day_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

export const getInventoryCostAnalysis = async (
  params: Omit<GetInventoryCostAnalysisQueryParams, "teamId">,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: Omit<GetInventoryCostAnalysisQueryParams, "teamId">) => {
      return getInventoryCostAnalysisQuery(supabase as any, { ...queryParams, teamId });
    },
    ["inventory_cost_analysis", teamId],
    {
      tags: [`inventory_cost_analysis_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};

/**
 * Cached query to get transactions by bank account ID
 * @param supabase - Supabase client
 * @param bankAccountId - Bank account ID
 * @param limit - Number of transactions to fetch (default: 5)
 * @returns Promise resolving to an array of transactions
 */
export const getCachedTransactionsByBankAccountId = async (
  params: GetTransactionsByBankAccountQueryParams,
) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async (queryParams: GetTransactionsByBankAccountQueryParams) => {
      return getTransactionsByBankAccountQuery(supabase as any, queryParams);
    },
    ["transactions_by_bank_account", teamId],
    {
      tags: [`transactions_by_bank_account_${teamId}`],
      revalidate: 3600,
    },
  )(params);
};
