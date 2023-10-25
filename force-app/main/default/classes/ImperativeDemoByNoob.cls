public class ImperativeDemoByNoob {

    @AuraEnabled
    public static List<Employee__c> getEmployeeDetails(){
        List<Employee__c> empList = [Select Id, Name from Employee__c];
        return empList;
    }
}