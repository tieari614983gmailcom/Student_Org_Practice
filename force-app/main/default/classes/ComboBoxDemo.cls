public class ComboBoxDemo {

    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accList = [Select Id, Name from Account];
        return accList;
    }
}