import { LightningElement } from 'lwc';

export default class SpinnerOfDifferentTypes extends LightningElement {
    load = true;
    handleClick()
    {
        this.load=!this.load;
    }
    
}