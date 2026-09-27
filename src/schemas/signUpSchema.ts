import { regex } from './../utils/regex';
import * as z from 'zod'

export  const signUpSchema = z.object({
    name: z.string()
           .nonempty(`Name shouldn't be empty`)
           .min(3, 'Name must be at least 3 characters')
           .max(20, `Name shouldn't be more than 20 characters`),
    email: z.string()
            .nonempty('Email is required')
            .regex(regex.email, 'Enter a valid email address'),
    password: z.string().nonempty('Please enter a password')
                .regex(regex.password, `Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`),
    rePassword: z.string().nonempty('Please confirm your password'),
    dateOfBirth: z.coerce.date({
        message: 'Birth date is required'
    }).refine((date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const birthDateClean = new Date(date);
        birthDateClean.setHours(0, 0, 0, 0);
        const cutDate = new Date(
            today.getFullYear() -18 ,
            today.getMonth(),
            today.getDate()
        );
        return birthDateClean <= cutDate;
    }, {
        message: `You must be at least 18 years old to register.`,
    }),
    gender: z.string().nonempty('Please select a Gender').regex(regex.gender, `Gender must be Male or Female`),
}).refine((data) => data.password == data.rePassword, {
    message: `Password and confirm password should match`,
    path: ['rePassword']
});