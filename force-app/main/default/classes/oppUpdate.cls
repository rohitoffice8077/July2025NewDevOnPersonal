global class oppUpdate implements Database.Batchable<sObject>, Database.Stateful {
global Decimal sum=0;
global Integer oppCount = 0;
global Database.QueryLocator start(Database.BatchableContext bc){
return Database.getQueryLocator('Select id, TotalOpps__c,Total_Amount__c, (select id, amount from Opportunities) from account');
}
global void execute(Database.BatchableContext bc,List<Account> scope){
List<Account> accsToUpdate = new List<Account>();
for (Opportunity o: [Select Amount From Opportunity]){
sum = sum + o.Amount;
oppCount = oppCount + 1;
}
for(Account a:scope ){
a.Total_Amount__c = sum;
a.TotalOpps__c = oppcount;
accsToUpdate.add(a);
system.debug(sum);
system.debug(oppCount);

}
update accsToUpdate;
}
global void finish(Database.BatchableContext bc){

}
}