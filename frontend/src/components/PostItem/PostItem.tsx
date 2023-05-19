import { ChatCircleDots, Heart, UserCircle } from "phosphor-react";
import { Post } from "../../model/Post";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";


interface PostItem {
  post: Post
}
function PostItem({ post }: PostItem) {
  console.log(post);

  return (
    <div className="border-b slate-400" key={post._id}>
      <Heading className="flex items-center ml-5 my-5">
        <UserCircle size={38} weight="fill" className="text-slate-300" />
        <Text className="font-extrabold ml-2 text-slate-300" >{post.profile.name}</Text>
      </Heading>
      <div className="ml-10 flex flex-col gap-2">
        <Heading size="sm" className="text-slate-300">{post.title}</Heading>
        <Text asChild>
          <p className="text-slate-300 mr-3">{post.description}</p>
        </Text>
        <footer className="flex items-center ml-5 my-6 space-x-8">
        
          <ChatCircleDots size={32}  className="text-slate-300" />
          <Text className="text-slate-300 mr-5">{post.comments.length || 0}</Text>
          <div className="hover:bg-blue-500 hover:text-white rounded-full p-1 cursor-pointer">
          <Heart size={32}  className="text-slate-300" />
          </div>
          <Text className="text-slate-300 mr-5">{post.likes.length}</Text>
        </footer>
      </div>
    </div>
  );
}

export default PostItem;