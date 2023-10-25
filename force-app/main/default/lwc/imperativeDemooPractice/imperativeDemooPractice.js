import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ImperativeDemoPracticeByNoob.getContactList';

var columnss = [
    {label:"Record Id", fieldName:"Id"},
    {label:"Contact Name", fieldName:"Name"},
    {label:"Account", fieldName:"AccountId"},
   
]
export default class ImperativeDemooPractice extends LightningElement {
    @track columns = columnss;
    @track data =[]

   connectedCallback(){
    getContactList()
    .then(result => {
        this.data = result;
    })
    .catch(error => {
        console.debug("Error occured");
    })
   }
}