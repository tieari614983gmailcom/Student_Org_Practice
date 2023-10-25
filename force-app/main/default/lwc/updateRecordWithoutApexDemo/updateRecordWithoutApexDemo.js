import { LightningElement } from 'lwc';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import { updateRecord } from 'lightning/uiRecordApi';

export default class UpdateRecordWithoutApexDemo extends LightningElement {

    contactId;
    contactLastName;

    handleIdChange(event){
        this.contactId = event.target.value;
    }

    handleNameChange(event){
        this.contactLastName = event.target.value;
    }


    handleUpdateClick(){

        const fields={};
        fields[ID_FIELD.fieldApiName] = this.contactId;
        fields[LAST_NAME_FIELD.fieldApiName] = this.contactLastName;

        const inputValue = { fields };

        updateRecord(inputValue)
        .then(result => {
            console.log("result "+result);
        })
        .catch(error => {
            console.log("error "+error);
        })
    }

}