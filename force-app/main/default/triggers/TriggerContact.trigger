trigger TriggerContact on Contact (before insert) {
    if(trigger.isBefore)
    {
        if(trigger.isInsert)
        {
            ContactHandler.checkForDuplicate(trigger.new);
        }
    }

}