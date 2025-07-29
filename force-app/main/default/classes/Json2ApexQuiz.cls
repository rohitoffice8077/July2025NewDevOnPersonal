public class Json2ApexQuiz {
    public class Q1 {
		public String question;
		public List<String> options;
		public String answer;
	}

	public class Maths {
		public Q1 q1;
		public Q1 q2;
	}

	public class Sport {
		public Q1 q1;
	}

	public class Quiz {
		public Sport sport;
		public Maths maths;
	}

	public Quiz quiz;

	
	public static void parse(String json) {
		
	}


}