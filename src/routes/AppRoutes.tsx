import { Route, Routes } from "react-router"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Experience } from "../components/Experience"
import { Contact } from "../components/Contact"


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/experience" element = {<Experience/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/contact" element = {<Contact/>}/>
    </Routes>
  )
}
