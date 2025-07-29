import { LightningElement } from 'lwc';

export default class TestWindowDuplicate extends LightningElement {
    connectedCallback()
    {
        //alert(JSON.parse(localStorage.getItem('https://girikon98-dev-ed.lightning.force.com/lightning/r/Case/5005g00000onhhpAAA/view')));
        /*var tabs = JSON.parse(localStorage.getItem('salesforceTabs')) || [];
            tabs.push(window.location.href);
            localStorage.setItem('salesforceTabs', JSON.stringify(tabs));
            alert(JSON.parse(localStorage.getItem('salesforceTabs')));*/
            alert(localStorage.getItem('salesforceTabs'));
            if (localStorage.getItem('salesforceTabs')) {
                // If this tab/window is already opened, close it
                localStorage.clear(); 
                alert('Under Close code');
                //localStorage.clear();
                window.close();
            } else {
                // If this is a new tab/window, store its information
                var tabs = JSON.parse(localStorage.getItem('salesforceTabs')) || [];
                tabs.push(window.location.href);
                localStorage.setItem('salesforceTabs', JSON.stringify(tabs));
                alert('Under Set Log1');
            }
    }
    /*disconnectedCallback()
    {
        alert('DisconnectedCallBackRun');
        localStorage.clear();
    }*/
}