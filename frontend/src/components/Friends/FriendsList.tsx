import { PlusCircle, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { getAutheader } from "../../services/Auth";
import api from "../../services/api";
import Button from "../Btn/Button";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

interface Profile {
    _id: number;
    name: string;
    followers: string[];
    following: string[];

}
function FriendList() {
    const auth = getAutheader();
    const [profiles, setProfiles] = useState<Profile[]>([]);
    useEffect(() => {
        async function getProfiles() {
            try {
                const { data } = await api.get('/profiles', auth);
                setProfiles(data);
                console.table(data);

            } catch (err) {
                console.log(err);
            }

        }
        getProfiles();
    }, []);

    async  function  handfollow(profileId: number) {
        try {
            await api.post(`/profiles/${profileId}/follow`, {}, auth);
            const newProfiles = profiles.filter((profile) => profile._id !== profileId);
            setProfiles(newProfiles);
        } catch (error) {
           console.log(error); 
        } 
        
    }
    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth bg-[#121214]">
            <Heading className="flex items-center justify-center pt-10 mt-1 mb-5">
                <Text className="text-xl font-extrabold text-white">Friends</Text>
            </Heading>
            <ul>
                <li className="ml-9 pt-px-8  mr-8 max-w-sm border-slate-500 border-2 rounded-lg bg-slate-700 shadow-lg">
                    {profiles && profiles.map((profile) => (
                        <div >
                            <div className="flex flex-col items-center pb-10">
                                <div className="flex items-center mt-5 tex-white">
                                    <UserCircle className="w-10 h-10 text-white" weight="fill" />
                                    <Text className="text-xl font-extrabold text-white">
                                        {profile.name}
                                    </Text>
                                </div>
                                <div className="flex items-center mt-5 tex-white">
                                    <Text className=" text-xl font-extrabold text-white">
                                        {profile.followers.length > 0 && `${profile.followers.length} followers`}
                                    </Text>
                                </div>
                                <div className="flex items-center mt-5">
                                    <Text className=" text-xl font-extrabold text-white">
                                        {profile.following.length > 0 && `${profile.following.length} following`}
                                    </Text>
                                </div>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"onClick={() => handfollow(profile._id)}><PlusCircle size={32} />
                                    </Button>
                                
                                </div>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    )
}
export default FriendList;