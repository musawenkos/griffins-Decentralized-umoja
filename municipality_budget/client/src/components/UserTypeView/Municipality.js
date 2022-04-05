import React, {useState} from 'react'
import Login from '../Auth/login';
import Register from '../Auth/register';
import Navbar from '../UIComponents/navUI';
import MunicipalityView from './UserView/municipalityView';
import {loadStdlib, MyAlgoConnect} from '@reach-sh/stdlib';

const reach = loadStdlib("ALGO");

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default function Municipality(props) {
  const [acc, setAccount] = useState(undefined);
  const [balance,setBalance] = useState(0);
  
  const fmt = (x) => reach.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await reach.balanceOf(who));

  const connectWallet = async () => {
    const account = await reach.getDefaultAccount();
    setAccount(account);
    let balance = await getBalance(account);
    setBalance(balance);
    props.handleShowView(false);
  };
  const isLogin = props.isLogin ? <Login type ="Municipality" makeLoginFalse={props.handleIsLogin}  handleConnectWallet={connectWallet}  /> : <Register type ="Municipality" makeLoginFalse={props.handleIsLogin}/>;
  const municipalityView = <MunicipalityView account={acc} setNewBal={setBalance} getBalance={getBalance} />;
  return ( 
    <>
      <Navbar account={acc} bal={balance} />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Municipality</h1></div>
      {!props.showView ? municipalityView : isLogin}
    </>
  )
}
