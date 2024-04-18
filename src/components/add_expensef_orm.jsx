import { useRef, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import FormWrapper from "../layouts/form_wrapper";

const AddExpenseForm = ({ budgets, showCategory = false }) => {
  const titleExpence =
    budgets.length === 1 && `${budgets.map((item) => item.name)}`;

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const fromRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      fromRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <FormWrapper title={`Add New `} titleExpence={titleExpence}>
      <fetcher.Form
        method="post"
        ref={fromRef}
        className="w-full flex flex-col gap-2 h-full justify-between mt-2"
      >
        <div className="w-full flex gap-2">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="newExpense" className="text-lg font-bold">
              Expense Name
            </label>
            <input
              required
              type="text"
              ref={focusRef}
              id="newExpense"
              name="newExpense"
              placeholder="Coffe"
              className="input input-bordered input-success w-full text-lg"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="newExpenseAmount" className="text-lg font-bold">
              Amount
            </label>
            <input
              required
              type="number"
              step={0.5}
              id="newExpenseAmount"
              name="newExpenseAmount"
              inputMode="decimal"
              placeholder="1$"
              className="input input-bordered input-success w-full text-lg"
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-2 ${
            budgets.length === 1 ? "hidden" : ""
          }`}
        >
          <label htmlFor="newExpenseBudget" className="text-lg font-bold">
            Budget Category
          </label>
          <select
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
            className="select select-success w-full text-lg"
          >
            {budgets
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((budget) => (
                <option key={budget.id} value={budget.id} className="text-lg">
                  {budget.name}
                </option>
              ))}
          </select>
        </div>

        <input type="hidden" name="_action" value="createExpense" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-success text-white text-lg"
        >
          Add Expense
        </button>
      </fetcher.Form>
    </FormWrapper>
  );
};

export default AddExpenseForm;
