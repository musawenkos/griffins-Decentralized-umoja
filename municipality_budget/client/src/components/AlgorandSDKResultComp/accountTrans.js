import React,{useEffect,useState} from 'react'
import {MDBRow,MDBCol} from 'mdb-react-ui-kit'
import UsersDataService from '../../services/users_service';

export default function AccountTransaction(props) {
    const [accntAddrSender,setAccntAddrSender] = useState();
    const [accntAddrReceiver,setAccntAddrReceiver] = useState();
    const getUserByWalletAddr = async() =>{
        const dataSender = await UsersDataService.getUserByWalletAddr(props.tx.senderAccount);
        setAccntAddrSender(dataSender.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        const dataReceiver = await UsersDataService.getUserByWalletAddr(props.tx.receiverInnerTrans[0]["payment-transaction"]["receiver"]);
        setAccntAddrReceiver(dataReceiver.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    useEffect(() => {
        getUserByWalletAddr();
    },[]);
  return (
    <MDBRow className='shadow-5 mt-2'>
        <MDBRow>
            <MDBCol md='8' >
                <div className="d-inline-block text-truncate" style={{fontSize:"12px","maxWidth": "240px"}}>{props.tx.txId}</div>
            </MDBCol>
            <MDBCol md='4'>
                <span style={{fontSize:"12px","marginLeft": "20px"}}>Fee: {props.tx.receiverInnerTrans[0]["payment-transaction"]["amount"] / 1000000} </span>
            </MDBCol>
        </MDBRow>
        <MDBRow>
                <MDBCol md='4'>
                    <div  style={{fontSize:"10px"}}><b>FROM:</b> {accntAddrSender === undefined ? "DOESN'T EXIST" : accntAddrSender[0]["user_type_function"]}</div>
                </MDBCol>
                <MDBCol md='4'>
                    <div  style={{fontSize:"10px"}}><b>TO:</b> {accntAddrReceiver === undefined ? "DOESN'T EXIST" : accntAddrReceiver[0]["user_type_function"]}</div>
                </MDBCol>
            </MDBRow>
    </MDBRow>
  )
}
