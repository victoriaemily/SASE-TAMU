import { type NextPage } from "next";
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import Card from '../components/Card';

const Team : NextPage = () => {
  return (
    <div>
    <div className="bg-white">
      <NavBar/>
      <div className="font-bebas flex justify-center pt-10 text-black text-5xl">
        meet our team
      </div>
      <div className="font-bebas flex justify-center text-gray-400 text-4xl">
        Executive Board
      </div>
      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        General Officers
      </div>

      <div className="flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      </div>
      <div className="pt-10 font-bebas flex justify-center text-gray-400 text-4xl">
        Advisor
      </div>
      <div className="pb-20 flex flex-wrap pt-10 flex flex-wrap justify-center gap-20">
      <Card
      imageSrc="/dude.jpg"
      name="Dude McDude '25"
      major="Mechanical Engineering"
      role="Director"
      bio="Howdy! I am Dude. I am dude, I do dude and dude. I come from dude and dude. Excited to dude!"
      />
      </div>

    </div>

  <Footer/>
</div>
  )
}

export default Team;