import { LightningElement,wire,api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class WiredPracticeGetRecord1 extends LightningElement {

    @api recordId;
    record;
    @wire(getRecord,{recordId:'$recordId',fields:['Account.Name','Account.Active__c','Account.RecordTypeId','Account.Phone']})//these field value are necessary for both getRecord and getFieldValues
    wiredRecord({data,error})
    {
        if(data)
        {
            this.record=data;
            console.log('in data store1'+JSON.stringify(data));
            console.log(this.record.fields.Name.value); 
            console.log(this.record.fields.Active__c.value);
            console.log(this.record.fields.RecordTypeId.value);
        }
        else if(error)
        {
            console.log('in error'+error);
            this.record=undefined;
        }
    }
    get recordType()
    {
        return getFieldValue(this.record,'Account.RecordTypeId');
    }
    get phone()
    {
        return getFieldValue(this.record,'Account.Phone');
    }
}