import { UserCircle } from "phosphor-react";
import { FormEvent } from "react";
import { Post } from "../../model/Post";
import { getAutheader, getProfile, getUser } from "../../services/Auth";
import { dislikePost } from "../../services/Posts";
import api from "../../services/api";
import Button from "../Btn/Button";
import PostItem from "../PostItem/PostItem";
import Text from "../Text/Text";
import { TextInput } from "../TextInput/TextInput";

interface PostDetail {
  postDetailItem: Post;
  comment: Comment;
  SetpostDetailItem: (post: Post) => void;
}
interface CommentForm extends HTMLFormControlsCollection {
  description: HTMLInputElement;
}
interface CommentEvent extends HTMLFormElement {
  readonly controls: CommentForm;
}
function PostDetailItem({ postDetailItem, SetpostDetailItem, comment }: PostDetail) {
  const profile = getProfile();
  const user = getUser();
  async function handleLike() {

    try {
      if (postDetailItem.likes.includes(profile)) {
        const newPost = await dislikePost(postDetailItem, profile);
        SetpostDetailItem(newPost);
      } else {
        const newPost = await dislikePost(postDetailItem, profile);
        SetpostDetailItem(newPost);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(event: FormEvent<CommentEvent>) {

    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      description: form.controls.description.value,
    }
    try {
      await api.post(`/posts/${postDetailItem._id}/comments`, data, getAutheader());
      const response = await api.get(`/posts/${postDetailItem._id}`, getAutheader());
      SetpostDetailItem(response.data);
    }

    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col w-full overflow-auto scroll-smooth">
      <div>
        {postDetailItem && <PostItem post={postDetailItem} handleLike={handleLike} />}

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <Text asChild className="mx-8 my-8 font-extrabold">Add a comment</Text>
          <TextInput.Root>
            <TextInput.Input
              placeholder="Type your comment here"
              className="bg-slate-300 w-full h-16 rounded-lg p-4"
              required
              id="description"
            />
          </TextInput.Root>
          <Button type="submit" className="mx-8 my-8 font-extrabold">
            Add Comment
          </Button>
          <section className="border-t border-slate-400 w-full">
            <Text asChild className="mx-8 my-8 font-extrabold">Comments</Text>
            <ul>
              {postDetailItem.comments.map((comment) => (
                <li className="my-8 mx-8 border rounded-lg border-slate-400 p-4">
                  <div className="flex  items-center  gap-1">
                    <UserCircle
                      size={32}
                      weight="fill"
                      className="text-slate-300"
                    />
                    <Text size="sm" className="text-slate-300">
                      {postDetailItem.profile.name ? postDetailItem.profile.name : user}
                    </Text>
                    <Text size="sm" className="text-slate-300">
                      {
                        comment
                      }
                    </Text>
                  </div>
                </li>
              ))}

            </ul>
          </section>
        </form>
      </div>
    </div>
  )
}
export default PostDetailItem;