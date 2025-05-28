import { PaperIcon } from "../utils/PaperIcon"
import { AboutCard } from "./AboutCard"


export const About = () => {
  return (
    <section className="bg-secondary w-full h-screen" id="About">
      <h2 className="w-xl mx-50 text-white text-4xl font-bold aboutText relative">About Me</h2>
      <div className="flex items-center justify-start mx-50 py-15 gap-10 ">
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
          
          </div>
        </div>
      </div>
    </section>
  )
}
