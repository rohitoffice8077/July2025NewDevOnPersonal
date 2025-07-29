public class BatchClsToAcc implements Database.Batchable<SObject>{
String query;
public Database.QueryLocator start(Database.BatchableContext bc){
query = 'Select id,ContactsExternalIds__c from Account';
return Database.getQueryLocator(query);
}
public void execute (Database.BatchableContext bc, List<Account> scope){
List<Id>AccIdList=new List<Id>();
for(Account acc:scope)
{
  AccIdList.add(acc.Id);
}
    List<Contact>conList=new List<Contact>();
    List<Account>AccountListToUpdate=new List<Account>();
    conList=[Select Id,AccountId From Contact where AccountId IN : AccIdList];
    for(Account acc:scope)
    {
        for(Contact con:conList)
        {
            if(con.AccountId==acc.Id)
            {
                string test=acc.ContactsExternalIds__c!=null?acc.ContactsExternalIds__c:'';
                acc.ContactsExternalIds__c=test +','+ con.Id;
            }
        }
        AccountListToUpdate.add(acc);
    }  
    update AccountListToUpdate;
}
public void finish(Database.BatchableContext bc){
    System.debug('Batch Class Run Successfully');
}

}