trigger exampleBeforeUpdate on Account (before update) {
    Map<Id,Account>nMap=new Map<Id,Account>();
    nMap=trigger.newMap;
    List<Contact>cList=[SELECT LastName,MailingCity,AccountID FROM contact WHERE AccountId in :nMap.keyset()];
    for(contact c:cList)
    {
        Account a=nMap.get(c.AccountId);
        c.MailingCity=a.billingstate;
    }
    update cList;

}