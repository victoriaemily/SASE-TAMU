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
    <div className="pl-20 pr-20">
      <div data-tockify-component="calendar" data-tockify-calendar="sasecalendartamu"></div>
    </div>
  <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
    
    </>
  )
}

export default upcoming_events