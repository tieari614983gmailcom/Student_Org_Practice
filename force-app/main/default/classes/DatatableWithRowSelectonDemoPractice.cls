public class DatatableWithRowSelectonDemoPractice {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(String accId, string searchKey) {
        if(searchKey != null && searchKey !='')
        {
            String searchValue = '%' + searchKey + '%';
            List<Opportunity> oppSearchList = [Select Id, Name, CloseDate, AccountId from Opportunity Where AccountId =: accId
                                           and Name LIKe : searchValue];
            return oppSearchList;
        }
        else {
            List<Opportunity> oppList = [Select Id, Name, CloseDate, AccountId from Opportunity Where AccountId =: accId];
            if(!opplist.isEmpty())
            {
                return oppList; 
            }
            else{
                return null;
            }
        }
    }
}