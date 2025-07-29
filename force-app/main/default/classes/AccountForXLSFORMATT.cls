public with sharing class AccountForXLSFORMATT {
   @AuraEnabled(cacheable=true)
   public static List<Account>getAllAccounts(){
    return ([SELECT Id,Name,Phone,Website,Fax,Type FROM Account]);
   }
   @AuraEnabled
   public static List<Case> getCaseDetails(String AccountId){
      return ([SELECT Id,CaseNumber,Account.Name,AccountId,Status,Origin FROM Case WHERE AccountId=:AccountId]);
   }
}