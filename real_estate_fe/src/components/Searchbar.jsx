import "../Styles/Searchbar.css";
import React, { useState } from "react";
import data from "../assets/data.json";
import Fuse from "fuse.js";

export default function Searchbar({ setSearchResult }) {
  const [searchInput, setSearchInput] = useState("");
  const options = {
    keys: [
      {
        name: "address",
        weight: 0.5
      },
      {
        name: "zip",
        weight: 0.5
      },
      {
        name: "price",
        weight: 0.5
      },
      {
        name: "beds",
        weight: 0.5
      },
      {
        name: "bath",
        weight: 0.5
      },
      {
        name: "sqft",
        weight: 0.5
      },
      {
        name: "build",
        weight: 0.5
      },
      {
        name: "tags",
        weight: 1
      },
      {
        name: "description",
        weight: 0.8
      },
    ],
    threshold: 0,
    ignoreLocation:true,
    distance: 100,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 2,
    findAllMatches: true,
    shouldSort: true,
    ignoreFieldNorm: true, 
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      setSearchResult(data.homes);
    } else {
      const fus = new Fuse(data.homes, options);
      const searchResult = fus.search(searchInput);
      const res = searchResult.map((data) => {
        return data.item;
      });
      console.log(searchResult);
      setSearchResult(res);
    }
  };

  return (
    <div className="contain">
      <form className="max-w-lg mx-auto" onSubmit={(e) => onSearch(e)}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for City, Zip, Neighborhood, Features..."
            style={{ width: "500px" }}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />

          <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
