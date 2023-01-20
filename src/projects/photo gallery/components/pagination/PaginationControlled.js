import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector} from 'react-redux';
import { pageFn, selectValues } from '../../../../features/photoGallery/photoSlice';
import style from './pagination.module.scss'

export default function PaginationControlled() {

  const dispatch = useDispatch();
  const page = useSelector(selectValues);

  const handleChange = (event, value) => {
    dispatch(pageFn(value));
  }
 
  return (
    <div className={style.paginationBox}>
        {
          page.totalPages > 0 && 
          <Stack spacing={1}>
            <Pagination 
              count={page.totalPages} 
              onChange={handleChange} 
              size="small"
              color="primary" 
            />
          </Stack>
        }        
    </div>  
  );
}