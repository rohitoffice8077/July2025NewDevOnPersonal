import { LightningElement,track } from 'lwc';
import setEmp from '@salesforce/apex/AccountController.setEmpDetails';

export default class MyMultiscreenForm extends LightningElement {
  @track showScreen1 = true;
  @track showScreen2 = false;
  @track showScreen3 = false;
  @track showSuccessMessage = false;

  data={};
  stringData;


  handleChange(event) {
    if(event.target.label=='Name')
    {
    this.data.Name = event.target.value;
    }
    if(event.target.label=='Email')
    {
    this.data.Email = event.target.value;
    }
    if(event.target.label=='Phone')
    {
    this.data.PhoneNumber = event.target.value;
    }
    if(event.target.label=='Education Details')
    {
    this.data.EducationDetails = event.target.value;
    }
    if(event.target.label=='Employment Details')
    {
    this.data.EmploymentDetails = event.target.value;
    }
  }


  next() {
    if (this.showScreen1) {
      this.showScreen1 = false;
      this.showScreen2 = true;
    } else if (this.showScreen2) {
      this.showScreen2 = false;
      this.showScreen3 = true;
    }
  }

  previous() {
    if (this.showScreen2) {
      this.showScreen2 = false;
      this.showScreen1 = true;
    } else if (this.showScreen3) {
      this.showScreen3 = false;
      this.showScreen2 = true;
    }
  }

  submit() {
    // Perform the record insertion logic here (e.g., Apex callout)
    // You can use the values of this.name, this.email, this.phone to create the record
    // After successful insertion, show the success message
    this.showSuccessMessage = true;
    this.stringData=JSON.stringify(this.data);
    setEmp({stringData:this.stringData}).then(result=>{
       if(result==true)
       {
        this.data={};
        alert('Record created successfully');
       }
    }).catch(error=>{
      alert(JSON.stringify(error));
    });
  }
}