import React, {useState} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import * as backend from "../../../build/index.main.mjs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {loadStdlib} from '@reach-sh/stdlib';

const reach = loadStdlib("ALGO");

export default function MunicipalityView(props) {
    const [ctcInfoStr,setCTCInfor] = useState('');
    const [isAttached,setAttachCode] = useState(false);
    const [formValue, setFormValue] = useState({
        age : 0,
        requestedAmt: 0,
        requestedDecr: '',
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    {isAttached ? attachCode : deployView}
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
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'><h3 className='text-primary text-uppercase fw-bold'>Payment to Suppliers</h3></div>
                    <div style={{height:"60vh"}}></div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}