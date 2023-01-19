import React, { useState } from "react";

import Transaction from "./Transaction";

function AddTransactionForm({handleFormUpdate}) {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    handleFormUpdate({date, description, category, amount})
  }
  
  return (
    <div className="ui segment col-5  m-3 bg-success p-2 text-dark bg-opacity-50" >
      <form onSubmit={handleSubmit} className="ui form form-control form-control-lg ">
        <div className="inline fields ">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date"  className=" "/>
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" className=""/>
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" className=""/>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" className=""/>
        </div>
        
        <div>
      
        <button className="btn btn-dark btn btn-primary btn-sm alert alert-success row g-6 needs-validation " type="submit" color="red">
          SUBMIT
          <Transaction />
        </button>
        </div>
        <div>
          <img src="https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png" alt = "" class="img-fluid img-thumbnail rounded img-fluid img-thumbnail" style={{height:"30rem"}}></img>
        </div>
      </form>
    </div>
  );
}

export default AddTransactionForm;
