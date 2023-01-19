import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63c672a4dfc68e59d584aada")
      .then((resp) => resp.json())
      .then(transaction => {
              setTransaction(transaction.record.transactions)
              setSearch(transaction.record.transactions)
            })
  }, [])

  // function handleSearch(e) {
  //   setTransaction(search.filter(transaction => {
  //     return(transaction.description.toLowerCase().includes(e.target.value))
  //   }))
  //   return transaction
  // }

  function handleSearch(e) {
    setTransaction(search.filter(transaction => {
      return(transaction.description.toLowerCase().includes(e.target.value.toLowerCase()))
    }))
  }


  // function handleFormUpdate(formData) {
    
  //   const updatedTable = [...transaction, formData]
  //   setTransaction(updatedTable)
  // }

  function handleFormUpdate(formData) {
    // create a new array with the form data added to it
    const updatedTable = [...transaction, formData];
    // update the transaction state with the new array
    setTransaction(updatedTable);
    // send the updated data to the API
    fetch("https://api.jsonbin.io/v3/b/63c672a4dfc68e59d584aada", {
      method: "POST",
      body: JSON.stringify(updatedTable),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

  

  return (
    <div className ="">
      <div className="">
      <div className="col-6"> <Search handleSearch={handleSearch} /></div>
      <div></div>
     </div>

      <div className="d-flex justify-content-around ">
      <AddTransactionForm handleFormUpdate ={handleFormUpdate} />
      <TransactionsList transactions={transaction} />
      </div>
    </div>
  );
}

export default AccountContainer;