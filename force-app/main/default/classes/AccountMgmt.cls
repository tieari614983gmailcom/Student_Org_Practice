@RestResource(urlMapping = '/AccountmgmtDemo/')
global class AccountMgmt {
    
     @HttpGet
    global static List<Account> getTopAccounts() {
        
        List<Account> accList = [Select Id, Name, Industry, rating, annualrevenue from Account where 
                                 annualrevenue !=null order by annualrevenue desc limit 10];
         return accList;
    }
    
    
   
    global static List<Account> getTopAccountsCriteriaBased() {
         Map<String, String> paramsMap = RestContext.request.params;
         String accIndustry = paramsMap.get('Industry');
        List<Account> accList = [Select Id, Name, Industry, rating, annualrevenue from Account where 
                                 annualrevenue !=null and Industry =:accIndustry
                                 order by annualrevenue desc limit 10];
        return accList;
    }
    
    
    
    
    
    
    //	@HttpGet
    global static AccountWrapper getTopAccount() {
        Map<String, String> paramsMap = RestContext.request.params;
        Set<Id> accIdSet = new Set<Id>();
        String accIndustry = paramsMap.get('Industry');
        List<Account> accList = [Select Id, Industry, rating, annualrevenue from Account
                                 where  annualrevenue !=null
                                 // and Industry =:accIndustry 
                                 order by annualrevenue desc limit 10];
        
        for(Account acc: accList){
            accIdSet.add(acc.Id);
        }
        
        List<Contact> conList =[Select Id, LastName, FirstName, email from Contact Where AccountId IN: accIdset];
        List<Case> casList =[Select Id, priority, subject from Case Where AccountId In: accIdset];
        AccountWrapper accWrap = new AccountWrapper();
        accWrap.accoList = accList;
        accWrap.contList = conList;
        accWrap.caseList = casList;
        return accWrap;
    }
    
    
    global class AccountWrapper {
        global List<Account> accoList;
        global List<Contact> contList;
        global List<Case> caseList;
    }
    
    @HttpPost
    global static String createAccountAndContact(AccountInformation information) {
        Account accRecord = information.accountRecord;
        Contact conRecord = information.contactRecord;
        try{
            insert accRecord;
            conRecord.AccountId= accRecord.Id;
            insert conRecord;
            return  'Account Created Successfully';
        }
        catch(exception ex) {
            return ex.getMessage();
        }
        
    }
    
    global class AccountInformation {
        global Account accountRecord {get;set;}
        global Contact contactRecord {get;set;}
    }
    
    
    //   @HttpPost
    global static String createAccount(String accName, String accRating, String accIndustry) {
        Account acc = new Account();
        acc.Name = accName;
        acc.Rating = accRating;
        acc.Industry = accIndustry;
        
        try{
            insert acc;
            return 'Account created successfully';
        }
        catch(exception ex) {
            return ex.getMessage();
        }
    }
    
    
    
    
    @HttpDelete
    global static String deleteAccount() {
        Map<String, String> paramsMap = RestContext.request.params;
        String accountId = paramsMap.get('accId');
        List<Account> accList = [Select Id From Account Where ID =: accountId];
        If(!accList.isEmpty())
        {
            try{
                Delete accList;
                return 'Account Deleted Successfully';
            }
            catch(exception ex){
                return ex.getMessage();
            }
        }
        
        else{
            return 'Record not found';
        }
        
    }
    
}