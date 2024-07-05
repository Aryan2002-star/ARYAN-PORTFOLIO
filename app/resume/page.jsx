"use client"

import { Description } from "@radix-ui/react-dialog"
import { FaHtml5, FaCss3, FaJs, FaAndroid, FaFigma, FaJava } from "react-icons/fa"
import { SiSpring, SiSpringboot, SiNextdotjs, SiReact, } from "react-icons/si"

const about = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus assumenda eos.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Aryan"
        },

        {
            fieldName: "Email",
            fieldValue: "aryanvedyofficial@gmail.com"
        },
        {
            fieldName: "Skype",
            fieldValue: "aryan_1"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Languages",
            fieldValue: "English,Hindi"
        },
        {
            fieldName: "Free to Work",
            fieldValue: "Yes"
        },

    ]
};


const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "sgdjhab ahd kjahdkjad ihdwhu bsdbasjdd asgdiadnkms asdna awdhand h",
    items: [
        {
            company: "MaxBytePlacement Academy",
            position: "Teaching Assistant",
            duration: "Summer 2024",
        },
        {
            company: "Tata Motors Limited",
            position: "Full Stack Developer - Intern",
            duration: "Summer 2023",
        },
        {
            company: "Cummins Inc.",
            position: "Product Engineering - Intern",
            duration: "Summer 2022"
        },
    ]
};
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "sgdjhab ahd kjahdkjad ihdwhu bsdbasjdd asgdiadnkms asdna awdhand h",
    items: [
        {
            institute: "Chandigarh University, Mohali",
            degree: "B.E. Computer Science",
            duration: "2021 - Present",
        },
        {
            institute: "Vidya Bharti Chinmaya Vidyalaya, Jamshedpur",
            degree: "12th CBSE",
            duration: "2019 - 2021",
        },
        {
            institute: "Hill Top School, Jamshedpur",
            degree: "10th ICSE",
            duration: "Till 2019",
        },

    ]
};



const skills = {
    title: "My Skills",
    description: "hnadiabs iud agdind agdaisdn dwgdkan dagsdiabn kdbaw i",
    skillset: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaAndroid />,
            name: "Android",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiSpring />,
            name: "Spring",
        },
        {
            icon: <SiSpringboot />,
            name: "Spring Boot",
        },
        {
            icon: <SiReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
    ]
}



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeInOut, motion } from "framer-motion";




const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">

            <div className="container mx-auto">
                <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">


                    {/* TABS */}
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6" >
                        <TabsTrigger value="Experience" >Experience</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About Me</TabsTrigger>
                    </TabsList>



                    {/* CONTENT */}


                    <div className="w-full min-h-[70vh]" >

                        {/* experience */}
                        <TabsContent value="Experience" className="w-full">
                            <div className="felx flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/80">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* Education */}
                        <TabsContent value="Education" className="w-full">
                            <div className="felx flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/80">{item.institute}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* skills */}
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left ">

                                <div className="flex flex-col gap-[30px] ">
                                <h2 className="text-4xl font-bold">{skills.title}</h2>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-[40px] p-7 bg-[#232329] rounded-3xl">
                                {skills.skillset.map((skill, index) => (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={50}>
                                            <Tooltip>
                                                <TooltipTrigger className="group"><div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div></TooltipTrigger>
                                                <TooltipContent><p className="uppercase">{skill.name}</p></TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value="About" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h2 className="text-4xl font-bold">{about.title}</h2>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-10">
                                {about.info.map((info, index) => (
                                    <li key={index} className="flex  xl:justify-start gap-4">
                                        <span className="text-accent">{info.fieldName}:</span>
                                        <span className="text-xl">{info.fieldValue}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>


                </Tabs>
            </div>


        </motion.div>
    )
}

export default Resume
