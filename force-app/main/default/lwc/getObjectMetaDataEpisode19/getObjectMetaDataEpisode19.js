import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class GetObjectMetaDataEpisode19 extends LightningElement {
    objectApiName;
    @wire(getObjectInfo,{objectApiName:'$objectApiName'})
    objectInfo;
    handleClick(event)
    {
        this.objectApiName=this.template.querySelector('lightning-input').value;
        console.log(this.objectApiName);
    }
    get ObjectMetaData()
    {
        return JSON.stringify(this.objectInfo.data,null,10);
    }
}