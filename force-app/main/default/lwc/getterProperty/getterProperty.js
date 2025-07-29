import { LightningElement } from 'lwc';

export default class GetterProperty extends LightningElement {
    var1=12;
    var2=10;
    get multi()
    {
        return this.var1 * this.var2;
    }
}