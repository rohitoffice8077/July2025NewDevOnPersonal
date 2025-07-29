import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener,unregisterAllListners } from 'c/pubsub';
import getCaseDetails from '@salesforce/apex/AccountForXLSFORMATT.getCaseDetails';

export default class MySubscriber extends LightningElement {
    accountId;
    caseData;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('eventDetails',this.caseDetails,this);
    }

    caseDetails(accountId)
    {
        this.accountId=accountId;
        console.log('Subscriber Account Id-----> '+this.accountId);
        getCaseDetails({AccountId:this.accountId}).then(result=>{
            this.caseData = result;
            console.log('####Case_Data_#####'+JSON.stringify(this.caseData));
        }).catch(error=>{
            console.log(JSON.stringify(error));
        });
    }
}