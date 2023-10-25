import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {

    @track fullName = { firstName:"", lastName:""};

    handleChange(event){
        const field = event.target.label;
     //   window.alert(field);

        if(field === 'First Name')
    {
        this.fullName.firstName = event.target.value;
    }
    else if(field === 'Last Name')
    {
        this.fullName.lastName = event.target.value;
    }
    }
     
    

}