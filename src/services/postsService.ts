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
        const { data } = await apiClient.delete('posts/' + postId, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    }

    async CreatePost(formData: FormData){
        const {data} = await apiClient.post('posts', formData , {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data;
    }

    async EditPost(formData: FormData, postId: string){
        const {data} = await apiClient.put('posts/' + postId, formData, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data;
    }
}

export const postsServices = new PostsServices();