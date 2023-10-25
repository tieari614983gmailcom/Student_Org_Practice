import { LightningElement, track, wire ,api } from 'lwc';
import getOpportunity from '@salesforce/apex/DatatableWithRowSelectonDemoPractice.getOpportunity';

const columns = [
    { label: "Name", fieldName:"Name"},
    { label: "Close Date", fieldName : "CloseDate"}
]
export default class DatatableWithRowSelectionPractice extends LightningElement {
    @track ShowOpportunities = "Show Opportunities";
    @track cardVisible = false;
    columns = columns;
    @api recordId;
    @track data = [];
    @api searchKey='';
    handleClick(event)
    {
        const label = event.target.label;

        if(label === "Show Opportunities")
        {
            this.ShowContacts = "Hide Opportunities";
            this.cardVisible = true;
        }
        else if(label === "Hide Opportunities")
        {
            this.ShowContacts ="Show Opportunities";
            this.cardVisible = false;
        }
    }


    connectedCallback(){
        getOpportunity({ accId : this.recordId})
        .then( response => {
            this.data = response;
        })
        .catch( error => {
            console.log("Error Occured"+error)
        })
    }


    handleChange(event){
        this.searchKey = event.target.value;
        

        getOpportunity({ searchKey : this.searchKey, accId:  this.recordId})
        .then( response => {
            this.data = response
        })
        .catch( error => {
            console.log("Error Occured"+error)
        })
    }


    getSelectedRecords(event){
        const selectedValueDetails = event.target.selectedRows;
      
        window.alert(JSON.stringify(selectedValueDetails));
    }
}