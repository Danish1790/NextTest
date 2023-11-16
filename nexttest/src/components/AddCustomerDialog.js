import React,{ useState } from 'react';
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
import { CssBaseline } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchUsers,addUser,deleteUser,updateUser } from '@/redux/slice/Users';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function AddCustomerDialog(props) {
    const dispatch = useDispatch()
    const { openAddDialog, handleClickOpenAddDialog, handleClickCloseAddDialog } = props;

    const [customerData, setCustomerData] = useState({})


    const getCustomer = (value, name) => {
        const newCustomer = { [name]: value }
        setCustomerData({ ...customerData, ...newCustomer })
    }

    const handleAddCustomer = () =>{
        dispatch(addUser(customerData))
    }

    

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClickCloseAddDialog}
                aria-labelledby="customized-dialog-title"
                open={openAddDialog}
                PaperProps={{
                    sx: {
                        borderRadius: '20px',
                        width: "25rem",
                        height: "26rem",
                        backgroundColor: '#FBFCFC'
                    },
                }}

            >
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(66,161,125,1) 0%, rgba(40,127,101,1) 22%, rgba(7,83,70,1) 41%)',
                        height: '6rem'
                    }}
                >
                    <Typography variant='h5' style={{ display: "flex", justifyContent: 'center', position: "relative", top: 50, color: 'white' }}>
                        Add New Customer
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClickCloseAddDialog}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: "white"
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                </div>

                <DialogContent  >
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', gap: '20px', justifyContent: 'space-between', alignItems: "space-between" }}>
                        <TextField name="name" onChange={(e) => { getCustomer(e.target.value, e.target.name) }} size="small" id="outlined-basic" label="Customer Name" variant="outlined" />
                        <TextField name="email" onChange={(e) => { getCustomer(e.target.value, e.target.name) }} size="small" id="outlined-basic" label="Email" variant="outlined" />

                        <label htmlFor="avatar" style={{ cursor: 'pointer', textDecoration: 'underline', margin: '8px 0', color: '#80CCAB' }}>
                            Upload Photo
                        </label>
                        <input style={{ display: 'none' }} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

                        <Button onClick={handleAddCustomer} style={{ color: 'white', background: 'linear-gradient(90deg, rgba(66,161,125,1) 0%, rgba(40,127,101,1) 22%, rgba(7,83,70,1) 41%)' }}>
                            Add Customer
                        </Button>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}