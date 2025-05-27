interface Props{
    item: string;
}
export const HeaderItem = ({item} :Props) => {
  return (
    <li>
        <a className="
            inline-block rounded-xl px-4 py-2
            font-medium cursor-pointer hover:text-primary transition-transform">
            {item}
        </a>
    </li>
  )
}
