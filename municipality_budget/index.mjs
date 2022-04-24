import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accNatGov = await stdlib.newTestAccount(startingBalance);
const accLocalMun1 = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeNatGov = await getBalance(accNatGov);
const beforeLocalMun1 = await getBalance(accLocalMun1);


//This works fine
//Do the participant who deploys the contract is the first person to interact at the contract / backend 
const ctcLocalMun1 = accLocalMun1.contract(backend);
const ctcNatGov = accNatGov.contract(backend, ctcLocalMun1.getInfo());



await Promise.all([
    //What if I sent lower or above the requested amount
    ctcLocalMun1.p.Local_Municipality({
        requestedAmt : stdlib.parseCurrency(10),
        requestDescr: 'I need that to buy Okuhle earphones',
        meAddress: accLocalMun1.networkAccount,
    }),
    ctcNatGov.p.National_Government({
        isRequestedAmt: (amt) => {
            console.log(`I have sent an amount ${amt}`); 
        }
    }),
    
]);

const afterNatGov = await getBalance(accNatGov);
const afterLocalMun1 = await getBalance(accLocalMun1);

console.log(`National Government went from ${beforeNatGov} to ${afterNatGov}.`);
console.log(`Local Municipality1 went from ${beforeLocalMun1} to ${afterLocalMun1}.`);

