import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleAddCategory = async () => {
    if (categoryName.trim()) {
      try {
        await addDoc(collection(db, "categories"), {
          name: categoryName,
        });
        setCategoryName("");
        alert("Category added successfully!");
      } catch (error) {
        console.error("Error adding category: ", error);
      }
    } else {
      alert("Category name cannot be empty.");
    }
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Add New Category</h3>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleAddCategory}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
