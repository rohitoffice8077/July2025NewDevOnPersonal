@isTest
public class TestleadDuplicatePreventer {
    static testMethod Void TestDuplicatePreventerwithOneContact() {
        contact c1=new contact(FirstName='test1',LastName='sirnametest1',email='test1@email.com',Accountid='0015g00000XgrjMAAR',phone='9876543210');
        insert c1;
        contact c2=new contact(FirstName='test2',LastName='sirnametest2',email='test2@email.com',Accountid='0015g00000XgrjMAAR',phone='9876577777');
        insert c2;
        contact dupli1=new contact(FirstName='duplicate',LastName='sirnameduplicate',email='test2@email.com',Accountid='0015g00000XgrjMAAR', phone='9876543212');
          Test.startTest();
        try
        {
            insert dupli1;
        }
        catch(Exception duplicate)
        {    
           

        }
    }
}