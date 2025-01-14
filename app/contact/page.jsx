"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa"



const infoss = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91)-5544332211"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner, Tech Street"
  },
]

const Contact = () => {

  const handleSubmitContact =()=>{
    const doc = document.getElementById("aryan");
    if(doc){
     doc.style.display="block"
    }
    
   }
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rponded-xl">
              <h3 className="text-4xl text-accent"> Let's Work Together</h3>
              <p className="text-white/60">Provide with great work in less time.</p>

              {/* INPUT INSIDE FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firtsname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/*SELECT OF FORM  */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="android">Android Development</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type YOur Message"
              />
              
              {/* error */}
              {/* <p className="hidden" id="aryan">Error</p> */}
              {/* submitbutton */}
              <Button className="w-full xl:max-w-40" type="button">  
                 {/* onClick={handleSubmitContact} */}
                Send Message
              </Button>


            </form>
          </div>


          {/* Info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infoss.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                      
                    </div>
                    <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>
    </motion.section>
  )
}

export default Contact
