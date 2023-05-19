import { UserCircle } from "phosphor-react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { getAutheader } from "../../services/Auth";
import Button from "../Btn/Button";
import { useEffect, useState } from "react";
import api from "../../services/api";

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
    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth bg-[#121214]">
            <Heading className="ml-5 my-4">
                <Text className="text-xl font-extrabold text-white">Friends</Text>
            </Heading>
            {profiles && profiles.map((profile) => (
                <div className="ml-5 pt-px-5  mr-5 max-w-sm bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                            <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}
export default FriendList;