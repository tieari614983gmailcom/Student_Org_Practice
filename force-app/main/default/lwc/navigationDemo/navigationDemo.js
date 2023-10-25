
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationDemo extends NavigationMixin(LightningElement) {

    //Navigate to Custom Lightning Page
   /* handleNavigation(){

        this[ NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'App_Page',
            }
        })  
    }*/


    //Navigate to Account Home Page
  /*  handleNavigation(){

        this[ NavigationMixin.Navigate ]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Account',
                actionName :'home'
            },
            state:{
                filterName: 'Recent'
            }
        })
    } */

    //Navigate to standard Lightning home Page
   /* handleNavigation(){

        this[ NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home',
            }
        })  
    } */

    //To navigate to the create record page in vuew mode
   /* handleNavigation(){

        this[ NavigationMixin.Navigate ]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0012w00001RObk4AAD',
                objectApiName: 'Account',
                actionName : 'view'
            }
           
        })
    } */

     //Navigate to the create record page in edit mode
 /*   handleNavigation(){

        this[ NavigationMixin.Navigate ]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0012w00001RObk4AAD',
                objectApiName: 'Account',
                actionName : 'edit'
            }
           
        })
    } */

    //Navigate to the Url
 /*   handleNavigation(){

        this[ NavigationMixin.Navigate ]({
            type:'standard__webPage',
            attributes:{
                url:'https://chat.ohttps://d2w00000rqevfean-dev-ed.develop.lightning.force.com/lightning/o/Ship_to_Bill_to__c/list?filterName=Recentpenai.com/'
            }
           
        })
    } */

   
   

}



