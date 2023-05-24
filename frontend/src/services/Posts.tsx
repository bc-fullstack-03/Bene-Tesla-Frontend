import {Post} from '../model/Post';
import api from './api';
import { getAutheader } from './Auth';


async function likePost(post: Post, profile: string): Promise<Post> {
   api.post(`/posts/${post._id}/like`, null , getAutheader());
   return like(post, profile);
}

function like(post: Post, profile: string){
    post.likes.push(profile);
    return post;
}

async function  dislikePost(post: Post, profile: string): Promise<Post>{
    api.post(`/posts/${post._id}/unlike`, null , getAutheader());
    return unlikes(post, profile);
}

function unlikes(post: Post, profile: string){
    const index = post.likes.indexOf(profile);
    post.likes.splice(index, 1);
    return post;
}

export {likePost, dislikePost};