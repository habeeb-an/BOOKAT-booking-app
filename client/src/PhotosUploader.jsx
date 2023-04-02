import axios from "axios";
import { useState } from "react";

export default function PhotoUploader({addedPhotos,onChange}){
    const [photoLink,setPhotoLink]=useState('');
   // const [addedPhotos,setAddedPhotos]=useState([]);


//photoByLink
async function addPhotoByLink(ev){
    ev.preventDefault();
    const {data:filename}=await axios.post('/upload-by-link',{link:photoLink})
    setAddedPhotos(prev=>{
        return [...prev,filename]
    })
    setPhotoLink('')
    }
    
    function uploadPhoto(ev) {
        const files=ev.target.files;
        const data=new FormData();
        for (let i=0;i<files.length;i++){
            data.append('photos',files[i]);
    
        }
        axios.post('/upload',data,{
            headers:{'Content-type':'multipart/form-data'}
        }).then(responce=>{
            const {data:filenames}=responce;
            onChange(prev =>{
                return [...prev,...filenames];
            });
        }) 
    }
    return(
    <>
    <div className="flex gap-2">
        <input type='text' value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} placeholder={'add using a link ...jpg'} />
        <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;image</button>
        </div>
        <div className="gap-2 grid grid-cols-4 lg:grid-cols-6">

        {addedPhotos.length>0 && addedPhotos.map(link=>(
        <div className="h-32 flex" key={link}>
        <img className="rounded-2xl w-full object-cover " src={'http://localhost:4000/uploads/'+link} alt={link} />
        </div>
        ))}

        <label className="h-32 cursor-pointer items-center flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
        <input type='file' multiple className="hidden" onChange={uploadPhoto}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Upload 
        </label>
    </div>
    </>
    )
}