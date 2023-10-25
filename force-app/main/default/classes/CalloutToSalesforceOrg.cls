public class CalloutToSalesforceOrg {

    public static void getAccounts(){
        Http http = new Http();
        Httprequest request = new Httprequest();
        request.setEndpoint('callout:SFDCB/services/apexrest/AbhishNamespace/v1/Accountmgmt/');
        request.setMethod('GET');
        HttpResponse response = http.send(request);

        // To debug the Response and response code
        System.debug('response' + response.getBody());
       System.debug('response status'+response.getStatus());
        
        //To  debug the Response and response code as a table/Map
            	if(response.getStatusCode() == 200)
        {
            List<Object> results = (List<Object>)JSON.deserializeUntyped(response.getBody());
            for(Object obj:results)
            {
              System.debug(obj);
                
                ////To  debug the specific field from Response and response code as a table/Map
                Map<String, String> accountRecord = (Map<String, String>) obj;
                System.debug(accountRecord.get('Name'));
            }
        }else
        {
            System.debug('Error in integration' +response.getBody());
        }
    }
}