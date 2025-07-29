import { LightningElement } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccounts';
import deleteAccounts from'@salesforce/apex/AccountController.DeleteAcc';
export default class CredexTestScenario extends LightningElement {
    accounts;

    connectedCallback(){
    getAccounts().then((result)=>{
            this.accounts=result;
            console.log('credx'+result);
            this.error=undefined;
        })
        .catch((error)=>{
            this.error=error;
            console.log('credxerror'+error);
            this.accounts=undefined;
        });
    }

  

    handleDelete(event) {
        console.log('Delete');
        console.log(event.target.value);
        const accountId = event.target.value;
        deleteAccounts({RecId:accountId}).then((result)=>{
            console.log(result);
            window.location.reload()
        })
        .catch((error)=>{
            this.error=error;
            console.log(error);
        });
    }

    handleEdit(event) {
        const accountId = event.target.dataset.accountId;
        // Open modal to edit the details of the record with accountId
        // ...
    }

    handleChangeOwner(event) {
        const accountId = event.target.dataset.accountId;
        // Call Apex method to fetch the list of users and assign ownership
        // ...
    }
}