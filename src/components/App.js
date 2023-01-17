import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="container-fluid">

      <nav className="navbar navbar-light bg-light">
        <h2 className="">The Royal Bank of Flatiron</h2>
      </nav>

      <div className="">
      <AccountContainer />
      </div>
      

    </div>
  );
}

export default App;