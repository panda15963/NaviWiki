import Link from "next/link";
import { BsArrowLeftShort, BsWikipedia, BsDownload, BsFillHouseFill, BsMicrosoftTeams } from "react-icons/bs";
import { GiPlatform } from "react-icons/gi";
export function Navbar() {
    const logoFont = {
        FontFace: {
            fontFamily: "InkLipquid",
            fontWeight: "bold",
            src: "url(/fonts/Playfair_Italic_VariableFont) format(truetype)",
        }
    }
    const Menus = [
        { icon: <BsFillHouseFill className="text-2xl" />, title: "Home", link: <Link href="/"></Link> },
        { 
            icon: <GiPlatform className="text-2xl" />, 
            title: "Platforms", 
            submenu: true,
            submenuItems: [
                { icon: <BsWikipedia className="text-2xl" />, title: "STD5", link: <Link href="/std5"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "STD5W", link: <Link href="/std5w"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "PRM5", link: <Link href="/prm5"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "PRM6", link: <Link href="/prm6"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "CCIC", link: <Link href="/ccic"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "CCIC27", link: <Link href="/ccuc27"></Link> },
                { icon: <BsWikipedia className="text-2xl" />, title: "ccNC", link: <Link href="/ccnc"></Link> },
            ]
        },
        { icon: <BsDownload className="text-2xl" />, title: "Download", link: <Link href="/download"></Link> },
        { icon: <BsMicrosoftTeams className="text-2xl" />, title: "About", link: <Link href="/about"></Link> }, 
    ]
    return (
        <>
            <div className="flex">
                <div className={"bg-gray-800 h-screen p-5 pt-5"}>
                    <BsArrowLeftShort className="bg-white text-gray text-2xl rounded-full absolute -right-3 top-9 border border-gray cursor-pointer" />
                    <div className="inline-flex">
                        <BsWikipedia className="text-4xl cursor-pointer block float-left mr-2" />
                        <h1 className="text-white origin-left font-medium text-2xl" style={logoFont.FontFace}>
                            <Link href="/">ModiM Wiki</Link>
                        </h1>
                    </div>
                    <ul className="pt-2">
                        {Menus.map((menu) => (
                            <>
                                <li className="text-gray-300 text-sm font-medium py-2 flex items-center gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md" key="{menu}">
                                    <span className="inline-flex items-center px-2">
                                        {menu.icon}
                                        <span className="ml-4 text-base font-medim flex-1" style={logoFont.FontFace}>{menu.title}</span>
                                    </span>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}