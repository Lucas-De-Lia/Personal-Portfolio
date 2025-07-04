import { SkillsPg } from "./components/SkillsPg"


export const Skills = () => {
  return (
    <section className="bg-secondary w-full h-screen pt-18" id="Skills">
        <h2
        className="w-xl mx-50 text-white text-4xl font-bold skillsText relative"
        >Skills</h2>
        <div className="mx-50">
            <p className="text-muted-foreground text-justify mt-5 w-5/8">
                I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
            </p>
        </div>
        <div
          className="grid grid-cols-3 grid-rows-2 gap-8 mt-5 mx-50"
        >
              <SkillsPg/>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </div>
    </section> 
  )
}
