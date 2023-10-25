import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

import NAME_FILED from '@salesforce/schema/Opportunity.Name';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Opportunity.AccountId';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class RecordEditFormDemoPractice extends LightningElement {

    objectApiName = OPPORTUNITY_OBJECT;

    Name = NAME_FILED ;
    CloseDate = CLOSE_DATE_FIELD;
    AccountId = ACCOUNT_ID_FIELD ;
    Stage = STAGE_FIELD ;
    OpportunityId = "Created Opportunity Id will display here" ;

    handleSuccess(event){
        this.OpportunityId = event.detail.Id ;

        let events = new ShowToastEvent({
            title: "Success",
            message: "Opportunity Created Successfully",
            variant: "success"
        });
        
        this.dispatchEvent(event);
    }
}