import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main layouts
import MainLayout, { mainLayoutLoader } from "../src/layouts/mainLayout";
//Routes
import Dashboard, { dashboardLoader } from "../src/pages//dashboard";
import Error from "../src/pages//error";
import {
  dashboardAction,
  budgetPageAction,
  logoutAction,
  expensesPageAction,
  deleteBudget,
} from "../src/utils/actions";
import ExpensesPage, { expensesdLoader } from "../src/pages/expensesPage";
import BudgetPage, { budgetLoader } from "../src/pages//budgetPage";
import Test, { testAction, testLoader } from "../src/pages//test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: mainLayoutLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetPageAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesdLoader,
        action: expensesPageAction,
        errorElement: <Error />,
      },
      {
        path: "test",
        element: <Test />,
        loader: testLoader,
        action: testAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-dvh">
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
