import {  useEffect, useState, type ReactElement } from "react"
import { authServices } from "../services/authService";
import type { UserI } from "../interfaces/userI";
import { authContext } from "./authContext";


export default function AuthContextProvider({ children, }: { children: ReactElement }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<UserI | undefined>();
    const [isLoading, setIsLoading] = useState(() => {
        return !!localStorage.getItem('token');
    });


    useEffect(() => {
        if (localStorage.getItem('token')) {
            async function restoreSession() {
                try {
                    const { data } = await authServices.getUserData();
                    setUserData(data.user);
                    setIsLoggedIn(true);
                } catch {
                    setIsLoggedIn(false);
                    localStorage.removeItem('token')
                } finally {
                    setIsLoading(false);
                }
            }
            restoreSession()
        }
    }, []);

    return (
        <authContext.Provider value={{ isLoggedIn, isLoading, setIsLoggedIn, userData }}>
            {children}
        </authContext.Provider>
    )
}
