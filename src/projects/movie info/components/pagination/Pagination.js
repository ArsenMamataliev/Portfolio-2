import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector} from 'react-redux';
import style from './pagination.module.scss'
import { pageFn, selectValues } from '../../../../features/movie info/movieInfo';

export default function PaginationControlled() {

  const dispatch = useDispatch();
  const page = useSelector(selectValues);

  const handleChange = (event, value) => {
    dispatch(pageFn(value));
  }
 
  return (
    <div className={style.paginationBox}>
        {
          page.totalMovies > 10 && 
          <Stack spacing={1}>
            <Pagination 
              count={Math.ceil(page.totalMovies / 10) } 
              onChange={handleChange} 
              size="small"
              color="warning" 
            />
          </Stack>
        }        
    </div>  
  );
}