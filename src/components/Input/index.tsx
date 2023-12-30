import { InputHTMLAttributes } from "react";
import { ContainerInput } from "./styles";
import { UseFormRegister } from "react-hook-form";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    textLabel: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    registerName: "email" | "password" | "passwordConfirme";
    // value?: string | undefined;
}

export function Input({ textLabel, type, register, registerName, ...rest }: InputProps) {
    if(registerName === "email") {
        return (
            <ContainerInput>
                <label htmlFor="">{textLabel}</label>
                <div className="input">
                <i className='bx bxs-envelope'></i>
                    <input 
                        type={type}
                        {...register(registerName)} 
                        {...rest}
                    />
                </div>
            </ContainerInput>
        )
    }
    if(registerName === "password" || registerName === "passwordConfirme") {
        return (
            <ContainerInput>
                <label htmlFor="">{textLabel}</label>
                <div className="input">
                    <i className='bx bxs-lock-alt'></i>
                    <input 
                        type={type}
                        {...register(registerName)} 
                        {...rest}
                    />
                </div>
            </ContainerInput>
        )
    }
}