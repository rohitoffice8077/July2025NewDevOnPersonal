trigger restrictBankAccountDeletionToSystemAdmin on Bank_Account__c (before delete) {
    Id profileid=Userinfo.getProfileId();  
  profile profilname=[select Name from Profile where id=:profileid];
    for(Bank_Account__c accountDuplicate:Trigger.old){
        if(profilname.Name!='System Administrator'){
          accountDuplicate.addError('No Access for Deletion');                                    
      }
                            
    }
    
}