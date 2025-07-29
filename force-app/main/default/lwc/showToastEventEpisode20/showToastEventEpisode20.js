import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowToastEventEpisode20 extends LightningElement {
    handleError()
    {
     const evt=ShowToastEvent({
        title:'Salesforce Toast',
        message:'Toast Working Fine',
        variant:'error'
    });
    this.dispatchEvent(evt);
    }
    handleWarning()
    {
        const evt=ShowToastEvent({
        title:'Salesforce Toast',
        message:'Toast Working Fine',
        variant:'warning'
    });
    this.dispatchEvent(evt);
    }
    handleSuccess()
    {
        const evt=ShowToastEvent({
        title:'Salesforce Toast',
        message:'Toast Working Fine',
        variant:'success'
    });
    this.dispatchEvent(evt);
    }
    handleInfo()
    {
        const evt=ShowToastEvent({
        title:'Salesforce Toast',
        message:'Toast Working Fine',
        variant:'info'
    });
    this.dispatchEvent(evt);
    }
}