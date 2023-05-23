import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {NavBar} from '../components/NavBar';
import Image from 'next/image';


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>SASE TAMU</title>
    </Head>

    <div className="fixed w-full z-40">
      <NavBar/>
    </div>
    
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-informational">
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
            <button className="bg-slate-500 bg-opacity-25 mt-5 hover:bg-slate-500 hover:text-white text-white py-2 px-4 border rounded">
              <a href="/join">
                Join
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
          
      </div>
      <div className="flex-root">
      
      </div>
    </div>

    
{/* 
  <div className="w-full h-screen bg-fixed bg-center bg-cover bg-informational flex justify-center items-center">
  <div className="">
    <div className="absolute inset-0 flex justify-center items-center z-10">
      
    </div>
  </div>
  </div>



  <nav className="sticky top-0">
      <NavBar/>    
  </nav>
  <div>
  <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-informational">
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
  </div> */}
  </>
  );
};

export default Home;
