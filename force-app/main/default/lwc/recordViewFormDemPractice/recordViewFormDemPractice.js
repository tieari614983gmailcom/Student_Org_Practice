import { LightningElement, api } from 'lwc';
import OBJECT_API_NAME from '@salesforce/schema/Employee__c' ;
import NAME_FIELD from '@salesforce/schema/Employee__c.Name' ;
import EMPLOYEE_ACCOUNT_FIELD from '@salesforce/schema/Employee__c.Employee_Account__c' ;
import PHONE_FILED from '@salesforce/schema/Employee__c.Phone__c' ;


export default class RecordViewFormDemPractice extends LightningElement {

    @api recordId = "a012w00001D3YdoAAF" ;

    objectApiName = OBJECT_API_NAME ;

    nameField = NAME_FIELD ;
    employeeAccountField = EMPLOYEE_ACCOUNT_FIELD ;
    phoneField = PHONE_FILED ;
}