public class DatatableWithRowActionDemo {

    @AuraEnabled
    public static List<Contact> getRelatedContacts(String accId) {
        List<Contact> conList = [Select Id, Name, Phone, AccountId from Contact Where AccountId =: accId];
        
        if(!conList.isEmpty())
        {
            return conList;
        }
        else {
           return null; 
        }
        
    }
}