import axios from "axios";
import { useState } from "react";

export default function PhotoUploader({addedPhotos,onChange}){
    const [photoLink,setPhotoLink]=useState('');
   // const [addedPhotos,setAddedPhotos]=useState([]);


//photoByLink
async function addPhotoByLink(ev){
    ev.preventDefault();
    const {data:filename}=await axios.post('/upload-by-link',{link:photoLink})
    onChange(prev=>{
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

    function removePhoto(filename){
        onChange(prev=>{
            return prev.filter(name=>name!==filename)})
    }
    return(
    <>
    <div className="flex gap-2">
        <input type='text' value={photoLink} onChange={ev=>setPhotoLink(ev.target.value)} placeholder={'add using a link ...jpg'} />
        <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;image</button>
        </div>
        <div className="gap-2 grid grid-cols-4 lg:grid-cols-6">

        {addedPhotos.length>0 && addedPhotos.map(link=>(
    <div className="h-32 flex relative" key={link}>
        <img className="rounded-2xl w-full object-cover " src={'http://localhost:4000/uploads/'+link} alt={link} />
        <button onClick={()=>removePhoto(link)} className="absolute cursor-pointer bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl px-3 py-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

        </button>
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