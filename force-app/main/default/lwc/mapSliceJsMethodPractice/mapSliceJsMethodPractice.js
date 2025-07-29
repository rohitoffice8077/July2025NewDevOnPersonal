import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class MapSliceJsMethodPractice extends LightningElement {

    accountsList;
    accountsData;

    @wire(getAccounts)
    accounts(result)
    {
        //console.log('wired');
        this.accountsList=result;
        //console.log('this.accountsList->'+JSON.stringify(this.accountsList));
        if(result.data)
        {
            this.accountsData=result.data;
            console.log(JSON.stringify(result.data));
        }
        else if(result.error)
        {
            this.accountsData=undefined;
            //console.log(JSON.stringify(result.error));
        }
    }
    handleCreateMap()//map() method creates a new array populated with the results of calling function on every element in an array. The best part of this method is it does not alter the original array.
    {
        console.log('Click->handleCreateMap');
        let newArray = this.accountsData.map((result)=>{
            console.log(JSON.stringify(result));
            return result.Name;
        });
        console.log('newArray'+newArray);
    }
    handleCreateFilter()//filter() method creates a new array with all elements that pass the filter condition implemented by the provided function.
    {
        console.log('Click->handleCreateFilter');
        let newArray2 = this.accountsData.filter((result)=>{
            return result.Name.includes('Test');
        });
        console.log('newArray'+JSON.stringify(newArray2));
    }
    handleCreateFind()//find() method returns the value of the first element in the provided array that satisfies the provided testing function.
    {
        console.log('Click->handleCreateFind');
        let newArray3 = this.accountsData.find((result)=>{
            return result.Name.includes('Test');
        });
        console.log('newArray'+JSON.stringify(newArray3));
    }
    handleObjectAssign()
    {
        console.log('Click->handleObjectAssign');
        let newArray4 = Object.assign({Country:'India'},this.accountsData[0]);
        console.log('newArray'+JSON.stringify(newArray4));
        newArray4.Name='Raghav';
        console.log('newArray4'+JSON.stringify(newArray4));
        console.log('this.accountData[0]'+JSON.stringify(this.accountsData[0]));
    }
}