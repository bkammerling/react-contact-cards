import React from 'react'
import './Header.css';
import Button from '../Button/Button'

const Header = () => {
  return (
    <header className="App-header">
      <h1>My contacts book</h1>
      <Button buttonLabel={'Sort A-Z'} />
    </header>
  )
}

export default Header
