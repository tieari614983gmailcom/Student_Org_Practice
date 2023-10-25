import { LightningElement } from 'lwc';

export default class ParentLwcDemoPractice extends LightningElement {
    handleCounter = 0;

    handleChange(event){
        this.handleCounter = parseInt(event.target.value);
    }

    handleClick(event){
        const childComponent = this.template.querySelector('c-child-lwc-demo-practice');
        if (childComponent) {
            childComponent.handleMaximizeCounter();
        }
    }
}
