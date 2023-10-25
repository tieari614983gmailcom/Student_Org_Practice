public class DatatableWithRowSelectonDemo {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accId, String searches){
        if(searches != null && searches != '')
        {
            String searchKey= '%' + searches + '%';
             List<Contact> conSearchList = [Select Id,Name, Phone, AccountId from Contact 
                                      Where Name Like : searchkey And AccountId =: accId ];
              return conSearchList;
        }
        else{
             List<Contact> conList = [Select Id,Name, Phone, AccountId from Contact Where AccountId =: accId];
            If(!conList.isEmpty()){
                return conList;
            }
            else{
                return null;
            }
        
        }
       
    }
}