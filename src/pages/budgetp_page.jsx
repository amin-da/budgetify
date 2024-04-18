import { useLoaderData } from "react-router-dom";
import { getALLMatchingItems } from "../utils/helpers";
import BudgetItem from "../components/budgetItem";
import AddExpenseForm from "../components/addExpenseForm";
import ExpenseTable from "../components/expenseTable";

//loader
export const budgetLoader = async ({ params }) => {
  const budget = await getALLMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getALLMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget your trying to find dosent exists!");
  }

  return { budget, expenses };
};

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();

  return (
    <div className="flex flex-col">
      <h2>
        <span className="text-success">{budget.name} </span>
        Overview
      </h2>
      <div className="flex justify-between  mt-8">
        <BudgetItem budget={budget} showDetail={false} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-8">
            <span className="text-success">{budget.name} </span>
            Expenses
          </h2>
          <ExpenseTable expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
