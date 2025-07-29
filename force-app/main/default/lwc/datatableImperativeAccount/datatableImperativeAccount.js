import { LightningElement } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccList';

export default class DatatableImperativeAccount extends LightningElement {
    accountRecords;
    errors;
    columns=[{label:'Label',fieldName:'Name',type:'text'},
    {label:'Phone',fieldName:'Phone',type:'phone'},
    {label:'Industry',fieldName:'Industry',type:'text'}
   ];
   connectedCallback()
   {
       getAccounts()
           .then(result=>{
               this.accountRecords=result;
           })
           .catch(error=>{
               this.errors=undefined;
           });
   }
}