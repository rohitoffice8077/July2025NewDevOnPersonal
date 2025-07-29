import { LightningElement } from 'lwc';

export default class CreateLightningButton extends LightningElement {
    naam='default name';
    showhide=true;
    handleClick(event)
    {
        this.showhide=!this.showhide;
        this.naam=event.target.label;
    }
}