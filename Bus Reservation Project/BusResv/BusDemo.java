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

        
         
        while(userOpt==1){
            System.out.println("Enter 1 to book and 2 to exit");
            userOpt=s.nextInt();
            if(userOpt==1){
               Booking booking=new Booking();
               if(booking.isAvailable(Bookings,Buses)){
                    Bookings.add(booking);
                    System.out.println("Your"+b1.getfrom()+"booking is confirmed");
                    b1.displayName();
                }
                else{
                    System.out.println("Sorry.Bus is full.Try another bus or date");
                }
            }    
        }
    }
}