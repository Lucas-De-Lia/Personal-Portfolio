
import { DevIcon } from "../utils/DevIcon";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  return (
    <>
        <header className="w-full bg-secondary/90 backdrop-blur-md flex justify-around items-center p-5 shadow fixed text-white z-1000 border-b-1 border-b-primary">
            <span className="flex font-extrabold text-2xl ml-5 items-center text-primary">LUCAS DE LIA <DevIcon/></span>
            <nav>
                <ul className="flex gap-5 mr-5 animate-flash animate-duration-500">
                    <HeaderItem item="Home"/>
                    <HeaderItem item="About"/>
                    <HeaderItem item="Skills"/>
                    <HeaderItem item="Projects"/>
                    <HeaderItem item="Contact"/>
                </ul>
            </nav>
        </header>
    </>
)}