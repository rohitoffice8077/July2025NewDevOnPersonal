import { LightningElement,wire } from 'lwc';
import findAccountList from '@salesforce/apex/AccountController.findAccList';

export default class BindWireWithPara extends LightningElement {
    searchKey='';

    @wire(findAccountList,{keyword:'$searchKey'})
    accounts;
    handlechange(event)
    {
        this.searchKey=event.target.value;
    }
}