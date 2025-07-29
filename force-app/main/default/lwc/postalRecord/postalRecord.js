import { LightningElement } from 'lwc';
import POSTAL_OBJECT from '@salesforce/schema/Postal_Code__c';
import CODE_FIELD from '@salesforce/schema/Postal_Code__c.Name';
import 	Locality_Name from '@salesforce/schema/Postal_Code__c.Locality_Name__c';

export default class PostalRecord extends LightningElement {
    accountObject = POSTAL_OBJECT;
    myFields = [CODE_FIELD, Locality_Name];
    handleAccountCreated()
    {
        console.log('test');
    }
}