import React from "react";
import {Form, Input, Button, Select, SelectItem, } from "@heroui/react";
import {EyeSlashFilledIcon, EyeFilledIcon} from '../types/Icons'
import {gender} from '../types/gender'
import { getInputProps } from "../utils/helpers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/signUpSchema";

export default function SignUp() {

    
    const [isVisible, setIsVisible] = React.useState(false);
    const [reIsVisible, setReIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleReVisibility = () => setReIsVisible(!reIsVisible);

    const {handleSubmit, register, formState: {errors}, reset} = useForm({resolver: zodResolver(signUpSchema), mode: "onBlur"})

    function signUp(data){
      console.log(data)
    }


  return (
   <div className="min-h-screen flex items-center justify-center">
     <Form
      className="w-full max-w-3xl grid gap-4 bg-surface m-auto text-text-primary border border-text-secondary px-2 rounded-xl p-6" onSubmit={handleSubmit(signUp)}>
      <Input
        {...register('name')}
        {...getInputProps('text', 'Full Name')}
        isInvalid={!!errors.name?.message}
        errorMessage={errors.name?.message as string}
        labelPlacement="outside"
        placeholder="Enter your name"
      />

      <Input
        {...register('email')}
        {...getInputProps("email", "Email")}
        isInvalid={!!errors.email?.message}
        errorMessage={errors.email?.message as string}
        labelPlacement="outside"
        placeholder="Enter your email"
      />
      <Input classNames={{innerWrapper: `flex justify-between`}}
      {...register('password')}
      isInvalid={!!errors.password?.message}
      errorMessage={errors.password?.message as string}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
        label="Password"
        placeholder="Enter your password"
        type={isVisible ? "text" : "password"}
        variant="bordered"
      />
      <Input classNames={{innerWrapper: `flex justify-between`}}
      {...register('rePassword')}
      isInvalid={!!errors.rePassword?.message}
      errorMessage={errors.rePassword?.message as string}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent"
          type="button"
          onClick={toggleReVisibility}
        >
          {reIsVisible ? (
            <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
        label="Confirm Password"
        placeholder="Confirm your password"
        type={reIsVisible ? "text" : "password"}
        variant="bordered"
      />

      <Input
        {...register('dateOfBirth')}
        isInvalid={!!errors.dateOfBirth?.message}
        errorMessage={errors.dateOfBirth?.message as string}
        label="Date of birth"
        labelPlacement="outside"
        name="dateOfBirth"
        type="date"
      />
      
      <Select classNames={{listbox: `bg-white`, trigger: `flex flex-row justify-between`, selectorIcon: `data-[open=true]:rotate-180`}}
      items={gender}
      placeholder="Select your gender"
      {...register('gender')}
      >
      {(gender) => <SelectItem>{gender.label}</SelectItem>}
      </Select>

      <div className="flex gap-6 items-center justify-center">
        <Button color="primary" type="submit" className="border border-text-secondary px-2 rounded-xl">
          Sign Up
        </Button>
        <Button  className="border border-text-secondary px-2 rounded-xl" onClick={() => reset()}>
          Reset
        </Button>
      </div>
    </Form>
   </div>
  )
}
