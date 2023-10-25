import { LightningElement, track, wire } from 'lwc';
import getEmployeeDetails from '@salesforce/apex/WireDemoByNoob.getEmployeeDetails';

const columnss = [
    {label:'Record Id' ,fieldName:'Id'},
    {label:"Name" ,fieldName:'Name'},
    {label:"Phone", fieldName:'Phone__c'}
];
export default class WireDemo extends LightningElement {

    @track columns = columnss;
    @track data = [];

    @wire(getEmployeeDetails)
    wireEmployee({data, error}){
        if(data)
        {
            this.data = data;
        }
        else if(error)
        {
            console.debug("Error occured");
        }
    }

}