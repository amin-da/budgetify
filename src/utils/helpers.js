import randomColor from "./randomColor";

// **** work with Local storage ***
//get item
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//get all items from local storgae
export const getALLMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
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

//delete item from local storage
export const deleteExpense = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

//create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    name,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    amount: +amount,
    budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// delete item
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

//calculate presents of Budgets
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

//Format currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

//format date
export const formatDateToLocalString = (epoch) => {
  return new Date(epoch).toLocaleString();
};
