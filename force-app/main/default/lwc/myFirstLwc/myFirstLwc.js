import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyFirstLwc extends LightningElement {
    myTitle = "Welcome To the Playground Buddy";

    /*
    connectedCallback(){
    const name = "Abhishek";
       if(this.myTitle){  //If myTitle is not null then
        
        window.alert("Name by const :"+name);
       }
       
    }

    handleClick3(){
     // window.alert("Successful3");
    }
    handleClick2(){
     // window.alert("Successful2");
     this.showToast(this.myTitle);

    }

    showToast(firstFunctionArgument){
      const event = new ShowToastEvent({
        title : "Show Toast",
        message : firstFunctionArgument,
        variant : "Error"

      })
      this.dispatchEvent(event);

    }
    
    
    */

    connectedCallback(){
      var callMyFunction = this.myFunction(12, 6);
      //  window.alert("callMyFunction "+callMyFunction);
       window.alert('callMyFunctions by Arrow'+callMyFunction);
    }

  //  myFunction(dividend, divisor){
  //    return (dividend/divisor);
  //  }

    myFunction = (dividend, divisor) =>{
      return (dividend/divisor);
    }
      
      /*
     
            

                  
      */

    

   
}