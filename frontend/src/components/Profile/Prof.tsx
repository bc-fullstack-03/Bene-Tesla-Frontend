import { SignOut, UserCircle } from "phosphor-react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Btn/Button";
import { useNavigate } from "react-router-dom";
export const UserProfile = () => {  
    const navigate = useNavigate();
    const user = localStorage.getItem('user')
    function handleLogout() {
        console.log('logout')
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="basis-5/6  bg-[#121214]">
            <div className="flex flex-col">
                <Heading size="lg" className=" border-b-2 border-slate-400">
                    <Text size="lg" className="extrabold text-white ml-2">
                        Profile
                    </Text>

                    {/*card profile*/}
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <UserCircle size={32} weight="fill" className="text-slate-300 ml-2 mt-2" />
                            <Text size="lg" className="extrabold text-white ml-2 mt-2">
                                {user}
                            </Text>
                            <Button onClick={() => handleLogout()} className="ml-2 mt-2">
                                <SignOut size={22} />
                            </Button>
                        </div>
                    </div>
                </Heading>
            </div>
        </div>

    )
}
export default UserProfile;