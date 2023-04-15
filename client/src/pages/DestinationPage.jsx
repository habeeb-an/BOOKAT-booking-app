import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AddressLink from "../AddressLink";
import Bookingwidget from "../Bookingwidget";
import PlaceGallery from "../PlaceGallery";

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
        //  <img className="cursor-pointer" onClick={() => setShowAllPhotos(true)} src={'http://localhost:4000/uploads/' + place.photos[0]} alt="" />

    return (
        <div className="lg:mx-64 mt-4 pt-8  -mx-8 px-8">
            <h1 className="text-3xl">{place.title}</h1>
           <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place} />
            

    <div className="mt-8 mb-4 gap-8 grid grid-cols-1  md:grid-cols-[2fr_1fr]">
            <div className="my-4">
                <div className="my-4">
                <h2 className="mb-2 font-semibold text-2xl">Description</h2>
                    {place.description}
                </div>
                Check-in:{place.checkIn} <br/>
                Check-out:{place.checkOut} <br/>
                Max number of guests:{place.guests} <br/>
               
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