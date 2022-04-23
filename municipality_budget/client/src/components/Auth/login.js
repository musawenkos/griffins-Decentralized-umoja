import React,{useContext} from 'react'
import {AppContext} from '../../state_management/AppContext'
import { MDBContainer, MDBRow, MDBInput,MDBBtn, MDBCol  } from 'mdb-react-ui-kit'
export default function Login(props) {

  const appContext = useContext(AppContext);
  //props.makeLoginFalse(false)
  const handleLogin = () =>{
    props.handleConnectWallet();
    
    //
  }

  const onChange = (e) => {
    appContext.setAppState({...appContext.state,email: e.target.value})
  };

  return (
    <>
      <MDBContainer>
      <br/> <br/> <br/> <br/> <br/>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-primary text-uppercase fw-bold'>Login Form:</h4></div>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput label={props.type} id='form1' type='text' disabled/>
          </MDBCol>
          <MDBCol>
            <MDBInput name='email' label='Email address:' id='form1' type='text' value={appContext.state.email} onChange={onChange} />
          </MDBCol>
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={handleLogin}>
              <MDBBtn rounded>Login</MDBBtn>
            </div>
            <div className='d-flex flex-row-reverse text-primary' style={{cursor:"pointer"}} onClick={() => props.makeLoginFalse(false)}>
              <u>Register/Forget Details</u>
            </div>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
