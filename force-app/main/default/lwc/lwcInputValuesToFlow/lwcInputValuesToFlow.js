import { LightningElement,api } from 'lwc';

export default class LwcInputValuesToFlow extends LightningElement {
    @api
    recordId;

    isChange=false;
    flowVariables=[];
    connectedCallback()
    {

    }

    handleChange(event)
    {
        this.isChange=event.detail.checked;
        if(this.isChange==true)
        {
            this.flowVariables=[{
                name:"recordId",
                type:"String",
                value:this.recordId
            }];
        }
    }
    handleflowstatuschange()
    {
        console.log('ok');
    }
}