trigger task5 on Account (before update) {
for(account a1:trigger.new)
{
    a1.yes_updated__c=true;
}
}