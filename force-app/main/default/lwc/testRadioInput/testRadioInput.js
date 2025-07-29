import { LightningElement } from 'lwc';

export default class TestRadioInput extends LightningElement {
    options = [
        {label: 'a', value: 'a'},
        {label: 'b', value: 'b'},
        {label: 'c', value: 'c'},
    ];
    value;
    handleRadioChange(event) {
        console.log(event.target.value);
        this.value = event.target.value;
    }
}