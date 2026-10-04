import { apiClient } from "./apiClient";

class PostsServices {
    async getAllPosts() {
        const { data } = await apiClient.get('posts', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data;
    }

    async DeletePost(postId: string) {
        const { data } = await apiClient.delete('post' + postId, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    }
}

export const postsServices = new PostsServices();