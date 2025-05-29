import Lottie from "lottie-react"
import Animation from "../images/Animation.json"
import { GithubIcon } from '../utils/GithubIcon';
import { LinkedInIcon } from "../utils/LinkedInIcon";
import { EmailIcon } from "../utils/EmailIcon";

export const HomePage = () => {
  return (
    <section className="flex w-full h-full items-center justify-center gap-20 pt-10" id="Home">
            <div className="flex flex-col items-start justify-center gap-4 w-110 text-justify animate-flip-in-y">
              <h3 className="text-primary text-xl font-bold text-left">Hello! I'm</h3>
              <h1 className="text-white text-6xl font-bold ">Lucas <span className="text-primary relative nombre">De Lia</span></h1>
              <p className="text-muted-foreground text-2xl font-light">Full-Stack Developer & Sistems Engineering Student</p>
              <p className="text-muted-foreground font-normal">Building elegant solutions to complex problems with modern technologies.</p>
              <div className="flex justify-start items-center gap-2">
                <div className="flex gap-4">
                  <a className="cursor-pointer font-bold text-primary-foreground border border-border bg-primary px-4 py-2 rounded-xl hover:bg-[hsl(217.2_91.2%_50%)] hover:text-[hsl(215, 20.2%, 60%)] hover:scale-110 transition-transform"
                    title="Contact me"
                  >
                    Contact Me
                  </a>
                  <a className="cursor-pointer font-bold bg-secondary text-white px-4 py-2 rounded-xl border border-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-transform"
                    href=""
                  >
                    View Projects
                  </a>
                </div>
                <div className="flex gap-6 ml-5 ">
                  <a className="w-7 h-7 cursor-pointer" href="https://github.com/Lucas-De-Lia" target="_blank" rel="noopener noreferrer" title="Contact me on GitHub"><GithubIcon/> </a>
                  <a className="w-7 h-7 cursor-pointer" href="https://www.linkedin.com/in/lucas-de-lia-a0ab51303/" target="_blank" rel="noopener noreferrer" title="Contact me on LinkedIn"> <LinkedInIcon/></a>
                  <a className="w-7 h-7 cursor-pointer" href="mailto:lucasdelia018@gmail.com" title="Contact me on email"> <EmailIcon/></a>
                </div>
              </div>
            </div>
            <div className="w-100 h-100">
              <Lottie animationData={Animation} loop={true} autoplay={true} className="animate-fade-in-left"/>
            </div>
      </section>
  )
}
