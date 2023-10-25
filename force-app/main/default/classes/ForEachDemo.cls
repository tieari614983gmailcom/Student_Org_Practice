public class ForEachDemo {

    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getEmployeeList(){
        List<Employee__c> empList = [Select Name, Id, Salary__c from Employee__c];
        return empList;
    }
}