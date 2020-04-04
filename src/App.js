import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./Components/Layout/SearchBar";
import Logs from "./Components/Logs/Logs";

function App() {
  // Initialize Material Design
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
