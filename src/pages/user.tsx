import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEventFetch } from '~/hooks/useEventFetch'
import Image from 'next/image';

const user = () => {
  const current_event = "GBM1"

  const searchParams = useSearchParams()
  const [uin, setUin] = useState('')

  const event = searchParams?.get('event')

  const check_uin = (uin: string) => {
    const uin_regex = new RegExp("^[0-9]{9}$")

    return uin_regex.test(uin)
  }

  const submitAttendance = async () => {
    if (event?.toUpperCase() === current_event) {
      if (!check_uin(uin)) {
        alert("Invalid UIN");
        return;
      }

      try {
        const response = await fetch("/api/attendance", {
          cache: 'no-cache',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uin: uin, event: event }),
        });
        const responseData = await response.json();

        if (response.ok) {
          // User either marked successfully or already present
          alert(responseData.message);
        } else {
          alert(`Error: ${responseData.message}`);
        }
      } catch (error) {
        alert('Failed to mark attendance');
      }
    } else {
      alert("Event not active");
    }
  };


  return (
    <div className="font-source text-black bg-white flex flex-col items-center justify-start pt-20 min-h-screen">
      <div className="flex flex-row mb-10">
        <Image
        src="/SASE_LOGO.png"
        width={150}
        height={50}
        alt="Picture of SASE TAMU logo"
        />
        <div className="ml-4 mr-3 vl"></div>
        <Image
        src="/TAMU_LOGO.png"
        width={50}
        height={50}
        alt="Picture of TAMU logo"
        />
      </div>
      <div className="w-full md:w-1/2 p-10 bg-white shadow-lg rounded-xl">
      <h1 className="font-bebas text-5xl mb-5">Mark Your Attendance for {event || 'Event'}</h1>
        <input 
          type="text" 
          placeholder='Your UIN' 
          value={uin} 
          onChange={e => setUin(e.currentTarget.value)} 
          className='w-full mb-4 p-2 bg-white border border-blue-500 rounded'
        />
        <button 
          onClick={submitAttendance} 
          className='w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded'
        >
          Mark Attendance
        </button>
      </div>

    </div>
  );
};

export default user