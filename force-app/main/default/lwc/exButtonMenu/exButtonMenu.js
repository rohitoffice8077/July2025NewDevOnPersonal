import { LightningElement } from 'lwc';

export default class ExButtonMenu extends LightningElement {
    menuItemValuesPrior = [{ label: 'Technical Architecture', value: 'Technical Architecture' }];
    testvariable = [];
    menuItemValues =
        [{
            label: 'DevOps',
            value: 'DevOps'
        },
        {
            label: 'SDE',
            value: 'SDE'
        },
        {
            label: 'Salesforce Developer',
            value: 'Salesforce Developer'
        },
        {
            label: 'Data Engineer',
            value: 'Data Engineer'
        },
        {
            label: 'IT Support',
            value: 'IT Support'
        }];
    handleSelect(event) {
        console.log(event.detail.value);
        //this.menuItemValuesPrior = [];
        //this.menuItemValuesPrior = [{ label: event.detail.label, value: event.detail.value }];
        //location.reload()
    }
}