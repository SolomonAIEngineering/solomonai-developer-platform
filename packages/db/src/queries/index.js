"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsByBankAccountQuery = exports.RecurringTransactionFrequency = void 0;
exports.recurringFrequencyToString = recurringFrequencyToString;
exports.getRecentTransactionsQuery = getRecentTransactionsQuery;
exports.getPercentageIncrease = getPercentageIncrease;
exports.getUserQuery = getUserQuery;
exports.getCurrentUserTeamQuery = getCurrentUserTeamQuery;
exports.getBankConnectionsByTeamIdQuery = getBankConnectionsByTeamIdQuery;
exports.getTeamBankAccountsQuery = getTeamBankAccountsQuery;
exports.getTeamMembersQuery = getTeamMembersQuery;
exports.getTeamUserQuery = getTeamUserQuery;
exports.getSpendingQuery = getSpendingQuery;
exports.getTransactionsQuery = getTransactionsQuery;
exports.getTransactionQuery = getTransactionQuery;
exports.getSimilarTransactions = getSimilarTransactions;
exports.getSimilarTransactionsDetailedQuery = getSimilarTransactionsDetailedQuery;
exports.getBankAccountsCurrenciesQuery = getBankAccountsCurrenciesQuery;
exports.getBurnRateQuery = getBurnRateQuery;
exports.getRunwayQuery = getRunwayQuery;
exports.getMetricsQuery = getMetricsQuery;
exports.getExpensesQuery = getExpensesQuery;
exports.getVaultQuery = getVaultQuery;
exports.getVaultActivityQuery = getVaultActivityQuery;
exports.getVaultRecursiveQuery = getVaultRecursiveQuery;
exports.getTeamsByUserIdQuery = getTeamsByUserIdQuery;
exports.getTeamInvitesQuery = getTeamInvitesQuery;
exports.getUserInvitesQuery = getUserInvitesQuery;
exports.getUserInviteQuery = getUserInviteQuery;
exports.getInboxQuery = getInboxQuery;
exports.getTrackerProjectsQuery = getTrackerProjectsQuery;
exports.getTrackerRecordsByRangeQuery = getTrackerRecordsByRangeQuery;
exports.getCategoriesQuery = getCategoriesQuery;
exports.getInboxSearchQuery = getInboxSearchQuery;
exports.getTeamSettingsQuery = getTeamSettingsQuery;
exports.getUserSubscriptionsQuery = getUserSubscriptionsQuery;
const utc_1 = require("@date-fns/utc");
const date_fns_1 = require("date-fns");
const zod_1 = require("zod");
var RecurringTransactionFrequency;
(function (RecurringTransactionFrequency) {
    RecurringTransactionFrequency["ALL"] = "all";
    RecurringTransactionFrequency["WEEKLY"] = "weekly";
    RecurringTransactionFrequency["MONTHLY"] = "monthly";
    RecurringTransactionFrequency["YEARLY"] = "yearly";
})(RecurringTransactionFrequency || (exports.RecurringTransactionFrequency = RecurringTransactionFrequency = {}));
/**
 * Converts a RecurringTransactionFrequency enum value to its string representation.
 *
 * @param frequency - The RecurringTransactionFrequency enum value to convert.
 * @returns The string representation of the frequency.
 */
function recurringFrequencyToString(frequency) {
    switch (frequency) {
        case RecurringTransactionFrequency.ALL:
            return 'all';
        case RecurringTransactionFrequency.WEEKLY:
            return 'weekly';
        case RecurringTransactionFrequency.MONTHLY:
            return 'monthly';
        case RecurringTransactionFrequency.YEARLY:
            return 'yearly';
        default:
            return 'all';
    }
}
/**
 * Fetches the most recent transactions for a given team, optionally filtered by account and recurring status.
 *
 * @param supabase - The Supabase client instance.
 * @param params - The parameters for the query.
 * @returns A promise that resolves to an object containing the recent transactions data.
 */
