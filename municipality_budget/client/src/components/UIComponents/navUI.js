import React from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


export default function Navbar(props) {
  
  const userAccount = <div className='d-flex flex-row-reverse text-primary fs-5'> 
                             
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <div style={{marginTop:"5px",marginRight:"10px"}}>
                          Balance : {props.bal}
                        </div>
                      </div>
  if(props.account !== undefined){
    return (
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            MBC
          </MDBNavbarBrand>
            {userAccount}
        </MDBContainer>
      </MDBNavbar>
    );
  }else{
    return (
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            MBC
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}