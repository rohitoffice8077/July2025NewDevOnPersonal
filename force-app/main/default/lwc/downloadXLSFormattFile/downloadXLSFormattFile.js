import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountForXLSFORMATT.getAllAccounts';
const columns=[{label:"Name",fieldName:"Name",type:"text",sortable:"true"},
                       {label:"Phone",fieldName:"Phone",type:"Phone",sortable:"true"},
                       {label:"Website",fieldName:"Website",type:"url",sortable:"true"},
                       {label:"Fax",fieldName:"Fax",type:"Phone",sortable:"true"},
                       {label:"Type",fieldName:"Type",type:"text",sortable:"true"}];

export default class DownloadXLSFormattFile extends LightningElement {
    accountData;
    columns=columns;
    columnsHeader=['Id','Name','Phone','Website','Fax','Type'];

    @wire(getAllAccounts)
    wiredAccountData({data,error})
    {
        if(data)
        {
            //console.log(data);
            this.accountData=data;
            console.log('Inside Data');
        }
        else if(error)
        {
            console.log('###Error Occurred While Feteching Account Data----> '+error);
        }
    }

    handleDownload()
    {
        alert('You Want To Download XLS File');
        let doc='<table>';
        doc+='<style>';
        doc+='table,th,td{';
        doc+='border:1px solid black;';
        doc+='border-collapse:collapse;';
        doc+='}';
        doc+='</style>';
        //Add all table header here
        doc+='<tr>';
        this.columnsHeader.forEach(head=>{
            doc+='<th>'+head+'</th>'
        });
        doc+='</tr>'
        //Add all data rows here
        this.accountData.forEach(acc=>{
            doc+='<tr>';
            doc+='<td>'+acc.Id+'</td>';
            doc+='<td>'+acc.Name+'</td>';
            if(acc.Phone)
            {
                doc+='<td>'+acc.Phone+'</td>';
            }
            else{
                doc+='<td>'+''+'</td>';
            }
            if(acc.Website)
            {
                doc+='<td>'+acc.Website+'</td>';
            }
            else{
                doc+='<td>'+''+'</td>';
            }
            if(acc.Fax)
            {
                doc+='<td>'+acc.Fax+'</td>';
            }
            else{
                doc+='<td>'+''+'</td>';
            }
            if(acc.Type)
            {
                doc+='<td>'+acc.Type+'</td>';
            }
            else{
                doc+='<td>'+''+'</td>';
            }
            doc+='</tr>'
        });
        doc+='</table>';
        var element = 'data:application/vnd.ms-excel,'+encodeURIComponent(doc);
        let downloadElement = document.createElement('a');
        downloadElement.href=element;
        downloadElement.target='_self';
        downloadElement.download='Account Data.xls';
        document.body.appendChild(downloadElement);
        downloadElement.click();
    }
}