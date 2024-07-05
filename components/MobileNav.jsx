"use client"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]



const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // handle closeing of nav on click
  const handleLinkClick = () => {
    setIsOpen(false);
  };



  return (

    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="bg-primary flex flex-col ">



        <nav className="flex flex-col items-center justify-center h-screen gap-8 text-[20px]">
          <Link href="/" onClick={handleLinkClick}>
          <div className="text-white text-4xl font-semibold mb-7 xl:mb-20 text-center border-4 border-accent rounded-3xl p-7">ARYAN<span className="text-accent">.</span></div>
          </Link>

          {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                    font-medium hover:text-accent transition-all`} onClick={handleLinkClick}>
              {link.name}
            </Link>  // we are returning index because in map() its recommended to have a unique key to each value
          })}
        </nav>


      </SheetContent>
    </Sheet>

  )
}

export default MobileNav
