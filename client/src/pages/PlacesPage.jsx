import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action}= useParams();

   
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
                        <h2 className="text-lg mt-4">Titles</h2>
                        <p className="text-gray-500 text-sm">Should be catchy</p>
                        <input type='text' placeholder="Title, eg:-Skyvalley apartment"/>
                        <h2 className="text-lg mt-4">Address</h2>
                        <input type='text' placeholder="Address"/>
                        <h2 className="text-lg mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">more means better</p>

                        <div className="flex gap-2">
                        <input type='text' placeholder={'add using a link ...jpg'} />
                        <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;image</button>
                        </div>
                        
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Upload
                        </button>
                        </div>
                        <div>
                        <h2 className="text-lg mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">explain features and things</p>
                        <textarea />

                        </div>
                        <h2 className="text-lg mt-4">Perks</h2>
                        <p className="text-gray-500 text-sm">Select the perks you are providing</p>
                        <div>
                            <label>
                            <input type='checkbox'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

                            <span>Wifi</span> 
                            </label>
                        </div>

                        <div>
                            <label>
                            <input type='checkbox'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                            <span>parking</span> 
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type='checkbox'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

                            <span>Dedicated workspace</span> 
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type='checkbox'/><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                            <span>Shared gym in building</span> 
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type='checkbox'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>

                            <span>Luggage drop-off allowed</span> 
                            </label>
                        </div>
                        
                    </form>
                </div>
            )}
        </div>
        
    )
}