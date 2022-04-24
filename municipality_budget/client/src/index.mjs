import { loadStdlib,ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

let isServiceProvider= false;
let isNatGov= false;
let typeUserReq = '';
let typeUserDon = '';
let requestAmt = 0;
let requestDescr='';
let donorQuestion=false;


let isRequester = await ask.ask(
    `Are you a Requester?`,
    ask.yesno
  );
  while(isRequester==false){
    isRequester = await ask.ask(
        `Are you a Requester?`,
        ask.yesno
      );     
  }
  if(isRequester){
     isServiceProvider = await ask.ask(
        `Are you a Service Provider?`,
        ask.yesno,
      );
     // isServiceProvider=false; he is definately Local Municipality
     if (isServiceProvider){
        typeUserReq= 'SP'
        typeUserDon='LM'
          requestDescr = await ask.ask(
            `Why do you need this money ?`,
            (x => x)
          );
          requestAmt = await ask.ask(
            `How much do you need ?`,
            stdlib.parseCurrency
          ); 
     }else{
        typeUserReq= 'LM'
        typeUserDon='NG'
        requestDescr = await ask.ask(
            `Why do you need this money ?`,
            (x => x)
          );
          requestAmt = await ask.ask(
            `How much do you need ?`,
            stdlib.parseCurrency
          );
    }
    /*  'SP' means Service Provider
        'LM' means Local Municipality
        'NG' means National Government */

    donorQuestion = await ask.ask( 
        `${typeUserReq} wants ${requestAmt} for the following reason ${requestDescr} ,do you wish to give them?`,
        ask.yesno
      );
    


       
  }


const startingBalance = stdlib.parseCurrency(100);
const accRequester = await stdlib.newTestAccount(startingBalance);
const accDonor = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 2);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeRequest = await getBalance(accRequester);
const beforeDonor = await getBalance(accDonor);


//This works fine
//Do the participant who deploys the contract is the first person to interact at the contract / backend 
const ctcRequester = accRequester.contract(backend);
const ctcDonor = accDonor.contract(backend, ctcRequester.getInfo());

if (donorQuestion){
    await Promise.all([
        //What if I sent lower or above the requested amount
        ctcRequester.p.Requester({
            requestedAmt : requestAmt,
            requestDescr: requestDescr,
            meAddress: accRequester.networkAccount,
            typeRequester:typeUserReq,
        }),
        ctcDonor.p.Donor({
            isRequestedAmt: (amt) => {
                console.log(`${typeUserDon} has sent an amount of ${amt} to ${typeUserReq} `); 
                
            },
            typeDonor:typeUserDon,
        }),
        
    ]);
}else{
    console.log(`request has been Rejected`)
}



const afterDonor = await getBalance(accDonor);
const afterRequester = await getBalance(accRequester);

console.log(`${typeUserDon} went from ${beforeDonor} to ${afterDonor}.`);
console.log(`${typeUserReq} went from ${beforeRequest} to ${afterRequester}.`);

ask.done();