import { buttonProps, selectProps } from '@/types'
import React from 'react'
import "./Select.css"

const Select = ({text, value, onChange}: selectProps) => {
    return (
      <div className='selectbox'>
        <p>Curso</p>
          <select name="Categoria" id="selectCat" value={value} onChange={onChange}>
            <option value={1}>Ciencia Da Computação</option>
            <option value={2}>Matematica</option>
            <option value={3}>Ciência Sociais</option>
          </select>
      </div>
    )
}

export default Select