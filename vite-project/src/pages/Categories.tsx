import { useState } from "react";
import Sidebar from "../components/SideBar";

type Category = {
  name: string;
  budget: number;
  spent: number;
};

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([
    { name: "Groceries", budget: 500, spent: 300 },
    { name: "Rent", budget: 1000, spent: 1000 },
    { name: "Entertainment", budget: 200, spent: 150 },
  ]);

  const [newCategory, setNewCategory] = useState<{
    name: string;
    budget: number;
  }>({
    name: "",
    budget: 0,
  });

  const addCategory = () => {
    if (newCategory.name && newCategory.budget > 0) {
      setCategories([...categories, { ...newCategory, spent: 0 }]);
      setNewCategory({ name: "", budget: 0 });
    }
  };

  const handleCategoryChange = (
    index: number,
    key: keyof Category,
    value: string
  ) => {
    const updatedCategories = [...categories];

    if (key === "budget" || key === "spent") {
      updatedCategories[index][key] = Number(value);
    } else {
      updatedCategories[index][key] = value;
    }

    setCategories(updatedCategories);
  };

  const getBudgetStatus = (category: Category) => {
    if (category.spent > category.budget) return "Over Budget";
    if (category.spent === category.budget) return "On Budget";
    return "Under Budget";
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-3xl font-semibold text-gray-900">
            Categories & Budget management
          </h1>
          <h1 className="text-1xl font-semibold text-gray-400">
            Manage categories and keep track of your budget.
          </h1>
        </div>
        {/* Add New Category */}
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl text-gray-800 dark:text-white mb-4">
            Add New Category
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-600 dark:text-white"
              >
                Category Name
              </label>
              <input
                id="category-name"
                type="text"
                placeholder="Category Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="category-budget"
                className="block text-sm font-medium text-gray-600 dark:text-white"
              >
                Budget
              </label>
              <input
                id="category-budget"
                type="number"
                placeholder="Budget"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                value={newCategory.budget}
                onChange={(e) =>
                  setNewCategory({
                    ...newCategory,
                    budget: Number(e.target.value),
                  })
                }
              />
            </div>
            <button
              onClick={addCategory}
              className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Add Category
            </button>
          </div>
        </div>

        {/* Categories List */}
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl text-gray-800 dark:text-white mb-4">
            Your Categories
          </h2>
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-white"
              >
                <div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <div className="text-sm text-gray-500">
                    {getBudgetStatus(category)}
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-24">
                    <label
                      htmlFor={`budget-${category.name}`}
                      className="block text-sm font-medium text-gray-600 dark:text-white"
                    >
                      Budget
                    </label>
                    <input
                      id={`budget-${category.name}`}
                      type="number"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                      value={category.budget}
                      onChange={(e) =>
                        handleCategoryChange(index, "budget", e.target.value)
                      }
                    />
                  </div>
                  <div className="w-24">
                    <label
                      htmlFor={`spent-${category.name}`}
                      className="block text-sm font-medium text-gray-600 dark:text-white"
                    >
                      Spent
                    </label>
                    <input
                      id={`spent-${category.name}`}
                      type="number"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                      value={category.spent}
                      onChange={(e) =>
                        handleCategoryChange(index, "spent", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
                      <div
                        className="h-2 bg-indigo-500 rounded-full"
                        style={{
                          width: `${Math.min(
                            (category.spent / category.budget) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-center mt-1">
                      {category.spent} / {category.budget}{" "}
                      {category.spent > category.budget ? "Over" : "Remaining"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
