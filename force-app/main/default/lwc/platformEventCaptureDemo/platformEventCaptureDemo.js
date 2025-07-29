import { LightningElement } from 'lwc';
import {subscribe} from 'lightning/empApi';

export default class PlatformEventCaptureDemo extends LightningElement {
    subscription = null;
    channelName = "/event/Account_log__e";
    latestPayLoad = '';
    showModal = false;

    handleSubscribe()
    {
        const messageCallback = (response) =>{
            console.log('New Message ->'+JSON.stringify(response));
            this.latestPayLoad = JSON.stringify(response);
            this.showModal = true;
        };

        subscribe(this.channelName,-1,messageCallback).then((response)=>{
            console.log('Request Sent To'+JSON.stringify(response.channel));
        });
    }
    
    connectedCallback()
    {
        console.log('handleSubscribe');
        this.handleSubscribe();
    }
    hideModalBox()
    {
        this.showModal=false;
    }
}