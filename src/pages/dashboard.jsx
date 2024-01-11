import { fetchData } from "@/utils/helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "@/components/intro";
import AddBudgetForm from "@/components/addBudgetForm";
import AddExpenseForm from "@/components/addExpenseForm";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <div>
      {userName ? (
        <div className="h-full">
          <h1>
            Welcome back <span className="text-success">{userName}</span>
          </h1>
          <div>
            {budgets && budgets.length > 0 ? (
              <div className="flex items-center justify-between">
                <AddBudgetForm />
                <AddExpenseForm budgets={budgets} />
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
