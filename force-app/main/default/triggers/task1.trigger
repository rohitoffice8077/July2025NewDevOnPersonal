trigger task1 on Opportunity (before insert,before update) {
  if(trigger.isInsert)
  {
      for(opportunity op1:trigger.new)
      {
          if(op1.amount>10000){
              op1.is_qualified__c=true;
          }
      }
  }
 if(trigger.isUpdate)
 {
      for(opportunity op2:trigger.new)
      {
          if(op2.amount>10000){
              op2.is_qualified__c=true;
          }
          else
          {
              op2.is_qualified__c=false;
          }
      }
 }
}