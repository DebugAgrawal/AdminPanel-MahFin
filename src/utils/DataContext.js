import { createContext } from "react";

const DataContext = createContext({
  transactionData: {
    // To make global data accessible
    data: [],
  },
  filterData: {
    // To make filtered data available for all components
    data: [],
  },
});

export default DataContext;
