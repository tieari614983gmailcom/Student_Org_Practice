import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import TRAINER_FIELD_R  from '@salesforce/schema/Pokemon__c.Trainer__c';

const fieldValue = [ TRAINER_FIELD_R ];

export default class TrainerDetailFormDemo extends LightningElement {
    @api recordId;

   // trainerId;
   @wire(getRecord, {recordId: '$recordId', fields: fieldValue})
    pokemons;

  //  get trainerId(){
      //  return getFieldValue(this.pokemons.data, TRAINER_FIELD_R);
  //  }

  get trainerId() {
    if (this.pokemons.data) {
        return getFieldValue(this.pokemons.data, TRAINER_FIELD_R);
    }
    else if (this.pokemons.error) {
        console.error('Error fetching record', this.pokemons.error);
        return null; // You can handle the error case here
    }
    return null; // You can handle other cases if needed


}
}