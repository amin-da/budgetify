import { formatDateToLocalString, formatCurrency } from "@/utils/helpers";

const ExpenseTable = ({ expenses }) => {
    console.log('expenses',expenses);
  return (
    <div className="overflow-x-auto border-2 hover:ring-4 ring-offset-4 ring-success border-dashed rounded-xl transition-all duration-150">
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
    </div>
  );
};

export default ExpenseTable;
