import { useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import Breadcrumb from "../components/Breadcrumb";

interface Category {
  id: string;
  name: string;
  type: string; // "Income" or "Expense"
  color: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Income");
  const [color, setColor] = useState("#000000");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Predefined color palette
  const predefinedColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F6",
    "#FF8C33",
    "#8CFF33",
    "#33FFF6",
    "#F6FF33",
    "#8C33FF",
  ];

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Category, "id">),
      }));
      setCategories(fetchedCategories);
    });

    return unsubscribe; // Cleanup listener
  }, []);

  const handleAddCategory = async () => {
    if (name.trim() === "") {
      setError("Please provide a category name.");

      return;
    }

    setError(null);

    await addDoc(collection(db, "categories"), { name, type, color });
    setName("");
    setType("Income");
    setColor("#000000");
    setShowSuccessModal(true);
  };

  const handleDeleteCategory = async (id: string) => {
    await deleteDoc(doc(db, "categories", id));
  };

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  const handleSelectColor = (selectedColor: string) => {
    setColor(selectedColor);
    setShowColorPicker(false); // Hide the color picker after selecting a preselected color
  };

  const handleToggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Categories</h1>

      {/* Add New Category */}
      <div className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          {/* Color Picker Section */}
          <div className="space-y-4">
            <p className="font-medium">Pick a Color</p>
            <div className="flex space-x-2 mb-4 items-center p-2  rounded-md bg-gray-100">
              {" "}
              {/* Ensure vertical alignment */}
              {predefinedColors.map((predefinedColor) => (
                <div
                  key={predefinedColor}
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
                    predefinedColor === color ? "border-2 border-black-500" : ""
                  }`}
                  style={{ backgroundColor: predefinedColor }}
                  onClick={() => handleSelectColor(predefinedColor)}
                />
              ))}
              {/* Eye Dropper Button */}
              <button
                onClick={handleToggleColorPicker}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  className="m-0" // Center the SVG vertically
                >
                  <path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z" />
                </svg>
              </button>
              {/* Color Picker */}
              {showColorPicker && (
                <div className="mt-2 rounded-lg">
                  <ChromePicker color={color} onChange={handleColorChange} />
                </div>
              )}
            </div>
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleAddCategory}
            className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* List Categories */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Category List</h2>
        {categories.length > 0 ? (
          <ul className="space-y-4">
            {categories.map((category) => (
              <li
                key={category.id}
                className="p-4 border rounded flex justify-between items-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center">
                  <span
                    className="inline-block w-6 h-6 rounded-full mr-4"
                    style={{ backgroundColor: category.color }}
                  ></span>
                  <div>
                    <p className="text-lg font-medium">{category.name}</p>
                    <p className="text-sm text-gray-600">{category.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No categories added yet.</p>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl relative z-20 opacity-100 transform transition-all duration-300 scale-100">
            <h3 className="text-lg font-semibold">
              Category Added Successfully!
            </h3>
            <div className="mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
