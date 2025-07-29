trigger AccountAddressTrigger on Account (before insert,before update) {
	if(trigger.isbefore)
    {
        if(trigger.isinsert || trigger.isupdate)
        {
           for(Account acc:trigger.new)
           {
               if(acc.Match_Billing_Address__c==true)
               {
                   acc.ShippingPostalCode=acc.BillingPostalCode;
               }
           }
        }
    }
}