import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector} from 'react-redux';
import { pageFn, selectValues } from '../../../../features/photoGallery/photoSlice';
import style from './pagination.module.scss'

export default function PaginationControlled() {

  const dispatch = useDispatch();
  const item = useSelector(selectValues);


  const handleChange = (event, value) => {
    dispatch(pageFn(value));
    console.log(value);
  }
 
  return (
    <div className={style.paginationBox}>
      <Stack spacing={2}>
        <Pagination 
          count={item.totalPages || 1} 
          onChange={handleChange} 
          color="primary" 
        />
      </Stack>
    </div>
  );
}