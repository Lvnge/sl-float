import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Income");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(fetchedCategories);
    });

    return unsubscribe; // Cleanup listener
  }, []);

  const handleAddCategory = async () => {
    if (name.trim() === "") return;
    await addDoc(collection(db, "categories"), { name, type, color });
    setName("");
    setType("Income");
    setColor("#000000");
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteDoc(doc(db, "categories", id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Add New Category */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Category
        </button>
      </div>

      {/* List Categories */}
      <h2 className="text-xl font-semibold mb-2">Category List</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="p-2 border rounded flex justify-between items-center"
          >
            <div>
              <span
                className="inline-block w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: category.color }}
              ></span>
              {category.name} ({category.type})
            </div>
            <button
              onClick={() => handleDeleteCategory(category.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
