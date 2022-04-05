import React, {useState} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import * as backend from "../../../build/index.main.mjs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import {loadStdlib} from '@reach-sh/stdlib';
import Notification from '../../Notification/notification.js';
import {serverTimestamp} from "firebase/firestore"
import RequestDataService from "../../../services/request_service"

const reach = loadStdlib("ALGO");

export default function MunicipalityView(props) {
    const [ctcInfoStr,setCTCInfor] = useState('');
    const [ctcInfoStrVal,setCTCInforVal] = useState('');
    const [isAttached,setAttachCode] = useState(false);
    const [isDeployer, isDeployerHandler] = useState(true);
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
        backend.Local_Municipality(ctc,{requestedAmt, requestDescr, meAddress});
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        setCTCInfor(ctcInfoStr);
        setAttachCode(true);
        
        

        const newRequestInfor = {
            inforTimestamp: serverTimestamp(),
            requestInforStatus: "NOT USED",
            request_Description: requestDescr,
            request_amount: formValue.requestedAmt,
            requesterInfor:ctcInfoStr,
            requesterUser: "ndlelamusa1st@gmail.com",
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
        backend.National_Government(ctc, { isRequestedAmt});
        alert('You have accepted the user amount');
    };

    const copyToClipborad = async () => {
        navigator.clipboard.writeText(ctcInfoStr);
        alert('Copied!');
    };
    
    const deployView = <MDBRow>
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
                    <MDBRow className='mt-4'>
                        <MDBRow>
                            <MDBInput label='Amount(ALGO):' id='formControlDefault' type='text' />
                        </MDBRow>
                        <MDBRow className='mt-2'>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select List of Suppliers</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formValue.age}
                                onChange={onChange}
                                label="Select List of Suppliers"
                                >
                                <MenuItem value={10}>BME Group of Companies</MenuItem>
                                <MenuItem value={20}>Arrow Chem Chemical Manufacturers</MenuItem>
                                <MenuItem value={30}>The Cleaning Company Pty Ltd</MenuItem>
                                </Select>
                            </FormControl>
                           
                        </MDBRow>
                    </MDBRow>
                    <MDBRow className='m-2'>
                        <div className='d-flex flex-row-reverse'>
                            <MDBBtn rounded>Send</MDBBtn>
                        </div>
                    </MDBRow>
                </MDBCol>
                <Notification isAttachContract ={isDeployer} account={props.account}/>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
