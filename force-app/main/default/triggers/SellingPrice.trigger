trigger SellingPrice on Order1__c (before insert) {
    list<Inventory__c>listInv=new list<Inventory__c>();
    for(Order1__c obj:trigger.new)
    {
        Inventory__c invObj = [select id,item_code__c,item__c,Selling_Price_Per_item__c,Total_Available_in_Stock__c FROM Inventory__c where item__c=:obj.item__c AND item_code__c=:obj.item_code__c];
        obj.Selling_Price__c=invObj.Selling_Price_Per_item__c * obj.Number_of_Items__c;
        invObj.Total_Available_in_Stock__c=invObj.Total_Available_in_Stock__c - obj.Number_of_Items__c;
        listInv.add(invObj);
    }
    update listInv;
}