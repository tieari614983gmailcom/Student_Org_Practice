public class WireDemoPracticeByNoob {

    @AuraEnabled(cacheable=True)
    public static List<Contact> getContactList(){
        List<Contact> conList = [Select Id, Name, AccountId from Contact Where AccountId != null Limit 10];
        Return conList;
    }
}