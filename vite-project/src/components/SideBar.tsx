import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className="flex flex-col w-64 bg-[#f0f4f8] dark:bg-gray-900 h-dvh border-r border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="flex items-center justify-start px-6 py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
          className="text-amber-400"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
          sl-float
        </h1>
        {/* Collapse Icon */}
        <div className="ml-auto cursor-pointer" onClick={toggleCollapse}>
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-gray-200"
            >
              <path
                fill="currentColor"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H9v14h9a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083.094L14.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1-.083-1.32l.083-.094l2-2a1 1 0 0 1 1.414 0"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-gray-200"
            >
              <path
                fill="currentColor"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm-3 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h9zM9.613 9.21l.094.083l2 2a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.497-1.32l.083-.094L9.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Navigation - Middle */}
      <div className="flex flex-col space-y-4 px-6 py-10 mt-6 flex-grow">
        {/* Main Links */}
        <Link
          to="/dashboard"
          className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800"
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"
              clip-rule="evenodd"
            />
          </svg>
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zM12 12a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1"
              clipRule="evenodd"
            />
          </svg>
          Upload
        </Link>

        <Link
          to="/charts"
          className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m3 17l6-6l4 4l8-8" />
              <path d="M17 7h4v4" />
            </g>
          </svg>
          Charts
        </Link>

        <Link
          to="/export"
          className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088m4.596 9.01a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293V9a1 1 0 1 0-2 0v3.586l-.293-.293a1 1 0 0 0-1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Export
        </Link>

        {/* More dropdown */}
        <div>
          <button
            className="flex items-center  py-2 px-3 gap-3 hover:text-indigo-500
            hover:cursor-pointer transition duration-300
            text-white  w-full text-left rounded-lg "
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`ml-auto transform transition-transform duration-300 ${
                isMoreOpen ? "rotate-180" : ""
              }`}
            >
              <path fill="currentColor" d="M7 10l5 5l5-5z" />
            </svg>
          </button>
          {isMoreOpen && (
            <div className=" flex flex-col mt-2  bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
              <Link
                to="/transactions"
                className="flex items-center
                justify-start text-gray-600
                hover:bg-gray-600 dark:text-white py-4 px-4 rounded-lg  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-white mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm14.5-3.2v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20t.15-.35t-.15-.35z"
                  />
                </svg>
                Transactions
              </Link>
              <Link
                to="/categories"
                className="flex items-center
                justify-start text-gray-600
                hover:bg-gray-600 dark:text-white py-4 px-4 rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-white mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M5.925 21q-.575 0-1.112-.4t-.713-.975q-.625-2.1-1.025-3.637t-.638-2.7t-.337-2.063T2 9.5q0-2.3 1.6-3.9T7.5 4h5q.675-.9 1.713-1.45T16.5 2q.625 0 1.063.438T18 3.5q0 .15-.038.3t-.087.275q-.1.275-.187.55t-.138.6L19.825 7.5H21q.425 0 .713.288T22 8.5v5.25q0 .325-.187.575t-.513.375l-2.125.7l-1.25 4.175q-.2.65-.725 1.038T16 21h-2q-.825 0-1.412-.587T12 19h-2q0 .825-.587 1.413T8 21zM16 11q.425 0 .713-.288T17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11m-4-2q.425 0 .713-.288T13 8t-.288-.712T12 7H9q-.425 0-.712.288T8 8t.288.713T9 9z"
                  />
                </svg>
                Categories
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Account and Log out - Bottom */}
      <div className="flex flex-col space-y-2 px-6 py-6">
        <Link
          to="/account"
          className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
              clipRule="evenodd"
            />
          </svg>
          Account
        </Link>

        <button className="flex items-center text-gray-600 hover:text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-5 gap-3 rounded-md transition duration-300 dark:text-white dark:hover:bg-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15 3.001a1 1 0 1 1 0 2H6v13a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-14a1 1 0 0 1 1-1zm1.707 5.293A1 1 0 0 0 15 9v2H9a1 1 0 1 0 0 2h6v2a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
