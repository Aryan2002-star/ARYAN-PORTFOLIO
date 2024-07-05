"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs"

const skill = [
  {
    num:"01",
    title:"Web Development",
    href:"/skills/webd",
    description: "Develop Full-Stack Websites using React, Spring Boot and many more..."
  },
  {
    num:"02",
    title:"Android Development",
    href:"/skills/android",
    description: "Develop mobile applications using Java & XML with gradle and many more.. "
  },
  {
    num:"03",
    title:"UI/UX Design",
    href:"/skills/design",
    description: "Lots of websites design using Figma with Adobe Illustrator, Adobe XD & many more... "
  },
  {
    num:"04",
    title:"Testing",
    href:"/skills/test",
    description: "Testing of softwares using JUnit and frameworks like Selenium and many more..."
  },
];
const skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[80px] mx-6 md:mx-0"
        >

          {skill.map((item,index)=>{
            return(
              <div className="flex flex-1 flex-col justify-center gap-4 group" key={index}>
                <div className="w-full flex justify-between items-center">
                  {/* Number */}
                  <div className="text-5xl font-extrabold text-outline text-transparent 
                    group-hover:text-outline-hover transition-all duration-500 cursor-default">
                      {item.num}
                      </div>
                  <Link href={item.href} 
                  className="w-[70px] h-[70px] rounded-full bg-accent group-hover:bg-accent-hover
                   transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                  <BsArrowDownRight className=" text-primary text-3xl"/>
                  </Link>
                </div>
                {/* body */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                <p className="text-white/60">{item.description}</p>

                <div className="border-b border-white/20 w-full"></div>

              </div>
            )
          })}


        </motion.div>
      </div>
    </section>
  )
}

export default skills
