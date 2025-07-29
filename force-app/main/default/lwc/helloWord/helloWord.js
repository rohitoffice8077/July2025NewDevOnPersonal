import { LightningElement } from 'lwc';

export default class HelloWord extends LightningElement {

    connectedCallback()
    {
        console.log('This Connectedcallback call');
    }

    handleClick(event)
    {
        this.connectedCallback();
    }

}