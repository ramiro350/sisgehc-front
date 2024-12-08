import { dataProps } from '@/types'
import React from 'react'
import "./DataInput.css"

const DataInput = ({text, value, onChange}: dataProps) => {
    return (
      <div className='selectdatabox'>
        <p>{text}</p>
          <input placeholder="Escolha uma data" type="date" id="data" name="data" value={value} onChange={onChange}/><br/>
      </div>
    )
}

export default DataInput