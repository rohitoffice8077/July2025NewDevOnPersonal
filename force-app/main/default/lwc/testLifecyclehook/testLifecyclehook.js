import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class TestLifecyclehook extends LightningElement {
 
    name;
    count=0;

    pageRef;

    @wire(CurrentPageReference)
    wirePageRef(data){
        if(data){
            this.pageRef = data;
            console.log('Inside'+JSON.stringify(this.pageRef));
        }
    }
    constructor()
    {
        super();
        console.log('Inside Constructor');
    }
    connectedCallback()
    {
        console.log('Inside ConnectedCallBack');
    }
    renderedCallback()
    {
        console.log('Inside RenderedCallBack');
    }
    changeLabel()
    {
        this.count=this.count + 1;
        console.log('Inside'+this.count);
    }
}