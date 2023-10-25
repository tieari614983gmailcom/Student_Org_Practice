import { LightningElement } from 'lwc';
import { APPLICATION_SCOPE, publish, createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"

export default class lMSDemoSFTroopDemo extends LightningElement {
    // Create a message context
    context = createMessageContext();

    // Initialize variables
    inputValue = '';
    subscription = null;
    receivedMessage = '';

    // Method to publish a message
    publishMessage() {
        const message = {
            lmsData: {
                value: this.inputValue
            }
        };
        publish(this.context, SAMPLEMC, message);
    }

    // Method to subscribe to the message channel
    subscribeMessage() {
        if (this.subscription) {
            return; // Return if already subscribed
        }
        // Subscribe to the message channel with APPLICATION_SCOPE
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            // Call the handleMessage method to process the received message
            this.handleMessage(message);
        }, { scope: APPLICATION_SCOPE });
    }

    // Method to unsubscribe from the message channel
    unsubscribeMessage() {
        // Unsubscribe from the message channel and reset the subscription
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Method to handle received messages from the subscribed channel
    handleMessage(message) {
        // Check if the 'message' object and 'lmsData' property exist in the message
        // If 'lmsData' property exists, assign its 'value' to 'receivedMessage'
        // If 'lmsData' property doesn't exist, set 'receivedMessage' to 'No Message'
        this.receivedMessage = message && message.lmsData ? message.lmsData.value : 'No Message';
    }

    // Handle input field value change
    inputHandler(event) {
        this.inputValue = event.target.value;
    }

    // Release the message context when the component is disconnected
    disconnectedCallback() {
        releaseMessageContext(this.context);
    }
}



