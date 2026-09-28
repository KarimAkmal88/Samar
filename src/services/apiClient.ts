import axios from "axios";

export const apiClient = axios.create({baseURL: 'https://route-posts.routemisr.com/'})