import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(form);
    setForm({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Expense</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Expense name" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Expense description" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
