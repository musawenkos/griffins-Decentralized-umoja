import React, {useContext} from 'react'
import {MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { AppContext } from '../../../state_management/AppContext'
import Notification from '../../Notification/notification.js';


export default function TreasuryView(props) {
    const appContext = useContext(AppContext);
    
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
