import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ComboBoxDemoPractice.getContacts';

export default class ComboBoxDemoPractice extends LightningElement {
    @track value = '';
    @track conValue = [];

    get options() {
        return this.conValue;
    }

    connectedCallback() {
        getContacts()
        .then(result => {
            let arr = [];
            for (var i = 0; i < result.length; i++) {
                arr.push({ label: result[i].Name, value: result[i].Id });
            }
            this.conValue = arr;
        });
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}