import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../css/DialogForms.css';
import axios from 'axios';

import AddIcon from '@mui/icons-material/Add';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddRoleDalog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Use State
  const [formData, setFormData] = useState({
    role_name: '',
    role_description: '',
  });

  //Handle Form Data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Send Data to Backend
  const handleSaveRole = () => {
    const roleNamePattern = /^ROLE_[A-Z]+$/;
    if (formData.role_name.trim() === '' || formData.role_description.trim() === '') {
      alert('Role name and role description are required fields.');
      return;
    } 
    if (!roleNamePattern.test(formData.role_name)) {
      alert('Role name must start with "ROLE_" and contain only uppercase letters.');
      return;
    }
    axios.post('http://localhost:8080/api/med-care/roles/add-role', formData)
      .then(response => {
        console.log('Role saved successfully', response.data);
        handleClose();
        alert("Role Registerd");
      })
      .catch(error => {
        console.error('Error saving role', error);
        alert("Role Registerd Faild");
      });
  };
 

  return (
    <React.Fragment>
      <Button variant="outlined" startIcon={<AddIcon />}onClick={handleClickOpen}>
        Add Role
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add User-Role
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'red'
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Typography>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <Typography>
                        All the field that indiating with * are requires.
                    </Typography>
                    <TextField
                        id="role_name"
                        label="Role Name"
                        variant="outlined"
                        name='role_name'
                        style={{ width: '500px' }}
                        value={formData.role_name}
                        onChange={handleChange} 
                        pattern="ROLE_[A-Z]+"
                        required    
                    />
                    <TextField
                        id="role_description"
                        label="Role Description"
                        variant="outlined"
                        name='role_description'
                        style={{ width: '500px' }}
                        value={formData.role_description}
                        onChange={handleChange}  
                        required
                    />
                </Box>
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" autoFocus onClick={handleSaveRole} startIcon = {<AddIcon/>}>
            Save Role
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
