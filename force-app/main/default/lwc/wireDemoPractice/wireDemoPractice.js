import { LightningElement, track , wire } from 'lwc';
import getContactDetails from '@salesforce/apex/WireDemoPracticeByNoob.getContactList';

const columnss = [
    {label:'Record Id', fieldName: 'Id'},
    {label:"Name", fieldName: 'Name'},
    {label: "Account", fieldName:"AccountId"}
]
export default class WireDemoPractice extends LightningElement {

    @track columns = columnss;
    @track data = [];

    @wire(getContactDetails)
    WireContact({data, error}){
        if(data){
            this.data = data;
        }
        else if(error){
            console.debug("Error Occurred");
        }
    }
}