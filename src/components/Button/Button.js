import React from 'react'
import './Button.css'

const Button = ({ buttonLabel, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {buttonLabel}
    </button>
  )
}

export default Button
