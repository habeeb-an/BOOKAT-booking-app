import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";

export default function Bookingpage() {
    const {id}=useParams();
    const [booking,setBooking]=useState(null);
    useEffect(()=> {
        if(id){
        axios.get('/bookings').then(res=>{
          const foundBooking=  res.data.find(({_id})=>_id===id)
          if(foundBooking){
              setBooking(foundBooking);
          }
        })
        }
    },[id]);

    if(!booking){
        return <div>Whoops... no booking</div>
    }

    return (
        <div className="my-8" >
            <h1 className="text-3xl">{booking.place.title}</h1>
            <AddressLink >{booking.place.address}</AddressLink>

            <div className="bg-gray-200 p-6 mb-6 rounded-2xl justify-between flex items-center">
            <div>
            <h2 className="text-2xl mb-4">Your booking info:</h2>
            <div className="flex gap-2 items-center border-t  mt-2 py-2 text-gray-600">
                <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                {format(new Date(booking.checkIn),'dd MMM yyyy')}
                </div>
                
                &rarr;

                <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                {format(new Date(booking.checkOut),'dd MMM yyyy')}
                </div>
                </div>
            
                <div className="flex  gap-1 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

                {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} Nights 
            
                
                </div>
             </div>
                <div className="bg-primary p-4 rounded-3xl text-white mt-4"> <span>Total price: </span> 
                <div className="text-3xl">${booking.price}</div>
                </div>
            </div>
            
            <PlaceGallery place={booking.place}/>
        </div>
    )
};