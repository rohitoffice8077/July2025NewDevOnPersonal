import { LightningElement,api } from 'lwc';

export default class GetRecordIdLwc extends LightningElement {
    @api recordId;
    connectedCallback()
    {
        console.log('test====> '+this.recordId);
    }
}