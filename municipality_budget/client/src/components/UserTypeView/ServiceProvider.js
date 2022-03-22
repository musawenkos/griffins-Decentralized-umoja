import React from 'react'
import Login from '../Auth/login';
import Register from '../Auth/register';
import Navbar from '../UIComponents/navUI';

export default function ServiceProvider(props) {
  const isLogin = props.isLogin ? <Login type ="Service Provider" makeLoginFalse={props.handleIsLogin}/> : <Register type ="Service Provider" makeLoginFalse={props.handleIsLogin}/>;
  return (
    <>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Service Provider</h1></div>
      {isLogin}
    </>
  )
}
