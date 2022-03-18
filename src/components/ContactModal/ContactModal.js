import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContactModal({ open, handleClose, contact }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            src={`/contact-images/${contact.id}.jpeg`}
            alt={`Avatar of ${contact.first_name} ${contact.last_name}`}
            sx={{ width: 128, height: 128 }}
          />
          <h2>{ contact.first_name } { contact.last_name }</h2>
          <Button startIcon={<ContactPhoneIcon />} href={`tel:${contact.phone}`}>
           { contact.phone }
          </Button>
        </Box>
      </Modal>
    </div>
  );
}