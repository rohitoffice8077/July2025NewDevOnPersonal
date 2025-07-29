public with sharing class pdfController {
        @AuraEnabled
        public static Attachment pdfGenerator(Id recordId,String HtmlData)
        {
            Pagereference page = page.renderedAsPdf;
            page.getParameters().put('pdfText',HtmlData);

            Contact con = new Contact(Id=recordId);
            Attachment objAttach = new Attachment();
            objAttach.Name='InvoiceTest.pdf';
            objAttach.ParentId=con.Id;
            objAttach.body=page.getContentaspdf();
            objAttach.isPrivate=false;
            insert objAttach;
            return objAttach;
        }
}