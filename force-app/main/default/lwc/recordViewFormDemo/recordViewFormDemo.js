import { LightningElement, api } from 'lwc';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';

export default class RecordViewFormDemo extends LightningElement {
    @api recordId = '0012w00001RObjwAAD';
    
    ObjectApiName = OBJECT_API_NAME;

    NameField = NAME_FIELD;
    PhoneField = PHONE_FIELD;
    ActiveField = ACTIVE_FIELD;


    handleClick(){
        this.recordId = '0012w00001nWg3UAAS';
    }
    
}