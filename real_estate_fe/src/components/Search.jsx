import SearchResult from './SearchResult'
import Searchbar from "./Searchbar"
import React, { useState, Suspense } from 'react'
import initialData from "../assets/data.json"

export default function Search(){
    const [searchResult, setSearchResult] = useState(initialData.homes)

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
        <div>
           <Searchbar setSearchResult = {setSearchResult}/>
           <SearchResult searchResult = {searchResult}/>
        </div>
        </Suspense>

    )
}