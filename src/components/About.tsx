import { PaperIcon } from "../utils/PaperIcon"


export const About = () => {
  return (
    <section className="bg-secondary w-full h-screen" id="About">
      <h2 className="w-xl mx-50 text-white text-4xl font-bold aboutText relative">About Me</h2>
      <div className="flex items-center justify-start mx-50 py-15 gap-10 ">
        <div className="w-3/5 flex flex-col items-start justify-center gap-5">
          <h4 className="flex justify-center items-center text-white font-medium text-2xl"><PaperIcon/>Bio</h4>
          <p
            className="text-muted-foreground text-justify"
          >
            🎓 I’m an advanced Systems Engineering student, currently in my fourth year. I’m passionate about technology and lifelong learning, and I’m always looking to expand my knowledge through self-directed study.
            <br />
            <br />
            💻 I have experience in frontend development using React, and I’m currently diving into backend development with Java (Spring Boot) and Node.js (Express). I’m interested in building complete applications and understanding both client-side and server-side logic.
            <br />
            <br />
            🤝 I stand out for my ability to work well in teams and my problem-solving mindset. I enjoy collaborating in development teams to find efficient and functional solutions, and I’m motivated by new challenges that help me grow as a software professional.
            <br />
            <br />
            🚀 I’m currently looking for opportunities that will allow me to continue growing as a developer and contribute value through technology.
          </p>
        </div>
        <div>
          <div className="w-2/5">aaa</div>
        </div>
      </div>
    </section>
  )
}
