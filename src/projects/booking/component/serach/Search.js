import React from 'react'
import Select from 'react-select'

export default function Search({options, placeholder}) {
  return (
    <div>
       <Select 
         options={options}
         placeholder={placeholder}
        />
    </div>
  )
}
