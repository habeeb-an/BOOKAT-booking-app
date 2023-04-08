
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderFile from "../HeaderFile";

export default function IndexPage() {
    const [places,setPlaces]=useState([])
    useEffect(()=>{
        axios.get('/places').then(response=>{
            response.data
            setPlaces(response.data)
        })
    },[])
    return (
    <div>
        {places.length>0 && places.map(place => (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {place.photos?.[0] && (
                        <div className="bg-grey-500 ">
                    <img src={'http://localhost:4000/uploads/'+place.photos[0]}  alt='' />
                    </div>
                )}
                {place.title}
            </div>
        )
            )}
            
    </div>
      );
}