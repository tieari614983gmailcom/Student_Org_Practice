import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBoxDemo.getAccounts';

export default class ComboBoxDemo extends LightningElement {
   @track value = '';
   @track accOption = [];

   get options(){
    return this.accOption;
   }


   connectedCallback(){
    getAccounts()
    .then(response => {
        let arr = [];
        for(var i=0; i<response.length ; i++)
        {
            arr.push({ label : response[i].Name , value : response[i].Id });
        }
        this.accOption = arr;
    })
    .catch(error => {
        console.log("Error "+error);
    })
   }

   handleChange(event){
    this.value = event.detail.value ;
   }
}