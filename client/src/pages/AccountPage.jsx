import axios from "axios";
import { useContext, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext"
import PlacesPage from "./PlacesPages";


export default function AccountPage() {
const{ready,user,setUser}=useContext(UserContext);
const[redirect,setRedirect]=useState(null);

let {subpage}= useParams();
if(subpage=== undefined) { 
    subpage='profile'
}

async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
}


if(!ready){
    return 'Loading...'
}

if(ready&& !user && !redirect){
    return <Navigate to={'/login'}/>

}
    function linkClasses(type=null) {
        let classes='py-2 px-6'
        if(type===subpage || (subpage===undefined && type==='profile')){
            classes +=' bg-primary text-white rounded-full'
        }
        return classes;
    }
if(redirect) {
    return <Navigate to={redirect}/>
}

    return (
    <div>
        <nav className="w-full flex mt-8 gap-4 justify-center mb-8">
        <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
        <Link className={linkClasses('places')} to={'/account/places'}>My accomedations</Link>
    </nav>
    {subpage==='profile'&& (
        <div className="text-center max-w-lg mx-auto ">
            Logged in as {user.name} ({user.email})<br />
            <button className="primary max-w-sm mt-2" onClick={logout}>Logout</button>
        </div>
    )}


{subpage===places&& (
    <div>
        <PlacesPage/>
    </div>
)}

    </div>)
}