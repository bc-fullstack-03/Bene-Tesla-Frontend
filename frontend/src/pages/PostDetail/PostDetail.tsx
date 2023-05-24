import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import PostDetailItem from "../../components/PostDetailItem /PostDetailItem";
import { Post } from "../../model/Post";
import { getAutheader } from "../../services/Auth";
import api from "../../services/api";
function PostDetail() {
    const { postId } = useParams();
    const [PostDetail, setPostDetail] = useState<Post>();
    useEffect(() => {
        async function getPostDetail() {
            try {
                const { data } = await api.get(`/posts/${postId}`, getAutheader());
                setPostDetail(data);
            } catch (err) {
                console.debug(err);
            }
        }
        getPostDetail();
    }, []);


    return (
        <MainScreen>
            {PostDetail && <PostDetailItem postDetailItem={PostDetail}  SetpostDetailItem={setPostDetail}/>}
        </MainScreen>
    )
}
export default PostDetail;