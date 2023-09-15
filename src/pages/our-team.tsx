import { type NextPage } from "next";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Card from '../components/Card';

const Team : NextPage = () => {
  return (
     <div className="bg-white">
    <div className="fixed w-full z-40">
    <NavBar/>
    </div>
      <div className="pt-20 font-bebas flex justify-center pt-10 text-black text-5xl">
        meet our team
      </div>
      <div className="font-bebas flex justify-center text-gray-400 text-4xl">
        Executive Board
      </div>
      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/pres.jpg"
      name="Victoria Chen"
      major="Computer Engineering '25"
      role="President"
      link="https://www.linkedin.com/in/victoriaemilychen/"
      />
      <Card
      imageSrc="/headshots/evp.jpg"
      name="Li Lau"
      major="Electrical Engineering '25"
      role="External Vice President"
      link="https://www.linkedin.com/in/li-lau/"
      />
      <Card
      imageSrc="/headshots/ivp.jpg"
      name="Thea Alonzo"
      major="Microbiology '25"
      role="Internal Vice President"
      link="https://www.linkedin.com/in/theaalonzo"
      />
      <Card
      imageSrc="/headshots/treasurer.jpg"
      name="Emma Nguyen"
      major="Applied Math '24"
      role="Treasurer"
      link="null"
      />
      <Card
      imageSrc="/headshots/secretary.jpg"
      name="Roshan Mathur"
      major="Biomedical Engineering '24"
      role="Secretary"
      link="https://www.linkedin.com/in/roshan-mathur/"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        General Officers
      </div>

      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/technical.jpg"
      name="Joseph Nguyen"
      major="General Engineering '26"
      role="Tech Marketing Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/social.jpg"
      name="Nathanael Kamat"
      major="ESET '26"
      role="Social Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/pr.jpg"
      name="Charisa Chairat"
      major="Chemical Engineering '25"
      role="Public Relations Director"
      link="null"
      />
      <Card
      imageSrc="/headshots/fund.jpg"
      name="Monisha Yerram"
      major="Biochemistry, Genetics '25"
      role="Fundraising Director"
      link="https://www.linkedin.com/in/monisha-yerram"
      />
      <Card
      imageSrc="/headshots/logistics.jpg"
      name="Noah Saria"
      major="Computer Engineering '25"
      role="Logistics Director"
      link="https://www.linkedin.com/in/noah-saria-118869213"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        Advisor
      </div>
      <div className="pb-20 flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/headshots/advisor.jpg"
      name="Pauline Wade"
      major="Computer Science & Engineering"
      role="Associate Professor of Practice"
      link="https://www.linkedin.com/in/paulinewade"
      />
      </div>
      <div className="flex bg-white items-center justify-center h-96 bg-fixed bg-center bg-cover bg-officer">
      </div>
    <Footer/>
    </div>
    
    
  )
}

export default Team;