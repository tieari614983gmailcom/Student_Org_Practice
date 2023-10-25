import { LightningElement, wire } from 'lwc';
import { getRecord, deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_ACTIVE from '@salesforce/schema/Account.Active__c';
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name';

const FIELDS = [ACCOUNT_NAME, ACCOUNT_INDUSTRY, ACCOUNT_ACTIVE, ACCOUNT_OWNER];

export default class GetAndDeleteRecordWithoutApexDemo extends LightningElement {
    AccountName;
    Industry;
    Active;
    Owner;
    AccountId;
    AccountDetails;

    @wire(getRecord, { recordId: '0012w00001nWmzFAAS', fields: FIELDS })
    wiredAccount({ error, data }) {
        if (data) {
            // Access data.fields properties here
            this.AccountDetails = data;
            this.AccountId = data.id; // Assign the record ID to AccountId
            this.AccountName = data.fields.Name.value;
            this.Industry = data.fields.Industry.value;
            this.Active = data.fields.Active__c.value;
            this.Owner = data.fields.Owner.Name.value;
        } else if (error) {
            console.error('Error loading account data', error);
        }
    }

    handleClick() {
        deleteRecord(this.AccountId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account deleted successfully.',
                        variant: 'success',
                    })
                );
            })
            .catch((error) => {
                console.error('Error deleting account', error);
            });
    }
}
