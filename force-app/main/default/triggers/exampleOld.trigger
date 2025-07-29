trigger exampleOld on Account (before update) {
    list<Account>aNew=trigger.new;
    list<Account>aOld=trigger.old;
    for(Account aNew1:aNew)
    {
        for(Account aOld1:aOld)
        {
            if(aNew1.id==aOld1.id)
            {
                system.debug('new value '+aNew1.Name);
                system.debug('old value '+ aOld1.Name);
            }
        }
    }

}