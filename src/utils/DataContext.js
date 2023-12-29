import { createContext } from "react";

const DataContext = createContext({
  transactionData: {
    data: [],
  },
  filterData:{
    data:[]
  }
});

export default DataContext;
