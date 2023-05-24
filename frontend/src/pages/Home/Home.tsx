import { useEffect, useState } from 'react';
import Feed from '../../components/Feed/Feed';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Post } from '../../model/Post';
import { getAutheader, getProfile } from '../../services/Auth';
import { dislikePost, likePost } from '../../services/Posts';
import api from '../../services/api';

function Home() {
    const profile = getProfile();
    const [posts, setPosts] = useState<Post[]>([]);
    const authHeader = getAutheader();
    useEffect(() => {
        async function getPosts() {
            try {
                const { data } = await api.get('/feed', authHeader);
                setPosts(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        getPosts();
    }, []);
    async function postCreated(post: Post) {
        try {

            const { data } = await api.get(`/posts/${post._id}`, authHeader);
            setPosts((posts) => [data, ...posts]);
        } catch (err) {
            console.log(err);
        }
    }
    async function handleLike(postId: number) {
        const [post, ...rest] = posts.filter((post) => post._id === postId);
        try {
            if (post && !post.likes.includes(profile)) {
                const newPost = await likePost(post, profile);
                changesPosts(newPost);
            }else{
                const newPost = await dislikePost(post, profile);
                changesPosts(newPost);                         
            }
            return rest;

        }
        catch (err) {
            console.log(err);
        }
    }
    function changesPosts(newPost: Post) {
        setPosts((posts) => {
            const post = newPost;
            const index = posts.indexOf(post);
            posts[index] = post;
            return [...posts];
        });
    }

    return (
        <MainScreen postCreated={postCreated}>
            <Feed post={posts} handleLike={handleLike} />
        </MainScreen>
    )

}

export default Home;