async function getRecentTransactionsQuery(supabase, params) {
    const { teamId, limit = 15, accountId, recurring } = params;
    /**
     * The columns to select from the transactions table.
     */
    const columns = [
        'id',
        'date',
        'amount',
        'currency',
        'method',
        'status',
        'note',
        'name',
        'description',
        'recurring',
        'category:transaction_categories(id, name, color, slug)',
        'bank_account:bank_accounts(id, name, currency, bank_connection:bank_connections(id, logo_url))',
    ];
    /**
     * Builds and executes the Supabase query.
     */
    const query = supabase
        .from('transactions')
        .select(columns.join(','))
        .eq('team_id', teamId)
        .order('date', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(limit);
    // Add account filter if accountId is provided
    if (accountId) {
        query.eq('bank_account_id', accountId);
    }
    // Add recurring filter if recurring is provided
    if (recurring) {
        if (recurring.includes(RecurringTransactionFrequency.ALL)) {
            query.eq('recurring', true);
        }
        else {
            query.in('frequency', [recurringFrequencyToString(recurring)]);
        }
    }
    const { data, error } = await query.throwOnError();
    /**
     * Processes the retrieved data.
     */
    return {
        data: data?.map((transaction) => ({
            ...transaction,
            category: transactionCategory(transaction),
        })),
    };
}
/**
 * Determines the category for a transaction.
 *
 * @param transaction - The transaction object.
 * @returns The category object for the transaction.
 */
function transactionCategory(transaction) {
    return (transaction?.category ?? {
        id: 'uncategorized',
        name: 'Uncategorized',
        color: '#606060',
    });
}
function getPercentageIncrease(a, b) {
    return a > 0 && b > 0 ? Math.abs(((a - b) / b) * 100).toFixed() : 0;
}
async function getUserQuery(supabase, userId) {
    return supabase
        .from('users')
        .select(`
      *,
      team:team_id(*)
    `)
        .eq('id', userId)
        .single()
        .throwOnError();
}
async function getCurrentUserTeamQuery(supabase) {
    const { data: { session }, } = await supabase.auth.getSession();
    if (!session?.user) {
        return;
    }
    return getUserQuery(supabase, session.user?.id);
}
async function getBankConnectionsByTeamIdQuery(supabase, teamId) {
    return supabase
        .from('bank_connections')
        .select('*')
        .eq('team_id', teamId)
        .throwOnError();
}
async function getTeamBankAccountsQuery(supabase, params) {
    const { teamId, enabled } = params;
    const query = supabase
        .from('bank_accounts')
        .select('*, bank:bank_connections(*)')
        .eq('team_id', teamId)
        .order('created_at', { ascending: true })
        .order('name', { ascending: false })
        .throwOnError();
    if (enabled) {
        query.eq('enabled', enabled);
    }
    return query;
}
async function getTeamMembersQuery(supabase, teamId) {
    const { data } = await supabase
        .from('users_on_team')
        .select(`
      id,
      role,
      team_id,
      user:users(id, full_name, avatar_url, email)
    `)
        .eq('team_id', teamId)
        .order('created_at')
        .throwOnError();
    return {
        data,
    };
}
async function getTeamUserQuery(supabase, params) {
    const { data } = await supabase
        .from('users_on_team')
        .select(`
      id,
      role,
      team_id,
      user:users(id, full_name, avatar_url, email)
    `)
        .eq('team_id', params.teamId)
        .eq('user_id', params.userId)
        .throwOnError()
        .single();
    return {
        data,
    };
}
async function getSpendingQuery(supabase, params) {
    return supabase.rpc('get_spending_v3', {
        team_id: params.teamId,
        date_from: params.from,
        date_to: params.to,
        base_currency: params.currency,
    });
}
async function getTransactionsQuery(supabase, params) {
    const { from = 0, to, filter, sort, teamId, searchQuery } = params;
    const { statuses, attachments, categories, type, accounts, start, end, assignees, recurring, } = filter || {};
    const columns = [
        'id',
        'date',
        'amount',
        'currency',
        'method',
        'status',
        'note',
        'manual',
        'recurring',
        'frequency',
        'name',
        'description',
        'assigned:assigned_id(*)',
        'category:transaction_categories(id, name, color, slug)',
        'bank_account:bank_accounts(id, name, currency, bank_connection:bank_connections(id, logo_url))',
        'attachments:transaction_attachments(id, name, size, path, type)',
        'vat:calculated_vat',
    ];
    const query = supabase
        .from('transactions')
        .select(columns.join(','), { count: 'exact' })
        .eq('team_id', teamId);
    if (sort) {
        const [column, value] = sort;
        const ascending = value === 'asc';
        if (column === 'attachment') {
            query.order('is_fulfilled', { ascending });
        }
        else if (column === 'assigned') {
            query.order('assigned(full_name)', { ascending });
        }
        else if (column === 'bank_account') {
            query.order('bank_account(name)', { ascending });
        }
        else if (column === 'category') {
            query.order('category(name)', { ascending });
        }
        else {
            query.order(column, { ascending });
        }
    }
    else {
        query
            .order('date', { ascending: false })
            .order('created_at', { ascending: false });
    }
    if (start && end) {
        const fromDate = new utc_1.UTCDate(start);
        const toDate = new utc_1.UTCDate(end);
        query.gte('date', fromDate.toISOString());
        query.lte('date', toDate.toISOString());
    }
    if (searchQuery) {
        if (!Number.isNaN(Number.parseInt(searchQuery))) {
            query.like('amount_text', `%${searchQuery}%`);
        }
        else {
            query.textSearch('fts_vector', `'${searchQuery}'`);
        }
    }
    if (statuses?.includes('fullfilled') || attachments === 'include') {
        query.eq('is_fulfilled', true);
    }
    if (statuses?.includes('unfulfilled') || attachments === 'exclude') {
        query.eq('is_fulfilled', false);
    }
    if (statuses?.includes('excluded')) {
        query.eq('status', 'excluded');
    }
    else {
        query.or('status.eq.pending,status.eq.posted,status.eq.completed');
    }
    if (categories) {
        const matchCategory = categories
            .map((category) => {
            if (category === 'uncategorized') {
                return 'category_slug.is.null';
            }
            return `category_slug.eq.${category}`;
        })
            .join(',');
        query.or(matchCategory);
    }
    if (recurring) {
        if (recurring.includes('all')) {
            query.eq('recurring', true);
        }
        else {
            query.in('frequency', recurring);
        }
    }
    if (type === 'expense') {
        query.lt('amount', 0);
        query.neq('category_slug', 'transfer');
    }
    if (type === 'income') {
        query.eq('category_slug', 'income');
    }
    if (accounts?.length) {
        query.in('bank_account_id', accounts);
    }
    if (assignees?.length) {
        query.in('assigned_id', assignees);
    }
    const { data, count } = await query.range(from, to);
    const totalAmount = data
        ?.reduce((acc, { amount, currency }) => {
        const existingCurrency = acc.find((item) => item.currency === currency);
        if (existingCurrency) {
            existingCurrency.amount += amount;
        }
        else {
            acc.push({ amount, currency });
        }
        return acc;
    }, [])
        .sort((a, b) => a?.amount - b?.amount);
    return {
        meta: {
            totalAmount,
            count,
        },
        data: data?.map((transaction) => ({
            ...transaction,
            category: transactionCategory(transaction),
        })),
    };
}
async function getTransactionQuery(supabase, id) {
    const columns = [
        '*',
        'assigned:assigned_id(*)',
        'category:category_slug(id, name, vat)',
        'attachments:transaction_attachments(*)',
        'bank_account:bank_accounts(id, name, currency, bank_connection:bank_connections(id, logo_url))',
        'vat:calculated_vat',
    ];
    const { data } = await supabase
        .from('transactions')
        .select(columns.join(','))
        .eq('id', id)
        .single()
        .throwOnError();
    return {
        ...data,
        category: transactionCategory(data),
    };
}
async function getSimilarTransactions(supabase, params) {
    const { name, teamId, categorySlug } = params;
    return supabase
        .from('transactions')
        .select('id, amount, team_id', { count: 'exact' })
        .eq('team_id', teamId)
        .neq('category_slug', categorySlug)
        .textSearch('fts_vector', `'${name}'`)
        .throwOnError();
}
// gets all the similar transactions with detailed information
async function getSimilarTransactionsDetailedQuery(supabase, params) {
    const { name, teamId, categorySlug } = params;
    return supabase
        .from('transactions')
        .select('*', { count: 'exact' })
        .eq('team_id', teamId)
        .neq('category_slug', categorySlug)
        .textSearch('fts_vector', `'${name}'`)
        .throwOnError();
}
async function getBankAccountsCurrenciesQuery(supabase, params) {
    return supabase.rpc('get_bank_account_currencies', {
        team_id: params.teamId,
    });
}
async function getBurnRateQuery(supabase, params) {
    const { teamId, from, to, currency } = params;
    const fromDate = new utc_1.UTCDate(from);
    const toDate = new utc_1.UTCDate(to);
    const { data } = await supabase.rpc('get_burn_rate_v3', {
        team_id: teamId,
        date_from: (0, date_fns_1.startOfMonth)(fromDate).toDateString(),
        date_to: (0, date_fns_1.endOfMonth)(toDate).toDateString(),
        base_currency: currency,
    });
    return {
        data,
        currency: data?.at(0)?.currency,
    };
}
async function getRunwayQuery(supabase, params) {
    const { teamId, from, to, currency } = params;
    const fromDate = new utc_1.UTCDate(from);
    const toDate = new utc_1.UTCDate(to);
    return supabase.rpc('get_runway_v3', {
        team_id: teamId,
        date_from: (0, date_fns_1.startOfMonth)(fromDate).toDateString(),
        date_to: (0, date_fns_1.endOfMonth)(toDate).toDateString(),
        base_currency: currency,
    });
}
async function getMetricsQuery(supabase, params) {
    const { teamId, from, to, type = 'profit', currency } = params;
    const rpc = type === 'profit' ? 'get_profit_v3' : 'get_revenue_v3';
    const fromDate = new utc_1.UTCDate(from);
    const toDate = new utc_1.UTCDate(to);
    const [{ data: prevData }, { data: currentData }] = await Promise.all([
        supabase.rpc(rpc, {
            team_id: teamId,
            date_from: (0, date_fns_1.subYears)((0, date_fns_1.startOfMonth)(fromDate), 1).toDateString(),
            date_to: (0, date_fns_1.subYears)((0, date_fns_1.endOfMonth)(toDate), 1).toDateString(),
            base_currency: currency,
        }),
        supabase.rpc(rpc, {
            team_id: teamId,
            date_from: (0, date_fns_1.startOfMonth)(fromDate).toDateString(),
            date_to: (0, date_fns_1.endOfMonth)(toDate).toDateString(),
            base_currency: currency,
        }),
    ]);
    const prevTotal = prevData?.reduce((value, item) => item.value + value, 0);
    const currentTotal = currentData?.reduce((value, item) => item.value + value, 0);
    const baseCurrency = currentData?.at(0)?.currency;
    return {
        summary: {
            currentTotal,
            prevTotal,
            currency: baseCurrency,
        },
        meta: {
            type,
            currency: baseCurrency,
        },
        result: currentData?.map((record, index) => {
            const prev = prevData?.at(index);
            return {
                date: record.date,
                precentage: {
                    value: getPercentageIncrease(Math.abs(prev?.value), Math.abs(record.value)),
                    status: record.value > prev?.value ? 'positive' : 'negative',
                },
                current: {
                    date: record.date,
                    value: record.value,
                    currency,
                },
                previous: {
                    date: prev?.date,
                    value: prev?.value,
                    currency,
                },
            };
        }),
    };
}
async function getExpensesQuery(supabase, params) {
    const { teamId, from, to, currency } = params;
    const fromDate = new utc_1.UTCDate(from);
    const toDate = new utc_1.UTCDate(to);
    const { data } = await supabase.rpc('get_expenses', {
        team_id: teamId,
        date_from: (0, date_fns_1.startOfMonth)(fromDate).toDateString(),
        date_to: (0, date_fns_1.endOfMonth)(toDate).toDateString(),
        base_currency: currency,
    });
    const averageExpense = data && data.length > 0
        ? data.reduce((sum, item) => sum + (item.value || 0), 0) / data.length
        : 0;
    return {
        summary: {
            averageExpense,
            currency: data?.at(0)?.currency,
        },
        meta: {
            type: 'expense',
            currency: data?.at(0)?.currency,
        },
        result: data.map((item) => ({
            ...item,
            value: item.value,
            recurring: item.recurring_value,
            total: item.value + item.recurring_value,
        })),
    };
}
async function getVaultQuery(supabase, params) {
    const { teamId, parentId, limit = 10000, searchQuery, filter } = params;
    const { start, end, owners, tags } = filter || {};
    const isSearch = (filter !== undefined &&
        Object.values(filter).some((value) => value !== undefined && value !== null)) ||
        Boolean(searchQuery);
    const query = supabase
        .from('documents')
        .select('id, name, path_tokens, created_at, team_id, metadata, tag, owner:owner_id(*)')
        .eq('team_id', teamId)
        .limit(limit)
        .order('created_at', { ascending: true });
    if (owners?.length) {
        query.in('owner_id', owners);
    }
    if (tags?.length) {
        query.in('tag', tags);
    }
    if (start && end) {
        query.gte('created_at', start);
        query.lte('created_at', end);
    }
    if (!isSearch) {
        // if no search query, we want to get the default folders
        if (parentId === 'inbox') {
            query
                .or(`parent_id.eq.${parentId || teamId},parent_id.eq.uploaded`)
                .not('path_tokens', 'cs', '{"uploaded",".folderPlaceholder"}');
        }
        else {
            query.or(`parent_id.eq.${parentId || teamId}`);
        }
    }
    if (searchQuery) {
        query.textSearch('fts', `'${searchQuery}'`);
    }
    const { data } = await query;
    const defaultFolders = parentId || isSearch
        ? []
        : [
            { name: 'exports', isFolder: true },
            { name: 'inbox', isFolder: true },
            { name: 'imports', isFolder: true },
            { name: 'transactions', isFolder: true },
        ];
    const filteredData = (data ?? []).map((item) => ({
        ...item,
        name: item.path_tokens?.at(-1) === '.folderPlaceholder'
            ? item.path_tokens?.at(-2)
            : item.path_tokens?.at(-1),
        isFolder: item.path_tokens?.at(-1) === '.folderPlaceholder',
    }));
    const mergedMap = new Map([...defaultFolders, ...filteredData].map((obj) => [obj.name, obj]));
    const mergedArray = Array.from(mergedMap.values());
    return {
        data: mergedArray,
    };
}
async function getVaultActivityQuery(supabase, teamId) {
    return supabase
        .from('documents')
        .select('id, name, metadata, path_tokens, tag, team_id')
        .eq('team_id', teamId)
        .limit(20)
        .not('name', 'ilike', '%.folderPlaceholder')
        .order('created_at', { ascending: false });
}
async function getVaultRecursiveQuery(supabase, params) {
    const { teamId, path, folder, limit = 10000 } = params;
    let basePath = teamId;
    if (path) {
        basePath = `${basePath}/${path}`;
    }
    if (folder) {
        basePath = `${basePath}/${folder}`;
    }
    const items = [];
    let folderContents = [];
    for (;;) {
        const { data } = await supabase.storage.from('vault').list(basePath);
        folderContents = folderContents.concat(data);
        // offset += limit;
        if ((data || []).length < limit) {
            break;
        }
    }
    const subfolders = folderContents?.filter((item) => item.id === null) ?? [];
    const folderItems = folderContents?.filter((item) => item.id !== null) ?? [];
    folderItems.forEach((item) => items.push({ ...item, basePath }));
    const subFolderContents = await Promise.all(subfolders.map((folder) => getVaultRecursiveQuery(supabase, {
        ...params,
        folder: decodeURIComponent(folder.name),
    })));
    subFolderContents.map((subfolderContent) => {
        subfolderContent.map((item) => items.push(item));
    });
    return items;
}
async function getTeamsByUserIdQuery(supabase, userId) {
    return supabase
        .from('users_on_team')
        .select(`
      id,
      role,
      team:team_id(*)`)
        .eq('user_id', userId)
        .throwOnError();
}
async function getTeamInvitesQuery(supabase, teamId) {
    return supabase
        .from('user_invites')
        .select('id, email, code, role, user:invited_by(*), team:team_id(*)')
        .eq('team_id', teamId)
        .throwOnError();
}
async function getUserInvitesQuery(supabase, email) {
    return supabase
        .from('user_invites')
        .select('id, email, code, role, user:invited_by(*), team:team_id(*)')
        .eq('email', email)
        .throwOnError();
}
async function getUserInviteQuery(supabase, params) {
    return supabase
        .from('user_invites')
        .select('*')
        .eq('code', params.code)
        .eq('email', params.email)
        .single();
}
async function getInboxQuery(supabase, params) {
    const { from = 0, to = 10, teamId, done, todo, searchQuery, ascending = false, } = params;
    const columns = [
        'id',
        'file_name',
        'file_path',
        'display_name',
        'transaction_id',
        'amount',
        'currency',
        'content_type',
        'date',
        'status',
        'forwarded_to',
        'created_at',
        'website',
        'description',
        'transaction:transactions(id, amount, currency, name, date)',
    ];
    const query = supabase
        .from('inbox')
        .select(columns.join(','))
        .eq('team_id', teamId)
        .order('created_at', { ascending })
        .neq('status', 'deleted');
    if (done) {
        query.not('transaction_id', 'is', null);
    }
    if (todo) {
        query.is('transaction_id', null);
    }
    if (searchQuery) {
        if (!Number.isNaN(Number.parseInt(searchQuery))) {
            query.like('inbox_amount_text', `%${searchQuery}%`);
        }
        else {
            query.textSearch('fts', `${searchQuery}:*`);
        }
    }
    const { data } = await query.range(from, to);
    return {
        data: data?.map((item) => {
            const pending = (0, date_fns_1.isWithinInterval)(new Date(), {
                start: new Date(item.created_at),
                end: (0, date_fns_1.addDays)(new Date(item.created_at), 45),
            });
            return {
                ...item,
                pending,
                review: !pending && !item.transaction_id,
            };
        }),
    };
}
async function getTrackerProjectsQuery(supabase, params) {
    const { from = 0, to = 10, filter, sort, teamId, search } = params;
    const { status } = filter || {};
    const query = supabase
        .from('tracker_projects')
        .select('*, total_duration', { count: 'exact' })
        .eq('team_id', teamId);
    if (status) {
        query.eq('status', status);
    }
    if (search?.query && search?.fuzzy) {
        query.ilike('name', `%${search.query}%`);
    }
    if (sort) {
        const [column, value] = sort;
        if (column === 'time') {
            query.order('total_duration', { ascending: value === 'asc' });
        }
        else {
            query.order(column, { ascending: value === 'asc' });
        }
    }
    else {
        query.order('created_at', { ascending: false });
    }
    const { data, count } = await query.range(from, to);
    return {
        meta: {
            count,
        },
        data,
    };
}
async function getTrackerRecordsByRangeQuery(supabase, params) {
    if (!params.teamId) {
        return null;
    }
    const query = supabase
        .from('tracker_entries')
        .select('*, assigned:assigned_id(id, full_name, avatar_url), project:project_id(id, name)')
        .eq('team_id', params.teamId)
        .gte('date', params.from)
        .lte('date', params.to)
        .order('created_at');
    if (params.projectId) {
        query.eq('project_id', params.projectId);
    }
    const { data } = await query;
    const result = data?.reduce((acc, item) => {
        const key = item.date;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
    const totalDuration = data?.reduce((duration, item) => item.duration + duration, 0);
    return {
        meta: {
            totalDuration,
            from: params.from,
            to: params.to,
        },
        data: result,
    };
}
async function getCategoriesQuery(supabase, params) {
    const { teamId, limit = 1000 } = params;
    return supabase
        .from('transaction_categories')
        .select('id, name, color, slug, description, system, vat')
        .eq('team_id', teamId)
        .order('created_at', { ascending: false })
        .range(0, limit);
}
async function getInboxSearchQuery(supabase, params) {
    const { teamId, q, limit = 10 } = params;
    const query = supabase
        .from('inbox')
        .select('id, created_at, file_name, amount, currency, file_path, content_type, date, display_name, size, description')
        .eq('team_id', teamId)
        .neq('status', 'deleted')
        .order('created_at', { ascending: true });
    if (!Number.isNaN(Number.parseInt(q))) {
        query.like('inbox_amount_text', `%${q}%`);
    }
    else {
        query.textSearch('fts', `${q}:*`);
    }
    const { data } = await query.range(0, limit);
    return data;
}
async function getTeamSettingsQuery(supabase, teamId) {
    return supabase.from('teams').select('*').eq('id', teamId).single();
}
// Schema and type for getTransactionsByBankAccountQuery
const getTransactionsByBankAccountQueryParamsSchema = zod_1.z.object({
    bankAccountId: zod_1.z.string(),
    limit: zod_1.z.number().optional().default(5),
});
const getTransactionsByBankAccountQuery = async (supabase, params) => {
    const { bankAccountId, limit } = getTransactionsByBankAccountQueryParamsSchema.parse(params);
    const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('bank_account_id', bankAccountId)
        .order('date', { ascending: false })
        .limit(limit);
    if (error) {
        console.error('Error fetching transactions:', error);
        return null;
    }
    return data;
};
exports.getTransactionsByBankAccountQuery = getTransactionsByBankAccountQuery;
/**
 * Fetches the subscription data for a given user.
 * @param supabase - The Supabase client.
 * @param userId - The ID of the user.
 * @returns The subscription data.
 */
async function getUserSubscriptionsQuery(supabase, userId) {
    return await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .throwOnError();
}
