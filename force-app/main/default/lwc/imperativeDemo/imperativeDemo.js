import { LightningElement, track } from 'lwc';
import getEmployeeDetails from '@salesforce/apex/ImperativeDemoByNoob.getEmployeeDetails';

var columnss = [
    {label:"Record Id", fieldName:"Id"},
    {label:"Employee Name", fieldName:"Name"},
]
export default class ImperativeDemo extends LightningElement {
    @track columns = columnss;
    @track data =[]

    connectedCallback(){
        getEmployeeDetails()
        .then(result => {
            this.data = result;
        })
        .catch(error => {
            console.debug("Error occured");
        })
    }
}