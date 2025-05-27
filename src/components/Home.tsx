import Lottie from "lottie-react"
import Animation from "../images/Animation.json"


export const Home = () => {
  return (
    <main className="bg-secondary w-full h-screen ">
      <section className="flex items-center justify-evenly gap-8 py-30">
          <div className="flex flex-col items-start justify-center gap-4">
            <h3 className="text-primary text-sm font-bold text-left">Hello! I'm</h3>
            <h1 className="text-white text-6xl font-bold ">Lucas <span className="text-primary relative nombre">De Lia</span></h1>
            <p className="text-muted-foreground text-2xl font-light">Full-Stack Developer & Sistems Engineering Student</p>
            <p className="text-muted-foreground font-normal">Building elegant solutions to complex problems with modern technologies.</p>
            <div className="flex gap-4">
              <a className="cursor-pointer font-bold text-primary-foreground border border-border bg-primary px-4 py-2 rounded-xl">
                Contact Me
              </a>
              <a className="cursor-pointer font-bold bg-secondary text-white px-4 py-2 rounded-xl border border-border">
                Download CV
              </a>
            </div>
          </div>
          <div className="w-100">
            <Lottie animationData={Animation} loop={true} autoplay={true}/>
          </div>
      </section>
    </main>
  )
}
