import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { orderByFn} from '../../../../features/photoGallery/photoSlice';

export default function OrderBy({title, value}) {
  const [orderBy, setOrderBy] = useState('latest');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(orderByFn(event.target.value));
    setOrderBy(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={orderBy}
          onChange={handleChange}
          autoWidth
          label={title}
        >
          {value.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}