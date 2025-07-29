import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccounts';

export default class WireFunctionAccount extends LightningElement {
    accounts;
    error;
    @wire(getAccountList)
    getAccounts({data,error})
    {
        if(data)
        {
            this.accounts=data;
            this.error=undefined;
        }
        else if(error)
        {
            this.error=error;
            this.accounts=undefined;
        }
    }
}