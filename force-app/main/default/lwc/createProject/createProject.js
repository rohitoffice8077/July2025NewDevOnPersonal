import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import PROJECT__C_OBJECT from '@salesforce/schema/Project__c';
import NAME_FIELD from '@salesforce/schema/Project__c.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Project__c.Account__c';

export default class CreateAccount extends LightningElement {
    objectApiName=PROJECT__C_OBJECT;
    fields = [NAME_FIELD,ACCOUNT_FIELD];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Project has been created successfully !",
            message: "Project Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}