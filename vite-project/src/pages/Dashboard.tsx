import Sidebar from "../components/SideBar"; // Adjust the path based on your file structure

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <h1 className="text-1xl font-semibold text-gray-400">
            Welcome back, Jane
          </h1>
        </div>

        {/* Add New Transaction Form */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Add New Transaction
          </h3>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-white">
                Transaction Name
              </label>
              <input
                type="text"
                placeholder="Enter transaction name"
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white">
                Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white">
                Category
              </label>
              <select className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-sm">
                <option>Food</option>
                <option>Transport</option>
                <option>Utilities</option>
                <option>Entertainment</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transform transition duration-200 hover:scale-105"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Recent Transactions
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between text-gray-600 dark:text-white">
              <span>Groceries</span>
              <span className="text-red-600 dark:text-red-400">- $50</span>
            </li>
            <li className="flex justify-between text-gray-600 dark:text-white">
              <span>Salary</span>
              <span className="text-green-600 dark:text-green-400">
                + $1000
              </span>
            </li>
            <li className="flex justify-between text-gray-600 dark:text-white">
              <span>Rent</span>
              <span className="text-red-600 dark:text-red-400">- $800</span>
            </li>
            {/* Add more transactions here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
