import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class TestingLookupNameOnObject extends LightningElement {
    data=[];
    data2=[];
    stringtest;

    connectedCallback()
    {
        /*getContacts().then(result=>{
            console.log(JSON.stringify(result));
            this.data=result;
            //this.data.push(this.obj);
            //alert(JSON.stringify(this.data));
           
        }).catch(error=>{

        });*/
        //this.stringtest='ROHIT SISODIA';
        //this.data2=[...this.stringtest];
        //alert(typeof(this.data2));
        /*let stringdemo='rohit';
        let strindemo2 =[...stringdemo];
        console.log(strindemo2);
        alert(strindemo2);*/
        //let arr1=['test1','test2'];
       //let arr2=['test3','test4'];
       //let arr3=[...arr1,...arr2];
        //alert(arr3);
        //console.log(arr3);
       let arr1=['a','b'];
       let arr2=arr1;
       alert(arr2);
       arr1.push('e');
       alert(arr2);
    }
}