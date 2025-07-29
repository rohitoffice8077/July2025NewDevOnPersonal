public class CalloutPractice {
    
    public static string getRandomUserDetails()
    {
        Http http =new Http();
        HttpRequest request = new HttpRequest();
        request.SetEndpoint('https://randomuser.me/api/');
        request.SetMethod('GET');
        string username='test@gmail.com';
        string password='12345';
        Blob headervalue= blob.valueof(username+':'+password);
        string authorizationHeader = 'BASIC ' + EncodingUtil.base64encode(headervalue);
        request.setHeader('Authorization',authorizationHeader);
        Httpresponse response = http.send(request);
         //if(response.getStatusCode==200)
         //{
             system.debug('##USERDETAILS##'+response.getbody());
         //}
        return 'Success';
    }

}