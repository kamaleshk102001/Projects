import java.util.*;
public class Bus {
    
    private int busno;
    private int capacity;
    private boolean ac;   
    private String From;
    private String To;     //include get and set methods

    Random r=new Random();

    private String[]names={"Shahil","Raj","Manoj","Abdul","Ravi"};


     Bus(int i, boolean b, int j,String s,String d) {
        this.busno=i;
        this.capacity=j;
        this.ac=b;
        this.From=s;
        this.To=d;
    }

     Bus() {
        this.busno=0;
        this.capacity=0;
        this.ac=false;
    }


   public int getCapacity(){            //accessor
        return capacity;
    }


    public void setCapacity(int cap){       //mutator
        capacity=cap;
    }

    public int getbusno(){
        return busno;
    }

    public boolean getac(){
        return ac;
    }

    public void setac(boolean k){
        ac=k;
    }

    public String getfrom(){
        return From;
    }

    public void setfrom(String s){
        From=s;
    }

   /* public String getto(){
        return To;
    }

    public void setto(String d){
        To=d;
    }*/

    public void displayBusInfo(){
        System.out.println("Bus No:" + busno+ "Ac: "+ac+"Capacity: "+capacity);
    }

    public void displayName(){
        System.out.println(names[r.nextInt(names.length)]);
    }
}
