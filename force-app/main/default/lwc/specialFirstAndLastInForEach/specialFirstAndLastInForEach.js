import { LightningElement } from 'lwc';
import getAccList from '@salesforce/apex/AccountController.getAccList';

export default class SpecialFirstAndLastInForEach extends LightningElement {
    
    connectedCallback()
    {
        getAccList().then((result)=>{
            console.log('This Is New JOURNEY---->'+JSON.stringify(result));
        }).catch((error)=>{
            console.log('Error Is Occured AT tHIS pOINT'+JSON.stringify(error));
        })
    }
}