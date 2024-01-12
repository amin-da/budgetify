import { formatDateToLocalString, formatCurrency } from "@/utils/helpers";
import { Link, useLoaderData } from "react-router-dom";

const ExpenseTable = ({ expenses }) => {
    console.log(expenses);
  return (
    <div className="overflow-x-auto flex flex-col  hover:ring-4 ring-offset-4 ring-success rounded-xl transition-all duration-150">
      <table className="table table-zebra text-center rounded-xl  bg-amber-50">
        {/* head */}
        <thead className="text-lg">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{formatCurrency(item.amount)}</td>
              <td>{formatDateToLocalString(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {expenses.length == 6 && (
        <Link to={"expenses"} className="btn btn-success self-center m-4 text-white text-base">
          View all expenses
        </Link>
      )}
    </div>
  );
};

export default ExpenseTable;
