import React from 'react'
import {MDBRow,MDBCol} from 'mdb-react-ui-kit'

export default function AccountTransaction(props) {

  return (
    <MDBRow className='shadow-5 mt-2'>
        <MDBRow>
            <MDBCol md='8' >
                <div className="d-inline-block text-truncate" style={{fontSize:"10px","maxWidth": "240px"}}>{props.tx.txId}</div>
            </MDBCol>
            <MDBCol md='4'>
                <span style={{fontSize:"12px","marginLeft": "20px"}}>Fee: {props.tx.receiverInnerTrans[0]["payment-transaction"]["amount"] / 1000000} </span>
            </MDBCol>
        </MDBRow>
        <MDBRow>
                <MDBCol md='4'>
                    <div className="text-truncate" style={{fontSize:"10px","maxWidth": "150px"}}><b>FROM:</b> National Government</div>
                </MDBCol>
                <MDBCol md='4'>
                    <div className="text-truncate" style={{fontSize:"10px","maxWidth": "150px"}}><b>TO:</b> National Government</div>
                </MDBCol>
            </MDBRow>
    </MDBRow>
  )
}
