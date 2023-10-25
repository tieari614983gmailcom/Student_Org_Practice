import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService'; // Corrected import path
import COUNT_UPDATE from '@salesforce/messageChannel/Count_Update__c';

export default class PubLwcDemo extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleIncrement() {
        const payload = {
            Operator: 'add',
            Constant: 1
        };
        publish(this.messageContext, COUNT_UPDATE, payload);
    }

    handleDecrement() {
        const payload = {
            Operator: 'subtract',
            Constant: 1
        };

        publish(this.messageContext, COUNT_UPDATE, payload); 
    }

    handleMultiply() {
        const payload = {
            Operator: 'multiply',
            Constant: 2
        };
        publish(this.messageContext, COUNT_UPDATE, payload);
    }
}
