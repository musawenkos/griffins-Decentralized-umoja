import React,{useEffect,useContext, useState} from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { AppContext } from '../../state_management/AppContext';
import UsersDataService from '../../services/users_service';


export default function Navbar(props) {
  const appContext = useContext(AppContext);
  const [userFunc,setUserFunc] = useState('');
  
  const getUser = async() =>{
    if(appContext.state.isLogin){
      const data = await UsersDataService.getUsersByEmail(appContext.state.email);
      console.log(data.docs)
      setUserFunc(data.docs.map((doc) => doc.get("user_type_function"))[0]);
    }
  }

  useEffect(() =>{
    getUser()
  },[appContext.state.isLogin])
  const userAccount = <div className='d-flex flex-row-reverse text-primary fs-5'> 
                             
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <div style={{marginTop:"5px",marginRight:"10px"}}>
                          Balance : {props.bal}
                        </div>
                      </div>
  if(props.account !== undefined){
    return (
      <MDBNavbar light bgColor='light'>
        {console.log(userFunc !== undefined ? userFunc : '')}
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            MBC {appContext.state.isLogin ? ': ' +  appContext.state.email + '-': ''}{appContext.state.isLogin ? userFunc !== undefined ? userFunc : '' : ''}
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