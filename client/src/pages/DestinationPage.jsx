import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Bookingwidget from "../Bookingwidget";

export default function DestinationPage() {
    const {id}=useParams();
    const [place,setPlace]=useState(null);
    const [showAllPhotos,setShowAllPhotos]=useState(false);
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then(response=>{
            setPlace(response.data);
        });
    },[id])
    if(!place){
        return '';
    }
    if (showAllPhotos){
        return (
        
        <div className="absolute  inset-0 bg-black text-white  min-h-screen">
            <div className="p-8 bg-black grid gap-4">
            <div>
                <button onClick={()=>setShowAllPhotos(false)} className="top-2 fixed flex bg-white text-black p-2 rounded-2xl  cursor-pointer hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                </button>
            </div>

            {place?.photos?.length>0 && place.photos.map(photo=>(
                <div>
                    <img  src={'http://localhost:4000/uploads/'+photo} alt=""/>
                </div>
            ))}
            </div>
        </div>

        )
    }
        //  <img className="cursor-pointer" onClick={() => setShowAllPhotos(true)} src={'http://localhost:4000/uploads/' + place.photos[0]} alt="" />

    return (
        <div className="mt-4 pt-8 bg-gray-100 -mx-8 px-8">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="flex gap-1 my-3 block font-semibold underline" target='_blank' href={'https://www.google.com/maps/?q='+place.address}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

            {place.address}</a>
            <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div >
          {place.photos?.[0] && (
            <div>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/uploads/' + place.photos[0]} alt=""/>
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/uploads/' + place.photos[1]} alt=""/>
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
                <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={'http://localhost:4000/uploads/' + place.photos[2]} alt=""/>
            )}
          </div>
        </div>
      </div>

                    <button onClick={()=>setShowAllPhotos(true)} className="flex gap-1 bg-white absolute bottom-5 right-5 px-4 py-2 rounded-2xl shadow shadow-md shadow-gray-500 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
</svg>

                    Show more</button>


                </div>
            

    <div className="mt-8 mb-4 gap-8 grid grid-cols-1  md:grid-cols-[2fr_1fr]">
            <div className="my-4">
                <div className="my-4">
                <h2 className="mb-2 font-semibold text-2xl">Description</h2>
                    {place.description}
                </div>
                Check-in:{place.checkIn} <br/>
                Check-out:{place.checkOut} <br/>
                Max number of guests:{place.maxGuests} <br/>
               
            </div>
            <div>

            <Bookingwidget place={place}/>
            </div>

                      
                        </div>
                            <div className="bg-white -mx-8 px-8 py-8 border-t">
                                
                            
                        <div>
                            <h2 className="font-semibold text-2xl">Extra info</h2>
                        </div>
                <div className="mb-4 mt-2 text-sm text-gray-500 leading-5">
                {place.extraInfo}
                
            </div>

            </div>
            </div>
            
        

            
    )
}