import React, { useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import DataTable from "./components/DataTable";
import { data } from "./utils/mock_data";
import DataContext from "./utils/DataContext";

const App = () => {
  const [transactionData, setTransactionData] = useState({
    data: data,
  });
  const [filterData, setFilterData] = useState({
    data: data,
  });
  return (
    <div className="m-5">
      <DataContext.Provider
        value={{
          transactionData: transactionData,
          setTransactionData:setTransactionData,
          filterData:filterData,
          setFilterData
        }}
      >
        <Filters />
        <DataTable />
      </DataContext.Provider>
    </div>
  );
};

export default App;
