import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccounts';

export default class WireImperativeAccount extends LightningElement {
    accounts;
    error;
    handleClick()
    {
    getAccountList()
        .then((result)=>{
            this.accounts=result;
            this.error=undefined;
        })
        .catch((error)=>{
            this.error=error;
            this.accounts=undefined;
        });
    }
}