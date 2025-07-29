import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ModifyObjectPractice extends LightningElement {
    connectedCallback()
    {
        getContacts().then(result=>{
            this.data=result.map((x)=>({...x}));
            console.log('Data'+JSON.stringify(this.data));
            this.modifyObject();
            //alert(JSON.stringify(result));
        }).catch(error=>{

        });
    }
    modifyObject()
    {
        this.data.forEach(element => {
            element.code='ADM'+element.LastName;
            //console.log(element);
        });
        console.log(JSON.stringify(this.data));
        let x={};
        x.Id="test";
        x.FirstName="test";
        x.LastName="test";
        this.data.push(x);
        console.log('after add'+JSON.stringify(this.data));
        let z=["one","two","three","four"];
        let y=[...z];
        console.log(JSON.stringify(y));
        y.push("five");
        console.log(JSON.stringify(y));
        console.log(JSON.stringify(z));
        y[0]="seven";
        console.log(JSON.stringify(y));
        console.log(JSON.stringify(z));
        let l=[{"Id":"0035g00000Fmp9bAAB","LastName":"sisodia","Email":"prithvi1@gmail.com","code":"ADMsisodia"},{"Id":"test","FirstName":"test","LastName":"test"}];
        let o=[...l];
        o[0].Id="rohit";
        o[0].last='test';
        o.push({"Id":"0035g00000pT3spAAC","FirstName":"TestContact1","LastName":"Smith","code":"ADMSmith"});
        console.log('o'+JSON.stringify(o));
        console.log('l'+JSON.stringify(l));
        
    }

}