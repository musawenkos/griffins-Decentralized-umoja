import React from 'react'
import {MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import Notification from '../../Notification/notification.js';


export default function TreasuryView(props) {
    
    
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <Notification isRequester={false} account={props.account} type="NG"/>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
