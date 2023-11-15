"use client"
import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import AddCustomerButton from './AddCustomerButton';
import Image from 'next/image';
import projectImage from '../../public/appname.PNG'
import EditCustomerDialog from "./EditCustomerDialog"
import AddCustomerDialog from "./AddCustomerDialog"
import DeleteCustomerDialog from "./DeleteCustomerDialog"

const Content = () => {

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

    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="space-between"
                spacing={8}
            >
                <Grid item>
                    <AddCustomerButton handleClickOpenAddDialog={handleClickOpenAddDialog} />
                    <AddCustomerDialog openAddDialog={openAddDialog} handleClickCloseAddDialog={handleClickCloseAddDialog} handleClickOpenAddDialog={handleClickOpenAddDialog} />
                </Grid>

                <Grid item>
                    <Paper style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '40px', alignItems: 'center', backgroundColor: '#C5E3D5', color: '#4E8B80' }}>
                        <Typography ></Typography>
                        <Typography style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer ID <UnfoldLessIcon /></Typography>
                        <Typography style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer Name <UnfoldLessIcon /></Typography>
                        <Typography style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Customer Email <UnfoldLessIcon /></Typography>
                        <Typography ></Typography>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '4px 5px' }}>
                        <Image src={projectImage} style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
                        <Typography>001</Typography>
                        <Typography>Danish Asif</Typography>
                        <Typography>Danish.asif.7190@gmail.com</Typography>
                        <div style={{ display: "flex", justifyContent: 'space-evenly' }}>

                            <Button onClick={handleClickOpenEditDialog} variant='contained' style={{ backgroundColor: '#B0E1B7', color: '#239533', marginRight: "14px" }}>
                                Edit
                            </Button>
                            <EditCustomerDialog openEditDialog={openEditDialog} handleClickCloseEditDialog={handleClickCloseEditDialog} handleClickOpenEditDialog={handleClickOpenEditDialog} />


                            <Button onClick={handleClickOpenDeleteDialog} variant='contained' style={{ backgroundColor: '#EF9999', color: '#DA1111' }}>
                                Delete
                            </Button>
                            <DeleteCustomerDialog openDeleteDialog={openDeleteDialog} handleClickCloseDeleteDialog={handleClickCloseDeleteDialog} handleClickOpenDeleteDialog={handleClickOpenDeleteDialog} />

                           
                            
                        </div>
                    </Paper>

                </Grid>

            </Grid>
        </div >
    )
}

export default Content