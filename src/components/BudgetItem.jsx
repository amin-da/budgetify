import { calculateSpentByBudget, formatCurrency } from "../utils/helpers";

const BudgetItem = ({ budget }) => {
  const { name, id, amount, color } = budget;
  const spentedBudget = calculateSpentByBudget(id);
  const presentSpentValue = Number((spentedBudget * 100) / amount).toFixed(1);
  const remainingValue = amount - spentedBudget;
  const presentRemainValue = Number((remainingValue * 100) / amount).toFixed(1);

  return (
    <div
      className={`card w-96 text-black bg-success shadow-2xl border-2 hover:ring-4 ring-offset-1 ring-success
    
        transition-all duration-150}`}
    >
      <div className="card-body">
        <div className="card-actions ">
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
          <div className="flex w-full items-center justify-between font-bold text-2xl text-white">
            <small className="">{name}</small>
            <small>{formatCurrency(amount)} Budgeted</small>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 ">
          <div className="flex flex-col gap-4 w-[95%]">
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
                {/* min 12 video 11 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
