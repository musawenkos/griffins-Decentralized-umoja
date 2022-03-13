'reach 0.1';

export const main = Reach.App(() => {
    
    const TransferFunds = {
        allocateFunds: Fun([UInt], Null),
    }
    const RecieveFunds = {
        getFunds: Fun([],UInt),
    }

    //Participants {NatGov, Muni, and Supp}
    const NatGov = Participant('National Government', {
        budget: UInt,
        ...TransferFunds,
    }); 
    const Muni = Participant('Local Municipality', {
        ...RecieveFunds,
        ...TransferFunds,
        expenditure: UInt,
    });
    const Supp = Participant('Supplier', {
        ...RecieveFunds,
    });
    init();

    //making initial budget funds public
    NatGov.only(() => {
        const budget = declassify(interact.allocateFunds(expenditure));
    });
    NatGov.publish(budget)
        .pay(budget);
    commit();

    //Municipality recieves funds from the government
    Muni.only(() => {
        interact.getFunds();
    });
    commit();

    //Municipality spending funds
    Muni.only(() => {
        const expenditure = declassify(interact.allocateFunds(expenditure));
    });
    Muni.publish(expenditure).pay(expenditure);
    commit();

    //Supplier recieving funds
    Supp.only(() => {
        interact.getFunds();
    });
    commit();
});