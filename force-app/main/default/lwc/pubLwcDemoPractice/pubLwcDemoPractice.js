import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COUNT_UPDATE from '@salesforce/messageChannel/Count_Update_Practice__c';

export default class pubLwcDemoPractice extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleAdd(){
        const payload = {
            constant: 1,
            operator:'add'
        };
        publish(this.messageContext, COUNT_UPDATE, payload);
    }

    handleSubtract(){
        const payload = {
            constant: 1,
            operator:'subtract'
        };
        publish(this.messageContext, COUNT_UPDATE, payload);
    }

    handleMultiply(){
        const payload = {
            constant: 1,
            operator:'multiply'
        }
        publish(this.messageContext, COUNT_UPDATE, payload);
    }
}