import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MunicipalityView() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <MDBRow>
                        <MDBCol>
                            <MDBInput label='Attach code' id='textAreaExample' textarea rows={4} cols={5} />
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn rounded>Attach</MDBBtn>
                        </MDBCol>
                    </MDBRow>
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
                                value={age}
                                onChange={handleChange}
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
