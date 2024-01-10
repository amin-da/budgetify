import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main layouts
import MainLayout, { mainLayoutLoader } from "@/layouts/mainLayout";
//Routes
import Dashboard from "@/pages/dashboard";
import Error from "@/pages/error";
import { logoutAction } from "@/utils/actions";
import { dashboardLoader } from "@/pages/dashboard";
import { dashboardAction } from "@/utils/actions";

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
      <ToastContainer />
    </div>
  );
}

export default App;
