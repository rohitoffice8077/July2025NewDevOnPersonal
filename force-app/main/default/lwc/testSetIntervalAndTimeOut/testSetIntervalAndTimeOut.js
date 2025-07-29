import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class TestSetIntervalAndTimeOut extends LightningElement {

    data=[];
    data2=[];
    connectedCallback()
    {
        this.init();
    }
    async init()
    {
        //alert('Start');
        let promise = new Promise((resolve,reject)=>{
            getContacts().then(result=>{
                this.data2=result;
                resolve(result);
            }).catch(error=>{

            })
        });
        //alert('this.data2'+this.data2);
        this.data=  await promise;
        //alert('end'+JSON.stringify(this.data));
    }

}