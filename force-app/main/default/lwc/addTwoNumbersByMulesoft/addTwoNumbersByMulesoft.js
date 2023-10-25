import { LightningElement, track } from 'lwc';
import PERFORM_ADDITION from '@salesforce/apex/AddNumbersWithMulesoft.performAddition';

export default class AddTwoNumbersByMulesoft extends LightningElement {
    @track number1  ;
    @track number2 ;
    @track result;


    
    handleNumberChange1(event) {
        this.number1 = event.target.value;
        
    }

    handleNumberChange2(event) {
        this.number2 = event.target.value;
    }

    
   handleSubmit() {
        const num1 = this.number1 ? this.number1 : 0;
        const num2 = this.number2 ? this.number2 : 0;
        PERFORM_ADDITION({ num1 , num2})
            .then(response => {
                const jsonResponse = JSON.parse(response);
                const resultValue = jsonResponse.result;
                this.result = resultValue;
            })
            .catch(error => {
                console.error("Error: " + JSON.stringify(error));
            });
    }
}
