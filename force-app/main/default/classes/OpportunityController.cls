public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static list<Opportunity>getOppList()
    {
        return [SELECT Id,Name FROM OPPORTUNITY  Limit 10];
    }
}