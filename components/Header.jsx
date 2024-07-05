import Link from "next/link"

// Components
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-6 pl-2 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* LOGO */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">ARYAN<span className="text-accent">.</span></h1>
        </Link>

        {/* DesktopNav and HireMe */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
            <Button className="px-8 ">HIRE ME</Button>
            </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden leading-tight">
          <MobileNav/>
        </div>



      </div>
    </header>
  )
}

export default Header
