import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Light Mumufo",
      description: "Wednesday's Lunch",
      category: "food",
      amount: 100,
      date: "2025-04-08"
    },
    {
      id: 2,
      name: "NYC taxes",
      description: "power taxes",
      category: "utilities",
      amount: 2000,
      date: "2025-04-05"
    },
    {
      id: 3,
      name: "Buy shoes",
      description: "Add to my shoe collection",
      category: "personal",
      amount: 3500,
      date: "2025-04-07"
    },
    {
      id: 4,
      name: "Buy book",
      description: "Add to my book collection",
      category: "growth",
      amount: 10000,
      date: "2025-04-07"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: expenses.length + 1
    };
    setExpenses([...expenses, newExpense]);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter expense name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Enter expense description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="main">
        <div className="header">
          <h1>Expense Tracker</h1>
          <input
            className="search-input"
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="expense-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
