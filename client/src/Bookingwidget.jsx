export default function Bookingwidget(place) {
return (
    <>
    <div className="bg-white shadow p-4 rounded-2xl">
                    <div className="text-2xl text-center">
                    Price: ${place.price} / per night <br/>
                    </div>
                    <div className="border rounded-2xl mt-4">
                    <div className="flex">
                        <div className="  py-3 px-4 border-r" >
                        <p>Check In</p>
                            <input type='date'  />
                        </div>

                        <div className=" py-3 px-4 ">
                        <p>Check Out</p>
                            <input type='date'  />
                        </div>
                    </div>

                        <div className=" py-3 px-4 ">
                        <label>Number of Guests</label>
                            <input type='Number' value={1} />
                        </div>

                        
                    </div>
                    
                    <button className="primary mt-4">Book this place</button>
                    </div>
                    </>
);
}