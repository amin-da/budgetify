import { Link } from "react-router-dom";
import ExpenseItem from "./expense_item";

const ExpenseTable = ({ expenses, showBudget = true }) => {
  return (
    <div className="overflow-x-auto flex flex-col  hover:ring-4 ring-offset-4 ring-success rounded-xl transition-all duration-150">
      <table className="table table-zebra text-center rounded-xl  bg-amber-50">
        {/* head */}
        <thead className="text-lg">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date & Time</th>
            {showBudget ? <th>Budget</th> : null}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={item.id} className="text-center">
              <ExpenseItem
                expense={item}
                index={index}
                showBudget={showBudget}
              />
            </tr>
          ))}
        </tbody>
      </table>
      {expenses.length == 6 && (
        <Link
          to={"expenses"}
          className="btn btn-success self-center m-4 text-white text-base"
        >
          View all expenses
        </Link>
      )}
    </div>
  );
};

export default ExpenseTable;
