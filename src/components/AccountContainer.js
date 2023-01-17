import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63c672a4dfc68e59d584aada" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction.record.transactions))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div className ="">
      <div className="">
      <div className="col-6"> <Search handleSearch={handleSearch} /></div>
      <div></div>
     </div>

      <div className="d-flex">
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
      </div>
    </div>
  );
}

export default AccountContainer;