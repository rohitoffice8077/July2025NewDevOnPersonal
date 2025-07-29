trigger TASKCOUNT on Task (AFTER insert, AFTER UPDATE, AFTER DELETE, AFTER UNDELETE) {
    LIST<Account>accToUpdate = new List<Account>();
    set<Id>accountIds = new Set<Id>();
    if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete)
    {
        for(TASK tsk :trigger.new)
        {
            accountIds.add(tsk.Whatid);
        }
    }
    if(trigger.isupdate || trigger.isdelete)
    {
        for(TASK tsk :trigger.old)
        {
            accountIds.add(tsk.Whatid);
        }
    }
    for(AggregateResult ar:[Select count(Id)taskcount,Whatid from task where whatid in:accountIds group by whatid])
    {
        accToUpdate.add(new account(Id=(id)ar.get('Whatid'),rohitsiso__TASK_COUNT__c=(integer)ar.get('taskcount')));
    }
	update accToUpdate;
}