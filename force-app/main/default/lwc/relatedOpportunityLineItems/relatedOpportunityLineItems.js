import { LightningElement, api } from 'lwc';
import getOpportunityLineItems from '@salesforce/apex/OpportunityLineItemController.getOpportunityLineItems';
// ... other imports

import { CurrentPageContext } from 'lightning/navigation';
import { wire } from 'lwc';

export default class RelatedOpportunityLineItems extends LightningElement {
    @api recordId;  // Important: Keep this for other scenarios
    @wire(CurrentPageContext)
    pageContext;

    get opportunityId() {
        return this.pageContext.state.recordId;
    }

    // ... rest of your component code (fetchLineItems method, etc.)

    connectedCallback() {
        if(this.opportunityId) { // Check if recordId is available.
            this.fetchLineItems();
        }
    }

    fetchLineItems() {
        // Use this.opportunityId in your Apex call:
        getOpportunityLineItems({ opportunityId: this.opportunityId })
            .then(result => {
                // ... handle results
            })
            .catch(error => {
                // ... handle error
            });
    }
}