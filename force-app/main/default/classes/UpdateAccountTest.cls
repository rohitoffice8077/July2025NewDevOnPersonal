@isTest
public class UpdateAccountTest {
    @isTest
    private static void testUpdateAccount(){
        Account acc=new Account();
        acc.Name='Test Account';
        acc.Active__c='No';
        acc.Rating='Cold';
        insert acc;
        Contact con=new Contact();
        con.FirstName='Test';
        con.LastName='Test';
        con.Account.id=acc.Id;
        insert con;
        UpdateAccounts.updateAccount();
        Account updateAcc=[select Id,Rating,Active__c from Account where Id=:acc.Id];
        system.assertEquals('Hot', updateAcc.Rating);
        
    }

}