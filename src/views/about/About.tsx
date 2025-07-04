import { DownloadIcon } from "../../utils/DownloadIcon"
import { PaperIcon } from "../../utils/PaperIcon"
import { AboutCard } from "./components/AboutCard"
import { AboutTecno } from "./components/AboutTecno"


export const About = () => {
  return (
    <section className="bg-secondary w-full h-screen pt-18" id="About">
      <h2 className="w-xl mx-50 text-white text-4xl font-bold aboutText relative">About Me</h2>
      <div className="flex items-center justify-start mx-50 py-15 gap-12 ">
        <div className="w-3/4 flex flex-col items-start justify-center gap-5">
          <h4 className="flex justify-center items-center text-white font-medium text-2xl"><PaperIcon/>Bio</h4>
          <p
            className="text-muted-foreground text-justify"
          >
            I'm an advanced Systems Engineering student with a passion for technology and continuous learning, specializing in full-stack development. I thrive in collaborative environments, bringing strong problem-solving skills and a team-oriented mindset to every project. I'm driven by challenges that push me to grow and deliver efficient, functional solutions.
          </p>
          <div className="flex items-start justify-start gap-5 mt-3">
            <AboutCard type="Education"/>
            <AboutCard type="Experience"/>
          </div>
        </div>
        <div>
          <div className="w-1/4">
            <div  className="w-sm flex flex-col items-center">
              <img
                src="/Lucas.jpg"
                alt="Profile Picture"
                className="w-38 h-38 object-cover rounded-full border-5 border-gray-900 hover:scale-110 transition-transform"
              />
              <h3 className="text-white text-2xl font-bold mt-5">Lucas De Lia</h3>
              <p className="text-muted-foreground mt-1">Sistems Engineering Student</p>
              <div className="flex items-center justify-start gap-2 mt-3">
                  <AboutTecno tecno="React"/>
                  <AboutTecno tecno="Node.js"/>
                  <AboutTecno tecno="PHP"/>
                  <AboutTecno tecno="Laravel"/>
              </div>
              <a className="inline-flex gap-1 mt-8 w-45 h-10 text-primary-foreground font-medium text-sm bg-primary border border-border cursor-pointer px-4 py-2 rounded-xl hover:bg-[hsl(217.2_91.2%_50%)] hover:text-[hsl(215, 20.2%, 60%)] hover:scale-110 transition-transform" href="/CV-De-Lia-Lucas.pdf"
                    download
                    title="Download my CV" ><DownloadIcon/> Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
