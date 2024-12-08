import { buttonProps } from '@/types'
import React from 'react'
import "./Button.css"
import { useRouter } from 'next/navigation'

export default function Button({text, color, pagina}: buttonProps) {
    const router = useRouter();
 
    const handleButton = () => {
        router.push(pagina);
    }

    return (
      <div className='buttonbox'>
          <button type='submit' className={color} onClick={handleButton}>{text}</button>
      </div>
    )
}