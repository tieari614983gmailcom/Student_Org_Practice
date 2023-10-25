import { LightningElement, api } from 'lwc';
import getContactAndOpportunity from '@salesforce/apex/AccountController.getContactAndOpportunity';

const column1 = [
    { label: "Contact Name", fieldName: "Name" },
    { label: "Contact Id", fieldName: "Id" }
];

const column2 = [
    { label: "Opportunity Name", fieldName: "Name" },
    { label: "Opportunity Id", fieldName: "Id" }
];

export default class DataTableGetMultipleChildDemo extends LightningElement {
    @api buttonLabel = "Show";
    @api recordId;
    @api showDataTable = false;

    contactData = [];
    opportunityData = [];

    column1 = column1;
    column2 = column2;

    handleClick(event) {
        if (event.target.label === "Show") {
            this.buttonLabel = "Hide";
            this.showDataTable = true;
        } else if (event.target.label === "Hide") {
            this.buttonLabel = "Show";
            this.showDataTable = false;
        }
    }

    connectedCallback() {
        getContactAndOpportunity({ accId: this.recordId })
            .then(result => {
                let temp = result.map(row => {
                    return Object.assign({ OppName: row.Opportunities, ContactName: row.Contacts });
                });

                temp.forEach(element => {
                    this.OppTempArray = element.OppName;
                    this.ConTempArray = element.ContactName;
                });

                this.opportunityData = this.OppTempArray;
                this.contactData = this.ConTempArray;
            })
            .catch(error => {
                console.log("Errorrrrrrrr"+error);
            });
    }
}
