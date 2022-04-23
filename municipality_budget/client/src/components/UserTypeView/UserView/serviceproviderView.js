import React,{useState,useEffect,useContext} from 'react'
import * as backend from "../../../build/index.main.mjs";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import {loadStdlib} from '@reach-sh/stdlib';
import Notification from '../../Notification/notification.js';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import UsersDataService from '../../../services/users_service.js';
import RequestDataService from "../../../services/request_service"
import { AppContext } from '../../../state_management/AppContext.js';
import {serverTimestamp} from "firebase/firestore"

const reach = loadStdlib("ALGO");

export default function ServiceProviderView(props) {
    const appContext = useContext(AppContext);
    const [selectedLM,setLM] = useState('');
    const [listMunicipality,getListMunicipality] = useState([]);

    const [formValue, setFormValue] = useState({
        requestedAmt: 0,
        requestedDecr: '',
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };

      const onDeploy = async () => {
        if(selectedLM !== ""){
            let requestedAmt =  reach.parseCurrency(formValue.requestedAmt);
            let requestDescr = formValue.requestedDecr;
            const meAddress = props.account.networkAccount;
            const ctc = props.account.contract(backend);
            let typeRequester = "SP";
            backend.Requester(ctc,{requestedAmt, requestDescr, meAddress,typeRequester});
            const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);


            const newRequestInfor = {
                inforTimestamp: serverTimestamp(),
                requestInforStatus: "NOT USED",
                request_Description: requestDescr,
                request_amount: formValue.requestedAmt,
                requesterInfor:ctcInfoStr,
                requesterUser: appContext.state.email,
                requestEmailTo: selectedLM
            };

            try {
                await RequestDataService.addRequest(newRequestInfor);

            } catch (error) {
                console.error(error.message)
            }
        }else{
            alert("Select the Municipality");
        }
        
    };

    const handleChange = (e) =>{
        console.log(e.target.value)
        setLM(e.target.value)
    }

    const getUser = async () =>{
        const data = await UsersDataService.getUsersByType("Municipality");
        getListMunicipality(data.docs.map((doc) => ({emailTo:doc.get("email"),userFuncTo:doc.get("user_type_function")})));
    }
    useEffect(() => {
        getUser();
    },[]);
    
    const menuItemLM = listMunicipality !== undefined ? listMunicipality.map((muni) =>{
        return <MenuItem key={muni.emailTo} value={muni.emailTo}>{muni.userFuncTo}</MenuItem>
    }): '';

    const requestView = <MDBRow>
        <MDBRow className='mt-4'>
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Select Local Municipality"
            value={selectedLM}
            onChange={handleChange}
            >
            <MenuItem value="" disabled={true}>
                <em>Select Local Municipality</em>
            </MenuItem>
            {menuItemLM}
        </Select>
        </MDBRow>
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
    
    
    
  return (
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    {requestView}
                </MDBCol>
                <Notification isRequester ={true} account={props.account} type="SP"/>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}
