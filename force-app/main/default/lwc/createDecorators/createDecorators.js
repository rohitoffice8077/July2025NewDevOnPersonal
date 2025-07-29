import { LightningElement,track } from 'lwc';

export default class CreateDecorators extends LightningElement {
    @track greetings;
    handleEvent(event)
    {
        this.greetings=event.target.value;
        console.log(this.greetings);
    }

}