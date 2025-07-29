trigger Nofcontacts on Contact (after insert,after update,after delete) {
set<id> accid=new set<id>();
    list<Account> accUpdate=new list<Account>();
    
    for(contact con:trigger.new){
        accid.add(con.accountid);
        
    }
    
    for(Account acc : [select id,no_of_contact__c,(select id from contacts) from account where id in :accid]){
         
       
            acc.no_of_contact__c=acc.contacts.size();
             accUpdate.add(acc);
         
    }
    update accUpdate;
}