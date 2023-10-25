import { LightningElement, track } from 'lwc';
import GET_CONTACT_DETAILS from '@salesforce/apex/TreeGridDemo.getContactDetails';

export default class TreeGridDemo extends LightningElement {

    @track gridColumns = [
        {
            type:"text",
            fieldName:"Name",
            label:"Name"
        },
        {
            type:"text",
            fieldName:"FirstName",
            label:"First Name"
        },
        {
            type:"text",
            fieldName:"LastName",
            label:"Last Name"
        }
    ];

    @track gridData;

    connectedCallback(){
        GET_CONTACT_DETAILS()
        .then( result => {
            //console.log("result Stringinfy "+ JSON.stringify(result));
            var tempContact = JSON.parse(JSON.stringify(result));
           
            //console.log("tempContact Stringinfy "+ JSON.stringify(tempContact));

            for(var i=0; i<tempContact.length; i++){
                var newContact = tempContact[i]['Contacts'];
                //console.log("mazmamam"+JSON.stringify(newContact));

                if(newContact){
                    tempContact[i]._children = newContact;
                    //console.log("maa amza"+JSON.stringify(tempContact[i]._children));
                }
               delete tempContact[i].Contacts;
               
            }
            this.gridData = tempContact;

        })
        .catch( error => {
            console.error("error "+error);
        })
    }

    
}