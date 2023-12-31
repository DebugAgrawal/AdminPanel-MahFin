import React, { useContext, useState } from "react";
import DataContext from "../utils/DataContext.js";

const DataTable = () => {
  const { transactionData, filterData, setFilterData, setTransactionData } =
    useContext(DataContext); // to access global level states
  const [sorting, setSorting] = useState(false); // for sorting by date
  const handleDelete = (ID) => {
    const data = transactionData.data?.filter((row) => row.id !== ID); // function to delete row
    setFilterData({ data: data });
    setTransactionData({ data: data });
    console.log(data);
  };

  const sortByDate = () => {
    setSorting(!sorting);
    const data = sorting
      ? [...filterData.data?.sort((a, b) => (a.date > b.date ? -1 : 1))]
      : [...filterData.data?.sort((a, b) => (b.date > a.date ? -1 : 1))];
    console.log(data);
    setFilterData({ data: data });
  };
  return (
    <div className="min-h-full m-7 mt-8">
      <table className="min-w-full text-left shadow-lg rounded-b-2xl text-md p-3 text-gray-500">
        <thead className="rounded-tr-xl">
          <tr className="font-bold text-sm  align-text-top">
            <td className="text-left border-b-2 py-2 pl-5 rounded-tl-2xl bg-gray-100">
              ID
            </td>
            <td className="text-left cursor-pointer border-b-2 py-4 ml-1  bg-gray-100">
              DATE{" "}
              <span
                title="Sort by date"
                className="font-light align-text-center text-xl"
                onClick={(e) => {
                  sortByDate();
                }}
              >
                ⥮
              </span>
            </td>
            <td className="text-left border-b-2 py-2   bg-gray-100">BRANCH</td>
            <td className="text-left border-b-2 py-2   bg-gray-100">TYPE</td>
            <td className="text-left border-b-2 py-2   bg-gray-100">
              AMOUNT
              <br />
              (IN RUPEES)
            </td>
            <td className="text-left border-b-2 py-2   bg-gray-100">BANK</td>
            <td className="text-left border-b-2 py-2 pl-8 bg-gray-100">
              REQUESTED BY
              <br />
              (EMPLOYEE CODE)
            </td>
            <td className="text-left border-b-2 py-2   bg-gray-100">STATUS</td>
            <td className="text-left border-b-2 rounded-tr-2xl py-2   bg-gray-100"></td>
          </tr>
        </thead>
        <tbody className=" ml-5 table-auto">
          {filterData.data?.map((row) => (
            <tr className="text-left border-b-2  ">
              <td className="font-bold text-black py-2 pr-2 pl-5">{row.id}</td>
              <td>{row.date}</td>
              <td>{row.branch}</td>
              <td>{row.type}</td>
              <td>{row.amount}</td>
              <td>{row.bank}</td>
              <td className="pl-8">
                {row.requested_by}
                <br />
                <span className="font-bold text-sm">{row.employee_code}</span>
              </td>
              <td>{row.status}</td>
              <td
                title="Delete"
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
