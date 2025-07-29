import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ROBOT__C_OBJECT from '@salesforce/schema/Robot__c';
import NAME_FIELD from '@salesforce/schema/Robot__c.Name';
import PROCESSOR_FIELD from '@salesforce/schema/Robot__c.Processor__c';
import PRICE_FIELD from '@salesforce/schema/Robot__c.Price__c';

export default class CreateRobot extends LightningElement {
    objectApiName=ROBOT__C_OBJECT ;
    fields = [NAME_FIELD,PROCESSOR_FIELD,PRICE_FIELD];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Robot has been created successfully !",
            message: "Robot Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}