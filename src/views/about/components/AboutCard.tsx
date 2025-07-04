import { EducationIcon } from "../../../utils/EducationIcon";
import { ExperienceIcon } from "../../../utils/ExperienceIcon";

interface Props {
    type: string;
}

export const AboutCard = ({ type }:Props) => {
  return (
    <div className="flex flex-col items-start justify-start border border-primary rounded-lg p-4 flex-1 h-65 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex gap-2 mb-4 justify-center items-center">
            {(type === 'Education') ? (<EducationIcon/>) : (<ExperienceIcon/>)}
            <h4 className="text-white font-medium text-lg">{(type === 'Education') ? "Education" : "Experience"}</h4>
        </div>
        <h6 className="text-white font-medium text-md">{(type === 'Education' ) ? "Ingeniería en Sistemas  de Información" : "Full-Stack Developer Intern"}</h6>
        <p className="my-2 text-muted-foreground text-sm">{( type === 'Education' ) ? "Universidad Tecnológica Nacional" : "General Directorate of Casinos and Bingos of the Social Assistance Fund - Santa Fe Lottery"}</p>
        <p className="text-muted-foreground text-sm"> {(type === 'Education') ? "2022 - Present" : "Since June 2025 - Present"} </p>
        {
            (type === 'Education') ? (
            <>
                <h6 className="text-white mt-4 font-medium text-md">{(type === 'Education' ) && "High School Diploma in Natural Sciences"}</h6>
                <p className="my-2 text-muted-foreground text-sm">{( type === 'Education' ) && "Liceo Militar General Belgrano"}</p>
                <p className="text-muted-foreground text-sm"> {(type === 'Education') && "2017 - 2021"} </p>
            </>
        ) : (
                <p className="text-muted-foreground text-sm mt-2">Technologies: TypeScript, React, JQuery, Node.js, PHP, Laravel </p>
            )
        }
    </div>
  )
}
