"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationFinancialMetricsConverter = void 0;
class LocationFinancialMetricsConverter {
    /**
     * Converts an array of LocationFinancialSubProfile to an array of ChartDataPoint for a specific city.
     *
     * @param data - An array of LocationFinancialSubProfile objects to convert.
     * @param city - The city to filter by.
     * @param spendingPeriod - The spending period to use ('spentLastWeek', 'spentLastMonth', etc.).
     * @returns An array of ChartDataPoint objects, sorted by date.
     */
    static convertToChartDataPoints(data, location, spendingPeriod) {
        console.log("hello", data.filter((item) => item.locationCity === location));
        return data
            .filter((item) => item.locationCity === location)
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
     * Retrieves a unique set of all cities from the given data.
     *
     * @param data - An array of LocationFinancialSubProfile objects to analyze.
     * @returns An array of unique city names, sorted alphabetically.
     */
    static getUniqueCities(data) {
        return Array.from(new Set(data
            .map((item) => item.locationCity)
            .filter((location) => location !== undefined && location.trim() !== ""))).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    }
    /**
     * Computes statistics (highest, lowest, and average) for a given city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param city - The city to filter by.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object containing the highest, lowest, and average value information.
     */
    static computeLocationStatistics(data, location, spendingPeriod) {
        const filteredData = data.filter((item) => item.locationCity === location);
        if (filteredData.length === 0) {
            throw new Error(`No data found for location: ${location}`);
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
     * Calculates the total spending per month across all cities.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
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
     * Computes comprehensive statistics for all cities and spending periods.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @returns An object containing statistics for transaction count and each spending period.
     */
    static computeComprehensiveStatistics(data) {
        const locations = this.getUniqueCities(data);
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
        locations.forEach((location) => {
            const locationData = data.filter((item) => item.locationCity === location);
            // Transaction Count Statistics
            result.transactionCount[location] = this.computeNumericFieldStats(locationData, "transactionCount");
            // Spending Period Statistics
            Object.keys(result.spendingPeriods).forEach((period) => {
                result.spendingPeriods[period][location] =
                    this.computeNumericFieldStats(locationData, period);
            });
        });
        return result;
    }
    /**
     * Computes statistics for a numeric field in the given data.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
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
     * Generates a time series of spending for each city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are arrays of ChartDataPoint.
     */
    static generateSpendingTimeSeries(data, spendingPeriod) {
        const locations = this.getUniqueCities(data);
        const result = {};
        locations.forEach((location) => {
            result[location] = this.convertToChartDataPoints(data, location, spendingPeriod);
        });
        return result;
    }
    /**
     * Ranks cities based on total spending for a given period.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An array of objects containing city and total spending, sorted in descending order.
     */
    static rankCitiesBySpending(data, spendingPeriod) {
        const locations = this.getUniqueCities(data);
        const locationTotals = locations.map((location) => {
            const locationData = data.filter((item) => item.locationCity === location);
            const totalSpending = locationData.reduce((sum, item) => sum + (item[spendingPeriod] || 0), 0);
            return { city: location, totalSpending };
        });
        return locationTotals.sort((a, b) => b.totalSpending - a.totalSpending);
    }
    /**
     * Calculates month-over-month growth rate for each city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are arrays of growth rates.
     */
    static calculateMonthlyGrowthRate(data, spendingPeriod) {
        const locations = this.getUniqueCities(data);
        const result = {};
        locations.forEach((location) => {
            const locationData = data
                .filter((item) => item.locationCity === location)
                .sort((a, b) => (a.month || 0) - (b.month || 0));
            const growthRates = locationData.map((item, index) => {
                if (index === 0)
                    return { month: this.formatMonth(item.month || 0), growthRate: 0 };
                const currentSpending = item[spendingPeriod];
                const previousItem = locationData[index - 1];
                const previousSpending = previousItem
                    ? previousItem[spendingPeriod]
                    : 0;
                const growthRate = previousSpending !== 0
                    ? ((currentSpending - previousSpending) / previousSpending) * 100
                    : 0;
                return { month: this.formatMonth(item.month || 0), growthRate };
            });
            result[location] = growthRates;
        });
        return result;
    }
    /**
     * Identifies the top performing cities based on recent growth and total spending.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @param topN - Number of top cities to return.
     * @returns An array of top performing cities with their growth rates and total spending.
     */
    static identifyTopPerformingLocations(data, spendingPeriod, topN = 5) {
        const growthRates = this.calculateMonthlyGrowthRate(data, spendingPeriod);
        const totalSpending = this.rankCitiesBySpending(data, spendingPeriod);
        const combinedMetrics = Object.keys(growthRates).map((location) => {
            const recentGrowthRate = growthRates[location]?.[growthRates[location]?.length - 1]
                ?.growthRate ?? 0;
            const spending = totalSpending.find((item) => item.city === location)?.totalSpending ||
                0;
            return { location, recentGrowthRate, totalSpending: spending };
        });
        return combinedMetrics
            .sort((a, b) => b.recentGrowthRate * b.totalSpending -
            a.recentGrowthRate * a.totalSpending)
            .slice(0, topN);
    }
    /**
     * Calculates the customer retention rate for each city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @returns An object where keys are cities and values are retention rates.
     */
    static calculateCustomerRetentionRate(data) {
        const cities = this.getUniqueCities(data);
        const result = {};
        cities.forEach((city) => {
            const cityData = data
                .filter((item) => item.locationCity === city)
                .sort((a, b) => (a.month || 0) - (b.month || 0));
            if (cityData.length < 2) {
                result[city] = 0;
                return;
            }
            const initialCustomers = parseInt(cityData[0]?.transactionCount || "0");
            const finalCustomers = parseInt(cityData[cityData.length - 1].transactionCount || "0");
            const retentionRate = (finalCustomers / initialCustomers) * 100;
            result[city] = retentionRate;
        });
        return result;
    }
    /**
     * Calculates the average transaction value for each city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are average transaction values.
     */
    static calculateAverageTransactionValue(data, spendingPeriod) {
        const cities = this.getUniqueCities(data);
        const result = {};
        cities.forEach((city) => {
            const cityData = data.filter((item) => item.locationCity === city);
            const totalSpending = cityData.reduce((sum, item) => sum + (item[spendingPeriod] || 0), 0);
            const totalTransactions = cityData.reduce((sum, item) => sum + parseInt(item.transactionCount || "0"), 0);
            result[city] =
                totalTransactions > 0 ? totalSpending / totalTransactions : 0;
        });
        return result;
    }
    /**
     * Identifies seasonal trends in spending for each city.
     *
     * @param data - An array of LocationFinancialSubProfile objects.
     * @param spendingPeriod - The spending period to analyze.
     * @returns An object where keys are cities and values are objects representing seasonal trends.
     */
    static identifySeasonalTrends(data, spendingPeriod) {
        const locations = this.getUniqueCities(data);
        const result = {};
        locations.forEach((location) => {
            const locationData = data.filter((item) => item.locationCity === location);
            const seasonalSpending = {
                Spring: 0,
                Summer: 0,
                Autumn: 0,
                Winter: 0,
            };
            locationData.forEach((item) => {
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
            result[location] = seasonalSpending;
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
exports.LocationFinancialMetricsConverter = LocationFinancialMetricsConverter;
