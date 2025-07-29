trigger AccountState on Account (After Update) {
    if(trigger.isAfter && trigger.isUpdate)
    {
        Set<Id>accIds = new Set<Id>();
        Map<Id,Account>accMap = trigger.newMap;
        List<Contact>listOfConToUpdate = new List<Contact>();
        for(Account accObj :accMap.values())
        {
            accIds.add(accObj.Id);
        }
        List<Contact>listOfContact = [SELECT Id,Name,AccountId,State__c FROM Contact WHERE AccountId IN :accIds];
        for(Contact conObj:listOfContact)
        {
            conObj.state__c=accMap.get(conObj.AccountId).BillingState;
            listOfConToUpdate.add(conObj);
        }
        if(!listOfConToUpdate.isEmpty())
        {
            update listOfConToUpdate;
        }
    }

}