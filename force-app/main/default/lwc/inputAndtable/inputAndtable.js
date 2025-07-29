import { LightningElement } from 'lwc';

export default class InputAndtable extends LightningElement {
    fullname;
    phone;
    email;
    handlecahnge(event)
    {
        const field=event.target.name;
        if(field=='full name')
        {
            this.fullname=event.target.value;
        }
        else if(field=='phone')
        {
            this.phone=event.target.value;
        }
        else if(field=='email')
        {
            this.email=event.target.value;
        }
    }
}