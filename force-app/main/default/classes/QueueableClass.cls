public class QueueableClass implements Queueable {
    public void execute(QueueableContext context)
    {
        List<Account>accToUpdate=new List<Account>();
        for(Account obj:[select id, type from account where type='Customer - Direct'])
        {
            obj.type='Prospect';
            accToUpdate.add(obj);
        }
        if(!accToUpdate.isEmpty())
        {
            update accToUpdate;
        }
    }
    

}