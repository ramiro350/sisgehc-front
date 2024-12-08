import { textProps } from '@/types'
import React from 'react'
import "./TextArea.css";

const TextArea = ({placeholder, text, value, onChange}: textProps) => {
  return (
    <div className='textbox'>
        <p>{text}</p>
        <textarea name='descricao' rows={20} cols={50} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextArea