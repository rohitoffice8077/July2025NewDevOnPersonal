trigger FirstTrigger on Account (before insert) {
   for(Account ac1:trigger.new)
   {
    if(ac1.Industry!='Banking')
    {
        ac1.addError('Industry field must be Banking');
    }
   }
}