import React, { Fragment, useState, useCallback, useMemo } from 'react'
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';

const upcoming_events = () => {
  return (
  <>
  <div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>

    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
    <div className="bg-white text-black font-source"> 
    <a className="font-bebas text-5xl pt-40 pr-5 pl-5 md:pl-20">Upcoming Events</a>
    <div className="pl-10 pr-10 flex justify-center">
    <div className="googleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago"></iframe>
    </div>  
    </div>
    </div>
    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
  </div>
  <Footer/>



  </>
  )
}

export default upcoming_events;