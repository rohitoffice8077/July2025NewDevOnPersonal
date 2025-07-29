trigger PreventDuplicate on Contact (before insert,before update) {

// Set to store email ids
Set <String> emailSet = new Set<String>();
Set <String> phoneSet = new Set<String>();
// Set to store phone numbers

// Iterate through each Contact and add their email and phone number to their respective Sets
for (contact con:trigger.new) {
emailSet.add(con.email);
phoneSet.add(con.phone);    
}



// New list to store the found email or phone numbers
List <Contact> contactList = new List<Contact>();



// Populating the list using SOQL
contactlist = [SELECT email,phone FROM Contact WHERE email IN :emailSet or phone IN :phoneSet];



// Iterating through each Contact record to see if the same email or phone was found
for (contact con:trigger.new) {
If (contactList.size() > 0) {
// Displaying the error
con.email.adderror( 'Trigger Protects from duplicate email' );
con.PHONE.adderror( 'Trigger Protects from duplicate phone' );
    
}
}



}