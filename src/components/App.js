import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="container-fluid">

      <nav className="bg-success opacity-75">
        <h2 className=" text-dark">The Royal Bank of Flatiron</h2>
      </nav>
      <div></div>

      <div className="container-fluid">
      <AccountContainer />
      </div>
      

    </div>
  );
}

export default App;