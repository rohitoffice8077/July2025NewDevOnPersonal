trigger AccountIsactive on Account (After update) {
    if(trigger.isAfter)
    {
        if(trigger.isUpdate)
        {
            AccountTriggerHandler.handleAccountInactive(trigger.new,trigger.oldMap);
        }
    }

}