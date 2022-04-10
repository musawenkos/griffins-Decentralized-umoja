import React, {useState} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import * as backend from "../../../build/index.main.mjs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function TreasuryView(props) {
    const [ctcInfoStr,setCTCInfor] = useState('');

    const onChange = (e) => {
        setCTCInfor(e.target.value);
    };

    const isRequestedAmt = (amt) => {
        console.log(amt);
    };
    
    const onAttached = async () => {
        console.log(ctcInfoStr);
        const ctc = props.account.contract(backend, JSON.parse(ctcInfoStr));
        let typeDonor = "NG";
        backend.Donor(ctc,{isRequestedAmt, typeDonor})
        alert('You have accepted the user amount');
    };
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    
                    <MDBRow className='mt-5'>
                        <MDBRow className='mt-4'>
                            <MDBCol>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                value={ctcInfoStr}
                                onChange={onChange}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn rounded onClick={onAttached}>Attach to Contract</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='mt-2'>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Local Municipality</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select Local Municipality"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>City of Cape Town Metropolitan Municipality</MenuItem>
                                <MenuItem value={20}>City of Ekurhuleni Metropolitan Municipality</MenuItem>
                                <MenuItem value={30}>City of Johannesburg Metropolitan Municipality</MenuItem>
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
                    <div className='d-flex align-items-center justify-content-center mt-3'><h3 className='text-primary text-uppercase fw-bold'>Payed Municipality</h3></div>
                    <div style={{height:"65vh"}}></div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
