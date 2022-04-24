'reach 0.1';
'use strict';
export const main = Reach.App(() => {
  const Donor = Participant ('Donor', {
    isRequestedAmt:Fun([UInt],Null),
    typeDonor: Bytes(2),
}); 
const Requester = Participant('Requester', {
    requestedAmt : UInt,
    requestDescr: Bytes(128),
    meAddress: Address,
    typeRequester: Bytes(2),
});
  init();
    //actions of each participant
  Requester.only(() =>{
    const addr = declassify(interact.meAddress);
    const requestAmt = declassify(interact.requestedAmt);
    const requestDescrption = declassify(interact.requestDescr);
    const typeRequester = declassify(interact.typeRequester);
    assume(interact.typeRequester == "LM" || interact.typeRequester == "SP");
  });
  Requester.publish(addr, requestAmt, requestDescrption,typeRequester);
  //(Between Publish and Commit) we define constraints on what the Local Municipality can do
  commit();

  Donor.only(() => {
      //I think this is where we accept or reject the requested amount or funds
      //Lets say that the National government accept the amount by giving you money that is above or below 
      interact.isRequestedAmt(requestAmt);
      const typeDonor = declassify(interact.typeDonor);
      assume(interact.typeDonor == "LM" || interact.typeDonor == "NG");
  });
  Donor.publish(typeDonor);
  //Before we make transfer let's make validation on type between Donor and Requester:
  //Requester: Treasury/Municipality/Service_Provider && Donor: Treasury/Municipality/Service_Provider (Donor or Requester must not be the same)  =>  false 
  commit();

  Donor.pay(requestAmt);
  transfer(requestAmt).to(addr);
  commit();
  exit();
});
