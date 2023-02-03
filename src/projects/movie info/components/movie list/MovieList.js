import React, {Suspense} from 'react'
import SearchBar from '../search/SearchBar';
import PaginationControlled from '../pagination/Pagination';

export default function MovieList() {
    const Movies = React.lazy(() => import('../movie/Movies'));
  return (
    <div>
      <SearchBar />
      <Suspense fallback={<>Loading ...</>}>
        <Movies /> 
      </Suspense>
     <PaginationControlled />
    </div>
  )
}
