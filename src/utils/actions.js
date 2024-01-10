import { redirect } from "react-router-dom";
import { deleteItem } from "./helpers";
import { toast } from "react-toastify";

export const logoutAction = async () => {
  deleteItem({
    key: "userName",
  });
  toast.success("You Deleted acount");
  return redirect("/");
};
