import React, { useState } from "react";
import Filters from "./components/Filters";
import DataTable from "./components/DataTable";
import { data } from "./utils/mock_data";
import DataContext from "./utils/DataContext";

const App = () => {
  const [transactionData, setTransactionData] = useState({
    // configuring mock data globally with help of global states
    data: data,
  });
  const [filterData, setFilterData] = useState({
    data: data,
  });
  return (
    <DataContext.Provider
      value={{
        transactionData: transactionData, // configuring ContextAPI with global states (mock_data)
        setTransactionData: setTransactionData, // providing setStates to mdoify global data by child components
        filterData: filterData,
        setFilterData,
      }}
    >
      <Filters />
      <DataTable />
    </DataContext.Provider>
  );
};

export default App;
