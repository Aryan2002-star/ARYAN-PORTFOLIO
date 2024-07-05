"use client"

import CountUp from "react-countup"

const stats = [
    {
        num:500,
        text:"LinkedIn Connections"
    },
    {
        num:10,
        text:"Projects Completed"
    },
    {
        num:10,
        text:"Technologies Mastered"
    },
    {
        num:200,
        text:"Code Commits"
    },
];

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item,index)=>{
                    return(
                        <div key={index} className="flex flex-1 gap-4 items-center justify-center">
                            <CountUp end={item.num}
                            duration={5}
                            delay={2}
                            suffix={item.num==500 || item.num == 200?"+":""}
                            className="text-4xl xl:text-6xl font-extrabold"/>
                            {/* <span className="text-4xl xl:text-6xl font-extrabold">{item.num==500 || item.num == 200?"+":""}</span> */}
                            <p className={`${
                                item.text<15?"max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80
                            }`}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
