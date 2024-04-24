import { InputHTMLAttributes, useState } from "react";
import { ContainerInput } from "./styles";
import { UseFormRegister } from "react-hook-form";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    textLabel: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    registerName: "nome" | "sobrenome" | "email" | "password" | "passwordConfirme";
}

export function Input({ textLabel, type, register, registerName, ...rest }: InputProps) {

    const [isShow, setIsShow] = useState(false)
    
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
                        type={isShow ? "text" : "password"}
                        {...register(registerName)} 
                        {...rest}
                    />
                    { isShow 
                        ? <i className='bx bxs-show' onClick={() => setIsShow(false)}></i> 
                        : <i className='bx bxs-hide' onClick={() => setIsShow(true)}></i> 
                    }
                </div>
            </ContainerInput>
        )
    }

    return (
        <ContainerInput>
            <label htmlFor="">{textLabel}</label>
            <div className="input">
                <i className='bx bxs-user'></i>
                <input 
                    type={type}
                    {...register(registerName)} 
                    {...rest}
                />
            </div>
        </ContainerInput>
    )
}