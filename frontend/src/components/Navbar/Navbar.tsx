import logo_menu from "../../img/parrotLogo.svg"
import Text from "../Text/Text";
import MenuItem from "../MenuItem/MenuItem";
import { ReactNode } from "react";
import { HouseLine, UserCirclePlus, UsersThree } from "phosphor-react";
interface NavBarProps {
    children?: ReactNode
}
function NavBar({ children }: NavBarProps) {
    return (

        <div className="basis-1/6 bg-[#121214] border-r border-slate-400">
            <header>
                <img src={logo_menu} alt="Logo connect Now Sysmap Parrot" className="animate-pulse w-20 h-20 " />
                <Text size="2xl" className="font-extrabold ml-2 text-white"><span className="badge badge-primary">C</span>N</Text>
            </header>
            <nav >
                <ul className="flex-col items-center justify-center text-white">
                    <MenuItem route='/Home' menuTitle="Home">
                    <HouseLine size={32}/>
                    </MenuItem>    
                    <MenuItem route='/Profile' menuTitle="Profile">
                    <UserCirclePlus size={32} />
                    </MenuItem>                   
                    <MenuItem route='/Friends' menuTitle="Friends">
                    <UsersThree size={32}  />
                    </MenuItem>   
                   </ul>
            </nav>
            {children}
        </div>
    )

}

export default NavBar;