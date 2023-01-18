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

  function handleSearch(e) {
    setTransaction(search.filter(transaction => {
      return(transaction.description.toLowerCase().includes(e.target.value))
    }))
    return transaction
  }

  function handleFormUpdate(formData) {
    
    const updatedTable = [...transaction, formData]
    setTransaction(updatedTable)
  }
  

  return (
    <div className ="">
      <div className="">
      <div className="col-6"> <Search handleForm={handleSearch} /></div>
      <div></div>
     </div>

      <div className="d-flex justify-content-around">
      <AddTransactionForm handleFormUpdate ={handleFormUpdate} />
      <TransactionsList transactions={transaction} />
      </div>
    </div>
  );
}

export default AccountContainer;