import React, { useState } from "react";
import Navbar from "./components/NavbarComponent";
import Filterbar from "./components/Filterbar";
import Properties from "./components/Properties";

function App() {
  const [filterData, setFilterData] = useState("");
  const saveFiltersHandler = (filterInputs) => {
    setFilterData(filterInputs);
    console.log(filterData);
  };

  return (
    <div>
      <div className="mb-5">
        <Navbar></Navbar>
      </div>
      <div className="mb-5">
        <Filterbar onSubmitFilterForm={saveFiltersHandler}></Filterbar>
      </div>
      <div className="mb-5">
        <Properties filters={filterData}></Properties>
      </div>
    </div>
  );
}

export default App;
