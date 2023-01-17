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
    <div className="ui segment col-5 bg-success m-3">
      <form onSubmit={handleSubmit} className="ui form form-control form-control-lg ">
        <div className="inline fields">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date"  className="border-success"/>
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" className="border-success"/>
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" className="border-success"/>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" className="border-success"/>
        </div>
        
        <div>
      
        <button className="btn btn-dark btn btn-primary btn-sm alert alert-success row g-6 needs-validation " type="submit" color="red">
          SUBMIT
          <Transaction />
        </button>
        </div>
        <div>
          <img src="https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png" class="img-fluid img-thumbnail rounded" style={{height:"30rem"}}></img>
        </div>
      </form>
    </div>
  );
}

export default AddTransactionForm;