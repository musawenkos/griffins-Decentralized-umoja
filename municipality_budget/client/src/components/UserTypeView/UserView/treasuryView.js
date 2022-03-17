import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
export default function TreasuryView(props) {
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <MDBRow>
                        <div className='d-flex flex-row-reverse text-primary fs-5'>
                            Balance : 100 (ALGO)
                        </div>
                    </MDBRow>
                    <MDBRow className='mt-4'>
                        <MDBCol>
                            <MDBInput label='Amount(ALGO):' id='formControlDefault' type='text' />
                        </MDBCol>
                        <MDBCol>
                            <select className="browser-default custom-select">
                                <option>Select Local Municipality</option>
                                <option value="1">City of Cape Town Metropolitan Municipality</option>
                                <option value="2">City of Ekurhuleni Metropolitan Municipality</option>
                                <option value="3">City of Johannesburg Metropolitan Municipality</option>
                            </select>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='m-2'>
                        <div className='d-flex flex-row-reverse'>
                            <MDBBtn rounded>Send</MDBBtn>
                        </div>
                    </MDBRow>
                </MDBCol>
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'><h3 className='text-primary text-uppercase fw-bold'>Payed Municipality</h3></div>
                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
