import { auth } from "../services/firebaseConfig";
import { db } from "../services/firebaseConfig"; // Import Firestore
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  const goToCategories = () => {
    navigate("/categories"); // Navigate to Categories
  };

  // Fetch transactions from Firestore
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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
        timestamp: serverTimestamp(),
      });
      setNewTransaction({
        amount: "",
        category: "",
        date: "",
        description: "",
      });
      alert("Transaction added successfully!");
      // Refresh transactions after adding a new one
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const transactionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(transactionsData);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        className="bg-red-500 text-white p-2 rounded mb-4"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={goToCategories}
      >
        Manage Categories
      </button>

      {/* Add Transaction Form */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Add Transaction</h2>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, amount: e.target.value })
            }
            className="block w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={newTransaction.category}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, category: e.target.value })
            }
            className="block w-full p-2 border rounded"
          />
          <input
            type="date"
            value={newTransaction.date}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, date: e.target.value })
            }
            className="block w-full p-2 border rounded"
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
            className="block w-full p-2 border rounded"
          ></textarea>
          <button
            onClick={handleAddTransaction}
            className="bg-green-500 text-white p-2 rounded w-full"
          >
            Add Transaction
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-xl font-semibold mb-2">Transactions</h2>
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="p-2 border rounded bg-gray-100">
              <p>
                <strong>Amount:</strong> {transaction.amount}
              </p>
              <p>
                <strong>Category:</strong> {transaction.category}
              </p>
              <p>
                <strong>Date:</strong> {transaction.date}
              </p>
              <p>
                <strong>Description:</strong> {transaction.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
