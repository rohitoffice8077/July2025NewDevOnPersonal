trigger PopulateChangedCityToDefault on Account (before insert,before update) {
    if(trigger.isBefore && trigger.isInsert)
    {
        for(Account acc : trigger.new)
        {
            acc.city__c = 'Dhampur';
        }
    }
    if(trigger.isBefore && trigger.isUpdate)
    {
        Map<Id,Account>oldMapAcc = trigger.oldMap;
        for(Account acc : trigger.new)
        {
            if(oldMapAcc.get(acc.id).city__c=='Dhampur' && acc.City__c!=oldMapAcc.get(acc.id).city__c)
            {
                    system.debug('test------>'+oldMapAcc.get(acc.id));
                	acc.Country__c='India';
            }
        }
    }

}