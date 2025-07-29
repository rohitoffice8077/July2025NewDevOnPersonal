public class ContactHandler {
    public static void checkForDuplicate(List<Contact>conList)
    {
        List<String>emailList = new List<String>();
        List<String>phoneList = new List<String>();
        List<String>existingEmailList = new List<String>();
        List<String>existingPhoneList = new List<String>();
        for(Contact conObj:conList)
        {
            emailList.add(String.valueof(conObj.Email));
            phoneList.add(String.valueof(conObj.Phone));
        }
        for(Contact conObj:[SELECT Id,Name,Email,Phone FROM Contact WHERE Email IN:emailList AND Phone IN: phoneList])
        {
            existingEmailList.add(String.valueof(conObj.Email));
            existingPhoneList.add(String.valueof(conObj.Phone));
        }
        for(Contact conObj:conList)
        {
            if(existingEmailList.size()>0 && existingEmailList.contains(String.valueof(conObj.Email)))
            {
                conObj.Duplicate__c=true;
            }
            else if(existingPhoneList.size()>0 && existingPhoneList.contains(String.valueof(conObj.Phone)))
            {
                conObj.Duplicate__c=true;
            }
        }
    }

}