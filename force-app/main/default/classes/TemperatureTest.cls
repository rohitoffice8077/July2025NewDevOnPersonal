@isTest
public class TemperatureTest {
    @isTest
    private static void warmTempTest()
    {
        decimal res=Temperature.Ftoc(70);
        system.assertEquals(21.11,res);
    }

}