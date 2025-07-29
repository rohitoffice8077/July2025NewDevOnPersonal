@isTest
public class TestRestrictContactByName {
	@isTest
    static void method1()
    {
          Account acct = new Account(Name='Test Account');
        insert acct;
        Contact con = new Contact(Lastname='INVALIDNAME',Accountid=acct.id);
        insert con;
    }
}