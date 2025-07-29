public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account>getAccounts() {
        return([SELECT Id,Name,	City__c,Industry,Rating FROM Account order by createddate desc limit 10]);

    }
    @AuraEnabled
    public static list<Account>getAccList() {
        return([SELECT Id,Name,	City__c,Industry,Rating FROM Account order by createddate desc limit 100]);

    }
      
}