import React from 'react'
import Login from '../Auth/login';
import Register from '../Auth/register';
import Navbar from '../UIComponents/navUI';
import TreasuryView from './UserView/treasuryView';

export default function Treasury(props) {
  const isLogin = props.isLogin ? <Login type ="Treasury" makeLoginFalse={props.handleIsLogin} removeLogin ={props.handleShowView}/> : <Register type ="Treasury" makeLoginFalse={props.handleIsLogin}/>;
  const treasuryView = <TreasuryView />;
  return (
    <>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Treasury</h1></div>
      {props.showView ? treasuryView : isLogin}
    </>
  )
}
