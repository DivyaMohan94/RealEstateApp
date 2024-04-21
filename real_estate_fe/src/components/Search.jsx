import SearchResult from './SearchResult'
import Searchbar from "./Searchbar"
import { Suspense } from 'react'

export default function Search(){
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
        <div>
           <Searchbar/>
           <SearchResult/>
        </div>
        </Suspense>

    )
}