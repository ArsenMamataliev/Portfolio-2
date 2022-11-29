import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { orientationFn } from '../../../../features/photoGallery/photoSlice';

export default function Orientation({title, value}) {
  const [orient, setOrient] = useState('landscape');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(orientationFn(event.target.value))
    setOrient(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={orient}
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