public class CreateCar {
    @auraenabled
    public static string method2(string jsontest){
        WrapperProduct wpObj = (WrapperProduct)json.deserialize(jsontest, WrapperProduct.class);
        car__c cobj=new car__c();
        cobj.price__c=wpObj.price;
        cobj.IIds__c=wpObj.Id;
        insert(cobj);
        return 'success';
    }
    public class WrapperProduct{
    public string Id;
    public Integer price;
}

}