import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="container-fluid">

      <nav className="bg-success p-2 text-white">
        <h2 className=" p-3 mb-2  text-white font-weight-bold">The Royal Bank of Flatiron</h2>
      </nav>
      <div></div>

      <div className="container-fluid">
      <AccountContainer />
      </div>
      

    </div>
  );
}

export default App;