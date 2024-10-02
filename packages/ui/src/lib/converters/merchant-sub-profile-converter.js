"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantFinancialMetricsConverter = void 0;
class MerchantFinancialMetricsConverter {
    /**
     * Converts an array of MerchantMetricsFinancialSubProfile to an array of ChartDataPoint for a specific merchant.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects to convert.
     * @param merchant - The merchant to filter by.
     * @param spendingPeriod - The spending period to use ('spentLastWeek', 'spentLastMonth', etc.).
     * @returns An array of ChartDataPoint objects, sorted by date.
     */
    static convertToChartDataPoints(data, merchant, spendingPeriod) {
        return data
            .filter((item) => item.merchantName === merchant)
            .map((item) => {
            if (item.month !== undefined && item[spendingPeriod] !== undefined) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const date = new Date(year, month - 1, 1); // month is 0-indexed in Date constructor
                return {
                    date: date.toISOString().slice(0, 7), // Format as YYYY-MM
                    value: item[spendingPeriod],
                };
            }
            return null;
        })
            .filter((item) => item !== null)
            .sort((a, b) => a.date.localeCompare(b.date)); // Sort by date
    }
    /**
     * Retrieves a unique set of all merchants from the given data.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects to analyze.
     * @returns An array of unique merchant names, sorted alphabetically.
     */
    static getUniqueMerchants(data) {
        return Array.from(new Set(data
            .map((item) => item.merchantName)
            .filter((merchant) => merchant !== undefined))).sort();
    }
    /**
     * Computes statistics (highest, lowest, and average) for a given merchant.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param merchant - The merchant to filter by.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object containing the highest, lowest, and average value information.
     */
    static computeLocationStatistics(data, merchant, spendingPeriod) {
        const filteredData = data.filter((item) => item.merchantName === merchant);
        if (filteredData.length === 0) {
            throw new Error(`No data found for merchant: ${merchant}`);
        }
        let highest = { month: "", value: -Infinity };
        let lowest = { month: "", value: Infinity };
        let sum = 0;
        filteredData.forEach((item) => {
            if (item.month !== undefined && item[spendingPeriod] !== undefined) {
                const monthStr = this.formatMonth(item.month);
                const value = item[spendingPeriod];
                sum += value;
                if (value > highest.value) {
                    highest = { month: monthStr, value };
                }
                if (value < lowest.value) {
                    lowest = { month: monthStr, value };
                }
            }
        });
        const average = sum / filteredData.length;
        return { highest, lowest, average };
    }
    /**
     * Calculates the total spending per month across all merchants.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An array of objects containing the month and total spending.
     */
    static calculateMonthlyTotals(data, spendingPeriod) {
        const monthlyTotals = {};
        data.forEach((item) => {
            if (item.month !== undefined && item[spendingPeriod] !== undefined) {
                const monthStr = this.formatMonth(item.month);
                const value = item[spendingPeriod];
                if (monthlyTotals[monthStr]) {
                    monthlyTotals[monthStr] += value;
                }
                else {
                    monthlyTotals[monthStr] = value;
                }
            }
        });
        return Object.entries(monthlyTotals)
            .map(([month, total]) => ({ month, total }))
            .sort((a, b) => a.month.localeCompare(b.month));
    }
    /**
     * Computes comprehensive statistics for all merchants and spending periods.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @returns An object containing statistics for transaction count and each spending period.
     */
    static computeComprehensiveStatistics(data) {
        const cities = this.getUniqueMerchants(data);
        const result = {
            transactionCount: {},
            spendingPeriods: {
                spentLastWeek: {},
                spentLastTwoWeeks: {},
                spentLastMonth: {},
                spentLastSixMonths: {},
                spentLastYear: {},
                spentLastTwoYears: {},
            },
        };
        cities.forEach((merchant) => {
            const merchantData = data.filter((item) => item.merchantName === merchant);
            // Spending Period Statistics
            Object.keys(result.spendingPeriods).forEach((period) => {
                result.spendingPeriods[period][merchant] =
                    this.computeNumericFieldStats(merchantData, period);
            });
        });
        return result;
    }
    /**
     * Computes statistics for a numeric field in the given data.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param field - The field to compute statistics for.
     * @returns An object containing the total and average for the field.
     */
    static computeNumericFieldStats(data, field) {
        let total = 0;
        let count = 0;
        data.forEach((item) => {
            const value = item[field];
            if (typeof value === "number") {
                total += value;
                count++;
            }
            else if (typeof value === "string" && !isNaN(Number(value))) {
                total += Number(value);
                count++;
            }
        });
        return {
            total,
            average: count > 0 ? total / count : 0,
        };
    }
    /**
     * Generates a time series of spending for each merchant.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are arrays of ChartDataPoint.
     */
    static generateSpendingTimeSeries(data, spendingPeriod) {
        const cities = this.getUniqueMerchants(data);
        const result = {};
        cities.forEach((merchant) => {
            result[merchant] = this.convertToChartDataPoints(data, merchant, spendingPeriod);
        });
        return result;
    }
    /**
     * Ranks merchants based on total spending for a given period.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An array of objects containing merchant and total spending, sorted in descending order.
     */
    static rankMerchantsBySpending(data, spendingPeriod) {
        const merchants = this.getUniqueMerchants(data);
        const merchantTotals = merchants.map((merchant) => {
            const merchantData = data.filter((item) => item.merchantName === merchant);
            const totalSpending = merchantData.reduce((sum, item) => sum + (item[spendingPeriod] || 0), 0);
            return { merchant, totalSpending };
        });
        return merchantTotals.sort((a, b) => b.totalSpending - a.totalSpending);
    }
    /**
     * Calculates month-over-month growth rate for each merchant.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are arrays of growth rates.
     */
    static calculateMonthlyGrowthRate(data, spendingPeriod) {
        const cities = this.getUniqueMerchants(data);
        const result = {};
        cities.forEach((merchant) => {
            const merchantData = data
                .filter((item) => item.merchantName === merchant)
                .sort((a, b) => (a.month || 0) - (b.month || 0));
            const growthRates = merchantData.map((item, index) => {
                if (index === 0)
                    return { month: this.formatMonth(item.month || 0), growthRate: 0 };
                const currentSpending = item[spendingPeriod];
                const previousItem = merchantData[index - 1];
                const previousSpending = previousItem
                    ? previousItem[spendingPeriod]
                    : 0;
                const growthRate = ((currentSpending - previousSpending) / previousSpending) * 100;
                return { month: this.formatMonth(item.month || 0), growthRate };
            });
            result[merchant] = growthRates;
        });
        return result;
    }
    /**
     * Identifies the top performing merchants based on recent growth and total spending.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @param topN - Number of top merchants to return.
     * @returns An array of top performing merchants with their growth rates and total spending.
     */
    static identifyTopPerformingMerchants(data, spendingPeriod, topN = 5) {
        const growthRates = this.calculateMonthlyGrowthRate(data, spendingPeriod);
        const totalSpending = this.rankMerchantsBySpending(data, spendingPeriod);
        const combinedMetrics = Object.keys(growthRates).map((merchant) => {
            const recentGrowthRate = growthRates[merchant]?.[growthRates[merchant]?.length - 1]
                ?.growthRate ?? 0;
            const spending = totalSpending.find((item) => item.merchant === merchant)
                ?.totalSpending || 0;
            return { merchant, recentGrowthRate, totalSpending: spending };
        });
        return combinedMetrics
            .sort((a, b) => b.recentGrowthRate * b.totalSpending -
            a.recentGrowthRate * a.totalSpending)
            .slice(0, topN);
    }
    /**
     * Identifies seasonal trends in spending for each merchant.
     *
     * @param data - An array of MerchantMetricsFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are merchants and values are objects representing seasonal trends.
     */
    static identifySeasonalTrends(data, spendingPeriod) {
        const cities = this.getUniqueMerchants(data);
        const result = {};
        cities.forEach((merchant) => {
            const merchantData = data.filter((item) => item.merchantName === merchant);
            const seasonalSpending = {
                Spring: 0,
                Summer: 0,
                Autumn: 0,
                Winter: 0,
            };
            merchantData.forEach((item) => {
                const month = item.month !== undefined ? item.month % 100 : 0;
                const spending = typeof item[spendingPeriod] === "number" ? item[spendingPeriod] : 0;
                if (month >= 3 && month <= 5)
                    seasonalSpending.Spring += spending;
                else if (month >= 6 && month <= 8)
                    seasonalSpending.Summer += spending;
                else if (month >= 9 && month <= 11)
                    seasonalSpending.Autumn += spending;
                else
                    seasonalSpending.Winter += spending;
            });
            result[merchant] = seasonalSpending;
        });
        return result;
    }
    /**
     * Formats a month number (YYYYMM) to a string (YYYY-MM).
     *
     * @param month - The month number in YYYYMM format.
     * @returns A string in YYYY-MM format.
     *
     * @private
     */
    static formatMonth(month) {
        const year = Math.floor(month / 100);
        const monthNum = month % 100;
        return `${year}-${monthNum.toString().padStart(2, "0")}`;
    }
}
exports.MerchantFinancialMetricsConverter = MerchantFinancialMetricsConverter;
