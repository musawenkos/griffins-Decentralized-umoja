import React from 'react'
import { MDBContainer, MDBRow, MDBInput,MDBBtn, MDBCol  } from 'mdb-react-ui-kit'

export default function Register(props) {
  return (
    <MDBContainer>
      <br/> <br/> <br/> <br/> <br/>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-primary text-uppercase fw-bold'>Register Form:</h4></div>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput label={props.type} id='form1' type='text' disabled/>
          </MDBCol>
          <MDBCol>
            <MDBInput label='Email address:' id='form1' type='text' />
          </MDBCol>
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={() => props.makeLoginFalse(true)}>
              <MDBBtn rounded>Register</MDBBtn>
            </div>
        </MDBRow>
      </MDBContainer>
  )
}




