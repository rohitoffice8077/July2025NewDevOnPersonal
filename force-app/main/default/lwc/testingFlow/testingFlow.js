import { LightningElement,api } from 'lwc';

export default class TestingFlow extends LightningElement {
    show=false;
    @api recordId;
    handleClick()
    {
        this.show=!this.show;
    }
}