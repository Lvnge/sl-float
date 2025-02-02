import Sidebar from "../components/SideBar";

const Charts = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-900">Charts</h1>
        <p className="text-gray-400">
          Visualize your transaction data with interactive charts.
        </p>

        {/* Overview Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Overview
          </h3>
          <p className="text-gray-500 dark:text-gray-300">
            A quick glance at your financial trends.
          </p>
          <div className="mt-4 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">
            Placeholder for Overview Chart
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Category Breakdown
          </h3>
          <p className="text-gray-500 dark:text-gray-300">
            See how your expenses are distributed.
          </p>
          <div className="mt-4 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">
            Placeholder for Pie Chart
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Monthly Trends
          </h3>
          <p className="text-gray-500 dark:text-gray-300">
            Track your spending habits over time.
          </p>
          <div className="mt-4 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">
            Placeholder for Line Chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
