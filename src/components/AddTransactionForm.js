import React, { useState } from "react";

import Transaction from "./Transaction";
//import btn from "./button";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  function handleSubmit(e) {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <div></div>
        <button className="btn btn-dark btn btn-primary btn-sm alert alert-success row g-3 needs-validation" type="submit" color="red">
          SUBMIT
          <Transaction />
      
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;