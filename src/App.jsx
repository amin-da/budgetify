import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main layouts
import Main, { mainLoader } from "@/layouts/main";
//Routes
import Dashboard from "@/pages/dashboard";
import Error from "@/pages/error";
import { logoutAction } from "@/utils/actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
