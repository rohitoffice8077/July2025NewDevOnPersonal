import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccounts';

export default class WirePropertyAccount extends LightningElement {
    @wire(getAccountList) accounts;
}