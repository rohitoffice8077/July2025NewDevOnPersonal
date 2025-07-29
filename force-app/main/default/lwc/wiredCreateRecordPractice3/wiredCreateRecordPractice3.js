import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class WiredCreateRecordPractice3 extends LightningElement {

    name='';
    rating='';
    industry='';
    handleChange(event)
    {
        if(event.target.name=='Name')
        {
            this.name=event.target.value;
            console.log('this.name'+this.name);
        }
        if(event.target.name=='Rating')
        {
            this.rating=event.target.value;
            console.log('this.rating'+this.rating);
        }
        if(event.target.name=='Industry')
        {
            this.industry=event.target.value;
            console.log('this.industry'+this.industry);
        }
    }
    handleSave()
    {
        const fields={};
        fields['Name']=this.name;
        fields['Rating']=this.rating;
        fields['Industry']=this.industry;
        console.log('Fields'+JSON.stringify(fields));

        const recordInput={
            apiName:'Account',
            fields:fields
        };

        createRecord(recordInput).then((result)=>{
            console.log('RecordCreated');
        }).catch((error)=>{

        });
    }
}