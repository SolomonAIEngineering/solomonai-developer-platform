"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBankAccounts = createBankAccounts;
exports.updateBankConnection = updateBankConnection;
exports.createTransactions = createTransactions;
exports.updateTransaction = updateTransaction;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.updateTeam = updateTeam;
exports.updateUserTeamRole = updateUserTeamRole;
exports.deleteTeam = deleteTeam;
exports.deleteTeamMember = deleteTeamMember;
exports.deleteBankAccount = deleteBankAccount;
exports.updateBankAccount = updateBankAccount;
exports.updateSimilarTransactionsCategory = updateSimilarTransactionsCategory;
exports.updateSimilarTransactionsRecurring = updateSimilarTransactionsRecurring;
exports.createAttachments = createAttachments;
exports.deleteAttachment = deleteAttachment;
exports.createTeam = createTeam;
exports.leaveTeam = leaveTeam;
exports.joinTeamByInviteCode = joinTeamByInviteCode;
exports.updateInboxById = updateInboxById;
exports.createProject = createProject;
const date_fns_1 = require("date-fns");
const utils_1 = require("@v1/engine/src/providers/gocardless/utils");
const queries_1 = require("../queries");
async function createBankAccounts(supabase, { accounts, accessToken, enrollmentId, referenceId, teamId, userId, provider, }) {
    // Get first account to create a bank connection
    const account = accounts?.at(0);
    if (!account) {
        return;
    }
    // NOTE: GoCardLess connection expires after 90-180 days
    const expiresAt = provider === 'gocardless'
        ? (0, date_fns_1.addDays)(new Date(), (0, utils_1.getAccessValidForDays)({ institutionId: account.institution_id })).toDateString()
        : undefined;
    const bankConnection = await supabase
        .from('bank_connections')
        .upsert({
        institution_id: account.institution_id,
        name: account.bank_name,
        logo_url: account.logo_url,
        team_id: teamId,
        provider,
        access_token: accessToken,
        enrollment_id: enrollmentId,
        reference_id: referenceId,
        expires_at: expiresAt,
    }, {
        onConflict: 'institution_id, team_id',
    })
        .select()
        .single();
    return supabase
        .from('bank_accounts')
        .upsert(accounts.map((account) => ({
        account_id: account.account_id,
        bank_connection_id: bankConnection?.data?.id,
        team_id: teamId,
        created_by: userId,
        name: account.name,
        currency: account.currency,
        enabled: account.enabled,
        type: account.type,
        balance: account.balance ?? 0,
    }), {
        onConflict: 'account_id',
    }))
        .select();
}
// NOTE: Only GoCardLess needs to be updated
async function updateBankConnection(supabase, data) {
    const { id, referenceId } = data;
    return await supabase
        .from('bank_connections')
        .update({
        expires_at: (0, date_fns_1.addDays)(new Date(), (0, utils_1.getAccessValidForDays)({ institutionId: id })).toDateString(),
        reference_id: referenceId,
    })
        .eq('id', id)
        .select()
        .single();
}
async function createTransactions(supabase, data) {
    const { transactions, teamId } = data;
    return supabase.from('transactions').insert(transactions.map((transaction) => ({
        ...transaction,
        team_id: teamId,
    })));
}
async function updateTransaction(supabase, id, data) {
    return supabase
        .from('transactions')
        .update(data)
        .eq('id', id)
        .select('id, category, category_slug, team_id, name, status')
        .single();
}
async function updateUser(supabase, data) {
    const { data: { session }, } = await supabase.auth.getSession();
    if (!session?.user) {
        return;
    }
    return supabase
        .from('users')
        .update(data)
        .eq('id', session.user.id)
        .select()
        .single();
}
async function deleteUser(supabase) {
    const { data: { session }, } = await supabase.auth.getSession();
    if (!session?.user) {
        return;
    }
    await Promise.all([
        supabase.auth.admin.deleteUser(session.user.id),
        supabase.from('users').delete().eq('id', session.user.id),
        supabase.auth.signOut(),
    ]);
    return session.user.id;
}
async function updateTeam(supabase, data) {
    const { data: userData } = await (0, queries_1.getCurrentUserTeamQuery)(supabase);
    return supabase
        .from('teams')
        .update(data)
        .eq('id', userData?.team_id)
        .select('*')
        .maybeSingle();
}
async function updateUserTeamRole(supabase, params) {
    const { role, userId, teamId } = params;
    return supabase
        .from('users_on_team')
        .update({
        role,
    })
        .eq('user_id', userId)
        .eq('team_id', teamId)
        .select()
        .single();
}
async function deleteTeam(supabase, teamId) {
    return supabase.from('teams').delete().eq('id', teamId);
}
async function deleteTeamMember(supabase, params) {
    return supabase
        .from('users_on_team')
        .delete()
        .eq('user_id', params.userId)
        .eq('team_id', params.teamId)
        .select()
        .single();
}
async function deleteBankAccount(supabase, id) {
    return await supabase
        .from('bank_accounts')
        .delete()
        .eq('id', id)
        .select()
        .single();
}
async function updateBankAccount(supabase, params) {
    const { id, teamId, ...data } = params;
    return await supabase
        .from('bank_accounts')
        .update(data)
        .eq('id', id)
        .eq('team_id', teamId)
        .select()
        .single();
}
async function updateSimilarTransactionsCategory(supabase, params) {
    const { id, team_id } = params;
    const transaction = await supabase
        .from('transactions')
        .select('name, category_slug')
        .eq('id', id)
        .single();
    if (!transaction?.data?.category_slug) {
        return null;
    }
    return supabase
        .from('transactions')
        .update({ category_slug: transaction.data.category_slug })
        .textSearch('fts_vector', `'${transaction.data.name}'`)
        .eq('team_id', team_id)
        .select('id, team_id');
}
async function updateSimilarTransactionsRecurring(supabase, params) {
    const { id, team_id } = params;
    const transaction = await supabase
        .from('transactions')
        .select('name, recurring, frequency')
        .eq('id', id)
        .single();
    return supabase
        .from('transactions')
        .update({
        recurring: transaction.data?.recurring,
        frequency: transaction.data?.frequency,
    })
        .textSearch('fts_vector', `'${transaction.data.name}'`)
        .eq('team_id', team_id)
        .select('id, team_id');
}
async function createAttachments(supabase, attachments) {
    const { data: userData } = await (0, queries_1.getCurrentUserTeamQuery)(supabase);
    const { data } = await supabase
        .from('transaction_attachments')
        .insert(attachments.map((attachment) => ({
        ...attachment,
        team_id: userData?.team_id,
    })))
        .select();
    return data;
}
async function deleteAttachment(supabase, id) {
    const { data } = await supabase
        .from('transaction_attachments')
        .delete()
        .eq('id', id)
        .select('id, transaction_id, name, team_id')
        .single();
    return data;
}
async function createTeam(supabase, params) {
    const { data } = await supabase.rpc('create_team', {
        name: params.name,
    });
    return data;
}
async function leaveTeam(supabase, params) {
    await supabase
        .from('users')
        .update({
        team_id: null,
    })
        .eq('id', params.userId)
        .eq('team_id', params.teamId);
    return supabase
        .from('users_on_team')
        .delete()
        .eq('team_id', params.teamId)
        .eq('user_id', params.userId)
        .select()
        .single();
}
async function joinTeamByInviteCode(supabase, code) {
    const { data: { session }, } = await supabase.auth.getSession();
    if (!session?.user.email) {
        return;
    }
    const { data: inviteData } = await (0, queries_1.getUserInviteQuery)(supabase, {
        code,
        email: session.user.email,
    });
    if (inviteData) {
        // Add user team
        await supabase.from('users_on_team').insert({
            user_id: session.user.id,
            team_id: inviteData?.team_id,
            role: inviteData.role,
        });
        // Set current team
        const { data } = await supabase
            .from('users')
            .update({
            team_id: inviteData?.team_id,
        })
            .eq('id', session.user.id)
            .select()
            .single();
        // remove invite
        await supabase.from('user_invites').delete().eq('code', code);
        return data;
    }
    return null;
}
async function updateInboxById(supabase, params) {
    const { id, teamId, ...data } = params;
    const inbox = await supabase
        .from('inbox')
        .update(data)
        .eq('id', id)
        .select()
        .single();
    const { data: inboxData } = inbox;
    if (inboxData && params.transaction_id) {
        const { data: attachmentData } = await supabase
            .from('transaction_attachments')
            .insert({
            type: inboxData.content_type,
            path: inboxData.file_path,
            transaction_id: params.transaction_id,
            size: inboxData.size,
            name: inboxData.file_name,
            team_id: teamId,
        })
            .select()
            .single();
        if (attachmentData) {
            return supabase
                .from('inbox')
                .update({ attachment_id: attachmentData.id })
                .eq('id', params.id)
                .select()
                .single();
        }
    }
    else {
        if (inboxData?.attachment_id) {
            return supabase
                .from('transaction_attachments')
                .delete()
                .eq('id', inboxData.attachment_id);
        }
    }
    return inbox;
}
async function createProject(supabase, params) {
    const { data: userData } = await (0, queries_1.getCurrentUserTeamQuery)(supabase);
    return supabase
        .from('tracker_projects')
        .insert({
        ...params,
        team_id: userData?.team_id,
    })
        .select()
        .single();
}
