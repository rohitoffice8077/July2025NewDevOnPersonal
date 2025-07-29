@isTest
public class TestVerifyDate {
    @isTest
    static void method1(){
    Date d1=Date.today();
    Date d2=Date.today().adddays(5);
	VerifyDate.CheckDates(d1,d2);
    }
     @isTest
    static void method2(){
    Date d1=Date.today();
    Date d2=Date.today().adddays(40);
	VerifyDate.CheckDates(d1,d2);
    }
}