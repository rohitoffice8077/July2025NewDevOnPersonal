import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class CustomTableWithAccountData extends LightningElement {
    result;
    @wire(getAccounts)
    getAccs({data,error})
    {
        if(data)
        {
            console.log('Getting Account Result successfully');
            this.result=data;
        }
        else if(error)
        {
            console.log('Error Occured');
            this.result=undefined;
        }
    }
}