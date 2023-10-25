import { LightningElement, track, wire, api } from 'lwc';

/*import getAccounts from '@salesforce/apex/WireDemo.getAccounts';

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Id', fieldName: 'Id' }
];
*/
export default class MyFirstComponent extends LightningElement {

    @track handleLabel = "Show Contacts";
    @track isVisible = false;



    handleClick(event){
        const label= event.target.label;

        if(label === "Show Contacts")
        {
            this.handleLabel = 'Hide Contacts';
            this.isVisible = true;
        }
        else if(label === "Hide Contacts")
        {
            this.handleLabel = 'Show Contacts';
            this.isVisible = false;
        }
    }







    /*
    @track columns = columns;
    @track data = [];

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.data = data;
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }
    */
}