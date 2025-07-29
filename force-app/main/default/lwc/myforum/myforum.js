import { LightningElement } from 'lwc';

export default class Myforum extends LightningElement {
    enterfirstname;
    last;
    enterusername;
    enterpassword;
    handleclick()
    {
        console.log(this.enterfirstname);
        console.log(this.last);
        console.log(this.enterusername);
        console.log(this.enterpassword);
    }
    setfname(event)
    {
        this.enterfirstname=event.target.value;
    }
    setfname(event)
    {
        this.last=event.target.value;
    }
    setfname(event)
    {
        this.enterusername=event.target.value;
    }
    setfname(event)
    {
        this.enterpassword=event.target.value;
    }
}