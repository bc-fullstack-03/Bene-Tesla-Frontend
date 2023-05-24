import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Slot } from "@radix-ui/react-slot"
import Text from "../Text/Text"
interface MenuItemProps {
    menuTitle: string;//pegar o menuTitle do navbar
    children?: ReactNode;//pegar os icones do navbar
    route: string;
}

function MenuItem(props: MenuItemProps) {
    return (
        <li className=" hover:bg-blue-500 rounded-2xl group">    
            <Link to={props.route}>
                <div className="flex items-center px-3 py-2 mt-5">
                  <Slot className=" text-slate-50">{props.children}</Slot>
                  <Text size="lg" className="ml-3 capitalize font-semibold text-textOnP group-hover:text-textOnS">{props.menuTitle}</Text>
                </div>
            </Link>
        </li>
    )
}
export default MenuItem