import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';


export default class CreateRecordWithoutApexDemo extends LightningElement {
    name = '';
    createdContactId = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleClick() {
        const fields = {};
        fields[LAST_NAME_FIELD.fieldApiName] = this.name;
       

        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields,
        };

        createRecord(recordInput)
            .then(contact => {
                this.createdContactId = contact.id;
            })
            .catch(error => {
                console.error('Error creating contact: ' + JSON.stringify(error));
            });
    }
}
