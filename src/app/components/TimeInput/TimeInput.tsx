import { dataProps, selectProps } from '@/types'
import React from 'react'
import "./TimeInput.css"

const TimeInput = ({text, value, onChange}: dataProps) => {
    return (
      <div className='selectdatabox'>
        <p>{text}</p>
          <input placeholder="Escolha um horário" type="time" id="hora" name="hora" value={value} onChange={onChange}/><br/>
      </div>
    )
}

export default TimeInput
