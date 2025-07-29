import { LightningElement } from 'lwc';

export default class TestingLightningInput extends LightningElement {
    form1;
    form2;
    form3=true;
    form4;
    rado;
    handlechange(event)
    {
       
        if(event.target.label=='Enter some text1')
        {
        this.form1 = event.target.value;
        }
        
        else if(event.target.label=='Enter some text2')
        {
            this.form2 = event.target.value;
        }
        else if(event.target.label=='Enter some text3')
        {
            this.form3 = event.target.checked;
            this.form4 = !this.form3;
        }
        else if(event.target.label=='Enter some text4')
        {
            this.form4 = event.target.checked;
            this.form3 = !this.form3;
        }
    }
    value;
    handleRadioChange(event) {
        console.log(event.target.value);
        this.value = event.target.value;
    }
}