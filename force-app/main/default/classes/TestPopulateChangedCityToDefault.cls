@isTest
public class TestPopulateChangedCityToDefault {
    @testsetup
    public static void setup()
    {
        Account acc = new Account(Name ='Test Account 1');
        insert acc;
    }
    @istest
    public static void testMethod1()
    {
        Account acc2 = [SELECT id,City__c,Country__c FROM Account LIMIT 1];
        acc2.city__c='rampur';
        test.startTest();
        update acc2;
        test.stopTest();
        //system.assertEquals('India', acc2.Country__c);
    }

}