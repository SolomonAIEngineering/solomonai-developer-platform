"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDataConverter = void 0;
class CategoryDataConverter {
    /**
     * Converts an array of CategoryMonthlyIncome or CategoryMonthlyExpenditure to an array of ChartDataPoint for a specific category.
     *
     * @param data - An array of CategoryMonthlyIncome or CategoryMonthlyExpenditure objects to convert.
     * @param category - The personal finance category to filter by.
     * @param valueKey - The key to use for the value ('totalIncome' for income data, 'totalSpending' for expense data).
     * @returns An array of ChartDataPoint objects, sorted by date.
     *
     * @example
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     * ];
     * const dataPoints = CategoryDataConverter.convertToChartDataPoints(incomes, 'Salary', 'totalIncome');
     * // Returns: [{ date: '2023-01', value: 5000 }, { date: '2023-02', value: 5500 }]
     */
    static convertToChartDataPoints(data, category, valueKey) {
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
     * Converts an array of CategoryMonthlyIncome to an array of ChartDataPoint for a specific category.
     *
     * @param data - An array of CategoryMonthlyIncome objects to convert.
     * @param category - The personal finance category to filter by.
     * @returns An array of ChartDataPoint objects, sorted by date.
     *
     * @example
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     *   { month: 202301, personalFinanceCategoryPrimary: 'Investments', totalIncome: 1000 },
     * ];
     * const dataPoints = FinancialDataConverter.convertIncomeToChartDataPoints(incomes, 'Salary');
     * // Returns: [{ date: '2023-01', value: 5000 }, { date: '2023-02', value: 5500 }]
     */
    static convertIncomeToChartDataPoints(data, category) {
        return data
            .filter((item) => item.personalFinanceCategoryPrimary === category)
            .map((item) => {
            if (item.month && item.totalIncome !== undefined) {
                const year = Math.floor(item.month / 100);
                const month = item.month % 100;
                const date = new Date(year, month - 1, 1); // month is 0-indexed in Date constructor
                return {
                    date: date.toISOString().slice(0, 7), // Format as YYYY-MM
                    value: item.totalIncome,
                };
            }
            return null;
        })
            .filter((item) => item !== null)
            .sort((a, b) => a.date.localeCompare(b.date)); // Sort by date
    }
    /**
     * Retrieves a unique set of all personal finance income categories from the given income data.
     *
     * @param data - An array of CategoryMonthlyIncome objects to analyze.
     * @returns An array of unique income category names, sorted alphabetically.
     *
     * @example
     * const incomes = [
     *   { personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { personalFinanceCategoryPrimary: 'Investments', totalIncome: 1000 },
     *   { personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     * ];
     * const categories = FinancialDataConverter.getUniqueIncomeCategories(incomes);
     * // Returns: ['Investments', 'Salary']
     */
    static getUniqueIncomeCategories(data) {
        return Array.from(new Set(data
            .map((item) => item.personalFinanceCategoryPrimary)
            .filter((category) => category !== undefined))).sort();
    }
    /**
     * Retrieves a unique set of all personal finance categories from the given expenditure data.
     *
     * @param data - An array of CategoryMonthlyExpenditure objects to analyze.
     * @returns An array of unique category names, sorted alphabetically.
     *
     * @example
     * const expenditures = [
     *   { personalFinanceCategoryPrimary: 'Groceries', totalSpending: 500 },
     *   { personalFinanceCategoryPrimary: 'Entertainment', totalSpending: 200 },
     *   { personalFinanceCategoryPrimary: 'Groceries', totalSpending: 550 },
     * ];
     * const categories = FinancialDataConverter.getUniqueExpenseCategories(expenditures);
     * // Returns: ['Entertainment', 'Groceries']
     */
    static getUniqueExpenseCategories(data) {
        return Array.from(new Set(data
            .map((item) => item.personalFinanceCategoryPrimary)
            .filter((category) => category !== undefined))).sort();
    }
    /**
     * Computes statistics (highest, lowest, and average) for a given category in financial data.
     * This function can handle both income and expense data.
     *
     * @param data - An array of financial data objects (either CategoryMonthlyIncome or CategoryMonthlyExpenditure).
     * @param category - The personal finance category to filter by.
     * @param valueKey - The key to use for the value ('totalIncome' for income data, 'totalSpending' for expense data).
     * @returns An object containing the highest, lowest, and average value information.
     *
     * @example
     * const expenditures = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Groceries', totalSpending: 500 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Groceries', totalSpending: 550 },
     *   { month: 202303, personalFinanceCategoryPrimary: 'Groceries', totalSpending: 450 },
     * ];
     * const expenseStats = FinancialDataConverter.computeFinancialStatistics(expenditures, 'Groceries', 'totalSpending');
     *
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     *   { month: 202303, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5200 },
     * ];
     * const incomeStats = FinancialDataConverter.computeFinancialStatistics(incomes, 'Salary', 'totalIncome');
     */
    static computeFinancialStatistics(data, category, type) {
        const filteredData = data.filter((item) => item.personalFinanceCategoryPrimary === category);
        const valueKey = type === "income" ? "totalIncome" : "totalSpending";
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
     * @param data - An array of financial data objects (either CategoryMonthlyIncome or CategoryMonthlyExpenditure).
     * @param valueKey - The key to use for the value ('totalIncome' for income data, 'totalSpending' for expense data).
     * @returns An array of objects containing the month and total sum.
     *
     * @example
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202301, personalFinanceCategoryPrimary: 'Investments', totalIncome: 1000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     * ];
     * const monthlyTotals = FinancialDataConverter.calculateMonthlyTotals(incomes, 'totalIncome');
     * // Returns: [{ month: '2023-01', total: 6000 }, { month: '2023-02', total: 5500 }]
     */
    static calculateMonthlyTotals(data, type) {
        const monthlyTotals = {};
        const valueKey = type === "income" ? "totalIncome" : "totalSpending";
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
     * Calculates the sum per month for each category.
     *
     * @param data - An array of financial data objects (either CategoryMonthlyIncome or CategoryMonthlyExpenditure).
     * @param valueKey - The key to use for the value ('totalIncome' for income data, 'totalSpending' for expense data).
     * @returns An object where keys are categories and values are arrays of monthly totals.
     *
     * @example
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202301, personalFinanceCategoryPrimary: 'Investments', totalIncome: 1000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     * ];
     * const categoryTotals = FinancialDataConverter.calculateMonthlyCategoryTotals(incomes, 'totalIncome');
     * // Returns: {
     * //   'Salary': [{ month: '2023-01', total: 5000 }, { month: '2023-02', total: 5500 }],
     * //   'Investments': [{ month: '2023-01', total: 1000 }]
     * // }
     */
    static calculateMonthlyCategoryTotals(data, type) {
        const categoryTotals = {};
        const valueKey = type === "income" ? "totalIncome" : "totalSpending";
        data.forEach((item) => {
            if (item.month !== undefined &&
                item.personalFinanceCategoryPrimary &&
                item[valueKey] !== undefined) {
                const monthStr = this.formatMonth(item.month);
                const value = item[valueKey];
                const category = item.personalFinanceCategoryPrimary;
                if (!categoryTotals[category]) {
                    categoryTotals[category] = {};
                }
                if (categoryTotals[category][monthStr]) {
                    categoryTotals[category][monthStr] += value;
                }
                else {
                    categoryTotals[category][monthStr] = value;
                }
            }
        });
        return Object.fromEntries(Object.entries(categoryTotals).map(([category, monthlyData]) => [
            category,
            Object.entries(monthlyData)
                .map(([month, total]) => ({ month, total }))
                .sort((a, b) => a.month.localeCompare(b.month)),
        ]));
    }
    /**
     * Calculates the total sum for each category across all months.
     *
     * @param data - An array of financial data objects (either CategoryMonthlyIncome or CategoryMonthlyExpenditure).
     * @param valueKey - The key to use for the value ('totalIncome' for income data, 'totalSpending' for expense data).
     * @returns An object where keys are categories and values are the total sum across all months.
     *
     * @example
     * const incomes = [
     *   { month: 202301, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5000 },
     *   { month: 202302, personalFinanceCategoryPrimary: 'Salary', totalIncome: 5500 },
     *   { month: 202301, personalFinanceCategoryPrimary: 'Investments', totalIncome: 1000 },
     * ];
     * const categoryTotals = FinancialDataConverter.calculateCategoryTotals(incomes, 'totalIncome');
     * // Returns: { 'Salary': 10500, 'Investments': 1000 }
     */
    static calculateCategoryTotals(data, type) {
        const categoryTotals = {};
        const valueKey = type === "income" ? "totalIncome" : "totalSpending";
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
exports.CategoryDataConverter = CategoryDataConverter;
