import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = ({
  placeHolder,
  name,
  handleSearch,
}) => {
  return (
    <div>
      <div className="relative">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg pl-10 pr-4 py-2.5 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          name={name}
          type="text"
          onChange={(e)=> handleSearch(e)}
          id={name}
          data-testid="search-icon"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoMdSearch className="text-gray-500 h-10" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
