import React,{useState} from 'react'
import * as backend from "../../../build/index.main.mjs";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import {loadStdlib} from '@reach-sh/stdlib';


const reach = loadStdlib("ALGO");

export default function ServiceProviderView(props) {
    const [ctcInfoStr,setCTCInfor] = useState('');
    const [isAttached,setAttachCode] = useState(false);
    const [formValue, setFormValue] = useState({
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
        let typeRequester = "SP";
        backend.Requester(ctc,{requestedAmt, requestDescr, meAddress,typeRequester});
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        setCTCInfor(ctcInfoStr);
        setAttachCode(true);
    };

    const copyToClipborad = async () => {
        navigator.clipboard.writeText(ctcInfoStr);
        alert('Copied!');
    };

    const requestView = <MDBRow>
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
            <MDBBtn rounded onClick={onDeploy}>Send Request</MDBBtn>
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
                    {isAttached ? attachCode : requestView}
                </MDBCol>
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'><h3 className='text-primary text-uppercase fw-bold'>Payed by Municipality</h3></div>
                    <div style={{height:"65vh"}}></div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
