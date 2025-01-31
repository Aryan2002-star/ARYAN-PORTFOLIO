"use client"

import { AnimatePresence,motion } from "framer-motion"
import { usePathname } from "next/navigation"

// Components
import Stairs from "./Stairs";

const StairEffect = () => {
  const pathName = usePathname();
  return (
    <>
   <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs/>
        </div>


      {/* This motion div is to easeInOut the Content after the stairs Animation */}
      <motion.div
      className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      initial={{opacity:1}}
      animate={{
        opacity:0,
        transition:{delay:0.8,duration:0.2,ease:"easeInOut"},
      }}
      />


      </div>
   </AnimatePresence>
   </>
  )
}

export default StairEffect
