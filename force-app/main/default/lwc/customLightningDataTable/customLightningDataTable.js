import { LightningElement } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccounts';
export default class CustomLightningDataTable extends LightningElement {
    accounts;

    connectedCallback(){
    console.log('GGGGG');
    getAccounts().then((result)=>{
            this.accounts=result;
            console.log('credx'+result);
            this.error=undefined;
        })
        .catch((error)=>{
            this.error=error;
            console.log('credxerror'+error);
            this.accounts=undefined;
        });
    }
}