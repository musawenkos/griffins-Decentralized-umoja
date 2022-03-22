import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'

export default function MunicipalityView() {
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <MDBRow>
                        <MDBCol>
                            <MDBInput label='Attach code' id='textAreaExample' textarea rows={4} />
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn rounded>Attach</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <div className='d-flex flex-row-reverse text-primary fs-5'>
                            Balance of Money Received : 100 (ALGO)
                        </div>
                    </MDBRow>
                    <MDBRow className='mt-4'>
                        <MDBCol>
                            <MDBInput label='Amount(ALGO):' id='formControlDefault' type='text' />
                        </MDBCol>
                        <MDBCol>
                            <select className="browser-default custom-select">
                                <option>Select Local Suppliers</option>
                                <option value="1">BME Group of Companies</option>
                                <option value="2">Arrow Chem Chemical Manufacturers</option>
                                <option value="3">The Cleaning Company Pty Ltd</option>
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
                    <div className='d-flex align-items-center justify-content-center mt-3'><h3 className='text-primary text-uppercase fw-bold'>Payment to Suppliers</h3></div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
