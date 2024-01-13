import { Form, Link } from "react-router-dom";
import { calculateSpentByBudget, formatCurrency } from "../utils/helpers";
import { useRef, useEffect, useState } from "react";

const BudgetItem = ({ budget, showDetail = true }) => {
  const { name, id, amount } = budget;
  const spentedBudget = calculateSpentByBudget(id);
  const presentSpentValue = Number((spentedBudget * 100) / amount).toFixed(1);
  const remainingValue = amount - spentedBudget;
  const presentRemainValue = Number((remainingValue * 100) / amount).toFixed(1);

  const [deleteBudget, setDeleteBudget] = useState(false);

  const modalRef = useRef();

  function SubmitForm(event) {
    if (!deleteBudget) {
      event.preventDefault();
      modalRef.current.showModal();
    }
  }

  useEffect(() => {
    setDeleteBudget(false);
  }, [deleteBudget]);

  return (
    <div
      className={`card w-96 text-black bg-success shadow-2xl border-2 hover:ring-4 ring-offset-1 ring-success
        transition-all duration-150}`}
    >
      <div className="card-body">
        <div className="card-actions ">
          {/* {showDelete ? (
            <Form>
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Form>
          ) : (
           ''
          )} */}

          <div className="flex w-full items-center justify-between font-bold text-2xl text-white">
            <small className="">{name}</small>
            <small>{formatCurrency(amount)} Budgeted</small>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col gap-4 w-[100%]">
            <div className="flex w-full justify-between">
              <div className="flex flex-col items-center text-center text-red-900 opacity-95 text-xl shadow-xl rounded-2xl p-2 font-bold">
                <div
                  className="radial-progress text-xl   "
                  style={{ "--value": presentSpentValue, "--thickness": "2px" }}
                  role="progressbar"
                >
                  {presentSpentValue} %
                </div>
                <small>Spent {formatCurrency(spentedBudget)}</small>
              </div>
              <div className="flex flex-col items-center text-center text-yellow-400 opacity-95 text-xl shadow-xl rounded-2xl antialiased  p-2 font-bold">
                <div
                  className="radial-progress text-xl "
                  style={{
                    "--value": presentRemainValue,
                    "--thickness": "2px",
                  }}
                  role="progressbar"
                >
                  {presentRemainValue} %
                </div>
                <small>Remaining {formatCurrency(remainingValue)}</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-4 ">
          {showDetail ? (
            <Link
              to={`/budget/${id}`}
              className="btn bg-success border-none shadow-xl text-white hover:text-black text-base"
            >
              <span>View Detailes</span>
            </Link>
          ) : (
            <Form
              className=""
              method="post"
              action="delete"
              onSubmit={SubmitForm}
            >
              <button className="btn bg-success hover:bg-error border-none shadow-xl text-white text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Delete Budget
              </button>
              <dialog id="my_modal_3" className="modal " ref={modalRef}>
                <div className="modal-box text-black">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Warning!</h3>
                  <p className="py-4 text-lg">
                    Are you sure to delete this budget?
                  </p>
                  <button
                    className="btn"
                    onClick={() => setDeleteBudget(true)}
                    type="submit"
                  >
                    Yes sure
                  </button>
                </div>
              </dialog>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
