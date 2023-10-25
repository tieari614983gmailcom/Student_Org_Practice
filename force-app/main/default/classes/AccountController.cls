public class AccountController {

    @AuraEnabled
    public static List<Account> getAccounts(){
        return [Select Id, Name from Account Limit 10];
    }
}