import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api itemName = "Hustler";

    @api handleValueChange(){
        this.itemName = "Salesforce Hustle";
    }
}