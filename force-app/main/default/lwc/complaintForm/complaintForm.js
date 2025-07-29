import { LightningElement } from 'lwc';
import compLogo from '@salesforce/resourceUrl/compLogo';

export default class ComplaintForm extends LightningElement {
    cpLogo=compLogo;
    value;
    value1;
    value2;

    connectedCallback(){
        var today = new Date();
    this.datenew=today.getDate().toString();
    this.datemonth=(today.getMonth() +1).toString();
    this.date=today.getFullYear().toString();
    console.log(today.toISOString())
    //var last=new Date(new Date().getFullYear(), 11, 32);
    //this.date1=last.toISOString();
    this.date1=this.datenew+'/'+this.datemonth+'/'+this.date;
    }
    get options() {
        return [
            { label: 'Spanish', value: 'Spanish' },
            { label: 'Russian', value: 'Russian' },
            { label: 'Vietnamese', value: 'Vietnamese' },
            { label: 'Chinese', value: 'Chinese' },
            { label: 'Filipino', value: 'Filipino' },
            { label: 'Arabic', value: 'Arabic' },
            { label: 'Others', value: 'Others' }
        ];
    }
    get options1() {
        return [
            { label: '311(Customer Service)', value: '311(Customer Service)' },
            { label: 'Adult Probation(ADP)', value: 'Adult Probation(ADP)' },
            { label: 'Animal Care and Control(ACC)', value: 'Animal Care and Control(ACC)' },
            { label: 'Appeals Board of (BOA)', value: 'Appeals Board of (BOA)' },
            { label: 'Arts Commission(ART)', value: 'Arts Commission(ART)' },
            { label: 'Asian Art Museum', value: 'Asian Art Museum' },
            { label: 'Assessor Recorder (ASR)', value: 'Assessor Recorder (ASR)' }
        ];
    }
    options3 = [
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'}
    ];

    options4 = [
        {label: '9AM – 12PM', value: '9AM – 12PM'},
        {label: '1PM - 5PM', value: '1PM - 5PM'},
        {label: 'Other', value: 'Other'}
    ];
    options5 = [
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'}
    ];
    options6 = [
        {label: 'Yes (Input information below)', value: 'Yes'},
        {label: 'No', value: 'No'}
    ];

    handleChange(event) {
        this.value = event.detail.value;
        console.log(this.value);
    }
    handleChange1(event)
    {
        this.value1=event.detail.value;
        console.log(this.value1);
    }
    handleClick()
    {
        console.log('Test');
    }
    
    value2;
    value3;
    value4;
    value5;
    desShow=true;
    gotHelp=false;
    handleRadioChange(event) {
        console.log(event.target.value);
        this.value2 = event.target.value;
    }
    handleRadioChange2(event) {
        console.log(event.target.value);
        this.value3 = event.target.value;
    }
    handleRadioChange3(event) {
        console.log(event.target.value);
        this.value4 = event.target.value;
        if(this.value4=='Yes')
        {
            this.desShow=false;
        }
        else if(this.value4=='No')
        {
            this.desShow=true;
        }
    }
    handleRadioChange4(event)
    {
        console.log(event.target.value);
        this.value5 = event.target.value;
        if(this.value5=='Yes')
        {
            this.gotHelp=true;
        }
        else if(this.value5=='No')
        {
            this.gotHelp=false;
        }
    }

}