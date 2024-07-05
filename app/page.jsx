import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'
import "./globals.css";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full pb-12 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">


{/* Before these check Global.css for all h1,h2,h3 related classes fonts */}


          {/* TEXT */}
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 mt-3">
              Hello I'm<br />
              <span className="text-accent"> ARYAN </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas quaerat quis corrupti ea explicabo aut minima ratione
              maiores atque ex nihil 
            </p>
            {/* Button and Socials */}
            <div className="flex items-center flex-col gap-8 xl:flex-row" >
            <a href="/assets/resume/5th sem.pdf" download>
                <Button className="border-x-2 border-accent-hover hover:bg-primary hover:text-accent hover:border-x-2">
                  <span className="mx-1">Download CV</span><FiDownload/>
                </Button>
              </a>
           
            <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" 
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            /></div>
            </div>
          </div>

          {/* PHOTU */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <div className="xl:mr-12">
            <Photo/>
            </div>
            </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
