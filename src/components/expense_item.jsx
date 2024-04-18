import {
  formatDateToLocalString,
  formatCurrency,
  getALLMatchingItems,
} from "../utils/helpers";
import { Link, useFetcher } from "react-router-dom";

const ExpenseItem = ({ expense, index, showBudget = true }) => {
  //
  const fetcher = useFetcher();

  const budget = getALLMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{index + 1}</td>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocalString(expense.createdAt)}</td>
      {showBudget ? (
        <td className="btn text-center border-success border-2 mt-3 w-[80%] hover:btn-success hover:text-white">
          <Link to={`/budget/${budget.id}`}>{budget?.name}</Link>
        </td>
      ) : null}

      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            className="btn text-center border-error border-2 w-[80%] hover:btn-error hover:text-white"
            type="submit"
            aria-label={`Delete ${expense.name} expense`}
          >
            Delete
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
