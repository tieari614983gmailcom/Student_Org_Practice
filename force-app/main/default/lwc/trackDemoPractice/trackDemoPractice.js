import { LightningElement, track } from 'lwc';

export default class TrackDemoPractice extends LightningElement {
    @track purnaNaam = { Naam:"", UpNaam:""}

    handleBadlaav(event)
    {
        var field = event.target.label;
        if(field === 'Naam')
    {
        this.purnaNaam.Naam = event.target.value;
    }
    else if(field === 'UpNaam')
    {
        this.purnaNaam.UpNaam = event.target.value;
    }
    }
    
}