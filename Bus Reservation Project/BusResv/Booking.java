import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
public class Booking {
    String passengername;
    int busno;
    Date date;

    Random random=new Random();

    Booking(){

        Scanner s=new Scanner(System.in);
        System.out.println("Enter name of passenger");
        passengername=s.next();
        System.out.println("Enter busno");
        busno=s.nextInt();
        System.out.println("Enter the date dd-mm-yyyy");
        String dateInput=s.next();
        SimpleDateFormat dateFormat=new SimpleDateFormat("dd-MM-yyyy");
        int BookingNumber=random.nextInt(1000);
        System.out.println(BookingNumber);
        
        try {
            date=dateFormat.parse(dateInput);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        

    }


   

    public boolean isAvailable(ArrayList<Booking> bookings, ArrayList<Bus> buses) {
        int capacity=0;
        for(Bus b:buses){
            if(b.getbusno()==busno){
                capacity=b.getCapacity();
            }
        }

        int booked=0;
        for(Booking c:bookings){
            if(c.busno==busno && c.date.equals(date)){
                booked++;
            }
        }

        return booked<capacity?true:false;
    }
}
