public class CollectionDemo {
  public void listdemoinsert()
  {
      list<Account>l1=new list<Account>();
      integer n=15;
      for(integer i=1;i<=n;i++)
      {
          Account ac1=new Account();
          ac1.name='Girikon'+i;
          l1.add(ac1);
      }
      insert l1;
  }
    public void listdemoupdate()
    {
        list<Account>l2=new list<Account>();
        list<Account>l3=new list<Account>();
        l2=[select name from Account where name like 'Girikon%'];
        integer j=1;
        for(Account ac2:l2)
        {
            ac2.name='Rohit'+j;
            l3.add(ac2);
            j++;
        }
        update l3;
    }
    public void deleteDemo()
    {
        list<Account>l4=new list<Account>();
        l4=[select name from Account where  name like 'Rohit%'];
        delete l4;
    }
}