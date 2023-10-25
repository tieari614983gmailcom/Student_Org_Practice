import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboboxWithDatatableDemoPractice.getAccounts';
import getOppDetails from '@salesforce/apex/ComboboxWithDatatableDemoPractice.getOppDetails';

const columns = [
    { label:"Name" ,fieldName:"Name"},
    { label:"Close Date", fieldName:"CloseDate"}
]
export default class ComboboxWithDatatableDemoPractice extends LightningElement {
    @track value = '' ;
    @track optionsArray = [] ;
    @track cardVisible = false ;
    @track data = [] ;
    @track columns = columns ;
 

    get options() {
        return this.optionsArray ;
    }

    connectedCallback() {
        getAccounts()
        .then( response => {
            let arr = [] ;
            for(var i = 1 ; i < response.length ; i++)
            {
                arr.push({ label : response[i].Name, value : response[i].Id });
            }
            this.optionsArray = arr ;
        })
        .catch( error => {
            console.debug("Error Occured "+error);
        })
    }

    handleChange(event){
        this.value = event.detail.value ;
        this.cardVisible = true;

        getOppDetails( { accId : this.value } )
        .then(response => {
            this.data = response ;
        })
        .catch( error => {
            console.debug("Error Occured "+error);
        })
    }
}