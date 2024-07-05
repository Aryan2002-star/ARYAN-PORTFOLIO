"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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



const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} ${pathName.startsWith("/skills") && link.path === "/skills" && "text-accent border-b-2 border-accent"}
                    font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>  // we are returning index because in map() its recommended to have a unique key to each value
            })}
        </nav>
    )
}

export default Nav
