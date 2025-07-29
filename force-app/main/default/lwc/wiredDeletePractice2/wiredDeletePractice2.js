import { LightningElement,api,wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WiredDeletePractice2 extends LightningElement {

    @api recordId;
    handleDelete()
    {
        console.log('Delete->'+this.recordId);
        deleteRecord(this.recordId).then((result)=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record deleted',
                    variant: 'success'
                })
            );
        }).catch((error)=>{
            console.log(JSON.stringify(error));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'error',
                    message: error,
                    variant: 'error'
                })
            );
        });
    }

}