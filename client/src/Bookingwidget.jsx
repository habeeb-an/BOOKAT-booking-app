import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Bookingwidget({place}) {
    const [checkIn,setCheckIn]=useState('')
    const [checkOut,setCheckOut]=useState('')
    const [guests,setGuests]=useState(1);
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [redirect,setRedirect]=useState('');

    const {user} =useContext(UserContext);
    useEffect(()=>{
        if(user){
            setName(user.name);
        }
    })


    let numberOfNights = 0;
    if (checkIn && checkOut) {
      numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    async function bookThisPlace(){

       
        
        const response=await axios.post('/bookings',{
            place:place._id,
            checkIn,checkOut,
            guests,name,mobile,
            price:numberOfNights * place.price,
        });
        const bookingId=response.data._id;
        console.log(bookingId);
        setRedirect(`/account/bookings/${bookingId}`);

    }
    if(redirect){
    return <Navigate to={redirect} />
    }

  
return (

    <div className="bg-white shadow p-4 rounded-2xl">
                    <div className="text-2xl text-center">
                    Price: ${place.price}/Night <br/>
                    </div>
                    <div className="border rounded-2xl mt-4">
                    <div className="flex">
                        <div className="  py-3 px-4 border-r" >
                        <p>Check In</p>
                            <input type='date' value={checkIn} onChange={ev=>setCheckIn(ev.target.value)} />
                        </div>

                        <div className=" py-3 px-4 ">
                        <p>Check Out</p>
                            <input type='date' value={checkOut} onChange={ev=>setCheckOut(ev.target.value)} />
                        </div>
                    </div>

                        <div className=" py-3 px-4 ">
                        <label>Number of Guests</label>
                            <input type='Number' value={guests} onChange={ev=>setGuests(ev.target.value)} />
                        </div>

                        
                    </div>
                    {numberOfNights > 0 && (
                            <div className="py-3 px-4">
                                <label>Your full name </label>
                                <input type='text' value={name} onChange={ev=>setName(ev.target.value)} />
                                <label>Your mobile number</label>
                                <input type='tel' value={mobile} onChange={ev=>setMobile(ev.target.value)} />

                            </div>
                        
                    )}

                    
                    <button onClick={bookThisPlace} className="primary mt-4">
                    Book this place
                    { numberOfNights>0 && (
                    <span className="font-semibold"> ${numberOfNights * place.price}</span>
                    )}
                    </button>
                    </div>
                  
);
}