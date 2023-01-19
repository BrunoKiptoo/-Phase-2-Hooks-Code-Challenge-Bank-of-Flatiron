import React from "react";

function Search({handleSearch}) {
  return (
    <div className="ui large fluid icon input m-3 ">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
}

export default Search;