import React, {useState} from 'react'
import Login from '../Auth/login';
import Register from '../Auth/register';
import Navbar from '../UIComponents/navUI';
import {loadStdlib, MyAlgoConnect} from '@reach-sh/stdlib';

const reach = loadStdlib("ALGO");

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default function ServiceProvider(props) {
  const [acc, setAccount] = useState('');
  const [balance,setBalance] = useState(0);
  
  const fmt = (x) => reach.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await reach.balanceOf(who));

  const connectWallet = async () => {
    const account = await reach.getDefaultAccount();
    setAccount(account.getAddress());
    let balance = await getBalance(account);
    setBalance(balance);
  };

  const isLogin = props.isLogin ? <Login type ="Service Provider" handleConnectWallet={connectWallet} makeLoginFalse={props.handleIsLogin}/> : <Register type ="Service Provider" makeLoginFalse={props.handleIsLogin}/>;
  return (
    <>
      <Navbar account={acc} bal={balance} />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Service Provider</h1></div>
      {isLogin}
    </>
  )
}
