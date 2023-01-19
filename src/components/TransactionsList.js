import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <div className="col-6 mt-3 ">
    <table className="p-3 mb-2 bg-success p-2 text-white bg-opacity-75 text-white  table-striped  table table-bordered  " >
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header ">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {list}
      </tbody>
    </table>
    </div>
  );
}

export default TransactionsList;