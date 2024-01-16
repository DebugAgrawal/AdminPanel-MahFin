import React, { useContext, useState, useEffect } from "react";
import DataContext from "../utils/DataContext.js";

const Filters = () => {
  const branch = [
    "Any",
    "Thane",
    "Navi Mumbai",
    "Mumbai",
    "Kurla",
    "Vile Parle",
    "Lower Parel",
    "Andheri",
    "Byculla",
  ];

  const { transactionData, filterData, setFilterData } =
    useContext(DataContext);
  const currentDate = "2023-12-30";
  const [searchID, setSearchID] = useState("");
  const [minDate, setMinDate] = useState("2022-10-10");
  const [maxDate, setMaxDate] = useState(currentDate);
  const [type, setType] = useState("");
  const [selectBranch, setSelectBranch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const data = transactionData.data?.filter(
      // setting up rules for filter
      (row) =>
        row.branch.includes(selectBranch) &&
        row.status.includes(status) &&
        row.type.includes(type) &&
        row.id.toString().includes(searchID) &&
        ((row.date >= minDate && row.date <= maxDate))
    );
    setFilterData({ data: data }); //updating the data for anychanges in filter
  }, [
    minDate,
    maxDate,
    searchID,
    transactionData,
    setFilterData,
    type,
    status,
    selectBranch,
  ]);
  return (
    <div className="flex flex-col mx-8  my-4 shadow-lg border-1 rounded-2xl">
      <div className="flex flex-row justify-between m-5 text-center">
        <div className="text-2xl p-2 font-bold">
          Total ({filterData.data?.length})
        </div>
        <div>
          <input
            type="text"
            className="w-48 text-center text-xl p-[6px] font-bold rounded-lg placeholder-black border-2 border-black hover:placeholder-transparent focus:placeholder-transparent "
            placeholder="Search ID"
            onChange={(e) => {
              setSearchID(e.target.value);
            }}
            value={searchID}
          ></input>
        </div>
      </div>
      <div className="flex flex-row  m-5 text-center">
        <div className="flex flex-col">
          <label htmlFor="From" className="text-left ml-5">
            From
          </label>
          <input
            className="mx-5 border-b-2 border-b-neutral-600"
            type="date"
            min="2023-05-01"
            value={minDate}
            max={currentDate} // as from date cannot exceed to date
            onChange={(e) => {
              setMinDate(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="To" className="text-left ml-5">
            To
          </label>
          <input
            className="mx-5 border-b-2 border-b-neutral-600"
            type="date"
            min={minDate} // settin up vlidation as To date >= From date
            value={maxDate}
            max={currentDate}
            onChange={(e) => {
              setMaxDate(e.target.value);
            }}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Branch" className="text-left ml-5">
            Branch
          </label>
          <select
            className="mx-5 border-b-2 w-32 my-1  border-b-neutral-600"
            type="select"
            onChange={(e) => {
              setSelectBranch(e.target.value);
            }}
          >
            {branch.map((city, index) => (
              <option value={city === "Any" ? "" : city} key={index}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Type" className="text-left ml-5">
            Type
          </label>
          <select
            className="mx-5 border-b-2 w-32 my-1  border-b-neutral-600"
            type="select"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="">Any</option>
            <option value="Full">Full</option>
            <option value="Short">Short</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Status" className="text-left ml-5">
            Status
          </label>
          <select
            className="mx-5 border-b-2 w-32  my-1 border-b-neutral-600"
            type="select"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Any</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
