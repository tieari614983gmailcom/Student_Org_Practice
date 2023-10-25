public class ComboBoxWithDatatableDemo {

    @AuraEnabled
    public static List<Account> getAccounts(){
        List<Account> accList = [Select Id, Name from Account];
        return accList;
    }
    
    @AuraEnabled
    public static List<Contact> getContactDetail(String accId){
        List<Contact> conList = [Select Id, Name, Phone from Contact Where AccountId =: accId];
        return conList;
    }
        
        }