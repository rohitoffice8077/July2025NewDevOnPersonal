import { LightningElement, wire } from 'lwc';
import getAccList from '@salesforce/apex/AccountController.getAccList';

export default class BindWithWireFunction extends LightningElement {
    accounts;
    error;
    @wire(getAccList)
    wiredAccounts({error,data})
    {
        if(data)
        {
            this.account=data;
            this.error=undefined;
        }
        else if(error)
        {
            this.error=error;
            this.accounts=undefined;
        }
    }
}