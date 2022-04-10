import React,{useState,useEffect} from 'react'
import { MDBCol, MDBBtn, MDBIcon, MDBRow} from 'mdb-react-ui-kit'
import RequestDataService from '../../services/request_service';
import * as backend from "../../build/index.main.mjs";

export default function Notification(props) {
    const [req, getRequests] = useState([]);
    
    const getRequest = async () =>{
        const data = await RequestDataService.getAllRequest();
        getRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    useEffect(() => {
        getRequest();
    },[]);
  return (
    <MDBCol className='shadow-5'>
        <div className='d-flex align-items-center justify-content-center mt-3'>
            <h3 className='text-primary text-uppercase fw-bold'>Request Message </h3>
        </div>
        <div style={{height:"65vh", overflow:"scroll"}}>
            {req.map((reqItem) => {
                return <RequestMsg  accountAttacher={props.account} key ={reqItem.id} request={reqItem}/>
            })}
            
        </div>
    </MDBCol>
  )
}




function RequestMsg(props) {
    const { request_Description, request_amount,requesterInfor,requestInforStatus,id} = props.request;

    const isRequestedAmt = (amt) => {
        console.log(amt);
    };

    const onAttached = async () => {
        console.log(requesterInfor);
        const ctc = props.accountAttacher.contract(backend, JSON.parse(requesterInfor));
        let typeDonor = props.type;
        backend.Donor(ctc,{isRequestedAmt, typeDonor})
        alert('You have accepted the user amount');
        //const requestsRef = firestore.collection('requests').firestore.doc().update();
        const updateReq = {
            requestInforStatus: "USED"
        }
        try {
            const data = await RequestDataService.upateRequest(id,updateReq);
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    };
    const reqStatusNotUsedBtn = 
    <MDBCol className='d-flex align-items-center justify-content-center'>
        <MDBBtn rounded size='sm' style={{marginRight:"5px"}} onClick={onAttached}>Accepted</MDBBtn>
        <MDBBtn rounded size='sm'>Reject</MDBBtn>
    </MDBCol>;

    const reqStatusUsedBtn = 
    <MDBCol className='d-flex align-items-center justify-content-center'>
        <MDBBtn color='success' tag='a' floating>
            <MDBIcon far icon="check-circle" />
        </MDBBtn>
    </MDBCol>;

  return (
    <MDBRow className='shadow-4 m-2' style={{background:"#D3D3D3"}}>
        <MDBCol>{request_Description} : {request_amount} </MDBCol>
        {requestInforStatus === "USED" ?  reqStatusUsedBtn : reqStatusNotUsedBtn}
        {props.key}
    </MDBRow>
  )
}