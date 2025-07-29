public class AccountTriggerHandler {
    public static void handleAccountInactive(List<Account>accList,Map<Id,Account>oldMap)
    {
        List<Id>accIds = new List<Id>();
        List<Opportunity>oppListToUpdate = new List<Opportunity>();
        for(Account accObj:accList)
        {
            if(accObj.isactive__c!=oldMap.get(accObj.Id).isactive__c && !accObj.isactive__c)
            {
                accIds.add(accObj.Id);
            }
        }
        List<Opportunity>listOfOpp = [SELECT Id,Name,AccountId FROM Opportunity WHERE AccountId IN : accIds AND StageName!='Closed Won'];
        for(Opportunity oppObj:listOfOpp)
        {
            oppObj.StageName='Closed Lost';
            oppListToUpdate.add(oppObj);
        }
        if(!oppListToUpdate.isEmpty())
        {
            Update oppListToUpdate;
        }
    }

}