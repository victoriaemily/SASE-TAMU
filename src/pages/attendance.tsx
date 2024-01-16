import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

interface AttendanceApiResponse {
  attendedEvents: string[];
}

const check_uin = (uin: string) => {
  const uin_regex = new RegExp("^[0-9]{9}$")
  return uin_regex.test(uin)
}

const Attendance = () => {
  const [uin, setUin] = useState('');
  const [attendedEvents, setAttendedEvents] = useState<string[]>([]);
  const [displayUIN, setDisplayUIN] = useState('');
  const [isSearching, setIsSearching] = useState(false); // Track if a search is in progress

  const handleButtonClick = () => {
    void fetchAttendance();
  };

  const fetchAttendance = async () => {
    if (!check_uin(uin)) {
      alert("Invalid UIN. Please enter a valid 9-digit UIN.");
      return;
    }
  
    setIsSearching(true);
    setAttendedEvents([]);
    setDisplayUIN(uin);
  
    try {
      const response = await fetch(`/api/attendance?uin=${uin}`);
      if (response.ok) {
        // Type cast the response to the expected structure
        const jsonResponse = await response.json() as AttendanceApiResponse;
        if ('attendedEvents' in jsonResponse) {
          setAttendedEvents(jsonResponse.attendedEvents);
        } else {
          console.error("Invalid response structure:", jsonResponse);
        }
      } else {
        console.error("Failed to fetch attendance data");
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    } finally {
      setIsSearching(false);
    }
  };
  

  return (
    <div>
      <div className="text-black bg-white">
        <div className="fixed w-full z-40">
          <NavBar />
        </div>

        <div className="bg-white flex flex-col items-center justify-center pt-20 min-h-screen">
          <div className="w-5/6 md:w-1/2 p-10 bg-white shadow-lg rounded-xl">
            <h1 className="font-bebas text-5xl">Check Your Attendance</h1>
            <p className="mb-2">Attendance leads to SASE points which can then be redeemed for raffle tickets for prizes at our annual banquet!</p>
            <input 
              type="text" 
              placeholder='Your UIN' 
              value={uin} 
              onChange={e => setUin(e.currentTarget.value)} 
              className='w-full mb-4 p-2 bg-white border border-blue-500 rounded'
            />
            <button 
              onClick={handleButtonClick}
              className='w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded'
            >
              Check Attendance 
            </button>
          </div>
          {displayUIN && <div className="w-5/6 md:w-1/2 p-10 bg-white shadow-lg rounded-xl mt-5">
            {displayUIN && (
              <>
                <h2 className="font-bebas text-3xl mb-3">(Spring '24) Attendance for UIN: {displayUIN}</h2>
                {attendedEvents.length > 0 ? (
                  <ul>
                    {attendedEvents.map(event => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                ) : (displayUIN && <p>No events attended yet.</p>)}
              </>
            )}
            {!displayUIN && isSearching && <p>No attendance records found.</p>}
          </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attendance;
