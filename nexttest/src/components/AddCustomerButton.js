"use client"
import { useState } from 'react';
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const AddCustomerButton = (props) => {
    const { handleClickOpenAddDialog } = props;

    return (
        <div>
            <Button variant="contained"
                onClick={handleClickOpenAddDialog}
                style={{
                    width: '15rem', justifyContent: "space-between",
                    background: 'linear-gradient(90deg, rgba(66,161,125,1) 0%, rgba(40,127,101,1) 22%, rgba(7,83,70,1) 41%)'
                }}>
                <AddIcon />
                Add New Customer
            </Button>
        </div>
    )
}

export default AddCustomerButton