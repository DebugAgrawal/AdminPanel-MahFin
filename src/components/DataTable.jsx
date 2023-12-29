import React, { useContext } from "react";
import { COLUMNS } from "../utils/columns";
import DataContext from "../utils/DataContext.js";

const DataTable = () => {
  const { transactionData, filterData, setFilterData, setTransactionData } =
    useContext(DataContext);
  const handleDelete = (ID) => {
    const data = transactionData.data?.filter((row) => row.id !== ID);
    setFilterData({ data: data });
    setTransactionData({data:data})
    console.log(data);
  };
  return (
    <div className="min-h-full m-5">
      <table className="min-w-full text-left text-md p-3">
        <thead key={"head"}>
          <tr className="px-3"  >
            {COLUMNS.map((heading, index) => (
              <td
                key={index}
                className="text-left border-b-2 py-4 ml-1 bg-gray-100"
              >
                {heading.Header}
              </td>
            ))}
          </tr >
        </thead>
        <tbody className="p-2 m-5" key={"body"}>
          {filterData.data?.map((row, index) => (
            <tr className="text-left border-b-2 ">
              <td className="font-bold py-2 pr-2 pl-1">{row.id}</td>
              <td>{row.date}</td>
              <td>{row.branch}</td>
              <td>{row.type}</td>
              <td>{row.amount}</td>
              <td>{row.bank}</td>
              <td>{row.requested_by}</td>
              <td>{row.status}</td>
              <td
                key={row.key}
                onClick={(e) => {
                  handleDelete(row.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
