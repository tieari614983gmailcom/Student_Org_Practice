import { LightningElement,track ,wire} from 'lwc';
import getEmployeeList from '@salesforce/apex/ForEachDemo.getEmployeeList';

export default class ForEachDemo extends LightningElement {

  
   @wire(getEmployeeList)
   Employees;

   EmployeeError = "Error in showing this Employee Record";
}