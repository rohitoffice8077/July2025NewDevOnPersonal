public class UpdateCloseDateFuture implements Queueable {
    public List<Opportunity>oppList;
    public Map<id,Date>olMap;
     public UpdateCloseDateFuture(List<Opportunity>oppList,Map<id,Date>olMap){
        this.oppList=oppList;
        this.olMap=olMap;
        System.debug(LoggingLevel.DEBUG, 'test');
        System.debug('');
    }
    public void execute(QueueableContext context){
        List<Opportunity>oppListToUpdate=new List<Opportunity>();
        for(Opportunity oppRecord:oppList)
        {
            oppRecord.CloseDate=olMap.get(oppRecord.id);
            oppListToUpdate.add(oppRecord);
        }
        if(!oppListToUpdate.isEmpty())
        {
            update oppListToUpdate;
        }
    }

}