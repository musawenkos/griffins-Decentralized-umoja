// Automatically generated with Reach 0.1.9 (78dbf873)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (78dbf873)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Donor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  
  
  const v86 = stdlib.protect(ctc0, interact.typeDonor, 'for Donor\'s interact field typeDonor');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc1, ctc2, ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107, v108], secs: v110, time: v109, didSend: v45, from: v104 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.isRequestedAmt(v106), {
    at: './index.rsh:30:30:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'isRequestedAmt',
    who: 'Donor'
    });
  const v113 = 'LM';
  const v114 = stdlib.digest(ctc5, [v86]);
  const v116 = stdlib.digest(ctc5, [v113]);
  const v117 = stdlib.digestEq(v114, v116);
  const v118 = 'NG';
  const v121 = stdlib.digest(ctc5, [v118]);
  const v122 = stdlib.digestEq(v114, v121);
  const v123 = v117 ? true : v122;
  stdlib.assert(v123, {
    at: './index.rsh:32:13:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: null,
    who: 'Donor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v105, v106, v86],
    evt_cnt: 1,
    funcNum: 1,
    lct: v109,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v125], secs: v127, time: v126, didSend: v64, from: v124 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v125], secs: v127, time: v126, didSend: v64, from: v124 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v105, v106, v124],
    evt_cnt: 0,
    funcNum: 2,
    lct: v126,
    onlyIf: true,
    out_tys: [],
    pay: [v106, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v130, time: v129, didSend: v71, from: v128 } = txn3;
      
      sim_r.txns.push({
        amt: v106,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v133 = stdlib.addressEq(v124, v128);
      ;
      sim_r.txns.push({
        amt: v106,
        kind: 'from',
        to: v105,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v130, time: v129, didSend: v71, from: v128 } = txn3;
  ;
  const v133 = stdlib.addressEq(v124, v128);
  stdlib.assert(v133, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Donor'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Requester(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Requester expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Requester expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc4 = stdlib.T_Tuple([ctc3]);
  
  
  const v87 = stdlib.protect(ctc0, interact.meAddress, 'for Requester\'s interact field meAddress');
  const v88 = stdlib.protect(ctc1, interact.requestDescr, 'for Requester\'s interact field requestDescr');
  const v89 = stdlib.protect(ctc2, interact.requestedAmt, 'for Requester\'s interact field requestedAmt');
  const v90 = stdlib.protect(ctc3, interact.typeRequester, 'for Requester\'s interact field typeRequester');
  
  const v93 = 'LM';
  const v94 = stdlib.digest(ctc4, [v90]);
  const v96 = stdlib.digest(ctc4, [v93]);
  const v97 = stdlib.digestEq(v94, v96);
  const v98 = 'SP';
  const v101 = stdlib.digest(ctc4, [v98]);
  const v102 = stdlib.digestEq(v94, v101);
  const v103 = v97 ? true : v102;
  stdlib.assert(v103, {
    at: './index.rsh:21:11:application',
    fs: ['at ./index.rsh:16:17:application call to [unknown function] (defined at: ./index.rsh:16:21:function exp)'],
    msg: null,
    who: 'Requester'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v87, v89, v88, v90],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v105, v106, v107, v108], secs: v110, time: v109, didSend: v45, from: v104 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107, v108], secs: v110, time: v109, didSend: v45, from: v104 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v125], secs: v127, time: v126, didSend: v64, from: v124 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v130, time: v129, didSend: v71, from: v128 } = txn3;
  ;
  const v133 = stdlib.addressEq(v124, v128);
  stdlib.assert(v133, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Requester'
    });
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAWkpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACXSSQMQABHJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEQbFATbA0/4gBGzQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCAKZIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BTX9gAQoiyhhNP1QsDT/NP4WUDEAUChLAVcASGdIJDUBMgY1AkIAeEgiNAESRDQESSISTDQCEhFESTUFSUpXACA1/yVbNf5XKIA1/VeoAjX8gAQtT1zSNP9QNP4WUDT9UDT8ULCBoI0GiABuNP80/hZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v107",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes2",
                    "name": "elem0",
                    "type": "bytes2"
                  }
                ],
                "internalType": "struct T2",
                "name": "v108",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v107",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes2",
                    "name": "elem0",
                    "type": "bytes2"
                  }
                ],
                "internalType": "struct T2",
                "name": "v108",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes2",
                    "name": "elem0",
                    "type": "bytes2"
                  }
                ],
                "internalType": "struct T2",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes2",
                    "name": "elem0",
                    "type": "bytes2"
                  }
                ],
                "internalType": "struct T2",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000bd138038062000bd18339810160408190526200002691620002e5565b6000805543600355604080518251815260208084015180516001600160a01b03168284015280820151838501528084015180516060808601919091529281015160808501528085015160a085015282015160c08401520151516001600160f01b03191660e082015290517ff9c40114523e3fb45b25a3b4a574d96f529e0b3fa0832b0e727131150ed17450918190036101000190a1620000c93415600762000140565b604080518082018252600080825260208083018281528582018051516001600160a01b0316808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926200013792600292909101906200016a565b505050620003f4565b81620001665760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017890620003b7565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b604080519081016001600160401b03811182821017156200024157634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200024157634e487b7160e01b600052604160045260246000fd5b6000602082840312156200028b57600080fd5b604051602081016001600160401b0381118282101715620002bc57634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160f01b031981168114620002dd57600080fd5b905292915050565b6000818303610100811215620002fa57600080fd5b6200030462000210565b8351815260e0601f19830112156200031b57600080fd5b6200032562000247565b60208501516001600160a01b03811681146200034057600080fd5b8152604085015160208201526080605f19840112156200035f57600080fd5b6200036962000247565b9250606085015183526080850151602084015260a0850151604084015260c08501516060840152826040820152620003a58660e0870162000278565b60608201526020820152949350505050565b600181811c90821680620003cc57607f821691505b60208210811415620003ee57634e487b7160e01b600052602260045260246000fd5b50919050565b6107cd80620004046000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780636596908a146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105a0565b6100d6565b6100526100993660046105a0565b610266565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103f0565b60405161006f9291906105c3565b6100e6600160005414600961048d565b610100813515806100f957506001548235145b600a61048d565b60008080556002805461011290610620565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610620565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610671565b90507f7affcf6e3d93f2d5bc03dc80bb14da8aa7c701ca527632c9e3c3bbfaac9b7286826040516101d491906106d6565b60405180910390a16101e83415600861048d565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002958690554360015588518086019190915292518389015290511681850152855180820390940184526080019094528151929361026093919201906104b2565b50505050565b610276600260005414600d61048d565b6102908135158061028957506001548235145b600e61048d565b6000808055600280546102a290610620565b80601f01602080910402602001604051908101604052809291908181526020018280546102ce90610620565b801561031b5780601f106102f05761010080835404028352916020019161031b565b820191906000526020600020905b8154815290600101906020018083116102fe57829003601f168201915b50505050508060200190518101906103339190610708565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610364919061077b565b60405180910390a161037d81602001513414600b61048d565b6040810151610398906001600160a01b03163314600c61048d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103d5573d6000803e3d6000fd5b50600080805560018190556103ec90600290610536565b5050565b60006060600054600280805461040590610620565b80601f016020809104026020016040519081016040528092919081815260200182805461043190610620565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050509050915091509091565b816103ec5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104be90610620565b90600052602060002090601f0160209004810192826104e05760008555610526565b82601f106104f957805160ff1916838001178555610526565b82800160010185558215610526579182015b8281111561052657825182559160200191906001019061050b565b50610532929150610573565b5090565b50805461054290610620565b6000825580601f10610552575050565b601f0160209004906000526020600020908101906105709190610573565b50565b5b808211156105325760008155600101610574565b60006040828403121561059a57600080fd5b50919050565b6000604082840312156105b257600080fd5b6105bc8383610588565b9392505050565b82815260006020604081840152835180604085015260005b818110156105f7578581018301518582016060015282016105db565b81811115610609576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061063457607f821691505b6020821081141561059a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461066c57600080fd5b919050565b60006040828403121561068357600080fd5b6040516040810181811067ffffffffffffffff821117156106b457634e487b7160e01b600052604160045260246000fd5b6040526106c083610655565b8152602083015160208201528091505092915050565b813581526040810160208301356001600160f01b031981168082146106fa57600080fd5b806020850152505092915050565b60006060828403121561071a57600080fd5b6040516060810181811067ffffffffffffffff8211171561074b57634e487b7160e01b600052604160045260246000fd5b60405261075783610655565b81526020830151602082015261076f60408401610655565b60408201529392505050565b813581526040810160208301358015158082146106fa57600080fdfea2646970667358221220d93e0f61b90f1d429fb6fbf9dbcd5d8c2b9eded9e3285a42a63c39856f5d0e9764736f6c634300080c0033`,
  BytecodeLen: 3025,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Donor": Donor,
  "Requester": Requester
  };
export const _APIs = {
  };
