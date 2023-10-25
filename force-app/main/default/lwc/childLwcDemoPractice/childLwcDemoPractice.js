import { LightningElement, api } from 'lwc';

export default class ChildLwcDemoPractice extends LightningElement {

    @api Counter = 0;

    @api
    handleMaximizeCounter() {
        this.Counter += 100;
    }
}
