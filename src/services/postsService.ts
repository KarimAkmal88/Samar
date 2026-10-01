import { apiClient } from "./apiClient";

class PostsServices {
    async getAllPosts() {
         const {data} = await apiClient.get('posts', {
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                return data;
    }
}

export const postsServices = new PostsServices();