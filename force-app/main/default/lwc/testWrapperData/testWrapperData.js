import { LightningElement } from 'lwc';
import testMethod from '@salesforce/apex/TestingJsonWithWrapper.method1';
import testMethod2 from '@salesforce/apex/CreateCar.method2';

export default class TestWrapperData extends LightningElement {

    productList;
    handleClick(event)
    {
        testMethod().then(result=>{
            console.log(result);
            console.log('test---->'+JSON.parse(result));
            testMethod2({jsontest:result}).then(result=>{
                console.log(result);
            }).catch(error=>{
                console.log(error);
            });
        }).catch(error=>{
            console.log(error);
        })
    }
}