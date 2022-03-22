'reach 0.1';
'use strict'
export const main = Reach.App(() => {
    //definition of contract participants
    const NatGov= Participant ('National_Government', {
        isRequestedAmt:Fun([UInt],Null)
    }); 
    const LocalMuni = Participant('Local_Municipality', {
        requestedAmt : UInt,
        requestDescr: Bytes(128),
        meAddress: Address,
    });
    init();

    //actions of each participant
    LocalMuni.only(() =>{
        const localMunAddr = declassify(interact.meAddress);
        const requestAmt = declassify(interact.requestedAmt);
        const requestDescrption = declassify(interact.requestDescr); 
    });
    LocalMuni.publish(localMunAddr, requestAmt, requestDescrption);
    //(Between Publish and Commit) we define constraints on what the Local Municipality can do
    commit();

    NatGov.only(() => {
        //I think this is where we accept or reject the requested amount or funds
        //Lets say that the National government accept the amount by giving you money that is above or below
        interact.isRequestedAmt(requestAmt);
    });

    NatGov.pay(requestAmt);
    transfer(requestAmt).to(localMunAddr);
    commit();


});
