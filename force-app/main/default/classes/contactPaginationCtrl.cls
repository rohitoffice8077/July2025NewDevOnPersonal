public class contactPaginationCtrl {
public Integer size{get;set;}
public List<SelectOption> paginationSizeOpt{get;set;}
public Integer noOfRecords{get;set;}
//public list <Contact> contactList {get;set;}
public String searchKey {get;set;}

public contactPaginationCtrl(){
size=10;
paginationSizeOpt = new List<SelectOption>();

paginationSizeOpt.add(new SelectOption('5','5')); // SelectOption("noOfRecordsShow",'value')
paginationSizeOpt.add(new SelectOption('10','10'));
paginationSizeOpt.add(new SelectOption('20','20'));
}

public ApexPages.StandardSetController setCon {
get {
if(setCon == null) {
setCon = new ApexPages.StandardSetController(Database.getQueryLocator(
[SELECT Id,Name, Phone, Email from Contact]));
setCon.setPageSize(size);
noOfRecords = setCon.getResultSize();
}
return setCon;
}
set;
}

public List<Contact> getContacts(){
return (List<Contact>) setCon.getRecords();
}

public PageReference refreshPageSize() {
setCon.setPageSize(size);
return null;
}

public void search(){

string searchquery='select name,title, Email, phone from contact where name like \'%'+searchKey+'%\' Limit 10';
//contactList= Database.query(searchquery);
setCon = new ApexPages.StandardSetController(Database.getQueryLocator(searchquery));
setCon.setPageSize(size);
noOfRecords = setCon.getResultSize();
}
}