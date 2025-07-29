import { LightningElement } from 'lwc';
import multiLing from '@salesforce/apex/ChangeLang.changeToLang';
import multiLing2 from '@salesforce/apex/ChangeLang.changeToLang2';
export default class MultiLang extends LightningElement {
    /*value = 'English';
    get options() {
        return [
            { label: 'English', value: 'English' },
            { label: 'German', value: 'German' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
    }*/
    /*handleClick(event)
    {
       console.log(event.target.label);
       multiLing().then(result=>{
        console.log('success');
       }).catch(error=>{
        console.log(error);
       });
    }*/
    result;
    error;
    handleClick(event)
    {
        multiLing2({lang:event.target.label}).then(result=>{
            this.result=result;
            this.error=undefined;
            console.log('result--->'+this.result);
            location.reload();
        }).catch(error=>{
            this.error=error;
            this.result=undefined;
            console.log('error--->'+this.error);
        });
    }

}