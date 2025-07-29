public with sharing class BeerController {
    public BeerController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchBeer(String searchParam){
        String likeParam = '%'+searchParam+'%';
        String Query = '';
        if(searchParam!=null)
        {
            Query='Select id,name,alcohol__c,brewery_id__c,brewery_name__c,id__c,price__c,image__c,tags__c,remaining_quantity__c,total_quantity__c from beer__c where name like : likeParam limit 50';
        }
        else 
        {
            Query='Select id,name,alcohol__c,brewery_id__c,brewery_name__c,id__c,price__c,image__c,tags__c,remaining_quantity__c,total_quantity__c from beer__c limit 50';

        }
        List<sObject>sObjectList=Database.query(Query);
        return sObjectList;
    }
    
    public static String generateCardId()
    {
        String CharList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        Integer postion;
        Integer LengthRequired = 30;
        String Res = '';
        for(Integer i = 0;i<LengthRequired;i++)
        {
            postion=Integer.valueOf(String.valueOf(Math.roundToLong(CharList.length()*Math.random())))-1;
            Res = Res+CharList.substring(postion,postion+1);
        }
        return Res;
    }
    public static String getCouponInformation(String name)
    {
        Coupon__c couponRec=[Select Id,Name,Price__c FROM Coupon__c Where Expired__c=false AND Name =: name];
        return couponRec.Id;
    }
    @AuraEnabled
    public static String createCartItems(String CartId,String BeerId,Decimal Amount)
    {
        Cart_item__c item = new Cart_item__c();
        Map<Id,Cart_item__c>cartItemMap = getCartItems(CartId);
        if(cartItemMap.containsKey(BeerId))
        {
            item = cartItemMap.get(BeerId);
            item.Item_Amount__c=item.Item_Amount__c +Amount;
            item.Item_Quantity__c=item.Item_Quantity__c+1;
            update item;
        }
        else{
        item.beer__c = BeerId;
        item.Cart__c = CartId;
        item.Item_Quantity__c = 1;
        item.Item_Amount__c = Amount;
        insert item;
        }
        return item.id;
    }
    public static Map<Id,Cart_item__c> getCartItems(String cartId){
        Map<Id,Cart_item__c>cartItemMap = new Map<Id,Cart_item__c>();
        for(Cart_Item__c cart:[Select Id,Name,Beer__c,Cart__c,Item_Quantity__c,Item_Amount__c From Cart_Item__c Where Cart__c =: cartId])
            {
                cartItemMap.put(Cart.Beer__c,Cart);
            }
            return cartItemMap;
    }
    @AuraEnabled(cacheable=false)
    public static String getCartId(){
        List<Cart__c>cartInfo=[Select Id,Name from Cart__c Where User__c =: UserInfo.getUserId() AND Cart_Status__c = 'Open' AND is_Active__c = true];
        if(cartInfo!=null && cartInfo.size() > 0)
        {
            //return cartInfo.get(0).id;
            List<Cart_item__c>cartItems = new List<Cart_item__c>();
            cartItems=[Select Id,Name,Beer__c,Cart__c,Item_Quantity__c,Item_Amount__c From Cart_Item__c Where Cart__c =: cartInfo.get(0).id];
            String cartItem = '';
            Decimal itemsQuantity = 0;
            for(Cart_Item__c CrtItm:cartItems)
            {
                itemsQuantity = CrtItm.Item_Quantity__c+itemsQuantity;
            }
            CartWrapper wrapper = new CartWrapper();
            wrapper.CartId = cartInfo.get(0).id;
            wrapper.items = cartItems;
            wrapper.Count = itemsQuantity;

            return JSON.serialize(wrapper);
        }
        else {
            {
                cart__c defaultCart=new cart__c();
                String CouponId = getCouponInformation('default');
                defaultCart.cart_id__c=generateCardId();
                defaultCart.Cart_Status__c='open';
                defaultCart.is_Active__c=true;
                defaultCart.Coupon__c=CouponId;
                defaultCart.User__c=UserInfo.getUserId();
                insert defaultCart;
                CartWrapper wrapper = new CartWrapper();
                 wrapper.CartId = defaultCart.id;
                 wrapper.items = null;
                 wrapper.Count = 0;

                 return JSON.serialize(wrapper);
            }
        }
    }
    public class CartWrapper {
        @AuraEnabled
        public String CartId        { get;set; }
        @AuraEnabled
        public Decimal Count        { get;set; }
        @AuraEnabled
        public List<Cart_item__c> items  { get;set; }
    }
        
    
}