import Sidebar from "../components/SideBar";
import { useState } from "react";

const Export = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [isFullYear, setIsFullYear] = useState(true);

  // This function clears the months when switching to full year
  const toggleFullYear = () => {
    if (!isFullYear) {
      setSelectedMonths([]); // Reset months if toggling from partial to full year
    }
    setIsFullYear(!isFullYear); // Toggle full year state
  };

  const toggleMonthSelection = (month: number) => {
    if (isFullYear) return; // Do not allow month selection if full year is selected

    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-900">Export Data</h1>
        <p className="text-gray-400">
          Easily download your transaction data for record-keeping or analysis.
        </p>

        {/* Year Selection */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Select Year
          </h3>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-sm"
          >
            {[...Array(5)].map((_, index) => {
              const year = new Date().getFullYear() - index;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Data Range Selection */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Choose Data Range
          </h3>
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isFullYear}
                onChange={toggleFullYear}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700 dark:text-white text-sm">
                Download full year
              </span>
            </label>
          </div>
          <div
            className={`mt-4 transition-opacity ${
              isFullYear ? "opacity-50 pointer-events-none" : "opacity-100"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Select months:
            </p>
            <div className="grid grid-cols-3 gap-2 mt-2 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, index) => (
                <button
                  key={index}
                  onClick={() => toggleMonthSelection(index + 1)}
                  disabled={isFullYear}
                  className={`p-3 rounded-lg text-center transition ${
                    selectedMonths.includes(index + 1)
                      ? "bg-indigo-600 text-white font-bold"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  } ${isFullYear ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-8">
          <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transform transition duration-200 hover:scale-105">
            Download Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
