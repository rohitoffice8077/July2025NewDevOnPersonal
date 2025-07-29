import { LightningElement, api } from 'lwc';
import getOpportunityLineItem from '@salesforce/apex/oppController.getOpportunityLineItem';

export default class GetOpportunityProduct extends LightningElement {
    @api recordId;
    retrievedRecordId = false;
    data = [];
    show=true;

    columns = [
        { label: 'Id', fieldName: 'Id', type: 'text' },
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'OpportunityId', fieldName: 'OpportunityId', type: 'text' },
        { label: 'Quantity', fieldName: 'Quantity', type: 'number' }
       // { label: 'Service Date', fieldName: 'ServiceDate', type: 'date' }
    ];

  renderedCallback() {
        if (!this.retrievedRecordId && this.recordId) {
            
            this.retrievedRecordId = true; 
            console.log('Found recordId: ' + this.recordId);
            this.show=false;
            getOpportunityLineItem({ oppId: this.recordId })
            .then(result => {
                console.log('Fetched Data: ', JSON.stringify(result));
                this.data = result;
            })
            .catch(error => {
                console.error('Error fetching data:', JSON.stringify(error));
            });

            
        }
    }
}