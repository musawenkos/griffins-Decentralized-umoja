import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBInput,MDBBtn, MDBCol  } from 'mdb-react-ui-kit'
import {loadStdlib} from '@reach-sh/stdlib';
import users_service from '../../services/users_service';
const reach = loadStdlib("ALGO");
export default function Register(props) {
  const [formValue, setFormValue] = useState({
    userType : props.type,
    email: '',
    user_type_function: '',
    fName: '',
    password: '',
  });
  const [newAccProf, setNewAccProf] = useState({});
  const [isRegistered, isRegisteredHandle] = useState(false);



  //Note the are no validattion made

  const handleRegister = async () =>{
    /* const url = "http://localhost:5000/register";
      const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValue)
      };
      fetch(url, requestOptions)
      .then(response => response.json())
      .then((results) => {
        if(results["rowsAffected"][0] === 1){
          props.makeLoginFalse(true);
        }
      }); */
      let accP = reach.createAccount();
      accP.then(acc => {
        setNewAccProf({acc: reach.formatAddress(acc),mnemonic:reach.unsafeGetMnemonic(acc)})
        isRegisteredHandle(!isRegistered);
        const newUser = {
          email: formValue.email,
          first_name: formValue.fName,
          password: formValue.password,
          user_type: props.type,
          user_type_function: formValue.user_type_function,
          wallet_address: reach.formatAddress(acc)  
        };

  
        users_service.addUsers(newUser).catch((err) =>{
          console.log(err.message)
        })
      }).catch((err) =>{
        console.log(err.message)
      })
      
      
  }
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const copyToClipborad = async () => {
    navigator.clipboard.writeText(newAccProf.acc + "\n" + newAccProf.mnemonic);
    alert('Copied!');
    props.makeLoginFalse(true);
};

  const newAccbox =  <MDBRow>
  <MDBCol>
        <div>
          <h3>Copy Account and Mnemonic</h3>
          <p>
            {newAccProf.acc}
          </p>
          <p>
            {newAccProf.mnemonic}
          </p>
        </div>
        <MDBBtn rounded onClick={copyToClipborad}>Copy to clipboard</MDBBtn>
    </MDBCol>
  </MDBRow>

  return (
    <MDBContainer>
      <br/> <br/> <br/> <br/> <br/>
        {isRegistered ? newAccbox:''}
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
              name='user_type_function'
              label='UserType Function e.g Buffalo City Metropolitan Municipality'
              id='form1'
              type='text'
              value={formValue.user_type_function}
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




