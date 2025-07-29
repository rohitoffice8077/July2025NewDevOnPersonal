@isTest
public class EventUtilityTest {
    @isTest
    private static void testEventStatusLength(){
        String res=EventUtility.eventPriority('IND');
        system.assertEquals(null, res);
    }
    @isTest
    private static void testHighPriority(){
        String res=EventUtility.eventPriority('CA');
        system.assertEquals('High', res);
    }
        @isTest
    private static void testlowPriority(){
        String res=EventUtility.eventPriority('LA');
        system.assertEquals('Low', res);
    }
}