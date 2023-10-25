import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNT_UPDATE from '@salesforce/messageChannel/Count_Update_Practice__c';

export default class SubLwcDemoPractice extends LightningElement {

    counter = 0;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(this.messageContext, COUNT_UPDATE,
                                (message) => (this.handleMessage(message)) );
    }

    handleMessage(message){
        if(message.operator ==='add'){
            this.counter += message.constant; 
        }
        if(message.operator ==='subtract'){
            this.counter -= message.constant; 
        }
        if(message.operator ==='multiply'){
            this.counter *= message.constant; 
        }
    }
}