import React from 'react'
import Image from 'next/image';
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';

const join = () => {
  return (
    <div>

  <div className="text-black bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>

    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>

    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pt-5 pr-10 pb-20 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Interested in joining us?</a>
        <div className="pt-5 pb-5">
          <div>Dues are... Indicate your interest by signing up through our Google form!</div>
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="null">
                Sign up here!
              </a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pt-5 pr-10 self-center">
        <Image className="w-full rounded-xl"
                  src="/LONESTAR.jpg"
                  width={450}
                  height={50}
                  alt="Picture of SASE at Lonestar"
        />
      </div>
    </div>


    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default join