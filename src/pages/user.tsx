import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEventFetch } from '~/hooks/useEventFetch'

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
    if (event === current_event){
      if (!check_uin(uin)){
        alert("Invalid UIN")
        return
      }
      
      const response = await fetch("/api/attendance", {
        cache: 'no-cache',
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uin: uin, event: event }),
      });
      
      alert("Attendance Marked!")
    }else{
      alert("Event not active")
    }
  }


  return (
  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
    <input type="text" placeholder='your UIN' value={uin} onChange={e => { setUin(e.currentTarget.value); }} className='m-3 bg-transparen text-white font-semibol py-2 px-4 border border-blue-500 rounded'/>
    <button onClick={submitAttendance} className='m-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Mark Attendance</button>
  </div>
  )
}

export default user