import { LightningElement } from 'lwc';

export default class ConditionRendering extends LightningElement {
    myvalue='aman sisodia';
    showme=false;
    handlechange(event)
    {
        this.showme=event.target.checked;
    }
}