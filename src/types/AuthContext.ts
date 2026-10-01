import type { Dispatch, SetStateAction } from "react"
import type { UserI } from "../interfaces/userI"

export type AuthContextType = {
    isLoggedIn: boolean,
    isLoading: boolean,
    userData: UserI | undefined,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    logout: () => void,
}