import { LightningElement } from 'lwc';

export default class DataBindingDemo extends LightningElement {
    value="Salesforce Developer";

    handleChange(event){
        this.value = event.target.value;
    }
}