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
      <div className="md:w-1/2 pt-5 pr-10 pb-10 md:pb-20 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Interested in joining us?</a>
        <div className="pt-5 pb-5">
          <div>Dues are $25 per semester and $40 for a year. Indicate your interest by joining our Discord for further events!</div>
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="https://linktr.ee/tamusase">
                Sign up here!
              </a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pb-5 md:pt-5 pr-10 self-center">
        <img className="w-full rounded-xl"
                  src="/squad.jpg"
                  width={1080}
                  height={810}
                  alt="Wintermelon Social"
        />
      </div>
    </div>

    <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20"></div>

    <div>
    <a className="font-bebas text-5xl pt-20 pr-5 pl-10 md:pl-20">some past events :)</a>

    <section id="projects" className='font-source bg-white text-lg grid md:flex-row lg:flex justify-center py-10 pl-10 pr-10 md:pl-20 md:pr-20 gap-5 text-black'>
     
    <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/NCNC.jpg" alt="NC" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE @ NC</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Our officer board and scholarship recipients are SASE's National Conference, hosted in Atlanta, GA!</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/winty.jpg" alt="Wintermelon Social" title="Social"/>
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE squad social!</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">A fun day out at Century Square with our SASE Squads!</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/ging.jpg" alt="SASE's Gingerbread House Social" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">Winter Social</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">SASE's Winter Social!</p>
     </div>
     </div>
    </section>
    </div>

    <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20"></div>

  </div>

  <div className="block md:hidden flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-sweet">
  </div>
  <div className="hidden md:block flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-meow">
  </div>
  <Footer/>
    </div>
  )
}

export default join