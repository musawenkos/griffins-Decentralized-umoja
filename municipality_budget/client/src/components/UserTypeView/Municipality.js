import React from 'react'
import Login from '../Auth/login';
import Register from '../Auth/register';
import Navbar from '../UIComponents/navUI';

export default function Municipality(props) {
  const isLogin = props.isLogin ? <Login type ="Municipality" makeLoginFalse={props.handleIsLogin}/> : <Register type ="Municipality" makeLoginFalse={props.handleIsLogin}/>;
  return (
    <>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Municipality</h1></div>
      {isLogin}
    </>
  )
}
