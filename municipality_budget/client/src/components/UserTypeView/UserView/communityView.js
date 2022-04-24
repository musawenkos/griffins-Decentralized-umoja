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
    const [listAllAccTrans,setAllAccTrans] = useState();
    //const [isAllTranx,setAllTranx] = useState(false);
    
    
    
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
      .then((results) => setAllAccTrans(results));
      getModal(false);
      
    }

    const getAllTransaction = async() => {
        let listUsersArr = '';
        const data = await UsersDataService.getAllUsers();
        data.docs.map((doc) => listUsersArr += doc.get('wallet_address') + ",")
        console.log(JSON.stringify(listUsersArr));
        const url = "http://localhost:5000/allTransactions/" + listUsersArr;
      fetch(url)
      .then(response => response.json())
      .then((results) => setAllAccTrans(results));
      //getModal(false);
      
    }
    
    const accTxComponent = listAccTrans !== undefined ? listAccTrans.map((accTx) => {
        return <AccountTransaction  key={accTx.txId} tx={accTx} />
    }) : '';
    const accAllTxComponent = listAllAccTrans !== undefined ? listAllAccTrans.map((accTx) => {
        return <AccountTransaction  key={accTx.txId} tx={accTx} />
    }) : '';

    useEffect(() => {
        getAllTransaction();
    },[]);

  return (
      
    <div>
        <MDBContainer>
            <MDBRow >
                <MDBCol className='shadow-5'>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <h4 className='text-primary text-uppercase fw-bold'>All Transactions </h4>
                        
                    </div>
                    <div style={{height:"65vh", overflow:"scroll"}}>
                       {showModal ?  accTxComponent : accAllTxComponent}
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBBtn id='treasury' onClick={setModalBox}><MDBIcon fas icon="filter" />Filter</MDBBtn>
            </MDBRow>
        </MDBContainer>
        <FilterModal type={userTypeFilter} isModalShowned={showModal} closeModal={closeModal} getTransactionByAccount={getTransactionByAccount}/>
    </div>
  )
}


function FilterModal(props) {
    const [listUsers,getUsers] = useState([]); //set users coming from database
    const [selectedAccount, onSelAccount] = useState('');
    const [selectedType, setselectedType] = useState('');
    
    const getUsersByType = async (type) => {
        if(type !== ''){
            if(type === 'treasury'){
                const data = await UsersDataService.getUsersByType("Treasury");
                getUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            }else if(type === 'municipality'){
                const data = await UsersDataService.getUsersByType("Municipality");
                getUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            }else if(type === 'service provider'){
                const data = await UsersDataService.getUsersByType("Service Provider");
                getUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            }
        }
    }

    const onSelectTypeChange = async(e) =>{
        setselectedType(e.target.value)
        getUsersByType(e.target.value);
    }

    const onChange = (e) => {
        onSelAccount(e.target.value);
      };
    

  return (
    <div>
        <MDBModal show={props.isModalShowned}  tabIndex='-1'>
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle className='text-primary text-uppercase fw-bold'>Transactions Filter </MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={props.closeModal}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBRow>
                        <FormControl variant="standard" sx={{ p: 3, minWidth: 120 }} >
                            <InputLabel id="demo-simple-select-standard-label">Select User Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Select List of Suppliers"
                                value={selectedType}
                                onChange={onSelectTypeChange}
                            >
                                <MenuItem value=""></MenuItem>
                                <MenuItem value="treasury">Treasury</MenuItem>
                                <MenuItem value="municipality">Municipality</MenuItem>
                                <MenuItem value="service provider">Service Provider</MenuItem>
                                
                            </Select>
                        </FormControl>
                    </MDBRow>
                    <MDBRow>
                        <FormControl variant="standard" sx={{ p: 3, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Select List of {selectedType} users</InputLabel>
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
                    </MDBRow>
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
