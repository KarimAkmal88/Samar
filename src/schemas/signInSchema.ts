import * as z from 'zod';
import { regex } from './../utils/regex'

export const signInSchema = z.object({
    email: z.string()
        .nonempty('Email is required')
        .regex(regex.email, 'Enter a valid email address'),
    password: z.string().nonempty('Please enter a password')
})

export type LoginData = z.output<typeof signInSchema>;