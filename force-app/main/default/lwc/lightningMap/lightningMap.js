import { LightningElement } from 'lwc';

export default class LightningMap extends LightningElement {
    /*mapMarkers = [
        {
            location: {
                City: 'Dhampur',
                Country: 'INDIA',
                PostalCode: '246761',
                State: 'UP',
                Street: 'The Landmark @ One Market, Suite 300',
            },
            value: 'location001',
            title: 'The Landmark Building',
            description:
                'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
            icon: 'standard:account',
            location :{
                Latitude: '37.790197',
                Longitude: '-122.396879',
            }
        }

    ];*/
    mapMarkers = [
        {
            location: {
                // Location Information
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: '50 Fremont St',
            },

            // For onmarkerselect
            value: 'SF1',

            // Extra info for tile in list & info window
            icon: 'standard:account',
            title: 'Julies Kitchen', // e.g. Account.Name
            description: 'This is a long description',
        },
        {
            location: {
                // Location Information
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: '30 Fremont St.',
            },

            // For onmarkerselect
            value: 'SF2',

            // Extra info for tile in list
            icon: 'standard:account',
            title: 'Tender Greens', // e.g. Account.Name
        },
    ];

    selectedMarkerValue = 'SF1';

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
}