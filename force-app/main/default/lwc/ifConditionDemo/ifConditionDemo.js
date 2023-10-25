import { LightningElement,track } from 'lwc';

export default class IfConditionDemo extends LightningElement {

@track onButtonClickLabel = 'Show';
@track cardVisible = false ;
myTitle = 'Nooobie' ;

handleClick(event){
    const label = event.target.label;
  

    if(label === 'Show')
    {
       this.onButtonClickLabel = 'Hide'; 
       this.cardVisible = true ;
    }
    else if(label === 'Hide')
    {
        this.onButtonClickLabel = 'Show';
        this.cardVisible = false ;
    }
}

























   /* @track onClickButtonLabel = "Show";
    @track cardVisible = false;

    myValue = 'Abhishek Budddy';

    handleClick(event){
        const label = event.target.label;

        if(label === "Show" )
        {
            this.onClickButtonLabel = 'Hide';
            this.cardVisible = true;
        }
        else if(label === 'Hide' )
        {
            this.onClickButtonLabel = 'Show';
            this.cardVisible = false;
        }
    } */
}