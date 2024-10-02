"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialMetricsTransactionConverter = exports.FinancialMetricsScatterPlotConverter = exports.FinancialExpenseAndIncomeMetricsConverter = void 0;
class FinancialExpenseAndIncomeMetricsConverter {
    /**
     * Converts an array of ExpenseMetrics or IncomeMetrics to an array of ChartDataPoint for a specific category.
     *
     * @param data - An array of ExpenseMetrics or IncomeMetrics objects to convert.
     * @param category - The personal finance category to filter by.
     * @param type - The type of data ('expense' or 'income').
     * @returns An array of ChartDataPoint objects, sorted by date.
     */
    static convertToChartDataPoints(data, category, type) {
        const valueKey = type === "expense" ? "totalExpenses" : "totalIncome";
        return data
            .filter((item) => item.personalFinanceCategoryPrimary === category)
            .map((item) => {
            if (item.month !== undefined && item[valueKey] !== undefined) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const date = new Date(year, month - 1, 1); // month is 0-indexed in Date constructor
                return {
                    date: date.toISOString().slice(0, 7), // Format as YYYY-MM
                    value: item[valueKey],
                };
            }
            return null;
        })
            .filter((item) => item !== null)
            .sort((a, b) => a.date.localeCompare(b.date)); // Sort by date
    }
    /**
     * Converts an array of ExpenseMetrics or IncomeMetrics to an array of ChartDataPoint.
     *
     * @template T - The type of financial metrics (ExpenseMetrics or IncomeMetrics)
     * @param {T[]} data - An array of ExpenseMetrics or IncomeMetrics objects to convert
     * @param {"expense" | "income"} type - The type of data ('expense' or 'income')
     * @returns {ChartDataPoint[]} An array of ChartDataPoint objects, sorted by date
     *
     * @example
     * const incomeData: IncomeMetrics[] = [...];
     * const chartData = convertToChartDataPoints(incomeData, "income");
     */
    static convertDataToChartDataPoints(data, type) {
        const valueKey = type === "expense" ? "totalExpenses" : "totalIncome";
        return data
            .map((item) => {
            if (item.month !== undefined && item[valueKey] !== undefined) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const date = new Date(year, month - 1, 1); // month is 0-indexed in Date constructor
                return {
                    date: date.toISOString().slice(0, 7), // Format as YYYY-MM
                    value: item[valueKey],
                };
            }
            return null;
        })
            .filter((item) => item !== null)
            .sort((a, b) => a.date.localeCompare(b.date)); // Sort by date
    }
    /**
     * Retrieves a unique set of all personal finance categories from the given data.
     *
     * @param data - An array of ExpenseMetrics or IncomeMetrics objects to analyze.
     * @returns An array of unique category names, sorted alphabetically.
     */
    static getUniqueCategories(data) {
        return Array.from(new Set(data
            .map((item) => item.personalFinanceCategoryPrimary)
            .filter((category) => category !== undefined))).sort();
    }
    /**
     * Computes statistics (highest, lowest, and average) for a given category in financial data.
     *
     * @param data - An array of financial data objects (either ExpenseMetrics or IncomeMetrics).
     * @param category - The personal finance category to filter by.
     * @param type - The type of data ('expense' or 'income').
     * @returns An object containing the highest, lowest, and average value information.
     */
    static computeFinancialStatistics(data, category, type) {
        const filteredData = data.filter((item) => item.personalFinanceCategoryPrimary === category);
        const valueKey = type === "expense" ? "totalExpenses" : "totalIncome";
        if (filteredData.length === 0) {
            throw new Error(`No data found for category: ${category}`);
        }
        let highest = { month: "", value: -Infinity };
        let lowest = { month: "", value: Infinity };
        let sum = 0;
        filteredData.forEach((item) => {
            if (item.month !== undefined && item[valueKey] !== undefined) {
                const monthStr = this.formatMonth(item.month);
                const value = item[valueKey];
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
     * Calculates the total sum per month across all categories.
     *
     * @param data - An array of financial data objects (either ExpenseMetrics or IncomeMetrics).
     * @param type - The type of data ('expense' or 'income').
     * @returns An array of objects containing the month and total sum.
     */
    static calculateMonthlyTotals(data, type) {
        const monthlyTotals = {};
        const valueKey = type === "expense" ? "totalExpenses" : "totalIncome";
        data.forEach((item) => {
            if (item.month !== undefined && item[valueKey] !== undefined) {
                const monthStr = this.formatMonth(item.month);
                const value = item[valueKey];
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
     * Calculates the total sum for each category across all months.
     *
     * @param data - An array of financial data objects (either ExpenseMetrics or IncomeMetrics).
     * @param type - The type of data ('expense' or 'income').
     * @returns An object where keys are categories and values are the total sum across all months.
     */
    static calculateCategoryTotals(data, type) {
        const categoryTotals = {};
        const valueKey = type === "expense" ? "totalExpenses" : "totalIncome";
        data.forEach((item) => {
            if (item.personalFinanceCategoryPrimary &&
                item[valueKey] !== undefined) {
                const value = item[valueKey];
                const category = item.personalFinanceCategoryPrimary;
                if (categoryTotals[category]) {
                    categoryTotals[category] += value;
                }
                else {
                    categoryTotals[category] = value;
                }
            }
        });
        return categoryTotals;
    }
    /**
     * Computes the total income for each year from the given income metrics.
     * @param data Array of IncomeMetrics
     * @returns An object with years as keys and total income as values
     */
    static computeTotalIncomeByYear(data) {
        const yearlyTotals = {};
        data.forEach((item) => {
            if (item.month && item.totalIncome) {
                const year = Math.floor(item.month / 100);
                yearlyTotals[year] = (yearlyTotals[year] || 0) + item.totalIncome;
            }
        });
        return yearlyTotals;
    }
    /**
     * Computes the total expenses for each year from the given expense metrics.
     * @param data Array of ExpenseMetrics
     * @returns An object with years as keys and total expenses as values
     */
    static computeTotalExpenseByYear(data) {
        const yearlyTotals = {};
        data.forEach((item) => {
            if (item.month && item.totalExpenses) {
                const year = Math.floor(item.month / 100);
                yearlyTotals[year] = (yearlyTotals[year] || 0) + item.totalExpenses;
            }
        });
        return yearlyTotals;
    }
    /**
     * Computes the average monthly income for each year from the given income metrics.
     * @param data Array of IncomeMetrics
     * @returns An object with years as keys and average monthly income as values
     */
    static computeAverageMonthlyIncomeByYear(data) {
        const yearlyTotals = this.computeTotalIncomeByYear(data);
        const monthCounts = {};
        data.forEach((item) => {
            if (item.month) {
                const year = Math.floor(item.month / 100);
                monthCounts[year] = (monthCounts[year] || 0) + 1;
            }
        });
        const averages = {};
        for (const year in yearlyTotals) {
            averages[year] =
                yearlyTotals[year] / (monthCounts[year] || 12); // Use 12 if no month count (full year)
        }
        return averages;
    }
    /**
     * Computes the average monthly expenses for each year from the given expense metrics.
     * @param data Array of ExpenseMetrics
     * @returns An object with years as keys and average monthly expenses as values
     */
    static computeAverageMonthlyExpenseByYear(data) {
        const yearlyTotals = this.computeTotalExpenseByYear(data);
        const monthCounts = {};
        data.forEach((item) => {
            if (item.month) {
                const year = Math.floor(item.month / 100);
                monthCounts[year] = (monthCounts[year] || 0) + 1;
            }
        });
        const averages = {};
        for (const year in yearlyTotals) {
            averages[year] =
                yearlyTotals[year] / (monthCounts[year] || 12); // Use 12 if no month count (full year)
        }
        return averages;
    }
    /**
     * Computes the total income for each month from the given income metrics.
     * @param data Array of IncomeMetrics
     * @returns An array of objects containing month, year, and total income, sorted by date
     */
    static computeMonthlyIncome(data) {
        const monthlyIncome = {};
        data.forEach((item) => {
            if (item.month && item.totalIncome) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const key = `${year}-${month.toString().padStart(2, "0")}`;
                if (!monthlyIncome[key]) {
                    monthlyIncome[key] = { year, totalIncome: 0 };
                }
                monthlyIncome[key].totalIncome += item.totalIncome;
            }
        });
        return Object.entries(monthlyIncome)
            .map(([key, value]) => ({
            month: new Date(value.year, parseInt(key.split("-")[1] ?? "0") - 1).toLocaleString("default", { month: "long" }),
            year: value.year,
            totalIncome: value.totalIncome,
        }))
            .sort((a, b) => {
            if (a.year !== b.year)
                return b.year - a.year;
            return (new Date(0, new Date(a.month + " 1").getMonth()).getTime() -
                new Date(0, new Date(b.month + " 1").getMonth()).getTime());
        });
    }
    /**
     * Computes the total expenses for each month from the given expense metrics.
     * @param data Array of ExpenseMetrics
     * @returns An array of objects containing month, year, and total expenses, sorted by date
     */
    static computeMonthlyExpense(data) {
        const monthlyExpense = {};
        data.forEach((item) => {
            if (item.month && item.totalExpenses) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const key = `${year}-${month.toString().padStart(2, "0")}`;
                if (!monthlyExpense[key]) {
                    monthlyExpense[key] = { year, totalExpense: 0 };
                }
                monthlyExpense[key].totalExpense += item.totalExpenses;
            }
        });
        return Object.entries(monthlyExpense)
            .map(([key, value]) => ({
            month: new Date(value.year, parseInt(key.split("-")[1] ?? "0") - 1).toLocaleString("default", { month: "long" }),
            year: value.year,
            totalExpense: value.totalExpense,
        }))
            .sort((a, b) => {
            if (a.year !== b.year)
                return b.year - a.year;
            return (new Date(0, new Date(a.month + " 1").getMonth()).getTime() -
                new Date(0, new Date(b.month + " 1").getMonth()).getTime());
        });
    }
    /**
     * Computes the amount spent per category from the given expense metrics.
     * @param expenseMetrics Array of ExpenseMetrics
     * @returns An array of objects with category and spent properties, sorted by spent amount in descending order
     */
    static computeExpenseByCategory(expenseMetrics) {
        const categoryTotals = {};
        expenseMetrics.forEach((metric) => {
            if (metric.personalFinanceCategoryPrimary && metric.totalExpenses) {
                if (!categoryTotals[metric.personalFinanceCategoryPrimary]) {
                    categoryTotals[metric.personalFinanceCategoryPrimary] = 0;
                }
                categoryTotals[metric.personalFinanceCategoryPrimary] =
                    (categoryTotals[metric.personalFinanceCategoryPrimary] || 0) +
                        metric.totalExpenses;
            }
        });
        return Object.entries(categoryTotals)
            .map(([category, value]) => ({ category, value }))
            .sort((a, b) => b.value - a.value);
    }
    /*
     * Computes income by category
     *
     * @private
     * @static
     * @param {number} month
     * @returns {string}
     *
     * @memberOf FinancialExpenseAndIncomeMetricsConverter
     * */
    static computeIncomeByCategory(incomeMetrics) {
        const categoryTotals = {};
        incomeMetrics.forEach((metric) => {
            if (metric.personalFinanceCategoryPrimary && metric.totalIncome) {
                if (!categoryTotals[metric.personalFinanceCategoryPrimary]) {
                    categoryTotals[metric.personalFinanceCategoryPrimary] = 0;
                }
                categoryTotals[metric.personalFinanceCategoryPrimary] =
                    (categoryTotals[metric.personalFinanceCategoryPrimary] || 0) +
                        metric.totalIncome;
            }
        });
        return Object.entries(categoryTotals)
            .map(([category, value]) => ({ category, value }))
            .sort((a, b) => b.value - a.value);
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
exports.FinancialExpenseAndIncomeMetricsConverter = FinancialExpenseAndIncomeMetricsConverter;
class FinancialMetricsScatterPlotConverter {
    /**
     * Converts FinancialMetrics data to scatter chart data points for transaction count vs month.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of ScatterChartDataPoint
     */
    static txnCountVsMonth(data, type) {
        return data
            .map((item) => {
            const monthValue = item.month || 0;
            const year = Math.floor(monthValue / 100);
            const month = monthValue % 100;
            const date = new Date(year, month - 1); // month is 0-indexed in Date constructor
            return {
                x: date.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                }),
                y: parseInt(item.transactionCount || "0", 10),
                category: item.personalFinanceCategoryPrimary,
            };
        })
            .sort((a, b) => {
            const dateA = new Date(a.x);
            const dateB = new Date(b.x);
            return dateA.getTime() - dateB.getTime();
        });
    }
    static txnCountVsMonthChartDataPoint(data, type) {
        return data
            .map((item) => {
            const monthValue = item.month || 0;
            const year = Math.floor(monthValue / 100);
            const month = monthValue % 100;
            const date = new Date(year, month - 1); // month is 0-indexed in Date constructor
            return {
                date: date.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                }),
                value: parseInt(item.transactionCount || "0", 10),
            };
        })
            .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
    }
    /**
     * Converts FinancialMetrics data to scatter chart data points for transaction count vs total amount.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of ScatterChartDataPoint
     */
    static txnCountVsTotalAmount(data, type) {
        const amountKey = type === "income" ? "totalIncome" : "totalExpenses";
        return data
            .map((item) => ({
            x: item[amountKey] || 0,
            y: parseInt(item.transactionCount || "0", 10),
            category: item.personalFinanceCategoryPrimary,
        }))
            .sort((a, b) => a.x - b.x);
    }
    /**
     * Converts FinancialMetrics data to scatter chart data points for total amount vs month.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of ScatterChartDataPoint
     */
    static totalAmountVsMonth(data, type) {
        const amountKey = type === "income" ? "totalIncome" : "totalExpenses";
        return data
            .map((item) => {
            const monthValue = item.month || 0;
            const year = Math.floor(monthValue / 100);
            const month = monthValue % 100;
            const date = new Date(year, month - 1); // month is 0-indexed in Date constructor
            return {
                x: date.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                }),
                y: item[amountKey] || 0,
                category: item.personalFinanceCategoryPrimary,
            };
        })
            .sort((a, b) => {
            const dateA = new Date(a.x);
            const dateB = new Date(b.x);
            return dateA.getTime() - dateB.getTime();
        });
    }
    static totalAmountVsMonthChartDataPoint(data, type) {
        const amountKey = type === "income" ? "totalIncome" : "totalExpenses";
        return data
            .map((item) => {
            const monthValue = item.month || 0;
            const year = Math.floor(monthValue / 100);
            const month = monthValue % 100;
            const date = new Date(year, month - 1); // month is 0-indexed in Date constructor
            return {
                date: date.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                }),
                value: item[amountKey] || 0,
            };
        })
            .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
    }
    /**
     * Converts FinancialMetrics data to scatter chart data points for total amount vs category.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of ScatterChartDataPoint
     */
    static totalAmountVsCategory(data, type) {
        const amountKey = type === "income" ? "totalIncome" : "totalExpenses";
        return data.map((item) => ({
            x: item.personalFinanceCategoryPrimary || "Unknown",
            y: item[amountKey] || 0,
            category: item.personalFinanceCategoryPrimary,
        }));
    }
    /**
     * Converts FinancialMetrics data to scatter chart data points for transaction count vs category.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of ScatterChartDataPoint
     */
    static txnCountVsCategory(data, type) {
        return data.map((item) => ({
            x: item.personalFinanceCategoryPrimary || "Unknown",
            y: parseInt(item.transactionCount || "0", 10),
            category: item.personalFinanceCategoryPrimary,
        }));
    }
    /**
     * Aggregates data by category for category-based scatter plots.
     * @param data Array of ScatterChartDataPoint
     * @returns Array of aggregated ScatterChartDataPoint
     */
    static aggregateByCategory(data) {
        const aggregatedData = {};
        data.forEach((item) => {
            if (!aggregatedData[item.x]) {
                aggregatedData[item.x] = { total: 0, count: 0 };
            }
            const categoryData = aggregatedData[item.x];
            if (categoryData) {
                categoryData.total += item.y;
                categoryData.count += 1;
            }
        });
        return Object.entries(aggregatedData).map(([category, { total, count }]) => ({
            x: category,
            y: total / count, // average
            category: category,
        }));
    }
    /**
     * Converts FinancialMetrics data to aggregated scatter chart data points for total amount vs category.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of aggregated ScatterChartDataPoint
     */
    static aggregatedTotalAmountVsCategory(data, type) {
        const scatterData = this.totalAmountVsCategory(data, type);
        return this.aggregateByCategory(scatterData);
    }
    /**
     * Converts FinancialMetrics data to aggregated scatter chart data points for transaction count vs category.
     * @param data Array of FinancialMetrics
     * @param type 'income' or 'expense'
     * @returns Array of aggregated ScatterChartDataPoint
     */
    static aggregatedTxnCountVsCategory(data, type) {
        const scatterData = this.txnCountVsCategory(data, type);
        return this.aggregateByCategory(scatterData);
    }
}
exports.FinancialMetricsScatterPlotConverter = FinancialMetricsScatterPlotConverter;
class FinancialMetricsTransactionConverter {
    /**
     * Breaks down transactions by month.
     * @param transactions Array of Transaction
     * @returns Object with month as key and array of transactions as value
     */
    static breakTransactionsByMonth(transactions) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const groupedTransactions = transactions.reduce((acc, transaction) => {
            if (transaction.currentDate) {
                const date = new Date(transaction.currentDate);
                const monthName = monthNames[date.getMonth()];
                const year = date.getFullYear();
                const key = `${monthName} ${year}`;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(transaction);
            }
            return acc;
        }, {});
        // Sort the keys (month-year combinations) in descending order
        const sortedKeys = Object.keys(groupedTransactions).sort((a, b) => {
            const dateA = new Date(a);
            const dateB = new Date(b);
            return dateB.getTime() - dateA.getTime();
        });
        // Create a new object with sorted keys
        const sortedGroupedTransactions = {};
        sortedKeys.forEach((key) => {
            if (groupedTransactions[key]) {
                sortedGroupedTransactions[key] = groupedTransactions[key];
            }
        });
        return sortedGroupedTransactions;
    }
}
exports.FinancialMetricsTransactionConverter = FinancialMetricsTransactionConverter;
