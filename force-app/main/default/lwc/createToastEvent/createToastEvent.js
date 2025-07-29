import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateToastEvent extends LightningElement {
    handleClick(){
        const toast=new ShowToastEvent({
            'title':'Sample Toast',
            "message":'This is simple message'
        });
        this.dispatchEvent(toast);
        const toast1=new ShowToastEvent({
            'title':'Sample Toast',
            "message":'This is error message',
            "variant":"error"
        });
        this.dispatchEvent(toast1);
        const toast2=new ShowToastEvent({
            'title':'Sample Toast',
            "message":'This is success message',
            "variant":"success"
        });
        this.dispatchEvent(toast2);
        const toast3=new ShowToastEvent({
            'title':'Sample Toast',
            "message":'This is warning message',
            "variant":"warning"
        });
        this.dispatchEvent(toast3);

    
  


    }
}