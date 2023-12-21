import java.text.Normalizer.Form;
import java.util.*;
import java.util.ArrayList;
public class BusDemo{
    
    public static void main(String[] args) {
        

        ArrayList<Bus> Buses=new ArrayList<>();
        ArrayList<Booking> Bookings=new ArrayList<>();
        
        Buses.add(new Bus(1,true,2,"Chennai","Thanjavur") );
        Buses.add(new Bus(3,true,36,"Coimbatore","Pattukkottai"));
        Buses.add(new Bus(6,false,40,"Theni","Coimbatore"));

        int userOpt=1;
        Scanner s=new Scanner(System.in);

        for(Bus b:Buses){
            b.displayBusInfo();
        }

        

       

        Bus b1=new Bus();

        //String From=b1.getfrom();
         
        while(userOpt==1){
            System.out.println("Enter 1 to continue and 2 to exit");
            userOpt=s.nextInt();
            if(userOpt==1){
            System.out.println("Enter 1 to book and 2 to cancel and 3 to exit");
            int nextOpt=s.nextInt();
            if(nextOpt==1){
               Booking booking=new Booking();
               if(booking.isAvailable(Bookings,Buses)){
                    Bookings.add(booking);
                    System.out.println("Your booking is confirmed");
                    b1.displayName();
                }
            }
            else if(nextOpt==2){
                    //Booking booking1=new Booking();
                    if(Bookings.isEmpty()){
                        System.out.println("Sorry no booking is present");
                    }
                    else{
                        Booking booking1=Bookings.get(0);
                        if(Bookings.contains(booking1)){
                            System.out.println("Booking is cancelled");
                            Bookings.remove(booking1);
                        }
                        else{
                            System.out.println("Booking not present");
                        }
                    }
            }
            else{
                    System.out.println("Enter correct number");
            }
        } 
            
    }
}
}