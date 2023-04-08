import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
        
        <div className="absolute  inset-0 bg-white  min-h-screen">
            <div className="p-8 grid gap-4">
            <div>
                <button onClick={()=>setShowAllPhotos(false)} className="top-2 fixed flex bg-white p-2 rounded-2xl  cursor-pointer hover:bg-gray-100">
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
    return (
        <div className="mt-4 py-8 bg-gray-100 -mx-8 px-8">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="my-2 block font-semibold underline" target='_blank' href={'https://www.google.com/maps/?q='+place.address}>{place.address}</a>
            <div className="relative">
                    <div className="grid gap-2 grid-cols-[2fr_1fr_1fr]">
                        <div>
                            {place.photos?.[0] &&(
                        <div>
                        <img className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos[0]} alt=""/>

                        </div>

                            )}
                        </div>
                        <div className="grid gap-y-2">
                        {place.photos?.[1] &&(
                                <img  className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos[1]} alt=""/>
                            )}
                            {place.photos?.[2] &&(
                                <img className="aspect-square object-cover"  src={"http://localhost:4000/uploads/"+place.photos[2]} alt=""/>
                            )}

                        </div>
                        <div className="grid">
                            {place.photos?.[3] &&(
                                <img className="aspect-square object-cover"  src={"http://localhost:4000/uploads/"+place.photos[3]} alt=""/>
                            )}
                            <div className="overflow-hidden">    
                            {place.photos?.[4] &&(
                                <img className="aspect-square object-cover relative top-2"  src={"http://localhost:4000/uploads/"+place.photos[4]} alt=""/>
                            )}
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>setShowAllPhotos(true)} className="flex gap-1 bg-white absolute bottom-0 right-0 px-4 py-2 rounded-2xl shadow shadow-md shadow-gray-500 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
</svg>

                    Show more</button>

                </div>
            </div>

            
    )
}