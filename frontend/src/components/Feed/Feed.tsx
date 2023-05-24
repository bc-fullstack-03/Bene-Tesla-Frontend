import { UserCircle } from "phosphor-react";
import { Post } from "../../model/Post";
import Heading from "../Heading/Heading";
import PostItem from "../PostItem/PostItem";
import Text from "../Text/Text";
interface FeedProps {
    post: Post[];
    handleLike: (postId: number) => void;
}
function Feed({ post , handleLike}: FeedProps) {
    const user = localStorage.getItem('user');
   

    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth bg-[#121214]">
            <Heading size="lg" className="border-b border-slate-400 mt-2">
                <Text size="lg" className="text-white">
                    Home Page
                </Text>
                <div className="flex items-center ml-5 my-4">
                    <UserCircle size={32} weight="fill" className="text-slate-300" />
                    <Text className="font-extrabold text-white ml-2">
                        Welcome {user}
                    </Text>
                </div>

            </Heading>
            <section className="flex flex-col" >
                { post && post.map((post : Post) => <PostItem post={post} key={post._id}  handleLike={handleLike}/>)
                }
             </section>
        </div>
    )
}

export default Feed;