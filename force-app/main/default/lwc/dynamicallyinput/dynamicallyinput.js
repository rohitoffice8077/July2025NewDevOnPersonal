import { LightningElement } from 'lwc';

export default class Dynamicallyinput extends LightningElement {
    variable;
    handleEvent(event)
    {
        this.variable=event.target.value;
    }
}