import { LightningElement ,wire} from 'lwc';
import getAccountDetails from '@salesforce/apex/ForEachDemoPractice.getAccountDetails';

export default class ForEachDemoPractice extends LightningElement {
  
    @wire(getAccountDetails)
    accounts;
}