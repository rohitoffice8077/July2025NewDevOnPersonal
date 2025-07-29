import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountForXLSFORMATT.getAllAccounts';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

const columns=[{label:"Name",fieldName:"Name",type:"text",sortable:"true"},
                       {label:"Phone",fieldName:"Phone",type:"Phone",sortable:"true"},
                       {label:"Website",fieldName:"Website",type:"url",sortable:"true"},
                       {label:"Fax",fieldName:"Fax",type:"Phone",sortable:"true"},
                       {label:"Type",fieldName:"Type",type:"text",sortable:"true"}];


export default class MyPublisherCompo extends LightningElement {
    accountData;
    columns=columns;

    @wire(CurrentPageReference)pageRef;

    @wire(getAllAccounts)
    wiredAccountData({data,error})
    {
        if(data)
        {
            //console.log(data);
            this.accountData=data;
            console.log('Inside Data');
        }
        else if(error)
        {
            console.log('###Error Occurred While Feteching Account Data----> '+error);
        }
    }
    handldeSelection(event)
    {
        console.log('Cick on selection----> '+ event.detail.selectedRows[0].Id);
        let accId = event.detail.selectedRows[0].Id;
        fireEvent(this.pageRef,'eventDetails',accId);
    }
}