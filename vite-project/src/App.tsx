import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./services/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Charts from "./pages/Charts";
import Export from "./pages/Export";
import Account from "./pages/Account";
import TransactionsAndInsights from "./pages/TransactionsAndInsights";
import CategoriesPage from "./pages/Categories";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false after auth state is resolved
    });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Default route to Dashboard or Login based on user */}
        <Route path="/" element={user ? <Dashboard /> : <Login />} />

        {/* Explicit routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route path="/upload" element={user ? <Upload /> : <Login />} />
        <Route path="/charts" element={user ? <Charts /> : <Login />} />
        <Route path="/export" element={user ? <Export /> : <Login />} />
        <Route path="/account" element={user ? <Account /> : <Login />} />
        <Route
          path="/transactions"
          element={user ? <TransactionsAndInsights /> : <Login />}
        />
        <Route
          path="/categories"
          element={user ? <CategoriesPage /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
