import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector} from 'react-redux';
import { pageFn, selectValues } from '../../../../features/photoGallery/photoSlice';
import style from './pagination.module.scss'

export default function PaginationControlled() {

  const dispatch = useDispatch();
  const item = useSelector(selectValues);
  const data = useSelector(state => state.paginationSlice.data)

  console.log(data);

  const handleChange = (event, value) => {
    dispatch(pageFn(value));
  }
 
  return (
    <div className={style.paginationBox}>
      {
        data&&
        <Stack spacing={1}>
          <Pagination 
            count={item.totalPages || 1} 
            onChange={handleChange} 
            size="small"
            color="primary" 
          />
        </Stack>
      }    
  </div>  
  );
}