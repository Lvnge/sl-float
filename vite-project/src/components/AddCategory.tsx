// src/components/AddCategory.tsx

import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
// src/components/AddCategory.tsx
import { useState } from "react"; // No need to import React if using React 17+

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
    }
  };

  return (
    <div>
      <h3>Add New Category</h3>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default AddCategory;
