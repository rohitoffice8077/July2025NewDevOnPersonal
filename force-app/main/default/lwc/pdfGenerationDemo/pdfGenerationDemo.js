import { LightningElement,api } from 'lwc';
import salesforceLogo from '@salesforce/resourceUrl/salesforceLogo';
import pdfGenerator from '@salesforce/apex/pdfController.pdfGenerator';

export default class PdfGenerationDemo extends LightningElement {

    @api recordId;
    imageUrl=salesforceLogo;
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1,2019',
        invoiceDue:'January 2,2020',
        companyName:'TCS',
        address1:'1st street road',
        address2:'Agra UttarPradesh India'
    }
    clientData={
        client:'Acme Corp',
        username:'John doe',
        email:'johndoe@email.com'
    }
    service=[
        {name:'Consultant fee',amount:1000.00},
        {name:'Website design',amount:8000.00},
        {name:'Hosting (3 Months)',amount:3500.00}
    ]

    get TotalAmount(){
        return this.service.reduce((total,service)=>{
            return total=total+service.amount;
        },0)
    }
    handlePdf()
    {
        let content = this.template.querySelector('.container');
        //alert(content.outerHTML);
        pdfGenerator({recordId:this.recordId,HtmlData:content.outerHTML}).then(result=>{
            window.open('https://girikon98-dev-ed.file.force.com/servlet/servlet.FileDownload?file='+result.Id+'&operationContext=S1')

        }).catch(error=>{
            alert('Error Occured'+JSON.stringify(error));
        })
    }
}