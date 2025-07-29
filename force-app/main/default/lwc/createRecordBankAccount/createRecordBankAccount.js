import { LightningElement } from 'lwc';
import {ShowToastEvent} from'lightning/platformShowToastEvent';
import bankAccountObject from'@salesforce/schema/Bank_Account__c'
import Name_Field from '@salesforce/schema/Bank_Account__c.Name';
import Phone_Field from '@salesforce/schema/Bank_Account__c.Phone_No__c';
import Email_Field from '@salesforce/schema/Bank_Account__c.Email__c';

export default class CreateRecordBankAccount extends LightningElement {
    objectApiName=bankAccountObject;
    fields=[Name_Field,Phone_Field,Email_Field];
    handlesuccess(event)
    {
        const toastevent=new ShowToastEvent({
            title:"Account has been creates succesfully",
            variant:"success"


        });
        this.dispatchEvent(toastevent);
    }
}