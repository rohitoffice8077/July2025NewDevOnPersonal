import { LightningElement, wire } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccounts';

export default class DestructAccount extends LightningElement {
    accounts;
    error;

    wiredAccountResults;
    @wire(getAccountList) wiredAccount(result)
    {
            this.wiredAccountResults=result;
            if(result.data)
            {
                this.accounts=result.data;
                this.error=undefined;
            }
            else if(result.error){
                this.error=result.error;
                this.accounts=undefined;
            }

    }
    destructionAccount(event)
    {
        const recordId=event.target.dataset.recordid;
        deleteRecord(recordId)
        .then(()=>{
this.dispatchEvent(new ShowToastEvent({
    title:"success",
    message:"account deleted",
    variant:"success"
}));
refreshApex(this.wiredAccountResults);
        })
        .catch((error)=>{
            this.dispatchEvent(new ShowToastEvent({
                title:"error",
                message:"error in deleting account",
                variant:"error"
            }));
        });

    }
}