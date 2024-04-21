import { Typography } from "@material-tailwind/react";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import Paginate from "./Paginate";
import "../Styles/Searchbar.css";

export default function SearchResult({searchResult}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (selected) => {
    setCurrentPage(selected);
    pageData();
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      pageData();
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(searchResult.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      pageData();
    }
  };

  const pageData = () => {
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);
  };

  return (
    <div>
      <Typography variant="h3">Browse Homes</Typography>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-8">
        {currentPosts.length > 0 && (
          currentPosts.map((home) => {
            return <HomeCard home={home} id={home.id} />;
          })
        )}
      </div>
      {currentPosts.length > 0 ? (
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={searchResult.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    ) : (
        <Typography variant="h5">No data found! Refine your search.</Typography>
      )}
    </div>
  );
}
