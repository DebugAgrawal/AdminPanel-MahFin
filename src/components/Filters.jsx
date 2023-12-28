import React from "react";

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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between m-5 text-center">
        <div className="text-2xl font-bold">Total ({}) </div>
        <div>
          <input
            type="text"
            className="w-48 text-center font-bold rounded-lg placeholder-black border-2 border-black hover:placeholder-transparent focus:placeholder-transparent "
            placeholder="Search ID"
          ></input>
        </div>
      </div>
      <div className="flex flex-row  m-5 text-center">
        <div className="flex flex-col">
          <label htmlFor="From" className="text-left ml-4">
            From
          </label>
          <input
            className="mx-4 border-b-2 border-b-neutral-600"
            type="date"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="To" className="text-left ml-4">
            To
          </label>
          <input
            className="mx-4 border-b-2 border-b-neutral-600"
            type="date"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Branch" className="text-left ml-4">
            Branch
          </label>
          <select
            className="mx-4 border-b-2 w-32 my-1  border-b-neutral-600"
            type="select"
          >
            {branch.map((city)=>
              <option>{city}</option>
            )}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Type" className="text-left ml-4">
            Type
          </label>
          <select
            className="mx-4 border-b-2 w-32 my-1  border-b-neutral-600"
            type="select"
          >
            <option>Any</option>
            <option>Full</option>
            <option>Short</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Status" className="text-left ml-4">
            Status
          </label>
          <select
            className="mx-4 border-b-2 w-32  my-1 border-b-neutral-600"
            type="select"
          >
            <option>Any</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
