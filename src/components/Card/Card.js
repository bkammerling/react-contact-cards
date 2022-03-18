import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ContactModal from '../ContactModal/ContactModal';

const style = {
  display: 'flex', 
  width: '300px', 
  height: '110px', 
  margin: '15px', 
  cursor: 'pointer'
}

const darkStyle = {
  backgroundColor: '#222',
  color: 'white'
}

const ContactCard = ({ contact, dark }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      setOpen(true);
    }
  };

  return (
    <>
    <Card tabIndex={contact.id} key={contact.id} className="Card" onClick={handleOpen} onKeyPress={handleKeypress} variant="outlined" sx={ dark ? [darkStyle, style] : style }>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={`/contact-images/${contact.id}.jpeg`}
        alt={`Avatar of ${contact.first_name} ${contact.last_name}`}
      />
      <Box>
        <CardContent sx={{ padding: '10px' }}>
          <h3 style={{ marginBottom: '5px'}}>
            {contact.first_name} {contact.last_name}
          </h3>
          <p>{ contact.phone }</p>
        </CardContent>
      </Box>
    </Card>
    <ContactModal open={open} handleClose={handleClose} contact={contact} />
    </>
  )
}

export default ContactCard

