public class ForEachDemoPractice {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(){
        List<Account> accList =[Select ID, Name from Account Limit 10];
        return accList;
    }
}