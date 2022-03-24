import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            MBC
          </MDBNavbarBrand>
          <div className='d-flex flex-row-reverse text-primary fs-5'>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <div style={{marginTop:"5px",marginRight:"10px"}}>
                Balance : 100 (ALGO)
              </div>
          </div>

        </MDBContainer>
      </MDBNavbar>
  );
}