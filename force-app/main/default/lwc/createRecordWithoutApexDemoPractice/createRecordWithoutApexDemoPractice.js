import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';
import SLA_FIELD from '@salesforce/schema/Account.SLA__c';
import SLA_NUMBER_FIELD from '@salesforce/schema/Account.SLASerialNumber__c';
import SLA_EXPIRATION_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c'; 

export default class CreateRecordWithoutApexDemoPractice extends LightningElement {
    AccountId;
    accountName = '';
    isActive = false;
    slaValue = '';
    slaNumber = '';
    slaExpirationDate = '';

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleActiveChange(event) {
        this.isActive = event.target.checked;
    }

    handleSLAChange(event) {
        this.slaValue = event.target.value;
    }

    handleSLANumberChange(event) {
        this.slaNumber = event.target.value;
    }

    handleSLAExpirationChange(event) {
        this.slaExpirationDate = event.target.value;
    }

    handleClick() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.accountName;
        fields[ACTIVE_FIELD.fieldApiName] = this.isActive;
        fields[SLA_FIELD.fieldApiName] = this.slaValue;
        fields[SLA_NUMBER_FIELD.fieldApiName] = this.slaNumber;
        fields[SLA_EXPIRATION_FIELD.fieldApiName] = this.slaExpirationDate;

        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

        createRecord(recordInput)
            .then(account => {
                this.AccountId = account.id;
                console.log('Account created with ID: ' + this.AccountId);
            })
            .catch(error => {
                console.error('Error creating account: ' + JSON.stringify(error));
            });
    }
}
