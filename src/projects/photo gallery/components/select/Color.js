import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { colorFn} from '../../../../features/photoGallery/photoSlice';

export default function Color({title, value}) {
  const [color, setColor] = useState('black');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(colorFn(event.target.value));
    setColor(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={color}
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