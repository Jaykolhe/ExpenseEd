import Axios from "axios"; // Import axios
import React, { useState } from "react";
import "./css/expense-form.css"; // In ExpenseForm.js

function ExpenseForm({ user_id }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Axios.post(
      `http://localhost:8090/api/expenses?userID=${user_id}`,
      {
        description,
        amount,
        category,
      }
    )
      .then((response) => {
        setDescription("");
        setAmount(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="expense-form">
      <h1>Add Expense</h1>
      <form>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
