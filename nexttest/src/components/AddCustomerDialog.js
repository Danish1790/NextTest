import * as React from 'react';
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function AddCustomerDialog(props) {
    const { openAddDialog, handleClickOpenAddDialog, handleClickCloseAddDialog } = props


    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClickCloseAddDialog}
                aria-labelledby="customized-dialog-title"
                open={openAddDialog}

            >
            <div style={{ width: '40rem', backgroundColor: 'red' }}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Dialog
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClickCloseAddDialog}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers >
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <TextField id="outlined-basic" label="Customer Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Customer Email" variant="outlined" />
                    </div>
                </DialogContent>
                </div>
            </BootstrapDialog>
        </React.Fragment>
    );
}