trigger task2 on Opportunity (before update) {
  for(opportunity op1:trigger.new)
  {
      op1.stageName='Prospecting';
  }
}