import { redirect } from "react-router-dom";
import { createBudget, deleteItem, createExpense } from "./helpers";
import { toast } from "react-toastify";

export const logoutAction = async () => {
  deleteItem({
    key: "userName",
  });
  toast.error("You Deleted acount");
  return redirect("/");
};

export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  //new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch (error) {
      throw new Error("There was problem for creating your account");
    }
  }
  //new Budget submission
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget Created!");
    } catch (error) {
      throw new Error("There was problem for creating your budget");
    }
  }

  //new Expense submission
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} Created!`);
    } catch (error) {
      throw new Error("There was problem for creating your expense");
    }
  }
};
