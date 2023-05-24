import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Image from 'next/image';

const Team : NextPage = () => {
  return (
    <div>
<div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>

    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>

    <div>
    <a className="font-bebas text-5xl pt-20 pr-5 pl-5 md:pl-20">Our Team</a>

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


    <div className="bg-white h-max flex justify-center p-10 md:p-10">
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Team;