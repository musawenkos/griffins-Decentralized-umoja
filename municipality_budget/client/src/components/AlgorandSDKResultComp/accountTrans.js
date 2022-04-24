import React,{useEffect,useState} from 'react'
import {MDBRow,MDBCol} from 'mdb-react-ui-kit'
import UsersDataService from '../../services/users_service';
import RequestDataService from '../../services/request_service'

export default function AccountTransaction(props) {
    const [accntAddrSender,setAccntAddrSender] = useState();
    const [accntAddrReceiver,setAccntAddrReceiver] = useState();
    const [allReq,getAllRequest] = useState();
    const getUserByWalletAddr = async() =>{
        const dataSender = await UsersDataService.getUserByWalletAddr(props.tx.senderAccount);
        setAccntAddrSender(dataSender.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        const dataReceiver = await UsersDataService.getUserByWalletAddr(props.tx.receiverInnerTrans[0]["payment-transaction"]["receiver"]);
        setAccntAddrReceiver(dataReceiver.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        const dataRequestInfor = await RequestDataService.getAllRequest();
        getAllRequest(dataRequestInfor.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }

    
    useEffect(() => {
        getUserByWalletAddr();
        return () => {
            setAccntAddrSender();
            setAccntAddrReceiver()
             // This worked for me
          };
    },[]);
  return (
    <MDBRow className='shadow-5 mt-2'>
        <MDBRow>
            
        </MDBRow>
        <MDBRow>
            <MDBCol md='8' >
                <div className="d-inline-block text-truncate" style={{fontSize:"15px","maxWidth": "240px"}}>{props.tx.txId}</div>
            </MDBCol>
            <MDBCol md='4'>
                <span style={{fontSize:"15px","marginLeft": "20px"}}>Fee: {props.tx.receiverInnerTrans[0]["payment-transaction"]["amount"] / 1000000} </span>
            </MDBCol>
        </MDBRow>
        <MDBRow>
                <MDBCol md='4'>
                    <div  style={{fontSize:"15px"}}><b>FROM:</b> {accntAddrSender === undefined ? "LOAD..." : accntAddrSender[0]["user_type_function"]}</div>
                </MDBCol>
                <MDBCol md='4'>
                    <div  style={{fontSize:"15px"}}><b>TO:</b> {accntAddrReceiver === undefined ? "LOAD..." : accntAddrReceiver[0]["user_type_function"]}</div>
                </MDBCol>
            </MDBRow>
    </MDBRow>
  )
}
