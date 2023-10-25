import { LightningElement } from 'lwc';

export default class ParentLwcDemo extends LightningElement {
 
 countValue = 0;

    handleDecrement(){
        this.countValue--;
    }

    handleIncrement(){
        this.countValue++;
    }

    handleMultiplication(event){
        const multiplyValue = event.detail;
        this.countValue *= multiplyValue;
    }

    handleDivision(event){
        const divideValue = event.detail;
        this.countValue /= divideValue;
    }
}
