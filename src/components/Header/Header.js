import React from 'react'
import Button from '../Button/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './Header.css';

const Header = ({ sortContacts, sorted, dark, setDark }) => {

  const handleChange = (event) => {
    setDark(event.target.checked);
  };

  return (
    <header className="App-header">
      <h1>My contacts book</h1>
      <>
        <FormGroup>
          <FormControlLabel 
            control={<Switch 
              checked={dark}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />}
          label="Dark Mode" />
        </FormGroup>
        <Button buttonLabel={sorted ? 'Sort Randomly' : 'Sort A-Z'} onClick={sortContacts} />
      </>
    </header>
  )
}

export default Header
