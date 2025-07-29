import { LightningElement } from 'lwc';

export default class ChecboxButton extends LightningElement {
    isSelectedList=[];
    get test()
    {
        return 'Unselected';
    }
    handleAllCheck()
    {
       console.log(this.template.querySelectorAll('[data-id="1"]'));
       let i; 
        let checkboxes = this.template.querySelectorAll('[data-id="1"]');
        console.log('jj'+checkboxes);
        for(i=0; i<checkboxes.length; i++) {
            console.log('ll'+checkboxes[i]);
        checkboxes[i].label='Selected';
        }
    }
    handleClick(event)
    {
        console.log('Testing----->'+event.target.dataset.id);
        if(event.target.label==='UnSelected')
        {
            event.target.label='Selected';
            event.target.variant='success';
            this.isSelectedList.push(event.target.dataset.id);
            console.log('isSelectedList------>'+this.isSelectedList);
        }
        else
        {
            event.target.label='UnSelected';
            event.target.variant='Neutral';
            console.log('Inside Unselected prior----->'+event.target.dataset.id);
            this.index1 = this.isSelectedList.indexOf(event.target.dataset.id);
            console.log('Index----->'+this.index1);
            if (this.index1> -1) { // only splice array when item is found
                console.log('Testing splice'+this.isSelectedList.splice(this.index1, 1)); // 2nd parameter means remove one item only
              }
              console.log('isSelectedList------>'+this.isSelectedList);
        }
    }
}