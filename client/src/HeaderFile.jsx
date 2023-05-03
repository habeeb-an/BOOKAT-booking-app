import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
export default function HeaderFile() {
  const {user}=useContext(UserContext)
    return (
      <header className=' flex justify-between'>
          <Link to={'/'} className='flex flex-col items-center justify-center '>
  <div className="flex items-center justify-center rounded-xl shadow shadow-gray-200 p-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-11 md:h-11 h-8 w-8 -rotate-90">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
    <div className="ml-2">
      <h1 className="font-bold md:text-xl text-lg">bookat</h1>
      <p className="md:text-sm hidden md:block">Booking Made Simple..!</p>
    </div>
  </div>
</Link>

          <div className='hidden sm:flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 my-4'>
            <div>Anywhere</div>
            <div className="flex border boder-l h-6 border-gray-300"></div>
            <div>Any week</div>
            <div className="border boder-l h-6 border-gray-300"></div>
            <div>Add guests</div>
            <button className='bg-primary text-white p-2 rounded-full '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
  </button>
          </div>
          <Link to={user ? '/account' : '/login'} className="md:flex flex-col items-center gap-2 border border-gray-300 rounded-lg py-1 px-2">
  <div className="inline-flex items-center gap-2 sm:border-b border-gray-300 pb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <div className="hidden sm:flex bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-6 relative top-1">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  <div className="hidden sm:block text-center">
    {!!user && (
      <div className="">
        {user.name}
      </div>
    )}
  </div>
</Link>

        </header>
    )
}