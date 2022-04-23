import React, {useState,useContext,useEffect} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import * as backend from "../../../build/index.main.mjs";
import TextField from '@mui/material/TextField';
import {loadStdlib} from '@reach-sh/stdlib';
import Notification from '../../Notification/notification.js';
import {serverTimestamp} from "firebase/firestore"
import RequestDataService from "../../../services/request_service"
import { AppContext } from '../../../state_management/AppContext.js';
import UsersDataService from '../../../services/users_service.js';

const reach = loadStdlib("ALGO");

export default function MunicipalityView(props) {
    const appContext = useContext(AppContext);
    const [ctcInfoStr,setCTCInfor] = useState('');
    const [ctcInfoStrVal,setCTCInforVal] = useState('');
    const [isAttached,setAttachCode] = useState(false);
    let typeRequester = "LM";
    const [isDeployer, isDeployerHandler] = useState(true);
    const [ng, getNG] = useState({});
    const [formValue, setFormValue] = useState({
        age : 0,
        requestedAmt: 0,
        requestedDecr: '',
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };
    const onChangeAttach = (e) => {
        setCTCInforVal(e.target.value);
    };
    const onDeploy = async () => {
        let requestedAmt =  reach.parseCurrency(formValue.requestedAmt);
        let requestDescr = formValue.requestedDecr;
        const meAddress = props.account.networkAccount;
        const ctc = props.account.contract(backend);
        
        backend.Requester(ctc,{requestedAmt, requestDescr, meAddress,typeRequester});
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        setCTCInfor(ctcInfoStr);
        setAttachCode(false);
        
        

        const newRequestInfor = {
            inforTimestamp: serverTimestamp(),
            requestInforStatus: "NOT USED",
            request_Description: requestDescr,
            request_amount: formValue.requestedAmt,
            requesterInfor:ctcInfoStr,
            requesterUser: appContext.state.email,
            requestEmailTo: ng[0].emailTo
        };

        try {
            await RequestDataService.addRequest(newRequestInfor);

        } catch (error) {
            console.error(error.message)
        }
        
    };

    const isRequestedAmt = (amt) => {
        console.log(amt);
    };

    const onAttached = async () => {
        console.log(ctcInfoStrVal);
        const ctc = props.account.contract(backend, JSON.parse(ctcInfoStrVal));
        let typeDonor = "LM";
        backend.Donor(ctc,{isRequestedAmt, typeDonor})
        alert('You have accepted the user amount');
    };

    const copyToClipborad = async () => {
        navigator.clipboard.writeText(ctcInfoStr);
        setAttachCode(false);
        alert('Copied!');
    };

    const getRequest = async () =>{
        const data = await UsersDataService.getUsersByType("Treasury");
        getNG(data.docs.map((doc) => ({emailTo:doc.get("email"),userFuncTo:doc.get("user_type_function")})));
    }
    useEffect(() => {
        getRequest();
    },[]);
    //ng[0].userFuncTo
    const deployView = <MDBRow>
        <MDBRow className='mt-4'>
            <MDBInput label='National Government' id='form1' type='text' disabled/>
        </MDBRow>
        <MDBRow className='mt-4'>
            <MDBCol>
                <MDBInput name='requestedDecr'  label='Requested Description' id='textAreaExample' rows={4}  value={formValue.requestedDecr}
                    onChange={onChange}/>
            </MDBCol>
            <MDBCol>
                <MDBInput name='requestedAmt' type='number' value={formValue.requestedAmt}
                    onChange={onChange}/>
            </MDBCol>
        </MDBRow>
        <MDBRow className='mt-4'>
            <MDBBtn rounded onClick={onDeploy}>Deploy Request</MDBBtn>
        </MDBRow>
    </MDBRow>;

    const attachCode = 
    <MDBRow className='mt-4'>
            <MDBCol>
                <pre >
                    {ctcInfoStr}
                </pre>
            </MDBCol>
            <MDBCol>
                <MDBBtn rounded onClick={copyToClipborad}>Copy to clipboard</MDBBtn>
            </MDBCol>
            
    </MDBRow>;

    const attachView = 
    <MDBRow className='mt-4'>
        <MDBCol>
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={ctcInfoStrVal}
            onChange={onChangeAttach}
            />
        </MDBCol>
        <MDBCol>
            <MDBBtn rounded onClick={onAttached}>Attach to Contract</MDBBtn>
        </MDBCol>
    </MDBRow>;
    
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <MDBRow>
                        <MDBCol>
                            <MDBBtn rounded onClick={() => isDeployerHandler(false)}>Attach to a request</MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn rounded onClick={() => isDeployerHandler(true)}>Deploy request</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    {isDeployer ?  isAttached ? attachCode : deployView : attachView}
                </MDBCol>
                <Notification isRequester ={isDeployer} account={props.account} type="LM"/>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
