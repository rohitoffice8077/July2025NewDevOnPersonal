trigger SendEmail on Opportunity (after Insert,after update)

 {

 

                if(trigger.new[0].StageName == 'closed Won')

                {

                                user user1=[select id ,name,email from user where id=:trigger.new[0].ownerid];

 

        

  

        if (user1.email!=null)

         {

             String userName = UserInfo.getUserName();

            User activeUser = [Select Email From User where Username = : userName limit 1];

            String userEmail = activeUser.Email;

 

            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();                   

 

            String[] toAddresses = new String[] {user1.email,userEmail};

 

            mail.setToAddresses(toAddresses);

 

            mail.setSubject('Automated email: Contact created');

 

            String body = 'The user ' + userName + ' Create this Contact '+user1.name;

 

            body += '<b>\n Hello: '+user1.name+'</b>';

 

            body += '\n welcome in salesforce ';

 

            mail.setHtmlBody(body);

          

                             

 

            try {

 

                Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

 

            } catch(Exception ex) {       

 

            }

 

        }     

      

    }

 

    }