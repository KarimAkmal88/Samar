import type { RegisterData } from "../schemas/signUpSchema";
import { apiClient } from "./apiClient";


class AuthServices {

    async signUp(registerData: RegisterData) {
        const { data } = await apiClient.post('users/signup', registerData);
        return data;
    }
}

export const authServices = new AuthServices()