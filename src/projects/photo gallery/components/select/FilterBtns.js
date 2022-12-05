import React from 'react'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import { useDispatch, useSelector } from 'react-redux';
import { toogleFn } from '../../../../features/photoGallery/filterBoxSlice';

export default function FilterBtns() {
    const visiblity = useSelector((state) => state.filterBoxSlice.visiblity);
    const dispatch = useDispatch();
  return (
    <div>
        { visiblity ? 
          <FilterAltOffRoundedIcon 
            onClick={() => dispatch(toogleFn())}
            color='error'
          /> 
          : 
          <FilterAltRoundedIcon
            onClick={() => dispatch(toogleFn())}
            color='primary'
          />
        }
    </div>
  )
}
