import React from 'react'
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import {AiOutlineFilePdf} from 'react-icons/ai'
import LogoList from '../components/LogoList';

const sponsor = () => {
  const logos = [
    'company.png',
    'company.png',
    'company.png',
    // Add more logo paths as needed
  ];
  const logos1 = [
    'company.png',
    'company.png',
    'company.png',
    'company.png',
    'company.png',
    'company.png',
    // Add more logo paths as needed
  ];
  return (
<div>
  <div className="bg-white">
    <NavBar/>
    <div className="font-bebas pt-10 text-black text-5xl text-center">
        sponsor sase tamu
      </div>
      <div className="p-5 md:pl-40 md:pr-40 text-center text-md">
      <div className="font-sans pt-5">
        We would like to thoroughly thank our sponsors for their continued support and cooperation.
      </div>
      <div className="font-sans text-center">
        The success of our chapter depends on your support. If you are a new sponsor or interested in partnering with SASE TAMU, we would love to get into contact with you! Take a look at our current sponsorship package below.
      </div>
      <div className='flex justify-center p-10 md:p-10 text-5xl'>
          <div className="flex">
          <a href="null"><AiOutlineFilePdf/></a>
          </div>
      </div>
      </div>
      <div className="font-bebas pt-5 text-black text-5xl text-center">
        Gold
      </div>
      <LogoList
      logoPaths={logos1}
      />
      
      <div className="font-bebas pt-5 text-black text-5xl text-center">
        Silver
      </div>
      <LogoList
      logoPaths={logos}
      />
      
      <div className="font-bebas pt-5 text-black text-5xl text-center">
        Bronze
      </div>
      <LogoList
      logoPaths={logos}
      />
      

  </div>
  <Footer/>
</div>
    )
}

export default sponsor