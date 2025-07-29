import { LightningElement } from 'lwc';
import hasAccess from '@salesforce/customPermission/TestLwc';

export default class CustomPermissionUiLwcepisode23 extends LightningElement {
    get checkAccess()
    {
        return hasAccess;
    }
}