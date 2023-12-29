import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button, ContainerForm, Form } from "./styles";
import { CreateUserFormDataRegister, createUserFormRegister } from "./validationZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/useAuth";
import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { HandleSpin } from "../../components/Spin";


export function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormDataRegister>({
        resolver: zodResolver(createUserFormRegister)
    });
    const auth = useAuth()
    const navigate = useNavigate()

    async function getUser(data: CreateUserFormDataRegister) {
        console.log(data)
        if(data.password === data.passwordConfirme) {
            try {
                await auth.createUser(data.email, data.password)
                reset()
                navigate("/login")
            } catch (error) {
                if(error instanceof FirebaseError) {
                    await auth.fireBaseErrors(error.code)
                }
            }
        } else {
            auth.notificationGlobal({
                message: "Senhas incopatíveis",
                type: "info",
                description: "Verifique se as senhas são iguais"
            })
        }
    }
    return(
        <ContainerForm>
            <div className="header_form">
                <h2>Crie sua conta</h2>
            </div>
            <Form onSubmit={handleSubmit(getUser)}>
                <div className="container_inputs">
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
                {auth.handleSpinState ? <HandleSpin /> : "Cadastrar"}
                </Button>
                <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
                <Link to="/">voltar para home</Link>
            </Form>
        </ContainerForm>
    )
}