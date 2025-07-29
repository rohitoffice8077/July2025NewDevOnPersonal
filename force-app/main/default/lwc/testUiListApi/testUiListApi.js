import { LightningElement,wire } from 'lwc';
import { getListUi } from "lightning/uiListApi";

import CONTACT_OBJECT from "@salesforce/schema/Contact";
import NAME_FIELD from "@salesforce/schema/Contact.Name";

export default class TestUiListApi extends LightningElement {

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: "AllContacts",
        sortBy: NAME_FIELD,
        pageSize: 10
      })
      listView;
    
      get contacts() {
        console.log('######listView########'+this.listView.data.records.records);
        return this.listView.data.records.records;
      }
}