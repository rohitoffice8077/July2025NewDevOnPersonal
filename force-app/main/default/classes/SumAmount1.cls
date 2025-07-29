public class SumAmount1 implements Database.Batchable<sObject>,database.stateful{
public Decimal sum=0;
public Database.QueryLocator start(Database.BatchableContext bc){
return Database.getQueryLocator('select Id, Amount From Opportunity');
}
public void execute(Database.BatchableContext bc,List<Opportunity> oppList){
for(Opportunity opp : oppList){
sum = sum + opp.amount;
}
}
public void finish(Database.BatchableContext bc){
system.debug('sum of amount in opprtunity'+sum);
}
}