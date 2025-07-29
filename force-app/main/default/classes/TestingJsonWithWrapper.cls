public class TestingJsonWithWrapper {
    @AuraEnabled
    public static WrapperProduct method1()
    {
        string testJsonStr = '{"Name":"Pepsi","Id":"000092","Country":"India","price":"10"}';
        ProductOutside pObj = (ProductOutside)Json.deserialize(testJsonStr, ProductOutside.class);
        WrapperProduct wpObj= new WrapperProduct();
        system.debug('Test----->'+pObj.Country);
        system.debug('Test----->'+pObj.Name);
        system.debug('Test----->'+pObj.Id);
        system.debug('Test----->'+pObj.price);
        wpObj.Id=pObj.Id;
        wpObj.price=pObj.price;
        System.debug('Test2------>'+wpObj.Id);
        System.debug('Test2------>'+wpObj.Price);
        system.debug('Test2------>'+wpObj);
        string resultStr = json.serialize(wpObj);
        system.debug('Test3------>'+resultStr);
        return wpObj;
        //return resultStr;
    }
    public class WrapperProduct{
    public string Id;
    public Integer price;
}

}