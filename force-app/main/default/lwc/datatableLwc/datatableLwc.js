import { LightningElement,wire,api } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import Type from '@salesforce/schema/Account.Type';
const COLUMNS = [
    {label:'Account Name',fieldName:'Name'},
    {label:'Annual Revenue',fieldName:'AnnualRevenue',type :'currency'},
    {label:'Phone',fieldName:'Phone',type :'phone'},
    {label:'Industry',fieldName:'Industry',type :'text'}
];

export default class DatatableLwc extends LightningElement {
    columns=COLUMNS;
    tableData;
    @wire(getAccounts)
    accountHandler({data,error})
    {
        if(data)
        {
            console.log(data);
            this.tableData=data;
        }
        else{
            console.log(error);
        }
    }
    showModal=false;
    @api show() {
        this.showModal = true;
      }
      handleDialogClose() {
        this.showModal = false;
      }

}