public class UpdateAccounts {
    public static void updateAccount()
    {
        List<Account>accToBeUpdated =new List<Account>();
        set<Id>accIdSet=new Set<Id>();
        
        for(Contact con:[select Id,Account.Id from Contact where Name like '%Test%' And Account.Id!=null])
        {
            if(!accIdSet.contains(con.Account.Id))
            {
                Account acc=new Account();
                acc.Id=con.Account.Id;
                acc.Active__c='Yes';
                acc.Rating='Hot';
                accToBeUpdated.add(acc);
                accIdSet.add(con.Account.Id);
            }
        }
        if(!accToBeUpdated.isEmpty())
        {
            update accToBeUpdated;
        }
    }

}