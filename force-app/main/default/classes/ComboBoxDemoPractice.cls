public class ComboBoxDemoPractice {

    @AuraEnabled
    public static List<Contact> getContacts(){
        List<Contact> conList =[Select Id, Name from Contact];
        return conList;
    }
}