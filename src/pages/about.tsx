import React from 'react'
import {NavBar} from '../components/NavBar';

const about = () => {
  return (
    <div>
    <div className="sticky top-0 z-10">
        <NavBar/>
    </div>
  <div>
  <div className="flex z-0 items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-informational">
  <div className="w-full h-full flex justify-center items-center">
    <div className="relative mb-20 text-center">
      <div>
        <div>
          <div className="dash mb-5 md:dash-md"></div>
        </div>
        <div>
          <div className="text-white font-bebas text-8xl">Howdy! We are SASE TAMU.</div>
        </div>
        <div>
          <div className="dash mt-3 md:dash-md"></div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className="shadow-md rounded-xl font-bebas ml-10 text-2xl p-10 mr-20">
    Interested in joining SASE TAMU?
  </div>
  <div className="font-source font-bold ml-10 text-xl p-10">
    Interested in joining SASE TAMU?
  </div>
  <div className="font-source font-bold ml-10 text-xl p-10">
    Interested in joining SASE TAMU?
  </div>
  </div>
    </div>
  )
}

export default about