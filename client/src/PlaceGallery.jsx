import { useState } from "react";

export default function PlaceGallery({place}) {
    const [showAllPhotos,setShowAllPhotos]=useState(false);


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


    return (
        <div>
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
            
        </div>
    )
}