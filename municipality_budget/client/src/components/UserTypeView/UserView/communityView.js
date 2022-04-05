import React,{useState, useEffect} from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBRow,MDBIcon,MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, } from 'mdb-react-ui-kit'
    import InputLabel from '@mui/material/InputLabel';
    import MenuItem from '@mui/material/MenuItem';
    import FormControl from '@mui/material/FormControl';
    import Select from '@mui/material/Select';
    import UsersDataService from '../../../services/users_service';
import AccountTransaction from '../../AlgorandSDKResultComp/accountTrans';
export default function CommunityView() {
    const [userTypeFilter, setUserTypeFilter] = useState('');
    const [showModal, getModal] = useState(false);
    const [listAccTrans,setAccTrans] = useState();
    
    
    const closeModal = () =>{
        getModal(false);
    }

    const setModalBox = (e) =>{
        setUserTypeFilter(e.target.id);
        getModal(true);
        setAccTrans();
    }

    const getTransactionByAccount = (selAccount) => {
        const url = "http://localhost:5000/transactions/" + selAccount;
      fetch(url)
      .then(response => response.json())
      .then((results) => setAccTrans(results));
      getModal(false);
    }
    
    const accTxComponent = listAccTrans !== undefined ? listAccTrans.map((accTx) => {
        return <AccountTransaction  key={accTx.txId} tx={accTx}/>
    }) : '';

  return (
      
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <h4 className='text-primary text-uppercase fw-bold'>Treasury Transactions </h4>
                        <MDBBtn id='treasury' onClick={setModalBox}><MDBIcon fas icon="filter" />Filter</MDBBtn>
                    </div>
                    <div style={{height:"65vh", overflow:"scroll"}}>
                       {accTxComponent}
                    </div>
                </MDBCol>
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <h4 className='text-primary text-uppercase fw-bold'>Local Municipality Transactions </h4>
                        <MDBBtn id='municipality' onClick={setModalBox}><MDBIcon fas icon="filter" />Filter</MDBBtn>
                    </div>
                    <div style={{height:"65vh", overflow:"scroll"}}>
                        
                        
                    </div>
                </MDBCol>
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <h4 className='text-primary text-uppercase fw-bold'>Service Provider Transactions </h4>
                        <MDBBtn id='service provider' onClick={setModalBox}><MDBIcon fas icon="filter"/>Filter</MDBBtn>
                    </div>
                    <div style={{height:"65vh", overflow:"scroll"}}>
                        
                        
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <FilterModal type={userTypeFilter} isModalShowned={showModal} closeModal={closeModal} getTransactionByAccount={getTransactionByAccount}/>
    </div>
  )
}


function FilterModal(props) {
    const [listUsers,getUsers] = useState([]); //set users coming from database
    const [selectedAccount, onSelAccount] = useState('');
    
    const getUsersByType = async () => {
        if(props.type !== ''){
            if(props.type === 'treasury'){
                const data = await UsersDataService.getUsersByType("Treasury");
                getUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            }else if(props.type === 'municipality'){
                const data = await UsersDataService.getUsersByType("Municipality");
                getUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            }else if(props.type === 'service provider'){

            }
        }
    }

    const onChange = (e) => {
        onSelAccount(e.target.value);
      };
    

    useEffect(() => {
        getUsersByType();
    },[props.type]);

  return (
    <div>
        <MDBModal show={props.isModalShowned}  tabIndex='-1'>
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle className='text-primary text-uppercase fw-bold'>{props.type} Transactions Filter </MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={props.closeModal}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Select List of {props.type} users</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Select List of Suppliers"
                            value={selectedAccount}
                            onChange={onChange}
                        >
                            <MenuItem value=""></MenuItem>
                            {
                                listUsers.map((user) => {
                                    return <MenuItem key={user.email} value={user.wallet_address}>{user.user_type_function}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color='secondary' onClick={props.closeModal}>
                    Close
                </MDBBtn>
                <MDBBtn onClick={() => props.getTransactionByAccount(selectedAccount)}>Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </div>
  )
}
