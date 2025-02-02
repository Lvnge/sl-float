import Sidebar from "../components/SideBar";
import { useState } from "react";

const Account = () => {
  const [email, setEmail] = useState<string>("user@example.com");
  const [password, setPassword] = useState<string>("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false);

  // Handle profile updates
  const handleProfileUpdate = () => {
    // logic to update user profile
    console.log("Profile updated");
  };

  // Handle password change
  const handlePasswordChange = () => {
    // logic to change password
    console.log("Password changed");
  };

  // Handle 2FA toggle
  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled((prev) => !prev);
    console.log(`2FA ${twoFactorEnabled ? "enabled" : "disabled"}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          Account Settings
        </h1>
        <p className="text-gray-400">
          Manage your profile, change your password, and configure additional
          settings.
        </p>

        {/* Profile Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Profile Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
              />
            </div>
            <button
              onClick={handleProfileUpdate}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md mt-4"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Change Password
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-200">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
              />
            </div>
            <button
              onClick={handlePasswordChange}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md mt-4"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            Two-Factor Authentication
          </h3>
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <span className="text-gray-700 dark:text-white text-sm">
              Enable two-factor authentication
            </span>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={handleTwoFactorToggle}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
