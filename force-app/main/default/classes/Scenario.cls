public class Scenario
                            {
                                public static void Scenario1()
                                {
                                    List<Account> accList = [Select Id,NAme, (Select Id, Name from Contacts) from
                                                            Account Where phone != null];
                                    for(Account acc: acclist){
                                      System.debug(acc.name+ ' has '+acc.Contacts.size()+ ' Contacts Related');
                                        
                                    }
                                    
                                    //Or (but we can't count no. of contacts per account here)
                                    
                                    List<Contact> conList = [Select Id,NAme,Account.Name, Account.id from
                                                            Contact Where Account.phone != null];
                                    for(Contact con: conList){
                                      System.debug(con.Account.name+ ' has  '+con.Name+' Contacts Related');
                                        
                                    }
                                }
                                
                                
                                
                                
                                public static void Scenario2()
                                {
                                    List<Account> accList = [Select Id,NAme, (Select Id, Name ,Amount from Opportunities)
                                                             from Account Where phone != null];
                                    for(Account acc: acclist){
                                     // System.debug(acc.name+ ' has '+acc.Opportunities.amt+ ' Opportunities Related');
                                        Decimal d = 0;
                                        for(Opportunity opp : acc.Opportunities)
                                        {
                                            d= d+opp.Amount;
                                            System.debug(acc.name+ ' has '+ d + ' Worth Opportunities ');
                                        }
                                    }
                                    
                                }
                                    
                                    
                                    public static void scenario3()
                                    {
                                        List<Opportunity> oppList = [Select Name, StageName,CreatedDate, Description From 
                                                                     Opportunity Where CreatedDate = This_Year];
                                        for(Opportunity opp : oppList)
                                        {
                                            if(opp.StageName == 'Closed Won')
                                            {
                                               opp.Description = 'Opportunity is Closed Won'; 
                                            }
                                            else if(opp.StageName == 'Closed Lost')
                                            {
                                               opp.Description = 'Opportunity is Closed Lost'; 
                                            }
                                            else
                                            {
                                                opp.Description = 'Opportunity is open';
                                            }
                                            
                                            
                                        }
                                        update oppList;
                                        for(Opportunity opp : oppList)
                                        {
                                        System.debug(Opp.Description);
                                        }
                                    }
                                    
                                    
                                public static void Scenario4()
                                {
                                    List<Account> accList = [Select Id ,NAme, Total_Contacts__c,(Select Id, Name from Contacts)
                                                             from  Account];
                                    for(Account acc: acclist){
                                        if(acc.Total_Contacts__c == null) 
                                        {
                                            acc.Total_Contacts__c = 0;
                                        }else{
                                      
                                       acc.Total_Contacts__c =  acc.Contacts.size();
                                        }
                                    } 
                                    update accList;
                                    
                            }
                                
                                
                                
                              
                                
                                public static void scenario5(){
                                    
                                    List<Contact> conList = [Select Id,MobilePhone, Account.Phone FROM Contact
                                                            Where CreatedDate = THIS_YEAR];
                                    for(Contact con: conList){
                                        if(con.MobilePhone == null)
                                        {
                                            con.MobilePhone = con.Account.Phone;
                                        }
                                    }
                                    update conList;
                                }
                                
                                
                                
                                public static void scenario6()
                                {
                                    List<Account> accList = [Select Name, Total_Salary__c ,(Select name, Salary__c
                                                             From Employees__r) from Account];
                                    for(Account acc:accList)
                                    {
                                        Decimal i = 0;
                                        for(Employee__c Emp : acc.Employees__r)
                                        {
                                           i = i + emp.Salary__c;
                                              
                                        }
                                        acc.Total_Salary__c = i ;
                                       
                                        
                                    }
                                    
                                    update acclist;
                                }
                                
                                
                                
                                
                                
                                
                                
                                public static void scenario7(){
                                    List<Account> accList = [Select Name, Phone ,(Select name, Phone__c
                                                             From Employees__r) from Account];
                                    for(Account acc:accList)
                                    {
                                        Decimal i = 0;
                                        for(Employee__c Emp : acc.Employees__r)
                                        {
                                          if(emp.Phone__c == null)
                                          {
                                              emp.Phone__c = acc.Phone;
                                          }
                                            update emp;   
                                        }
                                        
                                       
                                        
                                    }
                                    
                                    //or
                                    //
                                      List<Employee__c> empList = [Select Name ,Employee_Account__r.Phone, Phone__c  From Employee__c Where 
                                       								CreatedDate = THIS_YEAR ];
                                      for(Employee__c emp : empList)
                                        {                            
                                    if(emp.Phone__c == null)
                                    {
                                        
                                        emp.Phone__c = emp.Employee_Account__r.Phone;
                                        }
                                    
                                   
                                }
                                    update empList;
                                }
                                    
                                   
                                
                                    
                                    
                                
                               public static void scenario8()
                               {
                                   List<Contact> conlist = [Select name, MobilePhone, Employee_del__r.Phone__c From Contact ];
                                   
                                   for( Contact con :conList)
                                   {
									 if(Con.MobilePhone == null)
                                       {
                                           con.MobilePhone = con.Employee_del__r.Phone__c;
                                       }
                                       
                                           
                                   }
                                   update conList;
                                  
                                
                                
                                
                                
                            }
                            }