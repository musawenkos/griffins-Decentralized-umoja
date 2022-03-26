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
      1: [ctc0, ctc1]
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
export async function Local_Municipality(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Local_Municipality expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Local_Municipality expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc2 = stdlib.T_UInt;
  
  
  const v55 = stdlib.protect(ctc0, interact.meAddress, 'for Local_Municipality\'s interact field meAddress');
  const v56 = stdlib.protect(ctc1, interact.requestDescr, 'for Local_Municipality\'s interact field requestDescr');
  const v57 = stdlib.protect(ctc2, interact.requestedAmt, 'for Local_Municipality\'s interact field requestedAmt');
  
  const txn1 = await (ctc.sendrecv({
    args: [v55, v57, v56],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v61, v62, v63], secs: v65, time: v64, didSend: v31, from: v60 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v61, v62, v63], secs: v65, time: v64, didSend: v31, from: v60 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v70, time: v69, didSend: v40, from: v68 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
export async function National_Government(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for National_Government expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for National_Government expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v61, v62, v63], secs: v65, time: v64, didSend: v31, from: v60 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.isRequestedAmt(v62), {
    at: './index.rsh:28:32:application',
    fs: ['at ./index.rsh:25:16:application call to [unknown function] (defined at: ./index.rsh:25:20:function exp)'],
    msg: 'isRequestedAmt',
    who: 'National_Government'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v61, v62],
    evt_cnt: 0,
    funcNum: 1,
    lct: v64,
    onlyIf: true,
    out_tys: [],
    pay: [v62, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v70, time: v69, didSend: v40, from: v68 } = txn2;
      
      sim_r.txns.push({
        amt: v62,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v62,
        kind: 'from',
        to: v61,
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
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v70, time: v69, didSend: v40, from: v68 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEgJgIAAQAiNQAxGEEBCChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAD4jEkQjNAESRDQESSISTDQCEhFEKWRJNQMkWzX/gASai5F0sDT/iADAsSKyATT/sggjshA0A1cAILIHs0IAVEgiNAESRDQESSISTDQCEhFESTUFSUlXACA1/yRbNf5XKIA1/YAEXLBjsjT/UDT+FlA0/VCwgaCNBogAbjT/NP4WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
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
                "name": "v63",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
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
                "name": "v63",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516108373803806108378339810160408190526100229161027a565b6000805543600355604080518251815260208084015180516001600160a01b031682840152808201518385015283015180516060808501919091529181015160808401528084015160a0840152015160c082015290517f6bc4813e893db1f38cdf042e8f9243870a7b3f0c329eb5d68661d33dda55e6509181900360e00190a16100ae34156007610122565b604080518082018252600080825260208083018281528582018051516001600160a01b03168086529051830151825260019384905543909355845180830193909352518285015283518083038501815260609092019093528051919261011a926002929091019061014b565b50505061036d565b816101475760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015790610332565b90600052602060002090601f01602090048101928261017957600085556101bf565b82601f1061019257805160ff19168380011785556101bf565b828001600101855582156101bf579182015b828111156101bf5782518255916020019190600101906101a4565b506101cb9291506101cf565b5090565b5b808211156101cb57600081556001016101d0565b604080519081016001600160401b038111828210171561021457634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b038111828210171561021457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561021457634e487b7160e01b600052604160045260246000fd5b600081830360e081121561028d57600080fd5b6102956101e4565b8351815260c0601f19830112156102ab57600080fd5b6102b361021a565b60208501516001600160a01b03811681146102cd57600080fd5b8152604085015160208201526080605f19840112156102eb57600080fd5b6102f361024a565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015282604082015280602083015250809250505092915050565b600181811c9082168061034657607f821691505b6020821081141561036757634e487b7160e01b600052602260045260246000fd5b50919050565b6104bb8061037c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461033f565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610227565b604051610064929190610357565b6100c860016000541460096102c4565b6100e2813515806100db57506001548235145b600a6102c4565b6000808055600280546100f4906103b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103b4565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103e9565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101b6919061045b565b60405180910390a16101cf8160200151341460086102c4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561020c573d6000803e3d6000fd5b5060008080556001819055610223906002906102e9565b5050565b60006060600054600280805461023c906103b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610268906103b4565b80156102b55780601f1061028a576101008083540402835291602001916102b5565b820191906000526020600020905b81548152906001019060200180831161029857829003601f168201915b50505050509050915091509091565b816102235760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102f5906103b4565b6000825580601f10610305575050565b601f0160209004906000526020600020908101906103239190610326565b50565b5b8082111561033b5760008155600101610327565b5090565b60006040828403121561035157600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561038b5785810183015185820160600152820161036f565b8181111561039d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103c857607f821691505b6020821081141561035157634e487b7160e01b600052602260045260246000fd5b6000604082840312156103fb57600080fd5b6040516040810181811067ffffffffffffffff8211171561042c57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461044657600080fd5b81526020928301519281019290925250919050565b8135815260408101602083013580151580821461047757600080fd5b80602085015250509291505056fea2646970667358221220746fbfa847e010b8e64521c6959146e538ddb8110f95f13bc81d4d00a73c449e64736f6c634300080c0033`,
  BytecodeLen: 2103,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:13:after expr stmt semicolon',
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
  "Local_Municipality": Local_Municipality,
  "National_Government": National_Government
  };
export const _APIs = {
  };
