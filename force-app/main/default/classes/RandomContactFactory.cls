public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(Integer numContacts,String lName)
    {
        List<Contact> cons = new List<Contact>();
        for(Integer i=0;i<numContacts;i++) {
            Contact a = new Contact(firstName='TestContact' + i,lastname=lName);
            cons.add(a);
        }
        insert cons;
        return cons;
    }

}