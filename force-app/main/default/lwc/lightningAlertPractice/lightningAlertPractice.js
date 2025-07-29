import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';

export default class LightningAlertPractice extends LightningElement {

    alertHandler()
    {
        LightningAlert.open({
            label:'I am Header',
            message:'Alert',
            theme:'Success'
        });
    }
    async confirmHandler()
    {
       let result= await LightningConfirm.open({
            label:'I am Header',
            message:'Are You Confirm',
            theme:'Success'
        });
        if(result)
        {
            console.log('Confirm');
        }
    }
}