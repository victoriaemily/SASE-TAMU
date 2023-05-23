import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


export const NavBar = () => {
  return (
    <div> 
       
    <nav className="bg-white border-gray-200 p-7 text-xl font-source">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex">
            <span className="self-center">
                <div className="flex flex-row">
                    <Image
                    src="/SASE_LOGO.png"
                    width={150}
                    height={50}
                    alt="Picture of SASE TAMU logo"
                    />
                    <div className="ml-4 mr-3 vl"></div>
                    <Image
                    src="/TAMU_LOGO.png"
                    width={50}
                    height={50}
                    alt="Picture of TAMU logo"
                    />
                </div>
            </span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 focus:outline-none rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="flex flex-col md:flex-row md:space-x-10 mr-10">
            <li>
            <Link href="/" className="md:bg-transparent block hover-underline-animation" aria-current="page">Home</Link>
            </li>
            <li>
            <Link href="/about" className="md:bg-transparent block hover-underline-animation" aria-current="page">About</Link>
            </li>
            <li>
            <Link href="/our-team" className="md:bg-transparent block hover-underline-animation" aria-current="page">Our Team</Link>
            </li>
            <li>
                <div className=''>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 flex items-center justify-between">
                        <div className="hover-underline-animation">
                            Events
                        </div>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                </div>
                <div id="dropdownNavbar" className="hidden bg-white z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 text-xl">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <Link href="/upcoming-events" className="text-xl hover:bg-gray-100 block px-4 py-2">Upcoming Events</Link>
                    </li>
                    <li>
                        <Link href="/sase-squads" className="text-xl hover:bg-gray-100 block px-4 py-2">SASE Squads</Link>
                    </li>
                    <li>
                        <Link href="/trivia-night" className="text-xl hover:bg-gray-100 block px-4 py-2">Trivia Night</Link>
                    </li>
                    </ul>
                </div>
            </li>
            <li>
            <Link href="#" className="font-source hover-underline-animation">Join</Link>
            </li>
            <li>
            <Link href="#" className="font-source hover-underline-animation">Sponsor</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </div>)}
//   <div className="bg-slate-200">
    {/* <div className="container mx-auto flex flex-wrap items-center justify-between">
    <a href="#" className="flex">
        <span className="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
    </a>
    <div className="flex md:order-2">
      <div className="relative mr-3 md:mr-0 hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </div>
    <div className="hidden md:flex items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
        <ul className="flex-col text-xl md:flex-row flex space-x-8 ">
        <li>
            <a href="#" className="font-source hover-underline-animation" aria-current="page">Home</a>
        </li>
        <li>
            <a href="/about" className="font-source hover-underline-animation">About</a>
        </li>
        <li>
            <a href="#" className="font-source hover-underline-animation">Our Team</a>
        </li>
        <li>
            <a href="#" className="font-source hover-underline-animation">Events</a>
        </li>
        <li>
            <a href="#" className="font-source hover-underline-animation">Join</a>
        </li>
        <li>
            <a href="#" className="font-source hover-underline-animation">Sponsor</a>
        </li>
        </ul>
    </div>
    </div> */}
//   </div>
  
