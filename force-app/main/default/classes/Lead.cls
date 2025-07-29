public class Lead {
    double a,b;
 public Lead(double x,double y)
  {
      a=x;
      b=y;
  }
    public void add()
    {
        double c;
        c=a+b;
        system.debug('Addition of two number = '+c);
    }
    public void subtract()
    {
        double c;
        c=a-b;
        system.debug('Subtraction of two number = '+c);
    }
    public void multiply()
    {
        double c;
        c=a*b;
        system.debug('Multipication of two number = '+c);
    }
    public void division()
    {
        double c;
        c=a/b;
        system.debug('Division of two number = '+c);
    }
}