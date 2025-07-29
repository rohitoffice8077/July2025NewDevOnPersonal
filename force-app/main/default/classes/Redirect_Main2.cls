public class Redirect_Main2 {
public List<Contact> cont { get; set; }
public PageReference Redirect_Main(){
cont = [select Name,Phone,Email from Contact];
return null;
}

}