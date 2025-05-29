interface Props {
    tecno: string;
}
export const AboutTecno = ({tecno} :Props) => {
  return (
    <div className="inline-flex items-center border border-border rounded-full px-2.5 py-0.5 text-xs font-semibold  text-white bg-primary/10">
        {tecno}
    </div>
  )
}
