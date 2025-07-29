import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigateToDiffPages extends  NavigationMixin(LightningElement) {
    navigateToHome()
    {
        console.log('Clicked Navigate To Home');
        this[NavigationMixin.Navigate]({
            type:"standard__namedPage",
            attributes:{
                pageName:"home"
            }
        });
    }
    navigateToNewContact()
    {
        console.log('Clicked Navigate To New Contact');
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
            objectApiName:"Contact",
            actionName:"new"
            }
        });
    }
    navigateToNewContactWithDefault(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName:'Rohit',
            LastName:'Sisodia'
        });
        console.log('Clicked Navigate To New Contact With Default');
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        });
    }
    navigateToContactListView()
    {
        console.log('Clicked Navigate To New Contact ListView');
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        });
    }
    navigateToTab()
    {
        console.log('Navigate to Tab');
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Beer_Explorer'
            }
        });
    }
}