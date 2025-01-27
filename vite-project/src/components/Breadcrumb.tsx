// Breadcrumb.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center text-sm text-gray-600">
        {paths.length > 0 && (
          <li className="flex items-center">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Dashboard
            </Link>
            <span className="mx-2">/</span>
          </li>
        )}
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== paths.length - 1 ? (
              <>
                <Link
                  to={`/${path}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span className="text-gray-500 font-medium">
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
