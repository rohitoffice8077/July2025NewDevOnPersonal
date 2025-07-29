import { LightningElement } from 'lwc';

export default class BeerSearch extends LightningElement {
    searchValue;
    handleChange(event)
    {
        const value = event.target.value;
        const searchEvent = CustomEvent('search',
            {
               detail:value
            }
            );
            this.dispatchEvent(searchEvent);
    }
}