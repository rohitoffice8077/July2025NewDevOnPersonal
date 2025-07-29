import { LightningElement,track } from 'lwc';

export default class Intrestcalculator extends LightningElement {
    @track currentoutput;
    principal;
    rate;
    noy;
    Principalchangehandler(event)
    {
        this.principal=parseInt(event.target.value);
    }
    Timechangehandler(event)
    {
        this.noy=parseInt(event.target.value);
    }
    Ratechangehandler(event)
    {
        this.rate=parseInt(event.target.value);
    }
    Calculatesihandler(event)
    {
        this.currentoutput='simple intrest is :'+(this.principal*this.rate*this.noy)/100;
    }
}