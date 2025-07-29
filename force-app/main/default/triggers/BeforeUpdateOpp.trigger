trigger BeforeUpdateOpp on Opportunity (before update) {
    //Map<id,opportunity>nMap = new Map<id,opportunity>();
    Map<id,opportunity>oMap = new Map<id,opportunity>();
    //nMap=trigger.newMap;
    Map<id,Date>oMapPass = new Map<id,Date>();
    list<opportunity>updatedOpp = new list<opportunity>();
    oMap=trigger.oldMap;
    list<Opportunity>oppIds=new list<Opportunity>();
    for(Opportunity oppRecs:trigger.new)
    {
        if((oppRecs.type=='New Customer')&&(oppRecs.StageName=='Closed Won' && oppRecs.StageName!=oMap.get(oppRecs.id).StageName && oMap.get(oppRecs.id).CloseDate>system.today() && oppRecs.CloseDate==oMap.get(oppRecs.id).Closedate))
        {
            Date x= oppRecs.CloseDate;
            system.debug('omapclosedate= '+oMap.get(oppRecs.id).closeDate);
            system.debug('newRecsclosedate= '+oppRecs.CloseDate);
            //oppRecs.CloseDate=oMap.get(oppRecs.id).closeDate;
            oMapPass.put(oppRecs.id,oMap.get(oppRecs.id).CloseDate);
            oppIds.add(oppRecs);
        }
    }
    if(!oppIds.isEmpty())
    {
    System.enqueueJob(new UpdateCloseDateFuture(oppIds,oMapPass));
    }
    
}