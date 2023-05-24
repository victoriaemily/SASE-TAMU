import React, { Fragment, useState, useCallback, useMemo } from 'react'

/** @type {{search: React.CSSProperties}} */
const styles = {
    calendar: {
        width: "800",
        border: "none",
        height: "600",
    }
}
const upcoming_events = () => {
  return (
    <>
    <a className="font-bebas text-5xl pt-40 pr-5 pl-5 md:pl-20">Upcoming Events</a>
    <div className="googleCalendar">
  <iframe src="https://calendar.google.com/calendar/embed?src=sasetamu%40gmail.com&ctz=America%2FChicago"></iframe>
  </div>  
    </>
  )
}

export default upcoming_events