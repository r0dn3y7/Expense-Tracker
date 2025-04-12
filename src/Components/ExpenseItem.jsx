function ExpenseItem({ expense }) {
    const { name, description, category, amount, date } = expense;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>${amount}</td>
        <td>{date}</td>
      </tr>
    );
  }
  
  export default ExpenseItem;
  