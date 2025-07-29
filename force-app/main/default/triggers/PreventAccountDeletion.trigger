trigger PreventAccountDeletion on account(before delete)
{
list<Id>listOfAccIds = new List<Id>();
For(Account acc:trigger.old)
	{
		listOfAccIds.add(acc.id);
	}
	Map<Id,AggregateResult>relatedOpps = new Map<Id,AggregateResult>([Select AccountId,COUNT(Id)oppsCount FROM Opportunity where accountid in :listOfAccIds group by AccountId]);
	for(Account acc:trigger.old)
	{
		if(relatedOpps.containskey(acc.Id)&&(Integer)relatedOpps.get(acc.Id).get('oppsCount')>0)
		{
		acc.addError('Cannot delete Account with related Opportunities.');
		}
	}
}