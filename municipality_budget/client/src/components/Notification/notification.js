import React,{useState,useEffect,useContext} from 'react'
import { MDBCol, MDBBtn, MDBIcon, MDBRow} from 'mdb-react-ui-kit'
import RequestDataService from '../../services/request_service';
import UsersDataService from '../../services/users_service';
import * as backend from "../../build/index.main.mjs";
import { AppContext } from '../../state_management/AppContext';

export default function Notification(props) {
    const [req, getRequests] = useState([]);
    const appContext = useContext(AppContext);
    
    const getRequest = async () =>{
        const data = props.isRequester ? await RequestDataService.getAllRequestByEmail(appContext.state.email) : await RequestDataService.getAllRequestByType(appContext.state.email);
        
        getRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    useEffect(() => {
        getRequest();
    },[props.isRequester,appContext.state.updateReq]);
  return (
    <MDBCol className='shadow-5'>
        <div className='d-flex align-items-center justify-content-center mt-3'>
            <h3 className='text-primary text-uppercase fw-bold'>Request Message </h3>
        </div>
        <div style={{height:"65vh", overflow:"scroll"}}>
            {req.map((reqItem) => {
                return <RequestMsg isReq={props.isRequester} accountAttacher={props.account} key ={req.id} request={reqItem} type={props.type}/>
            })}
            
        </div>
    </MDBCol>
  )
}




function RequestMsg(props) {
    const appContext = useContext(AppContext);
    const { request_Description, request_amount,requesterInfor,requestInforStatus,id, requestEmailTo, requesterUser} = props.request;
    const [getUserTypeFun, setgetUserTypeFun] = useState('');
    const [updated,setUpdated] = useState(false);

    const isRequestedAmt = (amt) => {
        console.log(amt);
    };

    const getUser = async () =>{
        /* console.log(props.request)
        console.log(props.isReq)
        console.log(requestEmailTo , requesterUser) */
        const data = await UsersDataService.getUsersByEmail(props.isReq ? requestEmailTo : requesterUser);
        setgetUserTypeFun(data.docs.map((doc) => doc.get("user_type_function"))[0]);
    }
    useEffect(() => {
        getUser();
    },[props.isReq ? requestEmailTo : requesterUser]);

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
            appContext.setAppState({...appContext.state,updateReq:!appContext.state.updateReq})
            //console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    };

    const onReject = async () => {
        const updateReq = {
            requestInforStatus: "REJECTED",
            requesterInfor:''
        }
        try {
            const data = await RequestDataService.upateRequest(id,updateReq);
            appContext.setAppState({...appContext.state,updateReq:!appContext.state.updateReq})
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    };
    const reqStatusNotUsedBtn = 
    <MDBCol className='d-flex align-items-center justify-content-center'>
        <MDBBtn rounded size='sm' style={{marginRight:"5px"}} onClick={onAttached}>Accept</MDBBtn>
        <MDBBtn rounded size='sm' onClick={onReject}>Reject</MDBBtn>
    </MDBCol>;

    const reqStatusUsedBtn = 
    <MDBCol className='d-flex align-items-center justify-content-center'>
        <MDBBtn color='success' tag='a' floating>
            <MDBIcon far icon="check-circle" />
        </MDBBtn>
    </MDBCol>;

    const reqStatusRejectBtn = 
    <MDBCol className='d-flex align-items-center justify-content-center'>
        <MDBBtn color='danger' tag='a' floating>
            <MDBIcon far icon="times-circle" />
        </MDBBtn>
    </MDBCol>;

    if(props.isReq){
        //FROM DONOR TO REQUESTER
        //FROM requestEmailTo TO requesterUser
        return (
            <MDBRow className='shadow-4 m-2' style={{background:"#D3D3D3"}}>
                <MDBCol>{request_Description} : Price {request_amount}  {props.isReq ? 'TO' : 'FROM' } {getUserTypeFun !== undefined ? getUserTypeFun : 'wait...'}</MDBCol>
                {requestInforStatus === "USED" ?  reqStatusUsedBtn : requestInforStatus === "REJECTED" ? reqStatusRejectBtn : 'WAIT'}
            </MDBRow>
          )
    }else{
        //FROM REQUESTER TO DONOR
        //FROM requesterUser TO requestEmailTo
        return (
            <MDBRow className='shadow-4 m-2' style={{background:"#D3D3D3"}}>
                {console.log(getUserTypeFun)}
                <MDBCol>{request_Description} : Price {request_amount}  {props.isReq ? 'TO' : 'FROM' } {getUserTypeFun !== undefined ? getUserTypeFun : 'wait...'}</MDBCol>
                {requestInforStatus === "USED" ?  reqStatusUsedBtn : requestInforStatus === "REJECTED" ? reqStatusRejectBtn : reqStatusNotUsedBtn}
                {props.key}
            </MDBRow>
          )
    }

  
}