import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import Perks from "../Perks";
import PhotoUploader from "../PhotosUploader";

export default function PlacesFormPage(){
    const {id}=useParams();
    console.log({id})
    const [title,setTitle]=useState('');
    const [address,setAddress]=useState('');
    const [addedPhotos,setAddedPhotos]=useState([]);
    const [description,setDescription]=useState('');
    const [perks,setPerks]=useState([]);
    const [extraInfo,setExtraInfo]=useState('');
    const [checkIn,setCheckIn]=useState('');
    const [checkOut,setCheckOut]=useState('');
    const [maxGuests,setMaxGuests]=useState(1);
    const [redirect,setRedirect]=useState(false);

    useEffect(()=>{
        if(!id){
            return;
        } 
    axios.get('/places/'+id).then(res=>{
       const {data}=res;
         setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);

    })
    },[id]);
    

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

    async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title, address, addedPhotos,
      description, perks, extraInfo,
      checkIn, checkOut, maxGuests,}
    if (id) {
      // update
      await axios.put('/places', {
        id, ...placeData
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/places', placeData);
      setRedirect(true);
    }

  }

if(redirect){
    return <Navigate to={'/account/places'}/>
} 

    return(
        <>
        <div>
            <AccountNav/>
    <form onSubmit={savePlace}>
        {preInput('Titles','Should be catchy')}
        <input type='text' value={title} onChange={ev=>setTitle(ev.target.value)} placeholder="Title, eg:-Skyvalley apartment"/>
        {preInput('Address','enter the address')}
        <input type='text' value={address} onChange={ev=>setAddress(ev.target.value)} placeholder="Address"/>
        {preInput('Photos','more means better')}

        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
        <div>
        {preInput('Description','explain features and things')}

        
        <textarea className="w-full h-40 p-2" value={description} onChange={ev=>setDescription(ev.target.value)}/>

        </div>
        
        {preInput('Perks','Select the perks you are providing')}
        <div className="gap-2 grid grid-cols-2  md:grid-cols-3 mb-11">
    <       Perks selected={perks} onChange={setPerks}/>
    </div>
        {preInput('Extra Info','House rules,etc')}
            
        
        <textarea className="w-full h-40 p-2" value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)}/>
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
        </>
    )
}