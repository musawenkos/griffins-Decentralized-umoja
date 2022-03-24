import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBInput,MDBBtn, MDBCol  } from 'mdb-react-ui-kit'

export default function Register(props) {

  //Note the are no validattion made

  const handleRegister = () =>{
    const url = "http://localhost:5000/register";
      const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValue)
      };
      fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
      //console.log(formValue);
  }
  const [formValue, setFormValue] = useState({
    userType : props.type,
    email: '',
    walletAddress: '',
    fName: '',
    password: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };


  return (
    <MDBContainer>
      <br/> <br/> <br/> <br/> <br/>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-primary text-uppercase fw-bold'>Register Form:</h4></div>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput 
              name='userType' 
              label={props.type} 
              id='form1' 
              type='text' 
              disabled
              value={props.type}
              onChange={onChange}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              name='email' 
              label='Email' 
              id='form1'
              type='text'
              value={formValue.email}
              onChange={onChange}
            />
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
          <MDBCol>
            <MDBInput 
              name='walletAddress'
              label='Wallet Address'
              id='form1'
              type='text'
              value={formValue.walletAddress}
              onChange={onChange} 
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              name='fName' 
              label='First Name' 
              id='form1' 
              type='text'
              value={formValue.fName}
              onChange={onChange}
            />
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
          <MDBCol>
            <MDBInput 
              name='password' 
              label='Password' 
              id='form1' 
              type='password' 
              value={formValue.password}
              onChange={onChange}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={handleRegister}>
              <MDBBtn rounded>Register</MDBBtn>
            </div>
        </MDBRow>
      </MDBContainer>
  )
}




