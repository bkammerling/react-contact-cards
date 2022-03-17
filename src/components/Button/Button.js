import React from 'react'
import './Button.css'

const Button = ({ buttonLabel }) => {
  return (
    <button className='button'>
      {buttonLabel}
    </button>
  )
}

export default Button
