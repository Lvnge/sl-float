import Sidebar from "../components/SideBar";
import { useState } from "react";

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = event.target.files;
    const validFiles = Array.from(files).filter(
      (file) =>
        file.type === "text/csv" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel"
    );

    if (validFiles.length > 0) {
      setUploadedFiles([...uploadedFiles, ...validFiles]);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-900">Upload</h1>
        <p className="text-gray-400">
          Upload your transactions via Excel or CSV files.
        </p>

        {/* File Upload Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Upload a File
          </h3>
          <label className="mt-4 flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M12 18l4 0h-2.5v0h-3v0h-2.5z">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="1s"
                  dur="0.2s"
                  values="M12 18l4 0h-2.5v0h-3v0h-2.5z;M12 11l4 4h-2.5v3h-3v-3h-2.5Z"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  fill="currentColor"
                  fill-opacity="0"
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.8s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  />
                </path>
                <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                  />
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.6s"
                    to="1"
                  />
                </path>
              </g>
            </svg>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">
              Click to upload or drag and drop
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Only CSV and Excel files are supported
            </span>
            <input
              type="file"
              accept=".csv, .xls, .xlsx"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {/* Uploaded Files List */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Uploaded Files
          </h3>
          <ul className="mt-4 space-y-3">
            {uploadedFiles.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-300">
                No files uploaded yet.
              </p>
            ) : (
              uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-600 dark:text-white"
                >
                  <span>{file.name}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {(file.size / 1024).toFixed(2)} KB
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Upload;
