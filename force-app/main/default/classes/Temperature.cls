public class Temperature {
    public static decimal Ftoc(decimal fh)
    {
        decimal result = (fh-32) * 5/9;
        return result.setScale(2);
    }

}