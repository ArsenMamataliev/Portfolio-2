import React from 'react'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import { useDispatch, useSelector } from 'react-redux';
import { toogleFn } from '../../../../features/photoGallery/filterBoxSlice';
import style from './select.module.scss';

export default function FilterBtns() {
    const visiblity = useSelector((state) => state.filterBoxSlice.visiblity);
    const dispatch = useDispatch();
  return (
    <div className={style.filterBtn}>
        { visiblity ? 
          <FilterAltOffRoundedIcon 
            onClick={() => dispatch(toogleFn())}
            sx={{color: '#C2312E'}}
          /> 
          : 
          <FilterAltRoundedIcon
            onClick={() => dispatch(toogleFn())}
            sx={{color: '#000'}}
          />
        }
    </div>
  )
}
