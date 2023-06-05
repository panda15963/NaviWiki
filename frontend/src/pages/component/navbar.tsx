import { useState } from "react";
import Link from "next/link";
import { BsWikipedia, BsDownload, BsFillHouseFill, BsListUl } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
import { RiNavigationLine } from "react-icons/ri";
import { FiNavigation2, FiLogIn } from "react-icons/fi";
import { TbNavigation } from "react-icons/tb";
import { VscSignIn } from "react-icons/vsc";
import { RiGuideFill } from "react-icons/ri";
export function Navbar() {
    const logoFont = {
        FontFace: {
            fontFamily: "InkLipquid",
            fontWeight: "bold",
            src: "url(/fonts/Playfair_Italic_VariableFont) format(truetype)",
        }
    }
    type SideMenus = {
        name?: string,
        items?: {
            icon?: any,
            title?: string,
            link?: any
        }[]
    }
    const data: SideMenus[] = [
        {
            name: "General",
            items: [
                { icon: BsFillHouseFill, link: <Link href="/">Home</Link> },
                { icon: FiLogIn, link: <Link href="/component/login">Login</Link> },
                { icon: VscSignIn, link: <Link href="/component/register">Register</Link> },
                { icon: BsDownload, link: <Link href="/component/download">Download</Link> },
                { icon: RiGuideFill, link: <Link href="/component/manualguide">Manual Guide</Link> },
            ]
        },
        {
            name: "Platforms",
            items: [
                { icon: BiNavigation, link: <Link href="/platform/std5">STD5</Link> },
                { icon: BiNavigation, link: <Link href="/platform/std5w">STD5W</Link> },
                { icon: RiNavigationLine, link: <Link href="/platform/prm5">PRM5</Link> },
                { icon: RiNavigationLine, link: <Link href="/platform/prm6">PRM6</Link> },
                { icon: FiNavigation2, link: <Link href="/platform/ccic">CCIC</Link> },
                { icon: FiNavigation2, link: <Link href="/platform/ccic27">CCIC27</Link> },
                { icon: TbNavigation, link: <Link href="/platform/ccnc">ccNC</Link> },
            ]
        },
    ]
    const [open, setOpen] = useState(true);
    const toggleMenu = {
        open: () => setOpen(!open),
    }
    return (
        <>
            <div className="flex">
                <div className={`bg-gray-800 h-screen p-5 pt-5 ${open ? "w-72" : "w-20 "} relative duration`}>
                    <AiFillCaretLeft className={`text-cyan-400 text-4xl absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={toggleMenu.open} />
                    <BsWikipedia className="text-4xl cursor-pointer block float-left mr-2" />
                    <h1 className={`text-white origin-left font-medium text-2xl ${!open && "hidden"}`} style={logoFont.FontFace}>
                        <Link href="/">ModiM Wiki</Link>
                    </h1>
                    <div className="grow">
                        {data.map((group, index) => (
                            <div key={index} className="my-12" >
                                <BsListUl className="text-3xl float-left mr-2 mx-1 cursor-pointer text-gray-500" />
                                <div className={`mb-2 ml-4 font-bold text-xl text-gray-500 ${!open && "hidden"}`} style={logoFont.FontFace}>
                                    {group.name}
                                </div>
                                {group.items?.map((item, index) => (
                                    <div key={index} className={`flex items-center mb-2 ml-4 text-m font-bold text-gray-500 px-5 ${!open && "hidden"}`} >
                                        <item.icon className='mr-2' />
                                        {item.link}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}