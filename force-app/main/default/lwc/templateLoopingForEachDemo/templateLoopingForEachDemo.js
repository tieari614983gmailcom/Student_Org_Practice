import { LightningElement } from 'lwc';

export default class TemplateLoopingForEachDemo extends LightningElement {
    carList=[ "Honda", "Hero", "Splender"];
    programList = [
        {
            id:"123",
            language:"Excel"
        },
        {
            id:"456",
            language:"Word"
        },
        {
            id:"789",
            language:"Powerpoint"
        },
    ];
}