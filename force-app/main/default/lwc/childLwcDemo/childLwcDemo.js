import { LightningElement } from 'lwc';

export default class ChildLwcDemo extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleMultiply(event){
        const valueForMultiply = event.target.value;
        this.dispatchEvent(new CustomEvent('multiply', {detail: valueForMultiply}));
    }

    handleDivide(event){
        const valueForDivide = event.target.value;
        this.dispatchEvent(new CustomEvent('divide', {detail: valueForDivide}));
    }
}
