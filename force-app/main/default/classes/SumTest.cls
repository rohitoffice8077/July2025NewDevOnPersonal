@istest
public class SumTest {
    @isTest
    private static void addTest1()
    {
        integer res=Sum.CheckSum(9,3);
        system.assertEquals(12, res);
    }
     @isTest
    private static void addTest2()
    {
        integer res=Sum.CheckSum(10,3);
        system.assertEquals(13, res);
    }

}