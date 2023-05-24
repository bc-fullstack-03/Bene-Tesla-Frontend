import { ChatCircleDots, Heart, UserCircle } from "phosphor-react";
import { Post } from "../../model/Post";
import { getProfile } from "../../services/Auth";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";


interface PostItem {
  post: Post | any;
  handleLike: (postId : number) => void
}
function PostItem({ post , handleLike}: PostItem) {


  return (
    <div className="border-b slate-400" key={post._id}>
      <Heading className="flex items-center ml-5 my-5">
        <UserCircle size={38} weight="fill" className="text-slate-300" />
        <Text className="font-extrabold ml-2 text-slate-300" >{post.profile.name}</Text>
      </Heading>
      <div className="ml-10 flex flex-col gap-2">
        <Heading size="sm" className="text-slate-300">{post.title}</Heading>
        {post.image ? (
          <img src={`http://localhost:9000/${post.description}`} alt="Post" className="max-h-96 rounded-lg" />
        ) : (
          <Text asChild>
            <p className="text-slate-300 mr-3">{post.description}</p>
          </Text>
        )

        }
        <footer className="flex items-center ml-5 my-6 space-x-8">
          <div className="cursor-pointer">
            <ChatCircleDots size={32} className="text-slate-300" />
            <Text className="text-slate-300 mr-5 ml-3">{post.comments.length}</Text>
          </div>
          <div className=" cursor-pointer" onClick={() =>  handleLike(post._id)}>
            {post.likes.includes(getProfile()) ?(
              <Heart size={32} weight="fill" className="text-red-500" />
            ):(
              <Heart size={32} className="text-slate-300" />
            )}            
            <Text className="text-slate-300 mr-5 ml-3">{post.likes.length}</Text>
          </div>

        </footer>
      </div>
    </div>
  );
}

export default PostItem;