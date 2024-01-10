import { Form, NavLink } from "react-router-dom";
import budget from "../../public/budget.png";
// import trashIcon from "@/assets/icons/trash.svg";

const Navbar = ({ userName }) => {
  function SubmitForm(event) {
    if (!confirm("Delete User?")) {
      event.preventDefault();
    }
  }

  return (
    <nav className="w-[1280px] flex justify-between items-center m-8 text-success">
      <NavLink
        to="/"
        aria-label="go to home"
        className="flex items-center p-4 border-[3px] rounded-lg
         border-stone-50  hover:border-success transition ease-in-out delay-[50ms]  duration-100 "
      >
        <img src={budget} alt="" className="h-8" />
        <span>Budgtefiy</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout" onSubmit={SubmitForm}>
          <button
            type="submit"
            className="btn btn-outline btn-error hover:!text-teal-50"
          >
            Delete User
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Navbar;
