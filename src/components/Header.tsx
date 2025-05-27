
import { DevIcon } from "../utils/DevIcon";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  return (
    <>
        <header className="w-full bg-secondary flex justify-around items-center p-5 shadow sticky text-white">
            <span className="flex font-extrabold text-2xl ml-5 items-center text-primary">LUCAS DE LIA <DevIcon/></span>
            <nav>
                <ul className="flex gap-5 mr-5">
                    <HeaderItem item="Home"/>
                    <HeaderItem item="About"/>
                    <HeaderItem item="Experience"/>
                    <HeaderItem item="Projects"/>
                    <HeaderItem item="Contact"/>
                </ul>
            </nav>
        </header>
    </>
)}