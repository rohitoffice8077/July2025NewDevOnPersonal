public class AccountUtils {
    public static List<Account>accountsByState(String State)
    {
        List<Account>accList =[Select id,Name,BillingState from account where BillingState=:State];
        return accList;
    }
}