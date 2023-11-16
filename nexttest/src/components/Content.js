"use client"
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import AddCustomerButton from './AddCustomerButton';
import Image from 'next/image';
import projectImage from '../../public/appname.PNG'
import EditCustomerDialog from "./EditCustomerDialog"
import AddCustomerDialog from "./AddCustomerDialog"
import DeleteCustomerDialog from "./DeleteCustomerDialog"
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, deleteUser, updateUser,setSort  } from '@/redux/slice/Users';

const Content = () => {

    const dispatch = useDispatch()
    const customers = useSelector((data) => data.userData.users)
    console.log("customers", customers)


    //add dialog states
    const [openAddDialog, setOpenAddDialog] = React.useState(false);


    const handleClickOpenAddDialog = () => {
        setOpenAddDialog(true)
    }
    const handleClickCloseAddDialog = () => {
        setOpenAddDialog(false)
    }


    //edit dialog states
    const [openEditDialog, setOpenEditDialog] = React.useState(false);


    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true)
    }
    const handleClickCloseEditDialog = () => {
        setOpenEditDialog(false)
    }

    //delete dialog states
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);


    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true)
    }
    const handleClickCloseDeleteDialog = () => {
        setOpenDeleteDialog(false)
    }

    console.log("local storeage", JSON.parse(localStorage.users))

    const handleSort = (field, order) => {
        dispatch(setSort({ field, order }));
      };

    

    return (
        <div>
            <div
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', width: '100%', gap: '30px' }}
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="space-between"
                spacing={8}
            >
                <div >
                    <AddCustomerButton handleClickOpenAddDialog={handleClickOpenAddDialog} />
                    <AddCustomerDialog openAddDialog={openAddDialog} handleClickCloseAddDialog={handleClickCloseAddDialog} handleClickOpenAddDialog={handleClickOpenAddDialog} />
                </div>

                <div style={{ width: '100%' }}>
                    <Paper style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-around', height: '40px', alignItems: 'center', backgroundColor: '#C5E3D5', color: '#4E8B80' }}>
                        <Typography ></Typography>
                        <Typography onClick={() => handleSort('id', 'asc')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer ID <UnfoldLessIcon /></Typography>
                        <Typography onClick={() => handleSort('name', 'desc')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer Name <UnfoldLessIcon /></Typography>
                        <Typography onClick={() => handleSort('email', 'desc')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer Email <UnfoldLessIcon /></Typography>
                        <Typography ></Typography>
                    </Paper>
                </div>


                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '15px', flexDirection: 'column', }}>
                    {
                        Array.isArray(customers) && customers.map((user) => (
                            <Paper key={user.id} sx={{ boxShadow: 0 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '4px 10px' }}>
                                <Image alt="userimage" src={user.avatar} width="80" height="80" style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                                <Typography>{user.id}</Typography>
                                <Typography style={{ textDecoration: 'underline', color: '#4E8B80' }}>{user.first_name}</Typography>
                                <Typography>{user.email}</Typography>
                                <div style={{ display: "flex", justifyContent: 'space-evenly' }}>

                                    <Button onClick={handleClickOpenEditDialog} variant='contained' style={{ textTransform: 'capitalize', width: '6rem', backgroundColor: '#B0E1B7', color: '#239533', marginRight: "14px" }}>
                                        Edit
                                    </Button>
                                    <EditCustomerDialog openEditDialog={openEditDialog} handleClickCloseEditDialog={handleClickCloseEditDialog} handleClickOpenEditDialog={handleClickOpenEditDialog} />


                                    <Button onClick={() => { handleClickOpenDeleteDialog(); console.log("user id", user.id) }} variant='contained' style={{ textTransform: 'capitalize', width: '6rem', backgroundColor: '#EF9999', color: '#DA1111' }}>
                                        Delete
                                    </Button>
                                    <DeleteCustomerDialog customerId={user.id} openDeleteDialog={openDeleteDialog} handleClickCloseDeleteDialog={handleClickCloseDeleteDialog} handleClickOpenDeleteDialog={handleClickOpenDeleteDialog} />
                                </div>
                            </Paper>
                        ))
                    }
                </div>



            </div>
        </div >
    )
}

export default Content