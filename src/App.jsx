import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseItem from "./Components/ExpenseItem";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Light Mumu",
      description: "Wednesday’s Lunch",
      category: "food",
      amount: 100,
      date: "2025-04-08",
  
    },
    {
      id: 2,
      name: "NYC Taxes",
      description: "power taxes",
      category: "utilities",
      amount: 2000,
      date: "2025-04-06",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: crypto.randomUUID() }]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="main-content">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;
