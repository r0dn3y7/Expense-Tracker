import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;
