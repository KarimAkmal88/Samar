import type { AuthContextType } from './../types/AuthContext';
import { createContext } from "react";

export const authContext = createContext<AuthContextType | undefined>(undefined);