import { fetchData } from "../utils/helpers";
import { useLoaderData } from "react-router-dom";
import ExpenseTable from "../components/expense_table";

//loader
export const expensesdLoader = () => {
  const expenses = fetchData("expenses");
  return { expenses };
};

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="flex h-full flex-col gap-8">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="flex h-full flex-col">
          <h2 className="mb-4">
            Recent Expenses{" "}
            <small className="text-base">({expenses.length} total)</small>
          </h2>
          <ExpenseTable expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses</p>
      )}
    </div>
  );
};

export default ExpensesPage;
