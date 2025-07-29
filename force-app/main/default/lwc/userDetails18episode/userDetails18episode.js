import { LightningElement,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import Name_Field from '@salesforce/schema/User.Name';
import Company_Field from '@salesforce/schema/User.CompanyName';
import Country_Field from '@salesforce/schema/User.Country';
import Language_Field from '@salesforce/schema/User.LanguageLocaleKey';
import Id from '@salesforce/user/Id';

const fields =[Name_Field,Company_Field,Country_Field,Language_Field];
export default class UserDetails18episode extends LightningElement {
    userId=Id;
    @wire(getRecord,{recordId:'$userId',fields})
    user;
    get name()
    {
        return getFieldValue(this.user.data,Name_Field);
    }
    get Company()
    {
        return getFieldValue(this.user.data,Company_Field);
    }
    get Country()
    {
        return getFieldValue(this.user.data,Country_Field);
    }
    get Language()
    {
        return getFieldValue(this.user.data,Language_Field);
    }
}