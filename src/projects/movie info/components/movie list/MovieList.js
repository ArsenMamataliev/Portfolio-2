import React, {Suspense} from 'react'
import SearchBar from '../search/SearchBar';
import PaginationControlled from '../pagination/Pagination';
import Loader from '../loader/Loader';
import FilterBtn from '../filter/FilterBtn';

export default function MovieList() {
    const Movies = React.lazy(() => import('../movie/Movies'));
  return (
    <div>
      <SearchBar />
      <Suspense fallback={<Loader />}>
        <FilterBtn />
        <Movies />
        <PaginationControlled />
      </Suspense>
    </div>
  )
}
