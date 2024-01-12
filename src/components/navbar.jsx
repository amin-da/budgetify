import { Form, NavLink } from "react-router-dom";
import budget from "../../public/budget.png";
import { useEffect, useState, useRef } from "react";
// import trashIcon from "@/assets/icons/trash.svg";

const Navbar = ({ userName }) => {
  const [deleteUser, setDeleteUser] = useState(false);

  const modalRef = useRef();

  function SubmitForm(event) {
    if (!deleteUser) {
      event.preventDefault();
      modalRef.current.showModal();
    }
  }

  useEffect(() => {
    setDeleteUser(false);
  }, [deleteUser]);

  return (
    <nav className="w-[1280px] flex justify-between items-center m-8 text-success">
      <NavLink
        to="/"
        aria-label="go to home"
        className="flex items-center p-4 border-[3px] rounded-lg
         border-stone-50  hover:border-success transition duration-200 ease-linear "
      >
        <img src={budget} alt="" className="h-8" />
        <span className="text-2xl">Budgtefiy</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout" onSubmit={SubmitForm}>
          <button
            type="submit"
            className="btn btn-outline btn-error hover:!text-teal-50"
          >
            Delete Account
          </button>

          <dialog id="my_modal_3" className="modal" ref={modalRef}>
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
              <button className="btn" onClick={() => setDeleteUser(true)}>
                Yes sure
              </button>
            </div>
          </dialog>
        </Form>
      )}
    </nav>
  );
};

export default Navbar;
