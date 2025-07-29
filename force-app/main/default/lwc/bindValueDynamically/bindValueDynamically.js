import { LightningElement } from 'lwc';

export default class BindValueDynamically extends LightningElement {
    myvalue='salesforce bolt';
    handlechange(event)
    {
        this.myvalue=event.target.value;
    }
}