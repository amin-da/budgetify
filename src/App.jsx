import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main layouts
import MainLayout, { mainLayoutLoader } from "@/layouts/mainLayout";
//Routes
import Dashboard, { dashboardLoader } from "@/pages/dashboard";
import Error from "@/pages/error";
import { logoutAction } from "@/utils/actions";
import { dashboardAction } from "@/utils/actions";
import ExpensesPage, { expensesdLoader } from "@/pages/ExpensesPage";

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
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesdLoader,
      },
      {
        path: "logout",
        action: logoutAction,
        errorElement: <Error />,
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
