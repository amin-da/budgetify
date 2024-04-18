import { fetchData } from "../utils/helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/intro";
import AddBudgetForm from "../components/add_budget_form";
import AddExpenseForm from "../components/add_expensef_orm";
import BudgetItem from "../components/budget-item";
import ExpenseTable from "../components/expense_table";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  return (
    <div>
      {userName ? (
        <div className="h-full">
          <h1>
            Welcome back <span className="text-success">{userName}</span>
          </h1>
          <div>
            {budgets && budgets.length > 0 ? (
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2 className="my-4">Existing Budgets</h2>
                <div className="w-full flex flex-wrap gap-2 justify-between">
                  {budgets &&
                    budgets.map((item) => (
                      <BudgetItem key={item.id} budget={item} />
                    ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <div>
                    <h2 className="my-4">Recent Expenses</h2>
                    <ExpenseTable
                      expenses={expenses
                        .sort((a, b) => b.creatdAt - a.createdAt)
                        .slice(0, 6)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-2 font-semibold text-xl text-pretty">
                <p className="text-teal-600">
                  Managing your budget effectively is crucial for peace of mind.
                </p>
                <p className="font-bold">Create Budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
