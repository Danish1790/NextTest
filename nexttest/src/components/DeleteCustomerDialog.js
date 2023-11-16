import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { fetchUsers,addUser,deleteUser,updateUser } from '@/redux/slice/Users';
import { useDispatch } from 'react-redux';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DeleteCustomerDialog(props) {
  const { openDeleteDialog, handleClickOpenDeleteDialog, handleClickCloseDeleteDialog,customerId } = props

  const dispatch = useDispatch()

  const handleDeleteCustomer = () =>{
    dispatch(deleteUser({id:customerId}))
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClickCloseDeleteDialog}
        aria-labelledby="customized-dialog-title"
        open={openDeleteDialog}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            width: "25rem",
            height: "25rem",
            backgroundColor: '#FBFCFC'
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClickCloseDeleteDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "black"
          }}
        >
          <CloseIcon />
        </IconButton>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <DeleteForeverOutlinedIcon style={{ fontSize: '8rem', color: 'red' }} />
          <Typography variant='h5' fontWeight="bold">Are you sure?</Typography>
          <Typography variant='body' >Do you really want to delete this customer?</Typography>
          <Typography variant='body' sx={{ lineHeight: 0 }}>This process cannot be undone.</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '20px', justifyContent: 'space-evenly', marginTop: '30px' }}>
            <Button onClick={handleClickCloseDeleteDialog} variant='contained' style={{ backgroundColor: '#A5A5AF', color: 'white', width: '8rem' }}>Cancel</Button>
            <Button onClick={()=>{handleDeleteCustomer();handleClickCloseDeleteDialog()}} variant='contained' style={{ backgroundColor: 'red', color: 'white', width: '8rem' }}>Delete</Button>
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}