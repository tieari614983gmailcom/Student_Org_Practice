import { LightningElement, api, wire } from 'lwc';
import getRelatedRecords from '@salesforce/apex/RelatedObjectsController.getRelatedRecords';

const columns = [
    {label:"Related Object", fieldName:"RelatedObject"},
    {label:"Record Name", fieldName:"RecordName"},
    {label:"Record Id", fieldName:"RecordId"},
    {label:"Created By", fieldName:"CreatedByName"},
    {label:"Created Date", fieldName:"CreatedDate"}
];
export default class RelatedRecordsTable extends LightningElement {
    @api recordId;
    relatedRecords;
    columns = columns;

    @wire(getRelatedRecords, { recordId: '$recordId' })
    wiredRecords({ data, error }) {
        if (data) {
            this.relatedRecords = data;
            //console.log("JSON.stringify(data) == "+JSON.stringify(data));
        } else if (error) {
            // Handle error
            console.error("JSON.stringify(eroor) == "+JSON.stringify(error));
        }
    }

    
}
