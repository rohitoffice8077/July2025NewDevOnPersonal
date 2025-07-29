import { LightningElement,wire } from 'lwc';
import getOpportunity from'@salesforce/apex/OpportunityController.getOppList';

export default class UsingWireGetOpportunity extends LightningElement {
    data;
    @wire(getOpportunity) opprecords({error,data})
    {
        if(data)
        {
            this.data=data;
        }
        else if(error)
        {
            this.data=undefined;
        }
    }
}