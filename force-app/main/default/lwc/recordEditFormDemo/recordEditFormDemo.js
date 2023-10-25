import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';
import SLA_FIELD from '@salesforce/schema/Account.SLA__c';
import SLA_EXP_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c'
import SLA_SN_FIELD from '@salesforce/schema/Account.SLASerialNumber__c'

export default class RecordEditFormDemo extends LightningElement {

    objectApiName = ACCOUNT_OBJECT ;

    nameField = NAME_FIELD ;
    activeField = ACTIVE_FIELD ;
    SLAField = SLA_FIELD;
    SLAExpiratonDateField = SLA_EXP_FIELD ;
    SLASerialNumberField = SLA_SN_FIELD;

    accountId = "C0012w00001nWfxQAAS";

   handleSuccess(event) {
       this.accountId = event.detail.id;

        const events = new ShowToastEvent({
            title:"Record Created ",
            message:"Account Created Succesfully",
            variant:"success"
        })
        this.dispatchEvent(events);
        
    }
  
}