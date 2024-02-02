import React from 'react';
import '../css/admin_dashboard.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

import { useEffect, useState } from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import AddRoleDalog from '../components/AddRoleDialog';
import UpdateRoleDialog from '../components/UpdateRoleDialog';

function AdminDashboard() {
    //Theme for Table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
 
      //Fetch the data from backend
      const [roles, setRoles] = useState([])
      useEffect(()=> {
          fetch('http://localhost:8080/api/med-care/roles/get-all-roles')
              .then(response => response.json())
              .then(data => setRoles(data))
              .catch(err => console.log(err))
      }, [])

      //Delete The Role
      const handleDeleteClick = async (roleId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/api/med-care/roles/delete-role/${roleId}`);
          alert("Role Deleted")
          console.log(response.data); 
        } catch (error) {
          console.error('Error deleting role:', error);
        }
      };
    
  return (
    <div className='admin-dashboard'>
        <div className='dashboard-header'>
            <hr/>
            <h3>Roles Management</h3>
            <hr/>
        </div>
        <div className="dashboard-body">
            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    alignItems: 'center',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="standard-basic" label="Search" variant="standard" style={{width:'1000px'}}/>
                <Button variant="outlined" startIcon={<SearchIcon />}>
                Search
            </Button>
            <AddRoleDalog/>
            </Box>
            <hr/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Role ID</StyledTableCell>
            <StyledTableCell align="center">Role Name</StyledTableCell>
            <StyledTableCell align="center">Role Description</StyledTableCell>
            <StyledTableCell align="center">Created Date</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {roles && roles.length > 0 ? (
                roles.map((row) => (
                    <StyledTableRow key={row.role_id}>
                      <StyledTableCell component="th" scope="row">
                        {row.role_id}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.role_name}</StyledTableCell>
                      <StyledTableCell align="center">{row.role_description}</StyledTableCell>
                      <StyledTableCell align="center">{row.formattedDate}</StyledTableCell>
                      <StyledTableCell align="center">
                      <UpdateRoleDialog role_id={row.role_id} role_name={row.role_name} role_description={row.role_description}/>
                        <IconButton aria-label="delete" size="medium" style={{ color: 'red', marginLeft: '20px'}} onClick={() => handleDeleteClick(row.role_id)}>
                            <DeleteForeverIcon fontSize="inherit" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
            ) : (
                <StyledTableRow>
                <StyledTableCell colSpan={5} align="center">
                    No data available
                </StyledTableCell>
                </StyledTableRow>
            )}
            </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}

export default AdminDashboard