import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxWithDatatableDemo.getAccounts';
import getContactDetails from '@salesforce/apex/ComboBoxWithDatatableDemo.getContactDetail';

const columns = [
    { label:"Contact Name", fieldName:"Name"},
    { label:"Contact Phone", fieldName:"Phone"}
]
export default class ComboBoxWithDatatableDemo extends LightningElement {
   @track value = '';
   @track accArray = [];
    @track cardVisible = false;
    @track data = [];
    columns = columns;

   get options(){
    return this.accArray;
   }


   connectedCallback(){
    getAccounts()
    .then(response => {
        let arr = [];
        for(var i = 0; i<response.length; i++)
        {
            arr.push({ label:response[i].Name, value:response[i].Id});
        }
        this.accArray = arr;
    })
   }

   handleChange(event){
    this.cardVisible = true;

    this.value = event.detail.value;

    getContactDetails({ selectedAccount : this.value})
    .then(response => {
        this.data = response;
    })
    .catch(error => {
        console.log("Error Ocuured "+error);
    })
   }
}