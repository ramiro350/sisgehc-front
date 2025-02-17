import { inputFileProps } from '@/types'
import React from 'react'
import "./InputFile.css";

const InputFile = ({id, name, text, onChange}: inputFileProps) => {
  return (
    <div className='inputbox'>
        <p>{text}</p>
        <input type="file"  id={id} name={name} onChange={onChange}/>
    </div>
  )
}

export default InputFile
