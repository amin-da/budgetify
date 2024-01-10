import { redirect } from "react-router-dom";
import { deleteItem } from "./helpers";
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
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcom ${formData.userName}`);
  } catch (error) {
    throw new Error("There was problem for creating your account");
  }
};
