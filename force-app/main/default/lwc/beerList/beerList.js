import { LightningElement,wire,track } from 'lwc';
import searchBeer from '@salesforce/apex/BeerController.searchBeer';
import getCartId from '@salesforce/apex/BeerController.getCartId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createCartItems1 from '@salesforce/apex/BeerController.createCartItems';
export default class BeerList extends LightningElement {
    beerRecords;
    errors;
    cartId;
    iteamsInCart=0;
    cart1='data:image/jpeg;base64,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';
    connectedCallback()
    {
        this.defaultCartId();
    }
    defaultCartId()
    {
        getCartId()
        .then(data=>{
            //this.cartId=data;
            //console.log(data);
            const wrapper = JSON.parse(data);
            if(wrapper)
            {
                this.iteamsInCart=wrapper.Count;
                this.cartId=wrapper.CartId;
            }
        })
        .catch(error=>{
            this.cartId=undefined;
            console.log(error);
        })
    }
    handleAddCart(event)
    {
        const selectedbeerid=event.detail;
        const selectedbeerrecord = this.beerRecords.find(record => record.Id === selectedbeerid);
        console.log('selected beer id',selectedbeerid);
        console.log('selectedbeerrecord',selectedbeerrecord);
        console.log('cart id',this.cartId);
        /*alert('test22222');
        //console.log('selectedbeerid',selectedbeerid);
        //this.iteamsInCart=this.iteamsInCart+1;
        alert('test');
        const selectedbeerrecord = this.beerRecords.find(record => record.id === selectedbeerid);*/

        createCartItems1({
            CartId:this.cartId,
            BeerId:selectedbeerid,
            Amount:selectedbeerrecord.Price__c
        })
        .then(data=>{
            console.log('cart item id',data);
            //alert('test');
            this.iteamsInCart=this.iteamsInCart+1;
            const toast = new ShowToastEvent(
                {
                    'title':'Success!!',
                    "message":selectedbeerrecord.Name + 'Added To Cart Successfully',
                    "variant" : "success"
                }
            );
            this.dispatchEvent(toast);
        })
        .catch(error=>{
            console.log('error',error);
            const toast = new ShowToastEvent(
                {
                    'title':'Error!!',
                    "message":JSON.stringify(error),
                    "variant" : "error"
                }
            );
            this.dispatchEvent(toast);
        });
        //alert('test+++++11111');
        //console.log('Beer Added Id Is = ',selectedbeerid);
        
    }
    @wire(searchBeer)
    wiredRecords(error,data)
    {
       // alert('test');
        if(data)
        {
        this.beerRecords=data;
        }
        else if(error){
        console.log(error);
        this.errors=error;
        }
    }
    handleEvent(event)
    {
        const eventVal = event.detail;
        console.log('searchParam',eventVal);

        searchBeer({
            searchParam:eventVal

        })
        .then(result=>{
            console.log('BeerRecords',result);
            this.beerRecords=result;
            this.errors=undefined;
        })
        .catch(error=>{
            console.log('errors',error);
            this.errors=error;
            this.beerRecords=undefined;
        })
    }

}