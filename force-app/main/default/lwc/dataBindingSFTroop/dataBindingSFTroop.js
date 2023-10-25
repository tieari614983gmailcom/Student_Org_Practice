import { LightningElement } from 'lwc';

export default class DataBindingSFTroop extends LightningElement {
    fullName = "Babu Bhaiya";

     title = "Salesforce Developer";

    handleKey(event){
        this.title = event.target.value ;
    }
}