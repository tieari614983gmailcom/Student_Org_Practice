import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class RecordFormDemoPractice extends LightningElement {
    objectApiName = CONTACT_OBJECT;

    fields = [ NAME_FIELD];

    recordId = "0032w000019BKHtAAO";
}