public class WireDemoByNoob {

    @AuraEnabled(cacheable=True)
    public static List<Employee__c> getEmployeeDetails(){
        List<Employee__c> empList = [Select Id, Name,Phone__c from Employee__c];
        return empList;
    }
}