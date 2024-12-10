import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button, ContainerForm, ContainerRegister, Form } from "./styles";
import { CreateUserFormDataRegister, createUserFormRegister } from "./validationZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { HandleSpin } from "../../components/Spin";
import { Notification } from "../../components/Notification";


export function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormDataRegister>({
        resolver: zodResolver(createUserFormRegister)
    });
    const auth = useAuth()
    const navigate = useNavigate()
    const { notify } = Notification()

    async function getUser(data: CreateUserFormDataRegister) {
        console.log(data)
        if(data.password === data.passwordConfirme) {
            try {
                await auth.createUser(data.nome, data.sobrenome, data.email, data.password)
                reset()
                navigate("/login")
            } catch (error) {
                if(error instanceof FirebaseError) {
                    auth.fireBaseErrors(error.code)
                }
            }
        } else {
            notify({
                message: "Senhas incopatíveis",
                type: "info",
            })
        }
    }
    return(
        <ContainerRegister>
            <ContainerForm>

                <div className="header_form">
                    <h2>Crie sua conta</h2>
                </div>

                <Form onSubmit={handleSubmit(getUser)}>

                    <div className="container_inputs">
                        <Input 
                            textLabel="Nome"
                            type="text"
                            placeholder="Digite seu nome"
                            register={register}
                            registerName="nome"
                        />
                        { errors.nome && <span>{ errors.nome.message }</span> }

                        <Input 
                            textLabel="Sobrenome"
                            type="text"
                            placeholder="Digite seu sobrenome"
                            register={register}
                            registerName="sobrenome"
                        />

                        <Input 
                            textLabel="E-mail"
                            type="text"
                            placeholder="Digite seu e-mail"
                            register={register}
                            registerName="email"
                        />
                        { errors.email && <span>{ errors.email.message }</span> }

                        <Input 
                            textLabel="Senha"
                            type="password"
                            placeholder="Digite sua senha"
                            register={register}
                            registerName="password"
                        />
                        { errors.password && <span>{ errors.password.message }</span> }

                        <Input 
                            textLabel="Confirme sua senha"
                            type="password"
                            placeholder="Digite sua senha"
                            register={register}
                            registerName="passwordConfirme"
                        />
                        { errors.password && <span>{ errors.password.message }</span> }
                    </div>

                    <Button type="submit">
                        {
                            auth.handleSpinState 
                                ? <HandleSpin typeColor="spin_violet"/>  
                                : "Cadastrar"
                        }
                    </Button>

                    <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>

                    <Link to="/">voltar para home</Link>

                </Form>
                </ContainerForm>
        </ContainerRegister>
    )
}