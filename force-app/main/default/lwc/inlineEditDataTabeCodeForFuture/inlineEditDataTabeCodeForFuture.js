import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import {NavigationMixin} from 'lightning/navigation';

const COLS = [
    {
        label: 'Id',
        fieldName: 'Id',
        editable: false
    },
    {
        label: 'Name',
        fieldName: 'Name',
        editable: true
    },
    { label: 'City', fieldName: 'City__c', editable: true },
    {
        label: 'Industry',
        fieldName: 'Industry',
        editable: true
    },
    {
        label: 'Rating',
        fieldName: 'Rating',
        editable: true
    },
    {
        type: "button", label: 'Delete', initialWidth: 100, typeAttributes: {
            label: 'Delete',
            name: 'Delete',
            title: 'Delete',
            disabled: false,
            value: 'Delete',
            iconPosition: 'Center',
            iconName:'utility:preview',
            variant:'Destructive'
        }
    },
    {
        type: "button", label: 'Edit', initialWidth: 100, typeAttributes: {
            label: 'Edit',
            name: 'Edit',
            title: 'Edit',
            disabled: false,
            value: 'Edit',
            iconPosition: 'Center',
            iconName:'utility:preview',
            variant:'brand'
        }
    }
];

export default class InlineEditDataTabeCodeForFuture extends NavigationMixin(LightningElement) {

    columns = COLS;
    draftValues = [];
    accountsData;

    isLoaded=false;

    @wire(getAccounts)
    accounts(result)
    {
        this.accountsList=result;
        if(result.data)
        {
            this.accountsData=result.data;
        }
        else if(result.error)
        {
            this.accountsData=undefined;
        }
    }

    callRowAction(event){
        if(event.detail.action.name==='Delete')
        {
        this.isLoaded=true;
        console.log(event.detail.row.Id);
        console.log(event.detail.action.name);
        deleteRecord(event.detail.row.Id).then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record deleted',
                    variant: 'success'
                })
            );
            refreshApex(this.accountsList);
            this.isLoaded=false;
        }).catch((error)=>{
            alert(JSON.stringify(error));
        });
    }
    if(event.detail.action.name==='Edit')
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:event.detail.row.Id,
                objectApiName:'Account',
                actionName:'edit'
            }
        });
    }

    }


}