import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';

export default class WiredToGetUserDetails extends LightningElement {
    userId=Id;

    userName;
    userEmail;

    //0055g00000Agd7yAAB

    @wire(getRecord,{recordId:'0055g00000Agd7yAAB',fields:['User.Name','User.Email']})
    userDetails({data,error})
    {
        if(data)
        {
            this.userName=data.fields.Name.value;
            this.userEmail=data.fields.Email.value;
        }
        else if(error)
        {
            this.dataOfUser=undefined;
        }
    }

    /*connectedCallback()
    {
        this.dataOfUser=JSON.stringify(this.userDetails.data);
        alert(this.userDetails.data);
    }*/
}