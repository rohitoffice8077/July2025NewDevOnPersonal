@RestResource(urlMapping='/Account/*')
global class AccountRestApi {
    
    @HttpGet
    global static List<Account> getAccount()
    {
        return [SELECT ID,NAME FROM ACCOUNT LIMIT 5];
    }

}