import { PLIcon } from "../icons/PLIcon"
import { TypeScriptIcon } from "../icons/TypeScriptIcon"


export const SkillsPg = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 border border-primary p-5 rounded-xl">
        <div className="flex items-center justify-start gap-2">
            <div className="text-primary dark:text-white rounded-xl bg-primary/10 p-2"> <PLIcon/></div>  
            <h2 className="text-white text-lg font-medium">Programming Languages</h2>
        </div>
        <div className="flex items-center justify-start gap-2 flex-wrap w-full  ">
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
            <div className="w-12 h-12 rounded-2xl fill-[#3178C6] bg-white">
                <TypeScriptIcon/>
            </div>
        </div>
    </div>
  )
}
