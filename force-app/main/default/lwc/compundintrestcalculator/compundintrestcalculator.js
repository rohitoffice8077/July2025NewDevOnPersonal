import { LightningElement,track } from 'lwc';

export default class Compundintrestcalculator extends LightningElement {
    @track currentoutput;
    principal;
    rate;
    noy;
    comp;
    Principalchangehandler(event)
    {
        this.principal=parseFloat(event.target.value);
    }
    Timechangehandler(event)
    {
        this.noy=parseFloat(event.target.value);
    }
    Ratechangehandler(event)
    {
        this.rate=parseFloat(event.target.value);
    }
    Compoundchangehandler(event)
    {
        this.comp=parseFloat(event.target.value);
    }
    Calculatesihandler(event)
    {
        this.currentoutput='compound intrest is :'+this.principal*Math.pow(1+(this.rate/(this.comp*100)),this.comp*this.noy);
    }
}