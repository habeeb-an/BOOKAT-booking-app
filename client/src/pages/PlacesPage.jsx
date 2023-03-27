import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";

export default function PlacesPage() {
    const {action}= useParams();
    const [title,setTitle]=useState('');
    const [address,setAddress]=useState('');
    const [addedPhotos,setAddedPhotos]=useState([]);
    const [photoLink,setPhotoLink]=useState('');
    const [description,setDescription]=useState('');
    const [perks,setPerks]=useState([]);
    const [extraInfo,setExtraInfo]=useState('');
    const [checkIn,setCheckIn]=useState('');
    const [checkOut,setCheckOut]=useState('');
    const [maxGuests,setMaxGuests]=useState(1);

    function inputHeader(text){
        return (
           <h2 className="text-lg mt-4">{text}</h2>
        );
    }
    function inputDescription(text){
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }

    function preInput(header,description){
        return (
            <div>
                {inputHeader(header)}
                {inputDescription(description)}
            </div>
        )
    }
//photo
function addPhotoByLink(){
    
}
   
    return (
        <div>
            {action!=='new' && (
            <div className="text-center ">
                <Link className="inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                    Add new place</Link>
            </div>
            )}

            {action==='new' &&(
                <div>
                    <form className="px-1">
                        {preInput('Titles','Should be catchy')}
                        <input type='text' value={title} onChange={ev=>setTitle(ev.target.value)} placeholder="Title, eg:-Skyvalley apartment"/>
                        {preInput('Address','')}
                        <input type='text' value={address} onChange={ev=>setAddress(ev.target.address)} placeholder="Address"/>
                        {preInput('Photos','more means better')}
                        <div className="flex gap-2">
                        <input type='text' value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} placeholder={'add using a link ...jpg'} />
                        <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;image</button>
                        </div>
                        
                        <div className="grid grid-cols-3 lg:grid-cols-6">
                        <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Upload
                        </button>
                        </div>
                        <div>
                        {preInput('Description','explain features and things')}

                       
                        <textarea value={description} onChange={ev=>setDescription(ev.target.value)}/>

                        </div>
                        {preInput('Perks','Select the perks you are providing')}
                    <Perks selected={perks} onChange={setPerks}/>
                        {preInput('Extra Info','House rules,etc')}
                            
                        
                        <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)}/>
                        {preInput('Check in&Check out times,max guests','add also time window details about routine')}

    
                        <div className="grid sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 -mb-1 ">Check in</h3>
                                <input type='text'  value={checkIn} onChange={ev=>setCheckIn(ev.target.value)} placeholder="14:00" />
                                </div>
                            <div>
                            <h3 className="mt-2 -mb-1 ">Check out</h3>

                                <input type='text'  value={checkOut} onChange={ev=>setCheckOut(ev.target.value)} placeholder="20:00" />
                                </div>
                            <div>
                            <h3 className="mt-2 -mb-1 ">Max guests</h3>

                                <input type='Number'  value={maxGuests} onChange={ev=>setMaxGuests(ev.target.value)} placeholder="4" />
                                </div>
                        </div>
                        <div>
                            <button className="primary my-6">Save

                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
        
    )
}