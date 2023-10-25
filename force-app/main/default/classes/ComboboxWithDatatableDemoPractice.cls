public class ComboboxWithDatatableDemoPractice {

    @AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accList = [Select Id, Name from Account];
        return accList;
    }
    
    @AuraEnabled
    public static List<Opportunity> getOppDetails(String accId) {
        List<Opportunity> oppList = [Select Id, Name , CloseDate from Opportunity Where AccountId =: accid];
        return oppList;
    }
}