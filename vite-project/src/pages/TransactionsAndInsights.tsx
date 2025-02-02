import Sidebar from "../components/SideBar";
import { useState, useEffect } from "react";

// Define the type for a transaction
interface Transaction {
  date: string;
  description: string;
  amount: number;
  category: string;
}

// Sample transactions (move this outside the component)
const sampleTransactions: Transaction[] = [
  {
    date: "2025-01-15",
    description: "Groceries",
    amount: -50,
    category: "Groceries",
  },
  {
    date: "2025-01-20",
    description: "Salary",
    amount: 1200,
    category: "Income",
  },
  {
    date: "2025-01-25",
    description: "Electricity Bill",
    amount: -80,
    category: "Utilities",
  },
];

const TransactionsAndInsights = () => {
  const [selectedRange, setSelectedRange] = useState<string>("This month");
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  // Update filteredTransactions when selectedRange changes
  useEffect(() => {
    // Logic to filter transactions based on selectedRange
    // For now, we're just assigning the sample transactions as is
    setFilteredTransactions(sampleTransactions);

    // You can add more filtering logic based on the selectedRange if needed
  }, [selectedRange]); // Only rerun when selectedRange changes

  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(e.target.value);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          Transactions & Insights
        </h1>
        <p className="text-gray-400">
          View your transaction history and analyze your spending patterns over
          time.
        </p>

        {/* Filters Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Filter Transactions
          </h3>
          <select
            value={selectedRange}
            onChange={handleRangeChange}
            className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
          >
            <option value="This month">This month</option>
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Custom range">Custom range</option>
          </select>
        </div>

        {/* Transaction History Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Transaction History
          </h3>
          <div className="space-y-4">
            {filteredTransactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700"
              >
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {transaction.date}
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {transaction.description}
                  </p>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Spending Analytics
          </h3>
          {/* You can replace this with real charts (using libraries like Chart.js or Recharts) */}
          <div className="space-y-4">
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">
                Total Spending This Month
              </h4>
              <div className="text-xl font-semibold text-red-600 dark:text-red-400">
                $1300.00
              </div>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">
                Total Income This Month
              </h4>
              <div className="text-xl font-semibold text-green-600 dark:text-green-400">
                $2000.00
              </div>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">
                Spending Breakdown by Category
              </h4>
              {/* Placeholder for a pie chart or bar chart */}
              <div className="text-sm text-gray-500 dark:text-gray-300">
                Chart goes here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsAndInsights;
