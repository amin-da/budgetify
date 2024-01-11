import randomColor from "./randomColor";

// **** work with Local storage ***
//get item
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//create budgets
export const createBudget = ({ name, amount }) => {
  const newItem = {
    name,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    amount: +amount,
    color: randomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
