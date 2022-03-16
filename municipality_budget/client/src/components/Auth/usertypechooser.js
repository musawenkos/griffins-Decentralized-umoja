import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol,MDBBtn } from 'mdb-react-ui-kit';

const userBlockStyle = {
  width: '15rem'
};



export default function UserTypeChooser() {
 

  return (
   <>
     <MDBContainer>
        <br/> <br/> <br/> <br/> <br/>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-primary text-uppercase fw-bold'>Select User Type:</h4></div>
        </MDBRow>
        <br/>
        <MDBRow >
          <MDBCol className='hover-shadow'>
          <Link to={{ pathname: '/treasury', state: {useType: 'local-municipality'}}} key={1}>
                <MDBRow className='justify-content-center'>
                  <img
                    src='images/bank.png'
                    alt=''
                    style={userBlockStyle}
                  />
                </MDBRow>
                <MDBRow>
                  <div className='d-flex align-items-center justify-content-center'>Treasury</div>
                </MDBRow>
            </Link>
          </MDBCol>
          <MDBCol className='hover-shadow'>
            <Link to={{ pathname: '/local-municipality', state: {useType: 'local-municipality'}}} key={1}>
                <MDBRow className='justify-content-center'>
                  <img
                    src='images/city-hall.png'
                    alt=''
                    style={userBlockStyle}
                  />
                </MDBRow>
                <MDBRow>
                  <div className='d-flex align-items-center justify-content-center'>Local Municipality</div>
                </MDBRow>
            </Link>
          </MDBCol>
          <MDBCol className='hover-shadow'>
            <Link
                to={{
                  pathname: '/service-provider',
                  state: {useType: 'service-provider'}
                }}
                key={1}
              >
                <MDBRow className='justify-content-center'>
                  <img
                    src='images/provider.png'
                    alt=''
                    style={userBlockStyle}
                  />
                </MDBRow>
                <MDBRow>
                  <div className='d-flex align-items-center justify-content-center'>Service Provider</div>
                </MDBRow>
              </Link>
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
          <div className='d-flex flex-row-reverse'>
          <MDBBtn tag='a' href='/community' rounded>
            Community
          </MDBBtn>
          </div>
        </MDBRow>
      </MDBContainer>
      <Outlet />
   </>
  )
}