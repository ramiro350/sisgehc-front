import { buttonProps, selectProps } from '@/types'
import React from 'react'
import "./Select.css"

const Select = ({text, value, onChange}: selectProps) => {
    return (
      <div className='selectbox'>
        <p>Tipo de Hora</p>
          <select name="Categoria" id="selectCat" value={value} onChange={onChange}>
            <option value={1}>Categoria A</option>
            <option value={2}>Categoria B</option>
            <option value={3}>Categoria C</option>
          </select>
      </div>
    )
}

export default Select