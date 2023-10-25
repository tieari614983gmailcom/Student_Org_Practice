import { LightningElement ,track} from 'lwc';

export default class IfConditionDemoPractice extends LightningElement {
    @track onClickButtonLabel = "Show";
    @track cardVisible = false;
    myTitle = "Welcome buddy";

    handleClick(event){
        const label = event.target.label;

        if(label === 'Show')
        {
            this.onClickButtonLabel = "Hide";
            this.cardVisible = true;
        }else if(label === "Hide")
        {
            this.onClickButtonLabel = "Show";
            this.cardVisible = false;
        }
    }
}