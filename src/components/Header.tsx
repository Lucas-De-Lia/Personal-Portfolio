import { NavLink } from "react-router"
import { SunIcon } from "../utils/SunIcon"
import { MoonIcon } from "../utils/MoonIcon";
import { DevIcon } from "../utils/DevIcon";


export const Header = () => {
    const dark = true;
  return (
    <>
        <header className="bg-black flex justify-between items-center p-8 shadow sticky text-white min-w-lvw">
            <span className="flex font-extrabold text-2xl ml-5 items-center">LUCAS DE LIA <DevIcon/></span>
            <nav>
                <ul className="flex gap-5 mr-5">
                    <li><NavLink to="/home" className="inline-block border border-white rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-110 hover:bg-white hover:text-black transition-transform">HOME</NavLink></li>
                    <li><NavLink to="/about" className="inline-block border border-white rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-110 hover:bg-white hover:text-black transition-transform">ABOUT ME</NavLink></li>
                    <li><NavLink to="/experience" className="inline-block border border-white rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-110 hover:bg-white hover:text-black transition-transform">EXPERIENCE</NavLink></li>
                    <li><NavLink to="/projects" className="inline-block border border-white rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-110 hover:bg-white hover:text-black  transition-transform">PROJECTS</NavLink></li>
                    <li><NavLink to="/contact" className="inline-block border border-white rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-110 hover:bg-white hover:text-black  transition-transform">CONTACT</NavLink></li>
                    <li><button className="inline-block  py-2 hover:scale-110 transition-transform cursor-pointer">{(dark) ? <SunIcon/> : <MoonIcon/>}</button></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
