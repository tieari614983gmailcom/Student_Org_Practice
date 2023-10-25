import { LightningElement,api, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class LwcLifeCycleHooksDemo extends LightningElement {
    
    constructor() {
        super();

        //Defining variable is allowed
        let name= 'Salesforce';
        if(name){
            this.name='Salesforce forest';
        }
        window.alert(name);
        //Not allowed access elements in constructor
        this.template.querySelector('lightning-button');


        getAccounts()
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {

        })



        //Navigation is not allowed
        this[NavigationMixin.navigate]({
            type: 'standard_objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName:'view'
            }
        })
     
    }





    error; // You've defined an 'error' property here
    stack; // Define a 'stack' property for the stack trace

    errorCallback(error, stack) {
        this.error = error; // Assign the 'error' argument to the 'error' property
        this.stack = stack; // Assign the 'stack' argument to the 'stack' property
    }

}