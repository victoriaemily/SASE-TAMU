"use client"; // This is a client component

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {NavBar} from '../components/NavBar';
import Image from 'next/image';
import { BsInstagram } from 'react-icons/bs';
import { BsChatRightHeart } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>SASE TAMU</title>
    </Head>

    <div className="fixed w-full z-40">
      <NavBar/>
    </div>
    <div className="bg-white text-black font-source">
    <div className="flex bg-white items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-informational">
      <div className="hidden md:block mt-12">
          <div>
            <div className="dash mb-5 md:dash-md"></div>
          </div>
          <div className="text-center">
            <div className="text-white font-bebas text-8xl">Howdy! We are SASE TAMU.</div>
          </div>
          <div>
            <div className="dash mt-3"></div>
          </div>
          <div className="flex font-source text-lg flex-row space-x-5 mt-3 items-center justify-center">
            <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/join">
                Join SASE!
              </a>
            </button>
            <button className="bg-slate-500 bg-opacity-25 mt-5 hover:bg-slate-500 hover:text-white text-white py-2 px-4 border rounded">
            <a href="/upcoming-events">
                Upcoming Events
              </a>
            </button>
          </div>
          
      </div>
      <div className="block md:hidden">
          <div>
            <div className="dash-sm mb-5"></div>
          </div>
          <div className="text-center">
            <div className="text-white font-bebas text-7xl">Howdy! We are SASE TAMU.</div>
          </div>
          <div>
            <div className="dash-sm mt-3"></div>
          </div>
          <div className="flex font-source text-lg flex-row space-x-5 mt-3 items-center justify-center">
            <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/join">
                Join SASE!
              </a>
            </button>
            <button className="bg-slate-500 bg-opacity-25 mt-5 hover:bg-slate-500 hover:text-white text-white py-2 px-4 border rounded">
            <a href="/upcoming-events">
                Upcoming Events
              </a>
            </button>
          </div>
          
      </div>
    </div>
    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pt-20 pr-10 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Our Mission</a>
        <div className="pt-5 pb-5">
          <div>The Society of Asian Scientists and Engineers (SASE) was founded in November 2007 to help Asian heritage scientific and engineering professionals achieve their full potential.</div>
          <div className="font-bold">SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.</div>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pt-5 pr-10 self-center">
        <Image className="w-full rounded-xl"
                  src="/LONESTAR.jpg"
                  width={450}
                  height={50}
                  alt="Picture of SASE TAMU @ Lonestar Throwdown :)"
        />
      </div>
    </div>
    <div className="bg-white flex justify-center pt-30 p-20">
      <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="bi bi-three-dots">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </div>
    
    <div>
    <a className="font-bebas text-5xl pt-20 pr-5 pl-5 md:pl-20">Core Pilars</a>

    <section id="projects" className='font-source bg-white text-lg grid md:flex-row lg:flex justify-center py-10 pl-10 pr-10 md:pl-20 md:pr-20 gap-5 text-black'>
     
    <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/NC2.jpg" alt="NC" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE @ NC</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Prepare Asian-heritage students for success in the transnational, global business world.</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/LANTERN.jpg" alt="Lantern Making Social" title="Social"/>
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">Our Lantern Making Social!</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Promote diversity and tolerance on campuses and in the workplace.</p>
     </div>
     </div>

     <div className="card w-100 bg-base-100 md:w-96 shadow-lg">
     <figure><img src="/STEMFEST.jpg" alt="SASE at STEMFest" />
     <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center pt-10 rounded-2xl text-shadow-md hover:bg-black hover:bg-opacity-25 text-3xl text-white font-bebas">SASE @ Stemfest</div></figure>
     <div className="card-body bg-white">
         <p className="pb-10">Provide opportunities for its members to make contributions to their local communities.</p>
     </div>
     </div>
    </section>
    </div>

    <div className="bg-white flex justify-center pt-10 p-20">
      <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="bi bi-three-dots">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </div>

    <div className="bg-white flex flex-col font-source md:flex-row">
      <div className="md:w-1/2 pt-5 pr-10 pl-10 md:pl-20">
        <a className="font-bebas text-5xl">Corporate Partnerships</a>
        <div className="pt-5 pb-5">
          <div>SASE is a non-profit 501(c)3 organization, and contributions to SASE are tax deductible.</div>
          <button className="bg-sky-700 bg-opacity-75 mt-5 hover:bg-sky-700 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/sponsor">
                Learn more!
              </a>
            </button>
        </div>
      </div>
      <div className="md:w-1/2 pl-10 pt-5 pr-10 self-center">
        <Image className="w-full rounded-xl"
                  src="/INFO.jpg"
                  width={450}
                  height={50}
                  alt="Picture of SASE Meeting"
        />
      </div>
    </div>
    
    <div className="bg-white h-max flex justify-center pt-20 p-10 md:p-20">
    </div>

    </div>

    <footer className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow flex items-center justify-between p-2 md:p-2">
    <span className="text-sm text-gray-500 text-center pl-5">made by vic
    </span>
    <ul className="flex flex-wrap text-center justify-center text-gray-500 mt-5 gap-7 text-xl mr-5">
        <li>
            <a href="https://linktr.ee/tamusase" className="mr-4 hover:text-sky-600  md:mr-6"><SiLinktree/></a>
        </li>
        <li>
            <a href="https://www.instagram.com/sasetamu/" className="mr-4 hover:text-sky-600  md:mr-6"><BsInstagram/></a>
        </li>
        <li>
            <a href="mailto:sasetamu@gmail.com" className="mr-4 hover:text-sky-600 "><BsChatRightHeart/></a>
        </li>
    </ul>
    
  </footer>

  
  </>
  );
};

export default Home;
