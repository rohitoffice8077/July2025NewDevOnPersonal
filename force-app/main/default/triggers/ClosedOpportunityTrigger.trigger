trigger ClosedOpportunityTrigger on Opportunity (After insert,After update) {
    List<task>taskList=new List<task>();
	if(trigger.isAfter)
    {
        if(trigger.isInsert || trigger.isUpdate)
        {
            for(Opportunity oppObj:trigger.new)
            {
                if(oppObj.StageName=='Closed Won')
                {
                    Task tk=new Task();
                    tk.subject='Follow Up Test Task';
                    tk.WhatId=oppObj.id;
                    taskList.add(tk);
                }
            }
        }
    }
    insert taskList;
}