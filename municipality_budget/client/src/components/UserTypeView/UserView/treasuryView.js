import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TreasuryView(props) {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    
                    <MDBRow className='mt-5'>
                        <MDBRow>
                            <MDBInput label='Amount(ALGO):' id='formControlDefault' type='text' />
                        </MDBRow>
                        <MDBRow className='mt-2'>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Local Municipality</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
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
