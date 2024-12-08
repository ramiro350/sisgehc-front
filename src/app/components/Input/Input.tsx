import { inputProps } from '@/types'
import React from 'react'
import "./Input.css";

const Input = ({id, placeholder, text, value, onChange, type}: inputProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input id={id} placeholder={placeholder} value={value} onChange={onChange} type={type}/>
    </div>
  )
}

export default Input