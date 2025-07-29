import { LightningElement,wire } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccList';

export default class DatatableOfAccount extends LightningElement {
    columns=[{label:'Label',fieldName:'Name',type:'text'},
             {label:'Phone',fieldName:'Phone',type:'phone'},
             {label:'Industry',fieldName:'Industry',type:'text'}
            ];
            data;
            @wire(getAccounts) recordAccount({error,data})
            {
                if(data)
                {
                    this.data=data;
                }
                else if(error)
                {
                  this.data=undefined;
                }
            }
        
}