import { LightningElement, track, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/DatatableWithRowSelectonDemo.getContacts';

const columns = [
{ label : "Name", fieldName : "Name"},
{ label : "Phone", fieldName : "Phone"}
];

export default class DatatableWithRowSelection extends LightningElement {

    @track showLabel = 'Show Contacts';
    @track isVisible = false;
    columns = columns ;
    @track data = [];
    @api recordId ;
    @api searchkey= '';

    connectedCallback(){
        getContacts({lwcRecordId : this.recordId})
        .then(response => {
            this.data = response;
        })
        .catch(error => {
            console.log("Error occured : "+error);
        })

    }

    handleChange(event){
        this.searchkey = event.target.value;
        console.log('Search Key : '+ JSON.stringify(this.searchkey));

        getContacts({searches : this.searchkey,lwcRecordId : this.recordId })
        .then(response => {
            this.data = response;
        })
        .catch(error => {
            console.log("Error occured : "+error);
        })
    }
    


    handleClick(event){
        const label = event.target.label;

        if(label === 'Show Contacts')
        {
            this.showLabel = 'Hide Contacts'
            this.isVisible = true;
        }
        else if(label === 'Hide Contacts')
        {
            this.showLabel = 'Show Contacts'
            this.isVisible = false;
        }
    }

    getSelectedValues(event){
        const selectedValues = event.target.selectedRows;

        window.alert(JSON.stringify(selectedValues));
    }
}