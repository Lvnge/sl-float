import { auth } from "../services/firebaseConfig";
import { db } from "../services/firebaseConfig"; // Import Firestore
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  type: string; // Added type for transaction
}

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });
  const [categories, setCategories] = useState<
    { id: string; name: string; type: string }[]
  >([]);
  const [transactionType, setTransactionType] = useState<string>(""); // To store transaction type based on category

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const goToCategories = () => {
    navigate("/categories"); // Navigate to Categories
  };

  // Fetch categories for the dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categoriesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as { id: string; name: string; type: string }[];
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch transactions from Firestore
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Transaction[];
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  // Add a new transaction to Firestore
  const handleAddTransaction = async () => {
    try {
      const { amount, category, date, description } = newTransaction;
      if (!amount || !category || !date || !description) {
        alert("Please fill out all fields.");
        return;
      }
      await addDoc(collection(db, "transactions"), {
        amount: parseFloat(amount),
        category,
        date,
        description,
        type: transactionType,
        timestamp: serverTimestamp(),
      });
      setNewTransaction({
        amount: "",
        category: "",
        date: "",
        description: "",
      });
      setTransactionType(""); // Reset transaction type after adding
      alert("Transaction added successfully!");
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const transactionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];
      setTransactions(transactionsData);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Handle category change
  const handleCategoryChange = (selectedCategory: string) => {
    setNewTransaction({ ...newTransaction, category: selectedCategory });
    const selectedCategoryData = categories.find(
      (category) => category.id === selectedCategory
    );
    if (selectedCategoryData) {
      setTransactionType(selectedCategoryData.type); // Set the transaction type based on the category
    }
  };

  // Delete a transaction
  const handleDeleteTransaction = async (id: string) => {
    await deleteDoc(doc(db, "transactions", id));
    // Re-fetch transactions after deletion
    const querySnapshot = await getDocs(collection(db, "transactions"));
    const transactionsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Transaction[];
    setTransactions(transactionsData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold test">Dashboard</h1>
        <div className="space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={goToCategories}
          >
            Manage Categories
          </button>
        </div>
      </header>

      {/* Add Transaction Form */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, amount: e.target.value })
            }
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Category Dropdown with Type */}
          <select
            value={newTransaction.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.type})
              </option>
            ))}
            <option value="" onClick={goToCategories}>
              Add Category
            </option>
          </select>
          <input
            type="date"
            value={newTransaction.date}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, date: e.target.value })
            }
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Description"
            value={newTransaction.description}
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                description: e.target.value,
              })
            }
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          onClick={handleAddTransaction}
          className="bg-green-500 text-white mt-4 px-6 py-3 rounded w-full hover:bg-green-600 transition"
        >
          Add Transaction
        </button>
      </section>

      {/* Transactions List */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        {transactions.length > 0 ? (
          <ul className="space-y-4">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="p-4 border rounded flex justify-between items-start shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="text-lg font-medium">
                    <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Category:</strong> {transaction.category} (
                    {transaction.type})
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> {transaction.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Description:</strong> {transaction.description}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No transactions added yet.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
