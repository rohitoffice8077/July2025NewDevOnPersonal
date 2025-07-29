import { LightningElement } from 'lwc';

export default class CreateLightningButtonGroup extends LightningElement {
    buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleButtonStatefulClick()
    {
        this.buttonStatefulState=!this.buttonStatefulState;
    }
    handleButtonIconStatefulStateClick()
    {
        this.buttonIconStatefulState=!this.buttonIconStatefulState;
    }
}