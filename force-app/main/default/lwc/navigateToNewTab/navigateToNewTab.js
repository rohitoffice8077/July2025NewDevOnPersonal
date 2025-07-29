import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToNewTab extends NavigationMixin(LightningElement) {
    connectedCallback(){
        this.navigateToTab();
    }
    navigateToTab()
    {
        console.log('Navigate to Tab');
        //window.open();
        this[NavigationMixin.GenerateUrl]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Beer_Explorer'
            }
        }).then(url => {
            window.open(url, "_blank");
        });
    }
}